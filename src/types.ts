export type PageType = 'home' | 'about' | 'about-us' | 'research' | 'scientists' | 'facilities' | 'innovation' | 'resources' | 'contact';

export interface Discovery {
  year: string;
  title: string;
  description: string;
  category: string;
  impact: string;
  investigator: string;
  stats: string;
}

export interface Publication {
  title: string;
  authors: string;
  journal: string;
  year: string;
  citations: number;
  doi: string;
  downloadUrl: string;
  abstract: string;
  category: string;
  image?: string;
}

export interface Laboratory {
  id: string;
  name: string;
  image: string;
  head: string;
  focus: string;
  description: string;
  equipment: string[];
  ongoingProjectsCount: number;
}

export interface Scientist {
  name: string;
  role: 'director' | 'pi' | 'senior' | 'associate' | 'fellow' | 'visitor' | 'advisor';
  title: string;
  photo: string;
  bio: string;
  interests: string[];
  publications: string[];
  awards: string[];
  email: string;
  orcid: string;
}

export interface Equipment {
  name: string;
  type: string;
  specs: string;
  description: string;
  image: string;
  status: 'Operational' | 'Calibrating' | 'Upgrading';
}

export interface Patent {
  title: string;
  inventors: string;
  number: string;
  year: string;
  description: string;
  status: 'Granted' | 'Pending';
}

export interface ResearchProject {
  title: string;
  status: 'ongoing' | 'completed' | 'future';
  domain: string;
  lead: string;
  description: string;
  funding: string;
  duration: string;
  objective: string;
}

export interface NewsEvent {
  id: string;
  type: 'news' | 'event' | 'workshop' | 'conference';
  title: string;
  date: string;
  location: string;
  description: string;
  image: string;
  registrationUrl?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}
