import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

// Custom hook: gives components the theme + toggle, and throws a clear
// error if used outside the provider (a common React pitfall).
export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return ctx;
}
