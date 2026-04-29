export function Projects() {
  const projects = [
    {
      title: 'UKM KEMASAN ERP',
      category: 'ERP & POS System • 2024',
      description: 'A comprehensive ERP and POS system streamlining operations for SMEs with real-time inventory tracking and sales analytics.',
      tech: ['React', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'Redux'],
      image: '/assets/UKMKemasan.png',
      live: 'https://ukmkemasan-erp-frontend.vercel.app/portal',
      large: true
    },
    {
      title: 'WEATHER FORECAST',
      category: 'MERN • API',
      description: 'Real-time weather application featuring location-based forecasts and interactive data visualization.',
      tech: ['MERN Stack', 'OpenWeather API', 'Chart.js'],
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
      live: 'https://isweatherapp.netlify.app/',
      large: false
    },
    {
      title: 'TEGAL EATS',
      category: 'Branding • 2024',
      description: 'A platform connecting foodies with the best local culinary spots in Tegal, featuring integrated maps and reviews.',
      tech: ['React', 'Firebase', 'Google Maps API'],
      image: '/assets/TegalEats.png',
      live: 'https://tegal-eats.vercel.app/',
      large: false
    },
    {
      title: 'DOMPET GUA',
      category: 'Fintech • 2024',
      description: 'Personal finance manager with intuitive expense tracking, budgeting tools, and financial health summaries.',
      tech: ['React', 'Framer Motion', 'Zustand', 'Glassmorphism'],
      image: '/assets/DompetGua.png',
      live: 'https://dompetgua.netlify.app/',
      large: true
    },
    {
      title: 'SMART GROCERIES',
      category: 'Market Analysis • 2025',
      description: 'A comprehensive market analysis platform for SMEs with real-time inventory tracking and sales analytics.',
      tech: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS', 'Redux'],
      image: '/assets/SmartGroceries.png',
      live: 'https://smart-groceries-dashboard.vercel.app/',
      large: false
    }
  ];

  return (
    <section id="work" className="max-w-[1400px] mx-auto px-6 py-16">
      <header className="mb-12">
        <div className="flex flex-col gap-4 max-w-3xl">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse shadow-[0_0_8px_rgba(208,188,255,0.6)]"></span>
            <span className="font-label-sm text-primary tracking-[0.2em] uppercase">Featured Projects</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Engineering digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">experiences</span> that scale.
          </h2>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`group flex flex-col ${project.large ? 'md:col-span-8' : 'md:col-span-4'}`}
          >
            <div className="glass-card rounded-2xl overflow-hidden flex flex-col h-full border-white/5 hover:border-primary/20 transition-all duration-300">
              <div className={`relative overflow-hidden ${project.large ? 'aspect-[21/9]' : 'aspect-video'}`}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>

              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-[10px] font-bold tracking-widest text-primary/80 uppercase mb-1 block">{project.category}</span>
                    <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">{project.title}</h3>
                  </div>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full glass-card hover:bg-primary hover:text-on-primary transition-colors"
                  >
                    <span className="material-symbols-outlined text-xl">north_east</span>
                  </a>
                </div>

                <p className="font-body-md text-on-surface-variant/80 text-sm mb-6 line-clamp-2">
                  {project.description}
                </p>

                <div className="mt-auto flex flex-wrap gap-2">
                  {project.tech.map((t, i) => (
                    <span key={i} className="px-3 py-1 rounded-md text-[10px] font-medium bg-white/5 text-white/50 border border-white/10 uppercase tracking-tight">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Mini CTA */}
      <section className="mt-20">
        <div className="glass-card rounded-3xl p-10 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-8 border-primary/10">
          <div className="max-w-xl text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Interested in <span className="text-primary italic">collaborating</span>?</h2>
            <p className="text-on-surface-variant/70">I'm always looking for new challenges and interesting projects to work on.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            < a href="#contact" className="bg-primary text-on-primary px-8 py-3.5 rounded-xl font-semibold hover:opacity-90 transition-all">
              LET'S TALK
            </a>
            < a href="/assets/NayetIftanafi_Resume.pdf" className="glass-card px-8 py-3.5 rounded-xl font-semibold text-white border-white/10 hover:bg-white/5 transition-all">
              VIEW RESUME
            </a>
          </div>
        </div>
      </section>
    </section>
  );
}
