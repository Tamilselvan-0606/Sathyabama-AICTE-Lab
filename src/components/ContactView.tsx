import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { fadeUp, fadeLeft, fadeRight, staggerContainer, staggerItem, scaleIn, viewportOnce } from '../animations';
import { 
  MapPin, 
  Mail, 
  Phone, 
  Send, 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  Building2, 
  Globe, 
  Clock, 
  ShieldCheck 
} from 'lucide-react';
import { FAQS } from '../data';

interface ContactViewProps {
  onNavigate: (tab: any) => void;
}

export default function ContactView({ onNavigate }: ContactViewProps) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  return (
    <div id="contact-view" className="bg-[#F4F4F2] text-slate-800">
      
      {/* SECTION 1: CONTACT HERO */}
      <section id="contact-hero" className="relative pt-24 pb-20 border-b border-slate-200">
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            
            {/* Left: Text Content */}
            <motion.div
              className="lg:w-1/2 space-y-6"
              variants={fadeLeft}
              initial="hidden"
              animate="visible"
            >
              <div>
                <span className="font-sans text-xs tracking-wide text-[#831238] font-bold bg-[#831238]/5 px-3.5 py-1.5 rounded-lg border border-[#831238]/20 shadow-sm">
                  Communication Terminal
                </span>
              </div>
              <h1 className="font-serif text-[30px] font-bold text-slate-900 tracking-tight leading-tight">
                Connect With Our <br className="hidden lg:block" /> Research Faculty
              </h1>
              <p className="text-slate-600 font-sans text-[15px] font-normal leading-relaxed max-w-md">
                Have proposals for peer-reviewed collaborations? Looking to license advanced semiconductor patents or clinical CRISPR endonucleases? Reach out to our specialized department registries.
              </p>
            </motion.div>

            {/* Right: Quick Action Cards */}
            <motion.div
              className="lg:w-1/2 w-full grid grid-cols-1 sm:grid-cols-2 gap-3"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={staggerItem} className="bg-[#831238] rounded-xl p-4 shadow-sm hover:shadow-md transition-all group cursor-pointer hover:bg-[#831238]/90">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <Mail className="w-4 h-4 text-white" />
                </div>
                <h3 className="text-[15px] font-bold text-white mb-0.5">General Inquiries</h3>
                <p className="text-[13px] text-white/80">info@asri.res.in</p>
              </motion.div>

              <motion.div variants={staggerItem} className="bg-[#831238] rounded-xl p-4 shadow-sm hover:shadow-md transition-all group cursor-pointer hover:bg-[#831238]/90">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <Building2 className="w-4 h-4 text-white" />
                </div>
                <h3 className="text-[15px] font-bold text-white mb-0.5">Partnerships</h3>
                <p className="text-[13px] text-white/80">partner@asri.res.in</p>
              </motion.div>

              <motion.div variants={staggerItem} className="bg-[#831238] rounded-xl p-4 shadow-sm hover:shadow-md transition-all group cursor-pointer sm:col-span-2 flex items-center justify-between hover:bg-[#831238]/90">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Globe className="w-3.5 h-3.5 text-white" />
                    </div>
                    <h3 className="text-[15px] font-bold text-white">Media & Press</h3>
                  </div>
                  <p className="text-[13px] text-white/80 mt-1">For press releases and media kits.</p>
                </div>
                <div className="text-right hidden sm:block">
                  <p className="text-white font-bold text-xs bg-white/10 px-2.5 py-1.5 rounded-full">media@asri.res.in</p>
                </div>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* SECTION 2: CONTACT INFORMATION & TIMINGS */}
      <section id="contact-info" className="py-24 px-6 mx-auto bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Additional Info Cards */}
          <motion.div
            className="lg:col-span-5 space-y-6"
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            
            {/* Working Hours Card */}
            <div className="bg-[#831238] text-white rounded-2xl p-8 shadow-md">
               <h3 className="text-xl font-bold mb-5 flex items-center gap-2"><Clock className="w-5 h-5"/> Working Hours</h3>
               <ul className="space-y-4 font-sans text-sm text-white/90">
                 <li className="flex justify-between border-b border-white/10 pb-3">
                   <span className="font-semibold">Monday - Friday</span> 
                   <span>09:00 AM - 06:00 PM</span>
                 </li>
                 <li className="flex justify-between border-b border-white/10 pb-3">
                   <span className="font-semibold">Saturday</span> 
                   <span>09:30 AM - 01:00 PM</span>
                 </li>
                 <li className="flex justify-between text-white/60">
                   <span className="font-semibold">Sunday & Public Holidays</span> 
                   <span>Closed</span>
                 </li>
               </ul>
            </div>

            {/* Ways to Reach Us */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 shadow-sm">
               <h3 className="text-xl font-bold text-[#831238] mb-5 flex items-center gap-2"><Phone className="w-5 h-5 text-[#831238]"/> Ways to Reach Us</h3>
               <div className="space-y-6">
                 <div>
                   <h4 className="font-bold text-[#831238] text-sm">Main Campus Reception</h4>
                   <p className="text-sm text-slate-600 mt-1">+91-80-4912-8800</p>
                 </div>
                 <div>
                   <h4 className="font-bold text-[#831238] text-sm">Admissions & Fellowships</h4>
                   <p className="text-sm text-slate-600 mt-1">admissions@asri.res.in</p>
                 </div>
                 <div>
                   <h4 className="font-bold text-[#831238] text-sm">Emergency / Security Desk</h4>
                   <p className="text-sm text-slate-600 mt-1 font-semibold text-[#831238]">+91-80-4912-9999 (24/7)</p>
                 </div>
               </div>
            </div>

          </motion.div>

          {/* Right Column: Key Contacts & Map */}
          <motion.div
            className="lg:col-span-7 space-y-6"
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            
            {/* Address Card */}
            <div className="bg-[#831238]/5 border border-[#831238]/20 rounded-2xl p-8 grid grid-cols-1 md:grid-cols-2 gap-8 shadow-sm">
               <div>
                <h3 className="text-lg font-bold text-[#831238] mb-1">Dr. Sarah Mitchell</h3>
                <p className="text-xs text-[#831238] font-bold uppercase tracking-wider mb-2">Vice Chancellor</p>
                <p className="text-sm text-slate-700 font-medium leading-relaxed">
                  Aetheris Scientific Research Institute<br />
                  Quantum Innovation Park, Electronic City<br /> Bengaluru - 560100
                </p>
                <div className="mt-4 space-y-1 text-sm font-semibold text-slate-700">
                  <p className="flex items-center gap-2"><Phone className="w-3.5 h-3.5 text-[#831238]"/> +91-80-4912-8801</p>
                  <p className="flex items-center gap-2"><Mail className="w-3.5 h-3.5 text-[#831238]"/> vc.admin@asri.res.in</p>
                </div>
               </div>

               <div>
                <h3 className="text-lg font-bold text-[#831238] mb-1">Dr. Rajesh Kumar</h3>
                <p className="text-xs text-[#831238] font-bold uppercase tracking-wider mb-2">Head of Research (CAMD)</p>
                <p className="text-sm text-slate-700 font-medium leading-relaxed">
                  Aetheris Scientific Research Institute<br />
                  Advanced Materials Wing<br /> Bengaluru - 560100
                </p>
                <div className="mt-4 space-y-1 text-sm font-semibold text-slate-700">
                  <p className="flex items-center gap-2"><Phone className="w-3.5 h-3.5 text-[#831238]"/> +91-80-4912-8842</p>
                  <p className="flex items-center gap-2"><Mail className="w-3.5 h-3.5 text-[#831238]"/> rajesh.camd@asri.res.in</p>
                </div>
               </div>
            </div>

            {/* Map Card */}
            <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden h-[300px] relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124416.03714589257!2d77.51173661148866!3d12.9715987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1717618037380!5m2!1sen!2sin" 
                className="absolute inset-0 w-full h-full border-0"
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

          </motion.div>

        </div>
      </section>

      {/* SECTION 6: FAQS ACCORDION */}
      <section id="contact-faqs" className="py-24 px-6 max-w-3xl mx-auto">
        <motion.div
          className="text-center mb-16 space-y-4"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <span className="font-sans text-xs tracking-wider text-[#831238] font-bold">Answers To Curated Queries</span>
          <h2 className="font-serif text-[30px] font-normal italic text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
        </motion.div>

        <motion.div
          className="space-y-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {FAQS.map((faq, idx) => (
            <motion.div 
              key={idx}
              variants={staggerItem}
              className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm"
            >
              <button 
                onClick={() => toggleFaq(idx)}
                className="w-full p-6 text-left font-serif font-bold text-slate-900 flex justify-between items-center transition-colors hover:bg-slate-50 focus:outline-none cursor-pointer"
              >
                <span className="text-sm md:text-base italic leading-snug">{faq.question}</span>
                {openFaqIndex === idx ? (
                  <ChevronUp className="w-5 h-5 text-[#831238] shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-[#831238] shrink-0" />
                )}
              </button>
              
              <AnimatePresence initial={false}>
                {openFaqIndex === idx && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 border-t border-slate-100 font-sans text-xs text-slate-700 font-medium leading-relaxed space-y-2">
                      <p>{faq.answer}</p>
                      <div className="pt-3 font-sans text-[10px] text-slate-400 font-medium tracking-wide">Category: {faq.category}</div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </section>

    </div>
  );
}
