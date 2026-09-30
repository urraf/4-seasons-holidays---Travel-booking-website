import { useState, Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Search, MapPin, Calendar, Users, Star } from 'lucide-react';
import { useSeason } from '../../context/SeasonContext';
import type { Season } from '../../data/destinations';

const HeroScene = lazy(() => import('../three/HeroScene'));

const destinationOptions = [
  { value: 'kashmir', label: 'Kashmir (Spring & Summer)' },
  { value: 'kashmir-winter', label: 'Kashmir (Winter Snowfall)' },
  { value: 'kedarnath', label: 'Kedarnath & Rishikesh' },
  { value: 'ladakh', label: 'Ladakh High Passes' },
  { value: 'rajasthan', label: 'Rajasthan Royal Palaces' },
  { value: 'kerala', label: 'Kerala Backwaters' },
  { value: 'goa', label: 'Goa Velvet Shores' },
  { value: 'himachal', label: 'Himachal & Shimla' },
  { value: 'manali', label: 'Manali & Solang Snow' },
  { value: 'meghalaya', label: 'Meghalaya Living Roots' },
  { value: 'andaman', label: 'Andaman & Nicobar Islands' },
  { value: 'bali', label: 'Bali Tropical Villa' },
  { value: 'maldives', label: 'Maldives Overwater Resort' },
];

const seasonOptions = [
  { value: 'all', label: 'All Seasons' },
  { value: 'spring', label: 'Spring Season (Mar - May)' },
  { value: 'summer', label: 'Summer Season (Jun - Aug)' },
  { value: 'autumn', label: 'Autumn Season (Sep - Nov)' },
  { value: 'winter', label: 'Winter Season (Dec - Feb)' },
];

const travelerOptions = [
  { value: '2', label: '2 Travelers (Couples)' },
  { value: '4', label: '3-4 Travelers (Family)' },
  { value: '6', label: '5-8 Travelers (Group)' },
  { value: '1', label: 'Solo Traveler' },
];

export default function Hero() {
  const navigate = useNavigate();
  const { theme, setSeasonOverride } = useSeason();
  const [selectedDestination, setSelectedDestination] = useState('');
  const [selectedSeason, setSelectedSeason] = useState('all');
  const [selectedTravelers, setSelectedTravelers] = useState('2');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedDestination) {
      navigate(`/destinations/${selectedDestination}`);
    } else {
      if (selectedSeason !== 'all') {
        setSeasonOverride(selectedSeason as Season);
      }
      navigate('/destinations');
    }
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-16 sm:py-24 md:py-28"
      style={{
        background: `linear-gradient(180deg, ${theme.skyTop}, ${theme.skyBottom})`,
      }}
    >
      {/* 3D Background */}
      <Suspense fallback={null}>
        <HeroScene />
      </Suspense>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto pt-2 sm:pt-6">
        {/* Top Tagline & Rating Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-2 mb-3 sm:mb-4"
        >
          <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[#d4af37]">
            WELCOME TO 4 SEASONS HOLIDAYS
          </span>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-xs sm:text-sm text-slate-100 font-semibold shadow-lg">
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <span>4.9/5 from 1,500+ Happy Travelers</span>
          </div>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-3 sm:mb-5 drop-shadow-2xl leading-[1.05]"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Your Dream Trip <span className="text-[#d4af37] block font-serif">Awaits</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          className="text-base sm:text-xl md:text-2xl max-w-3xl mx-auto mb-6 sm:mb-8 text-slate-100 leading-relaxed font-light drop-shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Handcrafted journeys to India's most breathtaking destinations & paradise islands.<br className="hidden sm:block" />
          <span className="font-normal text-white"> 100% customizable, 100% unforgettable.</span>
        </motion.p>

        {/* Search / Booking Bar */}
        <motion.form
          onSubmit={handleSearch}
          className="glass-panel p-3.5 sm:p-4 rounded-2xl md:rounded-full max-w-4xl mx-auto shadow-2xl border border-white/20 backdrop-blur-xl bg-[#06152d]/85 text-left"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 items-center">
            {/* Field 1: Destination */}
            <div className="px-3.5 py-2.5 rounded-xl md:rounded-full bg-white/5 border border-white/10 hover:border-[#d4af37]/50 transition-colors">
              <label className="text-[0.65rem] uppercase tracking-wider text-[#d4af37] font-semibold flex items-center gap-1 mb-1">
                <MapPin className="w-3 h-3" /> Destination
              </label>
              <select
                value={selectedDestination}
                onChange={(e) => setSelectedDestination(e.target.value)}
                className="w-full bg-transparent text-sm text-white focus:outline-none cursor-pointer font-medium"
              >
                <option value="" className="bg-[#06152d] text-white">Where to?</option>
                {destinationOptions.map((opt) => (
                  <option key={opt.value} value={opt.value} className="bg-[#06152d] text-white">
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Field 2: Season / Date */}
            <div className="px-3.5 py-2.5 rounded-xl md:rounded-full bg-white/5 border border-white/10 hover:border-[#d4af37]/50 transition-colors">
              <label className="text-[0.65rem] uppercase tracking-wider text-[#d4af37] font-semibold flex items-center gap-1 mb-1">
                <Calendar className="w-3 h-3" /> Travel Season
              </label>
              <select
                value={selectedSeason}
                onChange={(e) => setSelectedSeason(e.target.value)}
                className="w-full bg-transparent text-sm text-white focus:outline-none cursor-pointer font-medium"
              >
                {seasonOptions.map((opt) => (
                  <option key={opt.value} value={opt.value} className="bg-[#06152d] text-white">
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Field 3: Travelers */}
            <div className="px-3.5 py-2.5 rounded-xl md:rounded-full bg-white/5 border border-white/10 hover:border-[#d4af37]/50 transition-colors">
              <label className="text-[0.65rem] uppercase tracking-wider text-[#d4af37] font-semibold flex items-center gap-1 mb-1">
                <Users className="w-3 h-3" /> Travelers
              </label>
              <select
                value={selectedTravelers}
                onChange={(e) => setSelectedTravelers(e.target.value)}
                className="w-full bg-transparent text-sm text-white focus:outline-none cursor-pointer font-medium"
              >
                {travelerOptions.map((opt) => (
                  <option key={opt.value} value={opt.value} className="bg-[#06152d] text-white">
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Field 4: Search Button */}
            <button
              type="submit"
              className="w-full min-h-[48px] py-3.5 px-6 rounded-xl md:rounded-full bg-gradient-to-r from-[#f5d77f] via-[#d4af37] to-[#b8860b] text-[#06152d] font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(212,175,55,0.4)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer"
            >
              <span>Search</span>
              <Search className="w-4 h-4" />
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
