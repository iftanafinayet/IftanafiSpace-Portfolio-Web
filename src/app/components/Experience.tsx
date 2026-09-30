import { motion } from 'framer-motion';

export const Experience = () => {
  const experiences = [
    {
      year: '2023 — 2024',
      title: 'Head of Logistics and Artistic',
      company: 'Lathi Production',
      location: 'Tegal, Indonesia',
      description: 'Orchestrated the technical and creative backbone of major school theatrical productions. Managed a cross-functional team of 20+ members, overseeing everything from stage design and lighting to procurement and vendor relations.',
      achievements: [
        'Directed artistic concepts for full-scale productions with 150+ audience members.',
        'Optimized procurement processes, reducing production costs by 15% through strategic negotiation.',
        'Streamlined event logistics using digital tracking tools for equipment and inventory management.'
      ],
      tags: ['Leadership', 'Art Direction', 'Project Management']
    },
    {
      year: '2024 — 2025',
      title: 'Head of Entrepreneurship Department',
      company: 'CCIT Student Society FTUI',
      location: 'Depok, Indonesia',
      description: 'Leading the strategic vision for student-led business initiatives within the Faculty of Engineering, University of Indonesia. Focused on bridge-building between academic technical skills and real-world market demands.',
      achievements: [
        'Make a selling product for CCIT Student Society FTUI',
        'Organized entrepreneurship Department to make a selling product for CCIT Student Society FTUI',
        'Design a merchandise for CCIT Student Society FTUI'
      ],
      tags: ['Strategy', 'Mentorship', 'Business Development']
    },
    {
      year: '2025',
      title: 'Speaker at Indonesia Coffee Roasting Championship',
      company: 'UKM Kemasan',
      location: 'Jakarta, Indonesia',
      description: 'Selected as a key speaker at one of Indonesia\'s premier specialty coffee events. Represented the growing creative economy of Tegal City, focusing on the intersection of traditional industries and digital transformation.',
      achievements: [
        'Presented a case study on "UKM Kemasan" and its role in modernizing local MSME packaging.',
        'Engaged with 100+ industry professionals on topics of sustainable supply chains and digital branding.',
        'Showcased how digital ERP solutions (like the UKM Kemasan ERP) can revolutionize traditional craft sectors.'
      ],
      tags: ['Public Speaking', 'Market Analysis', 'MSME Advocacy']
    },
    {
      year: '2025',
      title: 'Sales and Marketing',
      company: 'UKM Kemasan',
      location: 'Jakarta, Indonesia',
      description: 'Responsible for managing the sales and marketing of UKM Kemasan, a company that produces packaging for UMKM accros Coffee Industry',
      achievements: [
        'Upscale the sales accros Coffee industry in Indonesia',
        'Build a strong relationship with coffee roasters and cafes',
        'Collaborate with the design team to create innovative packaging designs'
      ],
      tags: ['Sales', 'Marketing', 'Business Development']
    },
    {
      year: '2026',
      title: 'System Analyst',
      company: 'PT. Amanah Karya Indonesia',
      location: 'Depok, Indonesia',
      description: 'Responsible for making Test Cases and User Manual for the company\'s software',
      achievements: [
        'Make a Test Cases and User Manual for the company\'s software',
        'Make an Automation Testing using Playwright and Chromium',
        'Make an User Acceptance Testing Document'
      ],
      tags: ['System Analyst', 'Test Cases', 'User Manual', 'Automation Testing', 'User Acceptance Testing']
    },
    {
      year: '2026',
      title: 'Web Developer',
      company: 'CSS FTUI',
      location: 'Depok, Indonesia',
      description: 'Responsible for developing the CSS FTUI realtime voting using supabase and nextjs',
      achievements: [
        'Develop a realtime voting system using supabase and nextjs',
        'Make an responsive design for the website',
        'Make an realtime dashboard for the website'
      ],
      tags: ['Web Developer', 'Responsive Design', 'Realtime Dashboard']
    }
  ];

  return (
    <section id="process" className="px-5 sm:px-6 py-12 sm:py-16 md:py-24 max-w-[1400px] mx-auto">
      <div className="flex flex-col lg:flex-row gap-8 sm:gap-10 md:gap-16">
        {/* Left Column: Sticky Header */}
        <div className="lg:w-1/3">
          <div className="lg:sticky lg:top-32 space-y-4 sm:space-y-6">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
              <span className="label-mono text-black/45">My Path</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-black leading-tight">
              Journey & <br />
              <span className="accent-serif">Trajectory</span>
            </h2>
            <p className="text-[15px] text-black/55 md:text-base leading-relaxed max-w-sm">
              A timeline of my professional growth, leadership roles, and contributions to the creative and technical ecosystem.
            </p>

            {/* Mini stats */}
            <div className="flex gap-6 sm:gap-8 pt-2 sm:pt-4">
              <div>
                <p className="font-['Poppins'] text-xl sm:text-2xl font-bold text-black">4</p>
                <p className="text-[10px] font-medium text-black/45 tracking-[0.2em] uppercase mt-1">Roles Held</p>
              </div>
              <div>
                <p className="font-['Poppins'] text-xl sm:text-2xl font-bold text-black">3</p>
                <p className="text-[10px] font-medium text-black/45 tracking-[0.2em] uppercase mt-1">Organizations</p>
              </div>
            </div>

            <div className="pt-4 sm:pt-8 hidden lg:block">
              <div className="w-px h-16 sm:h-32 bg-gradient-to-b from-primary/50 to-transparent ml-1"></div>
            </div>
          </div>
        </div>

        {/* Right Column: Timeline Items */}
        <div className="lg:w-2/3 relative">
          {/* Vertical timeline line (desktop) */}
          <div className="hidden lg:block absolute left-0 top-2 bottom-2 w-px bg-black/10"></div>

          <div className="space-y-5 sm:space-y-8 md:space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.55, delay: index * 0.05 }}
                className="relative lg:pl-12 group"
              >
                {/* Timeline node */}
                <div className="hidden lg:flex absolute left-0 top-8 -translate-x-1/2 flex-col items-center gap-2">
                  <span className="w-3.5 h-3.5 rounded-full border-2 border-black/20 bg-white group-hover:bg-black transition-colors duration-300"></span>
                </div>

                <div className="glass-card rounded-[1.5rem] sm:rounded-[2rem] p-4 sm:p-5 md:p-10 border-black/5 group-hover:bg-black transition-all duration-300 ease-out group-hover:-translate-y-1 group-hover:shadow-xl group-hover:shadow-black/15 relative overflow-hidden">
                  {/* Numbered index badge */}
                  <span className="absolute top-4 right-4 sm:top-5 sm:right-5 md:top-6 md:right-8 font-['Geist_Mono'] text-xs font-bold text-black/30 group-hover:text-white/40 transition-colors">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="flex flex-col md:flex-row justify-between items-start gap-4 sm:gap-6 mb-5 sm:mb-8">
                    <div className="space-y-2 sm:space-y-3">
                      <span className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary group-hover:bg-white/10 group-hover:border-white/20 group-hover:text-white text-[10px] sm:text-xs font-bold tracking-widest uppercase transition-colors">
                        {exp.year}
                      </span>
                      <h3 className="text-lg sm:text-xl md:text-3xl font-bold text-black group-hover:text-white transition-colors">
                        {exp.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-black group-hover:text-white/70 font-label-md transition-colors text-xs sm:text-sm">
                        <span className="material-symbols-outlined text-base text-primary group-hover:text-white/70 transition-colors">business</span>
                        <span className="uppercase tracking-wider">{exp.company}</span>
                        <span className="w-1 h-1 bg-black/20 group-hover:bg-white/40 rounded-full transition-colors"></span>
                        <span className="material-symbols-outlined text-base">location_on</span>
                        <span>{exp.location}</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 shrink-0">
                      {exp.tags.map((tag, i) => (
                        <span key={i} className="text-[10px] text-black group-hover:text-white/70 border border-black/10 group-hover:border-white/20 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md uppercase tracking-tighter transition-colors">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4 sm:space-y-6">
                    <p className="text-black group-hover:text-white/90 font-body-md leading-relaxed text-sm sm:text-base md:text-lg italic border-l-2 border-primary/30 group-hover:border-white/40 pl-4 sm:pl-6 py-1 transition-colors">
                      "{exp.description}"
                    </p>

                    <div className="grid grid-cols-1 gap-3 sm:gap-4 pt-2 sm:pt-4">
                      {exp.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-start gap-3 sm:gap-4">
                          <div className="mt-2 w-1.5 h-1.5 rounded-full bg-primary group-hover:bg-white flex-shrink-0 transition-colors"></div>
                          <p className="text-black group-hover:text-white/80 text-xs sm:text-sm leading-relaxed transition-colors">{achievement}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
