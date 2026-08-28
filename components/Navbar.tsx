'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

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
    { id: 'research', path: '/research', label: 'Research & Training' },
    { id: 'scientists', path: '/scientists', label: 'Teams' },
    { id: 'resources', path: '/resources', label: 'Events & Announcements' },
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
    <header id="main-header" className="sticky top-0 z-40 bg-[#fdf4f6]/95 backdrop-blur-md border-b border-[#831238]/10">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between lg:justify-center gap-4 lg:gap-8 xl:gap-10">
        {/* Logo & Brand Identity */}
        <Link
          href="/"
          className="flex items-center cursor-pointer select-none group text-left shrink-0"
        >
          <div className="h-14 lg:h-16 group-hover:scale-[1.02] transition-transform duration-300">
            <img src={logoImg} alt="ASRI Logo" className="h-full w-auto object-contain" />
          </div>
        </Link>

        {/* Desktop Navigation Links & Products */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5 flex-nowrap shrink-0">
          {navItems.map((item) => {
            const active = isActive(item.path);
            return (
              <Link
                key={item.id}
                id={`nav-${item.id}`}
                href={item.path}
                className={`px-3 py-2 text-[15px] font-sans font-semibold tracking-wide whitespace-nowrap transition-all duration-200 ${
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
            className="px-3 py-2 text-[15px] font-sans font-semibold tracking-wide whitespace-nowrap transition-all duration-200 text-gray-700 hover:text-[#831238] hover:bg-[#831238]/10 rounded-lg cursor-pointer"
          >
            Products
          </a>
        </nav>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-all"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden border-t border-gray-200 bg-white overflow-hidden"
          >
            <div className="px-6 py-6 space-y-3 flex flex-col">
              {navItems.map((item) => {
                const active = isActive(item.path);
                return (
                  <Link
                    key={item.id}
                    href={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`w-full text-left px-4 py-3 rounded-lg text-sm font-sans font-medium transition-all ${
                      active
                        ? 'bg-[#831238] text-white shadow-md'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
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
                className="w-full text-left px-4 py-3 rounded-lg text-sm font-sans font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-all"
              >
                Products
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
