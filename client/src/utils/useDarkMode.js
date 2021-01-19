import { useEffect, useState } from 'react';

export const useDarkMode = () => {
  const [theme, setTheme] = useState('light');
  const [componentMounted, setComponentMounted] = useState(false);
  const toggleTheme = () => {
    if (theme === 'light') {
      window.localStorage.setItem('lfcTheme', 'dark');
      setTheme('dark');
    } else {
      window.localStorage.setItem('lfcTheme', 'light');
      setTheme('light');
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem('lfcTheme');
    if (localTheme) {
      setTheme(localTheme);
    } else {
      setTheme('light');
      window.localStorage.setItem('lfcTheme', 'light');
    }
    setComponentMounted(true);
  }, []);

  return [theme, toggleTheme, componentMounted];
};
