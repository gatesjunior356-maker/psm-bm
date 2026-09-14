import React from 'react';
import { Member } from '../types';
import { X, Shield, Phone, Mail, Award, CheckCircle, User, Scale, HeartPulse, MapPin } from 'lucide-react';

interface MemberModalProps {
  member: Member | null;
  onClose: () => void;
}

export const MemberModal: React.FC<MemberModalProps> = ({ member, onClose }) => {
  if (!member) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
      <div className="relative w-full max-w-lg bg-gradient-to-b from-red-900 to-red-950 border-2 border-amber-400 rounded-2xl p-6 shadow-2xl space-y-5 text-white">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-red-950 hover:bg-red-800 text-white rounded-full border border-amber-500/40 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Avatar & Name */}
        <div className="flex items-center gap-4 border-b border-red-800/80 pb-4">
          <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-amber-500 to-amber-300 text-red-950 flex items-center justify-center font-bold text-2xl shadow-lg border-2 border-white">
            {member.name.charAt(0)}
          </div>

          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-amber-300 bg-red-950 px-2.5 py-0.5 rounded border border-amber-500/30">
              {member.department}
            </span>
            <h3 className="text-xl sm:text-2xl font-black font-serif text-white mt-1">
              {member.name}
            </h3>
            <p className="text-xs text-amber-400 font-semibold">
              {member.role}
            </p>
          </div>
        </div>

        {/* Member Category & Details */}
        <div className="space-y-3 text-xs sm:text-sm">
          <div className="bg-red-950/80 p-3 rounded-xl border border-red-800 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-red-300">Kategori Jabatan:</span>
              <span className="font-bold text-white capitalize">{member.category.replace('_', ' ')}</span>
            </div>
            {member.subCategory && (
              <div className="flex items-center justify-between border-t border-red-900/60 pt-1.5">
                <span className="text-red-300">Bidang / Wilayah:</span>
                <span className="font-bold text-amber-300">{member.subCategory}</span>
              </div>
            )}
            <div className="flex items-center justify-between border-t border-red-900/60 pt-1.5">
              <span className="text-red-300">Status Keanggotaan:</span>
              <span className="text-emerald-400 font-bold flex items-center gap-1">
                <CheckCircle className="w-3.5 h-3.5" /> Resmi Terdaftar
              </span>
            </div>
          </div>

          {/* Bio / Scope */}
          <div className="bg-red-950/60 p-4 rounded-xl border border-red-800/60 space-y-1">
            <span className="text-amber-400 font-bold block text-xs uppercase tracking-wider">
              Peran & Tanggung Jawab:
            </span>
            <p className="text-red-100 leading-relaxed text-xs sm:text-sm">
              {member.bio || 'Menjalankan tugas dan kewajiban pengurusan sesuai AD/ART organisasi PSM Banaspati Mojopahit.'}
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="pt-2 flex gap-3">
          <a
            href={`https://wa.me/6285185345830?text=${encodeURIComponent(`Halo Pengurus PSM Banaspati Mojopahit, saya ingin bertanya/berkonsultasi mengenai pengurus: ${member.name} (${member.role})`)}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="w-full text-center bg-gradient-to-r from-emerald-500 to-amber-400 hover:from-emerald-400 hover:to-amber-300 text-red-950 font-black py-2.5 rounded-xl text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2"
          >
            <Phone className="w-4 h-4 text-red-950" />
            <span>Hubungi via WhatsApp (0851 8534 5830)</span>
          </a>
        </div>

      </div>
    </div>
  );
};
