import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { useAppStore } from '../store/useAppStore';

export default function ModuleCard({ mod }) {
  const favorites = useAppStore((s) => s.favorites);
  const toggleFavorite = useAppStore((s) => s.toggleFavorite);
  const addActivity = useAppStore((s) => s.addActivity);

  return (
    <div className="card flex flex-col gap-3">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="badge">{mod.category}</p>
          <h3 className="mt-2 text-lg font-semibold">{mod.name}</h3>
        </div>
        <button onClick={() => toggleFavorite(mod.id)}>
          <Star size={18} className={favorites.includes(mod.id) ? 'fill-yellow-300 text-yellow-300' : 'text-slate-500'} />
        </button>
      </div>
      <p className="text-sm text-slate-400">{mod.description}</p>
      <div className="mt-auto flex items-center justify-between">
        <span className="text-xs text-slate-500">{mod.difficulty}</span>
        <Link
          to={`/modules/${mod.slug}`}
          onClick={() => addActivity(`Opened ${mod.name}`)}
          className="rounded-lg bg-cyan-600 px-3 py-1 text-sm font-medium hover:bg-cyan-500"
        >
          Buka Modul
        </Link>
      </div>
    </div>
  );
}
