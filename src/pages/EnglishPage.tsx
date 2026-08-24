import { useState } from 'react';
import { BASIC_COLORS, SSS_SONGS, TPR_GAMES, PARENT_PHRASES, EN_PRINCIPLES } from '../data/english';
import { SpeakButton, TabRow } from '../components/ui';

export default function EnglishPage() {
  const [tab, setTab] = useState('songs');

  return (
    <div className="page">
      <h1 className="page-title">🔤 英文启蒙</h1>
      <div className="page-sub">SSS 儿歌 · 亲子口语 · TPR 三大模块 | 核心是磨耳朵，不教认读、不背单词</div>

      <div className="card">
        {EN_PRINCIPLES.map((p) => (
          <div key={p} className="principle" style={{ padding: '6px 0' }}>
            <span className="p-num" style={{ background: 'var(--purple)', fontSize: 12, width: 26, height: 26 }}>
              ✓
            </span>
            <span style={{ fontSize: 14 }}>{p}</span>
          </div>
        ))}
      </div>

      <TabRow
        tabs={[
          { key: 'songs', label: '🎵 SSS 儿歌' },
          { key: 'phrases', label: '🗣️ 亲子口语' },
          { key: 'tpr', label: '🙌 TPR 游戏' },
          { key: 'colors', label: '🌈 8 大颜色' }
        ]}
        on={tab}
        setOn={setTab}
      />

      {tab === 'songs' &&
        SSS_SONGS.map((s) => (
          <div key={s.id} className="card">
            <div className="card-title">
              <span className="t-emoji">🎵</span> {s.title}
              <span className="chip purple">{s.cn}</span>
              <SpeakButton text={s.lyric} rate={0.7} />
            </div>
            <div className="bubble" style={{ marginTop: 8 }}>
              {s.lyric}
              <span className="b-tip">{s.lyricCn}</span>
            </div>
            <div className="ai-meta">
              <span className="m">
                <span className="m-label">🎬 互动</span>
                {s.action}
              </span>
            </div>
            <div className="ai-meta">
              <span className="m">
                <span className="m-label">💡 要点</span>
                {s.tip}
              </span>
            </div>
            <div className="notice" style={{ marginTop: 8 }}>
              📻 完整儿歌建议在 QQ音乐/喜马拉雅 搜索 "Super Simple Songs" 每天播放 10-15 分钟；上面的 🔊 按钮可播放关键歌词跟唱。
            </div>
          </div>
        ))}

      {tab === 'phrases' &&
        PARENT_PHRASES.map((p) => (
          <div key={p.scene} className="card">
            <div className="card-title">
              <span className="t-emoji">{p.emoji}</span> {p.scene}
            </div>
            {p.phrases.map((ph) => (
              <div key={ph.en} className="en-line" style={{ marginTop: 8 }}>
                <div>
                  <div className="el-en">{ph.en}</div>
                  <div className="el-cn">{ph.cn}</div>
                </div>
                <SpeakButton text={ph.en} />
              </div>
            ))}
          </div>
        ))}

      {tab === 'tpr' &&
        TPR_GAMES.map((g) => (
          <div key={g.id} className="card">
            <div className="card-title">
              <span className="t-emoji">{g.emoji}</span> {g.name}
            </div>
            {g.actions.map((a) => (
              <div key={a.en} className="en-line" style={{ marginTop: 8 }}>
                <div>
                  <div className="el-en">{a.en}</div>
                  <div className="el-cn">{a.cn} · {a.do}</div>
                </div>
                <SpeakButton text={a.en} />
              </div>
            ))}
            <div className="notice" style={{ marginTop: 8 }}>💡 {g.tip}</div>
          </div>
        ))}

      {tab === 'colors' && (
        <div className="card">
          <div className="card-title">
            <span className="t-emoji">🌈</span> 8 大基础颜色
          </div>
          <div className="page-sub">说颜色时指实物：红苹果、黄香蕉、绿树叶——建立画面对应</div>
          <div className="en-grid">
            {BASIC_COLORS.map((c) => (
              <div key={c.en} className="en-word" style={{ borderLeft: `6px solid ${c.hex}` }}>
                <div>
                  <div className="ew-en">{c.en}</div>
                  <div className="ew-cn">{c.cn}</div>
                </div>
                <SpeakButton text={c.en} />
              </div>
            ))}
          </div>
          <div className="notice" style={{ marginTop: 10 }}>
            🎨 玩法：每天指认 1 种颜色，一周后换一种；把"找红色"变成寻宝游戏："Find something red!"
          </div>
        </div>
      )}
    </div>
  );
}
