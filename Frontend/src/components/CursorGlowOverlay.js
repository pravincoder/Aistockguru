// src/components/CursorGlowOverlay.js

import React, { useEffect, useRef } from 'react';

const CursorGlowOverlay = () => {
  const overlayRef = useRef(null);

  useEffect(() => {
    
    const handleMouseMove = (e) => {
      if (!overlayRef.current) return;

      const x = e.clientX;
      const y = e.clientY;

      overlayRef.current.style.setProperty('--x', `${x}px`);
      overlayRef.current.style.setProperty('--y', `${y}px`);
      overlayRef.current.style.setProperty('--opacity', 0.5); // Low opacity for subtle glow
    };

    const handleMouseLeave = () => {
      if (overlayRef.current) {
        overlayRef.current.style.setProperty('--opacity', 0);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 pointer-events-none z-50"
      style={{
        background: `radial-gradient(circle at var(--x) var(--y), rgba(34, 197, 94, 0.2), transparent 20%)`, // rgba for Tailwind green-500 equivalent with low opacity
        opacity: 'var(--opacity, 0)',
        transition: 'opacity 0.2s ease, transform 0.2s ease', // smooth transition
      }}
    />
  );
};

export default CursorGlowOverlay;
