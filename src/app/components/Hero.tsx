import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-svh flex flex-col justify-center items-center px-4 sm:px-6 overflow-hidden bg-background"
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

      {/* Giant background typography — desktop only */}
      <div
        className="absolute inset-0 flex-col items-center justify-center pointer-events-none select-none overflow-hidden hidden md:flex"
        aria-hidden="true"
      >
        <div className="[mask-image:linear-gradient(to_bottom,transparent,black_35%,black_65%,transparent)] flex flex-col items-center gap-1">
          <motion.span
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15, ease: 'easeOut' }}
            className="font-['Poppins'] font-bold text-[clamp(44px,15vw,340px)] leading-[0.85] tracking-[-0.02em] text-transparent whitespace-nowrap"
            style={{ WebkitTextStroke: '1.5px rgba(0,0,0,0.07)' }}
          >
            FULL STACK
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
            className="font-['Poppins'] font-bold text-[clamp(36px,15vw,340px)] leading-[0.85] tracking-[-0.02em] text-transparent whitespace-nowrap"
            style={{ WebkitTextStroke: '1.5px rgba(0,0,0,0.07)' }}
          >
            DEVELOPER
          </motion.span>
        </div>
      </div>

      {/* Vertical side labels — desktop only */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute left-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-4 z-10"
      >
        <span className="text-[10px] font-semibold tracking-[0.3em] uppercase text-black/30 [writing-mode:vertical-rl] rotate-180">
          Iftanafi Space — Portfolio
        </span>
        <span className="w-px h-16 bg-black/15" />
      </motion.div>

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
      <div className="relative z-10 max-w-[1200px] w-full text-center flex flex-col items-center pt-20 sm:pt-28 md:pt-20 pb-24 sm:pb-28">

        {/* Mobile top bar */}
        <div className="flex items-center justify-between w-full mb-8 sm:hidden">
          <span className="label-mono text-black/40">Iftanafi Space — Portfolio</span>
          <span className="label-mono text-black/40">© 2026</span>
        </div>

        {/* Name */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          {/* Desktop label */}
          <p className="hidden sm:block font-['Poppins'] text-[11px] md:text-xs font-semibold tracking-[0.35em] uppercase text-black/40 mb-4">
            Portfolio © 2026
          </p>
          {/* Mobile location */}
          <p className="label-mono text-black/40 mt-4 sm:hidden">Based in Jakarta, ID</p>

          <h1 className="font-headline-xl text-black text-[clamp(40px,9vw,92px)] font-bold leading-[0.92] tracking-[-0.02em] uppercase mt-3 sm:mt-7">
            <span className="block">Nayet Iftanafi</span>
          </h1>

          <div className="flex items-center justify-center gap-4 mt-4 sm:mt-5">
            <span className="h-px w-8 sm:w-12 bg-black/20" />
            <span className="font-['Poppins'] text-xs sm:text-sm md:text-base font-medium text-black/50 tracking-[0.25em] uppercase">
              Full Stack Developer
            </span>
            <span className="h-px w-8 sm:w-12 bg-black/20" />
          </div>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.75 }}
          className="text-[15px] md:text-lg text-black/55 max-w-md md:max-w-xl leading-relaxed mt-5 sm:mt-6 px-2 sm:px-0"
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
          className="flex flex-col sm:flex-row gap-3 mt-7 sm:mt-8 w-full sm:w-auto"
        >
          <a
            href="#work"
            className="group px-8 py-4 rounded-[50px] bg-black text-white border border-black font-label-md hover:bg-white hover:text-black transition-all duration-300 ease-out flex items-center justify-center gap-2 touch-target"
          >
            View Portfolio
            <span className="material-symbols-outlined text-lg group-hover:translate-y-0.5 transition-transform duration-300">
              arrow_downward
            </span>
          </a>
          <a
            href="#contact"
            className="group px-8 py-4 rounded-[50px] glass-card border-black/10 text-black font-label-md hover:bg-black hover:text-white transition-all duration-300 ease-out flex items-center justify-center gap-2 touch-target"
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
          className="w-full max-w-2xl mt-8 sm:mt-10 md:mt-14 pt-6 sm:pt-6 md:pt-8 border-t border-black/10 grid grid-cols-3 items-center"
        >
          {[
            { value: '1+', label: 'Years Experience' },
            { value: '15+', label: 'Projects Shipped' },
            { value: '10+', label: 'Technologies' },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-1">
              <span className="font-['Poppins'] text-2xl sm:text-2xl md:text-3xl font-black text-black">
                {stat.value}
              </span>
              <span className="text-[10px] font-black text-black/45 tracking-[0.2em] uppercase text-center leading-tight">
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
