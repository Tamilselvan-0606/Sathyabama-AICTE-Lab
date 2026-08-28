'use client';

import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

export default function BackToTop() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!showBackToTop) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-8 right-8 z-40 w-12 h-12 flex items-center justify-center bg-slate-900/90 hover:bg-[#831238] text-white rounded-full border border-slate-800 shadow-2xl backdrop-blur-md transition-all duration-300 cursor-pointer hover:scale-110 active:scale-95 group"
      aria-label="Back to top"
    >
      <ChevronUp className="w-6 h-6 stroke-[3] transition-transform group-hover:-translate-y-0.5" />
    </button>
  );
}
