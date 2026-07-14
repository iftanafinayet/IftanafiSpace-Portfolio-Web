import { useState, useEffect } from 'react';

export function Navbar() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sectionIds = ['home', 'about', 'process', 'work', 'pricing', 'contact'];

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
    { name: 'Pricing', href: '#pricing', id: 'pricing' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-md border-b border-black/10 shadow-[0_4px_24px_0_rgba(0,0,0,0.05)]">
      <div className="flex justify-between items-center h-20 px-8 max-w-[1440px] mx-auto">
        <a href="#home" className="text-xl font-bold tracking-widest text-black font-headline-md">IftanafiSpace.</a>
        <div className="hidden md:flex items-center gap-10 font-['Space_Grotesk'] font-medium tracking-tight">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={`transition-colors duration-300 px-3 py-1 rounded ${activeSection === link.id
                ? 'text-black font-bold border-b border-neutral-900'
                : 'text-black hover:bg-black hover:text-white'
                }`}
            >
              {link.name}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className={`px-6 py-2.5 rounded-full font-label-md active:scale-95 transition-all duration-200 ${activeSection === 'contact'
            ? 'bg-black text-white shadow-[0_4px_16px_rgba(0,0,0,0.2)]'
            : 'bg-black text-white border border-black hover:bg-white hover:text-black'
            }`}
        >
          Get in Touch
        </a>
      </div>
    </nav>
  );
}
