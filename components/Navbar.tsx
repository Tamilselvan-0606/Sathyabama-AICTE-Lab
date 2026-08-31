'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';
import { X, MoreVertical } from 'lucide-react';

const logoImg = '/Images/Home/logo.png';

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu on path change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navItems = [
    { id: 'home', path: '/', label: 'Home' },
    { id: 'about', path: '/about', label: 'About Us' },
    { id: 'facilities', path: '/facilities', label: 'Facilities' },
    { id: 'research-and-training', path: '/research-and-training', label: 'Research & Training' },
    { id: 'team', path: '/team', label: 'Team' },
    { id: 'events-and-announcements', path: '/events-and-announcements', label: 'Events & Announcements' },
    { id: 'gallery', path: '/gallery', label: 'Gallery' },
    { id: 'contact', path: '/contact', label: 'Contact' },
  ];

  const normalizedPath = pathname ? (pathname.toLowerCase().replace(/\/+$/, '') || '/') : '/';
  const isActive = (path: string) => {
    const cleanPath = path.toLowerCase().replace(/\/+$/, '') || '/';
    if (cleanPath === '/') {
      return normalizedPath === '/' || normalizedPath === '/home';
    }
    return normalizedPath === cleanPath || normalizedPath.startsWith(cleanPath + '/');
  };

  return (
    <>
      <header id="main-header" className="sticky top-0 z-40 bg-[#fdf4f6]/95 backdrop-blur-md border-b border-[#831238]/10 w-full">
        <div className="w-full max-w-7xl 2xl:max-w-[1536px] mx-auto px-3 sm:px-6 h-16 sm:h-20 flex items-center justify-between lg:justify-center gap-2 sm:gap-4 lg:gap-2 xl:gap-8 2xl:gap-10">
          {/* Logo & Brand Identity */}
          <Link
            href="/"
            className="flex items-center cursor-pointer select-none group text-left shrink-0"
          >
            <div className="h-10 sm:h-13 md:h-14 lg:h-10 xl:h-16 group-hover:scale-[1.02] transition-transform duration-300">
              <img src={logoImg} alt="ASRI Logo" className="h-full w-auto object-contain" />
            </div>
          </Link>

          {/* Desktop Navigation Links & Products (Visible on LG+ screens) */}
          <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1.5 2xl:gap-2 flex-nowrap shrink-0">
            {navItems.map((item) => {
              const active = isActive(item.path);
              return (
                <Link
                  key={item.id}
                  id={`nav-${item.id}`}
                  href={item.path}
                  className={`lg:px-1.5 lg:py-1.5 px-2.5 xl:px-3 py-2 text-[11px] xl:text-[14px] 2xl:text-[15px] font-sans font-semibold lg:tracking-normal tracking-wide whitespace-nowrap transition-all duration-200 ${
                    active
                      ? 'bg-[#831238] text-white shadow-md rounded-lg'
                      : 'text-gray-700 hover:text-[#831238] hover:bg-[#831238]/10 rounded-lg'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <a
              href="https://goodyguys.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="lg:px-1.5 lg:py-1.5 px-2.5 xl:px-3 py-2 text-[11px] xl:text-[14px] 2xl:text-[15px] font-sans font-semibold lg:tracking-normal tracking-wide whitespace-nowrap transition-all duration-200 text-gray-700 hover:text-[#831238] hover:bg-[#831238]/10 rounded-lg cursor-pointer"
            >
              Products
            </a>
          </nav>

          {/* Mobile / Tablet Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 bg-[#831238] hover:bg-[#620a27] text-white shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all rounded-lg focus:outline-none cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            <MoreVertical className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/*
        Drawer + Backdrop rendered as SIBLINGS of <header>, NOT children.
        This means they are outside the header's stacking context (created by
        backdrop-blur-md), so z-index works correctly without needing a portal
        or a "mounted" state that triggers an extra re-render.
      */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 bg-black/40 z-50 lg:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Left Slide Drawer */}
            <motion.div
              key="drawer"
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'tween', ease: 'easeInOut', duration: 0.3 }}
              className="fixed top-0 left-0 h-full w-72 bg-[#fdf4f6]/95 backdrop-blur-md z-[60] shadow-2xl flex flex-col lg:hidden"
            >
              {/* Drawer Header */}
              <div className="flex items-start justify-between px-4 pt-3.5 pb-2">
                <img src={logoImg} alt="AICTE IDEA Lab Logo" className="h-10 sm:h-13 md:h-14 w-auto object-contain" />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 text-slate-600 hover:text-[#831238] hover:bg-[#831238]/10 rounded-lg transition-all cursor-pointer shrink-0"
                  aria-label="Close navigation menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Nav Links */}
              <div className="flex-1 overflow-y-auto px-3 py-4 space-y-1">
                {navItems.map((item) => {
                  const active = isActive(item.path);
                  return (
                    <Link
                      key={item.id}
                      href={item.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center w-full px-4 py-3 rounded-lg text-sm font-sans font-medium transition-all ${
                        active
                          ? 'bg-[#831238] text-white shadow-md'
                          : 'text-slate-700 hover:text-[#831238] hover:bg-[#831238]/10'
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                })}
                <a
                  href="https://goodyguys.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center w-full px-4 py-3 rounded-lg text-sm font-sans font-medium text-slate-700 hover:text-[#831238] hover:bg-[#831238]/10 transition-all"
                >
                  Products
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
