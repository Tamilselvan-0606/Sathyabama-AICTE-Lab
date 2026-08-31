'use client';

import React from 'react';
import { motion } from 'motion/react';
import { fadeLeft, staggerContainer, staggerItem, viewportOnce } from '@/lib/animations';

const aboutBanner = '/Images/About/about-banner.png';
const aboutImg1 = '/Images/About/About_image1.jpg';
const visionImg = '/Images/About/about-vision.png';

export default function AboutPage() {
  const missionItems = [
    {
      number: '01',
      title: 'Promote Innovation & Experiential Learning',
      desc: 'Fostering creativity, design thinking, and hands-on problem-solving among students and faculty.',
    },
    {
      number: '02',
      title: 'Enable Interdisciplinary Collaboration',
      desc: 'Bringing together academia, industry, researchers, School Children and startups to develop innovative solutions for real-world challenges.',
    },
    {
      number: '03',
      title: 'Facilitate Prototyping & Entrepreneurship',
      desc: 'Providing advanced facilities for ideation, product development, intellectual property creation, and startup incubation.',
    },
    {
      number: '04',
      title: 'Drive Societal & Industrial Impact',
      desc: 'Developing sustainable, technology-driven solutions that address national priorities and contribute to economic and social development.',
    },
  ];

  return (
    <div id="about-us-view" className="bg-[#F4F4F2] text-slate-800 w-full overflow-hidden">
      {/* SECTION 0: HERO BANNER */}
      <section id="about-banner" className="w-full relative overflow-hidden bg-[#831238] border-b border-slate-200">
        <div className="w-full">
          <img
            src={aboutBanner}
            alt="AICTE IDEA Lab Sathyabama Banner"
            className="w-full h-44 sm:h-56 md:h-68 lg:h-80 xl:h-96 object-cover object-[left_top] sm:object-top block"
          />
        </div>
      </section>

      {/* SECTION 1: ABOUT US / OVERVIEW */}
      <section id="about-us-overview" className="py-14 sm:py-20 md:py-24 bg-white border-b border-slate-200 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24 w-full">
        <div className="w-full max-w-7xl 2xl:max-w-[1536px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <motion.div className="lg:col-span-7 space-y-4 sm:space-y-6" variants={fadeLeft} initial="hidden" whileInView="visible" viewport={viewportOnce}>
              <h1 className="font-serif text-2xl sm:text-[28px] md:text-[30px] font-extrabold italic text-[#831238] tracking-tight leading-tight">
                Overview
              </h1>
              <div className="space-y-3 sm:space-y-4 text-slate-700 font-sans text-xs sm:text-sm md:text-base leading-relaxed text-justify">
                <p>
                  The AICTE IDEA (Idea Development, Evaluation &amp; Application) Lab at Sathyabama Institute of Science and Technology is a cutting-edge innovation and prototyping facility that was established with the support of the All India Council for Technical Education (AICTE), Government of India. The laboratory functions as a multidisciplinary hub where students, faculty, researchers, startups, and innovators collaborate to convert creative concepts into functional prototypes and innovative products.
                </p>
                <p>
                  The laboratory is designed to promote experiential learning and the development of hands-on skills by providing advanced facilities for subtractive and additive manufacturing, electronics, robotics, IoT, embedded systems, rapid prototyping, and product development. It fosters the participation of students from all engineering disciplines in industry-oriented projects, innovation, entrepreneurship, and design thinking.
                </p>
                <p>
                  The AICTE IDEA Lab empowers young innovators to develop sustainable solutions that address real-world societal and industrial challenges while contributing to the national vision of Atmanirbhar Bharat by bridging the gap between academic knowledge and practical implementation. This is achieved through interdisciplinary research, startup incubation, patent development, and technology commercialization.
                </p>
              </div>
            </motion.div>
            <motion.div
              className="lg:col-span-5 relative w-full flex items-center justify-center"
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
            >
              <div className="w-full h-auto overflow-hidden shadow-md">
                <img
                  src={aboutImg1}
                  alt="About AICTE IDEA Lab"
                  className="w-full h-auto object-contain block"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2: VISION */}
      <section id="vision-section" className="py-14 sm:py-20 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24 w-full bg-[#F4F4F2]">
        <div className="w-full max-w-7xl 2xl:max-w-[1536px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-4">
              <h2 className="font-serif text-2xl sm:text-[28px] md:text-[30px] font-extrabold italic text-[#831238] tracking-tight leading-tight">
                Vision
              </h2>
              <div className="bg-white rounded-2xl border border-slate-200 hover:border-[#831238] p-5 sm:p-7 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between mb-4 sm:mb-5">
                    <span className="font-serif text-xs sm:text-sm font-bold text-[#831238] bg-[#831238]/10 px-3 py-1 rounded-full">
                      01
                    </span>
                  </div>

                  <p className="text-slate-600 font-sans text-xs sm:text-sm leading-relaxed text-justify">
                    To establish as a <strong className="text-slate-900 font-semibold">vibrant centre of innovation, creativity, and experiential learning</strong> that nurtures problem-solvers, innovators, and entrepreneurs by transforming ideas into impactful technologies and sustainable solutions.
                  </p>
                </div>
              </div>
            </div>
            <motion.div
              className="lg:col-span-5 relative w-full flex items-center justify-center"
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
            >
              <div className="w-full h-auto overflow-hidden shadow-md">
                <img
                  src={visionImg}
                  alt="Vision AICTE IDEA Lab"
                  className="w-full h-auto object-contain block"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 3: MISSION */}
      <section id="mission-section" className="py-14 sm:py-20 bg-white border-t border-slate-200 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24 w-full">
        <div className="w-full max-w-7xl 2xl:max-w-[1536px] mx-auto space-y-6 sm:space-y-8">
          <div>
            <h2 className="font-serif text-2xl sm:text-[28px] md:text-[30px] font-extrabold italic text-[#831238] tracking-tight leading-tight">
              Mission
            </h2>
          </div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 w-full"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {missionItems.map((item, idx) => (
              <motion.div
                key={idx}
                variants={staggerItem}
                className="bg-[#F4F4F2] hover:bg-white rounded-2xl border border-slate-200 hover:border-[#831238] p-5 sm:p-7 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4 sm:mb-5">
                    <span className="font-serif text-xs sm:text-sm font-bold text-[#831238] bg-[#831238]/10 px-3 py-1 rounded-full">
                      {item.number}
                    </span>
                  </div>

                  <h3 className="font-serif text-base sm:text-lg font-bold italic text-slate-900 group-hover:text-[#831238] transition-colors leading-snug mb-2 sm:mb-3">
                    {item.title}
                  </h3>

                  <p className="text-slate-600 font-sans text-xs sm:text-sm leading-relaxed text-justify">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
