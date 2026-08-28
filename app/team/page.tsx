import React from 'react';

const LEADERSHIP_FACULTY = [
  {
    name: 'Dr T Sasipraba',
    role: 'Chief Coordinator | Director (Innovation)',
    email: 'director.innovation@sathyabama.ac.in',
    photo: '/Images/Team/Dr_T_Sasipraba.jpg',
  },
  {
    name: 'Dr S Preethi',
    role: 'Coordinator | Associate Professor (Research)',
    email: 'preethi.s.irc@sathyabama.ac.in',
    photo: '/Images/Team/Dr_S_Preethi.jpg',
  },
  {
    name: 'Dr Kathiravan S',
    role: 'Co-Coordinator | Assistant Professor (Research)',
    email: 'kathiravan.s.irc@sathyabama.ac.in',
    photo: '/Images/Team/Dr_Kathiravan_S.png',
  },
  {
    name: 'Dr Sony Varghese',
    role: 'Tech Guru | Assistant Professor (Research)',
    email: 'sonyvarghese.irc@sathyabama.ac.in',
    photo: '/Images/Team/Dr_Sony_Varghese.jpg',
  },
  {
    name: 'Dr Azhagarsamy P',
    role: 'Assistant Professor (Research)',
    email: 'azhagarsamy.p.irc@sathyabama.ac.in',
    photo: '/Images/Team/Dr_Azhagarsamy_P.jpg',
  },
  {
    name: 'Dr Mohan Kumar K',
    role: 'Assistant Professor (Research)',
    email: 'mohankumar.k.irc@sathyabama.ac.in',
    photo: '/Images/Team/Dr_Mohan_Kumar_K.png',
  },
  {
    name: 'Mr Jayendran U',
    role: 'Scientific Assistant',
    email: 'jayenbioinfo@gmail.com',
    photo: '/Images/Team/Mr_Jayendran_U.jpg',
  },
];

const STUDENT_AMBASSADORS = [
  {
    name: 'Mr. Sarveash S',
    description: 'B.E., Second Year (Computer Science and Engineering CSE DS)',
    photo: '/Images/Team/Mr_Sarveash_S.jpg',
  },
  {
    name: 'Ms. Kamaley',
    description: 'B.E., Second Year (Computer Science and Engineering CSE DS)',
    photo: '/Images/Team/Ms_Kamaley.jpg',
  },
  {
    name: 'Mr. Sanjay',
    description: 'B.E., Second Year (Computer Science and Engineering CSE AI-ML)',
    photo: '/Images/Team/Mr_Sanjay.B.L.jpg',
  },
  {
    name: 'Ms. R Harsha',
    description: 'B.E., Second Year (Computer Science and Engineering CSE AI-ML)',
    photo: '/Images/Team/R_Harsha.jpg',
  },
  {
    name: 'Mr. Shyam Prasath S',
    description: 'B.E., Second Year (Computer Science and Engineering CSE AI-ML)',
    photo: '/Images/Team/Shyam_Prasath_S.jpg',
  },
  {
    name: 'Mr. Naveenkumar S',
    description: 'B.E., Second Year (Computer Science and Engineering CSE AI-ML)',
    photo: '/Images/Team/Mr_Naveenkumar.jpg',
  },
  {
    name: 'Mr. ABISHEK C',
    description: 'B.E., Third Year (ECE)',
    photo: '/Images/Team/ABISHEKC.jpg',
  },
  {
    name: 'Mr. S. VISHAL',
    description: 'B.E., Second Year (Aeronautical)',
    photo: '/Images/Team/S_VISHAL.jpeg',
  },
  {
    name: 'Ms. S. JENITA',
    description: 'B.E., Second Year (Aeronautical)',
    photo: '/Images/Team/S_JENITA.jpeg',
  },
];

