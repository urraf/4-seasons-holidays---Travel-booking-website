import type { Season } from '../data/destinations';

export interface SeasonTheme {
  primary: string;
  secondary: string;
  accent: string;
  bg: string;
  skyTop: string;
  skyBottom: string;
  text: string;
  glow: string;
  label: string;
  icon: string;
}

export const seasonThemes: Record<Season, SeasonTheme> = {
  spring: {
    primary: '#d4af37',
    secondary: '#f472b6',
    accent: '#f5d77f',
    bg: '#06152d',
    skyTop: '#040d1e',
    skyBottom: '#102242',
    text: '#f8fafc',
    glow: 'rgba(212, 175, 55, 0.45)',
    label: 'Spring',
    icon: '🌸',
  },
  summer: {
    primary: '#d4af37',
    secondary: '#38bdf8',
    accent: '#f5c542',
    bg: '#06152d',
    skyTop: '#030c1c',
    skyBottom: '#0d284f',
    text: '#f8fafc',
    glow: 'rgba(212, 175, 55, 0.45)',
    label: 'Summer',
    icon: '☀️',
  },
  autumn: {
    primary: '#d4af37',
    secondary: '#f97316',
    accent: '#e07a3c',
    bg: '#08172e',
    skyTop: '#051021',
    skyBottom: '#192b45',
    text: '#fff7ed',
    glow: 'rgba(212, 175, 55, 0.45)',
    label: 'Autumn',
    icon: '🍂',
  },
  winter: {
    primary: '#d4af37',
    secondary: '#60a5fa',
    accent: '#c084fc',
    bg: '#051226',
    skyTop: '#030a17',
    skyBottom: '#0b1d3d',
    text: '#f8fafc',
    glow: 'rgba(212, 175, 55, 0.45)',
    label: 'Winter',
    icon: '❄️',
  },
};

export function lerpColor(a: string, b: string, t: number): string {
  const ah = parseInt(a.replace('#', ''), 16);
  const bh = parseInt(b.replace('#', ''), 16);
  const ar = (ah >> 16) & 0xff;
  const ag = (ah >> 8) & 0xff;
  const ab = ah & 0xff;
  const br = (bh >> 16) & 0xff;
  const bg = (bh >> 8) & 0xff;
  const bb = bh & 0xff;
  const rr = Math.round(ar + (br - ar) * t);
  const rg = Math.round(ag + (bg - ag) * t);
  const rb = Math.round(ab + (bb - ab) * t);
  return `#${((rr << 16) | (rg << 8) | rb).toString(16).padStart(6, '0')}`;
}

export function lerpColorRgba(a: string, b: string, t: number): string {
  // Parse rgba strings
  const parseRgba = (s: string) => {
    const m = s.match(/[\d.]+/g);
    return m ? m.map(Number) : [0, 0, 0, 0];
  };
  const ac = parseRgba(a);
  const bc = parseRgba(b);
  const r = Math.round(ac[0] + (bc[0] - ac[0]) * t);
  const g = Math.round(ac[1] + (bc[1] - ac[1]) * t);
  const bv = Math.round(ac[2] + (bc[2] - ac[2]) * t);
  const al = ac[3] + (bc[3] - ac[3]) * t;
  return `rgba(${r}, ${g}, ${bv}, ${al.toFixed(2)})`;
}

/** Given a 0–1 progress, return interpolated season theme */
export function getInterpolatedTheme(progress: number): SeasonTheme {
  const seasons: Season[] = ['spring', 'summer', 'autumn', 'winter'];
  const segmentSize = 1 / 4;

  // Clamp
  const p = Math.max(0, Math.min(1, progress));

  // Which two seasons are we between?
  const segmentIndex = Math.min(Math.floor(p / segmentSize), 3);
  const nextIndex = Math.min(segmentIndex + 1, 3);
  const localT = (p - segmentIndex * segmentSize) / segmentSize;

  const from = seasonThemes[seasons[segmentIndex]];
  const to = seasonThemes[seasons[nextIndex]];

  if (segmentIndex === nextIndex) return from;

  return {
    primary: lerpColor(from.primary, to.primary, localT),
    secondary: lerpColor(from.secondary, to.secondary, localT),
    accent: lerpColor(from.accent, to.accent, localT),
    bg: lerpColor(from.bg, to.bg, localT),
    skyTop: lerpColor(from.skyTop, to.skyTop, localT),
    skyBottom: lerpColor(from.skyBottom, to.skyBottom, localT),
    text: lerpColor(from.text, to.text, localT),
    glow: lerpColorRgba(from.glow, to.glow, localT),
    label: localT < 0.5 ? from.label : to.label,
    icon: localT < 0.5 ? from.icon : to.icon,
  };
}

/** Get discrete season from progress */
export function getSeasonFromProgress(progress: number): Season {
  if (progress < 0.25) return 'spring';
  if (progress < 0.5) return 'summer';
  if (progress < 0.75) return 'autumn';
  return 'winter';
}

/** Format INR price */
export function formatPrice(price: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(price);
}
