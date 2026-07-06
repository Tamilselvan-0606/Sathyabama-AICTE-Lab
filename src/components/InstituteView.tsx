import React from 'react';
import { motion } from 'motion/react';
import { fadeUp, fadeLeft, fadeRight, staggerContainer, staggerItem, viewportOnce } from '../animations';
import { 
  Building2, 
  Target, 
  History, 
  ShieldCheck, 
  GitMerge, 
  Compass, 
  Award, 
  Sparkles,
  Zap,
  Layers,
  GraduationCap
} from 'lucide-react';

interface InstituteViewProps {
  onNavigate: (tab: any) => void;
}

export default function InstituteView({ onNavigate }: InstituteViewProps) {
  const milestones = [
    { year: '2001', title: 'Founding Charter', desc: 'ASRI was formed by a joint academic council decree to establish an autonomous high-energy physics hub outside traditional bureaucratic university limits.' },
    { year: '2008', title: 'Inauguration of Dilution Labs', desc: 'Installed the first sub-Kelvin helium dilution refrigerator, launching our flagship Quantum Dynamics division.' },
    { year: '2015', title: 'Somatic Gene Cleavage Success', desc: 'ASRI molecular scientists succeeded in designing targeted CRISPR-based therapeutic vectors.' },
    { year: '2021', title: 'Neuromorphic Supercomputing Node', desc: 'The NeuroSync custom analog synaptic processor was designed, fabricated, and validated in our robotics laboratory.' },
    { year: '2026', title: 'Majorana Coherence Confirmation', desc: 'Confirmed topological Majorana fermion condensation, clearing the path for defect-free quantum computers.' }
  ];

  const leaders = [
    {
      name: 'Dr. Evelyn Vance',
      role: 'Director, ASRI',
      discipline: 'Topological Quantum Physics',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400',
      quote: 'Science is not an incremental optimization of the familiar; it is a systematic leap into the absolute dark.'
    },
    {
      name: 'Dr. Marcus Thorne',
      role: 'Deputy Director & Principal Investigator',
      discipline: 'Epigenetic & Genomic Chemistry',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400',
      quote: 'We do not edit genes to mimic nature; we edit them to cure mutations that nature left behind.'
    },
    {
      name: 'Dr. Helena Rostova',
      role: 'Dean of Academic Operations & Research',
      discipline: 'Neuromorphic Computing & AI',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400',
      quote: 'Swarms are not just multiple robots; they are a distributed, resilient brain navigating complex space.'
    }
  ];

  return (
    <div id="institute-view" className="bg-[#F4F4F2] text-slate-800">
      
      {/* SECTION 1: INSTITUTE OVERVIEW */}
      <section id="institute-overview" className="py-24 bg-white border-b border-slate-200">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div className="space-y-6" variants={fadeLeft} initial="hidden" animate="visible">
              <span className="font-sans text-xs tracking-wide text-[#831238] font-bold bg-[#831238]/10 px-3.5 py-1.5 rounded-lg inline-block">Scientific Sanctuary</span>
              <h1 className="font-serif text-[30px] font-extrabold italic text-slate-900 tracking-tight leading-tight">
                Our Heritage & Scientific Mandate
              </h1>
              <div className="space-y-6 text-slate-700 font-sans text-base font-light leading-relaxed">
                <p>
                  The Aetheris Scientific Research Institute was engineered with a clear, singular vision: to liberate high-stakes scientific query from short-term financial cycles and bureaucratic friction. Inspired by the pure research methodologies of NASA, CERN, and the Indian Space Research Organisation (ISRO), ASRI maintains a fully autonomous framework.
                </p>
                <p>
                  Our researchers operate in custom environments tailored for subatomic exploration, cellular restructuring, and molecular chemistry. With over 250 resident postdocs, senior investigators, and visiting scholars, the institute functions as an integrated intellectual powerhouse, synthesizing answers to humanity's most complex physics and biological questions.
                </p>
              </div>
            </motion.div>
            <motion.div className="grid grid-cols-2 gap-6" variants={staggerContainer} initial="hidden" animate="visible">
              <motion.div variants={staggerItem} className="p-5 rounded-2xl bg-[#9A1642] shadow-sm flex flex-col justify-center">
                <div className="font-serif text-2xl font-bold italic text-white">2001</div>
                <div className="font-sans text-[11px] text-white/80 font-semibold tracking-wide mt-1">Year of Inception</div>
              </motion.div>
              <motion.div variants={staggerItem} className="p-5 rounded-2xl bg-[#9A1642] shadow-sm flex flex-col justify-center">
                <div className="font-serif text-2xl font-bold italic text-white">4</div>
                <div className="font-sans text-[11px] text-white/80 font-semibold tracking-wide mt-1">Core Divisions</div>
              </motion.div>
              <motion.div variants={staggerItem} className="p-5 rounded-2xl bg-[#9A1642] shadow-sm flex flex-col justify-center">
                <div className="font-serif text-2xl font-bold italic text-white">250+</div>
                <div className="font-sans text-[11px] text-white/80 font-semibold tracking-wide mt-1">Doctoral Fellows</div>
              </motion.div>
              <motion.div variants={staggerItem} className="p-5 rounded-2xl bg-[#9A1642] shadow-sm flex flex-col justify-center">
                <div className="font-serif text-2xl font-bold italic text-white">98%</div>
                <div className="font-sans text-[11px] text-white/80 font-semibold tracking-wide mt-1">Retention Rate</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2: VISION & MISSION */}
      <section id="vision-mission" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="font-sans text-xs tracking-wider text-[#831238] font-bold">The Horizon</span>
          <h2 className="font-serif text-[30px] font-extrabold italic text-[#831238] tracking-tight">
            Vision, Mission & Core Axioms
          </h2>
        </div>

        <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce}>
          <motion.div variants={staggerItem} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 relative group overflow-hidden">

            <div className="p-3 bg-red-50 text-red-700 rounded-lg inline-block mb-6">
              <Compass className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg font-bold italic text-slate-900 mb-4">Our Vision</h3>
            <p className="text-slate-700 font-sans font-medium text-sm leading-relaxed">
              To remain a peerless global center of pure intellectual discovery, mapping physical and bio-molecular pathways with such rigorous truth that the resulting technologies fundamentally secure the health, sustainability, and computational security of human posterity.
            </p>
          </motion.div>

          <motion.div variants={staggerItem} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 relative group overflow-hidden">

            <div className="p-3 bg-red-50 text-red-700 rounded-lg inline-block mb-6">
              <Target className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg font-bold italic text-slate-900 mb-4">Our Mission</h3>
            <p className="text-slate-700 font-sans font-medium text-sm leading-relaxed">
              To aggressively bypass academic boundaries, funding top-tier, first-principles research groups. We provide the equipment, structural cleanrooms, and global collaboration networks required to resolve subatomic quantum coherence, clinical gene therapies, and planetary carbon vacuums.
            </p>
          </motion.div>

          <motion.div variants={staggerItem} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 relative group overflow-hidden">

            <div className="p-3 bg-red-50 text-red-700 rounded-lg inline-block mb-6">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg font-bold italic text-slate-900 mb-4">Core Axioms</h3>
            <p className="text-slate-700 font-sans font-medium text-sm leading-relaxed">
              Absolute Intellectual Autonomy. Uncompromising Peer Review. Multi-disciplinary Co-simulation. First-principles Validation. We measure our achievement solely by the elegance of our theoretical modeling and the long-term repeatability of our physical findings.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* SECTION 3: HISTORY & MILESTONES */}
      <section id="milestones-history" className="py-24 bg-white border-y border-slate-200 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="font-sans text-xs tracking-wider text-[#831238] font-bold">Historical Vector</span>
            <h2 className="font-serif text-[30px] font-extrabold italic text-[#831238] tracking-tight">
              History & Important Milestones
            </h2>
          </div>

          <motion.div className="grid grid-cols-1 lg:grid-cols-5 gap-8" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce}>
            {milestones.map((ms, idx) => (
              <motion.div 
                key={idx}
                variants={staggerItem}
                className="bg-slate-50 rounded-2xl p-6 border border-slate-200 shadow-sm hover:border-[#831238] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="font-serif text-3xl italic font-extrabold text-[#831238] mb-3">{ms.year}</div>
                  <h4 className="font-serif italic font-bold text-slate-900 mb-2">{ms.title}</h4>
                  <p className="text-xs text-slate-700 font-sans font-medium leading-relaxed">{ms.desc}</p>
                </div>
                <div className="h-[3px] bg-slate-200 rounded-full mt-6 overflow-hidden">
                  <div className="bg-[#831238] h-full" style={{ width: `${(idx + 1) * 20}%` }} />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 4: LEADERSHIP */}
      <section id="leadership-section" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="font-sans text-xs tracking-wider text-[#831238] font-bold">Administrative and Scientific Pillars</span>
          <h2 className="font-serif text-[30px] font-extrabold italic text-[#831238] tracking-tight">
            Our Governing Leadership
          </h2>
          <p className="text-slate-600 font-sans text-base">
            ASRI’s administrative councils are directed by top-tier active researchers, ensuring funding models directly match physical laboratory operational needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {leaders.map((leader, i) => (
            <div 
              key={i}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group relative"
            >

              <div>
                <div className="h-72 overflow-hidden relative">
                  <img src={leader.image} alt={leader.name} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <span className="font-sans text-[10px] bg-red-900/90 px-2.5 py-1 rounded-md font-semibold tracking-wider">{leader.discipline}</span>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="font-serif text-lg font-bold italic text-slate-900">{leader.name}</h3>
                  <p className="font-sans text-xs text-[#831238] font-semibold mt-1 mb-4">{leader.role}</p>
                  <p className="text-slate-700 text-sm font-sans font-medium italic leading-relaxed">
                    "{leader.quote}"
                  </p>
                </div>
              </div>
              <div className="p-8 pt-0 mt-4">
                <button 
                  onClick={() => onNavigate('scientists')}
                  className="w-full py-3 bg-[#831238] hover:bg-[#6a0f2d] text-white font-sans text-xs font-semibold rounded-lg transition-all cursor-pointer"
                >
                  View Scientific Profile
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 5: ORGANIZATIONAL STRUCTURE */}
      <section id="organizational-structure" className="py-24 bg-[#831238] text-white px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/15 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_50%)]" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-4 space-y-6">
              <span className="font-sans text-xs tracking-wide text-amber-300 font-bold">Structural Blueprint</span>
              <h2 className="font-serif text-[30px] font-extrabold italic text-white tracking-tight leading-tight">
                Our Organizational Architecture
              </h2>
              <p className="text-white/85 font-sans text-sm leading-relaxed">
                ASRI operates on a flat, non-hierarchical research paradigm. Administrative tasks are managed via streamlined nodes to maximize physical laboratory hours for active scientists.
              </p>
              <div className="space-y-4 font-sans text-sm">
                <div className="flex items-center gap-2 text-amber-100">
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-400 shrink-0" />
                  <span>Governing Executive Council (GEC)</span>
                </div>
                <div className="flex items-center gap-2 text-amber-100">
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-400 shrink-0" />
                  <span>Independent Advisory Board (IAB)</span>
                </div>
                <div className="flex items-center gap-2 text-amber-100">
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-400 shrink-0" />
                  <span>Technology Transfer & Patent Committee</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-slate-950/60 border border-white/10 backdrop-blur-md">
                  <h4 className="font-serif italic font-bold mb-2 text-base text-amber-300">I. Academic & Postdoc Council</h4>
                  <p className="text-white/80 text-xs font-sans leading-relaxed">
                    Approves incoming research scholars, awards competitive doctoral fellowships, and manages exchange program pipelines with CERN and MIT.
                  </p>
                </div>
                <div className="p-6 rounded-2xl bg-slate-950/60 border border-white/10 backdrop-blur-md">
                  <h4 className="font-serif italic font-bold mb-2 text-base text-amber-300">II. Core Facilities Management</h4>
                  <p className="text-white/80 text-xs font-sans leading-relaxed">
                    Maintains cryogenic platforms, quantum signal lines, lithography facilities, and ensures uninterrupted operation of liquid-helium systems.
                  </p>
                </div>
                <div className="p-6 rounded-2xl bg-slate-950/60 border border-white/10 backdrop-blur-md">
                  <h4 className="font-serif italic font-bold mb-2 text-base text-amber-300">III. Ethics & Biosecurity Advisory</h4>
                  <p className="text-white/80 text-xs font-sans leading-relaxed">
                    Guarantees absolute compliance with international treaties regarding somatic gene engineering, clinical-grade CRISPR vector delivery, and physical biosafety.
                  </p>
                </div>
                <div className="p-6 rounded-2xl bg-slate-950/60 border border-white/10 backdrop-blur-md">
                  <h4 className="font-serif italic font-bold mb-2 text-base text-amber-300">IV. Grants & Venture Endowments</h4>
                  <p className="text-white/80 text-xs font-sans leading-relaxed">
                    Monitors licensing contracts, maintains donor records, and guarantees capital allocations match structural laboratory plans directly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: CAMPUS INFRASTRUCTURE */}
      <section id="campus-infrastructure" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <span className="font-sans text-xs tracking-wider text-[#831238] font-bold">Physical Base</span>
            <h2 className="font-serif text-[30px] font-extrabold italic text-[#831238] leading-tight">
              A Zero-Vibration, Electromagnetic Isolation Campus
            </h2>
            <div className="space-y-4 text-slate-600 font-sans text-sm leading-relaxed">
              <p>
                Designed in collaboration with world-class structural engineers, the ASRI main campus comprises 45 acres of dedicated scientific infrastructure. To preserve sub-atomic measurements, our Quantum laboratories are situated in specialized chambers, cast into solid subterranean basalt formations.
              </p>
              <p>
                These chambers are isolated from urban vibrations via air-cushioned hydraulic damper pillars and shielded inside triple-walled copper Faraday cages, restricting ambient electromagnetic field interference to sub-microVolt levels.
              </p>
              <p>
                The facility incorporates high-throughput nitrogen and helium capture liquefaction systems, a localized green energy solar-microgrid, and automated environmental monitoring systems that maintain pristine Cleanroom atmospheres (ISO 4).
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-6 bg-[#9A1642] rounded-2xl shadow-sm">
                <div className="font-serif text-2xl font-bold italic text-white">45 Acres</div>
                <div className="text-xs text-white/80 font-sans font-medium tracking-wide mt-1">Campus Footprint</div>
              </div>
              <div className="p-6 bg-[#9A1642] rounded-2xl shadow-sm">
                <div className="font-serif text-2xl font-bold italic text-white">ISO 4</div>
                <div className="text-xs text-white/80 font-sans font-medium tracking-wide mt-1">Cleanroom Atmosphere</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-md relative h-[450px]">
              <img src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=800" alt="ASRI Campus Aerial View" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white space-y-1">
                <span className="font-sans text-xs text-red-400 font-bold tracking-wider">Aerial Architecture</span>
                <h4 className="font-serif text-base font-bold italic">ASRI Main Research Complex</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: ACHIEVEMENTS */}
      <section id="achievements-section" className="py-24 bg-[#EBEBE9] border-t border-slate-250 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            <div className="lg:col-span-5 space-y-6">
              <span className="font-sans text-xs tracking-wider text-[#831238] font-bold">Global Honors & Impact</span>
              <h2 className="font-serif text-[34px] font-extrabold italic text-slate-900 tracking-tight leading-tight">
                Honors, Laurels & <span className="text-[#831238]">Achievements</span>
              </h2>
              <div className="space-y-4 text-slate-700 font-sans text-sm leading-relaxed">
                <p>
                  ASRI's commitment to first-principles discovery has yielded unprecedented recognition within the global scientific community. Our resident scholars and alumni consistently redefine the boundaries of theoretical physics and applied biotechnology.
                </p>
                <p>
                  From mapping the topological states of Majorana fermions to engineering localized CRISPR vectors that have eradicated hereditary mutations in clinical trials, our publications serve as foundational citations for modern science. We do not chase accolades; they are the natural byproduct of uncompromising, fearless inquiry.
                </p>
              </div>
              <div className="pt-4 flex items-center gap-4">
                <div className="h-px bg-slate-300 flex-grow" />
                <div className="text-xs font-sans font-bold text-slate-400 uppercase tracking-widest">Since 2001</div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                <div className="bg-white p-6 lg:p-8 rounded-2xl border border-slate-200 shadow-sm group relative overflow-hidden flex items-start gap-4">
                  <div className="p-3 bg-red-50 text-[#831238] rounded-xl shrink-0">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-serif text-3xl italic font-bold text-slate-900 leading-none mb-1.5">12</div>
                    <div className="font-sans text-[10px] text-slate-500 font-bold tracking-wider uppercase">Nobel & Dirac Medalists</div>
                    <p className="text-xs text-slate-500 mt-2 font-sans font-medium leading-relaxed">Awarded for breakthrough theories in quantum gravity.</p>
                  </div>
                </div>

                <div className="bg-white p-6 lg:p-8 rounded-2xl border border-slate-200 shadow-sm group relative overflow-hidden flex items-start gap-4">
                  <div className="p-3 bg-red-50 text-[#831238] rounded-xl shrink-0">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-serif text-3xl italic font-bold text-slate-900 leading-none mb-1.5">80+</div>
                    <div className="font-sans text-[10px] text-slate-500 font-bold tracking-wider uppercase">International Patents</div>
                    <p className="text-xs text-slate-500 mt-2 font-sans font-medium leading-relaxed">Held across bio-engineering and neuromorphic compute.</p>
                  </div>
                </div>

                <div className="bg-white p-6 lg:p-8 rounded-2xl border border-slate-200 shadow-sm group relative overflow-hidden flex items-start gap-4">
                  <div className="p-3 bg-red-50 text-[#831238] rounded-xl shrink-0">
                    <Zap className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-serif text-3xl italic font-bold text-slate-900 leading-none mb-1.5">4,200+</div>
                    <div className="font-sans text-[10px] text-slate-500 font-bold tracking-wider uppercase">Citations in 2025</div>
                    <p className="text-xs text-slate-500 mt-2 font-sans font-medium leading-relaxed">In top-tier peer-reviewed academic journals.</p>
                  </div>
                </div>

                <div className="bg-white p-6 lg:p-8 rounded-2xl border border-slate-200 shadow-sm group relative overflow-hidden flex items-start gap-4">
                  <div className="p-3 bg-red-50 text-[#831238] rounded-xl shrink-0">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-serif text-3xl italic font-bold text-slate-900 leading-none mb-1.5">320+</div>
                    <div className="font-sans text-[10px] text-slate-500 font-bold tracking-wider uppercase">Doctoral Alumni</div>
                    <p className="text-xs text-slate-500 mt-2 font-sans font-medium leading-relaxed">Leading research facilities globally.</p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
