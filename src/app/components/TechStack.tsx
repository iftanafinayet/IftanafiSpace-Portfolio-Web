import { motion } from 'framer-motion';

export function TechStack() {
  const categories = [
    {
      label: 'Frontend',
      skills: ['React', 'TypeScript', 'Tailwind CSS', 'JavaScript', 'PHP']
    },
    {
      label: 'Backend',
      skills: ['Node.js', 'Express', 'MongoDB', 'MySQL', 'REST API']
    },
    {
      label: 'Tools & Others',
      skills: ['Git', 'Docker', 'Firebase', 'Figma']
    }
  ];

  // Combined for the marquee
  const allSkills = [...categories[0].skills, ...categories[1].skills, ...categories[2].skills];

  return (
    <section className="py-24 overflow-hidden bg-black/50">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-24 mb-16">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
              <span className="font-label-sm text-primary tracking-[0.3em] uppercase">The Toolkit</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Tech Stack & <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Ecosystem</span>
            </h2>
          </div>
          <p className="text-on-surface-variant/70 max-w-sm font-body-md leading-relaxed">
            A comprehensive set of modern technologies and tools I use to build high-performance, scalable digital solutions.
          </p>
        </div>
      </div>

      {/* Auto Marquee Section */}
      <div className="relative flex flex-col gap-8">
        {/* Row 1: Moving Right */}
        <div className="flex overflow-hidden select-none">
          <motion.div 
            className="flex flex-nowrap gap-6 min-w-full"
            animate={{ x: [0, -1000] }}
            transition={{ 
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 25,
                ease: "linear",
              }
            }}
          >
            {[...allSkills, ...allSkills, ...allSkills].map((skill, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 px-8 py-4 glass-card rounded-2xl border-white/5 flex items-center gap-3 group hover:border-primary/30 transition-colors"
              >
                <span className="w-2 h-2 rounded-full bg-primary/40 group-hover:bg-primary transition-colors"></span>
                <span className="text-lg font-medium text-white/70 group-hover:text-white transition-colors uppercase tracking-widest">{skill}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Row 2: Moving Left */}
        <div className="flex overflow-hidden select-none">
          <motion.div 
            className="flex flex-nowrap gap-6 min-w-full"
            animate={{ x: [-1000, 0] }}
            transition={{ 
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              }
            }}
          >
            {[...allSkills, ...allSkills, ...allSkills].reverse().map((skill, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 px-8 py-4 glass-card rounded-2xl border-white/5 flex items-center gap-3 group hover:border-primary/30 transition-colors"
              >
                <span className="w-2 h-2 rounded-full bg-secondary/40 group-hover:bg-secondary transition-colors"></span>
                <span className="text-lg font-medium text-white/70 group-hover:text-white transition-colors uppercase tracking-widest">{skill}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Categorized View */}
      <div className="max-w-[1440px] mx-auto px-8 lg:px-24 mt-32 grid grid-cols-1 md:grid-cols-3 gap-16">
        {categories.map((cat, index) => (
          <div key={index} className="space-y-8">
            <h4 className="text-primary font-bold tracking-[0.3em] text-sm uppercase border-b border-primary/20 pb-4 block w-full">
              {cat.label}
            </h4>
            <div className="flex flex-col gap-4">
              {cat.skills.map((skill, i) => (
                <span key={i} className="text-2xl md:text-4xl font-bold text-white/40 hover:text-white transition-all duration-300 cursor-default hover:translate-x-2 inline-block">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
