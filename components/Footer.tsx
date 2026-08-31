import React from 'react';
import Link from 'next/link';

const logoImg = '/Images/Home/logo.png';

export default function Footer() {
  const navItems = [
    { id: 'home', path: '/', label: 'Home' },
    { id: 'about', path: '/about', label: 'About Us' },
    { id: 'facilities', path: '/facilities', label: 'Facilities' },
    { id: 'research-and-training', path: '/research-and-training', label: 'Research & Training' },
    { id: 'team', path: '/team', label: 'Team' },
    { id: 'events-and-announcements', path: '/events-and-announcements', label: 'Events & Announcements' },
    { id: 'gallery', path: '/gallery', label: 'Gallery' },
  ];

  return (
    <footer id="main-footer" className="bg-[#831238] text-white pt-12 sm:pt-16 md:pt-20 pb-8 px-4 sm:px-8 md:px-16 lg:px-24 w-full overflow-hidden relative font-sans border-t border-red-950">
      <div className="w-full max-w-7xl 2xl:max-w-[1536px] mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-12 sm:pb-16">
          {/* Column 1: Brand & Connect */}
          <div className="md:col-span-6 lg:col-span-3 space-y-6">
            <div className="flex items-center">
              <div className="h-[72px] w-auto">
                <img src={logoImg} alt="AICTE IDEA Lab Logo" className="h-full w-auto object-contain" />
              </div>
            </div>

            {/* Connect With Us */}
            <div className="pt-2">
              <h4 className="font-sans font-bold text-sm sm:text-[15px] tracking-wider text-white uppercase mb-4">
                Connect With Us
              </h4>
              <div className="flex items-center gap-3">
                {/* X (Twitter) */}
                <a
                  href="https://x.com/sathyabamaSIST"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X (Twitter)"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/25 border border-white/20 flex items-center justify-center transition-all text-white hover:scale-110 shadow-sm"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>

                {/* YouTube */}
                <a
                  href="https://www.youtube.com/channel/UCkBMqT83pxjwPhh8mUpZ0hQ"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/25 border border-white/20 flex items-center justify-center transition-all text-white hover:scale-110 shadow-sm"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>

                {/* Facebook */}
                <a
                  href="https://www.facebook.com/SathyabamaOfficial"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/25 border border-white/20 flex items-center justify-center transition-all text-white hover:scale-110 shadow-sm"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/sathyabama.official"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/25 border border-white/20 flex items-center justify-center transition-all text-white hover:scale-110 shadow-sm"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:col-span-6 lg:col-span-3 space-y-6">
            <h4 className="font-sans font-bold text-sm sm:text-[15px] tracking-wider text-white uppercase mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm sm:text-[15px] font-medium text-white/85">
              {navItems.map((item) => (
                <li key={item.id} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                  <Link
                    href={item.path}
                    className="hover:text-amber-300 transition-colors text-left whitespace-nowrap"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Details (Horizontal Layout) */}
          <div className="md:col-span-12 lg:col-span-6 space-y-6">
            <h4 className="font-sans font-bold text-sm sm:text-[15px] tracking-wider text-white uppercase mb-6">
              Contact Details
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12 text-sm font-sans text-white/90">
              {/* Contact Person 1 */}
              <div className="space-y-1.5 border-l-2 border-amber-400/80 pl-3.5 flex flex-col justify-between">
                <div>
                  <div className="font-semibold text-white text-[15px]">
                    Dr. T. Sasipraba
                  </div>
                  <div className="text-amber-300 text-xs font-medium uppercase tracking-wide mt-0.5">
                    Director Innovation
                  </div>
                  <div className="text-white/80 text-xs leading-relaxed font-normal mt-2">
                    Sathyabama Institute of Science and Technology<br />
                    Chennai – 600 119, Tamil Nadu, India
                  </div>
                </div>
                <div className="pt-2 flex items-center gap-1.5 flex-wrap">
                  <span className="text-xs font-medium text-white/80">Email:</span>
                  <a
                    href="mailto:director.innovation@sathyabama.ac.in"
                    className="text-amber-300 hover:underline text-xs sm:text-sm font-medium break-all"
                  >
                    director.innovation@sathyabama.ac.in
                  </a>
                </div>
              </div>

              {/* Contact Person 2 */}
              <div className="space-y-1.5 border-l-2 border-amber-400/80 pl-3.5 flex flex-col justify-between">
                <div>
                  <div className="font-semibold text-white text-[15px]">
                    Dr. Brijitta J
                  </div>
                  <div className="text-amber-300 text-xs font-medium uppercase tracking-wide mt-0.5">
                    Professor
                  </div>
                  <div className="text-white/80 text-xs leading-relaxed font-normal mt-2">
                    Centre for Nanoscience and Nanotechnology<br />
                    Sathyabama Institute of Science and Technology<br />
                    Chennai – 600 119, Tamil Nadu, India
                  </div>
                </div>
                <div className="pt-2 flex items-center gap-1.5 flex-wrap">
                  <span className="text-xs font-medium text-white/80">Email:</span>
                  <a
                    href="mailto:cnsnt@sathyabama.ac.in"
                    className="text-amber-300 hover:underline text-xs sm:text-sm font-medium break-all"
                  >
                    cnsnt@sathyabama.ac.in
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex justify-center text-center text-xs sm:text-[13px] font-sans text-white/60 tracking-wider font-medium uppercase border-t border-white/10">
          <div>
            &copy; 2026 AICTE IDEA LAB, SATHYABAMA INSTITUTE OF SCIENCE AND TECHNOLOGY. ALL RIGHTS RESERVED.
          </div>
        </div>
      </div>
    </footer>
  );
}
