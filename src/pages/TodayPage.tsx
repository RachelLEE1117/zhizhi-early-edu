import { useEffect, useMemo, useRef, useState } from 'react';
import { useStore } from '../store';
import type { DailyBundle, TodayModuleKey } from '../types';
import { ageInMonths, generateDaily, stageOf } from '../engine/daily';
import { Checkbox, ProgressBar, SpeakButton, PlayAllButton } from '../components/ui';
import ActivityCard from '../components/ActivityCard';

const MODULES: { key: TodayModuleKey; emoji: string; title: string; sub: string; color: string; soft: string }[] = [
  { key: 'fine', emoji: '🖐️', title: '精细动作&专注力', sub: '3 个真实生活小游戏', color: '#FF8FAB', soft: '#FFE9EF' },
  { key: 'lang', emoji: '💬', title: '语言启蒙', sub: '高频口语话术', color: '#FFA94D', soft: '#FFF1DE' },
  { key: 'cog', emoji: '🧠', title: '认知启蒙', sub: '本周主题 + 引导方式', color: '#62B6E8', soft: '#E5F5FD' },
  { key: 'en', emoji: '🔤', title: '英文启蒙', sub: '磨耳朵 · 点击播放', color: '#A78BDA', soft: '#F1EAFB' },
  { key: 'gross', emoji: '🏃', title: '大运动+感统', sub: '爬行期适配 · 3 个活动', color: '#7FCB6E', soft: '#ECF8E7' },
  { key: 'observe', emoji: '👀', title: '发育观察&养育提醒', sub: '今日关注', color: '#C99A6B', soft: '#F8F0E6' }
];

function ModuleCard({
  bundle,
  mod,
  innerRef,
  children
}: {
  bundle: DailyBundle;
  mod: (typeof MODULES)[number];
  innerRef?: (el: HTMLElement | null) => void;
  children: React.ReactNode;
}) {
  const done = useStore((s) => (s.todayDone[bundle.dateKey] || []).includes(mod.key));
  const toggleToday = useStore((s) => s.toggleToday);
  const [collapsed, setCollapsed] = useState(false);
  return (
    <section className="module-card" data-module={mod.key} ref={innerRef}>
      <div className={`module-head${collapsed ? ' collapsed' : ''}`} onClick={() => setCollapsed(!collapsed)}>
        <span className="mh-emoji" style={{ background: mod.soft }}>
          {mod.emoji}
        </span>
        <div className="mh-info">
          <div className="mh-title" style={{ color: mod.color }}>
            {mod.title}
          </div>
          <div className="mh-sub">{mod.sub}</div>
        </div>
        <Checkbox checked={done} onToggle={() => toggleToday(bundle.dateKey, mod.key)} />
        <span className="mh-arrow">▼</span>
      </div>
      {!collapsed && <div className="module-body">{children}</div>}
    </section>
  );
}

