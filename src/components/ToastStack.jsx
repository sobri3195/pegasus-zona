import { motion, AnimatePresence } from 'framer-motion';
import { useAppStore } from '../store/useAppStore';

export default function ToastStack() {
  const toasts = useAppStore((s) => s.toasts);
  return (
    <div className="fixed right-5 top-5 z-50 space-y-2">
      <AnimatePresence>
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="rounded-xl border border-cyan-700/40 bg-slate-900 p-3 text-sm"
          >
            {toast.message}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
