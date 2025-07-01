import React, { useState } from 'react'
import { AiOutlineSun } from "react-icons/ai";
import { IoMoonOutline } from "react-icons/io5";
import './SwitchThemeToggle.scss'

const SwitchThemeToggle = () => {
  const [isDark, setIsDark] = useState(false)

  const switchToggle = () => {
    setIsDark(prev => !prev)
    document.body.classList.toggle('dark-theme', !isDark)
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