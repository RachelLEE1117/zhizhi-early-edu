import { useState } from 'react';
import { MATERIALS, MATERIAL_PRINCIPLES } from '../data/materials';
import { THEME_LIST } from '../data/themes';
import { TabRow } from '../components/ui';

const CATS = [
  { key: 'home', label: '🏠 家居物品', color: '#62B6E8' },
  { key: 'food', label: '🥕 食物类', color: '#FFA94D' },
  { key: 'upgrade', label: '💰 低成本可选进阶', color: '#7FCB6E' },
  { key: 'diy', label: '✂️ DIY 教具', color: '#A78BDA' }
];

export default function MaterialsPage() {
  const [theme, setTheme] = useState(THEME_LIST[0].key);
  const pack = MATERIALS[theme] || MATERIALS['颜色'];

  return (
    <div className="page">
      <h1 className="page-title">🧺 教具清单</h1>
      <div className="page-sub">与每周主题搭配 · 全部极简低成本 · 随手可得 · 无需专门购买玩具</div>

      <div className="card">
        {MATERIAL_PRINCIPLES.map((p) => (
          <div key={p} className="principle" style={{ padding: '6px 0' }}>
            <span className="p-num" style={{ background: '#C99A6B', fontSize: 12, width: 26, height: 26 }}>✓</span>
            <span style={{ fontSize: 14 }}>{p}</span>
          </div>
        ))}
      </div>

      <TabRow
        tabs={THEME_LIST.map((t) => ({ key: t.key, label: `${t.emoji} ${t.name}` }))}
        on={theme}
        setOn={(k) => setTheme(k as "颜色" | "水果" | "动物" | "五官" | "日用物品" | "家务" | "自然")}
      />

      {CATS.map((c) => (
        <div key={c.key} className="card">
          <div className="card-title" style={{ color: c.color }}>
            <span className="t-emoji">{c.label.split(' ')[0]}</span>
            {c.label.split(' ').slice(1).join(' ')}
          </div>
          <ul className="ai-steps" style={{ marginTop: 6 }}>
            {pack[c.key as keyof typeof pack].map((m) => (
              <li key={m}>{m}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
