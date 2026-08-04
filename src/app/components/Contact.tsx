import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import officeImg from '../../assets/Office.webp';

export function Contact() {
  const [time, setTime] = useState(new Date());
  const [isSubmitted, setIsSubmitted] = useState(false);
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
    setIsSubmitted(true);
    window.location.href = `mailto:iftanafinayet18@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      name: '',
      email: '',
      projectTheme: 'Product Design',
      details: ''
    });
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
    <section id="contact" className="pt-14 sm:pt-20 pb-16 sm:pb-20 px-5 sm:px-6 max-w-[1440px] mx-auto">
      {/* Hero Section */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-gutter">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7"
        >
          <div className="inline-flex items-center gap-2.5 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-4 sm:mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="label-mono text-primary uppercase tracking-widest">Available for Freelance</span>
          </div>
          <h1 className="text-[clamp(28px,7vw,80px)] leading-[1.08] font-bold tracking-tighter font-['Poppins'] text-black mb-5 sm:mb-8">
            Let's build something <br />
            <span className="accent-serif">extraordinary</span> together.
          </h1>
          <p className="text-[15px] sm:text-lg text-black/55 max-w-xl mb-8 sm:mb-12 leading-relaxed">
            Have a vision that needs precision engineering and premium aesthetics? Reach out and let's discuss how we can elevate your digital presence.
          </p>

          {/* Contact Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-gutter mb-8 sm:mb-12">
            {contactCards.map((card) => (
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
                <p className={`text-black group-hover:text-white transition-colors font-body-md break-all ${card.label === 'Current Time' ? 'font-mono-num text-sm' : ''}`}>
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

      {/* Contact Form Section */}
      <section className="mt-6 sm:mt-8 md:-mt-32 grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-gutter">
        {/* Left Panel: Social Connections */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="lg:col-span-1 space-y-3 sm:space-y-gutter"
        >
          <div className="glass-card p-5 sm:p-8 rounded-xl h-full flex flex-col justify-between">
            <div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-2">Social Pulse</h3>
              <p className="text-black/50 text-[13px] sm:text-sm mb-6 sm:mb-8 font-body-md">Follow along for work & behind-the-scenes.</p>
              <div className="space-y-2 sm:space-y-3">
                {socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between p-3 sm:p-4 rounded-xl bg-black/5 border border-black/5 hover:bg-black transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/10 touch-target"
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

        {/* Right Panel: Main Form / Success State */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-2"
        >
          <div className="glass-card p-5 sm:p-6 md:p-12 rounded-xl">
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col items-center justify-center text-center py-6 sm:py-8 md:py-12"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-black text-white flex items-center justify-center mb-5 sm:mb-6 shadow-xl shadow-black/20">
                  <span className="material-symbols-outlined text-2xl sm:text-3xl">check</span>
                </div>
                <span className="label-mono text-black/40 mb-2">
                  Status: Delivered
                </span>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-3 sm:mb-4">
                  Inquiry Received!
                </h3>
                <p className="text-[15px] text-black/70 max-w-md mb-6 sm:mb-8 leading-relaxed">
                  Thank you, <strong className="text-black">{formData.name}</strong>. Your project inquiry for{' '}
                  <span className="font-semibold text-black">{formData.projectTheme}</span> has been processed. I will reply to{' '}
                  <span className="underline font-medium text-black">{formData.email}</span> within 24 hours.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
                  <button
                    onClick={handleReset}
                    className="px-8 py-3.5 rounded-xl bg-black text-white border border-black font-label-md hover:bg-white hover:text-black transition-all duration-300 active:scale-95 touch-target"
                  >
                    Send Another Message
                  </button>
                  <a
                    href="#home"
                    className="px-8 py-3.5 rounded-xl glass-card text-black border border-black/10 font-label-md hover:bg-black hover:text-white transition-all duration-300 active:scale-95 text-center touch-target"
                  >
                    Back to Top
                  </a>
                </div>
              </motion.div>
            ) : (
              <>
                <h3 className="text-xl sm:text-2xl md:text-4xl font-bold text-black mb-1 sm:mb-2">Send an Inquiry</h3>
                <p className="text-black/50 text-[13px] sm:text-sm mb-6 sm:mb-10 font-body-md">Tell me about your project — I usually reply within 24 hours.</p>
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8">
                  <div className="space-y-1.5 sm:space-y-2">
                    <label className="font-label-md text-black px-1 text-sm sm:text-base">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="John Doe"
                      className={`${inputBase} py-3 sm:py-4`}
                    />
                  </div>
                  <div className="space-y-1.5 sm:space-y-2">
                    <label className="font-label-md text-black px-1 text-sm sm:text-base">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="john@example.com"
                      className={`${inputBase} py-3 sm:py-4`}
                    />
                  </div>
                  <div className="md:col-span-2 space-y-1.5 sm:space-y-2">
                    <label className="font-label-md text-black px-1 text-sm sm:text-base">Project Theme</label>
                    <div className="flex flex-wrap gap-2 sm:gap-3 pt-1 sm:pt-2">
                      {projectThemes.map((theme) => (
                        <button
                          key={theme}
                          type="button"
                          onClick={() => setFormData(prev => ({ ...prev, projectTheme: theme }))}
                          className={`px-4 py-1.5 sm:px-5 sm:py-2 rounded-full border transition-all duration-200 text-[11px] sm:text-xs font-medium active:scale-95 touch-target ${
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
                  <div className="md:col-span-2 space-y-1.5 sm:space-y-2">
                    <label className="font-label-md text-black px-1 text-sm sm:text-base">Project Details</label>
                    <textarea
                      name="details"
                      value={formData.details}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      placeholder="Describe your vision..."
                      className={`${inputBase} resize-none py-3 sm:py-4`}
                    ></textarea>
                  </div>
                  <div className="md:col-span-2 pt-2 sm:pt-4">
                    <button type="submit" className="group w-full bg-black text-white border border-black px-8 sm:px-12 py-3.5 sm:py-4 rounded-xl font-label-md hover:bg-white hover:text-black transition-all duration-300 ease-out active:scale-95 flex items-center justify-center gap-2 touch-target">
                      Initiate Project Discovery
                      <span className="material-symbols-outlined text-lg transition-transform duration-300 group-hover:rotate-45">arrow_outward</span>
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        </motion.div>
      </section>
    </section>
  );
}
