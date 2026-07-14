import React from "react";
import { Navbar } from './app/components/Navbar';
import { Hero } from './app/components/Hero';
import { About } from './app/components/About';
import { TechStack } from './app/components/TechStack';
import { Projects } from './app/components/Projects';
import { RateCard } from './app/components/RateCard';
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
            className="fixed inset-0 bg-[#fafafa] z-[999] flex flex-col items-center justify-center overflow-hidden"
          >
            <div className="absolute bottom-12 left-12 flex flex-col gap-1">
              <div className="w-8 h-[1px] bg-primary/40"></div>
              <span className="text-[8px] font-bold tracking-[0.4em] text-black uppercase italic">Architectural Core v1.0</span>
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
          className="relative min-h-screen w-full bg-[#fafafa] text-black"
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
                <RateCard />
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
