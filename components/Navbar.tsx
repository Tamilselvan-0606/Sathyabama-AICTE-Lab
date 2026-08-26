'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { usePortal } from '@/context/PortalContext';

const logoImg = '/Images/Home/logo.png';

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { openPortal } = usePortal();

  // Close mobile menu on path change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navItems = [
    { id: 'home', path: '/', label: 'Home' },
    { id: 'about', path: '/about', label: 'About Us' },
    { id: 'facilities', path: '/facilities', label: 'Facilities' },
    { id: 'research', path: '/research', label: 'Research' },
    { id: 'scientists', path: '/scientists', label: 'Scientists' },
    { id: 'resources', path: '/resources', label: 'Resources' },
    { id: 'contact', path: '/contact', label: 'Contact' },
  ];

  const currentPath = pathname ? pathname.toLowerCase() : '/';
  const isActive = (path: string) => {
    if (path === '/') {
      return currentPath === '/' || currentPath === '/home';
    }
    if (path === '/about') {
      return currentPath === '/about' || currentPath === '/about-us' || currentPath === '/institute';
    }
    if (path === '/facilities') {
      return currentPath === '/facilities' || currentPath === '/innovation';
    }
    return currentPath === path || currentPath.startsWith(path + '/');
  };

  return (
    <header id="main-header" className="sticky top-0 z-40 bg-[#fdf4f6]/95 backdrop-blur-md border-b border-[#831238]/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo & Brand Identity */}
        <Link
          href="/"
          className="flex items-center cursor-pointer select-none group text-left"
        >
          <div className="h-16 group-hover:scale-[1.02] transition-transform duration-300">
            <img src={logoImg} alt="ASRI Logo" className="h-full w-auto object-contain" />
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-2">
          {navItems.map((item) => {
            const active = isActive(item.path);
            return (
              <Link
                key={item.id}
                id={`nav-${item.id}`}
                href={item.path}
                className={`px-4 py-2 text-[15px] font-sans font-semibold tracking-wide transition-all duration-200 ${
                  active
                    ? 'bg-[#831238] text-white shadow-md rounded-lg'
                    : 'text-gray-700 hover:text-[#831238] hover:bg-[#831238]/10 rounded-lg'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Call to Action Portal Link */}
        <div className="hidden lg:flex items-center gap-4">
          <button
            onClick={openPortal}
            className="px-5 py-2.5 border border-gray-300 hover:border-[#831238] text-gray-900 hover:text-[#831238] hover:bg-gray-50 text-[14px] font-sans font-semibold tracking-wide transition-all duration-300 flex items-center gap-1.5 cursor-pointer rounded-lg"
          >
            ASRI Portal <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

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
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openPortal();
                }}
                className="w-full text-center py-3 rounded-lg border border-gray-200 text-slate-700 hover:text-[#831238] hover:border-[#831238] text-sm font-sans font-medium flex items-center justify-center gap-2 transition-all mt-3"
              >
                ASRI Portal <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
