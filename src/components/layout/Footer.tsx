import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Camera, MessageCircle, Play, Mail, Phone, MapPin } from 'lucide-react';
import { useSeason } from '../../context/SeasonContext';

export default function Footer() {
  const { setProgress } = useSeason();

  return (
    <footer className="relative overflow-hidden border-t border-[#d4af37]/20" style={{ background: '#040d1a', color: 'rgba(255,255,255,0.75)' }}>
      {/* Oversized Animated Wordmark */}
      <div className="overflow-hidden py-10 border-b border-white/5 bg-[#030914]">
        <motion.div
          className="font-display whitespace-nowrap text-[#d4af37]/15 font-bold tracking-tighter uppercase"
          style={{ fontSize: 'clamp(3.5rem, 12vw, 10rem)', lineHeight: 1 }}
          animate={{ x: [0, -1000] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        >
          4 Seasons Holidays • Travel Agency • Every Season Has a Destination &nbsp;•&nbsp;
        </motion.div>
      </div>

      <div className="container-main py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-3.5 mb-6 group">
              <div
                className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#d4af37]/70 shadow-lg transition-transform duration-500 group-hover:scale-105"
                style={{ boxShadow: `0 0 25px rgba(212, 175, 55, 0.35)` }}
              >
                <img src="/logo.png" alt="4 Seasons Holidays Logo" className="w-full h-full object-cover" />
              </div>
              <div>
                <span className="font-display text-2xl font-bold text-white block leading-tight">
                  4 SEASONS <span className="text-[#d4af37]">HOLIDAYS</span>
                </span>
                <span className="block text-[0.6rem] uppercase tracking-[0.25em] text-[#d4af37]/90 font-semibold mt-0.5">
                  TRAVEL AGENCY
                </span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-slate-300 font-light">
              Crafting extraordinary luxury travel experiences across nature's four chapters. World-class expeditions curated with uncompromised precision across India & paradise island getaways.
            </p>
            <div className="flex gap-3 mt-6">
              {[Camera, MessageCircle, Play].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-xl flex items-center justify-center border border-[#d4af37]/30 hover:border-[#d4af37] hover:bg-[#d4af37]/10 transition-all text-[#d4af37]">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-display text-xl mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
              Navigation
            </h4>
            <ul className="space-y-3 text-sm">
              {['Destinations', 'About Us', 'Blog', 'Reviews', 'Contact'].map((item) => (
                <li key={item}>
                  <Link to={`/${item.toLowerCase().replace(' ', '-').replace('about-us','about')}`} className="text-slate-300 hover:text-[#d4af37] transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Seasons */}
          <div>
            <h4 className="text-white font-display text-xl mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
              Experience Seasons
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                { icon: '🌸', label: 'Spring Collection', progress: 0.1 },
                { icon: '☀️', label: 'Summer Escapes', progress: 0.35 },
                { icon: '🍂', label: 'Autumn Reverie', progress: 0.6 },
                { icon: '❄️', label: 'Winter Majesty', progress: 0.85 },
              ].map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => setProgress(item.progress)}
                    className="text-slate-300 hover:text-[#d4af37] transition-colors flex items-center gap-2 text-left"
                  >
                    <span>{item.icon}</span> {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details from Official Banner */}
          <div>
            <h4 className="text-white font-display text-xl mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
              Official Concierge
            </h4>
            <ul className="space-y-4 text-sm text-slate-300">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0 text-[#d4af37]" />
                <span>K2 612 Sangam Vihar, South Delhi - 110062</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-1 flex-shrink-0 text-[#d4af37]" />
                <div className="flex flex-col gap-1">
                  <a href="tel:8384080652" className="hover:text-[#d4af37] transition-colors font-medium">8384080652</a>
                  <a href="tel:9315900730" className="hover:text-[#d4af37] transition-colors font-medium">9315900730</a>
                  <a href="tel:8700524632" className="hover:text-[#d4af37] transition-colors font-medium">8700524632</a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 flex-shrink-0 text-[#d4af37]" />
                <a href="mailto:sales@4seasonsholidays.co.in" className="hover:text-[#d4af37] transition-colors text-xs truncate">
                  sales@4seasonsholidays.co.in
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5 py-6 bg-black/50">
        <div className="container-main flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
          <p>&copy; {new Date().getFullYear()} 4 Seasons Holidays — Travel Agency. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#d4af37] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#d4af37] transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-[#d4af37] transition-colors">Cancellation Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
