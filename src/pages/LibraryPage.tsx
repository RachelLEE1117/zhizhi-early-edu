import { useState } from 'react';
import { ACTIVITIES } from '../data/activities';
import { THEME_LIST } from '../data/themes';
import type { Domain } from '../types';
import { FilterChips } from '../components/ui';
import ActivityCard from '../components/ActivityCard';

const DOMAINS: { key: string; label: string; emoji: string; color: string }[] = [
  { key: '全部', label: '全部领域', emoji: '🎈', color: '#C99A6B' },
  { key: '精细动作', label: '🖐️ 精细动作', emoji: '🖐️', color: '#FF8FAB' },
  { key: '大运动', label: '🏃 大运动', emoji: '🏃', color: '#7FCB6E' },
  { key: '语言认知', label: '💬 语言认知', emoji: '💬', color: '#FFA94D' },
  { key: '感官探索', label: '🎵 感官探索', emoji: '🎵', color: '#FFC94D' },
  { key: '生活技能', label: '🍽️ 生活技能', emoji: '🍽️', color: '#62B6E8' },
  { key: '艺术创意', label: '🎨 艺术创意', emoji: '🎨', color: '#A78BDA' }
];

export default function LibraryPage() {
  const [domain, setDomain] = useState('全部');
  const [theme, setTheme] = useState('全部');

  const filtered = ACTIVITIES.filter(
    (a) =>
      (domain === '全部' || a.domain === domain) &&
      (theme === '全部' || a.themes.includes(theme as never))
  );

  return (
    <div className="page">
      <h1 className="page-title">🧩 活动库</h1>
      <div className="page-sub">按「发展领域 × 主题」双筛选 · 全部使用真实生活物品 · 实物操作优于玩具</div>

      <div className="card">
        <div className="card-title">
          <span className="t-emoji">🎯</span> 发展领域
        </div>
        <FilterChips
          options={DOMAINS.map((d) => ({ key: d.key, label: d.label }))}
          on={domain}
          setOn={setDomain}
        />
        <div className="card-title" style={{ marginTop: 4 }}>
          <span className="t-emoji">🌈</span> 主题
        </div>
        <FilterChips
          options={[{ key: '全部', label: '全部主题' }, ...THEME_LIST.map((t) => ({ key: t.key, label: `${t.emoji} ${t.name}` }))]}
          on={theme}
          setOn={setTheme}
        />
      </div>

      <div style={{ fontSize: 13, color: 'var(--ink-soft)', marginBottom: 8 }}>
        共 {filtered.length} 个活动 · 带 <span className="chip green">爬行期 ✓</span> 标志的之之现在就能玩
      </div>

      <div className="card">
        {filtered.map((a) => (
          <ActivityCard key={a.id} a={a} collapsible />
        ))}
        {filtered.length === 0 && <div style={{ textAlign: 'center', padding: 30, color: 'var(--ink-soft)' }}>这个组合还没有活动哦，换个筛选试试</div>}
      </div>
    </div>
  );
}
