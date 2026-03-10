import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, XAxis, YAxis, Tooltip, Bar } from 'recharts';
import { modules } from '../data/modules';
import StatCard from '../components/StatCard';
import { useAppStore } from '../store/useAppStore';

const colors = ['#06b6d4', '#3b82f6', '#22c55e'];

export default function DashboardPage() {
  const activity = useAppStore((s) => s.activity);
  const favorites = useAppStore((s) => s.favorites);

  const byDifficulty = ['Beginner', 'Intermediate', 'Advanced'].map((level) => ({
    name: level,
    value: modules.filter((m) => m.difficulty === level).length,
  }));

  const byCategory = [...new Set(modules.map((m) => m.category))].map((c) => ({
    name: c,
    value: modules.filter((m) => m.category === c).length,
  }));

  return (
    <div className="space-y-5">
      <div className="grid gap-4 md:grid-cols-4">
        <StatCard title="Total Modul" value={modules.length} hint="Semua frontend-only" />
        <StatCard title="Favorit" value={favorites.length} hint="Disimpan di localStorage" />
        <StatCard title="Recent Activity" value={activity.length} hint="10 aktivitas terakhir" />
        <StatCard title="Safety" value="100% Mock" hint="Tanpa target eksternal" />
      </div>
      <div className="grid gap-4 lg:grid-cols-2">
        <div className="card h-72">
          <h3 className="mb-3">Distribusi Tingkat Kesulitan</h3>
          <ResponsiveContainer width="100%" height="85%">
            <PieChart>
              <Pie data={byDifficulty} dataKey="value" outerRadius={90}>
                {byDifficulty.map((d, i) => <Cell key={d.name} fill={colors[i % colors.length]} />)}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="card h-72">
          <h3 className="mb-3">Kategori Modul</h3>
          <ResponsiveContainer width="100%" height="85%">
            <BarChart data={byCategory}><XAxis dataKey="name" /><YAxis /><Tooltip /><Bar dataKey="value" fill="#06b6d4" /></BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="card">
        <h3 className="mb-3">Recent Activity</h3>
        <ul className="space-y-2 text-sm text-slate-300">
          {activity.map((a) => <li key={a.id} className="flex justify-between rounded-lg bg-slate-800/60 p-2"><span>{a.action}</span><span>{a.time}</span></li>)}
        </ul>
      </div>
    </div>
  );
}
