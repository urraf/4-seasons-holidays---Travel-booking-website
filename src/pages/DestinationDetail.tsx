import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useSeason } from '../context/SeasonContext';
import { getDestinationById } from '../data/destinations';
import { getPackagesByDestination } from '../data/packages';
import { formatPrice } from '../utils/seasonTheme';
import { MapPin, Star, Calendar, Thermometer, ArrowLeft, Check, X, Clock, Users, ChevronRight } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';
import { sendWhatsAppBooking } from '../utils/whatsapp';

export default function DestinationDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { theme, setSeasonOverride } = useSeason();
  const dest = getDestinationById(id || '');
  const pkgs = getPackagesByDestination(id || '');
  const [travellers, setTravellers] = useState(2);
  const [selectedPkg, setSelectedPkg] = useState(pkgs[0]);
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (dest) {
      setSeasonOverride(dest.season);
    }
    return () => setSeasonOverride(null);
  }, [dest, setSeasonOverride]);

  useEffect(() => {
    if (pkgs.length > 0 && !selectedPkg) {
      setSelectedPkg(pkgs[0]);
    }
  }, [pkgs, selectedPkg]);

  if (!dest) {
    return (
      <main className="min-h-screen flex items-center justify-center pt-24" style={{ background: 'var(--season-bg)' }}>
        <div className="text-center">
          <h1 className="font-display text-4xl mb-4" style={{ color: theme.text }}>Destination Not Found</h1>
          <Link to="/destinations" className="magnetic-btn" style={{ background: theme.primary }}>
            Browse Destinations
          </Link>
        </div>
      </main>
    );
  }

  const totalPrice = selectedPkg ? selectedPkg.pricePerPerson * travellers : 0;

  return (
    <main className="min-h-screen" style={{ background: 'var(--season-bg)' }}>
      {/* Hero */}
      <div className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <motion.img
          src={dest.image}
          alt={dest.name}
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

        {/* Back button */}
        <motion.button
          onClick={() => navigate(-1)}
          className="absolute top-24 left-6 md:left-12 flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </motion.button>

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
          <div className="container-main">
            <motion.div
              className="flex items-center gap-2 mb-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <MapPin className="w-4 h-4 text-white/60" />
              <span className="text-white/60 text-sm">{dest.country}</span>
              <span className="text-white/30 mx-1">•</span>
              <span className="text-white/60 text-sm capitalize">{dest.season}</span>
            </motion.div>

            <motion.h1
              className="font-display text-5xl md:text-7xl text-white font-light mb-3"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {dest.name}
            </motion.h1>

            <motion.p
              className="text-xl text-white/60 italic font-display"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              {dest.tagline}
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-6 mt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <div className="flex items-center gap-2 text-white/70 text-sm">
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                <span>{dest.rating} / 5</span>
              </div>
              <div className="flex items-center gap-2 text-white/70 text-sm">
                <Thermometer className="w-4 h-4" />
                <span>{dest.avgTemp}</span>
              </div>
              <div className="flex items-center gap-2 text-white/70 text-sm">
                <Calendar className="w-4 h-4" />
                <span>{dest.bestMonths.join(', ')}</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container-main py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Description */}
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="font-display text-4xl text-white font-medium mb-4">
                About {dest.name}
              </h2>
              <p className="text-lg text-slate-300 font-light leading-relaxed">
                {dest.description}
              </p>
            </motion.div>

            {/* Highlights */}
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h3 className="font-display text-3xl text-white font-medium mb-6">Expedition Highlights</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {dest.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 rounded-2xl glass-panel border border-white/10"
                    style={{ background: `${theme.primary}10` }}
                  >
                    <Check className="w-4 h-4 flex-shrink-0" style={{ color: theme.primary }} />
                    <span className="text-sm text-slate-200 font-medium">{h}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Gallery */}
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <h3 className="font-display text-3xl text-white font-medium mb-6">Visual Gallery</h3>
              <div className="grid grid-cols-3 gap-4">
                {dest.gallery.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setLightboxImg(img)}
                    className="relative overflow-hidden rounded-2xl aspect-square group cursor-pointer border border-white/10"
                  >
                    <img src={img} alt={`${dest.name} ${i + 1}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors" />
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Itinerary */}
            {selectedPkg && (
              <motion.div
                ref={timelineRef}
                className="mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <h3 className="font-display text-3xl text-white font-medium mb-6">
                  Day-by-Day Itinerary Timeline
                </h3>
                <div className="relative">
                  {/* Timeline line */}
                  <div className="absolute left-5 top-0 bottom-0 w-0.5" style={{ background: `${theme.primary}40` }} />

                  {selectedPkg.itinerary.map((day, i) => (
                    <motion.div
                      key={day.day}
                      className="relative pl-14 pb-8 last:pb-0"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                    >
                      {/* Dot */}
                      <div
                        className="absolute left-3 top-1 w-5 h-5 rounded-full border-2 bg-slate-950"
                        style={{ borderColor: theme.primary }}
                      >
                        <div className="absolute inset-1 rounded-full animate-pulse" style={{ background: theme.primary }} />
                      </div>

                      <div className="glass-panel p-6 rounded-3xl border border-white/10 shadow-xl">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-white/10"
                            style={{ background: theme.primary, color: '#03070d' }}
                          >
                            Day {day.day}
                          </span>
                          <h4 className="font-display text-2xl text-white font-medium">
                            {day.title}
                          </h4>
                        </div>
                        <p className="text-sm text-slate-300 font-light mb-4 leading-relaxed">
                          {day.description}
                        </p>
                        <div className="flex gap-4 text-xs text-slate-400 font-semibold uppercase tracking-wider pt-3 border-t border-white/10">
                          <span>🍽️ {day.meals}</span>
                          <span>🏨 {day.accommodation}</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Inclusions / Exclusions */}
            {selectedPkg && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <div className="glass-panel p-6 rounded-3xl border border-white/10">
                  <h4 className="font-display text-xl text-white font-medium mb-4 flex items-center gap-2">
                    <Check className="w-5 h-5 text-emerald-400" />
                    Included Privileges
                  </h4>
                  <ul className="space-y-3">
                    {selectedPkg.included.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-slate-300 font-light">
                        <Check className="w-4 h-4 mt-0.5 flex-shrink-0 text-emerald-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="glass-panel p-6 rounded-3xl border border-white/10">
                  <h4 className="font-display text-xl text-white font-medium mb-4 flex items-center gap-2">
                    <X className="w-5 h-5 text-rose-400" />
                    Not Included
                  </h4>
                  <ul className="space-y-3">
                    {selectedPkg.excluded.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-slate-300 font-light">
                        <X className="w-4 h-4 mt-0.5 flex-shrink-0 text-rose-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>

          {/* Sticky Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-28">
              <div className="glass-panel p-8 rounded-3xl border border-white/10 shadow-2xl">
                {/* Package selector */}
                {pkgs.length > 1 && (
                  <div className="mb-6">
                    <label className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-3 block">
                      Select Package Tier
                    </label>
                    {pkgs.map((p) => (
                      <button
                        key={p.id}
                        onClick={() => setSelectedPkg(p)}
                        className="w-full text-left p-4 rounded-xl mb-2 transition-all text-sm border"
                        style={{
                          background: selectedPkg?.id === p.id ? `${theme.primary}20` : 'rgba(255,255,255,0.04)',
                          borderColor: selectedPkg?.id === p.id ? theme.primary : 'rgba(255,255,255,0.1)',
                          color: '#ffffff',
                        }}
                      >
                        <span className="font-medium text-white block">{p.title}</span>
                        <span className="block text-xs text-slate-400 mt-1">{p.duration}</span>
                      </button>
                    ))}
                  </div>
                )}

                {selectedPkg && (
                  <>
                    {/* Price */}
                    <div className="mb-6">
                      <div className="flex items-baseline gap-2">
                        <span className="font-display text-4xl font-bold" style={{ color: theme.primary }}>
                          {formatPrice(selectedPkg.pricePerPerson)}
                        </span>
                        <span className="text-sm text-slate-500 line-through">
                          {formatPrice(selectedPkg.originalPrice)}
                        </span>
                      </div>
                      <span className="text-xs text-slate-400">per person (taxes & fees included)</span>
                    </div>

                    {/* Details */}
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center justify-between text-sm text-slate-300">
                        <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-[#d4af37]" /> Duration (Days & Nights)</span>
                        <span className="font-semibold text-[#d4af37] px-2.5 py-1 rounded-md bg-[#d4af37]/10 border border-[#d4af37]/30">{selectedPkg.duration}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm text-slate-300">
                        <span className="flex items-center gap-2"><Users className="w-4 h-4 text-slate-400" /> Group Size</span>
                        <span className="font-medium text-white">{selectedPkg.groupSize}</span>
                      </div>
                    </div>

                    {/* Traveller Count */}
                    <div className="mb-6">
                      <label className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-2 block">
                        Number of Travellers
                      </label>
                      <div className="flex items-center gap-4">
                        <button
                          onClick={() => setTravellers(Math.max(1, travellers - 1))}
                          className="w-10 h-10 rounded-lg flex items-center justify-center text-lg font-bold transition-colors"
                          style={{ background: `${theme.primary}15`, color: theme.primary }}
                        >
                          −
                        </button>
                        <span className="font-display text-2xl font-medium w-8 text-center" style={{ color: theme.text }}>
                          {travellers}
                        </span>
                        <button
                          onClick={() => setTravellers(Math.min(12, travellers + 1))}
                          className="w-10 h-10 rounded-lg flex items-center justify-center text-lg font-bold transition-colors"
                          style={{ background: `${theme.primary}15`, color: theme.primary }}
                        >
                          +
                        </button>
                      </div>
                    </div>

                    {/* Total */}
                    <div className="p-4 rounded-xl mb-6" style={{ background: `${theme.primary}10` }}>
                      <div className="flex items-center justify-between">
                        <span className="text-sm opacity-60" style={{ color: theme.text }}>Total Estimate</span>
                        <span className="font-display text-2xl font-semibold" style={{ color: theme.primary }}>
                          {formatPrice(totalPrice)}
                        </span>
                      </div>
                    </div>

                    {/* CTA */}
                    <button
                      onClick={() =>
                        sendWhatsAppBooking({
                          destinationName: dest.name,
                          packageTitle: selectedPkg.title,
                          season: dest.season,
                          travellers,
                          totalPrice,
                        })
                      }
                      className="magnetic-btn w-full justify-center text-sm font-bold tracking-wider text-slate-950"
                      style={{ background: theme.primary }}
                    >
                      Book via WhatsApp Concierge
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxImg && (
        <motion.div
          className="fixed inset-0 z-[200] bg-black/90 flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setLightboxImg(null)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.img
            src={lightboxImg.replace('w=800', 'w=1600')}
            alt="Gallery"
            className="max-w-full max-h-[90vh] rounded-xl object-contain"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
          <button
            onClick={() => setLightboxImg(null)}
            className="absolute top-6 right-6 text-white/60 hover:text-white"
            aria-label="Close lightbox"
          >
            <X className="w-8 h-8" />
          </button>
        </motion.div>
      )}
    </main>
  );
}
