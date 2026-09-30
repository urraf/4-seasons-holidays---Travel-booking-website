import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSeason } from '../context/SeasonContext';
import { destinations } from '../data/destinations';
import { Send, Check, MapPin, Calendar, Users, DollarSign, User, Mail, Phone, MessageSquare, PartyPopper } from 'lucide-react';
import { sendWhatsAppBooking } from '../utils/whatsapp';

const steps = ['Destination', 'Dates', 'Travellers', 'Budget', 'Contact'];

export default function Contact() {
  const { theme } = useSeason();
  const [currentStep, setCurrentStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    destination: '',
    startDate: '',
    endDate: '',
    adults: 2,
    children: 0,
    budget: '',
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const updateForm = (key: string, value: string | number) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: '' }));
  };

  const validateStep = (): boolean => {
    const newErrors: Record<string, string> = {};
    if (currentStep === 0 && !form.destination) newErrors.destination = 'Please select a destination';
    if (currentStep === 1 && !form.startDate) newErrors.startDate = 'Please select a start date';
    if (currentStep === 3 && !form.budget) newErrors.budget = 'Please select a budget range';
    if (currentStep === 4) {
      if (!form.name.trim()) newErrors.name = 'Name is required';
      if (!form.email.trim()) newErrors.email = 'Email is required';
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = 'Invalid email format';
      if (!form.phone.trim()) newErrors.phone = 'Phone is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (!validateStep()) return;
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleSubmit = () => {
    if (!validateStep()) return;
    sendWhatsAppBooking({
      destinationName: form.destination || 'Custom Expedition',
      travelDate: form.startDate ? `${form.startDate} to ${form.endDate}` : undefined,
      travellers: form.adults + form.children,
      totalPrice: form.budget === 'Luxury' ? 150000 : form.budget === 'Mid-Range' ? 75000 : 35000,
      userName: form.name,
      userEmail: form.email,
      userPhone: form.phone,
      specialRequests: form.message,
    });
    setSubmitted(true);
  };

  const stepVariants = {
    enter: { opacity: 0, x: 60 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -60 },
  };

  if (submitted) {
    return (
      <main className="min-h-screen flex items-center justify-center pt-24 pb-12" style={{ background: 'var(--season-bg)' }}>
        <motion.div
          className="text-center px-6 py-12 max-w-lg glass-panel rounded-3xl border border-white/10 shadow-2xl"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', stiffness: 200 }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring' }}
            className="text-7xl mb-6"
          >
            <PartyPopper className="w-20 h-20 mx-auto" style={{ color: theme.primary }} />
          </motion.div>
          <h2 className="font-display text-4xl text-white font-medium mb-4 tracking-tight drop-shadow-lg">
            Expedition Request Confirmed!
          </h2>
          <p className="text-slate-300 font-light text-base mb-8 leading-relaxed">
            Our luxury travel concierges are reviewing your preferences and will prepare your bespoke itinerary for <strong className="text-white">{form.destination}</strong> within 24 hours.
          </p>
          <button
            onClick={() => { setSubmitted(false); setCurrentStep(0); setForm({ destination: '', startDate: '', endDate: '', adults: 2, children: 0, budget: '', name: '', email: '', phone: '', message: '' }); }}
            className="magnetic-btn text-xs font-bold uppercase tracking-widest text-slate-950"
            style={{ background: theme.primary }}
          >
            Plan Another Expedition
          </button>
        </motion.div>
      </main>
    );
  }

  return (
    <main className="min-h-screen pt-24" style={{ background: 'var(--season-bg)' }}>
      <div className="container-main py-16">
        <div className="max-w-2xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-xs font-semibold uppercase tracking-[0.25em] mb-3 block" style={{ color: theme.primary }}>
              Private Concierge
            </span>
            <h1 className="font-display text-5xl md:text-6xl text-white font-medium mb-4 tracking-tight drop-shadow-lg">
              Craft Your Expedition
            </h1>
            <p className="text-slate-300 font-light max-w-md mx-auto text-base md:text-lg mb-8">
              Share your vision, travel dates, and preferences. We will transform them into a masterwork journey.
            </p>
          </motion.div>

          {/* Royal Official Contact Graphic Box */}
          <motion.div
            className="mb-12 p-6 md:p-8 rounded-3xl bg-[#06152d] border-2 border-[#d4af37]/80 shadow-[0_0_50px_rgba(212,175,55,0.35)] relative overflow-hidden text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-0.5 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent w-16 md:w-28" />
              <span className="text-xs font-bold tracking-[0.3em] uppercase text-[#d4af37] border-y border-[#d4af37]/60 py-1 px-3">
                ❖ CONTACT NO ❖
              </span>
              <div className="h-0.5 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent w-16 md:w-28" />
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-6 text-base sm:text-2xl md:text-3xl font-mono font-bold text-[#d4af37] mb-4">
              <a href="tel:8384080652" className="flex items-center gap-1.5 hover:scale-105 transition-transform text-[#d4af37]">
                <Phone className="w-4 h-4 md:w-6 md:h-6 p-1 rounded-full bg-[#d4af37] text-[#06152d]" />
                <span>8384080652</span>
              </a>
              <span className="text-[#d4af37]/40 hidden sm:inline">|</span>
              <a href="tel:9315900730" className="hover:scale-105 transition-transform text-[#d4af37]">
                9315900730
              </a>
              <span className="text-[#d4af37]/40 hidden sm:inline">|</span>
              <a href="tel:8700524632" className="hover:scale-105 transition-transform text-[#d4af37]">
                8700524632
              </a>
            </div>

            <div className="h-px bg-gradient-to-r from-transparent via-[#d4af37]/40 to-transparent w-full my-4" />

            <div className="flex items-center justify-center gap-2 text-sm md:text-lg font-serif text-[#d4af37] mb-4">
              <MapPin className="w-4 h-4 md:w-6 md:h-6 p-1 rounded-full bg-[#d4af37] text-[#06152d] flex-shrink-0" />
              <span>K2 612 Sangam Vihar, South Delhi - 110062</span>
            </div>

            <div className="h-px bg-gradient-to-r from-transparent via-[#d4af37]/40 to-transparent w-full my-4" />

            <div className="flex items-center justify-center gap-2 text-sm md:text-lg font-serif text-[#d4af37]">
              <Mail className="w-4 h-4 md:w-6 md:h-6 p-1 rounded-full bg-[#d4af37] text-[#06152d] flex-shrink-0" />
              <a href="mailto:sales@4seasonsholidays.co.in" className="hover:underline text-[#d4af37] font-semibold">
                sales@4seasonsholidays.co.in
              </a>
            </div>
          </motion.div>

          {/* Progress Steps */}
          <div className="flex items-center justify-between mb-12 px-4">
            {steps.map((step, i) => (
              <div key={step} className="flex items-center">
                <div className="flex flex-col items-center">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 border"
                    style={{
                      background: i <= currentStep ? theme.primary : 'rgba(255,255,255,0.06)',
                      color: i <= currentStep ? '#03070d' : '#94a3b8',
                      borderColor: i <= currentStep ? theme.primary : 'rgba(255,255,255,0.1)',
                      boxShadow: i <= currentStep ? `0 0 15px ${theme.glow}` : 'none',
                    }}
                  >
                    {i < currentStep ? <Check className="w-4 h-4 text-slate-950" /> : i + 1}
                  </div>
                  <span className="text-[0.65rem] font-semibold uppercase tracking-wider mt-2 hidden sm:block text-slate-300">
                    {step}
                  </span>
                </div>
                {i < steps.length - 1 && (
                  <div className="w-8 md:w-16 h-0.5 mx-2 rounded-full" style={{ background: i < currentStep ? theme.primary : 'rgba(255,255,255,0.1)' }} />
                )}
              </div>
            ))}
          </div>

          {/* Form Steps */}
          <div className="glass-panel p-4 sm:p-8 md:p-10 rounded-3xl border border-white/10 shadow-2xl">
            <AnimatePresence mode="wait">
              {/* Step 0: Destination */}
              {currentStep === 0 && (
                <motion.div key="dest" variants={stepVariants} initial="enter" animate="center" exit="exit">
                  <div className="flex items-center gap-2 mb-4 sm:mb-6">
                    <MapPin className="w-5 h-5 text-[#d4af37]" />
                    <h3 className="font-display text-xl text-white">Where do you want to go?</h3>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 max-h-[420px] overflow-y-auto pr-1">
                    {destinations.map((d) => {
                      const isSelected = form.destination === d.name;
                      return (
                        <button
                          key={d.id}
                          type="button"
                          onClick={() => updateForm('destination', d.name)}
                          className={`relative overflow-hidden rounded-2xl p-3 flex items-center gap-3 transition-all cursor-pointer text-left ${
                            isSelected
                              ? 'bg-[#d4af37]/20 border-2 border-[#d4af37] shadow-[0_0_20px_rgba(212,175,55,0.4)]'
                              : 'bg-white/5 border border-white/10 hover:bg-white/10'
                          }`}
                        >
                          <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden flex-shrink-0 border border-white/10">
                            <img src={d.image} alt={d.name} className="w-full h-full object-cover" loading="lazy" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <span className="font-semibold text-white text-xs sm:text-sm block truncate">{d.name}</span>
                            <span className="text-[0.65rem] text-[#d4af37] font-semibold uppercase tracking-wider block mt-0.5">{d.season} Season</span>
                          </div>
                          {isSelected && (
                            <div className="w-5 h-5 rounded-full bg-[#d4af37] text-[#06152d] flex items-center justify-center flex-shrink-0">
                              <Check className="w-3.5 h-3.5 stroke-[3]" />
                            </div>
                          )}
                        </button>
                      );
                    })}
                  </div>
                  {errors.destination && <p className="text-red-500 text-sm mt-2">{errors.destination}</p>}
                </motion.div>
              )}

              {/* Step 1: Dates */}
              {currentStep === 1 && (
                <motion.div key="dates" variants={stepVariants} initial="enter" animate="center" exit="exit">
                  <div className="flex items-center gap-2 mb-6">
                    <Calendar className="w-5 h-5" style={{ color: theme.primary }} />
                    <h3 className="font-display text-xl" style={{ color: theme.text }}>When are you planning to travel?</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm opacity-50 block mb-2" style={{ color: theme.text }}>Start Date</label>
                      <input
                        type="date"
                        value={form.startDate}
                        onChange={(e) => updateForm('startDate', e.target.value)}
                        className="w-full p-3 rounded-xl border text-sm bg-transparent focus:outline-none focus:ring-2"
                        style={{ borderColor: errors.startDate ? '#ef4444' : 'rgba(0,0,0,0.08)', color: theme.text }}
                      />
                      {errors.startDate && <p className="text-red-500 text-xs mt-1">{errors.startDate}</p>}
                    </div>
                    <div>
                      <label className="text-sm opacity-50 block mb-2" style={{ color: theme.text }}>End Date (optional)</label>
                      <input
                        type="date"
                        value={form.endDate}
                        onChange={(e) => updateForm('endDate', e.target.value)}
                        className="w-full p-3 rounded-xl border text-sm bg-transparent focus:outline-none focus:ring-2"
                        style={{ borderColor: 'rgba(0,0,0,0.08)', color: theme.text }}
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 2: Travellers */}
              {currentStep === 2 && (
                <motion.div key="travellers" variants={stepVariants} initial="enter" animate="center" exit="exit">
                  <div className="flex items-center gap-2 mb-6">
                    <Users className="w-5 h-5" style={{ color: theme.primary }} />
                    <h3 className="font-display text-xl" style={{ color: theme.text }}>How many travellers?</h3>
                  </div>
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium" style={{ color: theme.text }}>Adults</p>
                        <p className="text-xs opacity-40" style={{ color: theme.text }}>Ages 12+</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <button onClick={() => updateForm('adults', Math.max(1, form.adults - 1))}
                          className="w-10 h-10 rounded-lg flex items-center justify-center text-lg font-bold"
                          style={{ background: `${theme.primary}15`, color: theme.primary }}>−</button>
                        <span className="font-display text-2xl w-8 text-center" style={{ color: theme.text }}>{form.adults}</span>
                        <button onClick={() => updateForm('adults', Math.min(12, form.adults + 1))}
                          className="w-10 h-10 rounded-lg flex items-center justify-center text-lg font-bold"
                          style={{ background: `${theme.primary}15`, color: theme.primary }}>+</button>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium" style={{ color: theme.text }}>Children</p>
                        <p className="text-xs opacity-40" style={{ color: theme.text }}>Ages 2–11</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <button onClick={() => updateForm('children', Math.max(0, form.children - 1))}
                          className="w-10 h-10 rounded-lg flex items-center justify-center text-lg font-bold"
                          style={{ background: `${theme.primary}15`, color: theme.primary }}>−</button>
                        <span className="font-display text-2xl w-8 text-center" style={{ color: theme.text }}>{form.children}</span>
                        <button onClick={() => updateForm('children', Math.min(8, form.children + 1))}
                          className="w-10 h-10 rounded-lg flex items-center justify-center text-lg font-bold"
                          style={{ background: `${theme.primary}15`, color: theme.primary }}>+</button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Budget */}
              {currentStep === 3 && (
                <motion.div key="budget" variants={stepVariants} initial="enter" animate="center" exit="exit">
                  <div className="flex items-center gap-2 mb-6">
                    <DollarSign className="w-5 h-5" style={{ color: theme.primary }} />
                    <h3 className="font-display text-xl" style={{ color: theme.text }}>What's your budget per person?</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {[
                      { label: 'Budget', range: 'Under ₹50,000', icon: '💰' },
                      { label: 'Comfortable', range: '₹50,000 – ₹1,50,000', icon: '✨' },
                      { label: 'Luxury', range: '₹1,50,000+', icon: '👑' },
                    ].map((b) => (
                      <button
                        key={b.label}
                        onClick={() => updateForm('budget', b.label)}
                        className="p-5 rounded-xl text-left transition-all duration-300 hover:scale-[1.02]"
                        style={{
                          background: form.budget === b.label ? theme.primary : 'rgba(255,255,255,0.5)',
                          color: form.budget === b.label ? '#fff' : theme.text,
                          border: `1px solid ${form.budget === b.label ? theme.primary : 'rgba(0,0,0,0.06)'}`,
                        }}
                      >
                        <span className="text-2xl block mb-2">{b.icon}</span>
                        <span className="font-medium block">{b.label}</span>
                        <span className="text-xs opacity-60 block mt-1">{b.range}</span>
                      </button>
                    ))}
                  </div>
                  {errors.budget && <p className="text-red-500 text-sm mt-2">{errors.budget}</p>}
                </motion.div>
              )}

              {/* Step 4: Contact */}
              {currentStep === 4 && (
                <motion.div key="contact" variants={stepVariants} initial="enter" animate="center" exit="exit">
                  <div className="flex items-center gap-2 mb-6">
                    <User className="w-5 h-5" style={{ color: theme.primary }} />
                    <h3 className="font-display text-xl" style={{ color: theme.text }}>Your contact details</h3>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 opacity-30" style={{ color: theme.text }} />
                        <input
                          type="text" placeholder="Full Name" value={form.name}
                          onChange={(e) => updateForm('name', e.target.value)}
                          className="w-full pl-10 pr-4 py-3 rounded-xl border text-sm bg-transparent focus:outline-none focus:ring-2"
                          style={{ borderColor: errors.name ? '#ef4444' : 'rgba(0,0,0,0.08)', color: theme.text }}
                        />
                      </div>
                      {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 opacity-30" style={{ color: theme.text }} />
                        <input
                          type="email" placeholder="Email Address" value={form.email}
                          onChange={(e) => updateForm('email', e.target.value)}
                          className="w-full pl-10 pr-4 py-3 rounded-xl border text-sm bg-transparent focus:outline-none focus:ring-2"
                          style={{ borderColor: errors.email ? '#ef4444' : 'rgba(0,0,0,0.08)', color: theme.text }}
                        />
                      </div>
                      {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                    </div>
                    <div>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 opacity-30" style={{ color: theme.text }} />
                        <input
                          type="tel" placeholder="Phone Number" value={form.phone}
                          onChange={(e) => updateForm('phone', e.target.value)}
                          className="w-full pl-10 pr-4 py-3 rounded-xl border text-sm bg-transparent focus:outline-none focus:ring-2"
                          style={{ borderColor: errors.phone ? '#ef4444' : 'rgba(0,0,0,0.08)', color: theme.text }}
                        />
                      </div>
                      {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                    </div>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-3 w-4 h-4 opacity-30" style={{ color: theme.text }} />
                      <textarea
                        placeholder="Any special requests? (optional)" value={form.message}
                        onChange={(e) => updateForm('message', e.target.value)}
                        rows={3}
                        className="w-full pl-10 pr-4 py-3 rounded-xl border text-sm bg-transparent focus:outline-none focus:ring-2 resize-none"
                        style={{ borderColor: 'rgba(0,0,0,0.08)', color: theme.text }}
                      />
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex justify-between mt-8 pt-6 border-t" style={{ borderColor: 'rgba(0,0,0,0.05)' }}>
              <button
                onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
                className="px-6 py-2.5 rounded-full text-sm font-medium transition-all"
                style={{
                  opacity: currentStep === 0 ? 0.3 : 1,
                  color: theme.text,
                  border: `1px solid rgba(0,0,0,0.1)`,
                }}
                disabled={currentStep === 0}
              >
                Back
              </button>

              {currentStep < steps.length - 1 ? (
                <button
                  onClick={handleNext}
                  className="magnetic-btn text-sm"
                  style={{ background: theme.primary }}
                >
                  Next Step
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  className="magnetic-btn text-sm"
                  style={{ background: theme.primary }}
                >
                  <Send className="w-4 h-4 mr-2" />
                  Submit Enquiry
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/918384080652?text=Namaste!%20Hi%204%20Seasons%20Holidays!%20I'd%20like%20to%20plan%20a%20luxury%20expedition."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        aria-label="Chat on WhatsApp"
      >
        <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </main>
  );
}
