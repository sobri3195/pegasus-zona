import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 p-6 text-slate-100">
      <div className="max-w-3xl rounded-2xl border border-slate-800 bg-slate-900 p-8 text-center">
        <h1 className="text-4xl font-bold">Security Lab Simulator</h1>
        <p className="mt-4 text-slate-300">Dashboard edukasi keamanan siber frontend-only. Semua data bersifat simulasi lokal.</p>
        <p className="mt-4 rounded-xl bg-amber-500/10 p-3 text-sm text-amber-300">Platform ini hanya untuk edukasi, simulasi, dan pembelajaran keamanan siber di lingkungan yang sah. Tidak dirancang untuk menyerang, menguji, atau berinteraksi dengan sistem nyata tanpa izin.</p>
        <Link to="/login" className="mt-6 inline-block rounded-xl bg-cyan-600 px-5 py-2 font-semibold">Mulai</Link>
      </div>
    </div>
  );
}
