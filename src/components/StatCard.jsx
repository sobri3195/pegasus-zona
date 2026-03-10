export default function StatCard({ title, value, hint }) {
  return (
    <div className="card">
      <p className="text-sm text-slate-400">{title}</p>
      <h3 className="mt-1 text-2xl font-semibold">{value}</h3>
      <p className="mt-2 text-xs text-slate-500">{hint}</p>
    </div>
  );
}
