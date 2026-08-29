import { motion } from 'framer-motion';
import { content } from './content';
import { useTheme } from './components/ThemeProvider';

function SirenGlow() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute -left-16 top-1/4 h-72 w-72 rounded-full"
        style={{ background: 'radial-gradient(circle, #f44336 0%, transparent 70%)', opacity: 0.14 }}
        animate={{ opacity: [0.06, 0.2, 0.06] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -right-16 top-1/3 h-72 w-72 rounded-full"
        style={{ background: 'radial-gradient(circle, #3f6ef0 0%, transparent 70%)', opacity: 0.14 }}
        animate={{ opacity: [0.06, 0.2, 0.06] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
      />
    </div>
  );
}

function Badge() {
  const { theme } = useTheme();
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.4 }}
      className="relative"
    >
      <svg viewBox="0 0 120 140" className="mx-auto h-56 w-48" fill="none">
        <defs>
          <linearGradient id="shine" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#ffffff" stopOpacity="0.9" />
            <stop offset="0.5" stopColor="#ffffff" stopOpacity="0" />
            <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M60 8 L108 22 V66 C108 96 92 116 60 132 C28 116 12 96 12 66 V22 Z"
          stroke={theme.accent}
          strokeWidth="2.5"
        />
        <path d="M60 8 L108 22 V66 C108 96 92 116 60 132 C28 116 12 96 12 66 V22 Z" fill={`${theme.accent}0d`} />
        <circle cx="60" cy="60" r="22" stroke={theme.accent} strokeWidth="2" />
        <circle cx="60" cy="60" r="14" fill="none" stroke={theme.accent} strokeWidth="1.5" />
        <text x="60" y="66" textAnchor="middle" fontSize="16" fill={theme.accent} style={{ fontFamily: 'Georgia' }}>⚖</text>
        {/* light sweep */}
        <motion.path
          d="M40 132 L60 8 L80 132 Z"
          fill="url(#shine)"
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 80, opacity: [0, 0.7, 0.4] }}
          transition={{ duration: 1.1, delay: 0.9 }}
        />
      </svg>
    </motion.div>
  );
}

export default function Hero() {
  const { theme } = useTheme();
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden"
      style={{ background: theme.bg }}
    >
      <SirenGlow />
      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 px-6 py-24 md:grid-cols-2">
        <div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="font-mono text-xs uppercase tracking-[0.3em]"
            style={{ color: theme.accent2 }}
          >
            Indian Police Service
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-3 text-5xl font-extrabold md:text-6xl"
            style={{ color: theme.text }}
          >
            {content.name}
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-3 text-xl font-semibold"
            style={{ color: theme.accent }}
          >
            {content.tagline}
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="#career"
              className="rounded px-8 py-3 font-semibold"
              style={{ background: theme.accent2, color: '#fff' }}
            >
              Career & achievements
            </a>
            <a
              href="#contact"
              className="rounded border px-8 py-3 font-semibold"
              style={{ borderColor: theme.accent, color: theme.accent }}
            >
              Contact
            </a>
          </motion.div>
        </div>
        <div className="flex justify-center">
          <Badge />
        </div>
      </div>
    </section>
  );
}
