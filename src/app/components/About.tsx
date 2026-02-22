import { Code2, Briefcase, GraduationCap, Award } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export function About() {
  const stats = [
    { icon: Briefcase, value: '1+', label: 'Years Experience' },
    { icon: Code2, value: '10+', label: 'Projects Completed' },
    { icon: Award, value: '10+', label: 'Technologies' },
    { icon: GraduationCap, value: '-', label: 'Client Satisfaction' },
  ];

  return (
    <section id="about" className="py-20 px-6">
        <ScrollReveal>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-white mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="backdrop-blur-xl bg-white/5 rounded-3xl p-8 border border-white/20 shadow-xl hover:bg-white/10 transition-all duration-300">
            <h3 className="text-2xl font-bold text-white mb-4">Who I Am</h3>
            <p className="text-white/80 leading-relaxed mb-4">
              I'm a Full Stack Developer with a passion for creating elegant solutions 
              to complex problems. With expertise in modern web technologies, I build 
              responsive and user-friendly applications that make a difference.
            </p>
            <p className="text-white/80 leading-relaxed">
              My journey in web development started 1 years ago, and since then, 
              I've been constantly learning and improving my skills to stay up-to-date 
              with the latest technologies and best practices.
            </p>
          </div>

          <div className="backdrop-blur-xl bg-white/5 rounded-3xl p-8 border border-white/20 shadow-xl hover:bg-white/10 transition-all duration-300">
            <h3 className="text-2xl font-bold text-white mb-4">What I Do</h3>
            <p className="text-white/80 leading-relaxed mb-4">
              I specialize in building full-stack web applications using React, Node.js, 
              and modern cloud technologies. From concept to deployment, I handle every 
              aspect of the development process.
            </p>
            <p className="text-white/80 leading-relaxed">
              Whether it's creating a beautiful user interface, developing robust backend 
              systems, or optimizing application performance, I'm committed to delivering 
              high-quality solutions that exceed expectations.
            </p>
          </div>

  
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="backdrop-blur-xl bg-white/5 rounded-2xl p-6 border border-white/20 shadow-xl hover:bg-white/10 transition-all duration-300 hover:scale-105 text-center"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-white/10 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-white/70 text-sm">{stat.label}</div>
              </div>
            );
          })}
        </div>

      </div>
      </ScrollReveal>
    </section>
  );
}
