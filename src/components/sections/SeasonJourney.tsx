import { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useSeason } from '../../context/SeasonContext';
import { destinations, type Season } from '../../data/destinations';
import { Link } from 'react-router-dom';
import { formatPrice } from '../../utils/seasonTheme';
import { MapPin, Star, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface SeasonData {
  season: Season;
  headline: string;
  copy: string;
  emoji: string;
}

const seasonSections: SeasonData[] = [
  {
    season: 'spring',
    headline: 'Spring Awakening',
    copy: 'Watch the world burst into colour. Cherry blossoms, tulip fields, and the first warm breeze—spring is nature\'s invitation to wander.',
    emoji: '🌸',
  },
  {
    season: 'summer',
    headline: 'Summer Radiance',
    copy: 'Golden sun, turquoise waters, endless horizons. Summer is the season of freedom—dive in, let go, live fully.',
    emoji: '☀️',
  },
  {
    season: 'autumn',
    headline: 'Autumn Reverie',
    copy: 'A world dressed in amber, crimson, and gold. Autumn slows time—inviting you to savour every warm-hued moment.',
    emoji: '🍂',
  },
  {
    season: 'winter',
    headline: 'Winter Majesty',
    copy: 'Crystalline peaks, northern lights, snow-hushed forests. Winter transforms the world into something silent and sublime.',
    emoji: '❄️',
  },
];

function DestinationCard({ dest, index }: { dest: typeof destinations[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60, scale: 0.95 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ delay: index * 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link to={`/destinations/${dest.id}`} className="destination-card block group">
        <div className="relative overflow-hidden aspect-[4/5]">
          <img
            src={dest.image}
            alt={`${dest.name}, ${dest.country}`}
            className="card-image"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          
          {/* Season badge */}
          <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium tracking-wide"
            style={{
              background: 'rgba(255,255,255,0.15)',
              backdropFilter: 'blur(8px)',
              color: 'white',
            }}
          >
            {dest.season.charAt(0).toUpperCase() + dest.season.slice(1)}
          </div>

          {/* Content overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-5">
            <div className="flex items-center gap-1 mb-1">
              <MapPin className="w-3 h-3 text-white/60" />
              <span className="text-xs text-white/60">{dest.country}</span>
            </div>
            <h3 className="font-display text-2xl text-white font-medium mb-1">
              {dest.name}
            </h3>
            <p className="text-sm text-white/60 italic">{dest.tagline}</p>
            
            <div className="flex items-center justify-between mt-3 pt-3 border-t border-white/10">
              <div className="flex items-center gap-1">
                <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                <span className="text-sm text-white font-medium">{dest.rating}</span>
              </div>
              <span className="text-sm text-white/80">
                From <strong>{formatPrice(dest.priceFrom)}</strong>
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

function SeasonBlock({ data, index }: { data: SeasonData; index: number }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: false, margin: '-200px' });
  const { setProgress } = useSeason();

  useEffect(() => {
    if (!sectionRef.current) return;

    const trigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: 'top center',
      end: 'bottom center',
      onUpdate: (self) => {
        const base = index / 4;
        const segment = self.progress / 4;
        setProgress(base + segment);
      },
    });

    return () => trigger.kill();
  }, [index, setProgress]);

  const seasonDests = destinations.filter((d) => d.season === data.season);

  return (
    <div ref={sectionRef} className="relative py-24 md:py-32" id={data.season}>
      <div className="container-main">
        {/* Season Header */}
        <motion.div
          className="mb-16 max-w-3xl"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6">
            <span className="text-2xl">{data.emoji}</span>
            <span className="text-xs uppercase tracking-[0.25em] font-semibold" style={{ color: 'var(--season-primary)' }}>
              Chapter 0{index + 1} • {data.season}
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-medium mb-4 text-white tracking-tight drop-shadow-lg">
            {data.headline}
          </h2>
          <p className="text-lg md:text-xl text-slate-300 font-light max-w-2xl leading-relaxed">
            {data.copy}
          </p>
        </motion.div>

        {/* Destination Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {seasonDests.map((dest, i) => (
            <DestinationCard key={dest.id} dest={dest} index={i} />
          ))}
        </div>

        {/* View All Link */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
        >
          <Link
            to="/destinations"
            className="inline-flex items-center gap-2 text-sm font-semibold tracking-wider uppercase link-underline py-2 px-6 rounded-full border border-white/10 bg-white/5 backdrop-blur-md hover:border-white/30 transition-all duration-300"
            style={{ color: 'var(--season-primary)' }}
          >
            Explore all {data.season} expeditions
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

export default function SeasonJourney() {
  return (
    <section id="journey" className="relative transition-colors duration-700" style={{ background: 'var(--season-bg)' }}>
      {seasonSections.map((data, i) => (
        <SeasonBlock key={data.season} data={data} index={i} />
      ))}
    </section>
  );
}
