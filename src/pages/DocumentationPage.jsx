export default function DocumentationPage() {
  return (
    <div className="card space-y-3">
      <h1 className="text-2xl font-semibold">Documentation</h1>
      <p>Aplikasi ini seluruhnya frontend-only React + Vite, data simulasi disimpan di state/localStorage.</p>
      <ul className="list-disc pl-5 text-sm text-slate-300">
        <li>Tidak ada koneksi ke target nyata.</li>
        <li>Tidak menyediakan fungsi scanning/exploit/credential attack.</li>
        <li>Seluruh output adalah mock untuk pembelajaran.</li>
      </ul>
    </div>
  );
}
