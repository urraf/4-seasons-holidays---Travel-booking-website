import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState<'logo' | 'exit'>('logo');

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('exit'), 2200);
    const t2 = setTimeout(onComplete, 2700);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [onComplete]);

  const handleSkip = () => {
    setPhase('exit');
    setTimeout(onComplete, 300);
  };

  return (
    <AnimatePresence>
      {phase !== 'exit' && (
        <motion.div
          className="loader-screen"
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          onClick={handleSkip}
          role="button"
          aria-label="Skip intro"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && handleSkip()}
        >
          <motion.div
            className="flex flex-col items-center text-center px-4"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {/* Logo Emblem Container */}
            <div className="relative w-36 h-36 md:w-44 md:h-44 mb-6 rounded-full p-1 bg-gradient-to-tr from-[#d4af37] via-[#f5d77f] to-[#997522] shadow-[0_0_60px_rgba(212,175,55,0.5)] animate-pulse">
              <img
                src="/logo.png"
                alt="4 Seasons Holidays Emblem"
                className="w-full h-full rounded-full object-cover shadow-2xl"
              />
            </div>
            <h1 className="font-display text-4xl md:text-6xl font-semibold text-white tracking-tight leading-tight">
              4 SEASONS <span className="text-[#d4af37]">HOLIDAYS</span>
            </h1>
            <p className="text-[0.7rem] uppercase tracking-[0.4em] text-[#d4af37]/90 mt-2 font-semibold">
              TRAVEL AGENCY • EVERY SEASON HAS A DESTINATION
            </p>
          </motion.div>

          <p className="absolute bottom-8 text-white/30 text-xs tracking-widest uppercase font-light">
            Click anywhere to enter
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
