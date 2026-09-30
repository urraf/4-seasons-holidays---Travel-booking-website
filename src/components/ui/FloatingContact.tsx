import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MapPin, Mail, X, MessageCircle } from 'lucide-react';

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  // Close on Outside Click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      {/* Backdrop for Outside Click */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-xs cursor-pointer"
          />
        )}
      </AnimatePresence>

      {/* Floating Container */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50" ref={modalRef}>
        {/* Floating Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative group flex items-center gap-2.5 px-4 py-3 rounded-full bg-gradient-to-r from-[#f5d77f] via-[#d4af37] to-[#b8860b] text-[#06152d] font-bold text-xs uppercase tracking-wider shadow-[0_0_30px_rgba(212,175,55,0.5)] hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
          aria-label="Contact Hotline"
        >
          <div className="w-7 h-7 rounded-full bg-[#06152d] text-[#d4af37] flex items-center justify-center">
            {isOpen ? <X className="w-4 h-4 text-[#d4af37]" /> : <Phone className="w-3.5 h-3.5 text-[#d4af37] animate-bounce" />}
          </div>
          <span className="hidden sm:inline text-[#06152d] font-bold">Call Us / Contact</span>
        </button>

        {/* Compact Popover / Sheet */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="fixed bottom-20 right-3 left-3 sm:left-auto sm:right-6 sm:w-96 max-w-[calc(100vw-1.5rem)] max-h-[75vh] overflow-y-auto p-4 sm:p-5 rounded-2xl sm:rounded-3xl bg-[#06152d] border border-[#d4af37]/80 shadow-[0_0_50px_rgba(212,175,55,0.4)] text-white backdrop-blur-2xl z-50"
            >
              {/* Mobile handle indicator */}
              <div className="w-10 h-1 rounded-full bg-white/20 mx-auto mb-2 block sm:hidden" />

              {/* Header */}
              <div className="flex items-center justify-between pb-2.5 border-b border-[#d4af37]/30 mb-3">
                <span className="text-[0.68rem] font-bold uppercase tracking-[0.2em] text-[#d4af37]">
                  OFFICIAL HOTLINE & OFFICE
                </span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-slate-300 hover:text-white cursor-pointer"
                  aria-label="Close"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Direct Call Numbers */}
              <div className="mb-3">
                <span className="text-[0.6rem] uppercase tracking-wider text-slate-400 font-semibold mb-1.5 block">
                  Direct Call Hotlines (Tap to Call)
                </span>
                <div className="space-y-1.5">
                  {[
                    { num: '8384080652', label: 'Primary Hotline' },
                    { num: '9315900730', label: 'Sales Concierge' },
                    { num: '8700524632', label: 'Support Desk' },
                  ].map((item) => (
                    <a
                      key={item.num}
                      href={`tel:${item.num}`}
                      className="flex items-center justify-between p-2 sm:p-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-[#d4af37] hover:bg-[#d4af37]/15 transition-all group cursor-pointer"
                    >
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-[#d4af37]/20 text-[#d4af37] flex items-center justify-center">
                          <Phone className="w-3 h-3" />
                        </div>
                        <div>
                          <span className="font-mono text-sm sm:text-base font-bold text-white group-hover:text-[#d4af37] transition-colors">
                            {item.num}
                          </span>
                          <span className="block text-[0.55rem] text-slate-400">{item.label}</span>
                        </div>
                      </div>
                      <span className="text-[0.6rem] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#d4af37] text-[#06152d]">
                        Call
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Address */}
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 mb-2 text-xs text-slate-200 flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#d4af37] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white block text-[0.72rem]">Headquarters Address</span>
                  <span className="text-slate-300 leading-tight block text-[0.68rem] mt-0.5">K2 612 Sangam Vihar, South Delhi - 110062</span>
                </div>
              </div>

              {/* Email */}
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-200 flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#d4af37] flex-shrink-0" />
                <a href="mailto:sales@4seasonsholidays.co.in" className="hover:underline text-[#d4af37] font-medium text-[0.7rem] truncate">
                  sales@4seasonsholidays.co.in
                </a>
              </div>

              {/* WhatsApp direct link */}
              <a
                href="https://wa.me/918384080652?text=Namaste!%20I'd%20like%20to%20enquire%20about%20travel%20packages."
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 w-full py-2 rounded-xl bg-[#25D366] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg hover:opacity-90 transition-opacity cursor-pointer"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-white" />
                WhatsApp Chat
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
