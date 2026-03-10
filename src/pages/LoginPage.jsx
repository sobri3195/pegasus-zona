import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppStore } from '../store/useAppStore';

export default function LoginPage() {
  const [name, setName] = useState('Demo User');
  const [role, setRole] = useState('trainee');
  const login = useAppStore((s) => s.login);
  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    login(role, name);
    navigate('/dashboard');
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 p-6">
      <form onSubmit={submit} className="w-full max-w-md rounded-2xl border border-slate-800 bg-slate-900 p-6">
        <h2 className="text-xl font-semibold">Mock Login</h2>
        <input className="mt-4 w-full rounded-lg bg-slate-800 p-2" value={name} onChange={(e) => setName(e.target.value)} />
        <select className="mt-3 w-full rounded-lg bg-slate-800 p-2" value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="admin">admin</option>
          <option value="analyst">analyst</option>
          <option value="trainee">trainee</option>
        </select>
        <button className="mt-4 w-full rounded-lg bg-cyan-600 py-2">Masuk Dashboard</button>
      </form>
    </div>
  );
}
