import React, { useState, useMemo } from 'react';
import { ORGANIZATION_MEMBERS } from '../data/organizationData';
import { Member, MemberCategory } from '../types';
import {
  Users,
  Search,
  Shield,
  Award,
  Filter,
  CheckCircle2,
  Briefcase,
  Crown,
  UserCheck,
  Scale,
  HeartPulse,
  Database,
  Radio,
  FileText,
  Building,
  Layers,
  ChevronRight
} from 'lucide-react';

interface OrgStructureProps {
  onSelectMember: (member: Member) => void;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

export const OrgStructure: React.FC<OrgStructureProps> = ({
  onSelectMember,
  searchTerm,
  setSearchTerm
}) => {
  const [selectedCategory, setSelectedCategory] = useState<MemberCategory>('semua');
  const [viewMode, setViewMode] = useState<'cards' | 'hierarchy'>('cards');

  // Filtered members based on category and search query
  const filteredMembers = useMemo(() => {
    return ORGANIZATION_MEMBERS.filter((member) => {
      const matchesCategory =
        selectedCategory === 'semua' || member.category === selectedCategory;

      const q = searchTerm.toLowerCase().trim();
      const matchesSearch =
        !q ||
        member.name.toLowerCase().includes(q) ||
        member.role.toLowerCase().includes(q) ||
        member.department.toLowerCase().includes(q) ||
        (member.subCategory && member.subCategory.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchTerm]);

  // Helper icons for departments
  const getRoleBadge = (role: string) => {
    if (role.includes('Ketua Umum')) {
      return {
        bg: 'bg-amber-500/20 text-amber-300 border-amber-500/50',
        icon: <Crown className="w-3.5 h-3.5 text-amber-400" />
      };
    }
    if (role.includes('Advokasi')) {
      return {
        bg: 'bg-blue-500/20 text-blue-300 border-blue-500/40',
        icon: <Scale className="w-3.5 h-3.5 text-blue-400" />
      };
    }
    if (role.includes('Pembina') || role.includes('Penasehat')) {
      return {
        bg: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
        icon: <Shield className="w-3.5 h-3.5 text-emerald-400" />
      };
    }
    if (role.includes('Narkoba') || role.includes('Kesehatan')) {
      return {
        bg: 'bg-rose-500/20 text-rose-300 border-rose-500/40',
        icon: <HeartPulse className="w-3.5 h-3.5 text-rose-400" />
      };
    }
    if (role.includes('DPD') || role.includes('DPC')) {
      return {
        bg: 'bg-amber-600/20 text-amber-200 border-amber-600/40',
        icon: <Building className="w-3.5 h-3.5 text-amber-400" />
      };
    }
    return {
      bg: 'bg-red-900/60 text-red-200 border-red-700/50',
      icon: <UserCheck className="w-3.5 h-3.5 text-amber-400" />
    };
  };

  return (
    <section id="pengurus" className="py-20 bg-red-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-900/80 border border-amber-500/40 text-amber-300 text-xs font-semibold uppercase tracking-wider">
            <Users className="w-3.5 h-3.5 text-amber-400" />
            <span>Struktur Organisasi</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black font-serif text-white tracking-tight">
            SUSUNAN PENGURUS & <span className="text-amber-400">ANGGOTA RESMI</span>
          </h2>
          <p className="text-red-200 text-sm sm:text-base">
            Daftar lengkap jajaran Dewan Penasehat, Pembina, Advokasi, Pengurus Harian Pusat, Divisi Kerja, serta pimpinan DPD dan DPC PSM Banaspati Mojopahit.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="mt-10 bg-red-900/40 border border-red-800/60 rounded-2xl p-4 sm:p-6 backdrop-blur-md shadow-xl space-y-4">
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-amber-400" />
              <input
                type="text"
                placeholder="Cari nama atau jabatan..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-red-950/80 border border-red-700/60 text-white text-sm rounded-xl pl-10 pr-4 py-2.5 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all placeholder:text-red-400"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-red-300 hover:text-white bg-red-800 px-1.5 py-0.5 rounded"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Category Filter Tabs */}
            <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto overflow-x-auto pb-1 md:pb-0">
              <button
                onClick={() => setSelectedCategory('semua')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${
                  selectedCategory === 'semua'
                    ? 'bg-amber-400 text-red-950 shadow-md'
                    : 'bg-red-950/60 text-red-200 hover:bg-red-900/80 border border-red-800/50'
                }`}
              >
                Semua ({ORGANIZATION_MEMBERS.length})
              </button>

              <button
                onClick={() => setSelectedCategory('pengurus_harian')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${
                  selectedCategory === 'pengurus_harian'
                    ? 'bg-amber-400 text-red-950 shadow-md'
                    : 'bg-red-950/60 text-red-200 hover:bg-red-900/80 border border-red-800/50'
                }`}
              >
                Pengurus Harian
              </button>

              <button
                onClick={() => setSelectedCategory('penasehat_pembina')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${
                  selectedCategory === 'penasehat_pembina'
                    ? 'bg-amber-400 text-red-950 shadow-md'
                    : 'bg-red-950/60 text-red-200 hover:bg-red-900/80 border border-red-800/50'
                }`}
              >
                Penasehat & Advokasi
              </button>

              <button
                onClick={() => setSelectedCategory('divisi')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${
                  selectedCategory === 'divisi'
                    ? 'bg-amber-400 text-red-950 shadow-md'
                    : 'bg-red-950/60 text-red-200 hover:bg-red-900/80 border border-red-800/50'
                }`}
              >
                Divisi Kerja
              </button>

              <button
                onClick={() => setSelectedCategory('wilayah')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${
                  selectedCategory === 'wilayah'
                    ? 'bg-amber-400 text-red-950 shadow-md'
                    : 'bg-red-950/60 text-red-200 hover:bg-red-900/80 border border-red-800/50'
                }`}
              >
                DPD & DPC
              </button>
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center gap-1 bg-red-950 p-1 rounded-xl border border-red-800/60 self-end md:self-auto">
              <button
                onClick={() => setViewMode('cards')}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 cursor-pointer ${
                  viewMode === 'cards'
                    ? 'bg-red-800 text-amber-300 font-bold border border-amber-500/30'
                    : 'text-red-300 hover:text-white'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>Kartu</span>
              </button>
              <button
                onClick={() => setViewMode('hierarchy')}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 cursor-pointer ${
                  viewMode === 'hierarchy'
                    ? 'bg-red-800 text-amber-300 font-bold border border-amber-500/30'
                    : 'text-red-300 hover:text-white'
                }`}
              >
                <Building className="w-3.5 h-3.5" />
                <span>Bagan Organisasi</span>
              </button>
            </div>

          </div>

        </div>

        {/* Members Cards View */}
        {viewMode === 'cards' ? (
          <div className="mt-8">
            {filteredMembers.length === 0 ? (
              <div className="bg-red-900/30 border border-red-800/50 rounded-2xl p-12 text-center text-red-200">
                <Search className="w-12 h-12 text-amber-400/50 mx-auto mb-3" />
                <p className="text-base font-semibold">Tidak ada anggota yang ditemukan</p>
                <p className="text-xs text-red-300 mt-1">Coba kata kunci pencarian lain atau pilih kategori Semua.</p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('semua');
                  }}
                  className="mt-4 px-4 py-2 bg-amber-400 text-red-950 rounded-lg text-xs font-bold hover:bg-amber-300"
                >
                  Reset Filter
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {filteredMembers.map((member) => {
                  const badge = getRoleBadge(member.role);
                  return (
                    <div
                      key={member.id}
                      onClick={() => onSelectMember(member)}
                      className="bg-gradient-to-b from-red-900/70 to-red-950/90 border border-red-800/60 hover:border-amber-400/70 rounded-2xl p-5 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 cursor-pointer flex flex-col justify-between group relative overflow-hidden"
                    >
                      {/* Top Accent Stripe */}
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-700 via-amber-400 to-red-700 opacity-60 group-hover:opacity-100 transition-opacity" />

                      <div>
                        {/* Role Badge */}
                        <div className="flex items-center justify-between mb-3">
                          <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold border ${badge.bg}`}>
                            {badge.icon}
                            <span>{member.role}</span>
                          </span>
                          {member.subCategory && (
                            <span className="text-[10px] text-amber-300/80 font-mono bg-red-950 px-2 py-0.5 rounded border border-red-800/50">
                              {member.subCategory}
                            </span>
                          )}
                        </div>

                        {/* Name & Title */}
                        <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors font-serif leading-snug">
                          {member.name}
                        </h3>
                        
                        <p className="text-xs text-red-200 mt-1 font-medium flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                          <span>{member.department}</span>
                        </p>

                        {/* Short Bio */}
                        {member.bio && (
                          <p className="text-xs text-red-300/90 mt-3 line-clamp-2 leading-relaxed">
                            {member.bio}
                          </p>
                        )}
                      </div>

                      {/* Footer Action */}
                      <div className="mt-4 pt-3 border-t border-red-800/50 flex items-center justify-between text-xs text-amber-400/80 font-medium group-hover:text-amber-300">
                        <span>Lihat Profil Pengurus</span>
                        <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        ) : (
          /* Hierarchy Chart View */
          <div className="mt-8 bg-gradient-to-b from-red-950 via-red-900/60 to-red-950 border border-red-800/60 rounded-2xl p-6 sm:p-10 shadow-2xl overflow-x-auto">
            <div className="min-w-[750px] space-y-10 text-center">
              
              {/* Level 1: Penasehat, Pembina & Advokasi */}
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-amber-400 bg-red-900/80 px-3 py-1 rounded-full border border-amber-500/30">
                  DEWAN PENASEHAT, PEMBINA & ADVOKASI HUKUM
                </span>
                
                <div className="mt-4 grid grid-cols-3 gap-4">
                  {/* Penasehat */}
                  <div className="bg-red-900/70 border border-emerald-500/40 p-4 rounded-xl">
                    <div className="text-xs text-emerald-300 font-bold uppercase mb-1">Penasehat</div>
                    <div className="text-sm font-bold text-white">Haryo Wijoyo</div>
                    <div className="text-sm font-bold text-white">Krisna Dwipayana</div>
                  </div>

                  {/* Pembina */}
                  <div className="bg-red-900/70 border border-amber-500/40 p-4 rounded-xl">
                    <div className="text-xs text-amber-300 font-bold uppercase mb-1">Pembina Utama</div>
                    <div className="text-sm font-bold text-white">Syarif Umar Al Faruq</div>
                  </div>

                  {/* Advokasi */}
                  <div className="bg-red-900/70 border border-blue-500/40 p-4 rounded-xl">
                    <div className="text-xs text-blue-300 font-bold uppercase mb-1">Advokasi Hukum</div>
                    <div className="text-xs text-white font-medium">Sutrisno S.H, M.H • Joko Sujarwo SH</div>
                    <div className="text-xs text-white font-medium mt-1">Chamim S.H • Herlina Putri K.</div>
                  </div>
                </div>
              </div>

              {/* Connecting Line */}
              <div className="w-0.5 h-8 bg-amber-400/60 mx-auto" />

              {/* Level 2: Ketua Umum & Pengurus Harian Pusat */}
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-amber-400 bg-red-900/80 px-3 py-1 rounded-full border border-amber-500/30">
                  PENGURUS HARIAN PUSAT
                </span>

                <div className="mt-4 max-w-xl mx-auto bg-gradient-to-r from-red-900 via-amber-950/80 to-red-900 border-2 border-amber-400 p-5 rounded-2xl shadow-xl">
                  <div className="text-xs text-amber-400 font-extrabold uppercase tracking-wider">Ketua Umum</div>
                  <div className="text-xl font-black text-white font-serif mt-0.5">Hari Priyatno</div>
                  
                  <div className="mt-3 pt-3 border-t border-amber-500/30 grid grid-cols-2 gap-3 text-xs text-red-100">
                    <div>
                      <span className="text-amber-300 block font-semibold">Wakil Ketua Umum</span>
                      <span className="font-bold text-white text-sm">Riadi</span>
                    </div>
                    <div>
                      <span className="text-amber-300 block font-semibold">Wakil Ketua</span>
                      <span className="font-bold text-white text-sm">Sulis Nova Fadli</span>
                    </div>
                  </div>

                  <div className="mt-3 pt-3 border-t border-red-800 grid grid-cols-2 gap-3 text-xs">
                    <div className="bg-red-950/60 p-2 rounded border border-red-800">
                      <span className="text-amber-300 block font-semibold">Sekretaris Jenderal</span>
                      <span className="text-white font-bold">Wawan</span>
                      <span className="text-[10px] text-red-300 block mt-1">Wasekjen: Suci Afifatul J. & Jefri Bagus S.</span>
                    </div>
                    <div className="bg-red-950/60 p-2 rounded border border-red-800">
                      <span className="text-amber-300 block font-semibold">Bendahara Umum</span>
                      <span className="text-white font-bold">Riska Indraswari</span>
                      <span className="text-[10px] text-red-300 block mt-1">Bendum II: Salza Ayu Puspa A.P.</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Connecting Line */}
              <div className="w-0.5 h-8 bg-amber-400/60 mx-auto" />

              {/* Level 3: Divisi - Divisi Kerja Khusus */}
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-amber-400 bg-red-900/80 px-3 py-1 rounded-full border border-amber-500/30">
                  DIVISI KERJA OPERASIONAL
                </span>

                <div className="mt-4 grid grid-cols-4 gap-3">
                  <div className="bg-red-900/60 border border-red-800 p-3 rounded-xl text-left">
                    <div className="text-[11px] text-amber-400 font-bold uppercase">Humas</div>
                    <div className="text-xs text-white font-semibold">Agung Gita Fiandra</div>
                    <div className="text-xs text-red-200">M. Ardi Al Hamzah</div>
                  </div>

                  <div className="bg-red-900/60 border border-red-800 p-3 rounded-xl text-left">
                    <div className="text-[11px] text-amber-400 font-bold uppercase">Data & Informasi</div>
                    <div className="text-xs text-white font-semibold">Agus Sutrisno</div>
                    <div className="text-xs text-red-200">Marlina</div>
                  </div>

                  <div className="bg-red-900/60 border border-red-800 p-3 rounded-xl text-left">
                    <div className="text-[11px] text-amber-400 font-bold uppercase">Kesehatan</div>
                    <div className="text-xs text-white font-semibold">Dr. Agus</div>
                    <div className="text-xs text-red-200">Hariyanto</div>
                  </div>

                  <div className="bg-red-900/60 border border-red-800 p-3 rounded-xl text-left">
                    <div className="text-[11px] text-amber-400 font-bold uppercase">Kepemudaan & Anti Narkoba</div>
                    <div className="text-xs text-white font-semibold">Luki Diandaru</div>
                  </div>
                </div>
              </div>

              {/* Connecting Line */}
              <div className="w-0.5 h-8 bg-amber-400/60 mx-auto" />

              {/* Level 4: DPD Jawa Timur & DPC Cabang */}
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-amber-400 bg-red-900/80 px-3 py-1 rounded-full border border-amber-500/30">
                  PENGURUS REGIONAL DPD & DPC DAERAH
                </span>

                <div className="mt-4 grid grid-cols-5 gap-2.5 text-xs text-left">
                  <div className="bg-red-900/80 border border-amber-500/30 p-2.5 rounded-xl">
                    <div className="text-amber-300 font-bold">DPD Jawa Timur</div>
                    <div className="text-white font-medium">Ketua: M. Agus S.</div>
                    <div className="text-red-200 text-[10px]">Sek: Hariyanto</div>
                    <div className="text-red-200 text-[10px]">Ben: Abdul Rohman</div>
                  </div>

                  <div className="bg-red-900/60 border border-red-800 p-2.5 rounded-xl">
                    <div className="text-amber-300 font-bold">DPC Tulungagung</div>
                    <div className="text-white font-medium">Ketua: Tri Hadi Susanto</div>
                    <div className="text-red-200 text-[10px]">Ben: Nanik Puji L.</div>
                  </div>

                  <div className="bg-red-900/60 border border-red-800 p-2.5 rounded-xl">
                    <div className="text-amber-300 font-bold">DPC Nganjuk</div>
                    <div className="text-white font-medium">Ketua: Ahmad Rosidi</div>
                  </div>

                  <div className="bg-red-900/60 border border-red-800 p-2.5 rounded-xl">
                    <div className="text-amber-300 font-bold">DPC Ngawi</div>
                    <div className="text-red-300 text-[11px] italic">Terbuka / Dalam Pembentukan</div>
                  </div>

                  <div className="bg-red-900/60 border border-red-800 p-2.5 rounded-xl">
                    <div className="text-amber-300 font-bold">DPC Magetan</div>
                    <div className="text-white font-medium">Ketua: Nyoto</div>
                    <div className="text-red-200 text-[10px]">Sek: Warsudi</div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
