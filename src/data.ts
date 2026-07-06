import { Discovery, Publication, Laboratory, Scientist, Equipment, Patent, ResearchProject, NewsEvent, FAQItem } from './types';

export const DISCOVERIES: Discovery[] = [
  {
    year: '2026',
    title: 'Topological Majorana Fermion Condensation',
    description: 'Successful observation and stabilization of Majorana zero-modes within a custom engineered bismuth-antimony topological superconductor array. This breakthrough provides the physical platform for fault-tolerant topological quantum computation, suppressing environmental decoherence by several orders of magnitude.',
    category: 'Quantum Physics',
    impact: 'Enables noise-tolerant qubit construction with physical error rates below 10^-8.',
    investigator: 'Dr. Evelyn Vance & Quantum Dynamics Group',
    stats: '99.98% Coherence Fidelity'
  },
  {
    year: '2025',
    title: 'CRISPR-Cas24 Precision Genomic Correction',
    description: 'Development and clinical-grade verification of a high-fidelity CRISPR-Cas24 endonuclease. The enzyme demonstrates zero off-target cleavage across 3.2 billion base pairs while performing complex double-stranded insertions in somatic cells for genetic disease mitigation.',
    category: 'Biotechnology',
    impact: 'Cures autosomal dominant genetic disorders with singular, targeted treatment vectors.',
    investigator: 'Dr. Marcus Thorne, Gene Regulation Laboratory',
    stats: '0% Off-Target Rates'
  },
  {
    year: '2024',
    title: 'Sub-Nanometer Carbon-Capture Metamaterials',
    description: 'Synthesis of a covalent organic framework (COF-909) with selectively tunable micro-pores. The material possesses high kinetic selectivity for CO2 molecules at extremely low partial pressures, enabling direct ambient air capture at a thermodynamic cost 40% lower than standard amine-based liquid systems.',
    category: 'Environmental Science',
    impact: 'Dramatically lowers cost of atmospheric carbon capture, moving toward global net-zero.',
    investigator: 'Dr. Sarah Jenkins, Advanced Materials Division',
    stats: '420 kg/m³ Capture Capacity'
  },
  {
    year: '2023',
    title: 'Self-Assembling Graphene Nanowires',
    description: 'Pioneered an enzymatic polymerization technique that guides the autonomous bottom-up self-assembly of pristine armchair graphene nanoribbons directly onto silicon-carbide substrates. This bridges the gap between molecular chemistry and solid-state microelectronics.',
    category: 'Nanotechnology',
    impact: 'Replaces conventional copper interconnects, increasing processor speeds by 10x while cutting thermals.',
    investigator: 'Dr. Kenji Sato, Nanomaterials Lab',
    stats: '15,000 cm²/(V·s) Mobility'
  },
  {
    year: '2022',
    title: 'Neural-Cognitive Synaptic Co-Processor',
    description: 'Validation of a neuromorphic silicon architecture integrating 100 million artificial phase-change synapses. It executes non-von Neumann deep reinforcement learning algorithms completely within memory arrays, eliminating the traditional memory-bus energy bottleneck.',
    category: 'Artificial Intelligence',
    impact: 'Ultra-efficient hardware for autonomous spacecraft navigation and real-time planetary landing.',
    investigator: 'Dr. Helena Rostova, Robotics & AI Lab',
    stats: '120 Tera-Operations per Watt'
  }
];

