import React from 'react';
import { ScrollReveal } from './ScrollReveal';

const experiences = [
  {
    year: '2023-2024',
    title: 'Head of Logistics and Artistic at Lathi Production',
    location: 'SMA Negeri 1 Tegal • Tegal, Indonesia',
    description: [
      'Led logistics and artistic direction for school Teaters events and productions.',
      'Team management and leadership.',
      'Organized and executed successful events, including the annual school Teaters production.',
    ]
  },
  {
    year: '2025-2025',
    title: 'Head of Entrepreneurship Department at CCIT Student Society FTUI',
    location: 'Fakultas Teknik Universitas Indonesia • Depok, Indonesia',
    description: [
      'Led the entrepreneurship department of the student society, fostering innovation.',
      'Selled merchandise and organized events to promote the society.',
      'Collaborated with other departments to create a vibrant community.',
    ]
  },
  {
    year: '2025',
    title: 'Speaker at Indonesia Coffee Roasting Championship 2025',
    location: 'Jakarta International Expo • Jakarta, Indonesia',
    description: [
      'Selected as a speaker to share insights about Indonesia Coffee scene.',
      'Represented UKM Kemasan from Tegal City in the event.',
      'Engaged with industry professionals and coffee enthusiasts.',
    ]
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-transparent text-white relative overflow-hidden">
      <ScrollReveal>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h2 className="text-4xl font-bold mb-16 flex items-center justify-center gap-4">
            <span className="opacity-80">⏱️</span> Experience
          </h2>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className="group flex flex-col md:flex-row gap-6 p-8 rounded-2xl 
                           /* Glassmorphism Core */
                           bg-white/5 border border-white/10 backdrop-blur-md 
                           /* Hover Effect */
                           hover:bg-white/10 hover:border-white/20 transition-all duration-300
                           shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]"
              >
                {/* Tahun */}
                <div className="md:w-1/4">
                  <span className="inline-block px-4 py-1.5 rounded-full bg-white text-black text-[10px] tracking-widest font-black uppercase shadow-lg shadow-white/10">
                    {exp.year}
                  </span>
                </div>

                {/* Detail Konten */}
                <div className="md:w-3/4">
                  <h3 className="text-2xl font-bold mb-2 leading-snug group-hover:text-white transition-colors">
                    {exp.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-6 flex items-center gap-2 italic">
                    <span className="text-white/50">📍</span> {exp.location}
                  </p>
                  <ul className="list-none space-y-3">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-300 text-sm leading-relaxed">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-white/50 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};