"use client"
import React, { useState } from "react";
import ModeNightIcon from '@mui/icons-material/ModeNight';
import LightModeIcon from '@mui/icons-material/LightMode';
export default function Layout({ children }:any) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <div className={isDarkMode ? 'dark ' : 'light '}>  
        <button
          onClick={toggleDarkMode}
          className='fixed right-0 top-10 p-2 hover:opacity-70 rounded mr-1'
        >
          {isDarkMode ? <LightModeIcon /> : <ModeNightIcon />}
        </button>      
          {children}
      </div>
  )
}