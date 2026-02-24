import { Code2, Briefcase, GraduationCap, Award } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import CountUp from './CountUp';

export function About() {
  const stats = [
    { icon: Briefcase, value: '1+', label: 'Years Experience' },
    { icon: Code2, value: '10+', label: 'Projects Completed' },
    { icon: Award, value: '10+', label: 'Technologies' },
    { icon: GraduationCap, value: '-', label: 'Client Satisfaction' },
  ];

  return (
    <section id="about" className="py-20 px-6 relative">
      <ScrollReveal>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              About Me
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full shadow-[0_0_15px_rgba(37,99,235,0.5)]"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Box: Who I Am */}
            <div className="backdrop-blur-xl bg-white/5 rounded-3xl p-8 border border-white/10 shadow-2xl hover:bg-white/[0.08] transition-all duration-300 group">
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">Who I Am</h3>
              <p className="text-white/60 leading-relaxed mb-4">
                I'm a Full Stack Developer with a passion for creating elegant solutions 
                to complex problems. With expertise in modern web technologies, I build 
                responsive and user-friendly applications that make a difference.
              </p>
              <p className="text-white/60 leading-relaxed">
                My journey in web development started 1 years ago, and since then, 
                I've been constantly learning and improving my skills to stay up-to-date 
                with the latest technologies.
              </p>
            </div>

            {/* Box: What I Do */}
            <div className="backdrop-blur-xl bg-white/5 rounded-3xl p-8 border border-white/10 shadow-2xl hover:bg-white/[0.08] transition-all duration-300 group">
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">What I Do</h3>
              <p className="text-white/60 leading-relaxed mb-4">
                I specialize in building full-stack web applications using React, Node.js, 
                and modern cloud technologies. From concept to deployment, I handle every 
                aspect of the development process.
              </p>
              <p className="text-white/60 leading-relaxed">
                Whether it's creating a beautiful user interface or developing robust backend 
                systems, I'm committed to delivering high-quality solutions.
              </p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              
              // Logika deteksi angka
              const hasNumber = /\d/.test(stat.value);
              const numericValue = hasNumber ? parseInt(stat.value.replace(/[^0-9]/g, "")) : 0;
              const suffix = stat.value.replace(/[0-9]/g, "");

              return (
                <div
                  key={index}
                  className="backdrop-blur-xl bg-white/5 rounded-2xl p-6 border border-white/10 shadow-xl hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 text-center group"
                >
                  <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-blue-600 transition-all duration-500">
                    <Icon className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                  </div>
                  
                  <div className="text-3xl font-bold text-white mb-1 flex justify-center items-baseline gap-0.5">
                    {hasNumber ? (
                      <>
                        <CountUp
                          to={numericValue}
                          duration={10}
                          className="text-white"
                        />
                        <span className="text-blue-500">{suffix}</span>
                      </>
                    ) : (
                      <span className="text-white">{stat.value}</span>
                    )}
                  </div>
                  <div className="text-white/30 text-[10px] font-black uppercase tracking-[0.2em]">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}