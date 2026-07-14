export function RateCard() {
  const packages = [
    {
      name: 'Paket UMKM',
      subtitle: 'Landing Page',
      price: 'Rp 450.000 – Rp 650.000',
      priceLabel: 'Harga',
      duration: '2 - 3 Hari Kerja',
      accent: 'from-emerald-400 to-green-500',
      dotColor: 'bg-emerald-400',
      features: [
        '1 Halaman',
        'Tombol WhatsApp',
        'Galeri Foto',
        'Google Maps',
        'Desain Mobile-Friendly'
      ],
      highlighted: false
    },
    {
      name: 'Paket Company Profile',
      subtitle: 'Multi-Page Website',
      price: 'Rp 1.200.000 – Rp 1.800.000',
      priceLabel: 'Harga',
      duration: '5 - 10 Hari Kerja',
      accent: 'from-sky-400 to-blue-500',
      dotColor: 'bg-sky-400',
      features: [
        '3 - 5 Halaman (Home, Profil, Layanan, Kontak)',
        'Fitur Edit Konten Sendiri',
        'SEO Friendly'
      ],
      highlighted: true
    },
    {
      name: 'Paket Kustom Bisnis',
      subtitle: 'Web App',
      price: 'Mulai Rp 3.500.000',
      priceLabel: 'Harga',
      duration: 'Mulai 14 Hari Kerja',
      accent: 'from-violet-400 to-purple-500',
      dotColor: 'bg-violet-400',
      features: [
        'Toko Online',
        'Aplikasi Kasir Berbasis Web',
        'Sistem Database Kustom',
        'Admin Panel Lengkap'
      ],
      highlighted: false
    }
  ];

  const addons = [
    {
      name: 'Domain & Hosting',
      note: 'Tahun Pertama',
      price: '+Rp 250.000 – Rp 350.000',
      icon: 'language'
    },
    {
      name: 'Maintenance & Update Konten',
      note: 'Per Bulan',
      price: 'Rp 200.000 / bulan',
      icon: 'build'
    }
  ];

  return (
    <section id="pricing" className="max-w-[1400px] mx-auto px-6 py-16">
      <header className="mb-12">
        <div className="flex flex-col gap-4 max-w-3xl">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse shadow-[0_0_8px_rgba(208,188,255,0.6)]"></span>
            <span className="font-label-sm text-primary tracking-[0.2em] uppercase">Rate Card</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Transparent <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">pricing</span> for every scale.
          </h2>
          <p className="font-body-md text-on-surface-variant/70">
            Pilih paket yang sesuai dengan kebutuhan bisnis Anda. Semua paket sudah termasuk desain modern dan responsif.
          </p>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {packages.map((pkg, index) => (
          <div
            key={index}
            className={`group glass-card rounded-2xl p-8 flex flex-col transition-all duration-300 ${
              pkg.highlighted
                ? 'border-primary/40 shadow-[0_0_40px_rgba(208,188,255,0.1)] md:-translate-y-2'
                : 'border-white/5 hover:border-primary/20'
            }`}
          >
            {pkg.highlighted && (
              <span className="self-start mb-4 px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase bg-primary/20 text-primary border border-primary/30">
                Most Popular
              </span>
            )}

            <div className="flex items-center gap-2 mb-1">
              <span className={`w-2 h-2 rounded-full ${pkg.dotColor}`}></span>
              <span className="text-[10px] font-bold tracking-widest text-white/50 uppercase">{pkg.subtitle}</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-primary transition-colors">{pkg.name}</h3>

            <div className="mb-6">
              <span className="text-[10px] font-bold tracking-widest text-white/40 uppercase block mb-1">{pkg.priceLabel}</span>
              <p className={`text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${pkg.accent}`}>{pkg.price}</p>
            </div>

            <ul className="space-y-3 mb-8 flex-grow">
              {pkg.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-on-surface-variant/80">
                  <span className="material-symbols-outlined text-primary text-base leading-5">check_circle</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-2 mb-6 text-sm text-white/50">
              <span className="material-symbols-outlined text-base">schedule</span>
              <span>{pkg.duration}</span>
            </div>

            <a
              href="#contact"
              className={`text-center px-6 py-3.5 rounded-xl font-semibold transition-all active:scale-95 ${
                pkg.highlighted
                  ? 'bg-primary text-on-primary hover:opacity-90 shadow-[0_4px_20px_rgba(208,188,255,0.3)]'
                  : 'glass-card text-white border-white/10 hover:bg-white/5'
              }`}
            >
              Pilih Paket
            </a>
          </div>
        ))}
      </div>

      {/* Add-ons */}
      <div className="mt-10">
        <div className="flex items-center gap-2 mb-6">
          <span className="material-symbols-outlined text-primary">add_circle</span>
          <h3 className="text-xl font-bold text-white">Layanan Tambahan <span className="text-white/40 text-sm font-normal">(Optional)</span></h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {addons.map((addon, index) => (
            <div key={index} className="glass-card rounded-xl p-6 flex items-center justify-between gap-4 border-white/5 hover:border-primary/20 transition-all duration-300">
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-primary p-3 rounded-lg bg-white/5">{addon.icon}</span>
                <div>
                  <p className="font-semibold text-white">{addon.name}</p>
                  <p className="text-xs text-white/40 uppercase tracking-widest">{addon.note}</p>
                </div>
              </div>
              <p className="font-bold text-primary whitespace-nowrap">{addon.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
