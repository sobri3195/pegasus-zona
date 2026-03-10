import { useState } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { Menu, Shield, SunMoon, LogOut } from 'lucide-react';
import { useAppStore } from '../store/useAppStore';

const menuItems = [
  ['Dashboard', '/dashboard'],
  ['Modules', '/modules'],
  ['Reports', '/reports'],
  ['Documentation', '/documentation'],
  ['Settings', '/settings'],
  ['About/Legal', '/about'],
];

export default function AppLayout() {
  const [collapsed, setCollapsed] = useState(false);
  const { theme, toggleTheme, logout, user } = useAppStore();

  return (
    <div className={theme === 'dark' ? 'dark' : ''}>
      <div className="min-h-screen bg-slate-100 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
        <div className="flex">
          <aside className={`border-r border-slate-800 bg-slate-900 p-4 transition-all ${collapsed ? 'w-20' : 'w-64'} hidden md:block`}>
            <button onClick={() => setCollapsed(!collapsed)} className="mb-5 text-slate-300"><Menu /></button>
            <Link to="/dashboard" className="mb-6 flex items-center gap-2 text-cyan-300">
              <Shield /> {!collapsed && <span className="font-semibold">Security Lab</span>}
            </Link>
            <nav className="space-y-2">
              {menuItems.map(([label, path]) => (
                <NavLink key={path} to={path} className={({ isActive }) => `block rounded-lg px-3 py-2 text-sm ${isActive ? 'bg-cyan-700/40 text-cyan-200' : 'text-slate-300'}`}>
                  {!collapsed ? label : label[0]}
                </NavLink>
              ))}
            </nav>
          </aside>
          <div className="flex-1">
            <header className="sticky top-0 z-10 flex items-center justify-between border-b border-slate-800 bg-slate-900/95 px-5 py-3 backdrop-blur">
              <p className="text-sm text-slate-400">Role: {user?.role ?? 'guest'}</p>
              <div className="flex gap-2">
                <button onClick={toggleTheme} className="rounded-lg border border-slate-700 p-2"><SunMoon size={16} /></button>
                <button onClick={logout} className="rounded-lg border border-slate-700 p-2"><LogOut size={16} /></button>
              </div>
            </header>
            <main className="p-5">
              <Outlet />
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