export const PUBLICATIONS: Publication[] = [
  {
    title: 'Coherent Control of Topological States in Majorana Wire Arrays',
    authors: 'Vance, E., Chen, L., & Goldstein, R.',
    journal: 'Nature Physics',
    year: '2026',
    citations: 284,
    doi: '10.1038/nphys.2026.411',
    downloadUrl: '#',
    abstract: 'We report the observation of highly robust topological phases in fabricated nanowire arrays of bismuth-antimony alloys. By applying local electrostatic gates, we control the phase boundaries of topological superconductivity to isolate Majorana fermions with a lifetime exceeding 12 milliseconds at 15 mK.',
    category: 'Quantum Physics',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=600'
  },
  {
    title: 'High-Fidelity CRISPR-Cas24 Cleavage Dynamics and Off-Target Suppression',
    authors: 'Thorne, M., Patel, A., & Gomez, F.',
    journal: 'Science',
    year: '2025',
    citations: 412,
    doi: '10.1126/science.abg8821',
    downloadUrl: '#',
    abstract: 'Engineered variants of the CRISPR-Cas24 endonuclease were tested against eukaryotic genomic libraries. Cryo-EM structures reveal an active site that undergoes conformational lock only upon 100% complementary target hybridization, explaining the virtual elimination of off-target mutations.',
    category: 'Biotechnology',
    image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80&w=600'
  },
  {
    title: 'Carbon-Dioxide Adsorption Thermodynamics in Tunable Covalent Organic Frameworks',
    authors: 'Jenkins, S., Al-Jamil, H., & Dupont, M.',
    journal: 'Journal of the American Chemical Society',
    year: '2024',
    citations: 189,
    doi: '10.1021/jacs.4b09912',
    downloadUrl: '#',
    abstract: 'Through systematic variation of functional organic linkers, we analyze the adsorption isotherm profiles of COF-909 under ambient flue-gas mixtures. We establish a record-breaking heat of adsorption that minimizes the energy required for vacuum-temperature swing regeneration.',
    category: 'Environmental Science',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=600'
  },
  {
    title: 'Neuromorphic Synaptic Computing Engines on Phase-Change Material Platforms',
    authors: 'Rostova, H., & Vance, E.',
    journal: 'IEEE Transactions on Computers',
    year: '2023',
    citations: 320,
    doi: '10.1109/TC.2023.10988',
    downloadUrl: '#',
    abstract: 'This paper describes the architecture and physical implementation of the NeuroSync chip, an analog memristive matrix. We show hardware acceleration of sparse-matrix neural networks, demonstrating high accuracy in classifying multi-spectral cosmic radiation signals.',
    category: 'Artificial Intelligence',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=600'
  }
];

export const LABORATORIES: Laboratory[] = [
  {
    id: 'molecular-bio',
    name: 'MBGE: Genomic & Somatic Engineering',
    image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=1200',
    head: 'Dr. Marcus Thorne',
    focus: 'Advanced epigenetic reprogramming, precision CRISPR-Cas integration, and next-generation synthetic biotherapeutics.',
    description: 'Equipped with class-IV biosafety cleanrooms, high-throughput gene synthesizers, and real-time cellular imaging suites. MBGE leads global investigations into targeted somatic genetic corrections, cellular senescence, and plant-derived immunotherapies to combat emerging pathogens.',
    equipment: ['Illumina NovaSeq X Plus', 'Thermo Scientific Krios G4', 'Agilent LC-Mass Spectrometry'],
    ongoingProjectsCount: 14
  },
  {
    id: 'quantum-dynamics',
    name: 'QDSP: Topological Quantum Hardware',
    image: 'https://images.unsplash.com/photo-1507668077129-56e32842fceb?auto=format&fit=crop&q=80&w=1200',
    head: 'Dr. Evelyn Vance',
    focus: 'Fault-tolerant quantum architecture, Josephson junction networks, and extremely localized subatomic tracking.',
    description: 'Featuring three state-of-the-art helium dilution refrigerators operating down to 8 milliKelvin, magnetically shielded chambers, and ultra-high vacuum laser cooling platforms. QDSP focuses on creating highly-entangled multi-qubit systems and validating quantum electrodynamic theories.',
    equipment: ['Bluefors LD400 Dilution Fridge', 'Keysight AWG-M3202A Arrays', 'Oxford Triton Cryogen-Free System'],
    ongoingProjectsCount: 19
  },
  {
    id: 'robotics-ai',
    name: 'ARNA: Neuromorphic AI & Swarms',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200',
    head: 'Dr. Helena Rostova',
    focus: 'Decentralized deep space swarms, artificial synaptic networks, and autonomous cognitive feedback loops.',
    description: 'Maintains an advanced mechanical fabrication plant, simulated lunar and martian environmental terrain stages, and massive local GPU clusters. Research highlights include self-assembling satellite architectures and robotic rovers equipped with real-time terrain reconstruction pipelines.',
    equipment: ['NVIDIA DGX H100 Supercluster', 'Vicon Vantage Motion Capture', 'Formlabs Form 4 SLS Fab'],
    ongoingProjectsCount: 11
  },
  {
    id: 'nanomaterials',
    name: 'ANME: Single-Atom Electronics',
    image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=1200',
    head: 'Dr. Kenji Sato',
    focus: 'Pristine graphene nanostructures, single-atom transistors, and optical-electronic molecular switching.',
    description: 'A 5,000 sq ft ISO 4 class cleanroom for nanolithography and chemical vapor deposition. The lab focuses on synthesis of zero-dimensional fullerene cages, carbon nanotube field-effect transistors, and optical-electronic switching devices working at the molecular limits.',
    equipment: ['RAITH Voyager E-Beam Lithography', 'Nanosurf FlexAFM System', 'Sentech PE-CVD Reactor'],
    ongoingProjectsCount: 16
  }
];

