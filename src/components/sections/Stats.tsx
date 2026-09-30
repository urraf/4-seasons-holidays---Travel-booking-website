import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useSeason } from '../../context/SeasonContext';
import { Globe, MapPin, Users, Award } from 'lucide-react';

interface StatItem {
  icon: React.ReactNode;
  value: number;
  suffix: string;
  label: string;
}

const stats: StatItem[] = [
  { icon: <Users className="w-7 h-7" />, value: 15000, suffix: '+', label: 'Happy Travellers' },
  { icon: <MapPin className="w-7 h-7" />, value: 120, suffix: '+', label: 'Destinations' },
  { icon: <Globe className="w-7 h-7" />, value: 28, suffix: '', label: 'Countries' },
  { icon: <Award className="w-7 h-7" />, value: 12, suffix: '', label: 'Years of Excellence' },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = value / 60;
    const timer = setInterval(() => {
      start += step;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {count.toLocaleString('en-IN')}{suffix}
    </span>
  );
}

export default function Stats() {
  const { theme } = useSeason();

  return (
    <section className="section-padding relative overflow-hidden" style={{ background: 'var(--season-bg)' }}>
      {/* Glow effect */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[150px] opacity-20 pointer-events-none"
        style={{ background: theme.primary }}
      />

      <div className="container-main relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="text-center glass-panel p-8 rounded-3xl border border-white/10 hover:border-white/20 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-4 shadow-lg"
                style={{ background: `${theme.primary}25`, color: theme.primary, boxShadow: `0 0 20px ${theme.glow}` }}
              >
                {stat.icon}
              </div>
              <div className="font-display text-4xl md:text-5xl font-medium text-white mb-2 drop-shadow-md">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-xs text-slate-400 font-semibold uppercase tracking-[0.2em]">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
