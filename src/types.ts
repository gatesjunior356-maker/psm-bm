export type MemberCategory = 'semua' | 'penasehat_pembina' | 'pengurus_harian' | 'divisi' | 'wilayah';

export interface Member {
  id: string;
  name: string;
  title?: string;
  role: string;
  department: string;
  category: 'penasehat_pembina' | 'pengurus_harian' | 'divisi' | 'wilayah';
  subCategory?: string; // e.g. 'DPC Tulungagung', 'Advokasi', etc.
  phone?: string;
  email?: string;
  bio?: string;
  isVacant?: boolean;
  avatarUrl?: string;
}

export interface RegionalBranch {
  id: string;
  name: string;
  code: string; // e.g., DPD JATIM, DPC TULUNGAGUNG
  level: 'DPD' | 'DPC';
  regionName: string;
  ketua?: string;
  sekretaris?: string;
  bendahara?: string;
  address?: string;
  activeMembersCount?: number;
}

export interface HistoryMilestone {
  year: string;
  title: string;
  description: string;
  tag: string;
}
