import React from 'react';
import { Music, Shield, Users, Award, MapPin, ChevronDown, Sparkles, HeartPulse, Scale, Globe, ExternalLink, Newspaper } from 'lucide-react';
import heroBanner from '../assets/images/psm_hero_banner_1786552870249.jpg';
import psmLogo from '../assets/images/psm_official_logo_1786553526847.jpg';

export const Hero: React.FC = () => {
  return (
    <section id="beranda" className="relative min-h-screen pt-28 pb-16 flex items-center overflow-hidden bg-red-950 text-white">
      {/* Background Image with Red Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBanner}
          alt="PSM Banaspati Mojopahit Hero Banner"
          className="w-full h-full object-cover object-center scale-105 filter brightness-75 transition-transform duration-1000"
          referrerPolicy="no-referrer"
        />
        {/* Layered Red Vignette Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-red-950 via-red-950/85 to-red-900/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-red-950 via-red-950/40 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-black/60" />
      </div>

      {/* Decorative Golden Majapahit Flame Accents */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-red-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Content */}
          <div className="lg:col-span-7 text-left space-y-6">
            
            {/* Top Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-900/80 border border-amber-500/40 text-amber-300 text-xs sm:text-sm font-semibold tracking-wide backdrop-blur-sm shadow-lg">
              <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
              <span>Perkumpulan Swadaya Masyarakat (PSM)</span>
              <span className="bg-amber-400/20 text-amber-200 text-[10px] uppercase px-2 py-0.5 rounded font-mono">
                Jawa Timur
              </span>
            </div>

            {/* Title */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-white font-serif">
                PSM BANASPATI <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-200">
                  MOJOPAHIT
                </span>
              </h1>
              <p className="text-red-200 font-medium text-base sm:text-lg max-w-2xl leading-relaxed">
                Menjunjung tinggi semangat swadaya gotong royong, keluhuran tradisi tanah Majapahit, serta komitmen pengabdian sosial, advokasi hukum, dan pembinaan pemuda generasi bangsa.
              </p>
            </div>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-2.5 pt-2">
              <div className="flex items-center gap-2 bg-red-900/60 border border-red-700/50 px-3 py-1.5 rounded-lg text-xs font-medium text-red-100">
                <Users className="w-4 h-4 text-amber-400" />
                <span>Pemberdayaan Masyarakat</span>
              </div>
              <div className="flex items-center gap-2 bg-red-900/60 border border-red-700/50 px-3 py-1.5 rounded-lg text-xs font-medium text-red-100">
                <Scale className="w-4 h-4 text-amber-400" />
                <span>Tim Advokasi Hukum</span>
              </div>
              <div className="flex items-center gap-2 bg-red-900/60 border border-red-700/50 px-3 py-1.5 rounded-lg text-xs font-medium text-red-100">
                <HeartPulse className="w-4 h-4 text-amber-400" />
                <span>Rehabilitasi & Anti Narkoba</span>
              </div>
              <div className="flex items-center gap-2 bg-red-900/60 border border-red-700/50 px-3 py-1.5 rounded-lg text-xs font-medium text-red-100">
                <MapPin className="w-4 h-4 text-amber-400" />
                <span>DPD Jatim & DPC Daerah</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap gap-3.5 items-center">
              <a
                href="https://banaspatinetseven.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-300 text-red-950 font-black px-6 py-3.5 rounded-xl text-base shadow-xl shadow-amber-500/25 transition-all hover:scale-[1.02] cursor-pointer ring-2 ring-amber-300/50"
              >
                <Globe className="w-5 h-5 text-red-950 animate-spin-slow" />
                <span>Kunjungi banaspatinetseven.com</span>
                <ExternalLink className="w-4 h-4 text-red-950 opacity-80" />
              </a>

              <a
                href="#pengurus"
                className="flex items-center justify-center gap-2 bg-red-900/80 hover:bg-red-800 text-white font-semibold px-5 py-3.5 rounded-xl border border-red-700/60 text-base backdrop-blur-sm transition-all hover:border-amber-400/50"
              >
                <Users className="w-5 h-5 text-amber-400" />
                <span>Susunan Pengurus</span>
              </a>

              <a
                href="#sejarah"
                className="flex items-center justify-center gap-2 bg-red-900/60 hover:bg-red-800/80 text-red-200 hover:text-white font-medium px-4 py-3.5 rounded-xl border border-red-800/60 text-sm backdrop-blur-sm transition-all"
              >
                <Shield className="w-4 h-4 text-amber-400/80" />
                <span>Sejarah</span>
              </a>
            </div>

            {/* Key Leaders Quick Ribbon */}
            <div className="pt-4 border-t border-red-800/50 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-red-200">
              <div className="bg-red-900/30 p-2.5 rounded-lg border border-red-800/40">
                <span className="text-amber-400 block font-semibold text-[11px] uppercase">Ketua Umum</span>
                <span className="text-white font-bold text-sm">Hari Priyatno</span>
              </div>
              <div className="bg-red-900/30 p-2.5 rounded-lg border border-red-800/40">
                <span className="text-amber-400 block font-semibold text-[11px] uppercase">Sekretaris Jenderal</span>
                <span className="text-white font-bold text-sm">Wahyu Saputra</span>
              </div>
              <div className="bg-red-900/30 p-2.5 rounded-lg border border-red-800/40 col-span-2 sm:col-span-1">
                <span className="text-amber-400 block font-semibold text-[11px] uppercase">Bendahara Umum</span>
                <span className="text-white font-bold text-sm">Riska Indraswari</span>
              </div>
            </div>

          </div>

          {/* Right Feature Card Visual */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md bg-gradient-to-b from-red-900/90 to-red-950/95 border-2 border-amber-500/40 rounded-2xl p-6 shadow-2xl backdrop-blur-md">
              {/* Emblem Logo */}
              <div className="text-center space-y-4">
                <div className="relative mx-auto w-36 h-36 rounded-full overflow-hidden border-4 border-amber-400/90 shadow-2xl shadow-black bg-black p-1 group">
                  <img
                    src={psmLogo}
                    alt="Emblem Banaspati Mojopahit"
                    className="w-full h-full object-contain"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 rounded-full border border-amber-300/30 pointer-events-none" />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-amber-300 font-serif">
                    PENGABDIAN SWADAYA MOJOPAHIT
                  </h3>
                  <p className="text-xs text-red-200 mt-1">
                    Sekretariat Pusat & Jejaring DPD / DPC Jawa Timur
                  </p>
                </div>
              </div>

              {/* Statistics Grid */}
              <div className="mt-6 grid grid-cols-2 gap-3 pt-4 border-t border-red-800/60">
                <div className="bg-red-950/80 p-3 rounded-xl border border-red-800/50 text-center">
                  <div className="text-2xl font-black text-amber-400 font-mono">5+</div>
                  <div className="text-[11px] text-red-200">Cabang DPD & DPC</div>
                </div>
                <div className="bg-red-950/80 p-3 rounded-xl border border-red-800/50 text-center">
                  <div className="text-2xl font-black text-amber-400 font-mono">25+</div>
                  <div className="text-[11px] text-red-200">Jajaran Pengurus</div>
                </div>
                <div className="bg-red-950/80 p-3 rounded-xl border border-red-800/50 text-center">
                  <div className="text-2xl font-black text-amber-400 font-mono">5</div>
                  <div className="text-[11px] text-red-200">Divisi Kerja Khusus</div>
                </div>
                <div className="bg-red-950/80 p-3 rounded-xl border border-red-800/50 text-center">
                  <div className="text-2xl font-black text-amber-400 font-mono">100%</div>
                  <div className="text-[11px] text-red-200">Komitmen Advokasi</div>
                </div>
              </div>

              {/* Quick Info Bar */}
              <div className="mt-4 bg-amber-500/10 border border-amber-500/30 rounded-xl p-3 flex items-center justify-between text-xs text-amber-200">
                <span className="font-medium">Kediri • Tulungagung • Nganjuk • Ngawi • Magetan</span>
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
              </div>
            </div>
          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="mt-12 text-center">
          <a
            href="#sejarah"
            className="inline-flex items-center gap-2 text-red-300 hover:text-amber-300 text-xs font-medium tracking-widest uppercase transition-colors"
          >
            <span>Lanjut ke Sejarah Organisasi</span>
            <ChevronDown className="w-4 h-4 animate-bounce" />
          </a>
        </div>

      </div>
    </section>
  );
};
