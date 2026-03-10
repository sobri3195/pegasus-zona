import { useMemo, useState } from 'react';
import ModuleCard from '../components/ModuleCard';
import { modules } from '../data/modules';

export default function ModulesPage() {
  const [q, setQ] = useState('');
  const [difficulty, setDifficulty] = useState('All');

  const filtered = useMemo(() => modules.filter((m) => (difficulty === 'All' || m.difficulty === difficulty) && m.name.toLowerCase().includes(q.toLowerCase())), [q, difficulty]);

  return (
    <div>
      <div className="mb-4 flex flex-col gap-2 md:flex-row">
        <input placeholder="Cari modul..." className="rounded-lg bg-slate-800 p-2" value={q} onChange={(e) => setQ(e.target.value)} />
        <select className="rounded-lg bg-slate-800 p-2" value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
          <option>All</option><option>Beginner</option><option>Intermediate</option><option>Advanced</option>
        </select>
      </div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">{filtered.map((mod) => <ModuleCard key={mod.id} mod={mod} />)}</div>
    </div>
  );
}
