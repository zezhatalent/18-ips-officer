import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useEffect } from 'react';
import { content } from './content';
import { useTheme } from './components/ThemeProvider';

function FloatingElement({ x, y, size, delay, color }: { x: number; y: number; size: number; delay: number; color: string }) {
  return (
    <motion.div
      className="absolute rounded-full"
      style={{ left: `${x}%`, top: `${y}%`, width: size, height: size, background: `${color}30` }}
      animate={{ y: [0, -25, 0], opacity: [0.3, 0.8, 0.3] }}
      transition={{ duration: 6, repeat: Infinity, delay, ease: 'easeInOut' }}
    />
  );
}

function ShieldBadgeSVG({ mouseX, mouseY }: { mouseX: any; mouseY: any }) {
  const { theme } = useTheme();
  const rotateX = useTransform(mouseY, [-300, 300], [5, -5]);
  const rotateY = useTransform(mouseX, [-300, 300], [-5, 5]);

  return (
    <motion.div
      style={{ rotateX, rotateY, perspective: 800 }}
      className="relative mx-auto flex items-center justify-center"
    >
      {/* Siren glow effect */}
      <motion.div
        className="absolute h-64 w-64 rounded-full"
        style={{ background: `radial-gradient(circle, ${theme.accent}30, transparent 70%)` }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.svg
        viewBox="0 0 160 200"
        className="relative h-56 w-44"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <defs>
          <linearGradient id="shield-grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor={theme.accent} stopOpacity="0.2" />
            <stop offset="1" stopColor={theme.accent} stopOpacity="0.05" />
          </linearGradient>
        </defs>

        {/* Shield outline */}
        <motion.path
          d="M80 10 L145 35 V90 C145 140 120 170 80 190 C40 170 15 140 15 90 V35 Z"
          fill="url(#shield-grad)"
          stroke={theme.accent}
          strokeWidth="2.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: 'easeInOut' }}
        />

        {/* Inner shield */}
        <motion.path
          d="M80 25 L130 45 V85 C130 125 110 150 80 165 C50 150 30 125 30 85 V45 Z"
          fill="none"
          stroke={theme.accent}
          strokeWidth="1"
          opacity="0.4"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        />

        {/* Star badge center */}
        <motion.g
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6, type: 'spring' }}
        >
          <circle cx="80" cy="90" r="25" fill="none" stroke={theme.accent} strokeWidth="1.5" />
          <circle cx="80" cy="90" r="18" fill={`${theme.accent}15`} stroke={theme.accent} strokeWidth="1" />
          {/* Star */}
          <polygon
            points="80,72 84,82 95,84 87,91 89,102 80,97 71,102 73,91 65,84 76,82"
            fill={theme.accent}
            opacity="0.8"
          />
        </motion.g>

        {/* Decorative lines */}
        <motion.line x1="30" y1="50" x2="50" y2="50" stroke={theme.accent} strokeWidth="1" opacity="0.3"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
          transition={{ duration: 0.5, delay: 1.5 }}
        />
        <motion.line x1="110" y1="50" x2="130" y2="50" stroke={theme.accent} strokeWidth="1" opacity="0.3"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
          transition={{ duration: 0.5, delay: 1.5 }}
        />

        {/* Light sweep */}
        <motion.path
          d="M55 190 L80 10 L105 190 Z"
          fill="white"
          opacity="0.08"
          initial={{ x: -80 }}
          animate={{ x: 80 }}
          transition={{ duration: 2, delay: 1.5 }}
        />
      </motion.svg>

      {/* Floating shields */}
      {[
        { x: 8, y: 25, d: 0 }, { x: 88, y: 20, d: 0.5 },
        { x: 3, y: 75, d: 1 }, { x: 92, y: 72, d: 1.5 },
      ].map((f, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{ left: `${f.x}%`, top: `${f.y}%` }}
          animate={{ y: [0, -12, 0], opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 5, repeat: Infinity, delay: f.d, ease: 'easeInOut' }}
        >
          <svg viewBox="0 0 20 24" width="14" height="16" fill={theme.accent} opacity="0.3">
            <path d="M10 2 L18 6 V13 C18 18 14 22 10 24 C6 22 2 18 2 13 V6 Z" />
          </svg>
        </motion.div>
      ))}
    </motion.div>
  );
}

export default function Hero() {
  const { theme } = useTheme();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      mouseX.set(e.clientX - window.innerWidth / 2);
      mouseY.set(e.clientY - window.innerHeight / 2);
    };
    window.addEventListener('mousemove', handleMouse);
    return () => window.removeEventListener('mousemove', handleMouse);
  }, []);

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden"
      style={{ background: theme.bg }}
    >
      {/* Siren glows */}
      <motion.div
        className="pointer-events-none absolute -left-16 top-1/4 h-72 w-72 rounded-full"
        style={{ background: 'radial-gradient(circle, #f44336 0%, transparent 70%)' }}
        animate={{ opacity: [0.06, 0.18, 0.06] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="pointer-events-none absolute -right-16 top-1/3 h-72 w-72 rounded-full"
        style={{ background: 'radial-gradient(circle, #3f6ef0 0%, transparent 70%)' }}
        animate={{ opacity: [0.06, 0.18, 0.06] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
      />

      <FloatingElement x={12} y={22} size={8} delay={0} color={theme.accent} />
      <FloatingElement x={82} y={28} size={6} delay={1} color={theme.accent} />
      <FloatingElement x={22} y={72} size={10} delay={2} color={theme.accent} />
      <FloatingElement x={78} y={68} size={5} delay={0.5} color={theme.accent} />

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 px-6 py-24 md:grid-cols-2">
        <div>
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="font-mono text-xs uppercase tracking-[0.3em]"
            style={{ color: theme.accent2 }}
          >
            Indian Police Service
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, type: 'spring', stiffness: 80 }}
            className="mt-3 text-5xl font-extrabold md:text-6xl"
            style={{ color: theme.text }}
          >
            {content.name.split('').map((ch, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.04, duration: 0.5 }}
                style={{ display: 'inline-block' }}
              >
                {ch}
              </motion.span>
            ))}
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="mt-3 text-xl font-semibold"
            style={{ color: theme.accent }}
          >
            {content.tagline}
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <motion.a
              href="#career"
              className="rounded px-8 py-3 font-semibold"
              style={{ background: theme.accent2, color: '#fff' }}
              whileHover={{ scale: 1.05, boxShadow: `0 0 30px ${theme.accent2}50` }}
              whileTap={{ scale: 0.95 }}
            >
              Career & achievements
            </motion.a>
            <motion.a
              href="#contact"
              className="rounded border px-8 py-3 font-semibold"
              style={{ borderColor: theme.accent, color: theme.accent }}
              whileHover={{ scale: 1.05, backgroundColor: `${theme.accent}15` }}
              whileTap={{ scale: 0.95 }}
            >
              Contact
            </motion.a>
          </motion.div>
        </div>
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <ShieldBadgeSVG mouseX={springX} mouseY={springY} />
        </motion.div>
      </div>
    </section>
  );
}
