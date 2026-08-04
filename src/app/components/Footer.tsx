export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'Instagram', href: 'https://instagram.com/iftanafinayet', icon: 'photo_camera', handle: '@iftanafinayet' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/nayet-iftanafi', icon: 'work', handle: '/in/nayet-iftanafi' },
    { name: 'GitHub', href: 'https://github.com/iftanafinayet', icon: 'terminal', handle: '@iftanafinayet' },
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Process', href: '#process' },
    { name: 'Work', href: '#work' },
    { name: 'Pricing', href: '#pricing' },
  ];

  return (
    <footer className="w-full pt-20 pb-10 border-t border-black/5 bg-white">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-24">
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 md:gap-12 mb-14">
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-black text-white">
                <span className="font-['Space_Grotesk'] text-sm font-bold tracking-tight">IF</span>
              </span>
              <div className="font-['Space_Grotesk'] text-xl font-bold tracking-tighter text-black uppercase">
                IFTANAFI<span className="text-black/40">.SPACE</span>
              </div>
            </div>
            <p className="text-black max-w-sm font-body-md leading-relaxed">
              Designing and engineering high-fidelity digital products with a focus on scalable architecture and premium user experiences.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a
                href="tel:+6282326237979"
                className="group flex items-center gap-2.5 px-4 py-2.5 glass-card rounded-full border-black/5 hover:bg-black transition-all duration-300 ease-out hover:-translate-y-0.5"
              >
                <span className="w-7 h-7 rounded-full bg-black/5 border border-black/10 flex items-center justify-center shrink-0 group-hover:bg-white/10 group-hover:border-white/20 transition-colors">
                  <span className="material-symbols-outlined text-sm text-primary group-hover:text-white transition-colors">call</span>
                </span>
                <span className="text-xs font-bold tracking-widest text-black group-hover:text-white transition-colors uppercase">0823 2623 7979</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="text-xs font-bold tracking-[0.3em] text-black uppercase">Navigate</h4>
            <div className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="group flex items-center gap-2 text-black w-fit hover:translate-x-1 transition-transform duration-300"
                >
                  <span className="w-1 h-1 rounded-full bg-black/20 group-hover:bg-black transition-colors"></span>
                  <span className="font-label-md text-sm uppercase tracking-widest group-hover:text-black transition-colors">{link.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Connectivity */}
          <div className="lg:col-span-4 space-y-6">
            <h4 className="text-xs font-bold tracking-[0.3em] text-black uppercase">Connectivity</h4>
            <div className="flex flex-col gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 text-black hover:bg-black hover:text-white px-2 py-1.5 -mx-2 rounded-lg transition-colors duration-300 ease-out w-fit"
                >
                  <span className="w-8 h-8 rounded-lg bg-black/5 border border-black/10 flex items-center justify-center group-hover:bg-white/10 group-hover:border-white/20 transition-colors shrink-0">
                    <span className="material-symbols-outlined text-lg group-hover:scale-110 transition-transform">{link.icon}</span>
                  </span>
                  <span className="flex flex-col">
                    <span className="font-label-md text-sm uppercase tracking-widest">{link.name}</span>
                    <span className="text-[10px] text-black/40 group-hover:text-white/50 transition-colors">{link.handle}</span>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Status bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-8 border-t border-black/5 mb-8">
          <div className="flex items-center gap-3">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-sm font-label-md text-black uppercase tracking-widest">Available for Hire</span>
          </div>
          <div className="text-sm text-black font-body-md leading-relaxed italic">
            Currently based in Jakarta, ID — Operating globally.
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[10px] font-bold tracking-[0.3em] text-black uppercase">
            © {currentYear} NAYET IFTANAFI. ALL RIGHTS RESERVED.
          </div>
          <div className="text-[10px] font-bold tracking-[0.3em] text-black uppercase flex gap-8">
            <span className="hover:text-black cursor-default transition-colors">Privacy Policy</span>
            <span className="hover:text-black cursor-default transition-colors">Terms of Service</span>
          </div>
        </div>

        {/* Back to top */}
        <div className="mt-8 flex justify-center">
          <a
            href="#home"
            className="group flex items-center gap-2 px-4 py-2 rounded-full glass-card border-black/5 hover:bg-black transition-all duration-300 ease-out hover:-translate-y-0.5"
            aria-label="Back to top"
          >
            <span className="material-symbols-outlined text-base text-black group-hover:text-white transition-colors">arrow_upward</span>
            <span className="text-[10px] font-bold tracking-widest text-black group-hover:text-white uppercase transition-colors">Back to Top</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
