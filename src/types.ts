export type Domain = '精细动作' | '大运动' | '语言认知' | '感官探索' | '生活技能' | '艺术创意';
export type ThemeKey = '颜色' | '水果' | '动物' | '五官' | '日用物品' | '家务' | '自然' | '通用';
export type StageKey = '13-18' | '19-24' | '25-36';

export interface Activity {
  id: string;
  title: string;
  domain: Domain;
  themes: ThemeKey[];
  stages: StageKey[];
  materials: string[];
  steps: string[];
  benefit: string;
  tips?: string;
  minutes?: number;
  crawl: boolean; // 爬行期（不会走路）也能玩
}

export interface SceneScript {
  id: string;
  scene: string;
  emoji: string;
  sentences: { text: string; tip?: string }[];
}

export interface EnWord { en: string; cn: string; }
export interface EnSentence { en: string; cn: string; }

export interface SssSong {
  id: string;
  title: string;
  cn: string;
  lyric: string;      // 关键歌词（可语音播放）
  lyricCn: string;
  action: string;     // 亲子互动建议
  tip: string;        // 磨耳朵要点
}

export interface TprGame {
  id: string;
  name: string;
  emoji: string;
  actions: { en: string; cn: string; do: string }[];
  tip: string;
}

export interface ParentPhrase { scene: string; emoji: string; phrases: EnSentence[]; }

export interface ThemePack {
  key: ThemeKey;
  name: string;
  emoji: string;
  color: string;
  focus: string[];          // 核心认知点
  talk: string[];           // 本周高频话术
  enWords: EnWord[];
  enSentences: EnSentence[];
  songId: string;
  activityIds: string[];    // 本周主打活动
  observeNote: string;
}

export interface MilestoneItem { id: string; text: string; hint?: string; }
export interface MilestoneGroup {
  key: string;
  name: string;
  emoji: string;
  color: string;
  items: MilestoneItem[];
}
export interface StageMilestones {
  stage: StageKey;
  label: string;
  note: string;
  groups: MilestoneGroup[];
}

export interface MaterialPack {
  home: string[];
  food: string[];
  upgrade: string[];
  diy: string[];
}

export interface SpaceZone {
  key: string;
  name: string;
  emoji: string;
  color: string;
  items: string[];
  safety: string[];
}

export type TodayModuleKey = 'fine' | 'lang' | 'cog' | 'en' | 'gross' | 'observe';

export interface DailyBundle {
  dateKey: string;
  dateLabel: string;
  weekNo: number;       // 主题周序号（1-7 循环）
  theme: ThemePack;
  fine: Activity[];
  langScenes: SceneScript[];
  langThemeTalk: string[];
  cognition: { title: string; point: string; guide: string[] }[];
  enWords: EnWord[];
  enSentences: EnSentence[];
  song: SssSong;
  tpr: TprGame;
  gross: Activity[];
  observe: { focus: string[]; reminder: string[] };
}
