'use client';

import React from 'react';

const EVENTS_ANNOUNCEMENTS = [
  {
    title: 'Open Day for School Students 5 th August 2026',
    description:
      'Conducted workshop for Vikas Mantra CBSE Affiliated School for students of 11th and 12th. The workshop provided an overview of advanced digital fabrication tools such as CO₂ Laser Cutter , 3D Printer and a demonstration of IOT Project.',
  },
  {
    title: 'Awareness Workshop for industry 21-22 August 2026',
    description:
      'A dedicated industry outreach workshop was organised to showcase the capabilities and facilities available at the AICTE IDEA LAB . Representatives from various industries were introduced to advanced digital fabrication technologies.',
  },
];

export default function EventsAndAnnouncementsPage() {
  return (
    <div id="events-and-announcements-view" className="bg-[#F4F4F2] text-slate-800 w-full overflow-hidden">
      {/* SECTION 1: EVENTS & ANNOUNCEMENTS */}
      <section id="events-announcements" className="py-14 sm:py-20 md:py-24 bg-white border-b border-slate-200 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24 w-full">
        <div className="w-full max-w-7xl 2xl:max-w-[1536px] mx-auto">
          <div className="mb-6 sm:mb-10">
            <h1 className="text-2xl sm:text-[28px] md:text-[30px] font-extrabold leading-[1.1] text-[#831238] tracking-tight">
              Events &amp; Announcements
            </h1>
          </div>

          <div className="overflow-x-auto border border-slate-300 bg-white rounded-lg shadow-sm w-full">
            <table className="w-full text-left border-collapse border border-slate-300 min-w-[500px]">
              <thead>
                <tr className="bg-[#831238] text-white font-sans text-xs sm:text-sm font-semibold tracking-wider">
                  <th className="py-3 sm:py-4 px-3.5 sm:px-6 w-44 sm:w-64 border border-slate-300 uppercase text-center">
                    Title
                  </th>
                  <th className="py-3 sm:py-4 px-3.5 sm:px-6 border border-slate-300 uppercase text-center">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody className="font-sans text-xs sm:text-sm divide-y divide-slate-300">
                {EVENTS_ANNOUNCEMENTS.map((item, index) => (
                  <tr
                    key={index}
                    className="hover:bg-slate-50 transition-colors duration-150"
                  >
                    <td className="py-3.5 sm:py-5 px-3.5 sm:px-6 font-semibold text-slate-900 border border-slate-300 align-middle text-center whitespace-normal">
                      {item.title}
                    </td>
                    <td className="py-3.5 sm:py-5 px-3.5 sm:px-6 text-slate-700 border border-slate-300 align-middle leading-relaxed text-justify sm:text-left">
                      {item.description}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
