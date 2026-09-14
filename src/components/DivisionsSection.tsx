import React from 'react';
import { Scale, HeartPulse, Database, Radio, ShieldAlert, Sparkles, CheckCircle } from 'lucide-react';

export const DivisionsSection: React.FC = () => {
  const divisions = [
    {
      title: 'Tim Advokasi & Legal',
      icon: <Scale className="w-6 h-6 text-blue-400" />,
      color: 'from-blue-900/50 to-red-950',
      borderColor: 'border-blue-500/40',
      head: 'Sutrisno S.H, M.H • Joko Sujarwo SH',
      members: 'Chamim S.H • Herlina Putri Kusumawardani',
      description: 'Memberikan perlindungan hukum, pendampingan legalitas kelembagaan, serta konseling hak-hak hukum anggota dan masyarakat luas.',
      highlights: ['Konsultasi Legal Bebas Biaya Anggota', 'Pendampingan Advokasi Masyarakat', 'Perizinan Kegiatan Organisasi']
    },
    {
      title: 'Kadiv Kepemudaan & Anti Narkoba',
      icon: <ShieldAlert className="w-6 h-6 text-amber-400" />,
      color: 'from-amber-950/70 to-red-950',
      borderColor: 'border-amber-500/50',
      head: 'Luki Diandaru',
      members: 'Koordinator Kepemudaan Lintas DPC',
      description: 'Mengedukasi generasi muda agar menjauhi penyalahgunaan narkoba lewat kegiatan swadaya masyarakat serta pendampingan program rehabilitasi sosial.',
      highlights: ['Kampanye Pemuda Sehat Tanpa Narkoba', 'Program Rehabilitasi Berbasis Komunitas', 'Wadah Pengembangan Potensi Pemuda']
    },
    {
      title: 'Divisi Kesehatan & Kesejahteraan',
      icon: <HeartPulse className="w-6 h-6 text-rose-400" />,
      color: 'from-rose-950/70 to-red-950',
      borderColor: 'border-rose-500/40',
      head: 'Dr. Agus',
      members: 'Hariyanto',
      description: 'Memastikan kesehatan fisik dan stamina anggota berada dalam kondisi prima serta menyelenggarakan bakti sosial kesehatan masyarakat.',
      highlights: ['Pemeriksaan Kesehatan Anggota', 'Pertolongan Pertama Aksi Kemanusiaan', 'Bakti Sosial Pengobatan Gratis']
    },
    {
      title: 'Divisi Data & Informasi',
      icon: <Database className="w-6 h-6 text-emerald-400" />,
      color: 'from-emerald-950/70 to-red-950',
      borderColor: 'border-emerald-500/40',
      head: 'Agus Sutrisno',
      members: 'Marlina',
      description: 'Mengelola pendataan keanggotaan digital, verifikasi identitas, serta integrasi kartu identitas resmi (KTA) anggota PSM Banaspati.',
      highlights: ['Sistem Informasi Anggota Digital', 'Registrasi & Verifikasi Cabang DPC', 'Penerbitan KTA Resmi Anggota']
    },
    {
      title: 'Divisi Humas & Publikasi',
      icon: <Radio className="w-6 h-6 text-amber-300" />,
      color: 'from-amber-900/60 to-red-950',
      borderColor: 'border-amber-400/40',
      head: 'Agung Gita Fiandra',
      members: 'M. Ardi Al Hamzah',
      description: 'Menjembatani komunikasi kelembagaan dengan instansi pemerintah, media massa, serta publikasi aksi kemasyarakatan.',
      highlights: ['Kemitraan Lintas Instansi & Ormas', 'Pengelolaan Media Sosial & Portal Web', 'Liputan & Pers Rilis Kegiatan']
    }
  ];

  return (
    <section id="divisi" className="py-20 bg-red-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-900/80 border border-amber-500/40 text-amber-300 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Pilar Kerja Organisasi</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black font-serif text-white tracking-tight">
            DIVISI KERJA <span className="text-amber-400">PENGURUS PUSAT</span>
          </h2>
          <p className="text-red-200 text-sm sm:text-base">
            Setiap divisi dipimpin oleh profesional berpengalaman untuk melayani anggota, menjaga ketertiban hukum, dan memberdayakan masyarakat.
          </p>
        </div>

        {/* Divisions Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {divisions.map((div, idx) => (
            <div
              key={idx}
              className={`bg-gradient-to-b ${div.color} border ${div.borderColor} rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-red-950 rounded-xl border border-red-800 shadow-inner">
                    {div.icon}
                  </div>
                  <span className="text-[10px] font-mono uppercase bg-red-900/80 text-amber-300 px-2.5 py-1 rounded-full border border-red-700/60">
                    Divisi #{idx + 1}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white font-serif">
                  {div.title}
                </h3>

                {/* Team Leaders */}
                <div className="mt-2 py-2 px-3 bg-red-950/80 rounded-lg border border-red-800/60 text-xs">
                  <span className="text-amber-400 font-bold block">Pimpinan & Jajaran:</span>
                  <span className="text-white font-medium block">{div.head}</span>
                  {div.members && (
                    <span className="text-red-200 block text-[11px] mt-0.5">{div.members}</span>
                  )}
                </div>

                <p className="text-xs sm:text-sm text-red-200 mt-3 leading-relaxed">
                  {div.description}
                </p>
              </div>

              {/* Highlights Checklist */}
              <div className="mt-6 pt-4 border-t border-red-800/60 space-y-2">
                {div.highlights.map((h, hIdx) => (
                  <div key={hIdx} className="flex items-center gap-2 text-xs text-red-100">
                    <CheckCircle className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
