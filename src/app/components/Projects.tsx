import { motion } from 'framer-motion';
import ukmKemasanImg from '../../assets/UKMKemasan.webp';
import tegalEatsImg from '../../assets/TegalEats.webp';
import dompetGuaImg from '../../assets/DompetGua.webp';
import smartGroceriesImg from '../../assets/SmartGroceries.webp';
import rumahBalonTegalImg from '../../assets/RumahBalon.webp';
import seapediaImg from '../../assets/seapedia.png';

interface Project {
  title: string;
  category: string;
  description: string;
  tech: string[];
  image: string;
  live: string;
  size: 'featured' | 'wide' | 'tall' | 'standard';
}

export function Projects() {
  // Bento grid — setiap baris mengisi penuh 12 kolom agar rapi
  // Baris 1: featured(7) + tall(5) | Baris 2: tall(5) + featured(7) | Baris 3: wide(6) + wide(6)
  const projects: Project[] = [
    {
      title: 'UKM Kemasan ERP',
      category: 'ERP & POS System • 2024',
      description: 'A comprehensive ERP and POS system streamlining operations for SMEs with real-time inventory tracking and sales analytics.',
      tech: ['React', 'Node.js', 'PostgreSQL', 'Redux'],
      image: ukmKemasanImg,
      live: 'https://ukmkemasan-erp-frontend.vercel.app/portal',
      size: 'featured'
    },
    {
      title: 'WEATHER FORECAST',
      category: 'MERN • API',
      description: 'Real-time weather application featuring location-based forecasts and interactive data visualization.',
      tech: ['MERN Stack', 'OpenWeather API', 'Chart.js'],
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
      live: 'https://isweatherapp.netlify.app/',
      size: 'tall'
    },
    {
      title: 'DOMPET GUA',
      category: 'Fintech • 2024',
      description: 'Personal finance manager with intuitive expense tracking, budgeting tools, and financial health summaries.',
      tech: ['React', 'Framer Motion', 'Zustand'],
      image: dompetGuaImg,
      live: 'https://dompetgua.netlify.app/',
      size: 'featured'
    },
    {
      title: 'SMART GROCERIES',
      category: 'Market Analysis • 2025',
      description: 'A comprehensive market analysis platform for SMEs with real-time inventory tracking and sales analytics.',
      tech: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
      image: smartGroceriesImg,
      live: 'https://smart-groceries-dashboard.vercel.app/',
      size: 'tall'
    },
    {
      title: 'TEGAL EATS',
      category: 'Branding • 2024',
      description: 'A platform connecting foodies with the best local culinary spots in Tegal, featuring integrated maps and reviews.',
      tech: ['React', 'Firebase', 'Google Maps API'],
      image: tegalEatsImg,
      live: 'https://tegal-eats-uvfk.vercel.app',
      size: 'wide'
    },
    {
      title: 'RUMAH BALON TEGAL',
      category: 'Landing Page • 2026',
      description: 'Landing page for Rumah Balon Tegal, a balloon decoration service in Tegal.',
      tech: ['React', 'Tailwind CSS'],
      image: rumahBalonTegalImg,
      live: 'https://rumahbalontgl.vercel.app/',
      size: 'wide'
    },
    {
      title: 'SEAPEDIA',
      category: 'E-Commerce • 2026',
      description: 'E-commerce multirole platform.',
      tech: ['React', 'TypeScript', 'Tailwind CSS', 'Express.js', 'Postgree', 'Neon'],
      image: seapediaImg,
      live: 'https://seapedia-frontend-three.vercel.app/',
      size: 'wide'
    }
  ];

  const sizeClasses: Record<Project['size'], string> = {
    featured: 'md:col-span-7',
    wide: 'md:col-span-6',
    tall: 'md:col-span-5',
    standard: 'md:col-span-4'
  };

  return (
    <section id="work" className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-24 py-10 sm:py-16 md:py-24">
      <header className="mb-8 sm:mb-10 md:mb-16">
        <div className="flex flex-col gap-3 sm:gap-4 max-w-3xl">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
            <span className="label-mono text-primary tracking-[0.3em] uppercase">
              Featured Projects
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-black leading-tight">
            Engineering digital <span className="accent-serif">experiences</span> that scale.
          </h2>
          <p className="text-[15px] text-black/55 md:text-base max-w-lg leading-relaxed">
            A curated selection of products, platforms, and experiences I've engineered from
            concept to deployment.
          </p>
        </div>
      </header>

      {/* Bento Grid — setiap baris mengisi 12 kolom */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: index * 0.06 }}
            className={`group relative flex flex-col overflow-hidden rounded-[2rem] border border-black/5 glass-card hover:bg-black transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl hover:shadow-black/15 ${sizeClasses[project.size]
              }`}
          >
            {/* Image fills the whole card */}
            <div className="absolute inset-0 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0 group-hover:opacity-30 opacity-90"
              />
              {/* Dark overlay that strengthens on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent group-hover:from-black/95 group-hover:via-black/70 group-hover:to-black/40 transition-all duration-500"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col justify-end h-full min-h-[300px] md:min-h-[360px] p-5 sm:p-6 md:p-7">
              {/* Top row: category + live link (always visible) */}
              <div className="flex items-start justify-between mb-auto">
                <span className="inline-block px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 text-[10px] font-bold tracking-widest text-white uppercase">
                  {project.category}
                </span>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.title} live preview`}
                  className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 flex items-center justify-center text-white transition-all duration-300 hover:bg-white hover:text-black active:scale-95"
                >
                  <span className="material-symbols-outlined text-xl">launch</span>
                </a>
              </div>

              {/* Bottom content */}
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 md:mb-3">
                  {project.title}
                </h3>
                <p className="font-body-md text-white/80 text-sm mb-4 md:mb-5 line-clamp-3 md:line-clamp-none leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-md text-[10px] font-medium bg-white/10 backdrop-blur-sm border border-white/15 text-white/90 uppercase tracking-tight"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Mini CTA */}
      <section className="mt-12 sm:mt-16 md:mt-24">
        <div className="glass-card rounded-[1.5rem] sm:rounded-3xl p-5 sm:p-6 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 border-primary/10">
          <div className="max-w-xl text-center lg:text-left">
            <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-black mb-3 sm:mb-4">
              Interested in <span className="accent-serif">collaborating</span>?
            </h2>
            <p className="text-[15px] text-black/55 md:text-base leading-relaxed">
              I'm always looking for new challenges and interesting projects to work on.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
            <a
              href="#contact"
              className="bg-black text-white border border-black px-8 py-3.5 rounded-xl font-label-md hover:bg-white hover:text-black transition-all duration-300 ease-out active:scale-95 text-center touch-target"
            >
              LET'S TALK
            </a>
            <a
              href="/assets/NayetIftanafi_Resume.pdf"
              className="glass-card px-8 py-3.5 rounded-xl font-label-md text-black border border-black/10 hover:bg-black hover:text-white transition-all duration-300 ease-out active:scale-95 text-center touch-target"
            >
              VIEW RESUME
            </a>
          </div>
        </div>
      </section>
    </section>
  );
}
