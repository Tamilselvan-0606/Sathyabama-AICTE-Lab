'use client';

import React from 'react';
import {
  Globe,
  Sparkles,
  Users,
} from 'lucide-react';

const ONGOING_PROJECTS = [
  {
    title: 'Project 1',
    description:
      "Development of an IoT-based patient monitoring system to continuously track patients' health parameters. It sends real-time data and alerts to healthcare professionals for timely medical support by Dr Kathiravan S, Sarvesh, S Shyam Prasath , SP Kamaly , R Harsha",
  },
  {
    title: 'Project 2',
    description:
      'Development and Testing of Conductive Filament for Additive Manufacturing using In-House Built Filament Maker guiding by Dr Sony Varghese',
  },
  {
    title: 'Project 3',
    description:
      'Development of an IoT-based attendance system using RFID to automatically record and manage attendance. It stores attendance data in the cloud for easy access and monitoring.Dr Kathiravan S, Sarvesh,S Shyam Prasath , SP Kamaly , R Harsha',
  },
  {
    title: 'Project 4',
    description:
      'Development of an AI-Powered Computer Vision System for Automated Defect Detection in FDM 3D Printed Parts guiding by Dr K Mohan Kumar',
  },
  {
    title: 'Project 5',
    description:
      'Design and Development of Modular 3D Printed Fixtures and Jigs for Manufacturing Applications guiding by Dr Azhagar Samy P',
  },
];

const TRAINING_PROGRAMS = [
  {
    title: 'Training Program 1',
    description:
      'Dr Kathiravan S and Dr Mohan Kumar conducted One Day Orientation Program on Additive & Subtractive Manufacturing sponsored by SATHYABAMA AICTE IDEA Lab ON 10th April 2026 at SATHYABAMA AICTE IDEA Lab, Sathyabama Institute of Science and Technology Chennai.',
  },
];

const EVENT_TRAINING_SCHEDULES = [
  {
    title: 'FDP (06 Days)',
    description:
      'Faculty needs to be trained on equipment, to be able to guide students and conduct events- including those fromother institutions.',
    target: 'Faculty (20)',
    frequency: 'Twice in a year',
  },
  {
    title: 'Skilling Programs (06 Days)',
    description:
      'Training in areas like electrical and electronics fabrication, embedded systems design. Embedded programming, 3D printing, robotics, welding, IOT, Machine learning, Al, bio-engineering, biomedical etc.',
    target: 'Students (20-30)',
    frequency: 'One per quarter',
  },
  {
    title: 'Boot camps (12 Days)',
    description:
      'Training of faculty (including those from other institutions, spread over few weeks, continuing at workplaces, ifrequired.',
    target: 'Faculty (05-10)',
    frequency: 'Twice a year',
  },
  {
    title: 'Ideation workshops (03-05 Days)',
    description:
      'To generate ideas on which students can work in the IDEA Lab, including field visits.',
    target: 'Students (30-40)',
    frequency: 'Once in three months',
  },
  {
    title: 'Awareness Workshops for Industry (02 Days)',
    description:
      'Publicizing IDEA Lab amongindustries, to encourage them to use the facilities.',
    target: 'Industry participants (5-10)',
    frequency: 'Once in three months',
  },
  {
    title: 'Internships (2 to 6 months)',
    description:
      'For hands-on training as part of their course-work during summer and winter vacations. Internships based on industry problems should be preferred.',
    target: 'Students (15-20)',
    frequency: 'As per curriculum',
  },
  {
    title: 'Professional Skilling Programs (12 Days)',
    description: 'Welding, 3D printing, mechanical fabrication. etc.',
    target: 'ITI students or class 10/12 pass students (5-10)',
    frequency: 'Once in a quarter',
  },
  {
    title: 'School Teachers Awareness Program (06 Days)',
    description:
      'Demonstration and providing hands-on experience of facilities.',
    target: 'Teachers of nearby schools',
    frequency: 'Twice a year during school vacations',
  },
  {
    title: 'Projects by School students',
    description: 'Opportunity for school students to do projects.',
    target: 'Students identified by schools (10-15)',
    frequency: 'Once a year as per convenience',
  },
  {
    title: 'Open Day for school students (one day)',
    description:
      'Exposure to facilities in IDEA Lab to ignite their minds (on Science Day/ Technology Day/Teachers Day/ Engineers Day).',
    target: 'Students (class XI-XII) nominated by schools (25-30)',
    frequency: 'Once a year as per convenience',
  },
];

