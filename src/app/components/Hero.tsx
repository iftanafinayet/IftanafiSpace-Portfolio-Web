export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center items-center px-6 pt-20 overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-violet-900/20 blur-[120px] rounded-full -z-10"></div>
      <div className="max-w-[1200px] w-full text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 glass-card rounded-full border-white/20">
          <span className="w-2 h-2 rounded-full bg-violet-500 shadow-[0_0_8px_rgba(139,92,246,0.8)]"></span>
          <span className="font-label-sm text-on-surface-variant uppercase tracking-widest">Available for select projects</span>
        </div>
        <h1 className="font-headline-xl text-white text-[clamp(48px,10vw,96px)] leading-[0.95] tracking-tighter mb-10">
          Nayet Iftanafi<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-primary-container">FULL STACK DEVELOPER</span>
        </h1>
        <p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto">
          Passionate developer focused on building modern web applications with clean code and beautiful user interfaces. MERN stack enthusiast with a love for learning new technologies and creating impactful projects.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          <a href="#work" className="px-8 py-4 rounded-xl bg-violet-600 text-white font-label-md hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] transition-all">
            View Portfolio
          </a>
          <a href="#process" className="px-8 py-4 rounded-xl glass-card border-violet-500/30 text-white font-label-md hover:bg-white/5 transition-all">
            Our Process
          </a>
        </div>
      </div>
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="font-label-sm uppercase tracking-[0.2em]">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-violet-500 to-transparent"></div>
      </div>
    </section>
  );
}
