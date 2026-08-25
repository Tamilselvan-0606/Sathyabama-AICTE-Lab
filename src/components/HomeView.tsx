import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Atom,
  Dna,
  Scissors,
  Cpu,
  Activity,
  Globe,
  ArrowRight,
  MapPin,
  Beaker,
  Layers,
  Users,
  Award,
  ChevronDown,
  Sparkles
} from 'lucide-react';
import heroImage from '../assets/Images/Home_image1.jpg';
import collabImg1 from '../assets/Images/Collaborations_and_Outreach_image1.jpg';
import collabImg2 from '../assets/Images/Collaborations_and_Outreach_image2.jpg';
import collabImg3 from '../assets/Images/Collaborations_and_Outreach_image3.jpg';
import collabImg4 from '../assets/Images/Collaborations_and_Outreach_image4.jpg';
import collabImg5 from '../assets/Images/Collaborations_and_Outreach_image5.jpg';

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
      stat: '21 Active Projects'
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

          {/* Hero Left Column (5/12) */}
          <div className="lg:col-span-5 flex flex-col justify-center p-8 md:p-16 lg:py-20 lg:pl-24 lg:pr-6 bg-white relative z-20">
            <div className="absolute top-10 left-8 md:left-16 lg:left-24 text-[10px] tracking-wider text-gray-400 mb-4 font-sans font-semibold">
              AICTE IDEA LAB // Sathyabama Institute
            </div>

            <div className="mt-8 mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 border border-slate-200 text-slate-700 text-[10px] font-sans tracking-wide rounded-lg">
                <Sparkles className="w-3.5 h-3.5 text-amber-500 animate-pulse" />
                <span>Transforming Ideas into Reality</span>
              </div>
            </div>

            <h1 className="text-[30px] font-extrabold leading-tight text-[#831238] mb-8 tracking-tight">
              Welcome to the
              <span className="text-[#831238]"> AICTE IDEA LAB
              </span>
            </h1>

            <p className="text-sm md:text-base text-slate-600 max-w-xl leading-relaxed mb-10 font-sans text-justify">
              Step into a world of innovation where your creativity knows no bounds. Equipped with state-of-the-art machinery including CNC Milling, Router Machines, CO2 Laser Cutters, and advanced IoT equipment, our IDEA LAB is a dedicated space for students to explore, experiment, and build. Whether you are crafting physical prototypes or building smart IoT projects to shape the future, we provide the tools and mentorship to turn your ideas into impactful real-world solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => onNavigate('research')}
                className="px-8 py-4 bg-[#831238] hover:bg-[#620a27] text-white text-sm font-sans font-medium shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all rounded-lg flex items-center justify-center gap-2 cursor-pointer"
              >
                Explore Our Facilities <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfwb7b8WzLR8hh3suyVD9DWKouidNcnxRBZ9yJ_9BHVt7m0lA/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border-2 border-[#831238] text-[#831238] text-sm font-sans font-medium hover:bg-[#831238]/5 hover:border-[#620a27] transition-colors rounded-lg cursor-pointer text-center"
              >
                Start a Project
              </a>
            </div>
          </div>

          {/* Image / Data Visual Column (7/12) */}
          <div className="lg:col-span-7 flex items-center justify-center p-8 md:p-16 lg:py-20 lg:pr-24 lg:pl-6 bg-white relative z-10">
            <div className="relative w-full overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.12)] border border-slate-200">
              <img
                src={heroImage}
                alt="AICTE IDEA LAB"
                className="w-full h-auto object-contain block"
              />
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 2: EMPOWERING STUDENT INNOVATORS */}
      <section id="about-section" className="py-24 px-8 md:px-16 lg:px-24 w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-7 space-y-8">
          <h2 className="font-serif text-[30px] font-extrabold italic text-[#831238] leading-[1.1] tracking-tight">
            Empowering Student Innovators
          </h2>
          <div className="space-y-6 text-slate-600 font-sans leading-relaxed text-base">
            <p className="text-sm md:text-base text-slate-600 leading-relaxed text-justify">
              We believe in learning by doing. The AICTE IDEA Lab encourages students from all engineering disciplines to step away from the textbooks and get their hands dirty. Whether you are interested in additive manufacturing, robotics, embedded systems, or designing IoT projects that can shape the world, this is your playground for experiential learning.
            </p>
          </div>
          <div>
            <button
              onClick={() => onNavigate('research')}
              className="px-8 py-4 bg-[#831238] hover:bg-[#620a27] text-white text-sm font-sans font-medium shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all rounded-lg flex items-center justify-center gap-2 cursor-pointer"
            >
              View Student Projects <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
        <div className="lg:col-span-5 relative">
          <div className="relative rounded-xl overflow-hidden border border-slate-200 shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800"
              alt="AICTE IDEA Lab - Student Innovation"
              className="w-full h-[500px] object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* SECTION 3: BRING YOUR PROJECTS TO LIFE (dark bg) */}
      <section id="excellence-section" className="py-24 bg-[#831238] border-y border-red-950 px-8 md:px-16 lg:px-24 w-full">
        <div className="w-full">
          <div className="max-w-3xl mb-16 space-y-4">
            <h2 className="font-serif text-[30px] font-extrabold italic text-white tracking-tight">
              Bring Your Projects to Life
            </h2>
            <p className="text-sm md:text-base text-white/80 leading-relaxed font-sans text-justify">
              Our lab is equipped with cutting-edge industrial-grade machinery to handle both subtractive and additive manufacturing. From intricate designs to robust physical prototypes, students have full access to:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {/* CNC Milling & Router Machines */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-2 hover:border-amber-300/40 group flex flex-col h-full transition-all duration-300 hover:-translate-y-1 p-6">
              <div className="p-3 rounded-full bg-white/5 border border-white/10 text-amber-300 w-fit mb-5 group-hover:bg-amber-300 group-hover:text-[#831238] group-hover:border-amber-300 transition-all duration-300">
                <Scissors className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-base font-bold italic text-white leading-snug mb-3 group-hover:text-amber-300 transition-colors">
                CNC Milling &amp; Router Machines
              </h3>
              <p className="text-sm text-white/70 font-sans leading-relaxed">
                For high-precision automated carving and component manufacturing.
              </p>
            </div>

            {/* CO2 Laser Cutting Machines */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-2 hover:border-amber-300/40 group flex flex-col h-full transition-all duration-300 hover:-translate-y-1 p-6">
              <div className="p-3 rounded-full bg-white/5 border border-white/10 text-amber-300 w-fit mb-5 group-hover:bg-amber-300 group-hover:text-[#831238] group-hover:border-amber-300 transition-all duration-300">
                <Beaker className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-base font-bold italic text-white leading-snug mb-3 group-hover:text-amber-300 transition-colors">
                CO2 Laser Cutting Machines
              </h3>
              <p className="text-sm text-white/70 font-sans leading-relaxed">
                For precise subtractive manufacturing across diverse non-metallic substrates.
              </p>
            </div>

            {/* Advanced 3D Printers */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-2 hover:border-amber-300/40 group flex flex-col h-full transition-all duration-300 hover:-translate-y-1 p-6">
              <div className="p-3 rounded-full bg-white/5 border border-white/10 text-amber-300 w-fit mb-5 group-hover:bg-amber-300 group-hover:text-[#831238] group-hover:border-amber-300 transition-all duration-300">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-base font-bold italic text-white leading-snug mb-3 group-hover:text-amber-300 transition-colors">
                Advanced 3D Printers
              </h3>
              <p className="text-sm text-white/70 font-sans leading-relaxed">
                Including Stratasys F370 and MakerBot systems for rapid prototyping.
              </p>
            </div>

            {/* IoT & Electronics Equipment */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-2 hover:border-amber-300/40 group flex flex-col h-full transition-all duration-300 hover:-translate-y-1 p-6">
              <div className="p-3 rounded-full bg-white/5 border border-white/10 text-amber-300 w-fit mb-5 group-hover:bg-amber-300 group-hover:text-[#831238] group-hover:border-amber-300 transition-all duration-300">
                <Activity className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-base font-bold italic text-white leading-snug mb-3 group-hover:text-amber-300 transition-colors">
                IoT &amp; Electronics Equipment
              </h3>
              <p className="text-sm text-white/70 font-sans leading-relaxed">
                Everything you need to build smart, connected devices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: FROM IDEATION TO INCUBATION */}
      <section id="labs-section" className="py-24 px-8 md:px-16 lg:px-24 w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-7 space-y-8">
          <h2 className="font-serif text-[30px] font-extrabold italic text-[#831238] leading-[1.1] tracking-tight">
            From Ideation to Incubation
          </h2>
          <p className="text-sm md:text-base text-slate-600 leading-relaxed font-sans text-justify">
            Have an idea for a smart agriculture system, an automated healthcare monitor, or a next-generation robotic arm? Bring it here! We actively encourage students to utilize our machineries and IoT equipment to make their own projects. Build solutions that address real-world societal and industrial challenges, and take your first step toward entrepreneurship and technology commercialization.
          </p>
          <div>
            <button
              onClick={() => onNavigate('research')}
              className="px-8 py-4 bg-[#831238] hover:bg-[#620a27] text-white text-sm font-sans font-medium shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all rounded-lg flex items-center justify-center gap-2 cursor-pointer"
            >
              Join the Innovation Hub <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
        <div className="lg:col-span-5 relative">
          <div className="relative rounded-xl overflow-hidden border border-slate-200 shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800"
              alt="Student Innovation and Prototyping"
              className="w-full h-[500px] object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>
      </section>





      {/* SECTION 7: ALWAYS OPEN FOR INNOVATION */}
      <section id="collab-section" className="py-24 bg-[#F4F4F2] border-t border-slate-200 px-8 md:px-16 lg:px-24 w-full">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7 space-y-8">
            <h2 className="font-serif text-[30px] font-extrabold italic text-[#831238] leading-[1.1] tracking-tight">
              Always Open for Innovation
            </h2>
            <p className="text-sm md:text-base text-slate-600 leading-relaxed font-sans text-justify">
              Innovation doesn't run on a strict schedule. The AICTE IDEA Lab is open for students and faculty every day from 9:00 AM to 11:00 PM. During special events, hackathons, and intensive project development phases, the lab remains accessible 24/7 so you never have to stop building.
            </p>
            <div>
              <a
                href="https://forms.gle/s3cdYrmkUzViWVBp6"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-[#831238] hover:bg-[#620a27] text-white text-sm font-sans font-medium shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all rounded-lg inline-flex items-center justify-center gap-2 cursor-pointer"
              >
                Book Your Equipments <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-md bg-gradient-to-br from-[#831238] via-[#700d2e] to-[#550821] rounded-2xl p-6 sm:p-7 shadow-xl border border-white/15 backdrop-blur-md overflow-hidden relative">
              {/* Subtle decorative glow */}
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-amber-400/10 rounded-full blur-2xl pointer-events-none" />

              {/* Header */}
              <div className="flex items-center justify-between mb-5 pb-3 border-b border-white/10 relative z-10">
                <span className="font-sans text-[10px] tracking-wider font-bold uppercase text-amber-300 bg-white/10 border border-white/10 px-2.5 py-1 rounded-md">
                  Lab Schedule
                </span>
                <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span className="text-[10px] font-sans font-medium text-emerald-300">Live</span>
                </div>
              </div>

              <div className="space-y-3.5 relative z-10">
                {/* Daily Hours */}
                <div className="flex items-center gap-3.5 p-3 rounded-xl bg-white/[0.04] border border-white/5 hover:bg-white/[0.08] transition-colors">
                  <div className="p-2.5 rounded-lg bg-white/10 text-amber-300 shrink-0 border border-white/10">
                    <Globe className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-sans text-[11px] text-white/50 uppercase tracking-wider font-medium">Daily Hours</p>
                    <p className="font-sans font-bold text-white text-sm sm:text-base tracking-tight">9:00 AM – 11:00 PM</p>
                  </div>
                </div>

                {/* Hackathons */}
                <div className="flex items-center gap-3.5 p-3 rounded-xl bg-white/[0.04] border border-white/5 hover:bg-white/[0.08] transition-colors">
                  <div className="p-2.5 rounded-lg bg-white/10 text-amber-300 shrink-0 border border-white/10">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0 flex items-center justify-between gap-2">
                    <div>
                      <p className="font-sans text-[11px] text-white/50 uppercase tracking-wider font-medium">Hackathons &amp; Events</p>
                      <p className="font-sans font-bold text-white text-sm sm:text-base tracking-tight">24 / 7 Access</p>
                    </div>
                    <span className="text-[9px] font-sans font-bold uppercase tracking-wider bg-amber-400/20 border border-amber-400/30 text-amber-300 px-2 py-0.5 rounded-full shrink-0">
                      Always On
                    </span>
                  </div>
                </div>

                {/* Open To */}
                <div className="flex items-center gap-3.5 p-3 rounded-xl bg-white/[0.04] border border-white/5 hover:bg-white/[0.08] transition-colors">
                  <div className="p-2.5 rounded-lg bg-white/10 text-amber-300 shrink-0 border border-white/10">
                    <Users className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-sans text-[11px] text-white/50 uppercase tracking-wider font-medium">Open To</p>
                    <p className="font-sans font-bold text-white text-sm sm:text-base tracking-tight">All Students &amp; Faculty</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: COLLABORATIONS AND OUTREACH */}
      <section id="tbi-initiatives-section" className="py-20 bg-white border-t border-slate-200 px-8 md:px-16 lg:px-24 w-full overflow-hidden">
        <div className="w-full">
          {/* Header */}
          <div className="mb-10">
            <h2 className="font-serif text-[30px] font-extrabold italic text-[#831238] leading-[1.1] tracking-tight">
              Collaborations and Outreach
            </h2>
          </div>

          {/* Auto-scroll Marquee Container */}
          <div className="relative w-full overflow-hidden">
            {/* Left & Right subtle gradient fade for smooth edge appearance */}
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-white to-transparent z-10" />
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white to-transparent z-10" />

            {/* Marquee Track (Repeated for seamless continuous infinite loop) */}
            <div className="animate-marquee flex gap-6 items-center py-2">
              {[
                { img: collabImg1, alt: 'Startup Voyage' },
                { img: collabImg2, alt: 'Startup Anchor' },
                { img: collabImg3, alt: 'Proto Cafe' },
                { img: collabImg4, alt: 'Mentor Cafe' },
                { img: collabImg5, alt: 'N-E-S-T Sathyabama TBI' },
                { img: collabImg1, alt: 'Startup Voyage' },
                { img: collabImg2, alt: 'Startup Anchor' },
                { img: collabImg3, alt: 'Proto Cafe' },
                { img: collabImg4, alt: 'Mentor Cafe' },
                { img: collabImg5, alt: 'N-E-S-T Sathyabama TBI' },
                { img: collabImg1, alt: 'Startup Voyage' },
                { img: collabImg2, alt: 'Startup Anchor' },
                { img: collabImg3, alt: 'Proto Cafe' },
                { img: collabImg4, alt: 'Mentor Cafe' },
                { img: collabImg5, alt: 'N-E-S-T Sathyabama TBI' },
                { img: collabImg1, alt: 'Startup Voyage' },
                { img: collabImg2, alt: 'Startup Anchor' },
                { img: collabImg3, alt: 'Proto Cafe' },
                { img: collabImg4, alt: 'Mentor Cafe' },
                { img: collabImg5, alt: 'N-E-S-T Sathyabama TBI' },
              ].map((card, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-[6px] border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 w-[240px] h-[115px] p-4 flex items-center justify-center shrink-0 group cursor-pointer select-none"
                >
                  <img
                    src={card.img}
                    alt={card.alt}
                    className="max-h-full max-w-full object-contain block group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>



    </div>
  );
}
