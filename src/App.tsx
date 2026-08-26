import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation, Navigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
const logoImg = '/Images/Home/logo.png';
import {
  Atom,
  Menu,
  X,
  Globe,
  ArrowUpRight,
  BookOpen,
  Award,
  Database,
  Building,
  Mail,
  Phone,
  ArrowRight,
  ChevronUp,
  MapPin,
  ShieldCheck,
  Lock,
  Send,
  Server
} from 'lucide-react';
import { PageType } from './types';

// Importing views
import HomeView from './components/HomeView';
import AboutView from './components/AboutView';
import ResearchView from './components/ResearchView';
import ScientistsView from './components/ScientistsView';
import FacilitiesView from './components/FacilitiesView';
import ResourcesView from './components/ResourcesView';
import ContactView from './components/ContactView';

export default function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [footerEmail, setFooterEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [showPortalModal, setShowPortalModal] = useState(false);

  // Scroll to top on every route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Scroll handler for back-to-top button
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

  const navItems = [
    { id: 'home', path: '/', label: 'Home' },
    { id: 'about', path: '/about', label: 'About Us' },
    { id: 'facilities', path: '/facilities', label: 'Facilities' },
    { id: 'research', path: '/research', label: 'Research' },
    { id: 'scientists', path: '/scientists', label: 'Scientists' },
    { id: 'resources', path: '/resources', label: 'Resources' },
    { id: 'contact', path: '/contact', label: 'Contact' },
  ];

  // Navigation helper compatible with component callbacks
  const handleNavigate = (tab: PageType | string) => {
    setMobileMenuOpen(false);
    if (tab === 'home' || tab === '/') {
      navigate('/');
    } else if (tab === 'institute' || tab === 'about' || tab === 'about-us') {
      navigate('/about');
    } else if (tab === 'facilities' || tab === 'innovation') {
      navigate('/facilities');
    } else {
      const cleanPath = tab.startsWith('/') ? tab : `/${tab}`;
      navigate(cleanPath);
    }
  };

  // Determine active tab based on current pathname
  const currentPath = location.pathname.toLowerCase();
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
    <div className="min-h-screen bg-[#F4F4F2] text-slate-900 font-sans flex flex-col justify-between">

      {/* HEADER / NAVIGATION BAR */}
      <header id="main-header" className="sticky top-0 z-40 bg-[#fdf4f6]/95 backdrop-blur-md border-b border-[#831238]/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

          {/* Logo & Brand Identity */}
          <Link
            to="/"
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
                  to={item.path}
                  className={`px-4 py-2 text-[15px] font-sans font-semibold tracking-wide transition-all duration-200 ${active
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
              onClick={() => setShowPortalModal(true)}
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
              className="lg:hidden border-t border-gray-200 bg-white"
            >
              <div className="px-6 py-6 space-y-3 flex flex-col">
                {navItems.map((item) => {
                  const active = isActive(item.path);
                  return (
                    <Link
                      key={item.id}
                      to={item.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`w-full text-left px-4 py-3 rounded-lg text-sm font-sans font-medium transition-all ${active
                          ? 'bg-[#831238] text-white shadow-md'
                          : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                        }`}
                    >
                      {item.label}
                    </Link>
                  );
                })}
                <button
                  onClick={() => { setMobileMenuOpen(false); setShowPortalModal(true); }}
                  className="w-full text-center py-3 rounded-lg border border-gray-200 text-slate-700 hover:text-[#831238] hover:border-[#831238] text-sm font-sans font-medium flex items-center justify-center gap-2 transition-all mt-3"
                >
                  ASRI Portal <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* CORE ACTIVE PAGE RENDER STAGE (ROUTER) */}
      <main id="main-content" className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
          >
            <Routes location={location}>
              <Route path="/" element={<HomeView onNavigate={handleNavigate} />} />
              <Route path="/home" element={<Navigate to="/" replace />} />
              <Route path="/about" element={<AboutView onNavigate={handleNavigate} />} />
              <Route path="/about-us" element={<Navigate to="/about" replace />} />
              <Route path="/institute" element={<Navigate to="/about" replace />} />
              <Route path="/research" element={<ResearchView onNavigate={handleNavigate} />} />
              <Route path="/scientists" element={<ScientistsView onNavigate={handleNavigate} />} />
              <Route path="/facilities" element={<FacilitiesView onNavigate={handleNavigate} />} />
              <Route path="/innovation" element={<Navigate to="/facilities" replace />} />
              <Route path="/resources" element={<ResourcesView onNavigate={handleNavigate} />} />
              <Route path="/contact" element={<ContactView onNavigate={handleNavigate} />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>

      {/* FOOTER DIRECTORY & CITATIONS */}
      {/* FOOTER DIRECTORY & CITATIONS */}
      <footer id="main-footer" className="bg-[#831238] text-white pt-20 pb-8 px-6 overflow-hidden relative font-sans border-t border-red-950">
        
        <div className="max-w-7xl mx-auto relative z-10">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12 pb-16">
            
            {/* Column 1: Brand & Description */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center">
                <div className="h-16 w-auto">
                  <img src={logoImg} alt="ASRI Logo" className="h-full w-auto object-contain" />
                </div>
              </div>
              
              <p className="text-[13px] text-white/80 leading-relaxed font-sans pr-4 mt-6 font-light">
                Aetheris Scientific Research Institute is an independent global observatory & cleanroom grid investigating physical reality. Inspired by rigorous mathematical precision, our laboratories operate at the frontiers of semiconductors and genetic therapeutics to build a better future.
              </p>

              {/* Connect With Us */}
              <div className="pt-4">
                <h4 className="font-sans font-bold text-[13px] tracking-wider text-white uppercase mb-4">
                  Connect With Us
                </h4>
                <div className="flex gap-2">
                  <a href="#" className="w-8 h-8 rounded-lg border border-white/20 flex items-center justify-center hover:bg-white/10 transition-all text-white/80 hover:text-white hover:scale-105 shadow-sm">
                    <span className="font-serif font-bold italic text-sm">f</span>
                  </a>
                  <a href="#" className="w-8 h-8 rounded-lg border border-white/20 flex items-center justify-center hover:bg-white/10 transition-all text-white/80 hover:text-white hover:scale-105 shadow-sm">
                    <span className="font-serif font-bold italic text-sm">ig</span>
                  </a>
                  <a href="#" className="w-8 h-8 rounded-lg border border-white/20 flex items-center justify-center hover:bg-white/10 transition-all text-white/80 hover:text-white hover:scale-105 shadow-sm">
                    <span className="font-serif font-bold italic text-sm">in</span>
                  </a>
                  <a href="#" className="w-8 h-8 rounded-lg border border-white/20 flex items-center justify-center hover:bg-white/10 transition-all text-white/80 hover:text-white hover:scale-105 shadow-sm">
                    <span className="font-serif font-bold italic text-sm">yt</span>
                  </a>
                </div>
              </div>
            </div>



            {/* Column 3: Quick Links */}
            <div className="space-y-6">
              <h4 className="font-sans font-bold text-[13px] tracking-wider text-white uppercase mb-6">
                Quick Links
              </h4>
              <ul className="space-y-4 text-[13px] font-sans text-white/80">
                {navItems.map((item) => (
                  <li key={item.id} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400/70" />
                    <Link 
                      to={item.path}
                      className="hover:text-amber-300 transition-colors text-left"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Information */}
            <div className="space-y-6">
              <h4 className="font-sans font-bold text-[13px] tracking-wider text-white uppercase mb-6">
                Information
              </h4>
              <ul className="space-y-4 text-[13px] font-sans text-white/80">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400/70" />
                  <a href="#" className="hover:text-amber-300 transition-colors">FAQ</a>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400/70" />
                  <a href="#" className="hover:text-amber-300 transition-colors">Support</a>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400/70" />
                  <a href="#" className="hover:text-amber-300 transition-colors">Research Policy</a>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400/70" />
                  <a href="#" className="hover:text-amber-300 transition-colors">Terms & Conditions</a>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400/70" />
                  <a href="#" className="hover:text-amber-300 transition-colors">Privacy Policy</a>
                </li>
              </ul>
            </div>

            {/* Column 5: Connect & Contact */}
            <div className="space-y-8">


              {/* Contact Details */}
              <div className="pt-2">
                <h4 className="font-sans font-bold text-[13px] tracking-wider text-white uppercase mb-4">
                  Contact Details
                </h4>
                <div className="space-y-3 text-[13px] text-white/80">
                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                      <Phone className="w-3.5 h-3.5 text-white" />
                    </div>
                    <span className="mt-1">+91 80 4912 8800</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                      <Mail className="w-3.5 h-3.5 text-white" />
                    </div>
                    <span className="mt-1 break-all">support@asri.res.in</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-3.5 h-3.5 text-white" />
                    </div>
                    <span className="mt-1">Bengaluru, Karnataka,<br/>India</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Bottom Copyright & Disclaimer */}
          <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-sans text-white/40 tracking-widest font-semibold uppercase">
            <div>
              &copy; 2026 AETHERIS SCIENTIFIC RESEARCH INSTITUTE. ALL RIGHTS RESERVED.
            </div>
            <div className="flex items-center gap-1.5 text-center md:text-right">
              THIS WEBSITE IS STRICTLY FOR ACADEMIC AND RESEARCH PURPOSES ONLY. <span className="text-amber-300 text-xs">❤</span>
            </div>
          </div>

        </div>
      </footer>

      {/* FLOATING BACK TO TOP BUTTON */}
      {showBackToTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 z-40 p-3 bg-slate-900/90 hover:brand-gradient text-white rounded-xl border border-slate-800 shadow-xl backdrop-blur-md transition-all cursor-pointer hover:scale-105 active:scale-95"
          aria-label="Back to top"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
      )}

      {/* PORTAL MODAL */}
      <AnimatePresence>
        {showPortalModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative"
            >
              <button 
                onClick={() => setShowPortalModal(false)}
                className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="text-center mb-8">
                <h2 className="text-2xl font-sans font-bold text-slate-900">Start Your Journey with Us</h2>
              </div>
              
              <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); setShowPortalModal(false); }}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[13px] font-bold text-[#831238] mb-1.5 tracking-wide">Full Name *</label>
                    <input type="text" required className="w-full px-4 py-3 border border-[#831238]/20 rounded-xl focus:outline-none focus:border-[#831238] focus:ring-1 focus:ring-[#831238]/20 bg-[#831238]/5 text-[#831238] placeholder:text-[#831238]/40 transition-all font-sans text-sm" placeholder="Dr. Jane Doe" />
                  </div>
                  <div>
                    <label className="block text-[13px] font-bold text-[#831238] mb-1.5 tracking-wide">Email *</label>
                    <input type="email" required className="w-full px-4 py-3 border border-[#831238]/20 rounded-xl focus:outline-none focus:border-[#831238] focus:ring-1 focus:ring-[#831238]/20 bg-[#831238]/5 text-[#831238] placeholder:text-[#831238]/40 transition-all font-sans text-sm" placeholder="jane.doe@example.com" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[13px] font-bold text-[#831238] mb-1.5 tracking-wide">Mobile Number *</label>
                    <input type="tel" required className="w-full px-4 py-3 border border-[#831238]/20 rounded-xl focus:outline-none focus:border-[#831238] focus:ring-1 focus:ring-[#831238]/20 bg-[#831238]/5 text-[#831238] placeholder:text-[#831238]/40 transition-all font-sans text-sm" placeholder="+91 90000 00000" />
                  </div>
                  <div>
                    <label className="block text-[13px] font-bold text-[#831238] mb-1.5 tracking-wide">Job Role *</label>
                    <input type="text" required className="w-full px-4 py-3 border border-[#831238]/20 rounded-xl focus:outline-none focus:border-[#831238] focus:ring-1 focus:ring-[#831238]/20 bg-[#831238]/5 text-[#831238] placeholder:text-[#831238]/40 transition-all font-sans text-sm" placeholder="e.g. Senior Researcher" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-[13px] font-bold text-[#831238] mb-1.5 tracking-wide">
                    Resume * <span className="font-normal text-[#831238]/60 ml-1">(Max 2 MB)</span>
                  </label>
                  <div className="border-2 border-dashed border-[#831238]/20 hover:border-[#831238]/50 bg-[#831238]/[0.02] rounded-xl p-8 text-center flex flex-col justify-center items-center gap-3 cursor-pointer hover:bg-[#831238]/5 transition-all group">
                    <div className="w-12 h-12 rounded-full bg-white border border-[#831238]/20 shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                      <ArrowUpRight className="w-5 h-5 text-[#831238]/40 group-hover:text-[#831238]" />
                    </div>
                    <span className="text-sm font-semibold text-[#831238]">Drag and drop your files</span>
                    <span className="text-xs text-[#831238]/60">or click to browse from your computer</span>
                  </div>
                </div>

                <div>
                  <label className="block text-[13px] font-bold text-[#831238] mb-1.5 tracking-wide">Short Description</label>
                  <textarea rows={3} className="w-full px-4 py-3 border border-[#831238]/20 rounded-xl focus:outline-none focus:border-[#831238] focus:ring-1 focus:ring-[#831238]/20 bg-[#831238]/5 text-[#831238] placeholder:text-[#831238]/40 transition-all resize-none font-sans text-sm" placeholder="Briefly describe your background and interest..."></textarea>
                </div>

                <div className="pt-4">
                  <button type="submit" className="w-full py-4 bg-[#831238] hover:bg-[#831238]/90 text-white font-bold rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2">
                    Submit Application <Send className="w-4 h-4" />
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
