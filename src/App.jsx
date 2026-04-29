import React from "react";
import { Navbar } from './app/components/Navbar';
import { Hero } from './app/components/Hero';
import { About } from './app/components/About';
import { TechStack } from './app/components/TechStack';
import { Projects } from './app/components/Projects';
import { Footer } from './app/components/Footer';
import { Experience } from './app/components/Experience';
import { Contact } from './app/components/Contact';
import { ScrollReveal } from './app/components/ScrollReveal';
import { motion, AnimatePresence } from 'framer-motion';

export default function App() {
  const [loading, setLoading] = React.useState(true);
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) return 100;
        return prev + 1;
      });
    }, 20);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -20, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
            className="fixed inset-0 bg-[#050505] z-[999] flex flex-col items-center justify-center overflow-hidden"
          >
            {/* Background Decorative Element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full"></div>

            <div className="relative z-10 flex flex-col items-center">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="mb-12"
              >
                <div className="text-2xl font-bold tracking-[0.5em] text-white uppercase flex items-center gap-4">
                  IFTANAFI<span className="text-primary italic">.SPACE</span>
                </div>
              </motion.div>

              <div className="w-64 h-[2px] bg-white/5 relative overflow-hidden rounded-full">
                <motion.div 
                  className="absolute top-0 left-0 h-full bg-primary shadow-[0_0_15px_rgba(208,188,255,0.8)]"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                />
              </div>

              <div className="mt-6 flex flex-col items-center gap-2">
                <span className="text-[10px] font-bold tracking-[0.3em] text-white/20 uppercase">Systems Initializing</span>
                <span className="text-[10px] font-mono text-primary/60">{progress}%</span>
              </div>
            </div>

            <div className="absolute bottom-12 left-12 flex flex-col gap-1">
              <div className="w-8 h-[1px] bg-primary/40"></div>
              <span className="text-[8px] font-bold tracking-[0.4em] text-white/10 uppercase italic">Architectural Core v1.0</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
...

      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative min-h-screen w-full bg-black text-white"
        >
          <div className="relative z-10 w-full">
            <Navbar />
            <main>
              <Hero />
              <ScrollReveal>
                <About />
              </ScrollReveal>
              <ScrollReveal>
                <Experience />
              </ScrollReveal>
              <ScrollReveal>
                <TechStack />
              </ScrollReveal>
              <ScrollReveal>
                <Projects />
              </ScrollReveal>
              <ScrollReveal>
                <Contact />
              </ScrollReveal>
            </main>
            <Footer />
          </div>
        </motion.div>
      )}
    </>
  );
}
