import DarkVeil from './DarkVeil';

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center items-center px-6 pt-20 overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute inset-0 -z-10">
        <DarkVeil />
      </div>
      <div className="max-w-[1200px] w-full text-center space-y-2">
        <h1 className="font-headline-xl text-black text-[clamp(48px,10vw,96px)] font-bold tracking-tighter mb-2">
          <span className="block font-bold">Nayet Iftanafi</span>
          <span className="block mt-1 text-black">FULL STACK DEVELOPER</span>
        </h1>
        <p className="font-body-lg text-black max-w-2xl mx-auto">
          Passionate developer focused on building modern web applications with clean code and beautiful user interfaces. MERN stack enthusiast with a love for learning new technologies and creating impactful projects.
        </p>
        <div className="flex flex-col sm:flex-row gap-1 justify-center pt-8">
          <a href="#work" className="px-8 py-4 rounded-xl bg-black text-white border border-black font-label-md hover:bg-white hover:text-black transition-colors duration-200">
            View Portfolio
          </a>
          <a href="#process" className="px-8 py-4 rounded-xl glass-card border-black/20 text-black font-label-md hover:bg-black hover:text-white transition-colors duration-200">
            Our Process
          </a>
        </div>
      </div>
    </section>
  );
}
