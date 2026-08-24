import { useState } from 'react';
import type { Activity } from '../types';

export default function ActivityCard({ a, collapsible = false }: { a: Activity; collapsible?: boolean }) {
  const [open, setOpen] = useState(!collapsible);
  return (
    <div className="activity-item">
      <div className="ai-title" style={collapsible ? { cursor: 'pointer' } : undefined} onClick={collapsible ? () => setOpen(!open) : undefined}>
        <span>{a.title}</span>
        <span className="chip gray">⏱ {a.minutes ?? 8} 分钟</span>
        {a.crawl && <span className="chip green">爬行期 ✓</span>}
        {collapsible && <span style={{ marginLeft: 'auto', color: 'var(--ink-soft)', fontSize: 13 }}>{open ? '收起 ▲' : '展开 ▼'}</span>}
      </div>
      <div className="ai-mats">
        {a.materials.map((m) => (
          <span key={m} className="mat">🧺 {m}</span>
        ))}
      </div>
      {open && (
        <>
          <ol className="ai-steps">
            {a.steps.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ol>
          <div className="ai-meta">
            <span className="m">
              <span className="m-label">🎯 锻炼</span>
              {a.benefit}
            </span>
            {a.tips && (
              <span className="m">
                <span className="m-label">💡 贴士</span>
                {a.tips}
              </span>
            )}
          </div>
        </>
      )}
    </div>
  );
}
