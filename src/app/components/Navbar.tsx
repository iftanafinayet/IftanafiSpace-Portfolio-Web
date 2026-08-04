import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sectionIds = ['home', 'about', 'process', 'work', 'pricing', 'contact'];

    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      sectionIds.forEach((id) => {
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Process', href: '#process', id: 'process' },
    { name: 'Work', href: '#work', id: 'work' },
    { name: 'Pricing', href: '#pricing', id: 'pricing' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/75 backdrop-blur-xl border-b border-black/10 shadow-[0_8px_32px_rgba(0,0,0,0.06)]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="flex justify-between items-center h-16 md:h-20 px-5 sm:px-8 lg:px-12 max-w-[1440px] mx-auto">
        {/* Logo */}
        <a
          href="#home"
          onClick={() => setMenuOpen(false)}
          className="group flex items-center gap-2.5"
        >
          <img
            src="/logoweb.svg"
            alt="IftanafiSpace Logo"
            className="h-9 w-9 rounded-lg object-cover ring-1 ring-black/10 transition-all duration-300 group-hover:scale-105"
          />
          <span className="font-['Space_Grotesk'] text-lg font-bold tracking-tight text-black hidden sm:block">
            Iftanafi<span className="text-black/40">Space</span>
            <span className="text-black">.</span>
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1.5 font-['Space_Grotesk'] font-medium tracking-tight">
          {navLinks.map((link, i) => (
            <a
              key={link.id}
              href={link.href}
              className={`relative px-4 py-2 text-sm rounded-full transition-colors duration-300 ${
                activeSection === link.id
                  ? 'text-white'
                  : 'text-black/70 hover:text-black'
              }`}
            >
              {activeSection === link.id && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 rounded-full bg-black"
                  transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-1.5">
                <span
                  className={`text-[9px] font-semibold ${
                    activeSection === link.id ? 'text-white/50' : 'text-black/30'
                  }`}
                >
                  0{i + 1}
                </span>
                {link.name}
              </span>
            </a>
          ))}
        </div>

        {/* CTA + Mobile toggle */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden md:inline-flex group items-center gap-2 px-6 py-2.5 rounded-full bg-black text-white border border-black font-label-md active:scale-95 transition-all duration-300 ease-out hover:bg-white hover:text-black"
          >
            Get in Touch
            <span className="material-symbols-outlined text-base transition-transform duration-300 group-hover:rotate-45">
              arrow_outward
            </span>
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            className="md:hidden flex flex-col items-end justify-center gap-1.5 h-10 w-10 rounded-lg border border-black/10 bg-white/60 backdrop-blur-sm"
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
              className="block h-0.5 w-5 bg-black rounded-full"
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
              className="block h-0.5 w-5 bg-black rounded-full"
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden border-b border-black/10 bg-white/90 backdrop-blur-xl"
          >
            <div className="px-5 sm:px-6 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-2 flex flex-col gap-1.5">
              {navLinks.map((link, i) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`flex items-center gap-4 px-4 py-3.5 rounded-xl transition-colors duration-300 ${
                    activeSection === link.id
                      ? 'bg-black text-white'
                      : 'text-black hover:bg-black/5'
                  }`}
                >
                  <span
                    className={`font-['Space_Grotesk'] text-[10px] font-semibold ${
                      activeSection === link.id ? 'text-white/50' : 'text-black/30'
                    }`}
                  >
                    0{i + 1}
                  </span>
                  <span className="font-['Space_Grotesk'] font-medium">{link.name}</span>
                  {activeSection === link.id && (
                    <span className="ml-auto material-symbols-outlined text-base">check</span>
                  )}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="mt-3 flex items-center justify-center gap-2 px-4 py-4 rounded-xl bg-black text-white font-label-md"
              >
                Get in Touch
                <span className="material-symbols-outlined text-base">arrow_outward</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
