import { useState } from 'react';
import { motion, useMotionValue, animate } from 'framer-motion';
import type { PanInfo } from 'framer-motion';
import { useSeason } from '../../context/SeasonContext';
import { testimonials } from '../../data/testimonials';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const { theme } = useSeason();
  const [currentIndex, setCurrentIndex] = useState(0);
  const dragX = useMotionValue(0);

  const handleDragEnd = (_event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const threshold = 80;
    if (info.offset.x < -threshold && currentIndex < testimonials.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else if (info.offset.x > threshold && currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
    animate(dragX, 0, { type: 'spring', stiffness: 300, damping: 30 });
  };

  return (
    <section className="section-padding overflow-hidden" style={{ background: 'var(--season-bg)' }}>
      <div className="container-main">
        <div className="text-center mb-16">
          <motion.span
            className="text-xs font-semibold uppercase tracking-[0.25em] mb-3 block"
            style={{ color: theme.primary }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Luxury Traveller Stories
          </motion.span>
          <motion.h2
            className="font-display text-4xl md:text-5xl text-white font-medium tracking-tight drop-shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Whispers of Extraordinary Expeditions
          </motion.h2>
        </div>

        {/* Draggable Card Stack */}
        <div className="relative max-w-2xl mx-auto h-[420px]">
          {testimonials.map((t, i) => {
            const isActive = i === currentIndex;
            const offset = i - currentIndex;
            const isVisible = Math.abs(offset) <= 2;

            if (!isVisible) return null;

            return (
              <motion.div
                key={t.id}
                className="absolute inset-0 cursor-grab active:cursor-grabbing"
                style={{
                  zIndex: testimonials.length - Math.abs(offset),
                  x: isActive ? dragX : 0,
                }}
                animate={{
                  scale: 1 - Math.abs(offset) * 0.05,
                  y: offset * 20,
                  opacity: 1 - Math.abs(offset) * 0.3,
                  rotateZ: offset * 2,
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                drag={isActive ? 'x' : false}
                dragConstraints={{ left: -200, right: 200 }}
                onDragEnd={isActive ? handleDragEnd : undefined}
                dragElastic={0.2}
              >
                <div
                  className="glass-panel h-full p-8 md:p-10 flex flex-col justify-between rounded-3xl border border-white/10 shadow-2xl"
                  style={{
                    boxShadow: isActive ? `0 20px 60px rgba(0,0,0,0.6), 0 0 30px ${theme.glow}` : '0 10px 30px rgba(0,0,0,0.5)',
                  }}
                >
                  <div>
                    <Quote className="w-10 h-10 mb-4 opacity-50" style={{ color: theme.primary }} />
                    <p className="text-lg md:text-xl leading-relaxed italic mb-6 text-slate-200 font-light">
                      "{t.text}"
                    </p>
                  </div>

                  <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-white/20"
                      loading="lazy"
                    />
                    <div className="flex-1">
                      <p className="font-medium text-white text-base">{t.name}</p>
                      <p className="text-xs text-slate-400">
                        {t.location} • <span style={{ color: theme.primary }}>{t.destination}</span>
                      </p>
                    </div>
                    <div className="flex gap-0.5">
                      {Array.from({ length: t.rating }).map((_, s) => (
                        <Star key={s} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Navigation dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className="h-2 rounded-full transition-all duration-300"
              style={{
                background: i === currentIndex ? theme.primary : 'rgba(255,255,255,0.2)',
                width: i === currentIndex ? '1.5rem' : '0.5rem',
              }}
              aria-label={`Testimonial ${i + 1}`}
            />
          ))}
        </div>

        <p className="text-center text-xs text-slate-500 uppercase tracking-widest mt-4">
          Drag cards to navigate
        </p>
      </div>
    </section>
  );
}
