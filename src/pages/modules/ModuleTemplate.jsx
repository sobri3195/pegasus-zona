import { useState } from 'react';
import { exportJSON, exportPDF } from '../../utils/exporters';
import { useAppStore } from '../../store/useAppStore';

export default function ModuleTemplate({ module }) {
  const [note, setNote] = useState('');
  const pushToast = useAppStore((s) => s.pushToast);

  const payload = { module: module.name, note, status: 'mock-completed', generatedAt: new Date().toISOString() };

  return (
    <div className="space-y-4">
      <div className="card">
        <h1 className="text-2xl font-semibold">{module.name}</h1>
        <p className="mt-2 text-slate-400">{module.description}</p>
        <div className="mt-3 flex gap-2">{module.learningGoals.map((g) => <span key={g} className="badge">{g}</span>)}</div>
      </div>
      <div className="card">
        <p className="text-sm text-slate-400">Input Dummy</p>
        <textarea className="mt-2 w-full rounded-lg bg-slate-800 p-2" rows="5" value={note} onChange={(e) => setNote(e.target.value)} placeholder="Catatan simulasi lokal..." />
        <div className="mt-3 flex flex-wrap gap-2">
          <button onClick={() => setNote('')} className="rounded-lg border border-slate-700 px-3 py-1">Reset</button>
          <button onClick={() => { localStorage.setItem(`module-note-${module.id}`, note); pushToast('Data simulasi disimpan lokal'); }} className="rounded-lg border border-cyan-700 px-3 py-1">Save Local</button>
          <button onClick={() => exportJSON(`${module.slug}.json`, payload)} className="rounded-lg border border-emerald-700 px-3 py-1">Export JSON</button>
          <button onClick={() => exportPDF(module.name, [module.description, `Status: ${payload.status}`])} className="rounded-lg border border-violet-700 px-3 py-1">Export PDF</button>
        </div>
      </div>
      <div className="card">
        <p className="mb-3 text-sm text-slate-400">Hasil Simulasi Mock</p>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm"><thead><tr><th>Item</th><th>Status</th><th>Progress</th></tr></thead>
          <tbody>
            {['Collection', 'Analysis', 'Recommendation'].map((row, idx) => (
              <tr key={row} className="border-t border-slate-800"><td>{row}</td><td><span className="badge">Mock Ready</span></td><td><div className="h-2 w-40 rounded bg-slate-700"><div style={{ width: `${(idx + 1) * 30}%` }} className="h-full rounded bg-cyan-500" /></div></td></tr>
            ))}
          </tbody></table>
        </div>
      </div>
    </div>
  );
}
