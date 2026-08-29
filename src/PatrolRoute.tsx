import { motion } from 'framer-motion';
import Reveal from './lib/Reveal';
import { useInView } from './hooks/useMotion';
import { useTheme } from './components/ThemeProvider';

const postings = [
  { label: 'Dy SP', place: 'Kota District', year: '2012' },
  { label: 'Addl SP', place: 'Rampur Range', year: '2014' },
  { label: 'SP Cybercrime', place: 'State CID', year: '2018' },
  { label: 'SP District', place: 'Navalpura', year: '2021' },
];

export default function PatrolRoute() {
  const { theme } = useTheme();
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.35 });
  const pts = [
    [70, 180], [200, 120], [330, 170], [460, 100], [590, 150], [700, 80],
  ];
  const d = pts.map((p, i) => `${i === 0 ? 'M' : 'L'}${p[0]},${p[1]}`).join(' ');
  return (
    <section id="career" className="py-24" style={{ background: theme.surface }}>
      <div className="mx-auto max-w-5xl px-6">
        <Reveal className="text-center">
          <h2 className="text-3xl font-bold" style={{ color: theme.text }}>My command path</h2>
          <p className="mt-2" style={{ color: theme.muted }}>
            A patrol route of postings, each protecting a wider community.
          </p>
        </Reveal>
        <div ref={ref}>
          <svg viewBox="0 0 760 240" className="mx-auto mt-8 w-full max-w-4xl">
            <path d={d} fill="none" stroke={theme.border} strokeWidth="3" />
            <motion.path
              d={d}
              fill="none"
              stroke={theme.accent2}
              strokeWidth="4"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={inView ? { pathLength: 1 } : {}}
              transition={{ duration: 2, ease: 'easeInOut' }}
            />
            {postings.map((p, i) => {
              const [px, py] = pts[i];
              return (
                <motion.g
                  key={p.label}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 1 + i * 0.4 }}
                  style={{ transformOrigin: `${px}px ${py}px` }}
                >
                  <circle cx={px} cy={py} r="9" fill={theme.surface} stroke={theme.accent2} strokeWidth="3" />
                  <circle cx={px} cy={py} r="3" fill={theme.accent} />
                </motion.g>
              );
            })}
          </svg>
          <div className="mx-auto grid max-w-3xl gap-4 px-2 sm:grid-cols-2 lg:grid-cols-4">
            {postings.map((p, i) => (
              <Reveal key={p.label} delay={i * 0.15}>
                <div className="rounded-lg border p-3 text-center" style={{ borderColor: theme.border, background: theme.bg }}>
                  <span className="block font-mono text-xs" style={{ color: theme.accent2 }}>{p.year}</span>
                  <span className="block font-semibold" style={{ color: theme.text }}>{p.label}</span>
                  <span className="block text-xs" style={{ color: theme.muted }}>{p.place}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
