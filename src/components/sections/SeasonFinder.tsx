import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSeason } from '../../context/SeasonContext';
import { destinations } from '../../data/destinations';
import { packages as allPackages } from '../../data/packages';
import { formatPrice } from '../../utils/seasonTheme';
import { Sparkles, ArrowRight, MapPin, Calendar, Users, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';

const moods = ['Relax', 'Adventure', 'Romance', 'Family'];
const budgets = ['Budget', 'Mid-Range', 'Luxury'];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const monthToSeason: Record<string, string> = {
  Jan: 'winter', Feb: 'winter', Mar: 'spring', Apr: 'spring',
  May: 'spring', Jun: 'summer', Jul: 'summer', Aug: 'summer',
  Sep: 'autumn', Oct: 'autumn', Nov: 'autumn', Dec: 'winter',
};

const moodToTags: Record<string, string[]> = {
  Relax: ['Wellness', 'Luxury', 'Honeymoon'],
  Adventure: ['Adventure', 'Road Trip', 'Wildlife'],
  Romance: ['Honeymoon', 'Romance', 'Luxury'],
  Family: ['Family', 'Culture', 'Nature'],
};

const budgetRanges: Record<string, [number, number]> = {
  Budget: [0, 50000],
  'Mid-Range': [50000, 150000],
  Luxury: [150000, Infinity],
};

export default function SeasonFinder() {
  const { theme } = useSeason();
  const [step, setStep] = useState(0);
  const [mood, setMood] = useState('');
  const [budget, setBudget] = useState('');
  const [month, setMonth] = useState('');
  const [results, setResults] = useState<typeof allPackages>([]);
  const [showResults, setShowResults] = useState(false);

  const handleFind = () => {
    const targetSeason = monthToSeason[month] || 'spring';
    const tags = moodToTags[mood] || [];
    const [min, max] = budgetRanges[budget] || [0, Infinity];

    const matched = allPackages.filter((p) => {
      const seasonMatch = p.season === targetSeason;
      const tagMatch = tags.length === 0 || tags.some((t) => p.tags.includes(t));
      const budgetMatch = p.pricePerPerson >= min && p.pricePerPerson <= max;
      return seasonMatch && tagMatch && budgetMatch;
    });

    // Fallback to exact season match if price filter was too restrictive
    const fallbackSeasonMatched = allPackages.filter((p) => p.season === targetSeason);
    setResults(matched.length > 0 ? matched : fallbackSeasonMatched);
    setShowResults(true);
  };

  const stepVariants = {
    enter: { opacity: 0, x: 50 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 },
  };

  return (
    <section id="season-finder" className="section-padding relative" style={{ background: 'var(--season-bg)' }}>
      <div className="container-main">
        <div className="text-center mb-12">
          <motion.div
            className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Sparkles className="w-4 h-4" style={{ color: theme.primary }} />
            <span className="text-xs font-semibold uppercase tracking-widest text-slate-300">
              Interactive Travel Concierge
            </span>
          </motion.div>
          <h2 className="font-display text-4xl md:text-5xl text-white font-medium mb-4 tracking-tight drop-shadow-lg">
            Find Your Season
          </h2>
          <p className="text-slate-300 font-light max-w-lg mx-auto text-base md:text-lg">
            Answer three simple questions and our intelligent concierge will curate your bespoke seasonal escape.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="glass-panel p-8 md:p-12 rounded-3xl shadow-2xl border border-white/10">
            {!showResults ? (
              <AnimatePresence mode="wait">
                {step === 0 && (
                  <motion.div key="mood" variants={stepVariants} initial="enter" animate="center" exit="exit">
                    <div className="flex items-center gap-3 mb-6">
                      <Users className="w-5 h-5" style={{ color: theme.primary }} />
                      <h3 className="font-display text-2xl text-white font-medium">What's your travel mood?</h3>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      {moods.map((m) => (
                        <button
                          key={m}
                          onClick={() => { setMood(m); setStep(1); }}
                          className="p-4 rounded-xl text-left font-medium transition-all duration-300 hover:scale-[1.02] border"
                          style={{
                            background: mood === m ? theme.primary : 'rgba(255,255,255,0.06)',
                            color: mood === m ? '#03070d' : '#f8fafc',
                            borderColor: mood === m ? theme.primary : 'rgba(255,255,255,0.1)',
                            boxShadow: mood === m ? `0 0 20px ${theme.glow}` : 'none',
                          }}
                        >
                          {m === 'Relax' && '🧘'} {m === 'Adventure' && '🏔️'} {m === 'Romance' && '💕'} {m === 'Family' && '👨‍👩‍👧‍👦'} {m}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {step === 1 && (
                  <motion.div key="budget" variants={stepVariants} initial="enter" animate="center" exit="exit">
                    <div className="flex items-center gap-3 mb-6">
                      <DollarSign className="w-5 h-5" style={{ color: theme.primary }} />
                      <h3 className="font-display text-2xl text-white font-medium">Your budget range?</h3>
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                      {budgets.map((b) => (
                        <button
                          key={b}
                          onClick={() => { setBudget(b); setStep(2); }}
                          className="p-4 rounded-xl text-center font-medium transition-all duration-300 hover:scale-[1.02] border"
                          style={{
                            background: budget === b ? theme.primary : 'rgba(255,255,255,0.06)',
                            color: budget === b ? '#03070d' : '#f8fafc',
                            borderColor: budget === b ? theme.primary : 'rgba(255,255,255,0.1)',
                            boxShadow: budget === b ? `0 0 20px ${theme.glow}` : 'none',
                          }}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div key="month" variants={stepVariants} initial="enter" animate="center" exit="exit">
                    <div className="flex items-center gap-3 mb-6">
                      <Calendar className="w-5 h-5" style={{ color: theme.primary }} />
                      <h3 className="font-display text-2xl text-white font-medium">When do you want to travel?</h3>
                    </div>
                    <div className="grid grid-cols-4 md:grid-cols-6 gap-2">
                      {months.map((m) => (
                        <button
                          key={m}
                          onClick={() => { setMonth(m); }}
                          className="p-3 rounded-lg text-center text-sm font-medium transition-all duration-300 hover:scale-[1.05] border"
                          style={{
                            background: month === m ? theme.primary : 'rgba(255,255,255,0.06)',
                            color: month === m ? '#03070d' : '#f8fafc',
                            borderColor: month === m ? theme.primary : 'rgba(255,255,255,0.1)',
                            boxShadow: month === m ? `0 0 20px ${theme.glow}` : 'none',
                          }}
                        >
                          {m}
                        </button>
                      ))}
                    </div>
                    {month && (
                      <motion.button
                        className="magnetic-btn mt-6 w-full justify-center text-slate-950 font-bold tracking-widest text-xs uppercase"
                        style={{ background: theme.primary }}
                        onClick={handleFind}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        Find My Perfect Trip <ArrowRight className="w-4 h-4 ml-2" />
                      </motion.button>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            ) : (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                <h3 className="font-display text-2xl text-white mb-6">
                  ✨ Your Curated Matches
                </h3>
                <div className="space-y-4">
                  {results.map((pkg) => {
                    const dest = destinations.find((d) => d.id === pkg.destinationId);
                    return (
                      <Link
                        key={pkg.id}
                        to={`/destinations/${pkg.destinationId}`}
                        className="flex gap-4 p-4 rounded-2xl transition-all duration-300 hover:scale-[1.01] group border border-white/10 bg-white/5 backdrop-blur-md"
                      >
                        <img
                          src={dest?.image}
                          alt={pkg.title}
                          className="w-20 h-20 rounded-xl object-cover flex-shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="font-display text-lg text-white font-medium truncate">
                            {pkg.title}
                          </h4>
                          <div className="flex items-center gap-1 text-xs text-slate-400 mt-1">
                            <MapPin className="w-3 h-3" />
                            <span>{dest?.country}</span>
                            <span className="mx-1">•</span>
                            <span>{pkg.duration}</span>
                          </div>
                          <div className="flex items-center justify-between mt-2">
                            <span className="font-semibold" style={{ color: theme.primary }}>
                              {formatPrice(pkg.pricePerPerson)}
                            </span>
                            <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-white" />
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
                <button
                  onClick={() => { setShowResults(false); setStep(0); setMood(''); setBudget(''); setMonth(''); }}
                  className="mt-6 text-sm font-medium link-underline text-white"
                >
                  Try different preferences
                </button>
              </motion.div>
            )}

            {/* Progress dots */}
            {!showResults && (
              <div className="flex justify-center gap-2 mt-8">
                {[0, 1, 2].map((s) => (
                  <button
                    key={s}
                    onClick={() => s < step && setStep(s)}
                    className="h-2 rounded-full transition-all duration-300"
                    style={{
                      background: s <= step ? theme.primary : 'rgba(255,255,255,0.2)',
                      width: s === step ? '1.5rem' : '0.5rem',
                    }}
                    aria-label={`Step ${s + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
