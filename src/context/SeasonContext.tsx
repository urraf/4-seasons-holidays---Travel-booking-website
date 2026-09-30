import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import type { Season } from '../data/destinations';
import { getInterpolatedTheme, getSeasonFromProgress, type SeasonTheme, seasonThemes } from '../utils/seasonTheme';

interface SeasonContextType {
  progress: number;
  setProgress: (p: number) => void;
  currentSeason: Season;
  theme: SeasonTheme;
  setSeasonOverride: (season: Season | null) => void;
}

const SeasonContext = createContext<SeasonContextType>({
  progress: 0,
  setProgress: () => {},
  currentSeason: 'spring',
  theme: seasonThemes.spring,
  setSeasonOverride: () => {},
});

export const useSeason = () => useContext(SeasonContext);

export const SeasonProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [progress, setProgressState] = useState(0);
  const [seasonOverride, setSeasonOverride] = useState<Season | null>(null);

  const setProgress = useCallback((p: number) => {
    setProgressState(Math.max(0, Math.min(1, p)));
  }, []);

  const currentSeason = seasonOverride || getSeasonFromProgress(progress);
  const theme = seasonOverride
    ? seasonThemes[seasonOverride]
    : getInterpolatedTheme(progress);

  // Apply CSS variables
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--season-primary', theme.primary);
    root.style.setProperty('--season-secondary', theme.secondary);
    root.style.setProperty('--season-accent', theme.accent);
    root.style.setProperty('--season-bg', theme.bg);
    root.style.setProperty('--season-sky-top', theme.skyTop);
    root.style.setProperty('--season-sky-bottom', theme.skyBottom);
    root.style.setProperty('--season-text', theme.text);
    root.style.setProperty('--season-glow', theme.glow);
  }, [theme]);

  return (
    <SeasonContext.Provider value={{ progress, setProgress, currentSeason, theme, setSeasonOverride }}>
      {children}
    </SeasonContext.Provider>
  );
};
