import { Navigate, Route, Routes } from 'react-router-dom';
import AppLayout from './layouts/AppLayout';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import ModulesPage from './pages/ModulesPage';
import ModuleDetailPage from './pages/ModuleDetailPage';
import ReportsPage from './pages/ReportsPage';
import SettingsPage from './pages/SettingsPage';
import DocumentationPage from './pages/DocumentationPage';
import AboutPage from './pages/AboutPage';
import { useAppStore } from './store/useAppStore';
import ToastStack from './components/ToastStack';

function Protected({ children }) {
  const user = useAppStore((s) => s.user);
  return user ? children : <Navigate to="/login" replace />;
}

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<Protected><AppLayout /></Protected>}>
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="modules" element={<ModulesPage />} />
          <Route path="modules/:slug" element={<ModuleDetailPage />} />
          <Route path="reports" element={<ReportsPage />} />
          <Route path="settings" element={<SettingsPage />} />
          <Route path="documentation" element={<DocumentationPage />} />
          <Route path="about" element={<AboutPage />} />
        </Route>
      </Routes>
      <ToastStack />
    </>
  );
}
