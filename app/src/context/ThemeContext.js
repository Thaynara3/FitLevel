import { createContext, useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ThemeContext = createContext();

export const lightTheme = {
  dark: false,
  bg: '#ffffff',
  bgSecondary: '#f5f5f5',
  bgTertiary: '#f0f0f0',
  card: '#f5f5f5',
  border: '#eeeeee',
  borderMid: '#dddddd',
  text: '#111111',
  textSecondary: '#555555',
  textMuted: '#777777',
  textHint: '#999999',
  navBg: '#ffffff',
  inputBg: '#ffffff',
  buttonBg: '#111111',
  buttonText: '#ffffff',
  iconActive: '#111111',
  iconInactive: '#777777',
};

export const darkTheme = {
  dark: true,
  bg: '#0f0f0f',
  bgSecondary: '#1a1a1a',
  bgTertiary: '#222222',
  card: '#1e1e1e',
  border: '#2a2a2a',
  borderMid: '#333333',
  text: '#f0f0f0',
  textSecondary: '#cccccc',
  textMuted: '#888888',
  textHint: '#666666',
  navBg: '#111111',
  inputBg: '#1e1e1e',
  buttonBg: '#f0f0f0',
  buttonText: '#111111',
  iconActive: '#f0f0f0',
  iconInactive: '#666666',
};

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(false);
  const theme = isDark ? darkTheme : lightTheme;

  useEffect(() => {
    AsyncStorage.getItem('fitlevel_dark_mode').then((val) => {
      if (val === 'true') setIsDark(true);
    });
  }, []);

  function toggleTheme() {
    setIsDark((prev) => {
      const next = !prev;
      AsyncStorage.setItem('fitlevel_dark_mode', String(next));
      return next;
    });
  }

  return (
    <ThemeContext.Provider value={{ theme, isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
