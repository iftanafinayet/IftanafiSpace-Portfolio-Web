import { motion } from 'framer-motion';

export function TechStack() {
  const categories = [
    {
      label: 'Frontend',
      icon: 'code',
      skills: ['React', 'JavaScript', 'Tailwind CSS', 'Flutter'],
    },
    {
      label: 'Backend',
      icon: 'dns',
      skills: ['Node.js', 'Express', 'MongoDB', 'MySQL', 'REST API'],
    },
    {
      label: 'Tools & Others',
      icon: 'handyman',
      skills: ['Git', 'Docker', 'Firebase', 'Figma'],
    },
  ];

  // Combined for the marquee — duplicated twice for a seamless loop
  const allSkills = [...categories[0].skills, ...categories[1].skills, ...categories[2].skills];
  const marqueeRow = [...allSkills, ...allSkills];

  return (
    <section className="py-12 sm:py-16 md:py-24 overflow-hidden bg-neutral-100">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-24 mb-8 sm:mb-12 md:mb-16">
        <div className="flex flex-col items-start md:flex-row md:justify-between md:items-end gap-6 sm:gap-8">
          <div>
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
              <span className="label-mono text-primary tracking-[0.3em] uppercase">The Toolkit</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-black leading-tight">
              Tech Stack & <br />
              <span className="accent-serif">Ecosystem</span>
            </h2>
          </div>
          <p className="text-[15px] text-black/55 md:text-base max-w-sm leading-relaxed">
            A comprehensive set of modern technologies and tools I use to build high-performance, scalable digital solutions.
          </p>
        </div>
      </div>

      {/* Single Marquee Row — mobile */}
      <div className="relative flex flex-col gap-4 sm:gap-5 md:gap-8">
        {/* Row 1: Moving Right */}
        <div className="flex overflow-hidden select-none">
          <motion.div
            className="flex flex-nowrap w-max"
            animate={{ x: ['0%', '-50%'] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              }
            }}
          >
            {marqueeRow.map((skill, index) => (
              <div
                key={index}
                className="flex-shrink-0 mr-4 md:mr-6 px-5 py-3 md:px-8 md:py-4 glass-card rounded-2xl border-black/5 flex items-center gap-3 group hover:bg-black transition-colors duration-300 ease-out"
              >
                <span className="w-2 h-2 rounded-full bg-black/40 group-hover:bg-white transition-colors"></span>
                <span className="text-sm md:text-lg font-medium text-black group-hover:text-white transition-colors uppercase tracking-widest">{skill}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Row 2: Moving Left */}
        <div className="flex overflow-hidden select-none">
          <motion.div
            className="flex flex-nowrap w-max"
            animate={{ x: ['-50%', '0%'] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 36,
                ease: "linear",
              }
            }}
          >
            {[...marqueeRow].reverse().map((skill, index) => (
              <div
                key={index}
                className="flex-shrink-0 mr-4 md:mr-6 px-5 py-3 md:px-8 md:py-4 glass-card rounded-2xl border-black/5 flex items-center gap-3 group hover:bg-black transition-colors duration-300 ease-out"
              >
                <span className="w-2 h-2 rounded-full bg-black/40 group-hover:bg-white transition-colors"></span>
                <span className="text-sm md:text-lg font-medium text-black group-hover:text-white transition-colors uppercase tracking-widest">{skill}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Categorized View */}
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-24 mt-10 sm:mt-12 md:mt-32 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
        {categories.map((cat, catIndex) => (
          <motion.div
            key={cat.label}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: catIndex * 0.1 }}
            className="glass-card rounded-[1.5rem] p-6 md:p-8 border-black/5 group hover:bg-black transition-colors duration-300"
          >
            {/* Category header */}
            <div className="flex items-center justify-between mb-6 md:mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-black/5 border border-black/10 flex items-center justify-center group-hover:bg-white/10 group-hover:border-white/20 transition-colors">
                  <span className="material-symbols-outlined text-black group-hover:text-white text-xl transition-colors">
                    {cat.icon}
                  </span>
                </div>
                <h4 className="text-primary group-hover:text-white text-sm font-bold tracking-[0.3em] uppercase transition-colors">
                  {cat.label}
                </h4>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-black/5 border border-black/10 text-[11px] font-mono-num font-semibold text-black/50 group-hover:bg-white/10 group-hover:border-white/20 group-hover:text-white/50 transition-colors tabular-nums">
                {cat.skills.length}
              </span>
            </div>

            {/* Skills list */}
            <div className="flex flex-col gap-0.5">
              {cat.skills.map((skill, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 py-2.5 px-3 -mx-3 rounded-xl hover:bg-white/50 group-hover:hover:bg-white/5 transition-colors cursor-default"
                >
                  <span className="text-[11px] font-mono-num font-medium text-black/35 group-hover:text-white/35 tabular-nums">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="font-['Poppins'] text-base md:text-xl font-bold text-black group-hover:text-white transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