export default function ResearchAndTrainingPage() {

  return (
    <div id="research-and-training-view" className="bg-[#F4F4F2] text-slate-800">
      {/* SECTION 1: ONGOING PROJECTS */}
      <section id="ongoing-projects" className="py-24 bg-white border-b border-slate-200 px-8 md:px-16 lg:px-24 w-full">
        <div className="w-full">
          <div className="mb-10">
            <h2 className="text-[30px] font-extrabold leading-[1.1] text-[#831238] tracking-tight">
              Ongoing Projects
            </h2>
          </div>

          <div className="overflow-x-auto border border-slate-300 bg-white">
            <table className="w-full text-left border-collapse border border-slate-300">
              <thead>
                <tr className="bg-[#831238] text-white font-sans text-sm font-semibold tracking-wider">
                  <th className="py-4 px-6 w-44 sm:w-56 border border-slate-300 uppercase text-center">
                    Title
                  </th>
                  <th className="py-4 px-6 border border-slate-300 uppercase text-center">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody className="font-sans text-sm divide-y divide-slate-300">
                {ONGOING_PROJECTS.map((project, index) => (
                  <tr
                    key={index}
                    className="hover:bg-slate-50 transition-colors duration-150"
                  >
                    <td className="py-5 px-6 font-semibold text-slate-900 border border-slate-300 align-middle text-center whitespace-nowrap">
                      {project.title}
                    </td>
                    <td className="py-5 px-6 text-slate-700 border border-slate-300 align-middle leading-relaxed text-justify sm:text-left">
                      {project.description}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SECTION 2: TRAINING PROGRAMS */}
      <section id="training-programs" className="py-24 bg-[#F4F4F2] border-b border-slate-200 px-8 md:px-16 lg:px-24 w-full">
        <div className="w-full">
          <div className="mb-10">
            <h2 className="text-[30px] font-extrabold leading-[1.1] text-[#831238] tracking-tight">
              Training Programs
            </h2>
          </div>

          <div className="overflow-x-auto border border-slate-300 bg-white">
            <table className="w-full text-left border-collapse border border-slate-300">
              <thead>
                <tr className="bg-[#831238] text-white font-sans text-sm font-semibold tracking-wider">
                  <th className="py-4 px-6 w-44 sm:w-56 border border-slate-300 uppercase text-center">
                    Title
                  </th>
                  <th className="py-4 px-6 border border-slate-300 uppercase text-center">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody className="font-sans text-sm divide-y divide-slate-300">
                {TRAINING_PROGRAMS.map((program, index) => (
                  <tr
                    key={index}
                    className="hover:bg-slate-50 transition-colors duration-150"
                  >
                    <td className="py-5 px-6 font-semibold text-slate-900 border border-slate-300 align-middle text-center whitespace-nowrap">
                      {program.title}
                    </td>
                    <td className="py-5 px-6 text-slate-700 border border-slate-300 align-middle leading-relaxed text-justify sm:text-left">
                      {program.description}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SECTION 3: EVENT & TRAINING SCHEDULES */}
      <section id="event-training-schedules" className="py-24 bg-white border-b border-slate-200 px-8 md:px-16 lg:px-24 w-full">
        <div className="w-full">
          <div className="mb-10">
            <h2 className="text-[30px] font-extrabold leading-[1.1] text-[#831238] tracking-tight">
              Event &amp; Training Schedules
            </h2>
          </div>

          <div className="overflow-x-auto border border-slate-300 bg-white">
            <table className="w-full text-left border-collapse border border-slate-300">
              <thead>
                <tr className="bg-[#831238] text-white font-sans text-sm font-semibold tracking-wider">
                  <th className="py-4 px-6 w-48 sm:w-56 border border-slate-300 uppercase text-center">
                    Title
                  </th>
                  <th className="py-4 px-6 min-w-[280px] border border-slate-300 uppercase text-center">
                    Description
                  </th>
                  <th className="py-4 px-6 w-44 sm:w-56 border border-slate-300 uppercase text-center">
                    Target
                  </th>
                  <th className="py-4 px-6 w-40 sm:w-48 border border-slate-300 uppercase text-center">
                    Frequency
                  </th>
                </tr>
              </thead>
              <tbody className="font-sans text-sm divide-y divide-slate-300">
                {EVENT_TRAINING_SCHEDULES.map((event, index) => (
                  <tr
                    key={index}
                    className="hover:bg-slate-50 transition-colors duration-150"
                  >
                    <td className="py-5 px-6 font-semibold text-slate-900 border border-slate-300 align-middle text-center whitespace-normal">
                      {event.title}
                    </td>
                    <td className="py-5 px-6 text-slate-700 border border-slate-300 align-middle leading-relaxed text-justify sm:text-left">
                      {event.description}
                    </td>
                    <td className="py-5 px-6 font-medium text-slate-800 border border-slate-300 align-middle text-center">
                      {event.target}
                    </td>
                    <td className="py-5 px-6 font-medium text-slate-800 border border-slate-300 align-middle text-center">
                      {event.frequency}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SECTION 4: OPERATIONAL HOURS / LAB SCHEDULE */}
      <section id="operational-hours" className="py-24 bg-[#F4F4F2] border-t border-slate-200 px-8 md:px-16 lg:px-24 w-full">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7 space-y-8">
            <h2 className="font-serif text-[30px] font-extrabold italic text-[#831238] leading-[1.1] tracking-tight">
              Operational Hours
            </h2>
            <p className="text-sm md:text-base text-slate-600 leading-relaxed font-sans text-justify">
              The Sathyabama AICTE IDEA Lab is open for students and faculty every day from 9:00 AM to 11:00 PM. The lab hours are flexible and can be extended based on the demand and requirements of students and faculty. During special events, competitions, hackathons, and intensive project development sessions, the lab remains accessible 24 hours a day, 7 days a week.
            </p>
          </div>
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-md bg-gradient-to-br from-[#831238] via-[#700d2e] to-[#550821] rounded-2xl p-6 sm:p-7 shadow-xl border border-white/15 backdrop-blur-md overflow-hidden relative">
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-amber-400/10 rounded-full blur-2xl pointer-events-none" />

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
                <div className="flex items-center gap-3.5 p-3 rounded-xl bg-white/[0.04] border border-white/5 hover:bg-white/[0.08] transition-colors">
                  <div className="p-2.5 rounded-lg bg-white/10 text-amber-300 shrink-0 border border-white/10">
                    <Globe className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-sans text-[11px] text-white/50 uppercase tracking-wider font-medium">Daily Hours</p>
                    <p className="font-sans font-bold text-white text-sm sm:text-base tracking-tight">9:00 AM – 11:00 PM</p>
                  </div>
                </div>

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
    </div>
  );
}
