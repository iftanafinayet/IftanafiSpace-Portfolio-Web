import React, { useState } from 'react';
import { Github, Linkedin, Instagram, Mail, Heart, ArrowUp, Copy, Check } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export function Footer() {
  const [copied, setCopied] = useState(false);
  const email = "iftanafinayet18@gmail.com";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    /* bg-transparent agar sinar Beams terlihat */
    <footer id="contact" className="bg-transparent text-white pt-32 pb-10 px-6 overflow-hidden relative">
      <ScrollReveal>
        <div className="max-w-7xl mx-auto">
          
          {/* Main Footer Card with Glassmorphism */}
          <div className="relative overflow-hidden backdrop-blur-xl bg-white/[0.03] border border-white/10 rounded-[2.5rem] p-8 md:p-16 shadow-2xl">
            
            {/* Dekorasi Teks Besar di Background (Z-index rendah) */}
            <div className="absolute -right-10 -bottom-10 text-[15rem] md:text-[20rem] font-black text-white/[0.02] leading-none pointer-events-none select-none italic">
              Iftanafi.
            </div>

            <div className="flex flex-col lg:flex-row justify-between gap-16 relative z-10">
              <div className="flex-1">
                <h2 className="text-5xl md:text-8xl font-bold leading-[1.1] tracking-tighter mb-12">
                  Let's make <br />
                  <span className="text-white/30 italic">something </span> <br />
                  amazing together.
                </h2>

                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-4 group">
                    <a 
                      href={`mailto:${email}`}
                      className="text-xl md:text-4xl font-bold border-b-2 border-white/10 pb-2 group-hover:border-white/50 transition-all duration-500"
                    >
                      {email}
                    </a>
                    <button 
                      onClick={copyToClipboard}
                      className="p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all active:scale-95"
                      title="Copy email"
                    >
                      {copied ? <Check className="w-5 h-6 text-green-500" /> : <Copy className="w-5 h-6 text-white/50" />}
                    </button>
                  </div>
                  <p className="text-white-500/60 font-black text-[10px] uppercase tracking-widest">
                    {copied ? "Copied to clipboard!" : "Click the icon to copy email"}
                  </p>
                </div>
              </div>

              {/* Links Sections */}
              <div className="flex gap-20 md:gap-32">
                <div className="flex flex-col gap-6">
                  <p className="text-[10px] font-black text-white/30 uppercase tracking-[0.3em]">Menu</p>
                  <ul className="flex flex-col gap-4 text-lg font-bold">
                    {['home', 'about', 'projects', 'experience'].map((item) => (
                      <li key={item}>
                        <a 
                          href={`#${item}`} 
                          onClick={(e) => item === 'home' ? (e.preventDefault(), scrollToTop()) : scrollToSection(e, item)} 
                          className="hover:text-white transition-colors capitalize"
                        >
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col gap-6">
                  <p className="text-[10px] font-black text-white/30 uppercase tracking-[0.3em]">Socials</p>
                  <ul className="flex flex-col gap-4 text-lg font-bold">
                    <li><a href="https://github.com/iftanafinayet" target="_blank" className="hover:text-blue-400 transition-colors">GitHub</a></li>
                    <li><a href="https://www.linkedin.com/in/nayet-iftanafi" target="_blank" className="hover:text-blue-400 transition-colors">LinkedIn</a></li>
                    <li><a href="https://instagram.com/iftanafiiinayet" target="_blank" className="hover:text-blue-400 transition-colors">Instagram</a></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Bottom Info Section */}
            <div className="mt-32 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-end gap-10">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center font-black text-sm shadow-[0_0_20px_rgba(37,99,235,0.5)]">
                    IN
                  </div>
                  <h3 className="text-2xl font-black tracking-tighter text-white">Iftanafi Space</h3>
                </div>
                <p className="text-white/40 text-sm max-w-xs font-medium leading-relaxed">
                  Crafting digital experiences with precision, passion, and a touch of coffee.
                </p>
                <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-white/20">
                  <span className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                    Depok, Indonesia
                  </span>
                  <span></span>
                  <span>{currentYear}</span>
                </div>
              </div>

              <button 
                onClick={scrollToTop}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-500 group"
              >
                <ArrowUp className="w-8 h-8 text-white group-hover:-translate-y-2 transition-transform" />
              </button>
            </div>
          </div>

          {/* Minimalist Copyright */}
          <div className="mt-10 text-center">
            <p className="text-white/20 text-[10px] font-black uppercase tracking-[0.4em] flex items-center justify-center gap-3">
              © {currentYear} — Nayet Iftanafi
              <Heart className="w-3 h-3 text-red-600 fill-red-600" />
              Built for the future
            </p>
          </div>
        </div>
      </ScrollReveal>
    </footer>
  );
}