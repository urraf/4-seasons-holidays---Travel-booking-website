import { useState, useMemo } from 'react';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useSeason } from '../context/SeasonContext';
import { destinations, type Season } from '../data/destinations';
import { formatPrice } from '../utils/seasonTheme';
import { MapPin, Star, Filter, Search } from 'lucide-react';

const seasons: (Season | 'all')[] = ['all', 'spring', 'summer', 'autumn', 'winter'];
const regions = ['All', 'North India', 'South India', 'Himalayas', 'North East India', 'Luxury Islands'];

export default function Destinations() {
  const { theme } = useSeason();
  const [activeSeason, setActiveSeason] = useState<Season | 'all'>('all');
  const [activeRegion, setActiveRegion] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = useMemo(() => {
    return destinations.filter((d) => {
      const seasonMatch = activeSeason === 'all' || d.season === activeSeason;
      const regionMatch = activeRegion === 'All' || d.region === activeRegion;
      const searchMatch = d.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        d.country.toLowerCase().includes(searchQuery.toLowerCase());
      return seasonMatch && regionMatch && searchMatch;
    });
  }, [activeSeason, activeRegion, searchQuery]);

  return (
    <main className="min-h-screen pt-24" style={{ background: 'var(--season-bg)' }}>
      {/* Hero */}
      <div className="container-main py-16 md:py-24">
        <motion.h1
          className="font-display text-5xl md:text-7xl text-white font-medium mb-4 tracking-tight drop-shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Curated Expeditions
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-slate-300 font-light max-w-xl leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Explore our private portfolio of worldwide destinations across all four seasons. Every sanctuary hand-selected for rare, immersive experiences.
        </motion.p>
      </div>

      {/* Filters */}
      <div className="container-main" style={{ marginBottom: '60px' }}>
        <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
          {/* Season Tabs */}
          <div className="flex flex-wrap gap-2">
            {seasons.map((s) => (
              <button
                key={s}
                onClick={() => setActiveSeason(s)}
                className="px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 border"
                style={{
                  background: activeSeason === s ? theme.primary : 'rgba(255,255,255,0.06)',
                  color: activeSeason === s ? '#03070d' : '#f8fafc',
                  borderColor: activeSeason === s ? theme.primary : 'rgba(255,255,255,0.1)',
                  boxShadow: activeSeason === s ? `0 0 20px ${theme.glow}` : 'none',
                }}
              >
                {s === 'all' ? 'All Seasons' : s.charAt(0).toUpperCase() + s.slice(1)}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 items-center w-full md:w-auto">
            {/* Region Filter */}
            <div className="flex gap-1.5 items-center bg-white/5 border border-white/10 p-1 rounded-xl backdrop-blur-md">
              <Filter className="w-4 h-4 text-slate-400 ml-2" />
              {regions.map((r) => (
                <button
                  key={r}
                  onClick={() => setActiveRegion(r)}
                  className="px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-300"
                  style={{
                    background: activeRegion === r ? theme.primary : 'transparent',
                    color: activeRegion === r ? '#03070d' : '#cbd5e1',
                  }}
                >
                  {r}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search destination..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 rounded-xl text-sm border border-white/10 bg-white/5 backdrop-blur-md text-white placeholder-slate-400 focus:outline-none focus:border-white/30 transition-all"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="container-main relative" style={{ marginTop: '20px', paddingBottom: '96px' }}>
        <LayoutGroup>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            <AnimatePresence mode="sync">
              {filtered.map((dest) => (
                <motion.div
                  key={dest.id}
                  layout="position"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                >
                  <Link to={`/destinations/${dest.id}`} className="destination-card block group">
                    <div className="relative overflow-hidden aspect-[4/5]">
                      <img
                        src={dest.image}
                        alt={`${dest.name}, ${dest.country}`}
                        className="card-image w-full h-full object-cover"
                        loading="lazy"
                        onError={(e) => {
                          e.currentTarget.src = 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1200&q=80';
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                      <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium"
                        style={{
                          background: 'rgba(255,255,255,0.15)',
                          backdropFilter: 'blur(8px)',
                          color: 'white',
                        }}
                      >
                        {dest.season.charAt(0).toUpperCase() + dest.season.slice(1)}
                      </div>

                      <div className="absolute bottom-0 left-0 right-0 p-5">
                        <div className="flex items-center gap-1 mb-1">
                          <MapPin className="w-3 h-3 text-white/60" />
                          <span className="text-xs text-white/60">{dest.country}</span>
                        </div>
                        <h3 className="font-display text-xl text-white font-medium mb-1">
                          {dest.name}
                        </h3>
                        <p className="text-sm text-white/50 italic">{dest.tagline}</p>

                        <div className="flex items-center justify-between mt-3 pt-3 border-t border-white/10">
                          <div className="flex items-center gap-1">
                            <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                            <span className="text-sm text-white">{dest.rating}</span>
                          </div>
                          <span className="text-sm text-white/80">
                            From <strong>{formatPrice(dest.priceFrom)}</strong>
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </LayoutGroup>

        {filtered.length === 0 && (
          <div className="text-center py-20 opacity-40">
            <p className="font-display text-2xl" style={{ color: theme.text }}>
              No destinations found
            </p>
            <p className="text-sm mt-2" style={{ color: theme.text }}>
              Try adjusting your filters
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
