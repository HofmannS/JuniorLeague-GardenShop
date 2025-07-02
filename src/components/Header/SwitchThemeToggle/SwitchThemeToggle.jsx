import React, { useEffect, useState } from 'react'
import { AiOutlineSun } from "react-icons/ai";
import { IoMoonOutline } from "react-icons/io5";
import './SwitchThemeToggle.scss'

const SwitchThemeToggle = () => {
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark';
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark_theme');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark_theme');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const switchToggle = () => {
    setIsDark(prev => !prev);
  };
  return (
    <div className="switch-theme-toggle">
    <div className={`toggle ${isDark ? 'active' : ''}`} onClick={switchToggle}>
      <span className="toggle__icon toggle__icon--left"><AiOutlineSun /></span>
      <span className="toggle__icon toggle__icon--right"><IoMoonOutline /></span>
      <div className="toggle__circle" />
    </div>
    </div>
  );
};

export default SwitchThemeToggle;