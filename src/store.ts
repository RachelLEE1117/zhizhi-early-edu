import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type PageKey = 'today' | 'library' | 'themes' | 'english' | 'records' | 'materials' | 'space' | 'principles' | 'settings';

export interface Settings { name: string; birth: string; } // birth: YYYY-MM-DD

interface AppState {
  page: PageKey;
  setPage: (p: PageKey) => void;
  settings: Settings;
  setSettings: (s: Partial<Settings>) => void;
  todayDone: Record<string, string[]>;          // dateKey -> 已完成模块 key 列表
  toggleToday: (dateKey: string, key: string) => void;
  milestones: Record<string, { done: boolean; date?: string }>;
  toggleMilestone: (id: string) => void;
  safety: Record<string, boolean>;
  toggleSafety: (id: string) => void;
  notes: Record<string, string>;
  setNote: (id: string, text: string) => void;
  resetAll: () => void;
}

export const useStore = create<AppState>()(
  persist(
    (set) => ({
      page: 'today',
      setPage: (p) => set({ page: p }),
      settings: { name: '之之', birth: '2025-01-24' },
      setSettings: (s) => set((st) => ({ settings: { ...st.settings, ...s } })),
      todayDone: {},
      toggleToday: (dateKey, key) =>
        set((st) => {
          const cur = st.todayDone[dateKey] || [];
          const next = cur.includes(key) ? cur.filter((k) => k !== key) : [...cur, key];
          return { todayDone: { ...st.todayDone, [dateKey]: next } };
        }),
      milestones: {},
      toggleMilestone: (id) =>
        set((st) => {
          const m = st.milestones[id];
          const done = !m?.done;
          return {
            milestones: {
              ...st.milestones,
              [id]: { done, date: done ? dateKeyOf(new Date()) : undefined }
            }
          };
        }),
      safety: {},
      toggleSafety: (id) => set((st) => ({ safety: { ...st.safety, [id]: !st.safety[id] } })),
      notes: {},
      setNote: (id, text) => set((st) => ({ notes: { ...st.notes, [id]: text } })),
      resetAll: () =>
        set({ todayDone: {}, milestones: {}, safety: {}, notes: {}, settings: { name: '之之', birth: '2025-01-24' } })
    }),
    { name: 'zhizhi-early-edu' }
  )
);

export function dateKeyOf(d: Date): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}
