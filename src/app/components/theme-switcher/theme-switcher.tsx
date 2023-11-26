'use client';

import { useContext, useEffect, useState } from 'react';
import Image from 'next/image';
import './theme-switcher.css';
import { ThemeContext } from '../../contexts/ThemeContext';

export default function ThemeSwitcher() {
  const { theme, setTheme } = useContext(ThemeContext);

  useEffect(() => {
    const isServer = typeof window === 'undefined';
    const WOW = !isServer ? require('wow.js') : null;
    new WOW({
      mobile: false,
    }).init();
  });

  useEffect(() => {
    const storedTheme =
      localStorage.getItem('theme') ||
      (window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light');
    setTheme(storedTheme);
    updateThemeClass(storedTheme);
  }, [setTheme]);

  const handleThemeChange = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeClass(newTheme);
  };

  const updateThemeClass = (theme: string) => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const getImage = () => (
    <Image
      className='rounded-full theme-switcher-image object-contain 
        drop-shadow-[0_0px_10px_rgba(245,120,3,1)] dark:drop-shadow-[0_0px_10px_rgba(185,185,185,0.69)]'
      width='125'
      height='125'
      title={`Change theme to ${theme === 'dark' ? 'light' : 'dark'}`}
      src={
        theme === 'dark'
          ? './images/theme/dark5.png'
          : './images/theme/light4.png'
      }
      alt={`Change theme to ${theme === 'dark' ? 'light' : 'dark'}`}
    />
  );

  return (
    <button
      type='button'
      className='bg-transparent theme-switcher-button'
      onClick={handleThemeChange}
    >
      {getImage()}
    </button>
  );
}