export default function TeamPage() {
  return (
    <div id="team-view" className="bg-[#F4F4F2] text-slate-800">
      {/* SECTION 1: LEADERSHIP & FACULTY MENTORS */}
      <section id="leadership-faculty" className="py-24 bg-white border-b border-slate-200 px-8 md:px-16 lg:px-24 w-full">
        <div className="w-full">
          <div className="mb-10">
            <h1 className="text-[30px] font-extrabold leading-[1.1] text-[#831238] tracking-tight">
              Leadership &amp; Faculty Mentors
            </h1>
          </div>

          <div className="overflow-x-auto border border-slate-300 bg-white">
            <table className="w-full text-left border-collapse border border-slate-300">
              <thead>
                <tr className="bg-[#831238] text-white font-sans text-sm font-semibold tracking-wider">
                  <th className="py-4 px-6 w-52 sm:w-60 border border-slate-300 uppercase text-center">
                    Name
                  </th>
                  <th className="py-4 px-6 border border-slate-300 uppercase text-center">
                    Designation / Role
                  </th>
                  <th className="py-4 px-6 w-60 sm:w-72 border border-slate-300 uppercase text-center">
                    Email
                  </th>
                  <th className="py-4 px-6 w-32 sm:w-40 border border-slate-300 uppercase text-center">
                    Photo
                  </th>
                </tr>
              </thead>
              <tbody className="font-sans text-sm divide-y divide-slate-300">
                {LEADERSHIP_FACULTY.map((member, index) => (
                  <tr
                    key={index}
                    className="hover:bg-slate-50 transition-colors duration-150"
                  >
                    <td className="py-5 px-6 font-semibold text-slate-900 border border-slate-300 align-middle text-center whitespace-nowrap">
                      {member.name}
                    </td>
                    <td className="py-5 px-6 text-slate-700 border border-slate-300 align-middle leading-relaxed text-center sm:text-left">
                      {member.role}
                    </td>
                    <td className="py-5 px-6 text-slate-700 border border-slate-300 align-middle text-center">
                      <a
                        href={`mailto:${member.email}`}
                        className="text-[#831238] hover:underline font-medium break-all"
                      >
                        {member.email}
                      </a>
                    </td>
                    <td className="py-4 px-6 border border-slate-300 align-middle text-center">
                      {member.photo ? (
                        <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-full overflow-hidden border-2 border-slate-200 shadow-sm bg-slate-50">
                          <img
                            src={member.photo}
                            alt={member.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ) : (
                        <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-full bg-slate-100 border-2 border-dashed border-slate-300 flex items-center justify-center text-slate-400">
                          <span className="text-[10px] font-sans font-medium text-slate-400">Photo</span>
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SECTION 2: STUDENT AMBASSADORS */}
      <section id="student-ambassadors" className="py-24 bg-white border-b border-slate-200 px-8 md:px-16 lg:px-24 w-full">
        <div className="w-full">
          <div className="mb-10">
            <h2 className="text-[30px] font-extrabold leading-[1.1] text-[#831238] tracking-tight">
              Student Ambassadors
            </h2>
          </div>

          <div className="overflow-x-auto border border-slate-300 bg-white">
            <table className="w-full text-left border-collapse border border-slate-300">
              <thead>
                <tr className="bg-[#831238] text-white font-sans text-sm font-semibold tracking-wider">
                  <th className="py-4 px-6 w-52 sm:w-60 border border-slate-300 uppercase text-center">
                    Name
                  </th>
                  <th className="py-4 px-6 border border-slate-300 uppercase text-center">
                    Department &amp; Year
                  </th>
                  <th className="py-4 px-6 w-32 sm:w-40 border border-slate-300 uppercase text-center">
                    Photo
                  </th>
                </tr>
              </thead>
              <tbody className="font-sans text-sm divide-y divide-slate-300">
                {STUDENT_AMBASSADORS.map((student, index) => (
                  <tr
                    key={index}
                    className="hover:bg-slate-50 transition-colors duration-150"
                  >
                    <td className="py-5 px-6 font-semibold text-slate-900 border border-slate-300 align-middle text-center whitespace-nowrap">
                      {student.name}
                    </td>
                    <td className="py-5 px-6 text-slate-700 border border-slate-300 align-middle leading-relaxed text-center sm:text-left">
                      {student.description}
                    </td>
                    <td className="py-4 px-6 border border-slate-300 align-middle text-center">
                      {student.photo ? (
                        <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-full overflow-hidden border-2 border-slate-200 shadow-sm bg-slate-50">
                          <img
                            src={student.photo}
                            alt={student.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ) : (
                        <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-full bg-slate-100 border-2 border-dashed border-slate-300 flex items-center justify-center text-slate-400">
                          <span className="text-[10px] font-sans font-medium text-slate-400">Photo</span>
                        </div>
                      )}
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
