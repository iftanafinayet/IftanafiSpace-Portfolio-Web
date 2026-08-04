export function RateCard() {
  const packages = [
    {
      name: 'Paket UMKM',
      subtitle: 'Landing Page',
      price: 'Rp 450.000',
      priceRange: '– Rp 650.000',
      priceLabel: 'Harga',
      duration: '2 - 3 Hari Kerja',
      accent: 'from-black to-black',
      dotColor: 'bg-neutral-500',
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
      price: 'Rp 1.200.000',
      priceRange: '– Rp 1.800.000',
      priceLabel: 'Harga',
      duration: '5 - 10 Hari Kerja',
      accent: 'from-black to-black',
      dotColor: 'bg-neutral-900',
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
      priceRange: '',
      priceLabel: 'Harga',
      duration: 'Mulai 14 Hari Kerja',
      accent: 'from-black to-black',
      dotColor: 'bg-neutral-700',
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
      price: '+Rp 250rb – 350rb',
      icon: 'language'
    },
    {
      name: 'Maintenance & Update Konten',
      note: 'Per Bulan',
      price: 'Rp 200rb / bln',
      icon: 'build'
    }
  ];

  return (
    <section id="pricing" className="max-w-[1400px] mx-auto px-5 sm:px-6 py-10 sm:py-16 md:py-24">
      <header className="mb-8 sm:mb-12 md:mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 max-w-4xl">
          <div className="flex flex-col gap-3 sm:gap-4">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse shadow-[0_0_8px_rgba(0,0,0,0.2)]"></span>
              <span className="label-mono text-primary tracking-[0.2em] uppercase">Rate Card</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-black leading-tight">
              Transparent <span className="accent-serif">pricing</span> for every scale.
            </h2>
            <p className="text-[15px] text-black/55 md:text-base max-w-lg leading-relaxed">
              Pilih paket yang sesuai dengan kebutuhan bisnis Anda. Semua paket sudah termasuk desain modern dan responsif.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <span className="material-symbols-outlined text-primary">verified_user</span>
            <p className="text-xs font-medium text-black/60 max-w-[180px] uppercase tracking-wider">Garansi revisi & support after-launch</p>
          </div>
        </div>
      </header>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        {packages.map((pkg, index) => (
          <div
            key={index}
            className={`group glass-card rounded-[1.5rem] sm:rounded-[1.75rem] p-5 sm:p-6 md:p-8 flex flex-col relative overflow-hidden transition-all duration-300 ease-out ${
              pkg.highlighted
                ? 'border-black lg:scale-[1.03] hover:bg-black md:-translate-y-2 shadow-[0_20px_60px_rgba(0,0,0,0.12)]'
                : 'border-black/5 hover:bg-black hover:-translate-y-1 hover:shadow-xl hover:shadow-black/15'
            }`}
          >
            {/* Decorative gradient spot (highlighted only) */}
            {pkg.highlighted && (
              <>
                <div className="absolute -top-16 -right-16 w-48 h-48 bg-white/[0.06] blur-2xl rounded-full transition-colors duration-300"></div>
                <span className="absolute top-4 right-4 px-3 py-1 rounded-full text-[10px] font-mono-num font-bold tracking-widest uppercase bg-black text-white group-hover:bg-white group-hover:text-black shadow-sm transition-colors">
                  Most Popular
                </span>
              </>
            )}

            {/* Package header */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-1">
                <span className={`w-2 h-2 rounded-full group-hover:bg-white transition-colors ${pkg.dotColor}`}></span>
                <span className="text-[10px] font-bold tracking-widest text-black group-hover:text-white/60 uppercase transition-colors">{pkg.subtitle}</span>
              </div>
              <h3 className="text-2xl font-bold text-black mb-2 group-hover:text-white transition-colors">{pkg.name}</h3>
              <div className="h-px w-full bg-black/10 group-hover:bg-white/15 my-5 transition-colors"></div>
            </div>

            {/* Pricing */}
            <div className="mb-7">
              <span className="text-[10px] font-bold tracking-widest text-black group-hover:text-white/60 uppercase block mb-1 transition-colors">{pkg.priceLabel}</span>
              <p className="font-mono-num text-2xl font-bold text-black group-hover:text-white transition-colors">
                {pkg.price}
                {pkg.priceRange && (
                  <span className="text-black/40 group-hover:text-white/40 transition-colors">{pkg.priceRange}</span>
                )}
              </p>
            </div>

            {/* Features */}
            <ul className="space-y-3 mb-8 flex-grow">
              {pkg.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-black group-hover:text-white/80 transition-colors">
                  <span className="material-symbols-outlined text-primary group-hover:text-white text-base leading-5 transition-colors">check_circle</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            {/* Duration */}
            <div className="flex items-center gap-2 mb-6 text-sm text-black group-hover:text-white/70 transition-colors">
              <span className="material-symbols-outlined text-base">schedule</span>
              <span>{pkg.duration}</span>
            </div>

            <a
              href="#contact"
              className={`text-center px-6 py-4 rounded-xl font-semibold transition-all duration-300 ease-out active:scale-95 ${
                pkg.highlighted
                  ? 'bg-black text-white border border-black group-hover:bg-white group-hover:text-black'
                  : 'glass-card text-black border-black/10 group-hover:bg-white group-hover:text-black'
              }`}
            >
              Pilih Paket
            </a>
          </div>
        ))}
      </div>

      {/* Add-ons */}
      <div className="mt-14">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-xl bg-black/5 border border-black/10 flex items-center justify-center">
            <span className="material-symbols-outlined text-primary">add_circle</span>
          </div>
          <div>
            <h3 className="text-xl font-bold text-black">Layanan Tambahan</h3>
            <p className="text-xs text-black/50 uppercase tracking-widest">Optional Add-ons</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {addons.map((addon, index) => (
            <div key={index} className="group glass-card rounded-xl p-6 flex items-center justify-between gap-4 border-black/5 hover:bg-black transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl hover:shadow-black/15">
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-primary group-hover:text-white group-hover:bg-white/10 p-3 rounded-lg bg-black/5 transition-colors">{addon.icon}</span>
                <div>
                  <p className="font-semibold text-black group-hover:text-white transition-colors">{addon.name}</p>
                  <p className="text-xs text-black group-hover:text-white/60 uppercase tracking-widest transition-colors">{addon.note}</p>
                </div>
              </div>
              <p className="font-['Poppins'] font-bold text-primary group-hover:text-white whitespace-nowrap transition-colors">{addon.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
