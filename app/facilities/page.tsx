'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { fadeUp, fadeLeft, fadeRight, staggerContainer, staggerItem, viewportOnce } from '@/lib/animations';
import { FileText, ArrowRight, Download, X } from 'lucide-react';

const facilitiesBanner = '/Images/Facilities/Facilities-banner-image-new.png';
const facilitiesCo2LaserCover = '/Images/Facilities/co2-laser-cutter.jpg';
const facilitiesCncMillingCover = '/Images/Facilities/3-axis-cnc-milling.jpg';
const facilitiesStratasysF370Cover = '/Images/Facilities/stratasys-f370.jpeg';
const facilitiesMakerbotZ18Cover = '/Images/Facilities/makerbot-replicator-z18.jpeg';
const facilitiesMakerbotReplicatorPlusCover = '/Images/Facilities/makerbot-replicator-plus.jpeg';
const facilitiesSignalGeneratorCover = '/Images/Facilities/signal-generator.jpeg';
const facilitiesHpPrinterCover = '/Images/Facilities/hp-printer.jpeg';
const facilitiesCo2LaserManual = '/Images/Facilities/co2-laser-cutter-manual.jpeg';
const facilitiesCncMillingManual = '/Images/Facilities/3-axis-cnc-milling-manual.png';
const facilitiesSignalGeneratorManual = '/Images/Facilities/signal-generator-manual.jpg';
const facilitiesHpPrinterManual = '/Images/Facilities/printer-manual.jpeg';
const facilitiesStratasysF370Manual = '/Images/Facilities/f370-manual.png';
const facilitiesMakerbotZ18Manual = '/Images/Facilities/z18-manual.png';
const facilitiesReplicatorPlusManual = '/Images/Facilities/replicator-manual.png';

