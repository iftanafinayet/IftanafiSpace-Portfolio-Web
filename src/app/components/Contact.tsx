import { useState, useEffect } from 'react';

export function Contact() {
  const [time, setTime] = useState(new Date());
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectTheme: 'Product Design',
    details: ''
  });

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const projectThemes = ['Product Design', 'Development', 'Branding', 'Strategy', 'Other'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Project Inquiry: ${formData.projectTheme} - ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Project Theme: ${formData.projectTheme}\n\n` +
      `Details:\n${formData.details}`
    );
    window.location.href = `mailto:iftanafinayet18@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <main id="contact" className="pt-20 pb-20 px-6 max-w-[1440px] mx-auto">
      {/* Hero Section */}
      <section className="mb-section-gap grid grid-cols-1 lg:grid-cols-12 gap-gutter">
        <div className="lg:col-span-7">
          <span className="inline-block bg-primary/20 text-primary px-4 py-1 rounded-full text-label-sm border border-primary/30 mb-6 uppercase tracking-widest">AVAILABLE FOR FREELANCE</span>
          <h1 className="font-headline-xl text-white mb-8 text-[clamp(48px,8vw,80px)] leading-[1.1] font-bold tracking-tighter">
            Let's build something <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-primary italic">extraordinary</span> together.
          </h1>
          <p className="font-body-lg text-on-surface-variant max-w-xl mb-12">
            Have a vision that needs precision engineering and premium aesthetics? Reach out and let's discuss how we can elevate your digital presence.
          </p>
          {/* Contact Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter mb-12">
            <div className="glass-card p-gutter rounded-xl group hover:border-primary/50 transition-all duration-500">
              <div className="flex items-center gap-4 mb-4">
                <span className="material-symbols-outlined text-primary">alternate_email</span>
                <span className="font-label-md text-on-surface">Email Me</span>
              </div>
              <p className="text-on-surface-variant group-hover:text-white transition-colors font-body-md">iftanafinayet18@gmail.com</p>
            </div>
            <div className="glass-card p-gutter rounded-xl group hover:border-primary/50 transition-all duration-500">
              <div className="flex items-center gap-4 mb-4">
                <span className="material-symbols-outlined text-primary">schedule</span>
                <span className="font-label-md text-on-surface">Current Time</span>
              </div>
              <p className="text-on-surface-variant group-hover:text-white transition-colors font-body-md">
                Jakarta, ID • {time.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true })} WIB
              </p>
            </div>
          </div>
        </div>

        {/* Office Location Card */}
        <div className="lg:col-span-5 group relative overflow-hidden rounded-2xl glass-card h-[400px] lg:h-auto border-white/10 hover:border-primary/50 transition-all duration-700">
          <img
            src="/assets/Office.JPG"
            alt="Jakarta Cityscape"
            className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>

          <div className="absolute bottom-8 left-8 z-20">
            <p className="font-label-md text-white/40 uppercase tracking-widest mb-1">Office Location</p>
            <h3 className="font-headline-md text-white">Jakarta, Indonesia</h3>
          </div>
        </div>
      </section>

      {/* Bento Grid Contact Form */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-gutter">
        {/* Left Panel: Social Connections */}
        <div className="lg:col-span-1 space-y-gutter">
          <div className="glass-card p-8 rounded-xl h-full flex flex-col justify-between">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-8">Social Pulse</h3>
              <div className="space-y-4">
                <a href="https://www.instagram.com/iftanafiiinayet" className="flex items-center justify-between group p-4 rounded-lg bg-white/5 border border-white/5 hover:border-primary/50 transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors">Camera</span>
                    <span className="font-body-md text-on-surface">Instagram</span>
                  </div>
                  <span className="material-symbols-outlined text-on-surface-variant opacity-0 group-hover:opacity-100 transition-all">arrow_outward</span>
                </a>
                <a href="https://github.com/iftanafinayet" className="flex items-center justify-between group p-4 rounded-lg bg-white/5 border border-white/5 hover:border-primary/50 transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors">terminal</span>
                    <span className="font-body-md text-on-surface">GitHub</span>
                  </div>
                  <span className="material-symbols-outlined text-on-surface-variant opacity-0 group-hover:opacity-100 transition-all">arrow_outward</span>
                </a>
                <a href="https://www.linkedin.com/in/nayet-iftanafi" className="flex items-center justify-between group p-4 rounded-lg bg-white/5 border border-white/5 hover:border-primary/50 transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors">work</span>
                    <span className="font-body-md text-on-surface">LinkedIn</span>
                  </div>
                  <span className="material-symbols-outlined text-on-surface-variant opacity-0 group-hover:opacity-100 transition-all">arrow_outward</span>
                </a>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-white/10">
              <p className="font-label-sm text-white/40 mb-2 uppercase tracking-widest">Last Update</p>
              <p className="font-body-md text-on-surface">New work posted recently.</p>
            </div>
          </div>
        </div>

        {/* Right Panel: Main Form */}
        <div className="lg:col-span-2">
          <div className="glass-card p-8 md:p-12 rounded-xl">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-8">Send an Inquiry</h3>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="font-label-md text-on-surface-variant px-1">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="John Doe"
                  className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-on-surface focus:border-primary focus:ring-0 transition-all placeholder:opacity-40"
                />
              </div>
              <div className="space-y-2">
                <label className="font-label-md text-on-surface-variant px-1">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="john@example.com"
                  className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-on-surface focus:border-primary focus:ring-0 transition-all placeholder:opacity-40"
                />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="font-label-md text-on-surface-variant px-1">Project Theme</label>
                <div className="flex flex-wrap gap-4 pt-2">
                  {projectThemes.map((theme) => (
                    <button
                      key={theme}
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, projectTheme: theme }))}
                      className={`px-6 py-2 rounded-full border transition-all font-label-sm ${formData.projectTheme === theme
                        ? 'border-primary bg-primary/20 text-primary'
                        : 'border-white/10 hover:border-primary/50 text-on-surface-variant'
                        }`}
                    >
                      {theme}
                    </button>
                  ))}
                </div>
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="font-label-md text-on-surface-variant px-1">Project Details</label>
                <textarea
                  name="details"
                  value={formData.details}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  placeholder="Describe your vision..."
                  className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-on-surface focus:border-primary focus:ring-0 transition-all placeholder:opacity-40 resize-none"
                ></textarea>
              </div>
              <div className="md:col-span-2 pt-4">
                <button type="submit" className="w-full md:w-auto bg-primary text-on-primary px-12 py-4 rounded-xl font-label-md hover:bg-primary-container transition-all shadow-[0_4px_20px_rgba(208,188,255,0.3)] active:scale-95 duration-200">
                  Initiate Project Discovery
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
