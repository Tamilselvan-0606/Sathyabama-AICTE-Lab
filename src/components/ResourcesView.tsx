import React, { useState } from 'react';
import { motion } from 'motion/react';
import { fadeLeft, fadeRight, staggerContainer, staggerItem, viewportOnce } from '../animations';
import { 
  Download, 
  BookOpen, 
  Calendar, 
  MapPin, 
  FileText, 
  ArrowRight, 
  Search, 
  Briefcase, 
  Image as ImageIcon,
  CheckCircle,
  HelpCircle,
  X
} from 'lucide-react';
import { PUBLICATIONS, NEWS_EVENTS } from '../data';

interface ResourcesViewProps {
  onNavigate: (tab: any) => void;
}

export default function ResourcesView({ onNavigate }: ResourcesViewProps) {
  const [activeTab, setActiveTab] = useState<'all' | 'papers' | 'news' | 'careers'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showApplyModal, setShowApplyModal] = useState(false);
  const [applyRole, setApplyRole] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showAllGallery, setShowAllGallery] = useState(false);

  const careers = [
    {
      title: 'Senior Postdoctoral Fellowship (Topological Physics)',
      department: 'Quantum Dynamics & Subatomic Physics (QDSP)',
      term: '2 Years (Renewable)',
      stipend: '$75,000 / annum + housing allowance',
      desc: 'Seeking an ambitious researcher to operate Bluefors LD400 dilution refrigerators and design RF signal transport arrays for Bi-Sb topological superconductor junctions.',
      requirements: ['Ph.D. in Solid State or Quantum Physics', 'Minimum 2 publications in high-impact journals', 'Experience with low-noise microwave electronics']
    },
    {
      title: 'Principal Investigator (Genomic Vectors)',
      department: 'Molecular Biology & Gene Editing (MBGE)',
      term: 'Tenure-track',
      stipend: '$115,000 / annum base',
      desc: 'Seeking a group leader to coordinate in-vivo CRISPR-Cas24 delivery systems, utilizing micro-fluidic synthesis matrices and cryo-TEM macromolecule reconstructions.',
      requirements: ['Ph.D. in Molecular Biology or Genetic Chemistry', '3+ years post-doctoral group leading experience', 'Established track record with somatic epigenetic edits']
    },
    {
      title: 'Research Fellow (Autonomous Robotics)',
      department: 'Autonomous Robotics & Neuromorphic AI (ARNA)',
      term: '3 Years (Fixed)',
      stipend: '$58,000 / annum',
      desc: 'Seeking a computational fellow to construct decentralized spiking neural network models for collective quadcopter swarms navigating GNSS-denied subterranean stages.',
      requirements: ['Ph.D. or Master in Computer Science / Robotics', 'Expertise in C++ and CUDA neuromorphic architectures', 'Prior publications in swarm coordination protocols']
    }
  ];

  const galleryImages = [
    { url: 'https://images.unsplash.com/photo-1507668077129-56e32842fceb?auto=format&fit=crop&q=80&w=600', caption: 'Quantum Dynamics Helium Dilution Laser Array' },
    { url: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=600', caption: 'Biotechnology Gene Editing Biosafety Chamber' },
    { url: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600', caption: 'Robotics Swarm Calibration Arena' },
    { url: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=600', caption: 'Nanomaterials Lithography Cleanroom Suite' },
    { url: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&q=80&w=600', caption: 'ASRI Core Cognitive Computing Pod' },
    { url: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=600', caption: 'ASRI Main Academic and Administrative Building' },
    { url: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=600', caption: 'Chemical Synthesis and Reagent Synthesis Lab' },
    { url: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&q=80&w=600', caption: 'High-Resolution Electron Microscopy Suite' },
    { url: 'https://images.unsplash.com/photo-1574169208507-84376144848b?auto=format&fit=crop&q=80&w=600', caption: 'Advanced Prototype Fabrication Lab' },
    { url: 'https://images.unsplash.com/photo-1563206767566-f4d0fb8353d2?auto=format&fit=crop&q=80&w=600', caption: 'Optical Metrology and Calibration Systems' },
    { url: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600', caption: 'Aerospace Propulsion Testing Facility' },
    { url: 'https://images.unsplash.com/photo-1518152006812-edab29b069ac?auto=format&fit=crop&q=80&w=600', caption: 'High-Performance Supercomputing Cluster' }
  ];

  const filteredPublications = PUBLICATIONS.filter(pub => 
    pub.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    pub.authors.toLowerCase().includes(searchQuery.toLowerCase()) || 
    pub.journal.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredNewsEvents = NEWS_EVENTS.filter(ne => 
    ne.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    ne.description.toLowerCase().includes(searchQuery.toLowerCase()) || 
    ne.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const closeApplyModal = () => {
    setShowApplyModal(false);
    setIsSubmitted(false);
  };

  return (
    <div id="resources-view" className="bg-[#F4F4F2] text-slate-800">
      
      {/* SECTION 1: RESOURCE HERO */}
      <section id="resources-hero" className="relative py-24 bg-white border-b border-slate-200 px-6">
        <div className="container mx-auto max-w-7xl flex flex-col lg:flex-row gap-16 items-center relative z-10">
          <motion.div className="lg:w-1/2 space-y-6" variants={fadeLeft} initial="hidden" animate="visible">
            <div>
              <span className="font-sans text-[11px] tracking-wider text-[#831238] font-bold bg-[#831238]/10 px-3.5 py-1.5 rounded-lg border border-[#831238]/20 uppercase">
                Library & Academic Hub
              </span>
            </div>
            <h1 className="font-serif text-[34px] font-extrabold italic text-slate-900 tracking-tight leading-tight">
              Knowledge Repository & Opportunities
            </h1>
            <p className="text-slate-600 font-sans text-base leading-relaxed">
              Explore our open-access peer publications, register for upcoming international scientific conferences and hands-on workshops, review physical laboratory media assets, or submit applications to join our governing scientific faculty.
            </p>
          </motion.div>

          <motion.div className="lg:w-1/2 w-full grid grid-cols-1 sm:grid-cols-2 gap-4" variants={staggerContainer} initial="hidden" animate="visible">
            <motion.div variants={staggerItem} className="bg-[#9A1642] p-5 rounded-2xl shadow-sm flex flex-col justify-center">
              <div className="font-serif text-3xl font-bold italic text-white leading-none mb-1">2,400+</div>
              <div className="font-sans text-[11px] text-white/80 font-semibold tracking-wide uppercase">Peer Publications</div>
            </motion.div>
            <motion.div variants={staggerItem} className="bg-[#9A1642] p-5 rounded-2xl shadow-sm flex flex-col justify-center">
              <div className="font-serif text-3xl font-bold italic text-white leading-none mb-1">85</div>
              <div className="font-sans text-[11px] text-white/80 font-semibold tracking-wide uppercase">Annual Events</div>
            </motion.div>
            <motion.div variants={staggerItem} className="bg-[#9A1642] p-5 rounded-2xl shadow-sm flex flex-col justify-center sm:col-span-2">
              <div className="font-serif text-3xl font-bold italic text-white leading-none mb-1">Open-Access</div>
              <div className="font-sans text-[11px] text-white/80 font-semibold tracking-wide uppercase">Global Digital Repository</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* TABS SELECTOR */}
      <section className="bg-white border-b border-slate-200 sticky top-0 z-30 shadow-sm py-4 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="w-full md:w-auto text-slate-700 font-sans font-bold text-sm">
            Knowledge Base Search
          </div>

          <div className="relative w-full md:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
            <input 
              type="text" 
              placeholder="Search resources..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg font-sans text-sm focus:outline-none focus:border-[#831238] transition-all placeholder:text-gray-400"
            />
          </div>
        </div>
      </section>

      {/* SECTION 1: PUBLICATIONS (filtered by search) */}
      {(activeTab === 'all' || activeTab === 'papers') && (
        <section id="resource-publications" className="py-24 px-6 max-w-7xl mx-auto border-b border-slate-200">
          <div className="mb-12 space-y-4">
            <span className="font-sans text-xs tracking-wider text-[#831238] font-bold">Open-Access Repository</span>
            <h2 className="font-serif text-[30px] font-extrabold italic text-[#831238] tracking-tight">
              Latest Scholarly Publications
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredPublications.map((pub, idx) => (
              <div key={idx} className="bg-white border border-slate-200 p-8 rounded-2xl shadow-sm transition-all flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="font-sans text-xs text-slate-500 font-semibold tracking-wide">{pub.journal} • {pub.year}</span>
                    <span className="px-2.5 py-0.5 bg-[#831238]/10 text-[#831238] rounded-md font-sans text-[10px] font-bold border border-[#831238]/20">
                      {pub.citations} Citations
                    </span>
                  </div>
                  <h3 className="font-serif text-base font-bold italic text-slate-900 leading-snug">{pub.title}</h3>
                  <p className="font-mono text-xs text-slate-700 italic font-semibold">By {pub.authors}</p>
                  <p className="text-xs text-slate-700 font-sans font-medium leading-relaxed">{pub.abstract}</p>
                </div>
                <div className="pt-6 mt-6 border-t border-slate-100 flex justify-between items-center text-xs font-mono">
                  <span className="text-slate-400 tracking-wider">DOI: {pub.doi}</span>
                  <a 
                    href={pub.downloadUrl} 
                    className="text-[#831238] font-semibold flex items-center gap-1 hover:text-[#831238]/80 transition-colors"
                  >
                    <Download className="w-4 h-4 animate-none" /> Download Manuscript PDF
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* SECTION 2-5: RESEARCH NEWS, EVENTS, WORKSHOPS & CONFERENCES */}
      {(activeTab === 'all' || activeTab === 'news') && (
        <section id="resource-events" className="py-24 bg-[#EBEBE9] border-b border-slate-250 px-6">
          <div className="max-w-7xl mx-auto space-y-12">
            <div className="space-y-4">
              <span className="font-sans text-xs tracking-wider text-[#831238] font-bold">Scientific Calendar</span>
              <h2 className="font-serif text-[30px] font-extrabold italic text-[#831238] tracking-tight">
                News, Summits & Workshops
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {filteredNewsEvents.map((ne) => (
                <div 
                  key={ne.id}
                  className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm flex flex-col justify-between transition-all group relative"
                >
                  <div>
                    <div className="h-44 relative overflow-hidden">
                      <img src={ne.image} alt={ne.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                      <div className="absolute top-4 left-4">
                        <span className="font-sans text-[10px] bg-[#831238] text-white px-2.5 py-1 rounded-md capitalize font-bold tracking-wide">
                          {ne.type}
                        </span>
                      </div>
                    </div>
                    <div className="p-6 space-y-3">
                      <span className="font-sans text-xs text-slate-500 flex items-center gap-1 font-medium tracking-wide">
                        <Calendar className="w-3.5 h-3.5 text-[#831238]" /> {ne.date}
                      </span>
                      <h4 className="font-serif italic font-bold text-slate-900 text-xs leading-snug">{ne.title}</h4>
                      <p className="text-xs text-slate-700 font-sans font-medium leading-relaxed line-clamp-3">{ne.description}</p>
                    </div>
                  </div>
                  {ne.registrationUrl && (
                    <div className="p-6 pt-0 border-t border-slate-50 mt-4">
                      <div className="flex items-center gap-1 text-[11px] text-slate-500 font-sans mb-3 tracking-wide">
                        <MapPin className="w-3.5 h-3.5 text-[#831238]" /> {ne.location}
                      </div>
                      <a 
                        href={ne.registrationUrl}
                        className="w-full py-2.5 bg-[#831238] text-white hover:bg-[#831238]/90 text-xs font-sans font-bold rounded-lg tracking-wide block text-center transition-all cursor-pointer border border-transparent"
                      >
                        Register for Session
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* SECTION 6: GALLERY */}
      {activeTab === 'all' && (
        <section id="resource-gallery" className="py-24 px-6 max-w-7xl mx-auto border-b border-slate-200">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="font-sans text-xs tracking-wider text-[#831238] font-bold">Media Repository</span>
            <h2 className="font-serif text-[30px] font-extrabold italic text-[#831238] tracking-tight">
              Laboratory & Campus Media Gallery
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {(showAllGallery ? galleryImages : galleryImages.slice(0, 6)).map((img, i) => (
              <div 
                key={i}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-md group relative transition-all"
              >
                <div className="h-64 overflow-hidden relative">
                  <img src={img.url} alt={img.caption} className="w-full h-full object-cover transition-transform duration-750 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="font-sans text-[10px] text-red-400 tracking-wide font-bold">ASRI Photo Archive</span>
                    <p className="font-serif italic font-bold text-sm mt-1">{img.caption}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center">
            <button 
              onClick={() => setShowAllGallery(!showAllGallery)}
              className="px-8 py-3.5 bg-[#831238] text-white rounded-lg text-sm font-sans font-semibold transition-all cursor-pointer hover:bg-[#831238]/90"
            >
              {showAllGallery ? 'Collapse Media Gallery' : 'View All Gallery'}
            </button>
          </div>
        </section>
      )}

      {/* SECTION 7: ACADEMIC CAREERS */}
      {(activeTab === 'all' || activeTab === 'careers') && (
        <section id="resource-careers" className="py-24 px-6 max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="font-sans text-xs tracking-wider text-[#831238] font-bold">Academic Openings</span>
            <h2 className="font-serif text-[30px] font-extrabold italic text-[#831238] tracking-tight">
              Join Our Governing Research Faculty
            </h2>
            <p className="text-slate-600 font-sans text-base">
              ASRI continuously recruits tenured principal investigators, ambitious senior postdoctorates, and collaborative fellows who excel in first-principles physical or biological inquiry.
            </p>
          </div>

          <div className="space-y-8">
            {careers.map((career, idx) => (
              <div 
                key={idx}
                className="bg-white border border-slate-200 p-8 rounded-2xl shadow-sm transition-all grid grid-cols-1 lg:grid-cols-12 gap-8"
              >
                <div className="lg:col-span-8 space-y-4">
                  <div>
                    <span className="inline-block px-3 py-1 bg-[#831238]/10 text-[#831238] rounded-md border border-[#831238]/20 font-sans text-[10px] font-bold tracking-wide">
                      {career.department}
                    </span>
                  </div>
                  <h3 className="font-serif text-lg font-bold italic text-slate-900">{career.title}</h3>
                  <p className="text-slate-700 font-sans font-medium text-sm leading-relaxed">{career.desc}</p>
                  
                  <div className="space-y-2 pt-2">
                    <h5 className="font-serif italic font-bold text-xs text-slate-900 tracking-wide">Position Requirements:</h5>
                    <ul className="text-xs text-slate-700 font-sans font-medium space-y-1">
                      {career.requirements.map((req, i) => (
                        <li key={i} className="flex gap-2 items-start">
                          <CheckCircle className="w-4 h-4 text-[#831238] shrink-0 mt-0.5" />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="lg:col-span-4 flex flex-col justify-between p-6 bg-[#831238]/5 rounded-xl border border-[#831238]/10">
                  <div className="space-y-3 font-sans text-xs">
                    <div>
                      <span className="text-slate-400 font-semibold tracking-wide text-[10px]">Position Term</span>
                      <p className="text-slate-700 font-bold mt-1 capitalize">{career.term}</p>
                    </div>
                    <div>
                      <span className="text-slate-400 font-semibold tracking-wide text-[10px]">Stipend / Endowment</span>
                      <p className="text-slate-700 font-bold mt-1 capitalize">{career.stipend}</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => {
                      setApplyRole(career.title);
                      setShowApplyModal(true);
                    }}
                    className="w-full mt-6 py-3.5 bg-[#831238] text-white rounded-lg text-sm font-sans font-semibold transition-all cursor-pointer hover:bg-[#831238]/90"
                  >
                    Apply for Position
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* APPLICATION MODAL POPUP */}
      {showApplyModal && (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl p-8 max-w-lg w-full border border-slate-200 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto group relative overflow-hidden"
          >
              {/* Animated Bottom Line on Hover */}
              <div className="absolute bottom-0 left-0 h-1.5 bg-[#831238] w-0 group-hover:w-full transition-all duration-300 ease-out z-0" />
            {!isSubmitted ? (
              <>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-serif italic font-bold text-slate-900 text-lg">Faculty Application Form</h3>
                    <p className="text-xs text-slate-500 font-sans mt-1">Applying for: <strong className="text-red-700">{applyRole}</strong></p>
                  </div>
                  <button onClick={closeApplyModal} className="p-1 hover:bg-slate-100 rounded-lg text-slate-400 hover:text-slate-700 cursor-pointer">
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <form onSubmit={handleApplySubmit} className="space-y-4 text-xs font-sans">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="font-semibold text-slate-700 tracking-wide text-[11px] font-sans">Full Name</label>
                      <input type="text" required className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-[#831238] font-sans text-sm" />
                    </div>
                    <div className="space-y-1">
                      <label className="font-semibold text-slate-700 tracking-wide text-[11px] font-sans">Email Address</label>
                      <input type="email" required className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-[#831238] font-sans text-sm" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="font-semibold text-slate-700 tracking-wide text-[11px] font-sans">ORCID ID Link</label>
                      <input type="text" placeholder="e.g. 0000-0002-1842-8921" required className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-[#831238] font-sans text-sm" />
                    </div>
                    <div className="space-y-1">
                      <label className="font-semibold text-slate-700 tracking-wide text-[11px] font-sans">Current Affiliation</label>
                      <input type="text" required className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-[#831238] font-sans text-sm" />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="font-semibold text-slate-700 tracking-wide text-[11px] font-sans">Abstract of Proposed Research (max 300 words)</label>
                    <textarea rows={4} required className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-[#831238] resize-none font-sans" placeholder="Detail the physical or biological axioms your research group aims to address..." />
                  </div>

                  <div className="flex gap-3 justify-end pt-4">
                    <button 
                      type="button" 
                      onClick={closeApplyModal}
                      className="px-5 py-2.5 border border-slate-300 rounded-lg text-slate-600 hover:bg-slate-100 font-sans text-xs font-semibold cursor-pointer"
                    >
                      Cancel
                    </button>
                    <button 
                      type="submit" 
                      className="px-6 py-2.5 bg-[#831238] text-white font-sans text-xs font-semibold rounded-lg cursor-pointer hover:bg-[#831238]/90"
                    >
                      Submit Application
                    </button>
                  </div>
                </form>
              </>
            ) : (
              <div className="text-center py-8 space-y-6">
                <div className="mx-auto w-12 h-12 rounded-full bg-green-50 border border-green-200 text-green-700 flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 animate-none" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-serif italic font-bold text-slate-900 text-lg">Application Received</h3>
                  <p className="text-xs text-slate-600 font-sans leading-relaxed max-w-md mx-auto">
                    Your application for the position of <strong>{applyRole}</strong> has been cataloged under our Academic Council intake index. We will evaluate your peer-reviewed publications and ORCID index within 14 business days.
                  </p>
                </div>
                <button 
                  onClick={closeApplyModal}
                  className="px-6 py-2.5 bg-slate-900 text-white font-sans text-xs font-semibold rounded-lg cursor-pointer hover:bg-slate-800"
                >
                  Close Registry Terminal
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}

    </div>
  );
}
