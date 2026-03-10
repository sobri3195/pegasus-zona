import { modules } from '../data/modules';
import { exportJSON, exportPDF } from '../utils/exporters';

export default function ReportsPage() {
  const report = { generatedAt: new Date().toISOString(), totalModules: modules.length, note: 'Mock security report' };

  return (
    <div className="space-y-4">
      <div className="card">
        <h1 className="text-2xl font-semibold">Reports Center</h1>
        <p className="text-slate-400">Ekspor laporan simulasi ke JSON atau PDF.</p>
      </div>
      <div className="card flex gap-2">
        <button onClick={() => exportJSON('security-lab-report.json', report)} className="rounded-lg bg-cyan-600 px-3 py-2">Export JSON</button>
        <button onClick={() => exportPDF('Security Lab Report', ['All data in this report is mock/simulated.', `Total modules: ${modules.length}`])} className="rounded-lg bg-violet-600 px-3 py-2">Export PDF</button>
      </div>
    </div>
  );
}
