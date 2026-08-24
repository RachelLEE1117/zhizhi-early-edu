import type { Activity, DailyBundle, StageKey, ThemeKey } from '../types';
import { ACTIVITIES, byId } from '../data/activities';
import { THEMES, THEME_ORDER, THEME_LIST } from '../data/themes';
import { SCENES } from '../data/language';
import { SSS_SONGS, TPR_GAMES, SHORT_SENTENCES, WORD_BANK } from '../data/english';
import { DAILY_REMINDERS } from '../data/principles';

// ============ 时间工具 ============
const WEEK_NAMES = ['日', '一', '二', '三', '四', '五', '六'];

function localMidnight(d: Date): Date {
  return new Date(d.getFullYear(), d.getMonth(), d.getDate());
}

export function daysBetween(a: Date, b: Date): number {
  return Math.round((localMidnight(b).getTime() - localMidnight(a).getTime()) / 86400000);
}

export function ageInMonths(birth: string, ref: Date): number {
  const [y, m, day] = birth.split('-').map(Number);
  let months = (ref.getFullYear() - y) * 12 + (ref.getMonth() - m);
  if (ref.getDate() < (day || 1)) months -= 1;
  return months;
}

export function stageOf(months: number): StageKey {
  if (months < 19) return '13-18';
  if (months < 25) return '19-24';
  return '25-36';
}

export function stageLabel(s: StageKey): string {
  return { '13-18': '13-18 月龄', '19-24': '19-24 月龄', '25-36': '25-36 月龄' }[s];
}

// 主题周基准日：2026-08-24（周一）= 第 1 周（颜色周）
const THEME_BASE = new Date(2026, 7, 24);

export function weekNoOf(ref: Date): number {
  const weeks = Math.floor(daysBetween(THEME_BASE, ref) / 7);
  return ((weeks % 7) + 7) % 7 + 1; // 1-7
}

export function themeOfWeek(ref: Date) {
  return THEME_LIST[weekNoOf(ref) - 1];
}

export function dateKeyOfLocal(d: Date): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

export function dateLabelOf(d: Date): string {
  return `${d.getMonth() + 1}月${d.getDate()}日 周${WEEK_NAMES[d.getDay()]}`;
}

// ============ 确定性轮换选取：同一天全设备内容一致，每天自动更新 ============
const EPOCH = new Date(2026, 0, 1);

function dayIndex(d: Date): number {
  return daysBetween(EPOCH, d);
}

/** 从池子里按日期取 n 个（含起点旋转，去重） */
function pickN<T>(pool: T[], dayIdx: number, n: number): T[] {
  if (pool.length === 0) return [];
  const out: T[] = [];
  for (let i = 0; i < n; i++) out.push(pool[(dayIdx + i) % pool.length]);
  return out;
}

function poolFor(domain: string, stage: StageKey, d: Date): Activity[] {
  const dayIdx = dayIndex(d);
  return ACTIVITIES.filter(
    (a) => a.domain === domain && a.stages.includes(stage) && (a.crawl || stage !== '19-24')
  ).sort((a, b) => a.id.localeCompare(b.id));
}

// ============ 每日生成 ============
export function generateDaily(d: Date, stage: StageKey): DailyBundle {
  const dayIdx = dayIndex(d);
  const theme = themeOfWeek(d);

  // --- 精细动作：3 个（主题周优先 1 个主题活动） ---
  const finePool = poolFor('精细动作', stage, d);
  const fineTheme = finePool.filter((a) => a.themes.includes(theme.key as ThemeKey));
  const fineRest = finePool.filter((a) => !fineTheme.includes(a));
  const finePicked = fineTheme.slice(0, 1);
  const fine: Activity[] = [...finePicked, ...pickN(fineRest, dayIdx, 3 - finePicked.length)];

  // --- 语言启蒙：2 个场景 + 本周主题话术 ---
  const langScenes = pickN(SCENES, dayIdx, 2);

  // --- 认知启蒙：本周 2 个主题认知点 + 1 个轮换认知点 ---
  const cognition = [
    {
      title: `本周主题：${theme.name.replace('周', '')}`,
      point: theme.focus[0],
      guide: ['实物指认：找到家里的对应实物，拿在手里说名字', '场景教学：融入吃饭/穿衣/散步的真实场景', '游戏输入：用配对、指认、藏猫猫的形式玩出来', '重复巩固：同一点本周每天都出现，宝宝记得牢']
    },
    {
      title: `本周主题：${theme.name.replace('周', '')}`,
      point: theme.focus[1],
      guide: ['每天只精讲 1 个认知点，不贪多', '说名称时把物品放到宝宝手里，多感官输入', '宝宝指对时夸张鼓励；指错不纠正，再示范一遍', '本周结束后下个月还会循环回来']
    },
    {
      title: '轮换认知点',
      point: theme.focus[2],
      guide: ['先观察宝宝今天对什么感兴趣，顺势而为', '认知融入游戏：配对、分类、找一找', '一次只玩 5 分钟，兴趣下降就停', '今天不想玩没关系，明天再来']
    }
  ];

  // --- 英文启蒙：主题词 4 个 + 轮换词 1 个 + 主题句 2 句 + 周歌 + 当日 TPR ---
  const themeWords = theme.enWords;
  const extraPool = (WORD_BANK[theme.key] || []).filter(
    (w) => !themeWords.some((t) => t.en === w.en)
  );
  const enWords = [...themeWords, ...pickN(extraPool.length ? extraPool : SHORT_SENTENCES.map((s) => ({ en: s.en.split('.')[0], cn: s.cn })), dayIdx, 1)];
  const enSentences = [...theme.enSentences, ...pickN(SHORT_SENTENCES, dayIdx, 1)];
  const song = SSS_SONGS.find((s) => s.id === theme.songId) || SSS_SONGS[0];
  const tpr = TPR_GAMES[dayIdx % TPR_GAMES.length];

  // --- 大运动+感统：3 个（爬行期适配） ---
  const grossPool = poolFor('大运动', stage, d);
  const gross = pickN(grossPool, dayIdx, 3);

  // --- 发育观察重点 & 养育提醒 ---
  const observe = {
    focus: [
      '大运动：扶站时双脚是否越来越稳？有没有尝试短暂松手？',
      '精细动作：能用拇食指捏起小东西了吗？',
      '语言：今天新发出了什么音？听懂了几次指令？',
      '专注力：今天最长的一次自主操作持续了多久？'
    ],
    reminder: [theme.observeNote, ...pickN(DAILY_REMINDERS, dayIdx, 1)]
  };

  return {
    dateKey: dateKeyOfLocal(d),
    dateLabel: dateLabelOf(d),
    weekNo: weekNoOf(d),
    theme,
    fine,
    langScenes,
    langThemeTalk: theme.talk,
    cognition,
    enWords,
    enSentences,
    song,
    tpr,
    gross,
    observe
  };
}
