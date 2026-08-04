import { motion } from 'framer-motion';
import fotoProfile from '../../assets/fotoprofile.webp';

export function About() {
  return (
    <section id="about" className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-24 py-[2.5rem] sm:py-section-gap">
      {/* Hero Section */}
      <header className="flex flex-col md:flex-row gap-6 md:gap-section-gap items-start mb-8 md:mb-section-gap">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-6">
            <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
            <span className="font-label-sm text-primary tracking-[0.3em] uppercase">About Me</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-8 leading-tight">
            A Full Stack Developer <span className="text-black">Creating Elegant Solutions</span>.
          </h2>
          <p className="text-body-lg text-black max-w-2xl leading-relaxed">
            I'm a Full Stack Developer with a passion for creating elegant solutions to complex problems. With expertise in modern web technologies, I build responsive and user-friendly applications that make a difference.
          </p>
        </div>
        <div className="w-full md:w-[400px] aspect-square rounded-2xl overflow-hidden glass-card p-2 relative group">
          <div className="absolute inset-0 bg-gradient-to-tr from-black/5 to-transparent opacity-50"></div>
          <img
            src={fotoProfile}
            alt="Nayet Iftanafi"
            className="w-full h-full object-cover rounded-xl filter grayscale group-hover:grayscale-0 transition-colors duration-300"
          />
        </div>
      </header>

      {/* Philosophy Section (Bento Grid) */}
      <section className="mb-section-gap">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 md:mb-12">
          <div className="flex flex-col gap-4 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
              <span className="font-label-sm text-primary tracking-[0.3em] uppercase">Core Philosophy</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-black">
              Principles that guide every <span className="text-black italic">build</span>.
            </h2>
          </div>
          <p className="text-black/60 font-body-md max-w-sm leading-relaxed">
            Four pillars — from the first line of code to the final deploy — that shape how I design, build, and ship products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 md:auto-rows-fr md:h-[640px] gap-gutter">
          {/* Card 1 — Scalable Architecture (featured, spans 2 rows) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-7 md:row-span-2 group glass-card rounded-[2rem] overflow-hidden border-black/5 hover:bg-black transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl hover:shadow-black/15 p-gutter md:p-10 flex flex-col justify-between relative"
          >
            {/* Decorative dot grid (cross-fades on hover) */}
            <div className="absolute top-6 right-6 w-28 h-28 bg-[radial-gradient(circle,rgba(0,0,0,0.14)_1px,transparent_1px)] [background-size:14px_14px] opacity-100 group-hover:opacity-0 transition-opacity duration-300"></div>
            <div className="absolute top-6 right-6 w-28 h-28 bg-[radial-gradient(circle,rgba(255,255,255,0.25)_1px,transparent_1px)] [background-size:14px_14px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute bottom-0 right-0 w-72 h-72 bg-primary/5 blur-[80px] rounded-full group-hover:bg-white/10 transition-colors duration-300"></div>

            <div className="flex items-start justify-between relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-black/5 border border-black/10 flex items-center justify-center group-hover:bg-white/10 group-hover:border-white/20 transition-colors">
                <span className="material-symbols-outlined text-black text-3xl group-hover:text-white transition-colors">architecture</span>
              </div>
              <span className="font-['Space_Grotesk'] text-sm font-bold text-black/30 group-hover:text-white/40 transition-colors">01</span>
            </div>

            <div className="relative z-10">
              <h3 className="font-headline-md text-black mb-4 group-hover:text-white transition-colors">Scalable Architecture</h3>
              <p className="text-black font-body-md max-w-lg group-hover:text-white/80 transition-colors">
                Every line of code serves a purpose. I build robust systems that don't just look premium but are engineered for high-performance delivery and long-term stability.
              </p>
            </div>

            <div className="relative z-10 flex flex-wrap gap-2">
              {['High Performance', 'Long-term Stability', 'Clean Code'].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 rounded-full border border-black/10 bg-black/5 text-xs font-medium text-black/70 group-hover:border-white/20 group-hover:bg-white/10 group-hover:text-white/80 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Layered stack visual */}
            <div className="absolute bottom-6 right-6 hidden md:flex flex-col gap-1.5 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-40 h-3 rounded-md bg-black/10 group-hover:bg-white/20 transition-colors"></div>
              <div className="w-40 h-3 rounded-md bg-black/10 group-hover:bg-white/20 transition-colors ml-4"></div>
              <div className="w-40 h-3 rounded-md bg-black/10 group-hover:bg-white/20 transition-colors ml-8"></div>
            </div>
          </motion.div>

          {/* Card 2 — User Experience (tall, centered) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-5 md:row-span-2 group glass-card rounded-[2rem] overflow-hidden border-black/5 hover:bg-black transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl hover:shadow-black/15 p-gutter md:p-8 flex flex-col relative"
          >
            <span className="absolute top-6 right-8 font-['Space_Grotesk'] text-sm font-bold text-black/30 group-hover:text-white/40 transition-colors">02</span>

            <div className="flex-1 flex flex-col items-center justify-center text-center py-6">
              <div className="relative mb-6">
                <div className="absolute inset-0 rounded-full bg-primary/10 blur-2xl scale-150 group-hover:bg-white/15 transition-colors"></div>
                <span className="material-symbols-outlined text-primary text-6xl group-hover:text-white transition-colors relative">touch_app</span>
              </div>
              <h3 className="font-headline-md text-black mb-3 group-hover:text-white transition-colors">User Experience (UX)</h3>
              <p className="text-black font-body-md max-w-xs group-hover:text-white/80 transition-colors">
                Technology should be invisible. I focus on intuitive interfaces that bridge the gap between complex logic and effortless user interaction.
              </p>
            </div>

            <div className="relative z-10 flex items-center justify-center gap-3 pt-4">
              <span className="h-px w-8 bg-black/15 group-hover:bg-white/25 transition-colors"></span>
              <span className="text-[10px] font-semibold tracking-[0.25em] uppercase text-black/40 group-hover:text-white/50 transition-colors">Human-centered by design</span>
              <span className="h-px w-8 bg-black/15 group-hover:bg-white/25 transition-colors"></span>
            </div>
          </motion.div>

          {/* Card 3 — System Logic (compact) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-5 group glass-card rounded-[2rem] overflow-hidden border-black/5 hover:bg-black transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl hover:shadow-black/15 p-gutter md:p-6 flex items-center justify-between gap-4 relative"
          >
            <div className="flex items-center gap-4 min-w-0">
              <div className="w-12 h-12 rounded-xl bg-black/5 border border-black/10 flex items-center justify-center shrink-0 group-hover:bg-white/10 group-hover:border-white/20 transition-colors">
                <span className="material-symbols-outlined text-black group-hover:text-white transition-colors">account_tree</span>
              </div>
              <div className="min-w-0">
                <h3 className="font-headline-md text-black mb-1 group-hover:text-white transition-colors">System Logic</h3>
                <p className="text-black font-body-md text-sm group-hover:text-white/80 transition-colors">
                  Architecture decisions backed by structural efficiency and optimized data flows.
                </p>
              </div>
            </div>
            <span className="font-['Space_Grotesk'] text-sm font-bold text-black/30 group-hover:text-white/40 transition-colors shrink-0">03</span>
          </motion.div>

          {/* Card 4 — Continuous Deployment (wide) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:col-span-7 group glass-card rounded-[2rem] overflow-hidden border-black/5 hover:bg-black transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl hover:shadow-black/15 p-gutter md:p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
          >
            <div className="flex items-start gap-4 min-w-0">
              <div className="w-12 h-12 rounded-xl bg-black/5 border border-black/10 flex items-center justify-center shrink-0 group-hover:bg-white/10 group-hover:border-white/20 transition-colors">
                <span className="material-symbols-outlined text-black group-hover:text-white transition-colors">rocket_launch</span>
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="font-headline-md text-black group-hover:text-white transition-colors">Continuous Deployment</h3>
                  <span className="font-['Space_Grotesk'] text-sm font-bold text-black/30 group-hover:text-white/40 transition-colors hidden sm:block">04</span>
                </div>
                <p className="text-black font-body-md group-hover:text-white/80 transition-colors">
                  Deployment is just the beginning. I refine systems through constant testing and real-world feedback loops.
                </p>
              </div>
            </div>

            {/* Pipeline visual */}
            <div className="hidden md:flex items-center gap-3 shrink-0 pr-2">
              {['code', 'science', 'rocket_launch'].map((icon, i) => (
                <div key={icon} className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full glass-card border border-black/10 flex items-center justify-center group-hover:bg-white/10 group-hover:border-white/20 transition-colors">
                    <span className="material-symbols-outlined text-black group-hover:text-white text-xl transition-colors">{icon}</span>
                  </div>
                  {i < 2 && <div className="w-8 h-px bg-black/20 group-hover:bg-white/40 transition-colors"></div>}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </section>
  );
}
