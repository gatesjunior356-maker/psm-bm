import React from 'react';
import psmLogo from '../assets/images/psm_official_logo_1786553526847.jpg';
import { Shield, Heart, MapPin, ChevronUp, Globe, ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-red-950 text-white border-t border-red-800/80 pt-16 pb-12 relative overflow-hidden">
      
      {/* Decorative Gradient Line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-800 via-amber-400 to-red-800" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 items-start">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-amber-400/90 shadow-lg bg-black p-0.5">
                <img
                  src={psmLogo}
                  alt="Logo Banaspati Mojopahit"
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <span className="text-amber-400 text-xs font-bold uppercase tracking-wider block">
                  Perkumpulan Swadaya Masyarakat
                </span>
                <h3 className="text-xl font-black font-serif text-white tracking-wide">
                  PSM BANASPATI <span className="text-amber-400">MOJOPAHIT</span>
                </h3>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-red-200 leading-relaxed max-w-md">
              Perkumpulan Swadaya Masyarakat (PSM) Banaspati Mojopahit berkarakter luhur tanah Majapahit, memperjuangkan pemberdayaan masyarakat, perlindungan hukum anggota, serta kepemudaan yang sehat dan bebas dari penyalahgunaan narkoba.
            </p>

            {/* Media Portal Box */}
            <div className="pt-1">
              <a
                href="https://banaspatinetseven.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-red-900/80 hover:bg-red-900 border border-amber-500/50 hover:border-amber-400 p-3 rounded-xl transition-all text-xs group max-w-md shadow-md"
              >
                <div className="p-2 rounded-lg bg-amber-500/20 text-amber-400 group-hover:bg-amber-500 group-hover:text-red-950 transition-colors">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] text-amber-300 uppercase font-bold tracking-wider block">Portal Berita & Media Resmi</span>
                  <span className="text-white font-bold text-sm flex items-center gap-1 group-hover:text-amber-300">
                    banaspatinetseven.com
                    <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                  </span>
                </div>
              </a>
            </div>

            <div className="pt-1 flex flex-col gap-1.5 text-xs text-red-300">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                <span>Dsn. Tanjung RT/RW 005/003 Ds. Ngablak Kec. Banyakan, Kediri - Jawa Timur</span>
              </span>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] text-amber-200/90 font-mono">
                <a
                  href="https://wa.me/6285185345830"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-300 font-bold underline transition-colors"
                >
                  Telp/WA: 0851 8534 5830
                </a>
                <span>•</span>
                <a href="mailto:dppbanaspatimojopahit@gmail.com" className="hover:text-amber-300 transition-colors">Email: dppbanaspatimojopahit@gmail.com</a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-amber-300 font-serif uppercase tracking-wider">
              Navigasi Halaman
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-red-200">
              <li>
                <a href="#beranda" className="hover:text-amber-300 transition-colors">Beranda Utama</a>
              </li>
              <li>
                <a href="#sejarah" className="hover:text-amber-300 transition-colors">Sejarah & Visi Misi</a>
              </li>
              <li>
                <a href="#pengurus" className="hover:text-amber-300 transition-colors">Daftar Anggota & Pengurus</a>
              </li>
              <li>
                <a href="#divisi" className="hover:text-amber-300 transition-colors">Divisi Kerja Khusus</a>
              </li>
              <li>
                <a href="#cabang" className="hover:text-amber-300 transition-colors">DPD & DPC Regional</a>
              </li>
            </ul>
          </div>

          {/* Regional Branches List */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-sm font-bold text-amber-300 font-serif uppercase tracking-wider">
              Wilayah DPD & DPC
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs text-red-200">
              <div className="bg-red-900/40 p-2 rounded border border-red-800">
                <span className="text-white font-bold block">DPD Jawa Timur</span>
                <span className="text-[10px] text-red-300">Ketua: M. Agus S.</span>
              </div>
              <div className="bg-red-900/40 p-2 rounded border border-red-800">
                <span className="text-white font-bold block">DPC Tulungagung</span>
                <span className="text-[10px] text-red-300">Ketua: Tri Hadi Susanto</span>
              </div>
              <div className="bg-red-900/40 p-2 rounded border border-red-800">
                <span className="text-white font-bold block">DPC Nganjuk</span>
                <span className="text-[10px] text-red-300">Ketua: Ahmad Rosidi</span>
              </div>
              <div className="bg-red-900/40 p-2 rounded border border-red-800">
                <span className="text-white font-bold block">DPC Magetan</span>
                <span className="text-[10px] text-red-300">Ketua: Nyoto</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-red-900/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-red-300">
          <p>© {new Date().getFullYear()} PSM Banaspati Mojopahit. Seluruh hak cipta dilindungi undang-undang.</p>
          
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-amber-400 hover:text-amber-300 font-semibold bg-red-900/60 px-3 py-1.5 rounded-lg border border-red-800 cursor-pointer transition-colors"
          >
            <span>Kembali ke Atas</span>
            <ChevronUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};
