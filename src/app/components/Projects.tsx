import ukmKemasanImg from '../../assets/UKMKemasan.png';
import tegalEatsImg from '../../assets/TegalEats.png';
import dompetGuaImg from '../../assets/DompetGua.png';
import smartGroceriesImg from '../../assets/SmartGroceries.png';
import rumahBalonTegalImg from '../../assets/RumahBalon.jpg';

export function Projects() {
  const projects = [
    {
      title: 'UKM KEMASAN ERP',
      category: 'ERP & POS System • 2024',
      description: 'A comprehensive ERP and POS system streamlining operations for SMEs with real-time inventory tracking and sales analytics.',
      tech: ['React', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'Redux'],
      image: ukmKemasanImg,
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
      image: tegalEatsImg,
      live: 'https://tegal-eats-uvfk.vercel.app',
      large: false
    },
    {
      title: 'DOMPET GUA',
      category: 'Fintech • 2024',
      description: 'Personal finance manager with intuitive expense tracking, budgeting tools, and financial health summaries.',
      tech: ['React', 'Framer Motion', 'Zustand', 'Glassmorphism'],
      image: dompetGuaImg,
      live: 'https://dompetgua.netlify.app/',
      large: true
    },
    {
      title: 'SMART GROCERIES',
      category: 'Market Analysis • 2025',
      description: 'A comprehensive market analysis platform for SMEs with real-time inventory tracking and sales analytics.',
      tech: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS', 'Redux'],
      image: smartGroceriesImg,
      live: 'https://smart-groceries-dashboard.vercel.app/',
      large: false
    },
    {
      title: 'RUMAH BALON TEGAL',
      category: 'Landing Page • 2026',
      description: 'Landing page for Rumah Balon Tegal, a balloon decoration service in Tegal.',
      tech: ['React', 'Tailwind CSS'],
      image: rumahBalonTegalImg,
      live: 'https://rumahbalontgl.vercel.app/',
      large: false
    }
  ];

  return (
    <section id="work" className="max-w-[1400px] mx-auto px-6 py-16">
      <header className="mb-12">
        <div className="flex flex-col gap-4 max-w-3xl">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse shadow-[0_0_8px_rgba(0,0,0,0.2)]"></span>
            <span className="font-label-sm text-primary tracking-[0.2em] uppercase">Featured Projects</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-black leading-tight">
            Engineering digital <span className="text-black">experiences</span> that scale.
          </h2>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`group flex flex-col ${project.large ? 'md:col-span-8' : 'md:col-span-4'}`}
          >
            <div className="glass-card rounded-2xl overflow-hidden flex flex-col h-full border-black/5 group-hover:bg-black transition-colors duration-300">
              <div className={`relative overflow-hidden ${project.large ? 'aspect-[21/9]' : 'aspect-video'}`}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-colors duration-300 group-hover:scale-105 opacity-80 group-hover:opacity-100 filter grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>

              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-[10px] font-bold tracking-widest text-black group-hover:text-white/60 uppercase mb-1 block transition-colors">{project.category}</span>
                    <h3 className="text-2xl font-bold text-black group-hover:text-white transition-colors">{project.title}</h3>
                  </div>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full glass-card group-hover:bg-white group-hover:text-black transition-colors"
                  >
                    <span className="material-symbols-outlined text-xl">north_east</span>
                  </a>
                </div>

                <p className="font-body-md text-black group-hover:text-white/80 text-sm mb-6 line-clamp-2 transition-colors">
                  {project.description}
                </p>

                <div className="mt-auto flex flex-wrap gap-2">
                  {project.tech.map((t, i) => (
                    <span key={i} className="px-3 py-1 rounded-md text-[10px] font-medium bg-black/5 text-black border border-black/10 group-hover:bg-white/10 group-hover:text-white group-hover:border-white/20 uppercase tracking-tight transition-colors">
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
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Interested in <span className="text-primary italic">collaborating</span>?</h2>
            <p className="text-black">I'm always looking for new challenges and interesting projects to work on.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            < a href="#contact" className="bg-black text-white border border-black px-8 py-3.5 rounded-xl font-semibold hover:bg-white hover:text-black transition-colors duration-200">
              LET'S TALK
            </a>
            < a href="/assets/NayetIftanafi_Resume.pdf" className="glass-card px-8 py-3.5 rounded-xl font-semibold text-black border-black/10 hover:bg-black hover:text-white transition-colors duration-200">
              VIEW RESUME
            </a>
          </div>
        </div>
      </section>
    </section>
  );
}