export const SCIENTISTS: Scientist[] = [
  {
    name: 'Dr. Evelyn Vance',
    role: 'director',
    title: 'Institute Director & Distinguished Professor of Quantum Physics',
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=500',
    bio: 'Dr. Vance completed her Ph.D. at MIT and worked as Senior Researcher at CERN’s Large Hadron Collider before founding the Quantum Dynamics Group at ASRI in 2018. She was appointed Director of the Institute in 2023. Her research focuses on using microwave spectroscopy to manipulate subatomic particles in topological states.',
    interests: ['Quantum Superconductivity', 'Majorana Fermions', 'Cosmology'],
    publications: [
      'Vance, E. (2026). Coherent Control of Topological States. Nature Physics.',
      'Vance, E., & Rostova, H. (2023). Neuromorphic Computing on Cryogenic Memristors. IEEE.'
    ],
    awards: [
      'Dirac Medal in Theoretical Physics (2025)',
      'MacArthur Fellowship "Genius" Grant (2023)',
      'European Physical Society prize (2021)'
    ],
    email: 'e.vance@asri.res.in',
    orcid: '0000-0002-1842-8921'
  },
  {
    name: 'Dr. Marcus Thorne',
    role: 'pi',
    title: 'Principal Investigator, Genomic Engineering',
    photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=500',
    bio: 'Dr. Thorne has dedicated over two decades to genetic chemistry. Formerly a professor at Harvard Medical School, he currently leads the Molecular Biology Group at ASRI. His lab recently announced CRISPR-Cas24, the highest precision gene-editing endonuclease to date.',
    interests: ['CRISPR-Cas Systems', 'Direct Epigenetic Reprogramming', 'Synthetic Genomics'],
    publications: [
      'Thorne, M., et al. (2025). High-Fidelity CRISPR-Cas24 Cleavage. Science.',
      'Thorne, M. (2022). Chromatin Architecture Modification Dynamics. Cell.'
    ],
    awards: [
      'Lasker Award for Basic Medical Research (2024)',
      'Royal Society Gabor Medal (2022)'
    ],
    email: 'm.thorne@asri.res.in',
    orcid: '0000-0001-9042-4752'
  },
  {
    name: 'Dr. Helena Rostova',
    role: 'senior',
    title: 'Senior Scientist, Robotics & Artificial Intelligence',
    photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=500',
    bio: 'Dr. Rostova specializes in neuromorphic computation and decentralized swarm robotics. She is a recipient of the Turing Prize in AI hardware. Under her leadership, the ARNA lab develops deep space autonomous exploration platforms and robotic control systems.',
    interests: ['Neuromorphic Hardware', 'Swarm Intelligence', 'Spacecraft Navigation'],
    publications: [
      'Rostova, H. (2023). Memristive Matrix Computing. IEEE Transactions.',
      'Rostova, H., & Sato, K. (2021). Synaptic Connectivity in Graphene Networks. Nature.'
    ],
    awards: [
      'IEEE Computer Society Pioneer Award (2025)',
      'National Technology Innovation Medal (2023)'
    ],
    email: 'h.rostova@asri.res.in',
    orcid: '0000-0003-4412-1082'
  },
  {
    name: 'Dr. Kenji Sato',
    role: 'senior',
    title: 'Senior Scientist, Nanomaterials Division',
    photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=500',
    bio: 'Dr. Sato conducts pioneering studies on atomically thin materials. He joined ASRI after completing a post-doctorate at the Tokyo Institute of Technology. His expertise centers on chemical vapor deposition and carbon-nanotube logic circuit manufacturing.',
    interests: ['Armchair Graphene Nanoribbons', 'Quantum Dots', 'CVD Chemistry'],
    publications: [
      'Sato, K., et al. (2023). Autonomous Self-Assembly of Graphene Interconnects. Nature Nanotech.',
      'Sato, K. (2020). Carbon Nanotube Gate Capacitance Scaling. ACS Nano.'
    ],
    awards: [
      'Kavli Prize in Nanoscience Nominative (2024)',
      'Asia-Pacific Material Society Young Scientist Prize (2021)'
    ],
    email: 'k.sato@asri.res.in',
    orcid: '0000-0002-3112-9018'
  },
  {
    name: 'Dr. Sarah Jenkins',
    role: 'pi',
    title: 'Principal Investigator, Environmental Materials & Science',
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=500',
    bio: 'Dr. Jenkins coordinates the Environmental Materials lab. Her work centers on sustainable chemistry and developing highly selective carbon capture matrices. She has collaborated with intergovernmental panels on carbon sequestration strategies.',
    interests: ['Covalent Organic Frameworks', 'Carbon Dioxide Thermodynamics', 'Micro-porous Polymers'],
    publications: [
      'Jenkins, S. (2024). Carbon-Dioxide Adsorption in Tunable COFs. JACS.',
      'Jenkins, S., & Thorne, M. (2021). Enzymatic Catalysis on Bio-Polymer Surfaces. Green Chem.'
    ],
    awards: [
      'Volvo Environment Prize (2025)',
      'UN Champion of the Earth Science Award (2023)'
    ],
    email: 's.jenkins@asri.res.in',
    orcid: '0000-0001-8724-4112'
  }
];

