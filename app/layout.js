"use client"
import './globals.css'
import React, { useState } from "react";
import ModeNightIcon from '@mui/icons-material/ModeNight';
import LightModeIcon from '@mui/icons-material/LightMode';
import Header from './components/Header'

// export const metadata = {
//   title: 'Simple Poject on nextjs',
//   description: 'Generated by Abenezer',
// }

export default function RootLayout({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false);
    const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <html lang="en">
      <body className= {isDarkMode ? `dark mx-auto px-5` : `light mx-auto px-5`}>
        <div className='mx-auto px-5'>   
        <button onClick={toggleDarkMode} className='fixed right-0 top-10 p-2 hover:opacity-70 rounded mr-1'> {isDarkMode ? <LightModeIcon /> : <ModeNightIcon />}</button>
          <Header isDarkMode={isDarkMode}  />
         
          <div className="lg:pl-64 mt-5 px-3">      
          {children}
          </div> 
           </div>
      </body>
    </html>
  )
}
