import { 
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiJavascript, 
  SiNodedotjs, SiExpress, SiPython, SiMongodb, SiPostgresql, SiMysql,
  SiDocker, SiAmazonwebservices, SiFirebase, SiFigma, SiPhp,  } from 'react-icons/si';
import { TbApi } from 'react-icons/tb';
import { FaGitAlt } from 'react-icons/fa';
import { ScrollReveal } from './ScrollReveal';

export function TechStack() {
  const technologies = [
  {
    category: 'Frontend',
    items: [
      { name: 'React', icon: <SiReact className="text-[#61DAFB]" /> },
      { name: 'TypeScript', icon: <SiTypescript className="text-[#3178C6]" /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-[#06B6D4]" /> },
      { name: 'JavaScript', icon: <SiJavascript className="text-[#F7DF1E]" /> },
      { name: 'PHP', icon: <SiPhp className="text-[#777BB4]" /> },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node.js', icon: <SiNodedotjs className="text-[#339933]" /> },
      { name: 'Express', icon: <SiExpress className="text-white" /> },
      { name: 'MongoDB', icon: <SiMongodb className="text-[#47A248]" /> },
      { name: 'MySQL', icon: <SiMysql className="text-[#336791]" /> },
      { name: 'REST API', icon: <TbApi className="text-gray-400" /> },
    ],
  },
  {
    category: 'Tools & Others',
    items: [
      { name: 'Git', icon: <FaGitAlt className="text-[#F05032]" /> },
      { name: 'Docker', icon: <SiDocker className="text-[#2496ED]" /> },
      { name: 'Firebase', icon: <SiFirebase className="text-[#FFCA28]" /> },
      { name: 'Figma', icon: <SiFigma className="text-[#F24E1E]" /> },

    ],
  },
];

  return (
    <section id="tech-stack" className="py-20 px-6">
    <ScrollReveal>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Tech Stack
          </h2>
          <div className="w-20 h-1 bg-white mx-auto rounded-full"></div>
          <p className="text-white/70 mt-4 text-lg">
            Technologies I work with
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="backdrop-blur-xl bg-white/5 rounded-3xl p-8 border border-white/20 shadow-xl hover:bg-white/10 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                {tech.category}
              </h3>
              <div className="space-y-4">
                {tech.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="backdrop-blur-md bg-white/5 rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{item.icon}</span>
                      <span className="text-white font-semibold">{item.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      </ScrollReveal>
    </section>
  );
}
