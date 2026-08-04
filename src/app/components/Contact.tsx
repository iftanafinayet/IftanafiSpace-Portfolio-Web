import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import officeImg from '../../assets/Office.webp';

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

  const contactCards = [
    {
      icon: 'alternate_email',
      label: 'Email Me',
      value: 'iftanafinayet18@gmail.com',
      href: 'mailto:iftanafinayet18@gmail.com'
    },
    {
      icon: 'schedule',
      label: 'Current Time',
      value: `Jakarta, ID • ${time.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true })} WIB`
    }
  ];

  const socials = [
    { name: 'Instagram', href: 'https://www.instagram.com/iftanafiiinayet', icon: 'photo_camera', handle: '@iftanafiiinayet' },
    { name: 'GitHub', href: 'https://github.com/iftanafinayet', icon: 'terminal', handle: '@iftanafinayet' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/nayet-iftanafi', icon: 'work', handle: '/in/nayet-iftanafi' },
  ];

  const inputBase =
    'w-full bg-white/70 border border-black/10 rounded-xl px-4 py-4 text-black placeholder:text-black/30 focus:border-black/40 focus:ring-0 focus:bg-white transition-all duration-300';

  return (
    <main id="contact" className="pt-20 pb-20 px-5 sm:px-6 max-w-[1440px] mx-auto">
      {/* Hero Section */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7"
        >
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-label-sm text-primary uppercase tracking-widest">Available for Freelance</span>
          </div>
          <h1 className="font-headline-xl text-black mb-8 text-[clamp(36px,9vw,80px)] leading-[1.1] font-bold tracking-tighter">
            Let's build something <br />
            <span className="text-black italic">extraordinary</span> together.
          </h1>
          <p className="font-body-lg text-black max-w-xl mb-12">
            Have a vision that needs precision engineering and premium aesthetics? Reach out and let's discuss how we can elevate your digital presence.
          </p>

          {/* Contact Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter mb-12">
            {contactCards.map((card, i) => (
              <div
                key={card.label}
                className="glass-card p-gutter rounded-xl group hover:bg-black transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl hover:shadow-black/15"
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="w-10 h-10 rounded-xl bg-black/5 border border-black/10 flex items-center justify-center shrink-0 group-hover:bg-white/10 group-hover:border-white/20 transition-colors">
                    <span className="material-symbols-outlined text-primary group-hover:text-white text-xl transition-colors">{card.icon}</span>
                  </span>
                  <span className="font-label-md text-on-surface group-hover:text-white/70 transition-colors">{card.label}</span>
                </div>
                <p className="text-black group-hover:text-white transition-colors font-body-md break-all">
                  {card.value}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Office Location Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="lg:col-span-5 group relative overflow-hidden rounded-2xl glass-card h-[300px] sm:h-[300px] lg:h-[71%] border-black/10 hover:border-black/40 transition-colors duration-300"
        >
          <img
            src={officeImg}
            alt="Jakarta Cityscape"
            className="w-full h-full object-cover opacity-100 filter grayscale group-hover:grayscale-0 transition-colors duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>

          <div className="absolute bottom-6 left-6 z-20">
            <p className="font-label-md text-white/60 uppercase tracking-widest mb-1">Office Location</p>
            <h3 className="font-headline-md text-white">Jakarta, Indonesia</h3>
          </div>
        </motion.div>
      </section>

      {/* Bento Grid Contact Form */}
      <section className="mt-8 md:-mt-32 grid grid-cols-1 lg:grid-cols-3 gap-gutter">
        {/* Left Panel: Social Connections */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="lg:col-span-1 space-y-gutter"
        >
          <div className="glass-card p-8 rounded-xl h-full flex flex-col justify-between">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-black mb-2">Social Pulse</h3>
              <p className="text-black/50 font-body-md text-sm mb-8">Follow along for work & behind-the-scenes.</p>
              <div className="space-y-3">
                {socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between p-4 rounded-xl bg-black/5 border border-black/5 hover:bg-black transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/10"
                  >
                    <div className="flex items-center gap-4 min-w-0">
                      <span className="w-10 h-10 rounded-lg bg-white/70 border border-black/10 flex items-center justify-center shrink-0 group-hover:bg-white/10 group-hover:border-white/20 transition-colors">
                        <span className="material-symbols-outlined text-black group-hover:text-white text-xl transition-colors">{social.icon}</span>
                      </span>
                      <div className="min-w-0">
                        <p className="font-body-md text-on-surface group-hover:text-white transition-colors">{social.name}</p>
                        <p className="text-xs text-black/40 group-hover:text-white/50 transition-colors truncate">{social.handle}</p>
                      </div>
                    </div>
                    <span className="material-symbols-outlined text-black group-hover:text-white opacity-0 group-hover:opacity-100 transition-[color,opacity] duration-300 shrink-0">arrow_outward</span>
                  </a>
                ))}
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-black/10">
              <p className="font-label-sm text-black mb-2 uppercase tracking-widest">Last Update</p>
              <p className="font-body-md text-on-surface">New work posted recently.</p>
            </div>
          </div>
        </motion.div>

        {/* Right Panel: Main Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-2"
        >
          <div className="glass-card p-6 md:p-12 rounded-xl">
            <h3 className="text-2xl md:text-4xl font-bold text-black mb-2">Send an Inquiry</h3>
            <p className="text-black/50 font-body-md text-sm mb-10">Tell me about your project — I usually reply within 24 hours.</p>
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
                  className={inputBase}
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
                  className={inputBase}
                />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="font-label-md text-black px-1">Project Theme</label>
                <div className="flex flex-wrap gap-3 pt-2">
                  {projectThemes.map((theme) => (
                    <button
                      key={theme}
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, projectTheme: theme }))}
                      className={`px-5 py-2 rounded-full border transition-all duration-200 font-label-sm active:scale-95 ${
                        formData.projectTheme === theme
                          ? 'border-black bg-black text-white shadow-md shadow-black/15'
                          : 'border-black/10 text-black hover:border-black/40 hover:bg-black/5'
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
                  className={`${inputBase} resize-none`}
                ></textarea>
              </div>
              <div className="md:col-span-2 pt-4">
                <button type="submit" className="group w-full md:w-auto bg-black text-white border border-black px-12 py-4 rounded-xl font-label-md hover:bg-white hover:text-black transition-all duration-300 ease-out active:scale-95 flex items-center justify-center gap-2">
                  Initiate Project Discovery
                  <span className="material-symbols-outlined text-lg transition-transform duration-300 group-hover:rotate-45">arrow_outward</span>
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
