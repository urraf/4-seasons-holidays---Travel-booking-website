import { motion } from 'framer-motion';
import { useSeason } from '../context/SeasonContext';
import { testimonials } from '../data/testimonials';
import { Star, Quote, MapPin } from 'lucide-react';

export default function Reviews() {
  const { theme } = useSeason();

  const avgRating = (testimonials.reduce((a, t) => a + t.rating, 0) / testimonials.length).toFixed(1);

  return (
    <main className="min-h-screen pt-24" style={{ background: 'var(--season-bg)' }}>
      <div className="container-main py-16 md:py-24">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h1
            className="font-display text-5xl md:text-7xl text-white font-medium mb-4 tracking-tight drop-shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Verified Guest Impressions
          </motion.h1>
          <motion.div
            className="inline-flex items-center justify-center gap-3 mb-4 px-6 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="font-display text-2xl font-bold text-white">
              {avgRating} / 5.0
            </span>
            <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
              ({testimonials.length} Authentic Expeditions)
            </span>
          </motion.div>
          <motion.p
            className="text-slate-300 font-light max-w-lg mx-auto text-base leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Unfiltered feedback from discerning travellers who embarked on bespoke 4 Seasons Holidays journeys.
          </motion.p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              className="glass-panel p-8 rounded-3xl border border-white/10 hover:border-white/20 transition-all duration-300 shadow-xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Quote className="w-10 h-10 mb-4 opacity-50" style={{ color: theme.primary }} />

              <p className="text-slate-200 text-lg leading-relaxed mb-6 italic font-light">
                "{t.text}"
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <div className="flex items-center gap-3">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-11 h-11 rounded-full object-cover border-2 border-white/20"
                    loading="lazy"
                  />
                  <div>
                    <p className="font-medium text-white text-base">{t.name}</p>
                    <div className="flex items-center gap-1 text-xs text-slate-400">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{t.location}</span>
                    </div>
                  </div>
                </div>

                <div className="text-right">
                  <div className="flex gap-0.5 justify-end mb-1">
                    {Array.from({ length: t.rating }).map((_, s) => (
                      <Star key={s} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs font-semibold text-slate-400">
                    <span style={{ color: theme.primary }}>{t.destination}</span> • {t.date}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