export default function TodayPage() {
  const settings = useStore((s) => s.settings);
  const setPage = useStore((s) => s.setPage);
  const todayDone = useStore((s) => s.todayDone);
  const [active, setActive] = useState<string>('fine');
  const refs = useRef<Record<string, HTMLElement | null>>({});

  const today = new Date();
  const months = ageInMonths(settings.birth, today);
  const stage = stageOf(months);
  const bundle = useMemo(() => generateDaily(today, stage), [stage]);

  const doneList = todayDone[bundle.dateKey] || [];
  const doneCount = MODULES.filter((m) => doneList.includes(m.key)).length;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            const key = (e.target as HTMLElement).dataset.module;
            if (key) setActive(key);
          }
        }
      },
      { rootMargin: '-15% 0px -70% 0px' }
    );
    MODULES.forEach((m) => {
      const el = refs.current[m.key];
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [bundle.dateKey]);

  const scrollTo = (key: string) => {
    refs.current[key]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const refFor = (key: string) => (el: HTMLElement | null) => {
    refs.current[key] = el;
  };

  return (
    <div className="page">
      <div className="day-banner">
        <div className="db-date">
          🗓 {bundle.dateLabel} · 之之 {months} 个月
        </div>
        <div className="db-theme">
          第 {bundle.weekNo} 周 <b>{bundle.theme.emoji} {bundle.theme.name}</b> · 每周主题自动轮换
        </div>
        <div className="db-progress">
          <div style={{ fontSize: 12, marginBottom: 4, color: 'var(--ink-soft)' }}>
            今日完成 {doneCount}/{MODULES.length}
          </div>
          <ProgressBar value={doneCount / MODULES.length} color={bundle.theme.color} />
        </div>
      </div>

      <div className="today">
        <nav className="today-checklist">
          {MODULES.map((m) => {
            const isDone = doneList.includes(m.key);
            return (
              <button
                key={m.key}
                className={`cl-item${active === m.key ? ' active' : ''}${isDone ? ' done' : ''}`}
                onClick={() => scrollTo(m.key)}
              >
                <span className="cl-emoji">{m.emoji}</span>
                <span className="cl-name">
                  {m.title.replace('&专注力', '').replace('&养育提醒', '')}
                </span>
                <Checkbox checked={isDone} onToggle={() => useStore.getState().toggleToday(bundle.dateKey, m.key)} />
              </button>
            );
          })}
        </nav>

        <div className="today-body">
          {/* 1. 精细动作 */}
          <ModuleCard bundle={bundle} mod={MODULES[0]} innerRef={refFor('fine')}>
            <div className="notice">
              🛡️ <b>专注力守则</b>：宝宝自主操作时，不打断、不催促、不提问、不干预。完成了笑一笑，没完成也没关系。
            </div>
            {bundle.fine.map((a) => (
              <ActivityCard key={a.id} a={a} />
            ))}
          </ModuleCard>

          {/* 2. 语言启蒙 */}
          <ModuleCard bundle={bundle} mod={MODULES[1]} innerRef={refFor('lang')}>
            <div className="notice">💡 全程生活化对话：在对应场景里自然地说，不要求宝宝跟读，不背诵。</div>
            {bundle.langScenes.map((sc) => (
              <div key={sc.id} className="activity-item">
                <div className="ai-title">
                  {sc.emoji} {sc.scene}
                </div>
                {sc.sentences.map((s) => (
                  <div key={s.text} className="bubble">
                    {s.text}
                    {s.tip && <span className="b-tip">💡 {s.tip}</span>}
                  </div>
                ))}
              </div>
            ))}
            <div className="activity-item">
              <div className="ai-title">🌈 本周主题话术（{bundle.theme.name}）</div>
              {bundle.langThemeTalk.map((t) => (
                <div key={t} className="bubble" style={{ background: 'var(--orange-soft)' }}>
                  {t}
                </div>
              ))}
            </div>
          </ModuleCard>

          {/* 3. 认知启蒙 */}
          <ModuleCard bundle={bundle} mod={MODULES[2]} innerRef={refFor('cog')}>
            <div className="notice">🚫 无书面化教学：只用实物指认、场景教学、游戏输入。</div>
            {bundle.cognition.map((c, i) => (
              <div key={i} className="activity-item">
                <div className="ai-title">🔍 {c.point}</div>
                <div className="ai-meta">
                  <span className="m">
                    <span className="m-label">📌 {c.title}</span>
                  </span>
                </div>
                <ul className="ai-steps">
                  {c.guide.map((g) => (
                    <li key={g}>{g}</li>
                  ))}
                </ul>
              </div>
            ))}
          </ModuleCard>

          {/* 4. 英文启蒙 */}
          <ModuleCard bundle={bundle} mod={MODULES[3]} innerRef={refFor('en')}>
            <div className="notice">
              🎧 磨耳朵原则：只输入、不认读、不拼写、无压力。说单词时指实物，建立画面对应。
              <div style={{ marginTop: 6 }}>
                <PlayAllButton
                  texts={[...bundle.enWords.map((w) => w.en), ...bundle.enSentences.map((s) => s.en)]}
                  label="连播今日全部"
                />
              </div>
            </div>
            <div className="en-grid">
              {bundle.enWords.map((w) => (
                <div key={w.en} className="en-word">
                  <div>
                    <div className="ew-en">{w.en}</div>
                    <div className="ew-cn">{w.cn}</div>
                  </div>
                  <SpeakButton text={w.en} />
                </div>
              ))}
            </div>
            <div className="activity-item">
              <div className="ai-title">💬 今日短句</div>
              {bundle.enSentences.map((s) => (
                <div key={s.en} className="en-line">
                  <div>
                    <div className="el-en">{s.en}</div>
                    <div className="el-cn">{s.cn}</div>
                  </div>
                  <SpeakButton text={s.en} />
                </div>
              ))}
            </div>
            <div className="activity-item">
              <div className="ai-title">
                🎵 本周儿歌：{bundle.song.title}
                <span className="chip purple">{bundle.song.cn}</span>
                <SpeakButton text={bundle.song.lyric} rate={0.7} />
              </div>
              <div className="ai-meta">
                <span className="m">
                  <span className="m-label">🎬 互动</span>
                  {bundle.song.action}
                </span>
                <span className="m">
                  <span className="m-label">💡 要点</span>
                  {bundle.song.tip}
                </span>
              </div>
            </div>
            <div className="activity-item">
              <div className="ai-title">
                🙌 今日 TPR：{bundle.tpr.name}
                <span className="chip blue">{bundle.tpr.emoji}</span>
              </div>
              {bundle.tpr.actions.map((a) => (
                <div key={a.en} className="en-line">
                  <div>
                    <div className="el-en">{a.en}</div>
                    <div className="el-cn">{a.cn} · {a.do}</div>
                  </div>
                  <SpeakButton text={a.en} />
                </div>
              ))}
            </div>
          </ModuleCard>

          {/* 5. 大运动+感统 */}
          <ModuleCard bundle={bundle} mod={MODULES[4]} innerRef={refFor('gross')}>
            <div className="notice">
              🐾 之之现在处于<b>爬行期 → 扶站期</b>：以下活动全部按"还不会走路"设计，每天自由进行，不勉强、不训练。
            </div>
            {bundle.gross.map((a) => (
              <ActivityCard key={a.id} a={a} />
            ))}
          </ModuleCard>

          {/* 6. 发育观察&养育提醒 */}
          <ModuleCard bundle={bundle} mod={MODULES[5]} innerRef={refFor('observe')}>
            <div className="activity-item">
              <div className="ai-title">🔎 今日观察重点</div>
              <ul className="ai-steps">
                {bundle.observe.focus.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </div>
            <div className="activity-item">
              <div className="ai-title">🌱 养育提醒</div>
              {bundle.observe.reminder.map((r) => (
                <div key={r} className="bubble" style={{ background: 'var(--green-soft)' }}>
                  {r}
                </div>
              ))}
            </div>
            <button className="btn ghost small" onClick={() => setPage('records')} style={{ marginTop: 8 }}>
              📝 去发育记录页打勾 →
            </button>
          </ModuleCard>
        </div>
      </div>
    </div>
  );
}
