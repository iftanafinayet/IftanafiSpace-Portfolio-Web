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
      description: 'Responsible for managing the sales and marketing of UKM Kemasan, a company that produces packaging for UMKM accros Coffee Industy',
      achievements: [
        'Upscale the sales accros Coffee industry in Indonesia',
        'Build a strong relationship with coffee roasters and cafes',
        'Collaborate with the design team to create innovative packaging designs'
      ],
      tags: ['Sales', 'Marketing', 'Business Development']
    }
  ];

  return (
    <section id="process" className="max-w-[1400px] mx-auto px-6 py-24">
      <div className="flex flex-col lg:flex-row gap-16">
        {/* Left Column: Sticky Header */}
        <div className="lg:w-1/3">
          <div className="lg:sticky lg:top-32 space-y-6">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
              <span className="font-label-sm text-primary tracking-[0.3em] uppercase">My Path</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Journey & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Trajectory</span>
            </h2>
            <p className="text-on-surface-variant/70 font-body-md leading-relaxed max-w-sm">
              A timeline of my professional growth, leadership roles, and contributions to the creative and technical ecosystem.
            </p>
            <div className="pt-8 hidden lg:block">
              <div className="w-px h-32 bg-gradient-to-b from-primary/50 to-transparent ml-1"></div>
            </div>
          </div>
        </div>

        {/* Right Column: Timeline Items */}
        <div className="lg:w-2/3 space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative group">
              <div className="glass-card rounded-[2rem] p-8 md:p-10 border-white/5 hover:border-primary/20 transition-all duration-500 hover:bg-white/[0.03]">
                <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-8">
                  <div className="space-y-2">
                    <span className="inline-block px-4 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-widest uppercase">
                      {exp.year}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-primary transition-colors">
                      {exp.title}
                    </h3>
                    <div className="flex items-center gap-2 text-on-surface-variant/60 font-label-md">
                      <span className="uppercase tracking-wider">{exp.company}</span>
                      <span className="w-1 h-1 bg-white/20 rounded-full"></span>
                      <span>{exp.location}</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    {exp.tags.map((tag, i) => (
                      <span key={i} className="text-[10px] text-white/30 border border-white/10 px-2 py-1 rounded-md uppercase tracking-tighter">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-6">
                  <p className="text-on-surface-variant/80 font-body-md leading-relaxed text-lg italic border-l-2 border-primary/30 pl-6 py-1">
                    "{exp.description}"
                  </p>

                  <div className="grid grid-cols-1 gap-4 pt-4">
                    {exp.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-start gap-4">
                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 shadow-[0_0_8px_rgba(208,188,255,0.4)]"></div>
                        <p className="text-on-surface-variant/70 text-sm leading-relaxed">{achievement}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
