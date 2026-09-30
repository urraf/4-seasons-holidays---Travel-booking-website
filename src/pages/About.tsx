import { motion } from 'framer-motion';
import { useSeason } from '../context/SeasonContext';
import { Heart, Globe, Shield, Star, Clock, Award, Sparkles, CheckCircle2 } from 'lucide-react';

const values = [
  { icon: <Heart className="w-6 h-6" />, title: 'Travel with Heart', desc: 'Every journey is crafted with love and authenticity to honor local heritage, wildlife, and natural ecosystems.' },
  { icon: <Globe className="w-6 h-6" />, title: 'Seasonal Precision', desc: 'We time every expedition to nature\'s golden hour—ensuring you experience Kashmir in bloom, Goa in winter, or Kedarnath in summer.' },
  { icon: <Shield className="w-6 h-6" />, title: 'Royal Concierge', desc: 'From private shikara rides to luxury resort upgrades, our 24/7 dedicated travel concierge handles every detail.' },
  { icon: <Star className="w-6 h-6" />, title: 'Bespoke Journeys', desc: 'No cookie-cutter packages. Every itinerary is customized to your exact party size, pace, and luxury preferences.' },
];

const guarantees = [
  {
    icon: <Clock className="w-6 h-6 text-[#d4af37]" />,
    number: '01',
    title: '24/7 Dedicated Personal Travel Butler',
    desc: 'From your first WhatsApp inquiry to your flight home, a dedicated luxury travel manager coordinates every transport detail, hotel check-in, and special request in real time.',
  },
  {
    icon: <Award className="w-6 h-6 text-[#d4af37]" />,
    number: '02',
    title: 'Hand-Vetted 5-Star & Heritage Stays',
    desc: 'We personally audit every property—from hand-carved royal lake houseboats in Srinagar to luxury clifftop resorts in Bali, private beach villas in Goa, and tea estates in Munnar.',
  },
  {
    icon: <Shield className="w-6 h-6 text-[#d4af37]" />,
    number: '03',
    title: 'Transparent Price & Booking Integrity',
    desc: 'Zero hidden service fees or last-minute surprises. Every package detail comes with clear day-by-day itineraries, luxury inclusions, and complete pricing transparency.',
  },
  {
    icon: <Sparkles className="w-6 h-6 text-[#d4af37]" />,
    number: '04',
    title: 'Seasonal Prime Pacing',
    desc: 'We never send guests to destinations during off-peak windows. Every expedition is timed specifically to nature\'s prime seasonal window for peak beauty and weather.',
  },
  {
    icon: <CheckCircle2 className="w-6 h-6 text-[#d4af37]" />,
    number: '05',
    title: 'Direct WhatsApp Concierge Booking',
    desc: 'Enjoy effortless communication. Request quotes, customize itineraries, confirm guests, and finalize reservations directly via instant WhatsApp assistance.',
  },
];

export default function About() {
  const { theme } = useSeason();

  return (
    <main className="min-h-screen pt-28" style={{ background: 'var(--season-bg)' }}>
      {/* Hero */}
      <div className="container-main py-16 text-center">
        {/* Logo Crest */}
        <motion.div
          className="w-28 h-28 md:w-36 md:h-36 mx-auto mb-8 rounded-full p-1 bg-gradient-to-tr from-[#d4af37] via-[#f5d77f] to-[#997522] shadow-[0_0_50px_rgba(212,175,55,0.45)]"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <img src="/logo.png" alt="4 Seasons Holidays Logo Crest" className="w-full h-full rounded-full object-cover shadow-2xl" />
        </motion.div>

        <motion.span
          className="text-xs font-semibold uppercase tracking-[0.25em] mb-4 block text-[#d4af37]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Our Heritage & Philosophy
        </motion.span>
        <motion.h1
          className="font-display text-5xl md:text-7xl font-medium text-white mb-6 max-w-4xl mx-auto tracking-tight drop-shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          We Believe Every Season Tells an Extraordinary Story
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-slate-300 font-light max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          4 Seasons Holidays — Travel Agency is born from a conviction: that India's most breathtaking sanctuaries and island paradises reveal their true magic when visited in their prime season.
        </motion.p>
      </div>

      {/* Values */}
      <div className="container-main pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              className="glass-panel p-8 rounded-3xl border border-[#d4af37]/20 hover:border-[#d4af37]/50 transition-all duration-300 shadow-xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 shadow-md bg-[#d4af37]/20 text-[#d4af37]"
                style={{ boxShadow: `0 0 20px ${theme.glow}` }}
              >
                {v.icon}
              </div>
              <h3 className="font-display text-2xl text-white font-medium mb-2">{v.title}</h3>
              <p className="text-sm text-slate-300 font-light leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Guarantees & Distinction Section */}
      <div className="py-24 border-y border-[#d4af37]/20 bg-[#040e1d]">
        <div className="container-main">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#d4af37] block mb-2">
              Uncompromised Excellence
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-white font-medium tracking-tight drop-shadow-lg">
              The 4 Seasons Concierge Distinction
            </h2>
            <p className="text-sm text-slate-300 mt-4 font-light leading-relaxed">
              Why discerning travellers rely on 4 Seasons Holidays for their private luxury journeys across India and paradise island escapes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {guarantees.map((g, i) => (
              <motion.div
                key={g.number}
                className="glass-panel p-8 rounded-3xl border border-[#d4af37]/20 relative overflow-hidden group hover:border-[#d4af37] transition-all duration-300 shadow-xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-[#d4af37]/15 border border-[#d4af37]/30">
                    {g.icon}
                  </div>
                  <span className="font-display text-3xl font-bold text-[#d4af37]/30 group-hover:text-[#d4af37]/70 transition-colors">
                    {g.number}
                  </span>
                </div>
                <h3 className="font-display text-2xl text-white font-medium mb-3">{g.title}</h3>
                <p className="text-sm text-slate-300 font-light leading-relaxed">{g.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
