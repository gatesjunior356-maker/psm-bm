import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare, Clock } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Pendaftaran Anggota / Gabung PSM',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct WhatsApp message with user form data
    const waText = `Halo Pengurus PSM Banaspati Mojopahit,\n\nSaya ingin mengirim pesan / berkonsultasi:\n• Nama: ${formData.name}\n• No. HP/WA: ${formData.phone}\n• Email: ${formData.email}\n• Keperluan: ${formData.subject}\n\nIsi Pesan:\n${formData.message}`;
    const waUrl = `https://wa.me/6285185345830?text=${encodeURIComponent(waText)}`;
    
    // Open WhatsApp in new tab
    window.open(waUrl, '_blank');

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: 'Pendaftaran Anggota / Gabung PSM',
        message: ''
      });
    }, 4000);
  };

  return (
    <section id="kontak" className="py-20 bg-gradient-to-b from-red-950 via-red-900 to-red-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-900/80 border border-amber-500/40 text-amber-300 text-xs font-semibold uppercase tracking-wider">
            <Mail className="w-3.5 h-3.5 text-amber-400" />
            <span>Sekretariat & Pelayanan</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black font-serif text-white tracking-tight">
            HUBUNGI PENGURUS <span className="text-amber-400">PSM BANASPATI MOJOPAHIT</span>
          </h2>
          <p className="text-red-200 text-sm sm:text-base">
            Ingin bergabung menjadi anggota, konsultasi advokasi hukum, kerja sama bakti sosial, atau pembentukan cabang DPD/DPC? Hubungi kami.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Contact Information Card */}
          <div className="lg:col-span-5 bg-gradient-to-b from-red-900/90 to-red-950 border border-amber-500/40 rounded-2xl p-6 sm:p-8 shadow-2xl space-y-6">
            <h3 className="text-xl font-bold text-amber-300 font-serif border-b border-red-800 pb-3">
              Sekretariat Pusat
            </h3>

            <div className="space-y-4 text-xs sm:text-sm">
              
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 bg-red-950 rounded-xl border border-amber-500/30 text-amber-400 flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-amber-400 font-bold block">Alamat Sekretariat:</span>
                  <p className="text-red-100 leading-relaxed mt-0.5">
                    Dsn. Tanjung RT/RW 005/003 Ds. Ngablak Kec. Banyakan, Kediri - Jawa Timur
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-2.5 bg-red-950 rounded-xl border border-amber-500/30 text-amber-400 flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-amber-400 font-bold block">Telepon & WhatsApp Resmi:</span>
                  <a
                    href="https://wa.me/6285185345830"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-100 hover:text-amber-300 transition-colors mt-0.5 font-mono text-base font-bold flex items-center gap-2 group"
                  >
                    <span>0851 8534 5830</span>
                    <span className="text-[11px] font-sans font-semibold bg-emerald-600/30 border border-emerald-500/50 text-emerald-300 px-2 py-0.5 rounded-full group-hover:bg-emerald-500 group-hover:text-red-950 transition-colors">
                      Chat WhatsApp
                    </span>
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-2.5 bg-red-950 rounded-xl border border-amber-500/30 text-amber-400 flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-amber-400 font-bold block">Email Organisasi:</span>
                  <a href="mailto:dppbanaspatimojopahit@gmail.com" className="text-red-100 hover:text-amber-300 transition-colors mt-0.5 font-mono">dppbanaspatimojopahit@gmail.com</a>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-2.5 bg-red-950 rounded-xl border border-amber-500/30 text-amber-400 flex-shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-amber-400 font-bold block">Jam Layanan Sekretariat:</span>
                  <p className="text-red-100 mt-0.5">Senin - Sabtu: 08.00 - 17.00 WIB</p>
                </div>
              </div>

            </div>

            {/* Emergency Hotline */}
            <div className="pt-4 border-t border-red-800/80 bg-red-950/80 p-4 rounded-xl border border-amber-500/30 text-xs">
              <span className="text-amber-300 font-bold block mb-1">
                Layanan Advokasi Hukum & Konsultasi Narkoba
              </span>
              <p className="text-red-200">
                Pendampingan hukum darurat anggota (Sutrisno S.H, M.H) & konsultasi kepemudaan (Luki Diandaru).
              </p>
            </div>
          </div>

          {/* Interactive Form */}
          <div className="lg:col-span-7 bg-red-950/80 border border-red-800/80 rounded-2xl p-6 sm:p-8 shadow-xl backdrop-blur-md">
            
            {submitted ? (
              <div className="bg-emerald-950/80 border-2 border-emerald-500/60 rounded-2xl p-8 text-center space-y-3 animate-fadeIn">
                <CheckCircle2 className="w-14 h-14 text-emerald-400 mx-auto" />
                <h4 className="text-xl font-bold text-white font-serif">Pesan Berhasil Terkirim!</h4>
                <p className="text-sm text-emerald-200 max-w-md mx-auto">
                  Terima kasih telah menghubungi pengurus PSM Banaspati Mojopahit. Tim Sekretariat / Humas akan merespons pesan Anda segera.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-xl font-bold text-white font-serif mb-2">
                  Kirim Pesan / Formulir Pertanyaan
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-amber-300 mb-1">Nama Lengkap</label>
                    <input
                      type="text"
                      required
                      placeholder="Masukkan nama Anda..."
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-red-900/50 border border-red-700/60 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-amber-300 mb-1">Nomor WhatsApp / HP</label>
                    <input
                      type="tel"
                      required
                      placeholder="0812xxxxxxx"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-red-900/50 border border-red-700/60 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-amber-300 mb-1">Email</label>
                    <input
                      type="email"
                      required
                      placeholder="email@contoh.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-red-900/50 border border-red-700/60 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-amber-300 mb-1">Keperluan / Kategori</label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-red-900/80 border border-red-700/60 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400 cursor-pointer"
                    >
                      <option value="Pendaftaran Anggota / Gabung PSM">Pendaftaran Anggota / Gabung PSM</option>
                      <option value="Konsultasi Advokasi & Legal Hukum">Konsultasi Advokasi & Legal Hukum</option>
                      <option value="Program Kepemudaan & Anti Narkoba">Program Kepemudaan & Anti Narkoba</option>
                      <option value="Kerja Sama Bakti Sosial & Kemanusiaan">Kerja Sama Bakti Sosial & Kemanusiaan</option>
                      <option value="Pembentukan Cabang DPC Daerah">Pembentukan Cabang DPC Daerah</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-amber-300 mb-1">Isi Pesan / Pertanyaan</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tuliskan rincian pesan atau pertanyaan Anda di sini..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-red-900/50 border border-red-700/60 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div className="space-y-2 pt-1">
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 via-amber-400 to-amber-500 hover:from-emerald-400 hover:to-amber-400 text-red-950 font-black py-3.5 rounded-xl text-sm transition-all shadow-xl hover:scale-[1.01] cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4 text-red-950" />
                    <span>Kirim Pesan Ke Pengurus via WhatsApp (0851 8534 5830)</span>
                  </button>
                  <p className="text-[11px] text-center text-red-300">
                    *Pesan Anda akan langsung membuka aplikasi WhatsApp pengurus resmi di <span className="text-amber-300 font-mono font-bold">0851 8534 5830</span>.
                  </p>
                </div>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
