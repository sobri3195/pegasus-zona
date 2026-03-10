import { useMemo, useState } from 'react';
import { ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import ModuleTemplate from './ModuleTemplate';

const safeEventData = [
  { name: 'Mon', value: 4 },
  { name: 'Tue', value: 6 },
  { name: 'Wed', value: 7 },
  { name: 'Thu', value: 5 },
  { name: 'Fri', value: 8 },
];

function FullModuleWrapper({ module, children }) {
  return <div className="space-y-4"><ModuleTemplate module={module} />{children}</div>;
}

export function PortScanSimulator({ module }) {
  const [target, setTarget] = useState('lab-network.local');
  const result = ['22/ssh filtered', '80/http open', '443/https open'];
  return <FullModuleWrapper module={module}><div className="card"><h3>Port Mapping (Mock)</h3><input className="mt-2 rounded bg-slate-800 p-2" value={target} onChange={(e)=>setTarget(e.target.value)} /><ul className="mt-3 text-sm text-slate-300">{result.map((r)=><li key={r}>{target} → {r}</li>)}</ul></div></FullModuleWrapper>;
}

export function VulnerabilityAssessmentSimulator({ module }) {
  const matrix = [{ k: 'Critical', v: 1 }, { k: 'High', v: 3 }, { k: 'Medium', v: 6 }, { k: 'Low', v: 8 }];
  return <FullModuleWrapper module={module}><div className="card h-72"><h3>Risk Trend Mock</h3><ResponsiveContainer width="100%" height="85%"><LineChart data={safeEventData}><CartesianGrid stroke="#334155" /><XAxis dataKey="name" /><YAxis /><Tooltip /><Line dataKey="value" stroke="#22d3ee" /></LineChart></ResponsiveContainer><div className="mt-2 flex gap-2">{matrix.map((m)=><span key={m.k} className="badge">{m.k}: {m.v}</span>)}</div></div></FullModuleWrapper>;
}

export function OwaspExplorer({ module }) {
  const owasp = ['A01 Broken Access Control','A02 Cryptographic Failures','A03 Injection','A04 Insecure Design'];
  return <FullModuleWrapper module={module}><div className="card"><h3>OWASP Top 10 Snapshot</h3><ol className="mt-2 list-decimal pl-5 text-sm">{owasp.map((i)=><li key={i}>{i}</li>)}</ol></div></FullModuleWrapper>;
}

export function JwtDecoderDemo({ module }) { const [token, setToken] = useState('header.payload.signature'); return <FullModuleWrapper module={module}><div className="card"><h3>Local Decode Preview</h3><input className="mt-2 w-full rounded bg-slate-800 p-2" value={token} onChange={(e)=>setToken(e.target.value)} /><pre className="mt-2 rounded bg-slate-800 p-3 text-xs">{JSON.stringify({ alg: 'HS256', typ: 'JWT', tokenParts: token.split('.') }, null, 2)}</pre></div></FullModuleWrapper>; }

export function PasswordStrength({ module }) { const [pwd, setPwd] = useState(''); const score = useMemo(() => Math.min(100, pwd.length * 12 + (/[A-Z]/.test(pwd) ? 15 : 0) + (/\d/.test(pwd) ? 15 : 0)), [pwd]); return <FullModuleWrapper module={module}><div className="card"><h3>Password Strength Demo</h3><input type="password" className="mt-2 rounded bg-slate-800 p-2" value={pwd} onChange={(e)=>setPwd(e.target.value)} /><div className="mt-3 h-3 w-full rounded bg-slate-700"><div className="h-full rounded bg-emerald-500" style={{ width: `${score}%` }} /></div><p className="mt-1 text-sm">Score: {score}/100 (mock heuristic)</p></div></FullModuleWrapper>; }

export function XssSandbox({ module }) { const [input, setInput] = useState('<script>alert(1)</script>'); const sanitized = input.replace(/</g, '&lt;').replace(/>/g, '&gt;'); return <FullModuleWrapper module={module}><div className="card"><h3>XSS Safe Sandbox</h3><textarea className="mt-2 w-full rounded bg-slate-800 p-2" rows="4" value={input} onChange={(e)=>setInput(e.target.value)} /><p className="mt-2 text-xs text-amber-300">Output di-escape; tidak dieksekusi.</p><code className="mt-2 block rounded bg-slate-800 p-2">{sanitized}</code></div></FullModuleWrapper>; }

export function SqlInjectionSandbox({ module }) { const [query, setQuery] = useState("SELECT * FROM users WHERE name='admin'"); return <FullModuleWrapper module={module}><div className="card"><h3>SQLi Learning Sandbox</h3><textarea className="mt-2 w-full rounded bg-slate-800 p-2" rows="4" value={query} onChange={(e)=>setQuery(e.target.value)} /><pre className="mt-2 rounded bg-slate-800 p-2 text-xs">{JSON.stringify({ preparedStatement: 'SELECT * FROM users WHERE name = ?', params: ['input_user'] }, null, 2)}</pre></div></FullModuleWrapper>; }

export function LogAnalysisSimulator({ module }) { const logs = ['INFO auth success user_01','WARN unusual geo login','ALERT impossible travel detected']; return <FullModuleWrapper module={module}><div className="card"><h3>Log Stream Mock</h3><ul className="mt-2 space-y-2 text-sm">{logs.map((l)=><li key={l} className="rounded bg-slate-800 p-2">{l}</li>)}</ul></div></FullModuleWrapper>; }

export function SiemDashboardMock({ module }) { const radar = [{ k: 'Auth', v: 80 }, { k: 'Endpoint', v: 60 }, { k: 'Network', v: 75 }, { k: 'Cloud', v: 66 }, { k: 'Data', v: 58 }]; return <FullModuleWrapper module={module}><div className="card h-80"><h3>SIEM Coverage Radar (Mock)</h3><ResponsiveContainer width="100%" height="90%"><RadarChart data={radar}><PolarGrid /><PolarAngleAxis dataKey="k" /><PolarRadiusAxis /><Radar dataKey="v" fill="#22d3ee" fillOpacity={0.5} /></RadarChart></ResponsiveContainer></div></FullModuleWrapper>; }

export function DnsLearningSimulator({ module }) { const [domain, setDomain] = useState('example.local'); return <FullModuleWrapper module={module}><div className="card"><h3>DNS Resolution Flow (Mock)</h3><input className="mt-2 rounded bg-slate-800 p-2" value={domain} onChange={(e)=>setDomain(e.target.value)} /><p className="mt-3 text-sm">{domain} -> Resolver -> Authoritative -> 203.0.113.10 (dummy)</p></div></FullModuleWrapper>; }

export function CvssCalculator({ module }) { const [impact, setImpact] = useState(5); const [exploitability, setExploitability] = useState(4); const score = ((impact + exploitability) / 2).toFixed(1); return <FullModuleWrapper module={module}><div className="card"><h3>CVSS Mock Calculator</h3><div className="mt-2 grid gap-2 md:grid-cols-2"><input type="range" min="0" max="10" value={impact} onChange={(e)=>setImpact(Number(e.target.value))} /><input type="range" min="0" max="10" value={exploitability} onChange={(e)=>setExploitability(Number(e.target.value))} /></div><p className="mt-2">Impact: {impact} | Exploitability: {exploitability} | Mock Score: {score}</p></div></FullModuleWrapper>; }

export function LearningQuizCenter({ module }) { const [ans, setAns] = useState(''); const ok = ans.toLowerCase() === 'least privilege'; return <FullModuleWrapper module={module}><div className="card"><h3>Quiz Cepat</h3><p className="text-sm">Prinsip akses minimum disebut?</p><input className="mt-2 rounded bg-slate-800 p-2" value={ans} onChange={(e)=>setAns(e.target.value)} /><p className="mt-2 text-sm">{ans ? (ok ? '✅ Benar (mock)' : '❌ Coba lagi') : 'Isi jawaban'}</p></div></FullModuleWrapper>; }
