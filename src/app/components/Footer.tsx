export function Footer() {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { name: 'Instagram', href: 'https://instagram.com/iftanafinayet', icon: 'photo_camera' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/nayet-iftanafi', icon: 'work' },
    { name: 'GitHub', href: 'https://github.com/iftanafinayet', icon: 'terminal' },
  ];

  return (
    <footer className="w-full pt-24 pb-12 border-t border-white/5 bg-[#050505]">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-6">
            <div className="text-2xl font-bold tracking-tighter text-white uppercase">
              IFTANAFI<span className="text-primary">.SPACE</span>
            </div>
            <p className="text-on-surface-variant/60 max-w-sm font-body-md leading-relaxed">
              Designing and engineering high-fidelity digital products with a focus on scalable architecture and premium user experiences.
            </p>
            <div className="flex items-center gap-4 pt-4">
              <a 
                href="tel:+6282326237979" 
                className="flex items-center gap-2 px-4 py-2 glass-card rounded-full border-white/5 hover:border-primary/30 transition-all group"
              >
                <span className="material-symbols-outlined text-sm text-primary">call</span>
                <span className="text-xs font-bold tracking-widest text-white/70 group-hover:text-white transition-colors uppercase">0823 2623 7979</span>
              </a>
            </div>
          </div>

          {/* Socials Column */}
          <div className="space-y-6">
            <h4 className="text-xs font-bold tracking-[0.3em] text-white/30 uppercase">Connectivity</h4>
            <div className="flex flex-col gap-4">
              {socialLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-on-surface-variant/60 hover:text-primary transition-colors group w-fit"
                >
                  <span className="material-symbols-outlined text-lg group-hover:scale-110 transition-transform">{link.icon}</span>
                  <span className="font-label-md text-sm uppercase tracking-widest">{link.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Location/Status Column */}
          <div className="space-y-6">
            <h4 className="text-xs font-bold tracking-[0.3em] text-white/30 uppercase">Status</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                <span className="text-sm font-label-md text-white/70 uppercase tracking-widest">Available for Hire</span>
              </div>
              <div className="text-sm text-on-surface-variant/60 font-body-md leading-relaxed italic">
                Currently based in Jakarta, ID <br/>
                Operating globally.
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[10px] font-bold tracking-[0.3em] text-white/20 uppercase">
            © {currentYear} NAYET IFTANAFI. ALL RIGHTS RESERVED.
          </div>
          <div className="text-[10px] font-bold tracking-[0.3em] text-white/20 uppercase flex gap-8">
            <span className="hover:text-white/40 cursor-default transition-colors">Privacy Policy</span>
            <span className="hover:text-white/40 cursor-default transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