export default function FacilitiesPage() {
  const [activeModal, setActiveModal] = useState<{
    title: string;
    coverImage: string;
    manualImage: string;
    showingManual: boolean;
  } | null>(null);

  const subtractiveTools = [
    {
      title: 'CO2 Laser Cutter',
      type: 'Subtractive Fabrication',
      desc: 'This is a high-precision CO2 laser cutter and engraver. Engineered for subtractive manufacturing across diverse non-metallic substrates.',
      contact: 'aciteidealab@sathyabama.ac.in',
      coverImage: facilitiesCo2LaserCover,
      manualImage: facilitiesCo2LaserManual,
    },
    {
      title: '3-Axis CNC Milling',
      type: 'Subtractive Machining',
      desc: 'This machine is an industrial-grade 3-Axis CNC milling and routing system for automated carving and component prototyping. A 3-Axis CNC router is a computer controlled system used for subtractive manufacturing, it functions by removing material from a solid workpiece to create 2-D or 3-D shapes.',
      contact: 'aciteidealab@sathyabama.ac.in',
      coverImage: facilitiesCncMillingCover,
      manualImage: facilitiesCncMillingManual,
    },
  ];

  const printingTools = [
    {
      title: 'Stratasys F370',
      type: 'Industrial Additive System',
      desc: 'Stratasys F370 is a professional 3-D printer specializing in polymer additive manufacturing, PolyJet, P3 and SAF. Its generous build volume and multi-material capacity allow for seamless fabrication.',
      contact: 'aciteidealab@sathyabama.ac.in',
      coverImage: facilitiesStratasysF370Cover,
      manualImage: facilitiesStratasysF370Manual,
    },
    {
      title: 'MakerBot Replicator Z18',
      type: 'Large-Volume 3D Printer',
      desc: 'MakerBot Replicator Z18 is an enclosed 3-D printer with massive build volume and heated chamber. It enables the creation of massive, high-accuracy prototypes and delivers automated print monitoring.',
      contact: 'aciteidealab@sathyabama.ac.in',
      coverImage: facilitiesMakerbotZ18Cover,
      manualImage: facilitiesMakerbotZ18Manual,
    },
    {
      title: 'MakerBot Replicator +',
      type: 'Desktop Rapid Prototyper',
      desc: 'The MakerBot Replicator + serves as a rapid prototyping platform utilizing Fused Deposition Modeling (FDM) technology to translate digital CAD models into precise physical iterations.',
      contact: 'aciteidealab@sathyabama.ac.in',
      coverImage: facilitiesMakerbotReplicatorPlusCover,
      manualImage: facilitiesReplicatorPlusManual,
    },
  ];

  const electronicsTools = [
    {
      title: 'Signal Generator',
      type: 'Electronic Test Instrument',
      desc: 'A signal generator is an electronic test instrument that synthesizes electrical waveforms with controllable frequency, amplitude and modulation characteristics.',
      contact: 'aciteidealab@sathyabama.ac.in',
      coverImage: facilitiesSignalGeneratorCover,
      manualImage: facilitiesSignalGeneratorManual,
    },
    {
      title: 'HP Laser Printer',
      type: 'Support & Documentation Equipment',
      desc: 'HP Laser Printer is engineered for large scale workloads. It delivers high speed, vibrant colour and easily integrates into networks to support continuous operations.',
      contact: 'aciteidealab@sathyabama.ac.in',
      coverImage: facilitiesHpPrinterCover,
      manualImage: facilitiesHpPrinterManual,
    },
  ];

  return (
    <div id="facilities-view" className="bg-[#F4F4F2] text-slate-800 w-full overflow-hidden">
      {/* SECTION 1: FACILITIES OVERVIEW */}
      <section id="facilities-hero" className="relative py-14 sm:py-20 md:py-24 bg-white border-b border-slate-200 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24 w-full">
        <div className="w-full max-w-7xl 2xl:max-w-[1536px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <motion.div className="lg:col-span-7 space-y-4" variants={fadeLeft} initial="hidden" whileInView="visible" viewport={viewportOnce}>
              <h1 className="font-serif text-2xl sm:text-[28px] md:text-[30px] font-extrabold italic text-[#831238] tracking-tight leading-tight">
                Our Core Facilities
              </h1>
              <div className="bg-[#F4F4F2] rounded-2xl border border-slate-200 p-5 sm:p-7 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between mb-4 sm:mb-5">
                    <span className="font-serif text-xs sm:text-sm font-bold text-[#831238] bg-[#831238]/10 px-3 py-1 rounded-full">
                      01
                    </span>
                  </div>

                  <p className="text-slate-600 font-sans text-xs sm:text-sm leading-relaxed text-justify">
                    The AICTE IDEA Lab is equipped with <strong className="text-slate-900 font-semibold">industry-standard machinery</strong> to support your journey from a digital concept to a physical prototype. Our advanced equipment spans both <strong className="text-slate-900 font-semibold">subtractive and additive manufacturing</strong>, along with essential <strong className="text-slate-900 font-semibold">electronics and testing systems</strong>.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="lg:col-span-5 relative w-full flex items-center justify-center"
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
            >
              <div className="w-full h-auto overflow-hidden shadow-md">
                <img
                  src={facilitiesBanner}
                  alt="AICTE IDEA Lab Facilities Overview"
                  className="w-full h-auto object-contain block"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2: SUBTRACTIVE MANUFACTURING TOOLS */}
      <section id="subtractive-tools" className="py-14 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24 w-full bg-[#F4F4F2]">
        <div className="w-full max-w-7xl 2xl:max-w-[1536px] mx-auto space-y-8 sm:space-y-12">
          <div>
            <h2 className="font-serif text-2xl sm:text-[28px] md:text-[30px] font-extrabold italic text-[#831238] tracking-tight leading-tight">
              Subtractive Manufacturing Tools
            </h2>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto gap-6 sm:gap-8 w-full"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {subtractiveTools.map((tool, idx) => (
              <motion.div
                key={idx}
                variants={staggerItem}
                className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col justify-between group w-full"
              >
                <div>
                  <div className="h-52 sm:h-64 relative overflow-hidden bg-slate-900">
                    <img
                      src={tool.coverImage}
                      alt={tool.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="font-serif text-lg sm:text-xl font-bold italic drop-shadow-md">
                        {tool.title}
                      </h3>
                    </div>
                  </div>

                  <div className="p-5 sm:p-7 space-y-4">
                    <div className="space-y-2">
                      <span className="font-sans text-[11px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider">
                        Description
                      </span>
                      <p className="text-slate-700 font-sans text-xs sm:text-sm leading-relaxed text-justify">
                        {tool.desc}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-slate-100 flex items-center gap-2 flex-wrap">
                      <span className="font-sans text-xs font-bold text-slate-500">Contact Details:</span>
                      <a
                        href={`mailto:${tool.contact}`}
                        className="text-[#831238] font-sans text-xs font-semibold hover:underline break-all"
                      >
                        {tool.contact}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="p-5 sm:p-7 pt-0">
                  <button
                    onClick={() =>
                      setActiveModal({
                        title: tool.title,
                        coverImage: tool.coverImage,
                        manualImage: tool.manualImage,
                        showingManual: false,
                      })
                    }
                    className="w-full py-3 px-4 rounded-xl bg-[#831238] hover:bg-[#6a0f2d] text-white font-sans text-xs font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm hover:shadow"
                  >
                    <span>View Image</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 3: ADVANCED 3D PRINTING SYSTEMS */}
      <section id="advanced-3d-printing" className="py-14 sm:py-20 md:py-24 bg-white px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24 w-full">
        <div className="w-full max-w-7xl 2xl:max-w-[1536px] mx-auto space-y-8 sm:space-y-12">
          <div>
            <h2 className="font-serif text-2xl sm:text-[28px] md:text-[30px] font-extrabold italic text-[#831238] tracking-tight leading-tight">
              Advanced 3D Printing Systems
            </h2>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {printingTools.map((tool, idx) => (
              <motion.div
                key={idx}
                variants={staggerItem}
                className="bg-[#F4F4F2] rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col justify-between group"
              >
                <div>
                  <div className="h-52 sm:h-64 relative overflow-hidden bg-slate-900">
                    <img
                      src={tool.coverImage}
                      alt={tool.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="font-serif text-lg sm:text-xl font-bold italic drop-shadow-md">
                        {tool.title}
                      </h3>
                    </div>
                  </div>

                  <div className="p-5 sm:p-7 space-y-4">
                    <div className="space-y-2">
                      <span className="font-sans text-[11px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider">
                        Description
                      </span>
                      <p className="text-slate-700 font-sans text-xs sm:text-sm leading-relaxed text-justify">
                        {tool.desc}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-slate-200/60 flex items-center gap-2 flex-wrap">
                      <span className="font-sans text-xs font-bold text-slate-500">Contact Details:</span>
                      <a
                        href={`mailto:${tool.contact}`}
                        className="text-[#831238] font-sans text-xs font-semibold hover:underline break-all"
                      >
                        {tool.contact}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="p-5 sm:p-7 pt-0">
                  <button
                    onClick={() =>
                      setActiveModal({
                        title: tool.title,
                        coverImage: tool.coverImage,
                        manualImage: tool.manualImage,
                        showingManual: false,
                      })
                    }
                    className="w-full py-3 px-4 rounded-xl bg-[#831238] hover:bg-[#6a0f2d] text-white font-sans text-xs font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm hover:shadow"
                  >
                    <span>View Image</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 4: ELECTRONICS & SUPPORT EQUIPMENT */}
      <section id="electronics-support" className="py-14 sm:py-20 md:py-24 bg-[#EBEBE9] px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24 w-full">
        <div className="w-full max-w-7xl 2xl:max-w-[1536px] mx-auto space-y-8 sm:space-y-12">
          <div>
            <h2 className="font-serif text-2xl sm:text-[28px] md:text-[30px] font-extrabold italic text-[#831238] tracking-tight leading-tight">
              Electronics &amp; Support Equipment
            </h2>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto gap-6 sm:gap-8 w-full"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {electronicsTools.map((tool, idx) => (
              <motion.div
                key={idx}
                variants={staggerItem}
                className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col justify-between group w-full"
              >
                <div>
                  <div className="h-52 sm:h-64 relative overflow-hidden bg-slate-900">
                    <img
                      src={tool.coverImage}
                      alt={tool.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="font-serif text-lg sm:text-xl font-bold italic drop-shadow-md">
                        {tool.title}
                      </h3>
                    </div>
                  </div>

                  <div className="p-5 sm:p-7 space-y-4">
                    <div className="space-y-2">
                      <span className="font-sans text-[11px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider">
                        Description
                      </span>
                      <p className="text-slate-700 font-sans text-xs sm:text-sm leading-relaxed text-justify">
                        {tool.desc}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-slate-100 flex items-center gap-2 flex-wrap">
                      <span className="font-sans text-xs font-bold text-slate-500">Contact Details:</span>
                      <a
                        href={`mailto:${tool.contact}`}
                        className="text-[#831238] font-sans text-xs font-semibold hover:underline break-all"
                      >
                        {tool.contact}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="p-5 sm:p-7 pt-0">
                  <button
                    onClick={() =>
                      setActiveModal({
                        title: tool.title,
                        coverImage: tool.coverImage,
                        manualImage: tool.manualImage,
                        showingManual: false,
                      })
                    }
                    className="w-full py-3 px-4 rounded-xl bg-[#831238] hover:bg-[#6a0f2d] text-white font-sans text-xs font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm hover:shadow"
                  >
                    <span>View Image</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 5: MINOR EQUIPMENTS */}
      <section id="minor-equipments" className="py-14 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24 w-full bg-white border-t border-slate-200">
        <div className="w-full max-w-7xl 2xl:max-w-[1536px] mx-auto space-y-8 sm:space-y-12">
          <div>
            <h2 className="font-serif text-2xl sm:text-[28px] md:text-[30px] font-extrabold italic text-[#831238] tracking-tight leading-tight">
              Minor Equipments
            </h2>
          </div>

          <motion.div
            className="flex flex-col md:flex-row justify-center items-stretch gap-6 sm:gap-8 w-full"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <div className="bg-[#F4F4F2] rounded-none border border-slate-200 p-5 sm:p-8 shadow-sm hover:!outline-none hover:!border-slate-200 flex flex-col justify-between w-full md:w-4/5 lg:w-2/3 max-w-3xl mx-auto">
              <div className="space-y-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#831238]/10 text-[#831238] flex items-center justify-center font-sans font-bold text-xs">
                  PDF
                </div>
                <p className="text-slate-700 font-sans text-xs sm:text-sm md:text-base leading-relaxed">
                  Click below to open and view the comprehensive documentation and catalog of minor equipment available at Sathyabama AICTE IDEA Lab.
                </p>
              </div>

              <div className="pt-6 border-t border-slate-200/70 mt-6 flex justify-start">
                <a
                  href="/Pdf/Equipmen list( Minor equipment).pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-4 sm:px-6 rounded-xl bg-[#831238] hover:bg-[#6a0f2d] text-white font-sans text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer shadow-sm hover:shadow"
                >
                  <FileText className="w-4 h-4" />
                  <span>View Minor Equipments (PDF)</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* IMAGE PREVIEW & MANUAL MODAL */}
      {activeModal && (
        <div
          onClick={() => setActiveModal(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-sm"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-2xl max-w-xl sm:max-w-2xl w-full flex flex-col shadow-2xl relative max-h-[95vh] overflow-hidden"
          >
            <div className="flex items-center justify-between border-b border-slate-100 p-4 sm:p-5 shrink-0">
              <h3 className="font-serif text-lg sm:text-xl font-bold italic text-slate-900 truncate pr-2">
                {activeModal.title} {activeModal.showingManual ? '(Manual)' : ''}
              </h3>
              <button
                onClick={() => setActiveModal(null)}
                className="p-1.5 sm:p-2 rounded-full hover:bg-slate-100 text-slate-500 hover:text-slate-800 transition-colors cursor-pointer shrink-0"
                title="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-3 sm:p-4 flex-1 flex items-center justify-center overflow-auto max-h-[78vh] [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
              <img
                src={activeModal.showingManual ? activeModal.manualImage : activeModal.coverImage}
                alt={`${activeModal.title} ${activeModal.showingManual ? 'Manual Sheet' : 'Image'}`}
                className="w-full max-h-[68vh] sm:max-h-[75vh] object-contain block"
              />
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-2.5 sm:gap-3 p-4 px-5 sm:px-6 border-t border-slate-100 bg-white shrink-0">
              {activeModal.showingManual ? (
                <a
                  href={activeModal.manualImage}
                  download={`${activeModal.title.replace(/\s+/g, '_')}_Manual.jpg`}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2.5 rounded-lg bg-[#831238] hover:bg-[#6a0f2d] text-white text-xs font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm text-center"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Image</span>
                </a>
              ) : (
                <button
                  onClick={() =>
                    setActiveModal((prev) => (prev ? { ...prev, showingManual: true } : null))
                  }
                  className="px-5 py-2.5 rounded-lg bg-[#831238] hover:bg-[#6a0f2d] text-white text-xs font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm text-center"
                >
                  <span>View Manual Image</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
