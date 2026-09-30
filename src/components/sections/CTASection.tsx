import { motion } from 'framer-motion';
import { useSeason } from '../../context/SeasonContext';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Mail, ArrowRight } from 'lucide-react';

export default function CTASection() {
  const { theme } = useSeason();

  return (
    <section
      className="relative py-28 md:py-36 overflow-hidden"
      style={{
        background: `linear-gradient(135deg, ${theme.skyTop}, ${theme.primary}30, ${theme.skyBottom})`,
      }}
    >
      {/* Background glow effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#d4af37]/10 blur-[120px]" />
      </div>

      <div className="container-main relative z-10 text-center">
        <motion.span
          className="text-xs font-semibold uppercase tracking-[0.25em] text-[#d4af37] block mb-3"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          OFFICIAL TRAVEL CONCIERGE
        </motion.span>

        <motion.h2
          className="font-display text-4xl md:text-6xl font-medium mb-4 max-w-3xl mx-auto text-white tracking-tight drop-shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Ready to Plan Your Dream Journey?
        </motion.h2>

        <motion.p
          className="text-base md:text-xl text-slate-300 font-light max-w-xl mx-auto mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Connect with our travel team directly via phone, WhatsApp, or email for instant custom quotes.
        </motion.p>

        {/* Royal Official Contact Graphic Box */}
        <motion.div
          className="max-w-4xl mx-auto p-6 md:p-10 rounded-3xl bg-[#06152d] border-2 border-[#d4af37]/80 shadow-[0_0_60px_rgba(212,175,55,0.35)] relative overflow-hidden text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          {/* Header Divider */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-0.5 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent w-16 md:w-36" />
            <span className="text-xs md:text-sm font-bold tracking-[0.3em] uppercase text-[#d4af37] border-y border-[#d4af37]/60 py-1 px-4">
              ❖ CONTACT NO ❖
            </span>
            <div className="h-0.5 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent w-16 md:w-36" />
          </div>

          {/* Hotline Numbers */}
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 text-xl sm:text-2xl md:text-4xl font-serif font-bold text-[#d4af37] mb-6">
            <a href="tel:8384080652" className="flex items-center gap-2 hover:scale-105 transition-transform text-[#d4af37]">
              <Phone className="w-6 h-6 md:w-8 md:h-8 p-1.5 rounded-full bg-[#d4af37] text-[#06152d] flex-shrink-0" />
              <span>8384080652</span>
            </a>
            <span className="text-[#d4af37]/40 hidden md:inline">|</span>
            <a href="tel:9315900730" className="hover:scale-105 transition-transform text-[#d4af37]">
              9315900730
            </a>
            <span className="text-[#d4af37]/40 hidden md:inline">|</span>
            <a href="tel:8700524632" className="hover:scale-105 transition-transform text-[#d4af37]">
              8700524632
            </a>
          </div>

          <div className="h-px bg-gradient-to-r from-transparent via-[#d4af37]/40 to-transparent w-full my-6" />

          {/* Address */}
          <div className="flex items-center justify-center gap-3 text-base md:text-2xl font-serif text-[#d4af37] mb-6">
            <MapPin className="w-5 h-5 md:w-7 md:h-7 p-1 rounded-full bg-[#d4af37] text-[#06152d] flex-shrink-0" />
            <span>K2 612 Sangam Vihar, South Delhi - 110062</span>
          </div>

          <div className="h-px bg-gradient-to-r from-transparent via-[#d4af37]/40 to-transparent w-full my-6" />

          {/* Email */}
          <div className="flex items-center justify-center gap-3 text-base md:text-2xl font-serif text-[#d4af37]">
            <Mail className="w-5 h-5 md:w-7 md:h-7 p-1 rounded-full bg-[#d4af37] text-[#06152d] flex-shrink-0" />
            <a href="mailto:sales@4seasonsholidays.co.in" className="hover:underline text-[#d4af37] font-semibold">
              sales@4seasonsholidays.co.in
            </a>
          </div>
        </motion.div>

        {/* Plan Trip CTA */}
        <motion.div
          className="mt-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <Link
            to="/contact"
            className="magnetic-btn text-xs font-bold uppercase tracking-widest text-[#06152d] !px-10 !py-4"
            style={{ background: 'linear-gradient(135deg, #f5d77f, #d4af37)' }}
          >
            Plan My Bespoke Expedition
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
