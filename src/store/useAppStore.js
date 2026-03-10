import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const starterActivity = [
  { id: 1, action: 'Viewed OWASP Top 10 Explorer', time: '2m ago' },
  { id: 2, action: 'Saved Risk Register draft', time: '14m ago' },
  { id: 3, action: 'Completed Learning Quiz #3', time: '1h ago' },
];

export const useAppStore = create(
  persist(
    (set, get) => ({
      user: null,
      theme: 'dark',
      favorites: [],
      activity: starterActivity,
      toasts: [],
      login: (role, name) => set({ user: { role, name } }),
      logout: () => set({ user: null }),
      toggleTheme: () => set((s) => ({ theme: s.theme === 'dark' ? 'light' : 'dark' })),
      toggleFavorite: (moduleId) =>
        set((s) => ({
          favorites: s.favorites.includes(moduleId)
            ? s.favorites.filter((id) => id !== moduleId)
            : [...s.favorites, moduleId],
        })),
      addActivity: (action) => {
        const current = get().activity;
        set({ activity: [{ id: Date.now(), action, time: 'just now' }, ...current].slice(0, 10) });
      },
      pushToast: (message, type = 'info') => {
        const id = Date.now();
        set((s) => ({ toasts: [...s.toasts, { id, message, type }] }));
        setTimeout(() => {
          set((s) => ({ toasts: s.toasts.filter((t) => t.id !== id) }));
        }, 2800);
      },
    }),
    { name: 'security-lab-store' },
  ),
);
