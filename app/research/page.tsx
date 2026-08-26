'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { fadeLeft, staggerContainer, staggerItem } from '@/lib/animations';
import {
  Search,
  Atom,
  Dna,
  Layers,
  Cpu,
  Clock,
  CheckCircle,
  Download,
  ShieldAlert,
} from 'lucide-react';
import { RESEARCH_PROJECTS, LABORATORIES } from '@/lib/data';

export default function ResearchPage() {
  const [projectFilter, setProjectFilter] = useState<'all' | 'ongoing' | 'completed' | 'future'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const domains = [
    {
      title: 'Quantum Engineering',
      desc: 'Advancing fault-tolerant superconducting quantum processors using non-abelian braids. We construct hardware designed to withstand thermal and quantum decoherence at cryogenic limits.',
      icon: Atom,
      lead: 'Dr. Evelyn Vance',
      projectsCount: 19,
    },
    {
      title: 'Genomic Engineering',
      desc: 'Developing high-precision gene editors and synthetic biological pathways. Our research establishes non-viral somatic tissue insertion vectors and epigenetic regulators.',
      icon: Dna,
      lead: 'Dr. Marcus Thorne',
      projectsCount: 14,
    },
    {
      title: 'Advanced Materials & COFs',
      desc: 'Synthesizing porous coordination networks for targeted carbon dioxide and hydrogen capture. Our nanostructure group fabricates single-atom transistor devices.',
      icon: Layers,
      lead: 'Dr. Kenji Sato / Dr. Sarah Jenkins',
      projectsCount: 16,
    },
    {
      title: 'Neuromorphic AI & Swarms',
      desc: 'Prototyping memristive neuromorphic systems. We design spiking neural network software for decentralized, collective spacecraft and micro-drone swarm guidance.',
      icon: Cpu,
      lead: 'Dr. Helena Rostova',
      projectsCount: 11,
    },
  ];

  const filteredProjects = RESEARCH_PROJECTS.filter((project) => {
    const matchesFilter = projectFilter === 'all' || project.status === projectFilter;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.domain.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div id="research-view" className="bg-[#F4F4F2] text-slate-800">
      {/* SECTION 1: RESEARCH OVERVIEW */}
      <section id="research-hero" className="py-24 bg-white border-b border-slate-200">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div className="space-y-6" variants={fadeLeft} initial="hidden" animate="visible">
              <div>
                <span className="font-sans text-xs tracking-wide text-[#831238] font-bold bg-[#831238]/10 px-3.5 py-1.5 rounded-lg inline-block">
                  Core Scientific Roadmap
                </span>
              </div>
              <h1 className="font-serif text-[30px] font-extrabold italic text-slate-900 tracking-tight leading-tight">
                Investigating the Boundaries of Physical Truth
              </h1>
              <p className="text-slate-700 font-sans text-base font-light leading-relaxed">
                At ASRI, our scientific investigation spans from macro-environmental systems to localized sub-atomic structures. Our research domains are interlocked, ensuring that insights in solid-state materials are immediately translated into neurological AI layouts or biological synthesis grids.
              </p>
            </motion.div>

            <motion.div className="grid grid-cols-2 gap-6" variants={staggerContainer} initial="hidden" animate="visible">
              <motion.div variants={staggerItem} className="p-5 rounded-2xl bg-[#9A1642] shadow-sm flex flex-col justify-center">
                <div className="font-serif text-2xl font-bold italic text-white animate-none">60+</div>
                <div className="font-sans text-[11px] text-white/80 mt-1 font-semibold">Active Scientists</div>
              </motion.div>
              <motion.div variants={staggerItem} className="p-5 rounded-2xl bg-[#9A1642] shadow-sm flex flex-col justify-center">
                <div className="font-serif text-2xl font-bold italic text-white animate-none">22</div>
                <div className="font-sans text-[11px] text-white/80 mt-1 font-semibold">Core Lab Suites</div>
              </motion.div>
              <motion.div variants={staggerItem} className="p-5 rounded-2xl bg-[#9A1642] shadow-sm flex flex-col justify-center">
                <div className="font-serif text-2xl font-bold italic text-white animate-none">140+</div>
                <div className="font-sans text-[11px] text-white/80 mt-1 font-semibold">Ongoing Investigations</div>
              </motion.div>
              <motion.div variants={staggerItem} className="p-5 rounded-2xl bg-[#9A1642] shadow-sm flex flex-col justify-center">
                <div className="font-serif text-2xl font-bold italic text-white animate-none">4.8</div>
                <div className="font-sans text-[11px] text-white/80 mt-1 font-semibold">h-Index Median</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2: RESEARCH DOMAINS */}
      <section id="research-domains" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="font-sans text-xs tracking-wider text-[#831238] font-bold">Scientific Spheres</span>
          <h2 className="font-serif text-[30px] font-extrabold italic text-[#831238] tracking-tight">
            Our Primary Research Domains
          </h2>
          <p className="text-slate-600 font-sans text-base">
            ASRI directs capital and intellectual focus into four integrated high-stakes sciences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {domains.map((dom, i) => {
            const Icon = dom.icon;
            return (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm transition-all duration-300 flex flex-col md:flex-row gap-6 group relative overflow-hidden"
              >
                <div className="p-4 bg-[#831238]/10 text-[#831238] rounded-xl shrink-0 h-14 w-14 flex items-center justify-center">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="space-y-4 flex-1">
                  <h3 className="font-serif text-lg font-bold italic text-slate-900">{dom.title}</h3>
                  <p className="text-slate-700 font-sans font-medium text-sm leading-relaxed">{dom.desc}</p>
                  <div className="flex justify-between items-center text-xs font-sans pt-2 border-t border-slate-100">
                    <span className="text-slate-700 font-semibold">Domain Lead: {dom.lead}</span>
                    <span className="text-[#831238] font-bold">{dom.projectsCount} Projects</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* SECTION 3: CORE LABORATORIES */}
      <section id="research-labs" className="py-24 bg-[#EBEBE9] border-y border-slate-250 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="font-sans text-xs tracking-wider text-[#831238] font-bold">Physical Facilities</span>
            <h2 className="font-serif text-[30px] font-extrabold italic text-[#831238] tracking-tight">
              Laboratory Platforms &amp; Infrastructure
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {LABORATORIES.map((lab, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm transition-all flex flex-col group relative"
              >
                <div>
                  <div className="h-52 relative overflow-hidden">
                    <img src={lab.image} alt={lab.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent" />
                    <div className="absolute bottom-5 left-5 right-5">
                      <h4 className="font-serif italic font-bold text-white text-[19px] leading-tight drop-shadow-md">{lab.name}</h4>
                    </div>
                  </div>
                  <div className="p-6 pb-0 space-y-4">
                    <p className="text-sm text-slate-700 font-sans font-medium leading-relaxed">{lab.focus}</p>
                  </div>
                </div>
                <div className="p-6 mt-auto">
                  <div className="text-[10px] font-sans text-slate-400 font-bold tracking-widest uppercase mb-3">Core Infrastructure</div>
                  <div className="flex flex-wrap gap-2">
                    {lab.equipment.map((eq, i) => (
                      <span key={i} className="px-2.5 py-1.5 bg-slate-50 text-slate-600 border border-slate-200 rounded-md text-[10px] font-sans font-semibold truncate max-w-full">
                        {eq}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4, 5: ONGOING & COMPLETED PROJECTS */}
      <section id="project-portfolio" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div className="space-y-4">
            <span className="font-sans text-xs tracking-wider text-[#831238] font-bold">Active Portfolio</span>
            <h2 className="font-serif text-[30px] font-extrabold italic text-[#831238] tracking-tight">
              Research Project Portfolio
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {(['all', 'ongoing', 'completed', 'future'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setProjectFilter(tab)}
                className={`px-4 py-2 text-xs font-sans font-semibold tracking-wide transition-all rounded-lg cursor-pointer ${
                  projectFilter === tab
                    ? 'bg-[#831238] text-white shadow-sm'
                    : 'bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 hover:text-[#831238]'
                }`}
              >
                {tab === 'all' ? 'All Projects' : `${tab.charAt(0).toUpperCase() + tab.slice(1)} Projects`}
              </button>
            ))}
          </div>
        </div>

        <div className="relative max-w-md mb-8">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search projects by keywords, lead, or domain..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-3 bg-white border border-slate-200 rounded-lg font-sans text-sm focus:outline-none focus:border-[#831238] transition-all placeholder:text-gray-450"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((proj, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200 p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-sans text-xs text-slate-500 tracking-wide font-semibold">{proj.domain}</span>
                  <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] font-sans font-bold capitalize ${
                    proj.status === 'ongoing' ? 'bg-amber-50 text-amber-800 border border-amber-200' :
                    proj.status === 'completed' ? 'bg-green-50 text-green-800 border border-green-200' :
                    'bg-slate-100 text-slate-700 border border-slate-200'
                  }`}>
                    {proj.status === 'ongoing' ? <Clock className="w-3 h-3" /> : <CheckCircle className="w-3 h-3" />}
                    {proj.status}
                  </div>
                </div>
                <h3 className="font-serif text-lg font-bold italic text-slate-900 leading-tight">
                  {proj.title}
                </h3>
                <p className="text-slate-700 text-sm font-sans font-medium leading-relaxed">
                  {proj.description}
                </p>
                <div className="p-4 bg-[#831238]/5 rounded-xl space-y-2 border border-[#831238]/10 mt-4">
                  <div className="text-[13px] text-slate-700 font-sans font-medium">
                    <span className="font-bold text-[#831238]">Project Objective:</span> {proj.objective}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-6 mt-6 border-t border-slate-100 text-xs font-sans">
                <div>
                  <span className="text-slate-500 tracking-wide font-semibold">Principal Investigator</span>
                  <p className="text-slate-800 font-bold mt-1 tracking-wide">{proj.lead}</p>
                </div>
                <div>
                  <span className="text-slate-500 tracking-wide font-semibold">Funding Pool &amp; Term</span>
                  <p className="text-slate-800 font-bold mt-1 tracking-wide">{proj.funding} • {proj.duration}</p>
                </div>
              </div>
            </div>
          ))}
          {filteredProjects.length === 0 && (
            <div className="col-span-2 text-center py-16 bg-white rounded-2xl border border-slate-200 group relative overflow-hidden transition-all">
              <ShieldAlert className="w-12 h-12 text-slate-400 mx-auto mb-4" />
              <p className="text-slate-500 font-sans text-sm tracking-wide">No research projects match your search criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* SECTION 6: PUBLICATIONS ARCHIVE */}
      <section id="research-publications" className="py-24 bg-[#831238] text-white px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/15 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_50%)]" />
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center relative z-10">
          <div className="lg:w-1/2 space-y-6">
            <span className="font-sans text-xs tracking-wide text-amber-300 font-bold bg-white/10 px-3.5 py-1.5 rounded-lg border border-white/10">
              Digital Library Node
            </span>
            <h2 className="font-serif text-[30px] font-extrabold italic text-white tracking-tight leading-tight">
              Intellectual Asset Repository
            </h2>
            <div className="space-y-4 text-white/90 font-sans text-sm leading-relaxed">
              <p>
                ASRI enforces strict open-access mandates. Every research paper, clinical outcome profile, subatomic data set, and mechanical schematic produced inside our cleanrooms is uploaded to our central cryptographic index.
              </p>
              <p>
                We collaborate with the arXiv repository, NASA ADS, and PubMed Central to synchronize indexing, ensuring theoretical physicists, synthetic biochemists, and robotic engineers worldwide can repeat or refine our findings without commercial barriers.
              </p>
            </div>
            <Link
              href="/resources"
              className="px-6 py-3.5 bg-white hover:bg-slate-50 text-[#831238] rounded-lg transition-all font-sans text-sm font-semibold inline-flex items-center gap-2 cursor-pointer shadow-lg active:scale-95"
            >
              Open Digital Repository <Download className="w-4 h-4" />
            </Link>
          </div>
          <div className="lg:w-1/2 w-full">
            <div className="p-8 bg-slate-950/60 rounded-2xl border border-white/10 backdrop-blur-md space-y-6 shadow-xl">
              <div className="flex justify-between items-center pb-4 border-b border-white/10">
                <span className="font-sans text-[10px] text-amber-200 tracking-wider">Database Status</span>
                <span className="px-2.5 py-0.5 bg-green-500/20 text-green-300 border border-green-500/30 rounded-md font-sans text-[10px] font-bold tracking-wider">
                  Synchronized
                </span>
              </div>
              <div className="space-y-4">
                <div className="p-4 bg-slate-950/40 rounded-xl border border-white/10 flex justify-between items-center">
                  <div>
                    <h5 className="font-serif italic text-white text-sm">Preprint Index</h5>
                    <p className="text-[10px] text-white/50 font-sans">arXiv &amp; ADS Mirror Nodes</p>
                  </div>
                  <span className="font-mono text-xs font-bold text-amber-300 tracking-wider">1,248 Papers</span>
                </div>
                <div className="p-4 bg-slate-950/40 rounded-xl border border-white/10 flex justify-between items-center">
                  <div>
                    <h5 className="font-serif italic text-white text-sm">Subatomic Datasets</h5>
                    <p className="text-[10px] text-white/50 font-sans">Majorana Braiding Matrices</p>
                  </div>
                  <span className="font-mono text-xs font-bold text-amber-300 tracking-wider">4.2 Petabytes</span>
                </div>
                <div className="p-4 bg-slate-950/40 rounded-xl border border-white/10 flex justify-between items-center">
                  <div>
                    <h5 className="font-serif italic text-white text-sm">CRISPR sgRNA Indices</h5>
                    <p className="text-[10px] text-white/50 font-sans">Target Binding Models</p>
                  </div>
                  <span className="font-mono text-xs font-bold text-amber-300 tracking-wider">920,000 Entries</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: GRANTS & FUNDING BREAKDOWN */}
      <section id="funding-section" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5 space-y-6">
            <span className="font-sans text-xs tracking-wider text-[#831238] font-bold">Operational Ecosystem</span>
            <h2 className="font-serif text-[30px] font-extrabold italic text-[#831238] leading-tight animate-none">
              Grant Allocations &amp; Capital Stewardship
            </h2>
            <p className="text-slate-600 font-sans text-sm leading-relaxed">
              We operate on an independent endowment structure, receiving capital from ministries, aerospace and biomedical licensing, and private philanthropic trusts focused on deep tech exploration.
            </p>
            <div className="space-y-4 pt-4">
              <div className="flex justify-between items-center py-2 border-b border-slate-200 text-sm font-sans">
                <span className="text-slate-600">Competitive National Research Grants</span>
                <span className="font-mono font-bold text-slate-900">60%</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-slate-200 text-sm font-sans">
                <span className="text-slate-600">Aerospace/Biomedical Licensing</span>
                <span className="font-mono font-bold text-slate-900">20%</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-slate-200 text-sm font-sans">
                <span className="text-slate-600">Philanthropic Discovery Endowments</span>
                <span className="font-mono font-bold text-slate-900">15%</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-slate-200 text-sm font-sans">
                <span className="text-slate-600">Venture Spinoff equity distributions</span>
                <span className="font-mono font-bold text-slate-900">5%</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-md space-y-8 group relative overflow-hidden transition-all hover:shadow-lg">
              <div>
                <h4 className="font-serif italic font-bold text-slate-900 text-lg">ASRI Annual Capital Deployment Pool</h4>
                <p className="text-[11px] text-slate-500 font-sans tracking-wide mt-1 uppercase font-semibold">Fiscal Year 2026 Allocation</p>
              </div>
              <div className="space-y-5">
                <div>
                  <div className="flex justify-between text-[13px] font-sans text-slate-700 font-semibold mb-2">
                    <span>Laboratory Consumables &amp; Liquid Helium Logistics</span>
                    <span className="text-[#831238] font-bold">$18.5M (41%)</span>
                  </div>
                  <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-[#831238] to-[#B01A4C] h-full rounded-full transition-all duration-1000 ease-out" style={{ width: '41%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-[13px] font-sans text-slate-700 font-semibold mb-2">
                    <span>Doctoral Fellowships &amp; Staff Remuneration</span>
                    <span className="text-[#831238] font-bold">$13.5M (30%)</span>
                  </div>
                  <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-[#831238] to-[#B01A4C] h-full rounded-full transition-all duration-1000 ease-out" style={{ width: '30%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-[13px] font-sans text-slate-700 font-semibold mb-2">
                    <span>Structural Infrastructure &amp; Cleanroom Expansions</span>
                    <span className="text-[#831238] font-bold">$9.0M (20%)</span>
                  </div>
                  <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-[#831238] to-[#B01A4C] h-full rounded-full transition-all duration-1000 ease-out" style={{ width: '20%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-[13px] font-sans text-slate-700 font-semibold mb-2">
                    <span>Visiting Research Grants &amp; Summits Logistics</span>
                    <span className="text-[#831238] font-bold">$4.0M (9%)</span>
                  </div>
                  <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-[#831238] to-[#B01A4C] h-full rounded-full transition-all duration-1000 ease-out" style={{ width: '9%' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: FUTURE RESEARCH ROADMAP */}
      <section id="future-roadmap" className="py-24 bg-[#EBEBE9] border-t border-slate-250 px-6">
        <div className="max-w-7xl mx-auto text-center space-y-8">
          <div>
            <span className="font-sans text-xs tracking-wider text-[#831238] font-bold bg-white px-4 py-2 rounded-lg shadow-sm">
              Forward Horizon (2026 - 2035)
            </span>
          </div>
          <h2 className="font-serif text-[30px] font-extrabold italic text-[#831238] max-w-2xl mx-auto tracking-tight">
            Future Research Vectors
          </h2>
          <p className="text-slate-600 font-sans max-w-3xl mx-auto text-base leading-relaxed">
            ASRI’s academic council maintains a long-range strategic model. In addition to current ongoing programs, we have mapped resources for three future scientific fields.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
            <div className="bg-white p-8 rounded-2xl border border-slate-200 text-left space-y-4 shadow-md transition-shadow group relative overflow-hidden">
              <span className="font-sans text-[10px] text-[#831238] font-bold bg-[#831238]/10 px-2.5 py-1 rounded-md tracking-wide">Deep Space Radio Optics</span>
              <h4 className="font-serif italic font-bold text-slate-900 text-base">Cosmic Neutrino Mapping</h4>
              <p className="text-xs text-slate-700 font-sans font-medium leading-relaxed">
                Structuring sub-surface arrays of water-Cherenkov detectors to intercept high-energy cosmic neutrinos, correlating solar core dynamics and topological space curvature anomalies.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200 text-left space-y-4 shadow-md transition-shadow group relative overflow-hidden">
              <span className="font-sans text-[10px] text-[#831238] font-bold bg-[#831238]/10 px-2.5 py-1 rounded-md tracking-wide">Molecular Mechanics</span>
              <h4 className="font-serif italic font-bold text-slate-900 text-base">Synthetic Mitochondria</h4>
              <p className="text-xs text-slate-700 font-sans font-medium leading-relaxed">
                Assembling artificial metabolic ATP-producing organelle systems using synthetic membranes and enzymatically guided catalytic chains, restoring cellular energy storage indexes.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200 text-left space-y-4 shadow-md transition-shadow group relative overflow-hidden">
              <span className="font-sans text-[10px] text-[#831238] font-bold bg-[#831238]/10 px-2.5 py-1 rounded-md tracking-wide">Climate Stabilization</span>
              <h4 className="font-serif italic font-bold text-slate-900 text-base">Atmospheric Cloud Condensers</h4>
              <p className="text-xs text-slate-700 font-sans font-medium leading-relaxed">
                Utilizing non-toxic organic polymer micro-crystals via localized electrostatic drones to stimulate selective ocean cloud formation, increasing planetary albedo cooling rates.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
