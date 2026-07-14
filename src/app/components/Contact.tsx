import { useState, useEffect } from 'react';
import officeImg from '../../assets/Office.jpg';

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
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
        <div className="lg:col-span-7">
          <span className="inline-block bg-primary/20 text-primary px-4 py-1 rounded-full text-label-sm border border-primary/30 mb-6 uppercase tracking-widest">AVAILABLE FOR FREELANCE</span>
          <h1 className="font-headline-xl text-black mb-8 text-[clamp(48px,8vw,80px)] leading-[1.1] font-bold tracking-tighter">
            Let's build something <br />
            <span className="text-black italic">extraordinary</span> together.
          </h1>
          <p className="font-body-lg text-black max-w-xl mb-12">
            Have a vision that needs precision engineering and premium aesthetics? Reach out and let's discuss how we can elevate your digital presence.
          </p>
          {/* Contact Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter mb-12">
            <div className="glass-card p-gutter rounded-xl group hover:bg-black transition-colors duration-300">
              <div className="flex items-center gap-4 mb-4">
                <span className="material-symbols-outlined text-primary group-hover:text-white transition-colors">alternate_email</span>
                <span className="font-label-md text-on-surface group-hover:text-white/70 transition-colors">Email Me</span>
              </div>
              <p className="text-black group-hover:text-white transition-colors font-body-md">iftanafinayet18@gmail.com</p>
            </div>
            <div className="glass-card p-gutter rounded-xl group hover:bg-black transition-colors duration-300">
              <div className="flex items-center gap-4 mb-4">
                <span className="material-symbols-outlined text-primary group-hover:text-white transition-colors">schedule</span>
                <span className="font-label-md text-on-surface group-hover:text-white/70 transition-colors">Current Time</span>
              </div>
              <p className="text-black group-hover:text-white transition-colors font-body-md">
                Jakarta, ID • {time.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true })} WIB
              </p>
            </div>
          </div>
        </div>

        {/* Office Location Card */}
        <div className="lg:col-span-5 group relative overflow-hidden rounded-2xl glass-card h-[72%] lg:h-72% border-black/10 hover:border-black/40 transition-colors duration-300">
          <img
            src={officeImg}
            alt="Jakarta Cityscape"
            className="w-full h-[100%] object-cover opacity-100 filter grayscale group-hover:grayscale-0 transition-colors duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>

          <div className="absolute bottom-8 left-8 z-20">
            <p className="font-label-md text-white/60 uppercase tracking-widest mb-1">Office Location</p>
            <h3 className="font-headline-md text-white">Jakarta, Indonesia</h3>
          </div>
        </div>
      </section>

      {/* Bento Grid Contact Form */}
      <section className="-mt-24 grid grid-cols-1 lg:grid-cols-3 gap-gutter">
        {/* Left Panel: Social Connections */}
        <div className="lg:col-span-1 space-y-gutter">
          <div className="glass-card p-8 rounded-xl h-full flex flex-col justify-between">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-black mb-8">Social Pulse</h3>
              <div className="space-y-4">
                <a href="https://www.instagram.com/iftanafiiinayet" className="flex items-center justify-between group p-4 rounded-lg bg-black/5 border border-black/5 hover:bg-black transition-colors duration-300">
                  <div className="flex items-center gap-4">
                    <span className="material-symbols-outlined text-black group-hover:text-white transition-colors">Camera</span>
                    <span className="font-body-md text-on-surface group-hover:text-white transition-colors">Instagram</span>
                  </div>
                  <span className="material-symbols-outlined text-black group-hover:text-white opacity-0 group-hover:opacity-100 transition-[color,opacity] duration-300">arrow_outward</span>
                </a>
                <a href="https://github.com/iftanafinayet" className="flex items-center justify-between group p-4 rounded-lg bg-black/5 border border-black/5 hover:bg-black transition-colors duration-300">
                  <div className="flex items-center gap-4">
                    <span className="material-symbols-outlined text-black group-hover:text-white transition-colors">terminal</span>
                    <span className="font-body-md text-on-surface group-hover:text-white transition-colors">GitHub</span>
                  </div>
                  <span className="material-symbols-outlined text-black group-hover:text-white opacity-0 group-hover:opacity-100 transition-[color,opacity] duration-300">arrow_outward</span>
                </a>
                <a href="https://www.linkedin.com/in/nayet-iftanafi" className="flex items-center justify-between group p-4 rounded-lg bg-black/5 border border-black/5 hover:bg-black transition-colors duration-300">
                  <div className="flex items-center gap-4">
                    <span className="material-symbols-outlined text-black group-hover:text-white transition-colors">work</span>
                    <span className="font-body-md text-on-surface group-hover:text-white transition-colors">LinkedIn</span>
                  </div>
                  <span className="material-symbols-outlined text-black group-hover:text-white opacity-0 group-hover:opacity-100 transition-[color,opacity] duration-300">arrow_outward</span>
                </a>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-black/10">
              <p className="font-label-sm text-black mb-2 uppercase tracking-widest">Last Update</p>
              <p className="font-body-md text-on-surface">New work posted recently.</p>
            </div>
          </div>
        </div>

        {/* Right Panel: Main Form */}
        <div className="lg:col-span-2">
          <div className="glass-card p-8 md:p-12 rounded-xl">
            <h3 className="text-3xl md:text-4xl font-bold text-black mb-8">Send an Inquiry</h3>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="font-label-md text-black px-1">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="John Doe"
                  className="w-full bg-black/5 border border-black/10 rounded-lg p-4 text-black focus:border-primary focus:ring-0 transition-colors placeholder:opacity-40"
                />
              </div>
              <div className="space-y-2">
                <label className="font-label-md text-black px-1">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="john@example.com"
                  className="w-full bg-black/5 border border-black/10 rounded-lg p-4 text-black focus:border-primary focus:ring-0 transition-colors placeholder:opacity-40"
                />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="font-label-md text-black px-1">Project Theme</label>
                <div className="flex flex-wrap gap-4 pt-2">
                  {projectThemes.map((theme) => (
                    <button
                      key={theme}
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, projectTheme: theme }))}
                      className={`px-6 py-2 rounded-full border transition-colors duration-200 font-label-sm ${formData.projectTheme === theme
                        ? 'border-primary bg-primary/20 text-primary'
                        : 'border-black/10 text-black hover:bg-black hover:text-white'
                        }`}
                    >
                      {theme}
                    </button>
                  ))}
                </div>
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="font-label-md text-black px-1">Project Details</label>
                <textarea
                  name="details"
                  value={formData.details}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  placeholder="Describe your vision..."
                  className="w-full bg-black/5 border border-black/10 rounded-lg p-4 text-black focus:border-primary focus:ring-0 transition-colors placeholder:opacity-40 resize-none"
                ></textarea>
              </div>
              <div className="md:col-span-2 pt-4">
                <button type="submit" className="w-full md:w-auto bg-black text-white border border-black px-12 py-4 rounded-xl font-label-md hover:bg-white hover:text-black transition-all active:scale-95 duration-200">
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
