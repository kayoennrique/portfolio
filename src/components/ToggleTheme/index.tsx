'use client';

// React
import React from 'react';
import { BsMoon, BsSun } from 'react-icons/bs';

// Components
import { useTheme } from '@/contexts/theme-context';

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className='fixed bottom-5 left-5 bg-gray-400 w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 rounded-full shadow-2xl flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950'
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? <BsSun /> : <BsMoon />}
    </button>
  );
}
