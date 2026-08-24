import { useState } from 'react';
import { THEME_LIST } from '../data/themes';
import { byId } from '../data/activities';
import { themeOfWeek, weekNoOf } from '../engine/daily';
import { SpeakButton } from '../components/ui';
import ActivityCard from '../components/ActivityCard';

export default function ThemesPage() {
  const now = new Date();
  const currentNo = weekNoOf(now);
  const current = themeOfWeek(now);
  const [open, setOpen] = useState<string>(current.key);

  return (
    <div className="page">
      <h1 className="page-title">🌈 每周主题循环</h1>
      <div className="page-sub">7 个主题每周自动轮换 · 每 7 周循环一次 · 内容简单、重复巩固</div>

      <div className="theme-track">
        {THEME_LIST.map((t, i) => (
          <button
            key={t.key}
            className={`theme-week${t.key === current.key ? ' now' : ''}`}
            style={t.key === open ? { outline: '2px solid var(--purple)' } : undefined}
            onClick={() => setOpen(open === t.key ? '' : t.key)}
          >
            <div className="tw-emoji">{t.emoji}</div>
            <div className="tw-name" style={{ color: t.color }}>{t.name}</div>
            <div className="tw-week">
              {t.key === current.key ? `本周 · 第 ${currentNo} 周` : `第 ${i + 1} 周`}
            </div>
          </button>
        ))}
      </div>

      {THEME_LIST.map((t) =>
        open === t.key ? (
          <div key={t.key} className="card">
            <div className="card-title" style={{ color: t.color }}>
              <span className="t-emoji">{t.emoji}</span> {t.name}
              {t.key === current.key && <span className="chip pink">本周进行中</span>}
            </div>

            <div className="activity-item">
              <div className="ai-title">🎯 本周核心认知点</div>
              <ul className="ai-steps">
                {t.focus.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </div>

            <div className="activity-item">
              <div className="ai-title">💬 高频话术</div>
              {t.talk.map((s) => (
                <div key={s} className="bubble" style={{ background: 'var(--orange-soft)' }}>
                  {s}
                </div>
              ))}
            </div>

            <div className="activity-item">
              <div className="ai-title">🔤 英文输入（点击播放）</div>
              <div className="en-grid" style={{ marginTop: 8 }}>
                {t.enWords.map((w) => (
                  <div key={w.en} className="en-word">
                    <div>
                      <div className="ew-en">{w.en}</div>
                      <div className="ew-cn">{w.cn}</div>
                    </div>
                    <SpeakButton text={w.en} />
                  </div>
                ))}
              </div>
              {t.enSentences.map((s) => (
                <div key={s.en} className="en-line" style={{ marginTop: 8 }}>
                  <div>
                    <div className="el-en">{s.en}</div>
                    <div className="el-cn">{s.cn}</div>
                  </div>
                  <SpeakButton text={s.en} />
                </div>
              ))}
            </div>

            <div className="activity-item">
              <div className="ai-title">🧩 本周主打活动</div>
              {t.activityIds.map((id) => {
                const a = byId(id);
                return a ? <ActivityCard key={id} a={a} collapsible /> : null;
              })}
            </div>

            <div className="notice">🔎 {t.observeNote}</div>
          </div>
        ) : null
      )}

      <div className="notice">
        📅 轮换规则：每周一自动切换到下一个主题。同一主题的内容会在每日模块中反复出现（简单、重复、巩固），符合低龄宝宝记忆规律。
      </div>
    </div>
  );
}
