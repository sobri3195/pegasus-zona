import { useAppStore } from '../store/useAppStore';

export default function SettingsPage() {
  const { theme, toggleTheme, user } = useAppStore();
  return (
    <div className="space-y-4">
      <div className="card">
        <h1 className="text-2xl font-semibold">Settings</h1>
        <p className="text-slate-400">Konfigurasi lokal browser.</p>
      </div>
      <div className="card">
        <p>User: {user?.name} ({user?.role})</p>
        <p>Theme aktif: {theme}</p>
        <button onClick={toggleTheme} className="mt-3 rounded-lg bg-cyan-600 px-3 py-2">Toggle Theme</button>
      </div>
    </div>
  );
}
