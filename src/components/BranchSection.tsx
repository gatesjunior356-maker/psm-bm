import React from 'react';
import { REGIONAL_BRANCHES } from '../data/organizationData';
import { MapPin, Building, Users, CheckCircle2, AlertCircle, ShieldCheck } from 'lucide-react';

export const BranchSection: React.FC = () => {
  return (
    <section id="cabang" className="py-20 bg-red-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-900/80 border border-amber-500/40 text-amber-300 text-xs font-semibold uppercase tracking-wider">
            <Building className="w-3.5 h-3.5 text-amber-400" />
            <span>Jejaring Wilayah</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black font-serif text-white tracking-tight">
            DEWAN PIMPINAN DAERAH & <span className="text-amber-400">CABANG DAERAH</span>
          </h2>
          <p className="text-red-200 text-sm sm:text-base">
            Perluasan simpul kepengurusan DPD Jawa Timur dan DPC Kabupaten/Kota dalam memperkuat koordinasi kegiatan kemasyarakatan dan swadaya di daerah.
          </p>
        </div>

        {/* Branch Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REGIONAL_BRANCHES.map((branch) => {
            const isDpd = branch.level === 'DPD';
            const isVacant = branch.ketua === '-';

            return (
              <div
                key={branch.id}
                className={`bg-gradient-to-b ${
                  isDpd
                    ? 'from-red-900/90 via-red-950 to-red-950 border-2 border-amber-400/80 shadow-2xl scale-[1.02]'
                    : 'from-red-900/60 to-red-950/90 border border-red-800/60 shadow-xl'
                } rounded-2xl p-6 relative overflow-hidden flex flex-col justify-between`}
              >
                {/* Header Badge */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-extrabold uppercase border ${
                        isDpd
                          ? 'bg-amber-400 text-red-950 border-amber-300'
                          : 'bg-red-900/80 text-amber-300 border-red-700'
                      }`}
                    >
                      <ShieldCheck className="w-3.5 h-3.5" />
                      {branch.code}
                    </span>

                    <span className="text-[11px] text-red-300 font-medium flex items-center gap-1">
                      <Users className="w-3.5 h-3.5 text-amber-400" />
                      <span>{branch.activeMembersCount} Anggota</span>
                    </span>
                  </div>

                  {/* Branch Name */}
                  <h3 className="text-xl font-bold text-white font-serif">
                    {branch.name}
                  </h3>
                  <p className="text-xs text-red-300 flex items-center gap-1 mt-1">
                    <MapPin className="w-3.5 h-3.5 text-amber-400" />
                    <span>{branch.address}</span>
                  </p>

                  {/* Leaders List */}
                  <div className="mt-5 space-y-2 pt-3 border-t border-red-800/60 text-xs">
                    
                    {/* Ketua */}
                    <div className="bg-red-950/80 p-2.5 rounded-lg border border-red-800/50 flex items-center justify-between">
                      <span className="text-amber-400 font-bold">Ketua:</span>
                      <span className={`font-semibold ${isVacant ? 'text-red-400 italic' : 'text-white'}`}>
                        {branch.ketua && branch.ketua !== '-' ? branch.ketua : 'Dalam Pembentukan / Terbuka'}
                      </span>
                    </div>

                    {/* Sekretaris */}
                    <div className="bg-red-950/80 p-2.5 rounded-lg border border-red-800/50 flex items-center justify-between">
                      <span className="text-amber-300 font-medium">Sekretaris:</span>
                      <span className="text-red-100 font-medium">
                        {branch.sekretaris && branch.sekretaris !== '-' ? branch.sekretaris : '-'}
                      </span>
                    </div>

                    {/* Bendahara */}
                    <div className="bg-red-950/80 p-2.5 rounded-lg border border-red-800/50 flex items-center justify-between">
                      <span className="text-amber-300 font-medium">Bendahara:</span>
                      <span className="text-red-100 font-medium">
                        {branch.bendahara && branch.bendahara !== '-' ? branch.bendahara : '-'}
                      </span>
                    </div>

                  </div>
                </div>

                {/* Status Footer */}
                <div className="mt-6 pt-3 border-t border-red-800/50 flex items-center justify-between text-[11px]">
                  {isVacant ? (
                    <span className="text-amber-300 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>Terbuka Pendaftaran Cabang</span>
                    </span>
                  ) : (
                    <span className="text-emerald-400 flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Aktif Terverifikasi Pusat</span>
                    </span>
                  )}
                  <a
                    href="#kontak"
                    className="text-amber-400 hover:text-amber-300 font-bold underline"
                  >
                    Kontak Cabang
                  </a>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
