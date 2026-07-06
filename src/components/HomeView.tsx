import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Atom,
  Dna,
  Cpu,
  Activity,
  TrendingUp,
  Globe,
  ArrowRight,
  Download,
  BookOpen,
  MapPin,
  Beaker,
  Layers,
  Users,
  Award,
  ChevronDown,
  Sparkles
} from 'lucide-react';
import { DISCOVERIES, PUBLICATIONS, LABORATORIES } from '../data';
import heroImage from '../../assets/images/image.png';

interface HomeViewProps {
  onNavigate: (tab: any) => void;
}

export default function HomeView({ onNavigate }: HomeViewProps) {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<'all' | 'physics' | 'bio' | 'materials'>('all');

  const researchCategories = [
    {
      title: 'Quantum Physics',
      desc: 'Topological state manipulation, quantum computing architectures, and Josephson junctions.',
      icon: Atom,
      color: 'from-amber-500 to-rose-600',
      stat: '19 Active Projects'
    },
    {
      title: 'Biotechnology',
      desc: 'Precision genomic editing with CRISPR-Cas24 and direct cellular reprograming pipelines.',
      icon: Dna,
      color: 'from-red-600 to-orange-500',
      stat: '14 Active Projects'
    },
    {
      title: 'Nanotechnology',
      desc: 'Synthesis of covalent organic frameworks (COFs) and armchair graphene nanoribbons.',
      icon: Layers,
      color: 'from-amber-600 to-red-500',
      stat: '16 Active Projects'
    },
    {
      title: 'Environmental Science',
      desc: 'Selective carbon capture porous polymers and atmospheric thermodynamic modeling.',
      icon: Globe,
      color: 'from-rose-500 to-amber-500',
      stat: '12 Active Projects'
    },
    {
      title: 'Medical Research',
      desc: 'Therapeutic vector designs, cellular senescence regulation, and genetic molecular repairs.',
      icon: Activity,
      color: 'from-red-500 to-rose-600',
      stat: '9 Active Projects'
    },
    {
      title: 'Robotics & AI',
      desc: 'Spiking neural networks, memristive logic devices, and autonomous swarm spacecraft navigators.',
      icon: Cpu,
      color: 'from-orange-600 to-amber-600',
      stat: '11 Active Projects'
    }
  ];

  return (
    <div id="home-view" className="bg-slate-50 text-slate-800">

      {/* SECTION 1: HERO BANNER (Asymmetric split-layout matching Clean Minimalism) */}
      <section id="hero-banner" className="relative min-h-screen flex items-stretch overflow-hidden bg-white text-slate-900 border-b border-gray-200">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 min-h-screen">

          {/* Hero Left Column (6/12) */}
          <div className="lg:col-span-6 flex flex-col justify-center p-8 md:p-16 lg:p-24 lg:pr-8 bg-white relative z-20">
            <div className="absolute top-10 left-8 md:left-16 lg:left-24 text-[10px] tracking-wider text-gray-400 mb-4 font-sans font-semibold">
              Theoretical Division // 2026 Framework
            </div>

            <div className="mt-8 mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 border border-slate-200 text-slate-700 text-[10px] font-sans tracking-wide rounded-lg">
                <Sparkles className="w-3.5 h-3.5 text-amber-500 animate-pulse" />
                <span>ASRI • 25 Years of Discovery</span>
              </div>
            </div>

            <h1 className="text-[30px] font-extrabold leading-tight text-[#831238] mb-8 tracking-tight">
              Pushing the Limits of <br />
              <span className="text-[#831238]">
                Theoretical & Applied Science
              </span>
            </h1>

            <p className="text-sm md:text-base text-slate-600 max-w-xl leading-relaxed mb-10 font-sans">
              Where topological quantum computing, genomic engineering, and artificial memristive synaptic networks intersect. ASRI acts as a catalyst for human discovery, modeling physical laws and biology from subatomic strings to global ecosystems.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => onNavigate('research')}
                className="px-8 py-4 bg-[#831238] hover:bg-[#620a27] text-white text-sm font-sans font-medium shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all rounded-lg flex items-center justify-center gap-2 cursor-pointer"
              >
                Explore Research <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => onNavigate('institute')}
                className="px-8 py-4 border border-gray-300 text-gray-900 text-sm font-sans font-medium hover:bg-gray-50 hover:border-gray-400 transition-colors rounded-lg cursor-pointer"
              >
                Institute Profile
              </button>
            </div>
          </div>

          {/* Image / Data Visual Column (6/12) */}
          <div className="lg:col-span-6 flex items-center justify-center p-4 lg:py-20 lg:pr-20 lg:pl-0 min-h-[500px] lg:min-h-0 bg-white relative z-10">
            <div className="relative w-full h-full lg:h-[90%] rounded-xl lg:-ml-20 lg:-translate-y-8 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
              <img src={heroImage} alt="Hero Research Visual" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 2: ABOUT THE INSTITUTE */}
      <section id="about-section" className="py-24 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-7 space-y-8">
          <div className="inline-block px-3 py-1 bg-slate-100 border border-slate-200 text-slate-700 font-sans text-xs font-semibold rounded-lg tracking-wide">
            Established 2001
          </div>
          <h2 className="font-serif text-[30px] font-extrabold italic text-[#831238] leading-[1.1] tracking-tight">
            A Sanctuary for High-Stakes Intellectual and Physical Inquiry
          </h2>
          <div className="space-y-6 text-slate-600 font-sans leading-relaxed text-base">
            <p className="font-medium text-slate-800 text-lg">
              The Aetheris Scientific Research Institute (ASRI) stands as a beacon of uncompromising scientific rigorousness, designed on the models of CERN and MIT. We convene global minds to investigate high-risk, high-reward theoretical and experimental fields that define the trajectory of our civilization.
            </p>
            <p>
              By aligning physical theorists, genomic chemists, and neuro-engineers within a unified, state-of-the-art campus, we bypass the silos of traditional departments. Our core philosophy is anchored on "first principles" research—stripping scientific query back to its fundamental axioms and building groundbreaking applications upon absolute truths.
            </p>
            <p>
              Operating with durable funding guarantees and specialized laboratory platforms, ASRI protects the intellectual autonomy of our principal investigators, enabling continuous exploration with global impact.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-6 pt-4 border-t border-slate-200">
            <div>
              <div className="font-serif text-[30px] font-bold italic text-red-700">450+</div>
              <div className="font-sans text-xs text-slate-500 mt-1">Peer Journals</div>
            </div>
            <div>
              <div className="font-serif text-[30px] font-bold italic text-red-700">60+</div>
              <div className="font-sans text-xs text-slate-500 mt-1">Global Patents</div>
            </div>
            <div>
              <div className="font-serif text-[30px] font-bold italic text-red-700">$45M</div>
              <div className="font-sans text-xs text-slate-500 mt-1">Annual Grants</div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-5 relative">
          <div className="relative rounded-xl overflow-hidden border border-slate-200 shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800"
              alt="ASRI Modern Advanced Laboratory"
              className="w-full h-[500px] object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent text-white">
              <span className="font-sans text-xs text-amber-400 font-semibold">Plate 09 — ARNA Division</span>
              <p className="font-serif italic text-lg mt-1">Bionics & Robotic Synchronization Array</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: OUR RESEARCH EXCELLENCE */}
      <section id="excellence-section" className="py-24 bg-[#831238] border-y border-red-950 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="font-sans text-xs tracking-wider text-amber-300 font-bold bg-white/10 px-3.5 py-1.5 rounded-lg backdrop-blur-sm">Research Divisions</span>
            <h2 className="font-serif text-[30px] font-extrabold italic text-white leading-tight">
              Domains of Pure and Applied Inquiry
            </h2>
            <p className="text-white/80 font-sans text-base">
              ASRI operates across six key tactical fields, structured to transition theoretical mathematics and physics into biological and chemical engineering solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10">
            {researchCategories.map((cat, idx) => {
              const IconComp = cat.icon;
              return (
                <div key={idx} className="flex items-start gap-5 group cursor-pointer" onClick={() => onNavigate('research')}>
                  <div className="shrink-0 mt-1">
                    <div className="p-3 rounded-full bg-white/5 border border-white/10 text-amber-300 group-hover:bg-amber-300 group-hover:text-[#831238] group-hover:border-amber-300 transition-all duration-300">
                      <IconComp className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h3 className="font-serif text-lg font-bold text-white group-hover:text-amber-300 transition-colors duration-300">
                      {cat.title}
                    </h3>
                    <p className="text-white/70 text-sm font-sans leading-relaxed">
                      {cat.desc}
                    </p>
                    <div className="pt-2 flex items-center justify-between">
                      <span className="font-mono text-[10px] text-white/40 uppercase tracking-widest">{cat.stat}</span>
                      <span className="text-xs font-sans font-bold text-amber-300 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-x-2 group-hover:translate-x-0">
                        Explore <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 4: FEATURED LABORATORIES */}
      <section id="labs-section" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div className="space-y-4">
            <span className="font-sans text-xs tracking-wider text-[#831238] font-bold">State-of-the-Art Facilities</span>
            <h2 className="font-serif text-[30px] font-extrabold italic text-[#831238] tracking-tight">
              Featured Core Research Labs
            </h2>
          </div>
          <button
            id="view-all-labs-btn"
            onClick={() => onNavigate('research')}
            className="px-5 py-2.5 border border-gray-300 rounded-lg hover:border-[#831238] text-slate-700 hover:text-[#831238] transition-all font-sans font-medium text-xs flex items-center gap-2 cursor-pointer"
          >
            All Core Laboratories <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {LABORATORIES.map((lab) => (
            <div
              key={lab.id}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-slate-300 group shadow-md flex flex-col h-full transition-all duration-300 relative hover:-translate-y-1"
            >

              <div className="w-full relative overflow-hidden h-56 shrink-0">
                <img
                  src={lab.image}
                  alt={lab.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <span className="font-sans text-[9px] tracking-wide bg-red-900/80 px-2.5 py-1 rounded-md font-semibold">Core Platform</span>
                </div>
              </div>
              <div className="w-full p-6 flex flex-col flex-grow justify-between space-y-6 relative z-10">
                <div>
                  <h3 className="font-serif text-base font-bold italic text-slate-900 leading-snug group-hover:text-red-700 transition-colors">
                    {lab.name}
                  </h3>
                  <div className="font-sans text-xs text-slate-500 mt-1 mb-4">Lead: {lab.head}</div>
                  <p className="text-slate-700 text-sm font-sans font-medium line-clamp-3 leading-relaxed">
                    {lab.description}
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-100">
                  <div className="text-xs font-sans font-semibold text-slate-800 mb-2 tracking-wide">Key Instrumentation:</div>
                  <ul className="text-slate-700 text-[11px] font-mono font-medium space-y-1">
                    {lab.equipment.slice(0, 2).map((eq, i) => (
                      <li key={i} className="truncate">• {eq}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 5: SCIENTIFIC DISCOVERIES TIMELINE */}
      <section id="discoveries-section" className="py-24 bg-[#831238] text-white px-6 overflow-hidden relative border-y border-red-950">
        <div className="absolute inset-0 bg-black/15 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_50%)]" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <span className="font-mono text-[10px] tracking-[0.25em] text-amber-300 uppercase font-bold bg-white/10 px-3.5 py-1.5 rounded-none">Milestones & Breakthroughs</span>
            <h2 className="font-serif text-[30px] font-extrabold italic text-white tracking-tight">
              Timeline of Scientific Discoveries
            </h2>
            <p className="text-white/80 font-sans text-base">
              Through consistent investment in fundamental science, ASRI scientists have achieved several historical firsts.
            </p>
          </div>

          <div className="relative border-l border-white/20 md:ml-32 pl-8 md:pl-16 space-y-16">
            {DISCOVERIES.map((disc, idx) => (
              <div key={idx} className="relative group">
                {/* Year Badge floating to the left on desktop */}
                <div className="absolute -left-[53px] md:-left-[160px] top-1 md:w-28 text-left font-serif text-2xl md:text-3xl italic font-extrabold text-amber-300 flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-white group-hover:scale-125 transition-transform shrink-0" />
                  <span className="hidden md:inline">{disc.year}</span>
                </div>

                <div className="bg-slate-950/70 border border-white/10 backdrop-blur-md p-8 rounded-2xl hover:border-white/30 transition-all duration-300">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
                    <div>
                      <span className="font-sans text-[9px] text-amber-500 tracking-wide font-bold bg-slate-900 border border-slate-850 px-2.5 py-1 rounded-md">
                        {disc.category}
                      </span>
                      <h3 className="font-serif text-lg md:text-xl font-bold italic text-white mt-3">
                        {disc.title}
                      </h3>
                    </div>
                    <div className="text-left md:text-right">
                      <div className="font-serif text-2xl italic text-red-400">{disc.stats}</div>
                      <div className="font-sans text-[10px] text-slate-500 tracking-wider">Experimental Fidelity</div>
                    </div>
                  </div>
                  <p className="text-slate-300 font-sans leading-relaxed text-sm mb-6">
                    {disc.description}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-slate-800 text-xs">
                    <div>
                      <span className="text-slate-500 font-sans text-[11px] tracking-wide font-semibold">Primary Investigator</span>
                      <p className="text-slate-300 font-serif italic font-medium mt-1">{disc.investigator}</p>
                    </div>
                    <div>
                      <span className="text-slate-500 font-sans text-[11px] tracking-wide font-semibold">Civilizational Impact</span>
                      <p className="text-slate-300 font-sans font-medium mt-1">{disc.impact}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: PUBLICATIONS & JOURNALS */}
      <section id="publications-section" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="font-sans text-xs tracking-wider text-[#831238] font-bold">Intellectual Contributions</span>
          <h2 className="font-serif text-[30px] font-extrabold italic text-[#831238] tracking-tight">
            Latest Publications & Journals
          </h2>
          <p className="text-slate-600 font-sans text-base">
            Our researchers continuously present results in peer-reviewed journals of high repute. Explore our open archive papers.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {PUBLICATIONS.map((pub, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200 rounded-2xl hover:shadow-lg transition-all duration-300 flex flex-col sm:flex-row relative group overflow-hidden"
            >
              {/* Image Side */}
              <div className="sm:w-2/5 relative overflow-hidden h-48 sm:h-auto shrink-0 border-b sm:border-b-0 sm:border-r border-slate-100">
                {pub.image ? (
                  <img src={pub.image} alt={pub.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                ) : (
                  <div className="w-full h-full bg-slate-50" />
                )}
                {/* Citations Overlay */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-2.5 py-1.5 rounded-md shadow-sm border border-slate-100">
                  <div className="flex items-center gap-1.5 text-red-800 font-sans text-[10px] font-bold uppercase tracking-widest">
                    <TrendingUp className="w-3 h-3" />
                    {pub.citations} Citations
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className="sm:w-3/5 p-6 flex flex-col justify-between bg-white">
                <div className="space-y-3">
                  <span className="font-mono text-[10px] text-slate-500 font-semibold uppercase tracking-wider">{pub.journal} • {pub.year}</span>
                  <h3 className="font-serif text-[15px] font-bold italic text-slate-900 leading-snug group-hover:text-[#831238] transition-colors">
                    {pub.title}
                  </h3>
                  <p className="font-mono text-[11px] text-slate-700 font-semibold italic line-clamp-1">Authors: {pub.authors}</p>
                  <p className="text-slate-600 text-[13px] font-sans font-medium line-clamp-3 leading-relaxed">
                    {pub.abstract}
                  </p>
                </div>

                <div className="pt-5 mt-5 border-t border-slate-100 flex justify-between items-center text-xs w-full">
                  <span className="font-mono text-[10px] text-slate-400">DOI: {pub.doi}</span>
                  <button
                    onClick={() => onNavigate('resources')}
                    className="text-[#831238] hover:text-red-950 font-sans font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <BookOpen className="w-3.5 h-3.5" /> Full Abstract
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            id="view-archive-btn"
            onClick={() => onNavigate('resources')}
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#831238] hover:bg-[#831238]/90 text-white rounded-lg transition-all font-sans font-semibold text-xs cursor-pointer"
          >
            Access ASRI Open-Access Archive <Download className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* SECTION 7: GLOBAL COLLABORATIONS MAP */}
      <section id="collab-section" className="py-24 bg-[#F4F4F2] border-t border-slate-200 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5 space-y-6">
              <span className="font-sans text-xs tracking-wider text-[#831238] font-bold">Global Scientific Grid</span>
              <h2 className="font-serif text-[30px] font-extrabold italic text-[#831238] leading-tight">
                Our Global Research Partners
              </h2>
              <p className="text-slate-600 font-sans leading-relaxed text-base">
                Scientific discovery requires absolute synergy. ASRI operates in active partnership with 40+ leading aerospace, biotechnology, and physical institutions worldwide, exchanging researchers, hosting summits, and operating shared data nodes.
              </p>
              <div className="space-y-4 pt-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-red-700 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-serif italic font-bold text-slate-900 text-sm">CERN — Geneva, Switzerland</h4>
                    <p className="text-sm text-slate-500 font-sans">High Energy Physics and Antimatter Co-simulations.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-red-700 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-serif italic font-bold text-slate-900 text-sm">NASA Jet Propulsion Laboratory — California, USA</h4>
                    <p className="text-sm text-slate-500 font-sans">Autonomous spacecraft mapping pipelines and swarm validation.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-red-700 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-serif italic font-bold text-slate-900 text-sm">MIT Research Laboratories — Massachusetts, USA</h4>
                    <p className="text-sm text-slate-500 font-sans">Advanced nanometer lithography and topological semiconductors.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 relative h-full">
              <div className="bg-white rounded-2xl p-8 lg:p-12 border border-slate-200 shadow-md h-full flex flex-col justify-center relative">
                
                <div className="flex justify-between items-start mb-12">
                  <div>
                    <span className="font-sans text-[11px] text-[#831238] tracking-widest font-bold uppercase bg-[#831238]/10 px-3 py-1.5 rounded-md">Data Network</span>
                    <h4 className="font-serif italic font-extrabold text-slate-900 text-2xl mt-3">Global Output Capacity</h4>
                  </div>
                  <span className="flex h-3 w-3 relative mt-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.4)]"></span>
                  </span>
                </div>

                {/* Chart Area */}
                <div className="space-y-8 relative">
                  {/* Grid Lines behind bars */}
                  <div className="absolute inset-y-0 left-0 right-0 flex justify-between pointer-events-none opacity-20">
                    <div className="w-px h-full bg-slate-400"></div>
                    <div className="w-px h-full bg-slate-400"></div>
                    <div className="w-px h-full bg-slate-400"></div>
                    <div className="w-px h-full bg-slate-400"></div>
                    <div className="w-px h-full bg-slate-400"></div>
                  </div>

                  <div className="relative z-10 space-y-8">
                    {/* Node 1 */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-[13px] font-sans text-slate-700 font-semibold">
                        <span>NODE ALPHA (Geneva)</span>
                        <span className="text-[#831238] font-bold">1.2 Gbps</span>
                      </div>
                      <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                        <motion.div initial={{width: 0}} animate={{width: '82%'}} transition={{duration: 1.5}} className="bg-gradient-to-r from-[#831238] to-[#B01A4C] h-full rounded-full relative" />
                      </div>
                    </div>

                    {/* Node 2 */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-[13px] font-sans text-slate-700 font-semibold">
                        <span>NODE BETA (Pasadena)</span>
                        <span className="text-[#831238] font-bold">840 Mbps</span>
                      </div>
                      <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                        <motion.div initial={{width: 0}} animate={{width: '65%'}} transition={{duration: 1.5, delay: 0.2}} className="bg-gradient-to-r from-[#831238] to-[#B01A4C] h-full rounded-full relative" />
                      </div>
                    </div>

                    {/* Node 3 */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-[13px] font-sans text-slate-700 font-semibold">
                        <span>NODE GAMMA (Tokyo)</span>
                        <span className="text-[#831238] font-bold">950 Mbps</span>
                      </div>
                      <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                        <motion.div initial={{width: 0}} animate={{width: '74%'}} transition={{duration: 1.5, delay: 0.4}} className="bg-gradient-to-r from-[#831238] to-[#B01A4C] h-full rounded-full relative" />
                      </div>
                    </div>
                    
                    {/* Node 4 */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-[13px] font-sans text-slate-700 font-semibold">
                        <span>NODE DELTA (London)</span>
                        <span className="text-[#831238] font-bold">420 Mbps</span>
                      </div>
                      <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                        <motion.div initial={{width: 0}} animate={{width: '45%'}} transition={{duration: 1.5, delay: 0.6}} className="bg-gradient-to-r from-[#831238] to-[#B01A4C] h-full rounded-full relative" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Chart X-Axis Labels */}
                <div className="flex justify-between text-[10px] text-slate-400 font-mono mt-4 border-t border-slate-100 pt-3">
                  <span>0</span>
                  <span>250</span>
                  <span>500</span>
                  <span>750</span>
                  <span>1000+</span>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>



    </div>
  );
}
