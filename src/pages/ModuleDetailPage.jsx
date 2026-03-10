import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { modules } from '../data/modules';
import ModuleTemplate from './modules/ModuleTemplate';
import {
  PortScanSimulator,
  VulnerabilityAssessmentSimulator,
  OwaspExplorer,
  JwtDecoderDemo,
  PasswordStrength,
  XssSandbox,
  SqlInjectionSandbox,
  LogAnalysisSimulator,
  SiemDashboardMock,
  DnsLearningSimulator,
  CvssCalculator,
  LearningQuizCenter,
} from './modules/ImplementedModules';

const moduleComponents = {
  'port-scan-simulator': PortScanSimulator,
  'vulnerability-assessment-simulator': VulnerabilityAssessmentSimulator,
  'owasp-top-10-explorer': OwaspExplorer,
  'jwt-decoder-demo-lokal': JwtDecoderDemo,
  'password-strength-checker': PasswordStrength,
  'xss-demo-sandbox-aman': XssSandbox,
  'sql-injection-demo-sandbox-aman': SqlInjectionSandbox,
  'log-analysis-simulator': LogAnalysisSimulator,
  'siem-dashboard-mock': SiemDashboardMock,
  'dns-learning-simulator': DnsLearningSimulator,
  'cvss-calculator': CvssCalculator,
  'learning-quiz-center': LearningQuizCenter,
};

export default function ModuleDetailPage() {
  const { slug } = useParams();
  const mod = useMemo(() => modules.find((m) => m.slug === slug), [slug]);

  if (!mod) return <div className="card">Modul tidak ditemukan.</div>;

  const Component = moduleComponents[slug];
  return Component ? <Component module={mod} /> : <ModuleTemplate module={mod} />;
}
