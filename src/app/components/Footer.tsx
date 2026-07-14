export function Footer() {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { name: 'Instagram', href: 'https://instagram.com/iftanafinayet', icon: 'photo_camera' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/nayet-iftanafi', icon: 'work' },
    { name: 'GitHub', href: 'https://github.com/iftanafinayet', icon: 'terminal' },
  ];

  return (
    <footer className="w-full pt-24 pb-12 border-t border-black/5 bg-white">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-6">
            <div className="text-2xl font-bold tracking-tighter text-black uppercase">
              IFTANAFI<span className="text-primary">.SPACE</span>
            </div>
            <p className="text-black max-w-sm font-body-md leading-relaxed">
              Designing and engineering high-fidelity digital products with a focus on scalable architecture and premium user experiences.
            </p>
            <div className="flex items-center gap-4 pt-4">
              <a 
                href="tel:+6282326237979" 
                className="flex items-center gap-2 px-4 py-2 glass-card rounded-full border-black/5 hover:bg-black transition-colors duration-300 group"
              >
                <span className="material-symbols-outlined text-sm text-primary group-hover:text-white transition-colors">call</span>
                <span className="text-xs font-bold tracking-widest text-black group-hover:text-white transition-colors uppercase">0823 2623 7979</span>
              </a>
            </div>
          </div>

          {/* Socials Column */}
          <div className="space-y-6">
            <h4 className="text-xs font-bold tracking-[0.3em] text-black uppercase">Connectivity</h4>
            <div className="flex flex-col gap-4">
              {socialLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-black hover:bg-black hover:text-white px-2 py-1 -mx-2 rounded-lg transition-colors group w-fit"
                >
                  <span className="material-symbols-outlined text-lg group-hover:scale-110 transition-transform">{link.icon}</span>
                  <span className="font-label-md text-sm uppercase tracking-widest">{link.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Location/Status Column */}
          <div className="space-y-6">
            <h4 className="text-xs font-bold tracking-[0.3em] text-black uppercase">Status</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-neutral-900 animate-pulse"></span>
                <span className="text-sm font-label-md text-black uppercase tracking-widest">Available for Hire</span>
              </div>
              <div className="text-sm text-black font-body-md leading-relaxed italic">
                Currently based in Jakarta, ID <br/>
                Operating globally.
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[10px] font-bold tracking-[0.3em] text-black uppercase">
            © {currentYear} NAYET IFTANAFI. ALL RIGHTS RESERVED.
          </div>
          <div className="text-[10px] font-bold tracking-[0.3em] text-black uppercase flex gap-8">
            <span className="hover:text-black cursor-default transition-colors">Privacy Policy</span>
            <span className="hover:text-black cursor-default transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
