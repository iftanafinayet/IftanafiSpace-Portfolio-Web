import React from "react";
import { Navbar } from './app/components/Navbar';
import { Hero } from './app/components/Hero';
import { About } from './app/components/About';
import { TechStack } from './app/components/TechStack';
import { Projects } from './app/components/Projects';
import { Footer } from './app/components/Footer';
import { Experience } from './app/components/Experience';
import Beams from './app/components/Beams';
import { motion, AnimatePresence } from 'framer-motion';

export default function App() {
  const [loading, setLoading] = React.useState(true);
  
  React.useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* 2. Bungkus Loading Screen dengan AnimatePresence */}
      <AnimatePresence mode="wait">
        {loading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }} // Efek Fade Out
            className="fixed inset-0 bg-black z-[999] flex flex-col items-center justify-center"
          >
            <div className="relative">
              <div className="w-20 h-20 border-2 border-white/10 border-t-white rounded-full animate-spin"></div>
            </div>
            <h1 className="mt-8 text-white font-black tracking-[0.8em] text-xs animate-pulse">
              IFTANAFI.SPACE
            </h1>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 3. Bungkus Konten Utama agar muncul dengan halus (Fade In) */}
      {!loading && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative min-h-screen w-full bg-black text-white"
        >
          {/* BACKGROUND LAYER */}
          <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
            <Beams />
            <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]"></div>
          </div>

          {/* CONTENT LAYER */}
          <div className="relative z-10 w-full">
            <Navbar />
            <main>
              <Hero />
              <About />
              <Experience />
              <TechStack />
              <Projects />
            </main>
            <Footer />
          </div>
        </motion.div>
      )}
    </>
  );
}