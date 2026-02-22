import React from "react";
import { Navbar } from './app/components/Navbar';
import { Hero } from './app/components/Hero';
import { About } from './app/components/About';
import { TechStack } from './app/components/TechStack';
import { Projects } from './app/components/Projects';
import { Footer } from './app/components/Footer';
import { Experience } from './app/components/Experience';
import Beams from './app/components/Beams';

export default function App() {
  return (
    /* Container utama harus 'relative' agar z-index anak-anaknya bekerja */
    <div className="relative min-h-screen w-full bg-black text-white">
      
      {/* 1. BACKGROUND LAYER (Beams) */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <Beams 
          beamNumber={10}          // Jumlah sinar (10-15 cukup untuk performa)
          lightColor="#ffffff"     // Warna sinar
          speed={1.2}              // Kecepatan gerak
          rotation={20}            // Kemiringan sinar
          noiseIntensity={1.5}     // Efek distorsi
        />
        
        {/* Overlay agar teks di depan lebih menonjol */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]"></div>
      </div>

      {/* 2. CONTENT LAYER (Z-index lebih tinggi) */}
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
      
    </div>
  );
}