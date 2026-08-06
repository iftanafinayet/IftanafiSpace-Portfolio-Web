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
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 400);
          return 100;
        }
        return prev + 1;
      });
    }, 18);

    return () => {
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
            exit={{ y: '-100%', transition: { duration: 0.45, ease: [0.76, 0, 0.24, 1] } }}
            className="fixed inset-0 bg-[#fafafa] z-[999] overflow-hidden"
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center px-6">
              <div className="overflow-hidden">
                <div className="flex">
                  {'NAYET IFTANAFI'.split('').map((char, i) => (
                    <motion.span
                      key={i}
                      initial={{ y: '110%' }}
                      animate={{ y: 0 }}
                      transition={{ duration: 0.7, delay: 0.05 * i, ease: [0.33, 1, 0.68, 1] }}
                      className="inline-block text-black font-bold tracking-tighter text-[clamp(36px,8vw,96px)] font-['Poppins'] leading-none"
                    >
                      {char === ' ' ? '\u00A0' : char}
                    </motion.span>
                  ))}
                </div>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="mt-6 flex items-center gap-3"
              >
                <span className="w-8 h-[1px] bg-black/30"></span>
                <span className="text-[10px] font-bold tracking-[0.5em] text-black/50 uppercase">Full Stack Developer</span>
                <span className="w-8 h-[1px] bg-black/30"></span>
              </motion.div>
            </div>

            <div className="absolute bottom-8 right-8 md:bottom-10 md:right-12 leading-none">
              <span className="text-7xl md:text-9xl font-bold text-black/10 tabular-nums tracking-tighter font-['Poppins']">
                {progress}
              </span>
              <span className="text-2xl md:text-4xl font-bold text-black/10">%</span>
            </div>

            <div className="absolute bottom-12 left-8 md:left-12 hidden sm:flex flex-col gap-1">
              <div className="w-8 h-[1px] bg-black/40"></div>
              <span className="text-[8px] font-bold tracking-[0.4em] text-black/40 uppercase">Iftanafi.Space — Portfolio</span>
            </div>

            <div className="absolute bottom-0 left-0 w-full h-[3px] bg-black/5">
              <motion.div
                className="h-full bg-black"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ ease: 'linear' }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {!loading && (
        <>
          <Navbar />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative min-h-screen w-full bg-[#fafafa] text-black"
          >
            <div className="relative z-10 w-full">
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
        </>
      )}
    </>
  );
}