export const EQUIPMENTS: Equipment[] = [
  {
    name: 'Cryo-TEM Titan Krios G4',
    type: 'Cryogenic Transmission Electron Microscope',
    specs: '300 kV Acceleration Voltage, Falcon 4 Direct Electron Detector, BioQuantum energy filter.',
    description: 'Operated at liquid nitrogen temperatures to reconstruct three-dimensional macromolecules at near-atomic resolution. Vital for deciphering the structural dynamics of CRISPR-Cas enzymes and virus capsid interactions.',
    image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=600',
    status: 'Operational'
  },
  {
    name: 'Bluefors LD400 Cryostat',
    type: 'Sub-Kelvin Dilution Refrigerator',
    specs: '400 µW cooling power at 100 mK, base temperature below 7 mK, integrated superconducting solenoids.',
    description: 'Provides the ultra-cold environment essential for preserving quantum superposition in superconducting qubit circuits. Equipped with low-noise RF coaxial cabling and quantum-limited amplifiers.',
    image: 'https://images.unsplash.com/photo-1507668077129-56e32842fceb?auto=format&fit=crop&q=80&w=600',
    status: 'Operational'
  },
  {
    name: 'NVIDIA DGX H100 Cluster',
    type: 'High-Performance Supercomputing Node',
    specs: '8x NVIDIA H100 Tensor Core GPUs, 640GB of high-bandwidth memory (HBM3), 3.2 Tbps InfiniBand.',
    description: 'Used for simulating sub-atomic QCD lattice physics, training deep-neural cognitive network models for robotic swarms, and conducting real-time molecular docking simulations.',
    image: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&q=80&w=600',
    status: 'Operational'
  }
];

