import React, { createContext } from 'react';
import useToggleState from '../hooks/useToggleState';

export const ThemeContext = createContext();

/**
 * Sets the theme (light/dark) for the app.
 *
 * @param {*} props - React props
 */
export function ThemeProvider(props) {
  const [isDarkMode, toggleTheme] = useToggleState(false);
  return <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>{props.children}</ThemeContext.Provider>;
}
