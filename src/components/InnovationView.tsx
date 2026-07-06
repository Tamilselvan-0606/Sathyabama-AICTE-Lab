import React, { useState } from 'react';
import { motion } from 'motion/react';
import { fadeUp, fadeLeft, fadeRight, staggerContainer, staggerItem, viewportOnce } from '../animations';
import { Zap, ShieldAlert, Cpu, Award, FileText, ArrowRight, Layers, Briefcase, HelpCircle, CheckCircle } from 'lucide-react';
import { EQUIPMENTS, PATENTS } from '../data';

interface InnovationViewProps {
  onNavigate: (tab: any) => void;
}

export default function InnovationView({ onNavigate }: InnovationViewProps) {
  const [patentFilter, setPatentFilter] = useState<'all' | 'Granted' | 'Pending'>('all');

  const incubationStartups = [
    {
      name: 'Aura Quantum Solutions',
      focus: 'Topological Quantum Cryptography',
      desc: 'Developing room-temperature topological optical interconnects and quantum key distribution platforms for enterprise networks. Incubated at ASRI since 2024.',
      status: 'Series A Funded',
      tech: 'Majorana Interconnects'
    },
    {
      name: 'Cas24 Therapeutics',
      focus: 'CRISPR somatic insertions',
      desc: 'Deploying high-fidelity Cas24 endonucleases to treat degenerative muscular disorders in targeted somatic cell assemblies. Incubated at ASRI since 2025.',
      status: 'Pre-clinical Trials',
      tech: 'Somatic Cas24 Gene Vectors'
    },
    {
      name: 'HydraCOF Polymers',
      focus: 'Flue gas CO2 filtration',
      desc: 'Manufacturing microporous composite filtration sheets embedded with covalent organic framework particles for direct industrial smokestack air capture.',
      status: 'Pilot Factory Live',
      tech: 'COF-909 Membrane Filters'
    }
  ];

  const filteredPatents = PATENTS.filter(pat => patentFilter === 'all' || pat.status === patentFilter);

  return (
    <div id="innovation-view" className="bg-[#F4F4F2] text-slate-800">
      
      {/* SECTION 1: INNOVATION OVERVIEW */}
      <section id="innovation-hero" className="relative py-24 bg-white border-b border-slate-200 px-6">
        <div className="container mx-auto max-w-7xl flex flex-col lg:flex-row gap-16 items-center relative z-10">
          <motion.div className="lg:w-1/2 space-y-6" variants={fadeLeft} initial="hidden" animate="visible">
            <div>
              <span className="font-sans text-[11px] tracking-wider text-[#831238] font-bold bg-[#831238]/10 px-3.5 py-1.5 rounded-lg border border-[#831238]/20 uppercase">
                Technology Transfer & IP
              </span>
            </div>
            <h1 className="font-serif text-[34px] font-extrabold italic text-slate-900 tracking-tight leading-tight">
              Translating Physical Truth Into Human Progress
            </h1>
            <p className="text-slate-600 font-sans text-base leading-relaxed">
              At ASRI, we believe true scientific mastery is measured by physical repeatability and civilizational utility. Our Technology Transfer Office actively assists researchers in patenting structural materials, gene vectors, and custom processors, bridging the gap between basic theory and scaled societal integration.
            </p>
          </motion.div>

          <motion.div className="lg:w-1/2 w-full grid grid-cols-1 sm:grid-cols-2 gap-4" variants={staggerContainer} initial="hidden" animate="visible">
            <motion.div variants={staggerItem} className="bg-[#9A1642] p-5 rounded-2xl shadow-sm flex flex-col justify-center">
              <div className="font-serif text-3xl font-bold italic text-white leading-none mb-1">80+</div>
              <div className="font-sans text-[11px] text-white/80 font-semibold tracking-wide uppercase">Filed Patents</div>
            </motion.div>
            <motion.div variants={staggerItem} className="bg-[#9A1642] p-5 rounded-2xl shadow-sm flex flex-col justify-center">
              <div className="font-serif text-3xl font-bold italic text-white leading-none mb-1">14</div>
              <div className="font-sans text-[11px] text-white/80 font-semibold tracking-wide uppercase">Spin-off Ventures</div>
            </motion.div>
            <motion.div variants={staggerItem} className="bg-[#9A1642] p-5 rounded-2xl shadow-sm flex flex-col justify-center sm:col-span-2">
              <div className="font-serif text-3xl font-bold italic text-white leading-none mb-1">$12M+</div>
              <div className="font-sans text-[11px] text-white/80 font-semibold tracking-wide uppercase">Royalty Revenues Re-deployed</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: ADVANCED RESEARCH FACILITIES */}
      <section id="advanced-facilities" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <motion.div className="lg:col-span-5 space-y-6" variants={fadeLeft} initial="hidden" whileInView="visible" viewport={viewportOnce}>
            <span className="font-sans text-xs tracking-wider text-[#831238] font-bold">Scientific Spaces</span>
            <h2 className="font-serif text-[30px] font-extrabold italic text-[#831238] leading-tight">
              Advanced Physical Isolation Suites
            </h2>
            <div className="space-y-4 text-slate-600 font-sans text-sm leading-relaxed">
              <p>
                To support high-resolution microscopy and subatomic braiding matrices, ASRI operates three state-of-the-art physical facilities designed to completely neutralize terrestrial vibrations and electromagnetic interference.
              </p>
              <p>
                Our Cleanroom Suite maintains class ISO 4 environment standards, keeping particulate matters below 10 per cubic meter. The Sub-basalt Cryogenic Chamber is situated 15 meters underground, cast onto solid bedrock to isolate dilution refrigerators from planetary vibrations.
              </p>
              <p>
                The facility incorporates high-capacity liquid helium recovery recapture circuits and localized electromagnetic shielded copper Faraday matrices to guarantee pristine testing platforms.
              </p>
            </div>
          </motion.div>

          <motion.div className="lg:col-span-7" variants={fadeRight} initial="hidden" whileInView="visible" viewport={viewportOnce}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm">
                <span className="font-sans text-[10px] text-red-700 font-bold bg-red-50 px-2.5 py-0.5 rounded-md border border-red-100">Class ISO 4</span>
                <h4 className="font-serif italic font-bold text-slate-900 text-sm mt-3 mb-1">Lithography Cleanroom</h4>
                <p className="text-xs text-slate-700 font-sans font-medium leading-relaxed">A 5,000 sq ft facility with zero electromagnetic leakage, essential for atomic-scale transistor gate fabrication.</p>
              </div>
              <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm">
                <span className="font-sans text-[10px] text-red-700 font-bold bg-red-50 px-2.5 py-0.5 rounded-md border border-red-100">Underground Basalt</span>
                <h4 className="font-serif italic font-bold text-slate-900 text-sm mt-3 mb-1">Sub-Kelvin Cryogenic Chamber</h4>
                <p className="text-xs text-slate-700 font-sans font-medium leading-relaxed">Shielded chambers situating our Bluefors dilution refrigerators. Features pneumatic active damper columns.</p>
              </div>
              <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm">
                <span className="font-sans text-[10px] text-red-700 font-bold bg-red-50 px-2.5 py-0.5 rounded-md border border-red-100">Class 4 Bio-Safety</span>
                <h4 className="font-serif italic font-bold text-slate-900 text-sm mt-3 mb-1">Genomic Translation Center</h4>
                <p className="text-xs text-slate-700 font-sans font-medium leading-relaxed">Air-locked chambers for structural assembly of synthetic proteins and high-fidelity gene vectors.</p>
              </div>
              <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm">
                <span className="font-sans text-[10px] text-red-700 font-bold bg-red-50 px-2.5 py-0.5 rounded-md border border-red-100">640 Tensor Flops</span>
                <h4 className="font-serif italic font-bold text-slate-900 text-sm mt-3 mb-1">Cognitive Computing Cluster</h4>
                <p className="text-xs text-slate-700 font-sans font-medium leading-relaxed">Localized supercomputers running multi-spectral simulations, carbon-pore dynamics, and robotic flight controllers.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3: SCIENTIFIC EQUIPMENT GALLERY */}
      <section id="equipment-gallery" className="py-24 bg-[#EBEBE9] border-y border-slate-250 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="font-sans text-xs tracking-wider text-[#831238] font-bold">Instrumentation Registry</span>
            <h2 className="font-serif text-[30px] font-extrabold italic text-[#831238] tracking-tight">
              Core Scientific Equipment
            </h2>
            <p className="text-slate-600 font-sans text-base">
              ASRI provides researchers with unhindered operational hours on top-tier instrumentation platforms.
            </p>
          </div>

          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce}>
            {EQUIPMENTS.map((eq, i) => (
              <motion.div 
                key={i}
                variants={staggerItem}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm transition-all duration-300 flex flex-col justify-between group relative"
              >
                <div>
                  <div className="h-52 relative overflow-hidden">
                    <img src={eq.image} alt={eq.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute top-4 right-4 bg-green-500/10 border border-green-300 text-green-800 text-[10px] font-sans font-bold px-2.5 py-1 rounded-md uppercase backdrop-blur-sm">
                      {eq.status}
                    </div>
                  </div>
                  <div className="p-6 space-y-4">
                    <div>
                      <span className="text-xs font-sans text-[#831238] font-bold uppercase tracking-wide">{eq.type}</span>
                      <h4 className="font-serif italic font-bold text-slate-900 text-base mt-1">{eq.name}</h4>
                    </div>
                    <p className="text-xs text-slate-700 font-sans font-medium leading-relaxed">{eq.description}</p>
                  </div>
                </div>
                <div className="p-6 pt-0 border-t border-slate-50 mt-4">
                  <div className="text-[10px] font-sans text-slate-600 font-bold uppercase tracking-wider mb-2">Operational Specifications:</div>
                  <p className="text-[10px] text-slate-700 font-sans font-medium leading-relaxed bg-[#831238]/5 p-3 rounded-xl border border-[#831238]/10">{eq.specs}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 4: TECHNOLOGY TRANSFER OFFICE */}
      <section id="tech-transfer" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <motion.div className="lg:col-span-6 space-y-6" variants={fadeLeft} initial="hidden" whileInView="visible" viewport={viewportOnce}>
            <span className="font-sans text-xs tracking-wider text-[#831238] font-bold">Translational Machinery</span>
            <h2 className="font-serif text-[30px] font-extrabold italic text-[#831238] leading-tight">
              Our Technology Transfer Process
            </h2>
            <div className="space-y-4 text-slate-600 font-sans text-sm leading-relaxed">
              <p>
                Our Dedicated Technology Transfer Office (TTO) functions as the physical legal and operational interface between abstract research groups and industrial scaling. Once physical testing confirms a discovery is repeatable and novel, our TTO steps in to protect our IP assets.
              </p>
              <p>
                We handle domestic and international patent filings, provide seed grants to researchers wishing to commercialize discoveries, and structure licensing agreements with pharmaceutical, materials, and aerospace partners.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-4 pt-4 text-center">
              <div className="p-4 bg-[#9A1642] rounded-2xl shadow-sm flex flex-col justify-center">
                <div className="font-serif font-bold italic text-white text-xl">14</div>
                <div className="text-[10px] text-white/80 font-sans font-semibold mt-1 uppercase tracking-wide">Spin-offs</div>
              </div>
              <div className="p-4 bg-[#9A1642] rounded-2xl shadow-sm flex flex-col justify-center">
                <div className="font-serif font-bold italic text-white text-xl">42</div>
                <div className="text-[10px] text-white/80 font-sans font-semibold mt-1 uppercase tracking-wide">Licensings</div>
              </div>
              <div className="p-4 bg-[#9A1642] rounded-2xl shadow-sm flex flex-col justify-center">
                <div className="font-serif font-bold italic text-white text-xl">$22M+</div>
                <div className="text-[10px] text-white/80 font-sans font-semibold mt-1 uppercase tracking-wide">Endowments</div>
              </div>
            </div>
          </motion.div>

          <motion.div className="lg:col-span-6" variants={fadeRight} initial="hidden" whileInView="visible" viewport={viewportOnce}>
            <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-md space-y-6">
              <h4 className="font-serif italic font-bold text-slate-900 text-base">Translation Roadmap</h4>
              <div className="relative border-l border-slate-200 pl-6 space-y-8 text-xs">
                <div className="relative">
                  <div className="absolute -left-9 top-0.5 w-6 h-6 rounded-lg bg-[#831238] text-white flex items-center justify-center font-sans font-bold text-xs">1</div>
                  <h5 className="font-serif italic font-bold text-slate-900 text-xs">Experimental Validation</h5>
                  <p className="text-slate-500 font-sans mt-1">Scientific paper is peer-reviewed and physical repeatability is independently verified inside our core laboratory suites.</p>
                </div>
                <div className="relative">
                  <div className="absolute -left-9 top-0.5 w-6 h-6 rounded-lg bg-[#831238] text-white flex items-center justify-center font-sans font-bold text-xs">2</div>
                  <h5 className="font-serif italic font-bold text-slate-900 text-xs">Patent Filing</h5>
                  <p className="text-slate-500 font-sans mt-1">TTO drafting lawyers file international disclosures under PCT regulations, protecting the molecular or physical structures.</p>
                </div>
                <div className="relative">
                  <div className="absolute -left-9 top-0.5 w-6 h-6 rounded-lg bg-[#831238] text-white flex items-center justify-center font-sans font-bold text-xs">3</div>
                  <h5 className="font-serif italic font-bold text-slate-900 text-xs">Spin-Off or Licensing Selection</h5>
                  <p className="text-slate-500 font-sans mt-1">IP is licensed to existing industrial leaders or incubated as an autonomous spinoff startup inside our Incubation Centre.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 5: PATENTS REGISTRY */}
      <section id="patents-registry" className="py-24 bg-[#EBEBE9] border-t border-slate-250 px-6">
        <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
              <div className="space-y-4">
                <span className="font-sans text-xs tracking-wider text-[#831238] font-bold">Legal Assets</span>
                <h2 className="font-serif text-[30px] font-extrabold italic text-[#831238] tracking-tight">
                  Official Patents Registry
                </h2>
              </div>
            </div>

          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce}>
            {filteredPatents.map((pat, i) => (
              <motion.div 
                key={i}
                variants={staggerItem}
                className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="font-sans text-xs text-slate-500">{pat.number}</span>
                    <span className={`px-2.5 py-0.5 rounded-md text-[10px] font-sans font-bold uppercase ${
                      pat.status === 'Granted' ? 'bg-green-50 text-green-800 border border-green-200' : 'bg-amber-50 text-amber-800 border border-amber-200'
                    }`}>
                      {pat.status}
                    </span>
                  </div>
                  <h4 className="font-serif italic font-bold text-slate-900 text-sm leading-snug">{pat.title}</h4>
                  <p className="text-xs text-slate-700 font-sans font-medium leading-relaxed">{pat.description}</p>
                </div>

                <div className="pt-4 border-t border-slate-100 mt-6 text-[10px] font-sans text-slate-500">
                  <div>Inventors: {pat.inventors}</div>
                  <div className="mt-1">Filing Year: {pat.year}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 6: INCUBATION CENTRE */}
      <section id="incubation-centre" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="font-sans text-xs tracking-wider text-[#831238] font-bold">Vanguard Spinoffs</span>
          <h2 className="font-serif text-[30px] font-extrabold italic text-[#831238] tracking-tight">
            ASRI High-Tech Incubation Centre
          </h2>
          <p className="text-slate-600 font-sans text-base">
            We provide physical laboratory suites, administrative structures, and legal capital models to help our research scientists launch autonomous spinoff companies.
          </p>
        </div>

          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce}>
            {incubationStartups.map((startup, i) => (
              <motion.div 
                key={i}
                variants={staggerItem}
                className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm transition-all duration-300 relative overflow-hidden group"
              >
              <div className="relative z-10 space-y-6">
                <div className="flex justify-between items-start">
                  <div className="p-3 bg-[#831238]/5 text-[#831238] rounded-xl border border-[#831238]/10">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <span className="px-2.5 py-0.5 bg-slate-150 text-slate-700 rounded-md font-sans text-[10px] font-bold uppercase border border-slate-200">
                    {startup.status}
                  </span>
                </div>

                <div>
                  <h4 className="font-serif italic font-bold text-slate-900 text-base group-hover:text-[#831238] transition-colors mb-1">{startup.name}</h4>
                  <span className="text-[10px] font-sans text-slate-500 uppercase tracking-wide">Core Focus: {startup.focus}</span>
                </div>

                <p className="text-xs text-slate-700 font-sans font-medium leading-relaxed">
                  {startup.desc}
                </p>

                <div className="pt-4 border-t border-slate-100 flex justify-between items-center text-[10px] font-sans">
                  <span className="text-slate-500 uppercase tracking-wide">Licensed Tech: {startup.tech}</span>
                </div>
              </div>
              </motion.div>
            ))}
          </motion.div>
      </section>



    </div>
  );
}