export const PATENTS: Patent[] = [
  {
    title: 'Topological Majorana Superconductor Logic Gate Array',
    inventors: 'Dr. Evelyn Vance, Dr. Kenji Sato',
    number: 'US-2026-0089221-A1',
    year: '2026',
    description: 'A physical architecture and method for operating non-abelian braiding logic gates using localized Majorana zero-modes. This represents a foundational framework for topological hardware error-correction.',
    status: 'Pending'
  },
  {
    title: 'High-Precision Endonuclease CRISPR-Cas24 Cleavage Vector',
    inventors: 'Dr. Marcus Thorne',
    number: 'US-1194218-B2',
    year: '2025',
    description: 'An engineered CRISPR enzyme exhibiting high spatial stability, providing a path to zero-tolerance somatic editing for clinical in-vivo protocols.',
    status: 'Granted'
  },
  {
    title: 'Covalent Organic Polymer COF-909 CO2 Capture Synthesis',
    inventors: 'Dr. Sarah Jenkins',
    number: 'US-1158141-B1',
    year: '2024',
    description: 'Synthesizing porous organic polymers utilizing highly stable dynamic hydrazine linkages. It demonstrates high chemical resilience in humid industrial gas streams.',
    status: 'Granted'
  }
];

export const RESEARCH_PROJECTS: ResearchProject[] = [
  {
    title: 'Fault-Tolerant Topological Qubits on Nanowire Cross-Bar Assemblies',
    status: 'ongoing',
    domain: 'Quantum Computing',
    lead: 'Dr. Evelyn Vance',
    description: 'Synthesizing networks of indium-arsenide and bismuth-antimony nanowires to confirm non-abelian braiding statistics. Our objective is to build the world’s first solid-state braid qubit with physical error protection.',
    funding: '$12.5M - National Science Commission',
    duration: '2024 - 2028',
    objective: 'Create a four-qubit topological logic system demonstrating a fault-tolerant logical CNOT gate.'
  },
  {
    title: 'Somatic Gene Insertion for Complex Autosomal Disease Therapy',
    status: 'ongoing',
    domain: 'Biotechnology',
    lead: 'Dr. Marcus Thorne',
    description: 'Using the CRISPR-Cas24 platform to perform clinical-ready, non-pathogenic in-vivo insertions in liver tissues. This targets complete correction of metabolic storage disorders without systemic genotoxic risks.',
    funding: '$8.2M - Biotech Research Council',
    duration: '2025 - 2029',
    objective: 'Achieve stable epigenetic editing and genomic integration in pre-clinical mouse models.'
  },
  {
    title: 'Neuromorphic Swarm Navigation in GNSS-Denied Environments',
    status: 'ongoing',
    domain: 'Robotics & Artificial Intelligence',
    lead: 'Dr. Helena Rostova',
    description: 'Designing fully decentralized swarm control protocols using analog spiking neural networks. Swarms of bio-inspired aerial micro-vehicles will map hazardous subterranean mines and lava tubes entirely locally.',
    funding: '$6.4M - Space Exploration Initiative',
    duration: '2023 - 2027',
    objective: 'Deploy 50 autonomous micro-drones capable of collective escape-route and resource-hazard mapping.'
  },
  {
    title: 'Atomically Flat Heterostructures for Low-Dissipation Electronics',
    status: 'completed',
    domain: 'Nanotechnology & Semiconductors',
    lead: 'Dr. Kenji Sato',
    description: 'Fabrication of vertical semiconductor junctions combining graphene, molybdenum disulfide, and boron nitride. Verified that interfacial electronic screening dramatically reduces transport scattering, enabling ballistic conduction.',
    funding: '$4.9M - Semiconductor Alliance',
    duration: '2021 - 2025',
    objective: 'Demonstrate molecular-scale transistors working at room temperatures with power consumption < 1 fJ per switch.'
  },
  {
    title: 'Industrial Flue Carbon-Capture COF Filtration Membranes',
    status: 'completed',
    domain: 'Environmental Science',
    lead: 'Dr. Sarah Jenkins',
    description: 'Engineered high-permeability thin-film composite membranes embedded with COF-909 micro-crystals. Field tests demonstrated successful filtration of industrial combustion exhausts with stable performance across 1,000 thermal cycles.',
    funding: '$5.5M - Global Ecology Fund',
    duration: '2022 - 2025',
    objective: 'Remove >94% of CO2 directly from gas streams containing high sulfur oxide and nitrous contaminants.'
  },
  {
    title: 'High-Density Room-Temperature Topological Excitonic Laser Arrays',
    status: 'future',
    domain: 'Photonics & Quantum Optics',
    lead: 'Dr. Evelyn Vance (Co-Lead)',
    description: 'Harnessing the edge-states of topological photonic crystals to generate highly coherent laser beams. This will establish super-radiant emissions immune to cavity backscattering, fabricating the next generation of optical computer logic buses.',
    funding: '$15.0M (Proposed)',
    duration: '2026 - 2031',
    objective: 'Pioneer the blueprint for solid-state photonic logic units that operate without electric heat dissipation.'
  }
];

