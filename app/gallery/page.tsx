'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { fadeUp, fadeLeft, viewportOnce } from '@/lib/animations';
import {
  X,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

const galleryImages = [
  { id: 1, src: '/Images/Gallery/Gallery_image1.jpg' },
  { id: 2, src: '/Images/Gallery/Gallery_image2.jpg' },
  { id: 3, src: '/Images/Gallery/Gallery_image3.jpg' },
  { id: 4, src: '/Images/Gallery/Gallery_image4.png' },
  { id: 5, src: '/Images/Gallery/Gallery_image5.jpg' },
  { id: 6, src: '/Images/Gallery/Gallery_image6.png' },
  { id: 7, src: '/Images/Gallery/Gallery_image7.jpg' },
  { id: 8, src: '/Images/Gallery/IMG_0857.jpg' },
  { id: 9, src: '/Images/Gallery/IMG_0858.JPG' },
  { id: 10, src: '/Images/Gallery/IMG_0859.JPG' },
  { id: 11, src: '/Images/Gallery/IMG_0920.jpg' },
  { id: 12, src: '/Images/Gallery/IMG_2949.jpg' },
  { id: 13, src: '/Images/Gallery/IMG_3039.JPEG' },
  { id: 14, src: '/Images/Gallery/IMG_4359.JPG' },
  { id: 15, src: '/Images/Gallery/IMG_4405.JPG' },
  { id: 16, src: '/Images/Gallery/IMG_4418.JPG' },
];

export default function GalleryPage() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handlePrev = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) =>
      prev !== null ? (prev === 0 ? galleryImages.length - 1 : prev - 1) : 0
    );
  }, [selectedIndex]);

  const handleNext = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) =>
      prev !== null ? (prev === galleryImages.length - 1 ? 0 : prev + 1) : 0
    );
  }, [selectedIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === 'Escape') setSelectedIndex(null);
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, handlePrev, handleNext]);

  return (
    <div id="gallery-view" className="bg-[#F4F4F2] text-slate-800 min-h-screen pt-8 md:pt-12 pb-16 md:pb-24 px-8 md:px-16 lg:px-24 w-full">
      {/* HEADER */}
      <motion.div
        className="mb-8 md:mb-10 max-w-3xl"
        variants={fadeLeft}
        initial="hidden"
        animate="visible"
      >
        <h1 className="font-serif text-[30px] font-extrabold italic text-[#831238] leading-[1.1] tracking-tight">
          AICTE IDEA Lab Gallery
        </h1>
      </motion.div>

      {/* GALLERY GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {galleryImages.map((image, index) => (
          <motion.div
            key={image.id}
            className="group relative cursor-pointer overflow-hidden bg-white p-[7px] rounded-lg border border-slate-200/80 shadow-md hover:p-0 hover:rounded-none hover:border-transparent hover:shadow-2xl transition-all duration-300"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            onClick={() => setSelectedIndex(index)}
          >
            {/* Image Container */}
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100 rounded-[5px] group-hover:rounded-none transition-all duration-300">
              <img
                src={image.src}
                alt={`AICTE Lab Gallery Image ${image.id}`}
                className="w-full h-full object-cover object-center transition-transform duration-500 ease-out"
                loading="lazy"
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* FULLSCREEN LIGHTBOX MODAL */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
            onClick={() => setSelectedIndex(null)}
          >
            {/* Top Bar Controls */}
            <div className="absolute top-5 left-6 text-white/80 text-sm font-mono tracking-wide">
              {selectedIndex + 1} / {galleryImages.length}
            </div>

            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute top-5 right-6 p-2.5 bg-white/10 hover:bg-[#831238] text-white rounded-full transition-all cursor-pointer z-50 shadow-lg"
              title="Close (Esc)"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Left Prev Navigation */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-[#831238] text-white rounded-full transition-all cursor-pointer z-50 shadow-lg"
              title="Previous (Left Arrow)"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Right Next Navigation */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-[#831238] text-white rounded-full transition-all cursor-pointer z-50 shadow-lg"
              title="Next (Right Arrow)"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Main Modal Image (No Border Radius, No Text) */}
            <motion.div
              key={selectedIndex}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-5xl max-h-[85vh] w-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={galleryImages[selectedIndex].src}
                alt={`AICTE Lab Gallery Image ${galleryImages[selectedIndex].id}`}
                className="max-h-[85vh] w-auto max-w-full shadow-2xl object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
