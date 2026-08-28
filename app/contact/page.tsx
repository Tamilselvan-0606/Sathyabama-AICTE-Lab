'use client';

import React from 'react';
import { motion } from 'motion/react';
import { fadeLeft, fadeUp, viewportOnce } from '@/lib/animations';
import { MapPin, Building2, User } from 'lucide-react';

export default function ContactPage() {
  return (
    <div id="contact-view" className="bg-[#F4F4F2] text-slate-800 min-h-screen pt-8 md:pt-12 pb-16 md:pb-24 px-8 md:px-16 lg:px-24 w-full">
      {/* HEADER */}
      <motion.div
        className="mb-8 md:mb-10 max-w-3xl"
        variants={fadeLeft}
        initial="hidden"
        animate="visible"
      >
        <h1 className="font-serif text-[30px] font-extrabold italic text-[#831238] leading-[1.1] tracking-tight">
          Ways to Contact Us
        </h1>
      </motion.div>

      {/* MAIN CONTACT LAYOUT */}
      <motion.div
        className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        {/* LEFT COLUMN: ADDRESS & PERSONNEL INFO (6 COLS) */}
        <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
          {/* Section Heading Badge */}
          <div className="flex items-center gap-2.5 pb-2">
            <span className="p-2 bg-[#831238]/10 text-[#831238]">
              <MapPin className="w-5 h-5" />
            </span>
            <div>
              <h2 className="text-xl font-serif font-extrabold italic text-[#831238] tracking-tight">
                Campus &amp; Faculty Address
              </h2>
              <p className="text-xs text-slate-500 font-sans">
                AICTE IDEA Lab, Sathyabama Institute
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {/* Contact Person 1 Card (Borderless) */}
            <div className="bg-white p-5 md:p-6 transition-all duration-300 shadow-md hover:shadow-lg group">
              <div className="flex items-start justify-between gap-2 mb-2">
                <div>
                  <h3 className="text-base sm:text-lg font-serif font-extrabold italic text-[#831238] group-hover:text-[#620a27] transition-colors">
                    Dr. T. Sasipraba
                  </h3>
                  <div className="inline-flex items-center gap-1.5 mt-1 px-2.5 py-0.5 bg-[#831238]/10 text-[#831238] text-xs font-bold font-sans">
                    <User className="w-3 h-3 text-[#831238]" />
                    <span>Director Innovation</span>
                  </div>
                </div>
              </div>

              <div className="space-y-1.5 text-slate-600 font-sans text-xs sm:text-sm mt-3 leading-relaxed">
                <div className="flex items-start gap-2">
                  <Building2 className="w-3.5 h-3.5 text-slate-400 mt-0.5 shrink-0" />
                  <span>Sathyabama Institute of Science and Technology</span>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 text-slate-400 mt-0.5 shrink-0" />
                  <span>Chennai – 600 119, Tamil Nadu, India</span>
                </div>
              </div>

              <div className="mt-4 pt-2 flex items-center gap-2 font-sans flex-wrap">
                <span className="text-xs sm:text-sm font-bold text-slate-600">
                  Email:
                </span>
                <a
                  href="mailto:director.innovation@sathyabama.ac.in"
                  className="text-[#831238] text-xs sm:text-sm font-bold hover:underline"
                >
                  director.innovation@sathyabama.ac.in
                </a>
              </div>
            </div>

            {/* Contact Person 2 Card (Borderless) */}
            <div className="bg-white p-5 md:p-6 transition-all duration-300 shadow-md hover:shadow-lg group">
              <div className="flex items-start justify-between gap-2 mb-2">
                <div>
                  <h3 className="text-base sm:text-lg font-serif font-extrabold italic text-[#831238] group-hover:text-[#620a27] transition-colors">
                    Dr. Brijitta J
                  </h3>
                  <div className="inline-flex items-center gap-1.5 mt-1 px-2.5 py-0.5 bg-[#831238]/10 text-[#831238] text-xs font-bold font-sans">
                    <User className="w-3 h-3 text-[#831238]" />
                    <span>Professor</span>
                  </div>
                </div>
              </div>

              <div className="space-y-1.5 text-slate-600 font-sans text-xs sm:text-sm mt-3 leading-relaxed">
                <p className="text-slate-700 font-medium">
                  Centre for Nanoscience and Nanotechnology
                </p>
                <div className="flex items-start gap-2">
                  <Building2 className="w-3.5 h-3.5 text-slate-400 mt-0.5 shrink-0" />
                  <span>Sathyabama Institute of Science and Technology</span>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 text-slate-400 mt-0.5 shrink-0" />
                  <span>Chennai – 600 119, Tamil Nadu, India</span>
                </div>
              </div>

              <div className="mt-4 pt-2 flex items-center gap-2 font-sans flex-wrap">
                <span className="text-xs sm:text-sm font-bold text-slate-600">
                  Email:
                </span>
                <a
                  href="mailto:cnsnt@sathyabama.ac.in"
                  className="text-[#831238] text-xs sm:text-sm font-bold hover:underline"
                >
                  cnsnt@sathyabama.ac.in
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: MAP EMBED (6 COLS, VISIBLE BORDER & SHARP CORNERS) */}
        <div className="lg:col-span-6 flex flex-col h-full min-h-[380px] sm:min-h-[420px] lg:min-h-full">
          <div className="bg-white border border-slate-300 overflow-hidden shadow-md h-full min-h-[380px] relative">
            <iframe
              src="https://maps.google.com/maps?q=12.871116,80.222434&hl=en&z=16&output=embed"
              className="absolute inset-0 w-full h-full border-0"
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Sathyabama Institute of Science and Technology Business Incubator Location"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
