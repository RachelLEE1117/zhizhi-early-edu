import { PRINCIPLES, FORBIDDEN, DAILY_REMINDERS } from '../data/principles';

export default function PrinciplesPage() {
  return (
    <div className="page">
      <h1 className="page-title">🌱 之之的养育原则</h1>
      <div className="page-sub">固定不变 · 贴在心里的五条原则</div>

      <div className="card">
        {PRINCIPLES.map((p, i) => (
          <div key={p.title} className="principle">
            <span className="p-num" style={{ background: p.color, fontSize: 15 }}>
              {i + 1}
            </span>
            <div>
              <div style={{ fontWeight: 800, fontSize: 15.5 }}>
                {p.emoji} {p.title}
              </div>
              <div style={{ fontSize: 14, color: 'var(--ink-soft)', marginTop: 2 }}>{p.text}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="card">
        <div className="card-title">
          <span className="t-emoji">🚫</span> 严格禁止
        </div>
        {FORBIDDEN.map((f) => (
          <div key={f.text} className="principle" style={{ padding: '7px 0' }}>
            <span className="p-num" style={{ background: '#E58A8A', fontSize: 14 }}>
              {f.emoji}
            </span>
            <span style={{ fontSize: 14.5 }}>{f.text}</span>
          </div>
        ))}
      </div>

      <div className="card">
        <div className="card-title">
          <span className="t-emoji">💝</span> 每日心语
        </div>
        {DAILY_REMINDERS.map((r) => (
          <div key={r} className="bubble" style={{ background: 'var(--pink-soft)' }}>
            {r}
          </div>
        ))}
      </div>
    </div>
  );
}