export const NEWS_EVENTS: NewsEvent[] = [
  {
    id: '1',
    type: 'conference',
    title: 'International Quantum Coherence Conference (IQCC 2026)',
    date: 'October 14-17, 2026',
    location: 'Main Auditorium, ASRI Campus, Bengaluru',
    description: 'Gathering over 200 top-tier international physicists to discuss breakthroughs in topological protection, superconducting qubits, and non-equilibrium quantum dynamics. Plenary lecture by Director Dr. Evelyn Vance.',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=600',
    registrationUrl: '#'
  },
  {
    id: '2',
    type: 'workshop',
    title: 'Hands-on CRISPR-Cas24 Structural Engineering Workshop',
    date: 'August 22-25, 2026',
    location: 'Bio-Computing Suite 302, MBGE Lab',
    description: 'An advanced lab training course covering the practical implementation of high-fidelity CRISPR-Cas24 vectors, structural analysis using cryo-TEM reconstructions, and machine-learning guided sgRNA target generation.',
    image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=600',
    registrationUrl: '#'
  },
  {
    id: '3',
    type: 'news',
    title: 'ASRI Appointed Lead Institute for National Fusion Reactor Design',
    date: 'June 18, 2026',
    location: 'New Delhi & Bengaluru',
    description: 'The Ministry of Energy has officially designated ASRI as the hub for designing advanced superconducting magnetic confinements. Our Quantum Dynamics and Materials labs will lead high-field magnet design.',
    image: 'https://images.unsplash.com/photo-1507668077129-56e32842fceb?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: '4',
    type: 'event',
    title: 'Annual Open Campus Day for Young Astronomers & Physicists',
    date: 'September 05, 2026',
    location: 'Campus Lawns & Advanced Observatories',
    description: 'Inviting high school and undergraduate researchers to tour our facilities, operate high-powered radio dishes, interact with Nobel laureates, and participate in micro-gravity simulation labs.',
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=600'
  }
];

export const FAQS: FAQItem[] = [
  {
    question: 'What is the main mandate of the Aetheris Scientific Research Institute?',
    answer: 'ASRI is a premier national research center dedicated to expanding the frontiers of human knowledge. Our core mandate is to perform breakthrough theoretical and experimental research in high-stakes fields: quantum computation, molecular therapeutics, advanced nanomaterials, and autonomous AI systems. We operate with an academic culture that prioritizes fundamental, long-term exploration over short-term commercial returns.',
    category: 'General'
  },
  {
    question: 'How are research projects funded at the Institute?',
    answer: 'Our research is powered by a diverse funding ecosystem: 60% via competitive national science grants and ministries, 25% from philanthropic endowments focused on pure discovery, and 15% through high-technology licensing agreements, patent transfers, and collaborative ventures with major aerospace and biomedical partners.',
    category: 'Funding'
  },
  {
    question: 'Can external scientists and post-doctorates join the research groups?',
    answer: 'Absolutely. ASRI hosts a robust Visiting Researchers Scheme allowing scientists to conduct fully-funded research for durations ranging from 3 to 12 months. We also offer 30 annual Senior Postdoctoral Fellowships with access to top-tier equipment like the Cryo-TEM and Helium Dilution refrigerators. Applications are peer-reviewed twice a year.',
    category: 'Careers'
  },
  {
    question: 'How do you approach technology transfer and patents?',
    answer: 'While ASRI’s main goal is open-access publications, we recognize that practical deployment of biotechnology and materials requires commercial structure. Our dedicated Technology Transfer Office (TTO) ensures patents are filed internationally to protect inventions, subsequently licensing them to industry leaders or helping researchers launch focused high-tech spin-off companies inside our Incubation Centre.',
    category: 'Innovation'
  }
];
