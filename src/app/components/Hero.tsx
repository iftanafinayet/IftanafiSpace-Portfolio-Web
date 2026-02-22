import { Github, Linkedin, Mail, Download } from 'lucide-react';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-6xl w-full">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center md:text-left">
            <div className="backdrop-blur-xl bg-white/5 rounded-3xl p-8 md:p-10 border border-white/20 shadow-2xl">
              <p className="text-white/70 text-lg mb-3">Hello, I'm</p>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
                Nayet Iftanafi
              </h1>
              <h2 className="text-2xl md:text-3xl text-white/90 mb-6">
                Full Stack Developer
              </h2>
              <p className="text-lg text-white/70 mb-8 leading-relaxed max-w-2xl">
                I'm a passionate developer focused on building modern web applications 
                with clean code and beautiful user interfaces. MERN stack enthusiast with a love for learning new technologies and creating impactful projects.
              </p>

              <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-8">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="px-8 py-3 rounded-full bg-white text-slate-900 font-semibold hover:bg-white/90 transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  Contact Me
                </button>
              </div>

              <div className="flex gap-4 justify-center md:justify-start">
                <a
                  href="https://github.com/iftanafinayet"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="backdrop-blur-md bg-white/10 hover:bg-white/20 p-3 rounded-full border border-white/30 transition-all duration-300 hover:scale-110"
                >
                  <Github className="w-6 h-6 text-white" />
                </a>
                <a
                  href="https://www.linkedin.com/in/nayet-iftanafi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="backdrop-blur-md bg-white/10 hover:bg-white/20 p-3 rounded-full border border-white/30 transition-all duration-300 hover:scale-110"
                >
                  <Linkedin className="w-6 h-6 text-white" />
                </a>
                <a
                  href="mailto:iftanafinayet18@gmail.com"
                  className="backdrop-blur-md bg-white/10 hover:bg-white/20 p-3 rounded-full border border-white/30 transition-all duration-300 hover:scale-110"
                >
                  <Mail className="w-6 h-6 text-white" />
                </a>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex-1 flex justify-center">
            <div className="relative">
                <div className="w-72 h-72 md:w-96 md:h-96 rounded-full backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl overflow-hidden relative group">
                  {/* Layer Glassmorphism di atas foto (opsional, untuk efek mewah) */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent z-10 pointer-events-none"></div>
                  
                  <img 
                    src="/fotoprofile.jpeg" // Ganti dengan path foto di folder public atau src
                    alt="Nayet Iftanafi"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              {/* Decorative rings */}
              <div className="absolute -inset-4 rounded-full border-2 border-white/20 animate-pulse"></div>
              <div className="absolute -inset-8 rounded-full border border-white/10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
