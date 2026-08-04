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
        scrolled || menuOpen
          ? 'bg-white/90 border-b border-black/10 shadow-[0_8px_32px_rgba(0,0,0,0.06)]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="flex justify-between items-center h-14 sm:h-16 md:h-20 px-5 sm:px-8 lg:px-12 max-w-[1440px] mx-auto">
        {/* Logo */}
        <a
          href="#home"
          onClick={() => setMenuOpen(false)}
          className="group flex items-center gap-2.5"
        >
          <img
            src="/logoweb.svg"
            alt="IftanafiSpace Logo"
            className="h-8 w-8 sm:h-9 sm:w-9 rounded-lg object-cover ring-1 ring-black/10 transition-all duration-300 group-hover:scale-105"
          />
          <span className="font-['Poppins'] text-base sm:text-lg font-bold tracking-tight text-black hidden sm:block">
            Iftanafi<span className="text-black/40">Space</span>
            <span className="text-black">.</span>
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1.5 font-['Poppins'] font-medium tracking-tight">
          {navLinks.map((link, i) => (
            <a
              key={link.id}
              href={link.href}
              className={`relative px-4 py-2 text-sm rounded-full transition-colors duration-300 ${activeSection === link.id
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
                  className={`text-[9px] font-semibold ${activeSection === link.id ? 'text-white/50' : 'text-black/30'
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
            className="md:hidden flex flex-col items-center justify-center gap-1.5 h-10 w-10 rounded-xl bg-black text-white border border-black active:scale-95 transition-transform"
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
              className="block h-0.5 w-5 bg-white rounded-full"
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
              className="block h-0.5 w-5 bg-white rounded-full"
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu — slide-in drawer */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm md:hidden"
              onClick={() => setMenuOpen(false)}
              aria-hidden
            />
            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.35, ease: [0.33, 1, 0.68, 1] }}
              className="fixed right-0 top-0 z-40 h-full w-[86%] max-w-sm bg-[#fafafa] px-6 pb-8 pt-20 shadow-2xl md:hidden overflow-y-auto"
              role="navigation"
              aria-label="Mobile navigation"
            >
              <span className="label-mono text-black/35 mb-8 block">Navigation</span>

              <ul className="flex flex-col">
                {navLinks.map((link, i) => (
                  <li key={link.id} className="border-b border-black/8 last:border-b-0">
                    <a
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="flex items-baseline gap-4 py-4 active:scale-[0.98] transition-transform"
                    >
                      <span className="label-mono text-black/35">0{i + 1}</span>
                      <span
                        className={`text-2xl font-semibold tracking-tight ${activeSection === link.id ? 'text-black' : 'text-black'
                          }`}
                      >
                        {link.name}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="mt-8 flex items-center justify-center gap-2 rounded-full bg-black px-6 py-4 text-sm font-semibold text-white active:scale-[0.98] transition-transform touch-target"
              >
                Get in Touch
                <span className="material-symbols-outlined text-base">arrow_outward</span>
              </a>

              <div className="mt-auto pt-10">
                <span className="label-mono text-black/35">Based in Jakarta, ID</span>
                <p className="mt-2 text-sm text-black/60">
                  iftanafinayet18@gmail.com
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
