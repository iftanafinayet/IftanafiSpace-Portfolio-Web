import { useState, useEffect } from 'react';

export function Navbar() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sectionIds = ['home', 'about', 'process', 'work', 'contact'];

    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px', // Adjust to trigger when section is in view
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

    return () => {
      sectionIds.forEach((id) => {
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Process', href: '#process', id: 'process' },
    { name: 'Work', href: '#work', id: 'work' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-md border-b border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.8)]">
      <div className="flex justify-between items-center h-20 px-8 max-w-[1440px] mx-auto">
        <a href="#home" className="text-xl font-bold tracking-widest text-white font-headline-md">IftanafiSpace.</a>
        <div className="hidden md:flex items-center gap-10 font-['Space_Grotesk'] font-medium tracking-tight">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={`transition-all duration-300 px-3 py-1 rounded ${activeSection === link.id
                ? 'text-violet-400 font-bold border-b border-violet-500'
                : 'text-white/60 hover:text-violet-400 hover:bg-white/5'
                }`}
            >
              {link.name}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className={`px-6 py-2.5 rounded-full font-label-md active:scale-95 transition-all duration-200 ${activeSection === 'contact'
            ? 'bg-violet-600 text-white shadow-[0_0_20px_rgba(139,92,246,0.5)]'
            : 'bg-primary-container text-on-primary-container hover:shadow-[0_0_20px_rgba(139,92,246,0.3)]'
            }`}
        >
          Get in Touch
        </a>
      </div>
    </nav>
  );
}
