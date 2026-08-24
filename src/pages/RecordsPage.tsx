import { useState } from 'react';
import { useStore } from '../store';
import { STAGE_MILESTONES } from '../data/milestones';
import { ageInMonths, stageOf, stageLabel } from '../engine/daily';
import { Checkbox, ProgressBar } from '../components/ui';

export default function RecordsPage() {
  const settings = useStore((s) => s.settings);
  const milestones = useStore((s) => s.milestones);
  const toggleMilestone = useStore((s) => s.toggleMilestone);
  const notes = useStore((s) => s.notes);
  const setNote = useStore((s) => s.setNote);

  const months = ageInMonths(settings.birth, new Date());
  const stage = stageOf(months);
  const stageData = STAGE_MILESTONES.find((s) => s.stage === stage) || STAGE_MILESTONES[1];

  const [onlyUndone, setOnlyUndone] = useState(false);

  return (
    <div className="page">
      <h1 className="page-title">📝 发育观察记录</h1>
      <div className="page-sub">
        五大类测评勾选 · 打勾自动保存到本机 · 随月龄自动切换内容（当前：{stageLabel(stage)} · 之之 {months} 个月）
      </div>

      <div className="notice">
        ⚠️ {stageData.note}
      </div>

      <div style={{ marginBottom: 10 }}>
        <button className="btn ghost small" onClick={() => setOnlyUndone(!onlyUndone)}>
          {onlyUndone ? '👀 查看全部条目' : '🎯 只看未完成'}
        </button>
      </div>

      {stageData.groups.map((g) => {
        const doneCount = g.items.filter((i) => milestones[i.id]?.done).length;
        return (
          <div key={g.key} className="card ms-group">
            <div className="card-title">
              <span className="t-emoji">{g.emoji}</span> {g.name}
              <span className="chip gray" style={{ marginLeft: 'auto' }}>
                {doneCount}/{g.items.length}
              </span>
            </div>
            <div style={{ margin: '8px 0 12px' }}>
              <ProgressBar value={doneCount / g.items.length} color={g.color} />
            </div>
            {g.items
              .filter((i) => (onlyUndone ? !milestones[i.id]?.done : true))
              .map((i) => {
                const m = milestones[i.id];
                return (
                  <div key={i.id} className={`ms-item${m?.done ? ' done' : ''}`}>
                    <Checkbox checked={!!m?.done} onToggle={() => toggleMilestone(i.id)} />
                    <div style={{ flex: 1 }}>
                      <div className="ms-text">{i.text}</div>
                      {i.hint && <div style={{ fontSize: 12, color: 'var(--ink-soft)' }}>💡 {i.hint}</div>}
                      {m?.done && m.date && <div className="ms-date">✓ 完成于 {m.date}</div>}
                    </div>
                  </div>
                );
              })}
            <div className="field" style={{ marginTop: 12 }}>
              <label>📝 {g.name}观察备注（自动保存）</label>
              <textarea
                value={notes[g.key] || ''}
                onChange={(e) => setNote(g.key, e.target.value)}
                placeholder="记下今天的观察小细节，例如：今天扶着沙发横移了 5 步……"
                style={{ width: '100%', padding: '10px 14px', borderRadius: 12, border: '2px solid var(--line)', background: '#FFFDF9', outline: 'none', minHeight: 64, resize: 'vertical' }}
              />
            </div>
          </div>
        );
      })}

      <div className="notice">
        📌 说明：本记录参考儿保观察项目整理，仅供家庭日常观察使用，<b>不能替代儿保体检</b>。任何发育疑问请咨询专业医生。
      </div>
    </div>
  );
}
