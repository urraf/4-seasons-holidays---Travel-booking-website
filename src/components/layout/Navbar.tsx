import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, MapPin, Mail } from 'lucide-react';
import { useSeason } from '../../context/SeasonContext';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/destinations', label: 'Destinations' },
  { path: '/about', label: 'About' },
  { path: '/blog', label: 'Blog' },
  { path: '/reviews', label: 'Reviews' },
  { path: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { theme } = useSeason();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-[100] transition-all duration-500"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Top Official Contact Bar */}
        <div className="bg-[#030a16] border-b border-[#d4af37]/20 py-1 px-3 sm:px-4 text-[0.65rem] sm:text-[0.72rem] text-slate-300">
          <div className="container-main flex flex-col sm:flex-row justify-between items-center gap-1">
            <div className="flex items-center gap-3 flex-wrap justify-center sm:justify-start">
              <span className="flex items-center gap-1.5 font-medium text-[#d4af37]">
                <Phone className="w-3 h-3 text-[#d4af37]" />
                <span>Call Hotline:</span>
                <a href="tel:8384080652" className="hover:underline text-white font-semibold">8384080652</a>
                <span className="text-[#d4af37]/50">|</span>
                <a href="tel:9315900730" className="hover:underline text-white font-semibold">9315900730</a>
                <span className="text-[#d4af37]/50">|</span>
                <a href="tel:8700524632" className="hover:underline text-white font-semibold">8700524632</a>
              </span>
              <span className="hidden xl:flex items-center gap-1 text-slate-400">
                <MapPin className="w-3 h-3 text-[#d4af37]" />
                <span>K2 612 Sangam Vihar, South Delhi - 110062</span>
              </span>
            </div>
            <div className="hidden md:flex items-center gap-3">
              <a href="mailto:sales@4seasonsholidays.co.in" className="flex items-center gap-1 text-slate-300 hover:text-[#d4af37] transition-colors">
                <Mail className="w-3 h-3 text-[#d4af37]" /> sales@4seasonsholidays.co.in
              </a>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <div className={`transition-all duration-500 ${scrolled ? 'nav-blur py-2.5' : 'py-3.5 bg-[#06152d]/90 backdrop-blur-md'}`}>
          <nav className="container-main flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3.5 group">
              <div
                className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-[#d4af37]/70 shadow-lg transition-all duration-500 group-hover:scale-105 group-hover:border-[#d4af37]"
                style={{ boxShadow: `0 0 20px rgba(212, 175, 55, 0.4)` }}
              >
                <img src="/logo.png" alt="4 Seasons Holidays" className="w-full h-full object-cover" />
              </div>
              <div>
                <span className="font-display text-xl md:text-2xl font-bold tracking-tight text-white block leading-tight">
                  4 SEASONS <span className="text-[#d4af37]">HOLIDAYS</span>
                </span>
                <span className="block text-[0.55rem] uppercase tracking-[0.25em] text-[#d4af37]/90 font-semibold">
                  TRAVEL AGENCY
                </span>
              </div>
            </Link>

            {/* Active Season Badge */}
            <div className="hidden md:flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#d4af37]/30 bg-[#06152d]/80 backdrop-blur-md text-xs font-medium text-slate-200 shadow-md">
              <span className="w-2 h-2 rounded-full animate-pulse bg-[#d4af37]" />
              <span className="uppercase tracking-widest text-[0.68rem] text-[#d4af37] font-semibold">{theme.label} Mode</span>
            </div>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="link-underline text-sm font-medium tracking-wide transition-colors duration-300"
                  style={{
                    color: location.pathname === link.path
                      ? '#d4af37'
                      : 'rgba(255,255,255,0.88)',
                  }}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="tel:8384080652"
                className="px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider text-white border border-[#d4af37]/50 bg-[#d4af37]/15 hover:bg-[#d4af37] hover:text-[#06152d] transition-all duration-300 flex items-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5" />
                Call Now
              </a>
              <Link
                to="/contact"
                className="magnetic-btn text-xs !py-2.5 !px-5"
                style={{ background: 'linear-gradient(135deg, #f5d77f, #d4af37)', color: '#06152d' }}
              >
                Plan My Season
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg border border-[#d4af37]/30 bg-[#06152d]/60"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-[#d4af37]" />
              ) : (
                <Menu className="w-6 h-6 text-[#d4af37]" />
              )}
            </button>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Menu Drawer & Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop Blur Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-[98] bg-black/60 backdrop-blur-xs lg:hidden cursor-pointer"
            />

            {/* Right Side Drawer */}
            <motion.div
              className="fixed top-0 right-0 bottom-0 w-[75vw] max-w-xs sm:max-w-sm z-[99] bg-[#06152d] border-l border-[#d4af37]/50 shadow-[0_0_50px_rgba(0,0,0,0.8)] p-5 sm:p-6 flex flex-col justify-between overflow-y-auto lg:hidden"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Drawer Top Bar */}
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-[#d4af37]/25 mb-6">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-full overflow-hidden border border-[#d4af37]">
                      <img src="/logo.png" alt="4 Seasons" className="w-full h-full object-cover" />
                    </div>
                    <span className="font-display text-lg font-bold text-white leading-tight">
                      4 SEASONS <span className="text-[#d4af37] block text-[0.65rem] tracking-widest font-sans uppercase">HOLIDAYS</span>
                    </span>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-slate-300 hover:text-white cursor-pointer"
                    aria-label="Close menu"
                  >
                    <X className="w-4 h-4 text-[#d4af37]" />
                  </button>
                </div>

                {/* Nav Links */}
                <nav className="space-y-1.5 mb-6">
                  {navLinks.map((link) => {
                    const isActive = location.pathname === link.path;
                    return (
                      <Link
                        key={link.path}
                        to={link.path}
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center justify-between px-4 py-3 rounded-xl transition-all font-medium text-base ${
                          isActive
                            ? 'bg-[#d4af37]/20 border border-[#d4af37]/60 text-[#d4af37] font-bold'
                            : 'text-slate-200 hover:bg-white/5 hover:text-white'
                        }`}
                      >
                        <span>{link.label}</span>
                        {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />}
                      </Link>
                    );
                  })}
                </nav>
              </div>

              {/* Bottom Hotlines & Action */}
              <div className="pt-4 border-t border-[#d4af37]/20 space-y-3">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs">
                  <span className="text-[0.6rem] uppercase tracking-wider text-[#d4af37] font-bold block mb-1.5">
                    Direct Call Hotline
                  </span>
                  <div className="space-y-1 font-mono font-bold text-white text-sm">
                    <a href="tel:8384080652" className="flex items-center justify-between hover:text-[#d4af37]">
                      <span>📞 8384080652</span>
                      <span className="text-[0.55rem] uppercase px-1.5 py-0.5 rounded bg-[#d4af37] text-[#06152d]">Call</span>
                    </a>
                    <a href="tel:9315900730" className="flex items-center justify-between hover:text-[#d4af37]">
                      <span>📞 9315900730</span>
                      <span className="text-[0.55rem] uppercase px-1.5 py-0.5 rounded bg-[#d4af37] text-[#06152d]">Call</span>
                    </a>
                  </div>
                </div>

                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-[#f5d77f] via-[#d4af37] to-[#b8860b] text-[#06152d] font-bold text-xs uppercase tracking-wider flex items-center justify-center shadow-lg"
                >
                  Plan My Season
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
