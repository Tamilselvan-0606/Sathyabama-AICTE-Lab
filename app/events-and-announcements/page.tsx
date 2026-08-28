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
    <div id="events-and-announcements-view" className="bg-[#F4F4F2] text-slate-800">
      {/* SECTION 1: EVENTS & ANNOUNCEMENTS */}
      <section id="events-announcements" className="py-24 bg-white border-b border-slate-200 px-8 md:px-16 lg:px-24 w-full">
        <div className="w-full">
          <div className="mb-10">
            <h1 className="text-[30px] font-extrabold leading-[1.1] text-[#831238] tracking-tight">
              Events &amp; Announcements
            </h1>
          </div>

          <div className="overflow-x-auto border border-slate-300 bg-white">
            <table className="w-full text-left border-collapse border border-slate-300">
              <thead>
                <tr className="bg-[#831238] text-white font-sans text-sm font-semibold tracking-wider">
                  <th className="py-4 px-6 w-56 sm:w-72 border border-slate-300 uppercase text-center">
                    Title
                  </th>
                  <th className="py-4 px-6 border border-slate-300 uppercase text-center">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody className="font-sans text-sm divide-y divide-slate-300">
                {EVENTS_ANNOUNCEMENTS.map((item, index) => (
                  <tr
                    key={index}
                    className="hover:bg-slate-50 transition-colors duration-150"
                  >
                    <td className="py-5 px-6 font-semibold text-slate-900 border border-slate-300 align-middle text-center whitespace-normal">
                      {item.title}
                    </td>
                    <td className="py-5 px-6 text-slate-700 border border-slate-300 align-middle leading-relaxed text-justify sm:text-left">
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
