import fotoProfile from '../../assets/fotoprofile.jpeg';

export function About() {
  return (
    <section id="about" className="max-w-[1440px] mx-auto px-8 lg:px-24 py-section-gap">
      {/* Hero Section */}
      <header className="flex flex-col md:flex-row gap-section-gap items-start mb-section-gap">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-6">
            <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
            <span className="font-label-sm text-primary tracking-[0.3em] uppercase">About Me</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
            A Full Stack Developer <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-primary-container">Creating Elegant Solutions</span>.
          </h2>
          <p className="text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
            I'm a Full Stack Developer with a passion for creating elegant solutions to complex problems. With expertise in modern web technologies, I build responsive and user-friendly applications that make a difference.
          </p>
        </div>
        <div className="w-full md:w-[400px] aspect-square rounded-2xl overflow-hidden glass-card p-2 relative group">
          <div className="absolute inset-0 bg-gradient-to-tr from-violet-500/20 to-transparent opacity-50"></div>
          <img
            src={fotoProfile}
            alt="Nayet Iftanafi"
            className="w-full h-full object-cover rounded-xl filter grayscale group-hover:grayscale-0 transition-all duration-700"
          />
        </div>
      </header>

      {/* Philosophy Section (Bento Grid) */}
      <section className="mb-section-gap">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">Core Philosophy</h2>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter h-auto md:h-[500px]">
          <div className="md:col-span-8 glass-card p-gutter rounded-2xl flex flex-col justify-end relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8">
              <span className="material-symbols-outlined text-primary text-4xl">architecture</span>
            </div>
            <div className="relative z-10">
              <h3 className="font-headline-md text-white mb-4">Scalable Architecture</h3>
              <p className="text-on-surface-variant max-w-lg font-body-md">Every line of code serves a purpose. I build robust systems that don't just look premium but are engineered for high-performance delivery and long-term stability.</p>
            </div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/5 blur-[80px] rounded-full"></div>
          </div>
          <div className="md:col-span-4 glass-card p-gutter rounded-2xl flex flex-col items-center justify-center text-center border-primary/20">
            <span className="material-symbols-outlined text-primary text-5xl mb-6">touch_app</span>
            <h3 className="font-headline-md text-white mb-2">User Experience (UX)</h3>
            <p className="text-on-surface-variant font-body-md">Technology should be invisible. I focus on intuitive interfaces that bridge the gap between complex logic and effortless user interaction.</p>
          </div>
          <div className="md:col-span-4 glass-card p-gutter rounded-2xl flex flex-col justify-between">
            <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center border border-white/10">
              <span className="material-symbols-outlined text-white">account_tree</span>
            </div>
            <div>
              <h3 className="font-headline-md text-white mb-2">System Logic</h3>
              <p className="text-on-surface-variant text-sm">Architecture decisions backed by structural efficiency and optimized data flows.</p>
            </div>
          </div>
          <div className="md:col-span-8 glass-card p-gutter rounded-2xl flex items-center gap-gutter overflow-hidden group">
            <div className="flex-1">
              <h3 className="font-headline-md text-white mb-2">Continuous Deployment</h3>
              <p className="text-on-surface-variant">Deployment is just the beginning. I believe in refining systems through constant testing and real-world feedback loops.</p>
            </div>
            <div className="w-1/3 h-full rounded-xl bg-surface-container relative overflow-hidden">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_HYMMz9g_OCjGNvG39F9DewGVXV5L7toxtmF27B2pHZHeEUqPMhAodtuIdSaZ7sOcaJlJHtPokFGnQRTu1LVd0jjvfmkTvExH_8W9iIYFFdOIECTnKxl-6_TbBSL3JX8f8FJrtqPrD5GVX2cUmM40II1jVdl3Amayw29vUuskqbsZQ6bJM_zWl640FhocdeO5nITHVHPsP9_75CZt3JLtXxxbCuWruV0zRgFJC2g2n9usHeBkeoYlGtVYYhoTJcQNN96o0pSeM38x"
                alt="Circuit board pattern"
                className="w-full h-full object-cover opacity-30 group-hover:opacity-60 transition-opacity"
              />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
