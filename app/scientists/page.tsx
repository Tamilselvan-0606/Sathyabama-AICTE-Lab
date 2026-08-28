'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { fadeLeft, fadeRight, staggerContainer, staggerItem, viewportOnce } from '@/lib/animations';
import { Mail, GraduationCap, Award, BookOpen, Link2, Search } from 'lucide-react';
import { SCIENTISTS } from '@/lib/data';

export default function ScientistsPage() {
  const [roleFilter, setRoleFilter] = useState<'all' | 'director' | 'pi' | 'senior' | 'fellow' | 'advisor'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredScientists = SCIENTISTS.filter((scientist) => {
    const roleMatch = roleFilter === 'all' || scientist.role === roleFilter;
    const nameMatch =
      scientist.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      scientist.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      scientist.interests.some((interest) => interest.toLowerCase().includes(searchQuery.toLowerCase()));
    return roleMatch && nameMatch;
  });

  const advisoryBoard = [
    { name: 'Prof. Richard Goldstein', institution: 'CERN / ETH Zürich', discipline: 'Theoretical High-Energy Physics' },
    { name: 'Dr. Aris Thorne', institution: 'Max Planck Institute', discipline: 'Macromolecular Structure & Epigenetics' },
    { name: 'Prof. Lin Chen', institution: 'Stanford University', discipline: 'Semiconductor Mechanics & Topological States' },
    { name: 'Dr. Fatima Al-Hassan', institution: 'King Abdullah University of Science and Technology', discipline: 'Porous Materials & COF Chemistry' },
  ];

  return (
    <div id="scientists-view" className="bg-[#F4F4F2] text-slate-800">
      {/* SECTION 1: DIRECTOR'S MESSAGE */}
      <section id="directors-message" className="py-24 px-6 max-w-7xl mx-auto border-b border-slate-200">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <motion.div className="lg:col-span-5 relative" variants={fadeLeft} initial="hidden" animate="visible">
            <div className="absolute -inset-4 rounded-2xl bg-[#831238] opacity-5 blur-xl animate-none" />
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800"
                alt="Dr. Evelyn Vance - Director ASRI"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent text-white">
                <span className="font-sans text-[11px] text-amber-400 font-bold tracking-wide">Official Portrait</span>
                <p className="font-serif text-xl italic font-bold mt-1">Dr. Evelyn Vance</p>
                <p className="text-xs text-slate-300 font-sans">Director, Aetheris Scientific Research Institute</p>
              </div>
            </div>
          </motion.div>

          <motion.div className="lg:col-span-7 space-y-6" variants={fadeRight} initial="hidden" animate="visible">
            <span className="font-sans text-xs tracking-wider text-[#831238] font-bold">A Message from the Director</span>
            <h2 className="font-serif text-[30px] font-extrabold italic text-[#831238] tracking-tight leading-tight">
              Expanding Human Limits Through Pure Science
            </h2>
            <div className="space-y-6 text-slate-600 font-sans text-base leading-relaxed">
              <p className="italic font-medium text-slate-800">
                &ldquo;We do not assemble at ASRI to produce increments of common understanding. We exist to systematically expand the boundaries of physical truth, leveraging absolute clarity and modern instrumentation.&rdquo;
              </p>
              <p>
                As researchers, we are stewards of the absolute truths of nature. In an era where technological change happens at a rapid pace, our role at the Aetheris Scientific Research Institute is to provide a calm, robust, and autonomous harbor where physical theorists, molecular chemists, and roboticists can dismantle complexity back to its axioms.
              </p>
              <p>
                By preserving an academic environment modeled after CERN, NASA, and MIT Research, we enable our principal investigators to conduct high-risk studies. This structure has yielded groundbreaking progress in Majorana zero-mode stabilization, CRISPR CAS24 gene therapeutics, and carbon-capturing frameworks.
              </p>
              <p>
                We invite you to examine our publications, collaborate with our core laboratories, and join us in charting the next era of discovery.
              </p>
            </div>
            <div className="pt-6 border-t border-slate-200">
              <div className="font-serif text-lg italic font-bold text-slate-900">Dr. Evelyn Vance</div>
              <div className="font-sans text-xs text-slate-500 font-medium tracking-wide mt-1">Director, ASRI • Dirac Medalist</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2-6: SCIENTISTS DIRECTORY */}
      <section id="scientists-directory" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div className="space-y-4">
            <span className="font-sans text-xs tracking-wider text-[#831238] font-bold">Resident Minds</span>
            <h2 className="font-serif text-[30px] font-extrabold italic text-[#831238] tracking-tight">
              Scientific Faculty Directory
            </h2>
          </div>

          <motion.div className="flex flex-wrap gap-2" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce}>
            {(['all', 'director', 'pi', 'senior'] as const).map((role) => (
              <motion.button
                key={role}
                variants={staggerItem}
                onClick={() => setRoleFilter(role)}
                className={`px-4 py-2 text-xs font-sans font-semibold tracking-wide transition-all rounded-lg cursor-pointer ${
                  roleFilter === role
                    ? 'bg-[#831238] text-white shadow-sm'
                    : 'bg-white hover:bg-slate-100 border border-slate-200 text-slate-700'
                }`}
              >
                {role === 'all' ? 'All Faculty' : `${role}s`}
              </motion.button>
            ))}
          </motion.div>
        </div>

        {/* Directory Search */}
        <div className="relative max-w-md mb-12">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search by name, title, or research field..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-3 bg-white border border-slate-200 rounded-lg font-sans text-sm focus:outline-none focus:border-[#831238] transition-all placeholder:text-gray-450"
          />
        </div>

        <div className="space-y-16">
          {filteredScientists.map((scientist, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-200 p-8 shadow-md transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 group relative overflow-hidden"
            >
              <div className="lg:col-span-3 text-center sm:text-left">
                <div className="w-48 h-48 rounded-xl overflow-hidden border border-slate-200 mx-auto sm:mx-0 shadow-sm relative group-hover:shadow-md transition-all">
                  <img src={scientist.photo} alt={scientist.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="mt-6 space-y-3">
                  <div className="flex items-center justify-center sm:justify-start gap-2 text-[11px] font-sans font-medium text-slate-500 hover:text-[#831238] transition-colors cursor-pointer">
                    <Mail className="w-3.5 h-3.5 text-[#831238]" />
                    <span>{scientist.email}</span>
                  </div>
                  <div className="flex items-center justify-center sm:justify-start gap-2 text-[11px] font-sans font-medium text-slate-500 hover:text-[#831238] transition-colors cursor-pointer">
                    <Link2 className="w-3.5 h-3.5 text-[#831238]" />
                    <span>ORCID: {scientist.orcid}</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-9 space-y-6">
                <div>
                  <span className="font-sans text-[10px] text-[#831238] font-bold capitalize bg-[#831238]/10 px-2.5 py-1 rounded-md border border-[#831238]/20 tracking-wide">
                    {scientist.role}
                  </span>
                  <h3 className="font-serif text-2xl font-bold italic text-slate-900 mt-3">{scientist.name}</h3>
                  <p className="text-[#831238] text-xs font-sans font-semibold mt-1 tracking-wide uppercase">{scientist.title}</p>
                </div>

                <p className="text-slate-700 font-sans font-medium text-[13px] leading-relaxed">
                  {scientist.bio}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-slate-100">
                  <div className="space-y-3">
                    <h4 className="font-serif italic text-xs text-slate-900 tracking-wide flex items-center gap-1.5">
                      <GraduationCap className="w-4 h-4 text-[#831238]" /> Research Interests
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {scientist.interests.map((interest, i) => (
                        <span key={i} className="px-2.5 py-1 bg-slate-50 text-slate-700 rounded-md font-sans text-[10px] border border-slate-200">
                          {interest}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-serif italic text-xs text-slate-900 tracking-wide flex items-center gap-1.5">
                      <Award className="w-4 h-4 text-[#831238]" /> Awards &amp; Recognitions
                    </h4>
                    <ul className="space-y-1.5 text-slate-700 font-sans font-medium text-[11px] leading-relaxed">
                      {scientist.awards.map((award, i) => (
                        <li key={i} className="truncate flex items-start gap-1.5">
                          <span className="text-[#831238] mt-0.5">•</span> {award}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="space-y-3 pt-4">
                  <h4 className="font-serif italic text-xs text-slate-900 tracking-wide flex items-center gap-1.5">
                    <BookOpen className="w-4 h-4 text-[#831238]" /> Featured Peer Publications
                  </h4>
                  <ul className="space-y-1.5 text-slate-700 font-sans font-medium text-[11px] leading-relaxed italic">
                    {scientist.publications.map((pub, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-[#831238] mt-0.5">•</span> {pub}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 6: VISITING RESEARCHERS PROGRAM */}
      <section id="visiting-researchers" className="py-24 bg-white border-y border-slate-200 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5 space-y-6">
            <span className="font-sans text-xs tracking-wider text-[#831238] font-bold">Global Exchange</span>
            <h2 className="font-serif text-[30px] font-extrabold italic text-[#831238] leading-tight">
              Visiting Researchers Scheme
            </h2>
            <div className="space-y-4 text-slate-600 font-sans text-sm leading-relaxed">
              <p>
                Discovery has no boundaries. ASRI welcomes international scholars, senior postdoctorates, and tenured investigators from top-tier research complexes to work in our high-energy physics, genetics, and semiconductor cleanrooms.
              </p>
              <p>
                Our scheme offers 3 to 12 months of fully-funded residencies, including research stipends, access to Cryo-TEM, sub-Kelvin cryostats, NVIDIA DGX clusters, and customized molecular synthesis platforms. Applications are evaluated twice annually.
              </p>
            </div>
            <Link
              href="/events-and-announcements"
              className="px-6 py-3.5 bg-[#831238] hover:bg-[#831238]/90 text-white rounded-lg transition-all font-sans text-sm font-semibold inline-flex items-center gap-2 cursor-pointer"
            >
              Exchange Guidelines &amp; Application
            </Link>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 shadow-md space-y-6">
              <h4 className="font-serif italic font-bold text-slate-900 text-base">Active Visiting Scholars (2026)</h4>
              <div className="space-y-4">
                <div className="p-4 bg-white rounded-xl border border-slate-200 flex justify-between items-center">
                  <div>
                    <h5 className="font-serif italic text-slate-900 text-sm">Dr. Arthur Pendelton</h5>
                    <p className="text-[11px] text-slate-500 font-sans">University of Oxford, UK</p>
                  </div>
                  <span className="text-[10px] font-sans font-bold bg-[#831238]/10 text-[#831238] border border-[#831238]/20 px-2.5 py-0.5 rounded-md capitalize tracking-wide">
                    Quantum Optics
                  </span>
                </div>
                <div className="p-4 bg-white rounded-xl border border-slate-200 flex justify-between items-center">
                  <div>
                    <h5 className="font-serif italic text-slate-900 text-sm">Dr. Mei-Ling Zhang</h5>
                    <p className="text-[11px] text-slate-500 font-sans">Tsinghua University, Beijing</p>
                  </div>
                  <span className="text-[10px] font-sans font-bold bg-[#831238]/10 text-[#831238] border border-[#831238]/20 px-2.5 py-0.5 rounded-md capitalize tracking-wide">
                    Nanomaterials Synthesis
                  </span>
                </div>
                <div className="p-4 bg-white rounded-xl border border-slate-200 flex justify-between items-center">
                  <div>
                    <h5 className="font-serif italic text-slate-900 text-sm">Prof. Hans-Dieter</h5>
                    <p className="text-[11px] text-slate-500 font-sans">Max Planck Institute, Germany</p>
                  </div>
                  <span className="text-[10px] font-sans font-bold bg-[#831238]/10 text-[#831238] border border-[#831238]/20 px-2.5 py-0.5 rounded-md capitalize tracking-wide">
                    Epigenetics Research
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: ADVISORY BOARD */}
      <section id="advisory-board" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="font-sans text-xs tracking-wider text-[#831238] font-bold">Scientific Oversight</span>
          <h2 className="font-serif text-[30px] font-extrabold italic text-[#831238] tracking-tight">
            Governing Advisory Board
          </h2>
          <p className="text-slate-600 font-sans text-base">
            Our strategic scientific trajectory is guided by an international council of distinguished physicists, chemists, and computational biologists.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advisoryBoard.map((board, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-md flex flex-col justify-between hover:shadow-lg transition-all duration-300 group relative overflow-hidden"
            >
              <div>
                <span className="text-[11px] text-[#831238] font-sans font-bold tracking-wide">Council Advisor</span>
                <h4 className="font-serif italic font-bold text-slate-900 text-sm mt-2 mb-1">{board.name}</h4>
                <p className="text-[11px] text-slate-500 font-sans font-semibold mb-3">{board.institution}</p>
                <p className="text-[11px] text-slate-600 font-sans leading-relaxed font-medium">Discipline: {board.discipline}</p>
              </div>
              <div className="pt-4 border-t border-slate-100 mt-4 font-sans text-[11px] text-slate-400 font-semibold tracking-wide">
                Term: 2024 - 2028
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
