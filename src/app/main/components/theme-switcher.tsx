'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import './theme-switcher.css';

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const theme = localStorage.getItem('theme');
      setTheme(theme);
      handleTheme();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    image = getImage();
  }, [theme]);

  const handleThemeChange = () => {
    handleTheme();
  };

  const getImage = () => {
    return (
      <>
        <Image
          className='rounded-full h-125 w-125 object-contain drop-shadow-[0_0px_20px_rgba(245,120,3,1)] dark:drop-shadow-[0_0px_20px_rgba(185,185,185,0.69)]'
          width='125'
          height='125'
          src={
            theme === 'dark'
              ? './images/theme/light4.png'
              : './images/theme/dark5.png'
          }
          alt={`Change theme to ${theme}`}
        ></Image>
      </>
    );
  };

  const handleTheme = () => {
    if (
      theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'light';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'dark';
    }
    setTheme(localStorage.theme);
  };

  let image = getImage();

  return (
    <button
      type='button'
      className='bg-transparent button'
      onClick={handleThemeChange}
    >
      {image}
    </button>
  );
}
