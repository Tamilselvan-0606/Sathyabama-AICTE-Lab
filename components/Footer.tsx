import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';

const logoImg = '/Images/Home/logo.png';

export default function Footer() {
  const navItems = [
    { id: 'home', path: '/', label: 'Home' },
    { id: 'about', path: '/about', label: 'About Us' },
    { id: 'facilities', path: '/facilities', label: 'Facilities' },
    { id: 'research', path: '/research', label: 'Research' },
    { id: 'scientists', path: '/scientists', label: 'Scientists' },
    { id: 'resources', path: '/resources', label: 'Resources' },
    { id: 'contact', path: '/contact', label: 'Contact' },
  ];

  return (
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
              Aetheris Scientific Research Institute is an independent global observatory &amp; cleanroom grid investigating physical reality. Inspired by rigorous mathematical precision, our laboratories operate at the frontiers of semiconductors and genetic therapeutics to build a better future.
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

          {/* Column 2: Quick Links */}
          <div className="space-y-6">
            <h4 className="font-sans font-bold text-[13px] tracking-wider text-white uppercase mb-6">
              Quick Links
            </h4>
            <ul className="space-y-4 text-[13px] font-sans text-white/80">
              {navItems.map((item) => (
                <li key={item.id} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400/70" />
                  <Link
                    href={item.path}
                    className="hover:text-amber-300 transition-colors text-left"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Information */}
          <div className="space-y-6">
            <h4 className="font-sans font-bold text-[13px] tracking-wider text-white uppercase mb-6">
              Information
            </h4>
            <ul className="space-y-4 text-[13px] font-sans text-white/80">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400/70" />
                <Link href="/contact" className="hover:text-amber-300 transition-colors">FAQ</Link>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400/70" />
                <Link href="/contact" className="hover:text-amber-300 transition-colors">Support</Link>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400/70" />
                <a href="#" className="hover:text-amber-300 transition-colors">Research Policy</a>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400/70" />
                <a href="#" className="hover:text-amber-300 transition-colors">Terms &amp; Conditions</a>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400/70" />
                <a href="#" className="hover:text-amber-300 transition-colors">Privacy Policy</a>
              </li>
            </ul>
          </div>

          {/* Column 4 & 5: Connect & Contact */}
          <div className="lg:col-span-2 space-y-8">
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
                  <span className="mt-1">Bengaluru, Karnataka,<br />India</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Disclaimer */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-sans text-white/40 tracking-widest font-semibold uppercase border-t border-white/10">
          <div>
            &copy; 2026 AETHERIS SCIENTIFIC RESEARCH INSTITUTE. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center gap-1.5 text-center md:text-right">
            THIS WEBSITE IS STRICTLY FOR ACADEMIC AND RESEARCH PURPOSES ONLY. <span className="text-amber-300 text-xs">❤</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
