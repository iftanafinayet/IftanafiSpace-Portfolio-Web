import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-svh flex flex-col justify-center items-center px-6 overflow-hidden"
    >
      {/* Soft gradient background */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-white via-[#fafafa] to-[#f0f0f0]"
        aria-hidden="true"
      />

      {/* Ambient glows */}
      <div className="absolute -top-[15%] -right-[10%] w-[55vw] h-[55vw] rounded-full bg-primary/[0.04] blur-[120px]" aria-hidden="true" />
      <div className="absolute -bottom-[20%] -left-[10%] w-[45vw] h-[45vw] rounded-full bg-black/[0.04] blur-[130px]" aria-hidden="true" />
      <div className="absolute top-[25%] -left-[18%] w-[38vw] h-[38vw] rounded-full bg-primary/[0.03] blur-[100px]" aria-hidden="true" />

      {/* Giant background typography */}
      <div
        className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        <div className="[mask-image:linear-gradient(to_bottom,transparent,black_35%,black_65%,transparent)] flex flex-col items-center gap-1">
          <motion.span
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15, ease: 'easeOut' }}
            className="font-['Space_Grotesk'] font-bold text-[clamp(96px,22vw,340px)] leading-[0.8] tracking-[-0.02em] text-transparent whitespace-nowrap"
            style={{ WebkitTextStroke: '1.5px rgba(0,0,0,0.07)' }}
          >
            FULL STACK
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
            className="font-['Space_Grotesk'] font-bold text-[clamp(72px,22vw,340px)] leading-[0.8] tracking-[-0.02em] text-transparent whitespace-nowrap"
            style={{ WebkitTextStroke: '1.5px rgba(0,0,0,0.07)' }}
          >
            DEVELOPER
          </motion.span>
        </div>
      </div>

      {/* Vertical side label — left */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute left-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-4 z-10"
      >
        <span
          className="text-[10px] font-semibold tracking-[0.3em] uppercase text-black/30 [writing-mode:vertical-rl] rotate-180"
        >
          Iftanafi Space — Portfolio
        </span>
        <span className="w-px h-16 bg-black/15" />
      </motion.div>

      {/* Vertical side label — right */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.1 }}
        className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-4 z-10"
      >
        <span className="w-px h-16 bg-black/15" />
        <span className="text-[10px] font-semibold tracking-[0.3em] uppercase text-black/30 [writing-mode:vertical-rl]">
          Based in Jakarta, ID
        </span>
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 max-w-[1200px] w-full text-center flex flex-col items-center pt-28 md:pt-20 pb-14">

        {/* Name */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-7"
        >
          <p className="font-['Space_Grotesk'] text-[11px] md:text-xs font-semibold tracking-[0.35em] uppercase text-black/40 mb-4">
            Portfolio © 2026
          </p>
          <h1 className="font-headline-xl text-black text-[clamp(40px,11vw,92px)] font-bold leading-[0.95] tracking-[-0.03em]">
            <span className="block">Nayet Iftanafi</span>
          </h1>
          <div className="flex items-center justify-center gap-4 mt-5">
            <span className="h-px w-12 bg-black/20 hidden sm:block" />
            <span className="font-['Space_Grotesk'] text-sm md:text-base font-medium text-black/50 tracking-[0.25em] uppercase">
              Full Stack Developer
            </span>
            <span className="h-px w-12 bg-black/20 hidden sm:block" />
          </div>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.75 }}
          className="font-body-lg text-black/55 max-w-xl leading-relaxed mt-6"
        >
          Crafting performant, pixel-perfect digital experiences with modern
          web technologies. MERN stack specialist focused on clean architecture
          and intuitive design.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-3 mt-8"
        >
          <a
            href="#work"
            className="group px-8 py-4 rounded-xl bg-black text-white border border-black font-label-md hover:bg-white hover:text-black transition-all duration-300 ease-out flex items-center justify-center gap-2"
          >
            View Portfolio
            <span className="material-symbols-outlined text-lg group-hover:translate-y-0.5 transition-transform duration-300">
              arrow_downward
            </span>
          </a>
          <a
            href="#contact"
            className="group px-8 py-4 rounded-xl glass-card border-black/10 text-black font-label-md hover:bg-black hover:text-white transition-all duration-300 ease-out flex items-center justify-center gap-2"
          >
            Let's Connect
            <span className="material-symbols-outlined text-lg rotate-[-45deg] group-hover:rotate-0 transition-transform duration-300">
              arrow_outward
            </span>
          </a>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.05 }}
          className="w-full max-w-2xl mt-10 md:mt-14 pt-6 md:pt-8 border-t border-black/10 flex flex-wrap items-center justify-center gap-x-10 gap-y-5 md:gap-x-14 md:gap-y-6"
        >
          {[
            { value: '1+', label: 'Years Experience' },
            { value: '15+', label: 'Projects Shipped' },
            { value: '10+', label: 'Technologies' },
          ].map((stat, i) => (
            <div key={stat.label} className="flex flex-col items-center gap-1">
              <span className="font-['Space_Grotesk'] text-2xl md:text-3xl font-bold text-black">
                {stat.value}
              </span>
              <span className="text-[10px] font-medium text-black/45 tracking-[0.2em] uppercase">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.3 }}
        className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="text-[10px] font-semibold tracking-[0.3em] uppercase text-black/30">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-5 h-8 rounded-full border border-black/15 flex items-start justify-center p-1"
        >
          <motion.div className="w-1.5 h-1.5 rounded-full bg-black/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}
