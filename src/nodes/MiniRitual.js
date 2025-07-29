// MiniRitual.js
import React from 'react';

const MiniRitual = ({ emotion }) => {
  const getGlowColor = (emotion) => {
    switch (emotion) {
      case 'happy': return '#a3e635';     // lime
      case 'sad': return '#38bdf8';       // sky
      case 'angry': return '#f87171';     // red
      case 'anxious': return '#facc15';   // yellow
      default: return '#e5e7eb';          // gray
    }
  };

  const glowColor = getGlowColor(emotion);

  return (
    <div style={{
      marginTop: '2rem',
      width: '100%',
      height: '80px',
      borderRadius: '1rem',
      background: glowColor,
      boxShadow: `0 0 30px 10px ${glowColor}`,
      transition: 'all 0.6s ease-in-out',
      animation: 'pulseGlow 2s infinite'
    }} />
  );
};

export default MiniRitual;
