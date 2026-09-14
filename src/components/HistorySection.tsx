import React from 'react';
import { HISTORY_STORY, HISTORY_MILESTONES } from '../data/historyData';
import { BookOpen, Shield, Target, Compass, Flag, FileText, CheckCircle2, Activity, Award, Landmark, Building2 } from 'lucide-react';

export const HistorySection: React.FC = () => {
  return (
    <section id="sejarah" className="py-20 bg-gradient-to-b from-red-950 via-red-900 to-red-950 text-white relative overflow-hidden">
      {/* Background Subtle Patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-500/5 via-transparent to-black/40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-900/80 border border-amber-500/40 text-amber-300 text-xs font-semibold uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5 text-amber-400" />
            <span>Landasan Konstitusi & Legalitas</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black font-serif text-white tracking-tight">
            AZAS, VISI, MISI & <span className="text-amber-400">KEGIATAN ORGANISASI</span>
          </h2>
          <p className="text-red-200 text-sm sm:text-base leading-relaxed">
            {HISTORY_STORY.subtitle}
          </p>
        </div>

        {/* Legalitas & Azas Banner */}
        <div className="mt-8 bg-red-950/80 border border-amber-500/30 rounded-2xl p-5 sm:p-6 shadow-xl grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex items-center gap-3 border-b md:border-b-0 md:border-r border-red-800/60 pb-3 md:pb-0 md:pr-4">
            <div className="p-2.5 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/40">
              <Landmark className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] uppercase tracking-wider text-amber-300 font-bold block">Azas Organisasi (Pasal 4)</span>
              <span className="text-white font-bold text-xs sm:text-sm">{HISTORY_STORY.azas}</span>
            </div>
          </div>

          <div className="flex items-center gap-3 border-b md:border-b-0 md:border-r border-red-800/60 pb-3 md:pb-0 md:pr-4">
            <div className="p-2.5 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/40">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] uppercase tracking-wider text-amber-300 font-bold block">SK Pendirian (Pasal 2)</span>
              <span className="text-white font-bold text-xs sm:text-sm">{HISTORY_STORY.skNomor}</span>
              <span className="text-[11px] text-red-300 block">Didirikan: {HISTORY_STORY.pendirian}</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/40">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] uppercase tracking-wider text-amber-300 font-bold block">Kedudukan (Pasal 3)</span>
              <span className="text-white font-bold text-xs sm:text-sm">{HISTORY_STORY.kedudukan}</span>
            </div>
          </div>
        </div>

        {/* Narrative & Image Spotlight */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Story Text */}
          <div className="lg:col-span-6 bg-red-950/70 border border-red-800/60 rounded-2xl p-6 sm:p-8 space-y-4 backdrop-blur-sm shadow-xl">
            <h3 className="text-xl font-bold text-amber-300 font-serif border-b border-red-800/80 pb-3 flex items-center gap-2">
              <Shield className="w-5 h-5 text-amber-400" />
              <span>Tentang DPD PSM Banaspati Mojopahit</span>
            </h3>
            
            <p className="text-red-100 text-sm sm:text-base leading-relaxed font-normal">
              {HISTORY_STORY.summary}
            </p>

            {HISTORY_STORY.paragraphs.map((p, idx) => (
              <p key={idx} className="text-red-200/90 text-sm leading-relaxed">
                {p}
              </p>
            ))}

            {/* Tujuan Organisasi Box (Pasal 7) */}
            <div className="mt-6 pt-4 border-t border-red-800/80 space-y-3">
              <div className="flex items-center gap-2 text-amber-400 font-bold text-sm uppercase tracking-wider">
                <Flag className="w-4 h-4 text-amber-400" />
                <span>Tujuan Organisasi (Pasal 7)</span>
              </div>
              <ul className="space-y-2">
                {HISTORY_STORY.tujuan.map((t, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-red-100">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Visi & Misi Box */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Visi Card (Pasal 5) */}
            <div className="bg-gradient-to-br from-red-900/90 via-red-950 to-red-950 border border-amber-500/40 rounded-2xl p-6 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Target className="w-24 h-24 text-amber-400" />
              </div>
              <div className="flex items-center gap-2 text-amber-400 font-bold text-sm uppercase tracking-wider mb-2">
                <Target className="w-4 h-4" />
                <span>Visi Organisasi (Pasal 5)</span>
              </div>
              <p className="text-white text-sm sm:text-base font-serif font-semibold leading-relaxed">
                "{HISTORY_STORY.visi}"
              </p>
            </div>

            {/* Misi Card (Pasal 6) */}
            <div className="bg-red-950/80 border border-red-800/70 rounded-2xl p-6 shadow-xl space-y-3">
              <div className="flex items-center gap-2 text-amber-400 font-bold text-sm uppercase tracking-wider mb-1">
                <Compass className="w-4 h-4" />
                <span>Misi Strategis (Pasal 6)</span>
              </div>
              <ul className="space-y-2.5">
                {HISTORY_STORY.misi.map((m, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-red-100">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-amber-400/20 text-amber-300 font-bold text-[11px] flex items-center justify-center border border-amber-500/40 mt-0.5">
                      {idx + 1}
                    </span>
                    <span className="leading-snug">{m}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>

        {/* Kegiatan Organisasi (Pasal 8) */}
        <div className="mt-12 pt-8 border-t border-red-800/60">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase mb-2">
              <Activity className="w-3.5 h-3.5 text-amber-400" />
              <span>Pasal 8 AD/ART</span>
            </div>
            <h3 className="text-2xl font-bold font-serif text-white">
              KEGIATAN ORGANISASI <span className="text-amber-400">DPD PSM-BM</span>
            </h3>
            <p className="text-xs sm:text-sm text-red-200 mt-1">
              Ruang lingkup aksi dan program kerja resmi DPD PSM Banaspati Mojopahit
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {HISTORY_STORY.kegiatanOrganisasi.map((item, idx) => (
              <div
                key={idx}
                className="bg-red-950/80 border border-red-800/70 hover:border-amber-400/60 rounded-xl p-4 transition-all duration-300 hover:-translate-y-1 group flex flex-col justify-between shadow-lg"
              >
                <div>
                  <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 border border-amber-500/40 flex items-center justify-center font-bold text-xs mb-3 group-hover:bg-amber-500 group-hover:text-red-950 transition-colors">
                    0{idx + 1}
                  </div>
                  <h4 className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors font-serif mb-1.5">
                    {item.title}
                  </h4>
                  <p className="text-xs text-red-200/90 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Milestones Timeline */}
        <div className="mt-12 pt-10 border-t border-red-800/60">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold font-serif text-white">
              LEGALITAS & <span className="text-amber-400">PENGUATAN WILAYAH</span>
            </h3>
            <p className="text-xs sm:text-sm text-red-200 mt-1">
              Ketentuan organisasi dan ruang gerak pengabdian DPD PSM Banaspati Mojopahit
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {HISTORY_MILESTONES.map((item, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-b from-red-900/60 to-red-950/90 border border-red-800/60 rounded-xl p-5 hover:border-amber-400/60 transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2.5 py-1 rounded bg-amber-500/20 text-amber-300 font-mono text-xs font-bold border border-amber-500/30">
                    {item.year}
                  </span>
                  <span className="text-[10px] uppercase tracking-wider text-red-300 bg-red-900/60 px-2 py-0.5 rounded">
                    {item.tag}
                  </span>
                </div>
                <h4 className="text-base font-bold text-white group-hover:text-amber-300 transition-colors font-serif">
                  {item.title}
                </h4>
                <p className="text-xs text-red-200 mt-2 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

