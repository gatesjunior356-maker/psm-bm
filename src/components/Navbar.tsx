import React, { useState, useEffect } from 'react';
import { Music, Menu, X, Shield, Users, Search, ChevronRight, MapPin, Globe, ExternalLink } from 'lucide-react';
import psmLogo from '../assets/images/psm_official_logo_1786553526847.jpg';

interface NavbarProps {
  onSearchClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onSearchClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Beranda', href: '#beranda' },
    { name: 'Sejarah', href: '#sejarah' },
    { name: 'Pengurus', href: '#pengurus' },
    { name: 'Divisi', href: '#divisi' },
    { name: 'DPD & DPC', href: '#cabang' },
    { name: 'Kontak', href: '#kontak' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-red-950/95 backdrop-blur-md border-b border-red-800/50 shadow-2xl py-3'
          : 'bg-gradient-to-b from-red-950/90 via-red-950/60 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Title */}
          <a href="#beranda" className="flex items-center gap-3 group">
            <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-amber-400/80 shadow-lg shadow-red-900/50 group-hover:scale-105 transition-transform duration-300">
              <img
                src={psmLogo}
                alt="Logo PSM Banaspati Mojopahit"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-amber-400 font-bold tracking-wider text-[11px] uppercase bg-red-900/60 px-2 py-0.5 rounded border border-amber-500/30">
                  Swadaya Masyarakat
                </span>
                <span className="text-red-300 text-xs hidden sm:inline-block">★ Mojopahit</span>
              </div>
              <h1 className="text-lg sm:text-xl font-extrabold text-white tracking-wide group-hover:text-amber-300 transition-colors font-serif">
                PSM BANASPATI <span className="text-amber-400">MOJOPAHIT</span>
              </h1>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-2 rounded-lg text-sm font-medium text-red-100 hover:text-amber-300 hover:bg-red-900/40 transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-2.5">
            <a
              href="https://banaspatinetseven.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 bg-red-900/80 hover:bg-red-800 text-amber-300 px-3 py-2 rounded-lg text-xs font-semibold border border-amber-500/40 hover:border-amber-400 transition-all cursor-pointer shadow-sm"
              title="Kunjungi Situs Media Resmi banaspatinetseven.com"
            >
              <Globe className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
              <span>Situs Media</span>
              <ExternalLink className="w-3 h-3 opacity-70" />
            </a>

            <button
              onClick={onSearchClick}
              className="flex items-center gap-1.5 bg-red-900/60 hover:bg-red-800 text-red-100 px-3 py-2 rounded-lg text-xs border border-red-700/50 transition-all cursor-pointer shadow-sm"
              title="Cari Anggota / Pengurus"
            >
              <Search className="w-3.5 h-3.5 text-amber-400" />
              <span className="font-medium">Cari</span>
            </button>

            <a
              href="#pengurus"
              className="flex items-center gap-1.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-red-950 font-bold px-3.5 py-2 rounded-lg text-xs transition-all shadow-md hover:shadow-amber-500/20"
            >
              <Users className="w-3.5 h-3.5" />
              <span>Daftar Anggota</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onSearchClick}
              className="p-2 text-amber-400 bg-red-900/60 hover:bg-red-800 rounded-lg border border-red-700/50"
              aria-label="Cari Pengurus"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white bg-red-900/80 hover:bg-red-800 rounded-lg border border-red-700/60"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-red-950/98 border-b border-red-800/80 px-4 pt-3 pb-6 shadow-2xl animate-fadeIn">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-4 py-3 rounded-lg text-base font-medium text-red-100 hover:bg-red-900/70 hover:text-amber-300 transition-colors"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-amber-400/60" />
              </a>
            ))}
            <div className="pt-3 border-t border-red-900/80 flex flex-col gap-2.5">
              <a
                href="https://banaspatinetseven.com"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 bg-red-900/90 text-amber-300 font-bold py-2.5 rounded-lg border border-amber-500/50 text-center text-sm"
              >
                <Globe className="w-4 h-4 text-amber-400" />
                <span>Situs Media (banaspatinetseven.com)</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-70" />
              </a>
              <a
                href="#pengurus"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 text-red-950 font-bold py-2.5 rounded-lg text-center text-sm"
              >
                <Users className="w-4 h-4" />
                <span>Lihat Susunan Pengurus</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
