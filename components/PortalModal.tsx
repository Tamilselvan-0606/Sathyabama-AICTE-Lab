'use client';

import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowUpRight, Send } from 'lucide-react';
import { usePortal } from '@/context/PortalContext';

export default function PortalModal() {
  const { isOpen, closePortal } = usePortal();

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative"
          >
            <button
              onClick={closePortal}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center mb-8">
              <h2 className="text-2xl font-sans font-bold text-slate-900">Start Your Journey with Us</h2>
            </div>

            <form
              className="space-y-6"
              onSubmit={(e) => {
                e.preventDefault();
                closePortal();
              }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[13px] font-bold text-[#831238] mb-1.5 tracking-wide">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-[#831238]/20 rounded-xl focus:outline-none focus:border-[#831238] focus:ring-1 focus:ring-[#831238]/20 bg-[#831238]/5 text-[#831238] placeholder:text-[#831238]/40 transition-all font-sans text-sm"
                    placeholder="Dr. Jane Doe"
                  />
                </div>
                <div>
                  <label className="block text-[13px] font-bold text-[#831238] mb-1.5 tracking-wide">Email *</label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 border border-[#831238]/20 rounded-xl focus:outline-none focus:border-[#831238] focus:ring-1 focus:ring-[#831238]/20 bg-[#831238]/5 text-[#831238] placeholder:text-[#831238]/40 transition-all font-sans text-sm"
                    placeholder="jane.doe@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[13px] font-bold text-[#831238] mb-1.5 tracking-wide">
                    Mobile Number *
                  </label>
                  <input
                    type="tel"
                    required
                    className="w-full px-4 py-3 border border-[#831238]/20 rounded-xl focus:outline-none focus:border-[#831238] focus:ring-1 focus:ring-[#831238]/20 bg-[#831238]/5 text-[#831238] placeholder:text-[#831238]/40 transition-all font-sans text-sm"
                    placeholder="+91 90000 00000"
                  />
                </div>
                <div>
                  <label className="block text-[13px] font-bold text-[#831238] mb-1.5 tracking-wide">
                    Job Role *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-[#831238]/20 rounded-xl focus:outline-none focus:border-[#831238] focus:ring-1 focus:ring-[#831238]/20 bg-[#831238]/5 text-[#831238] placeholder:text-[#831238]/40 transition-all font-sans text-sm"
                    placeholder="e.g. Senior Researcher"
                  />
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
                <label className="block text-[13px] font-bold text-[#831238] mb-1.5 tracking-wide">
                  Short Description
                </label>
                <textarea
                  rows={3}
                  className="w-full px-4 py-3 border border-[#831238]/20 rounded-xl focus:outline-none focus:border-[#831238] focus:ring-1 focus:ring-[#831238]/20 bg-[#831238]/5 text-[#831238] placeholder:text-[#831238]/40 transition-all resize-none font-sans text-sm"
                  placeholder="Briefly describe your background and interest..."
                ></textarea>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full py-4 bg-[#831238] hover:bg-[#831238]/90 text-white font-bold rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                >
                  Submit Application <Send className="w-4 h-4" />
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
