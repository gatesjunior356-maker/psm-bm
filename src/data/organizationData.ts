import { Member, RegionalBranch } from '../types';

export const ORGANIZATION_MEMBERS: Member[] = [
  // Penasehat
  {
    id: 'penasehat-1',
    name: 'Haryo Wijoyo',
    role: 'Penasehat',
    department: 'Dewan Penasehat',
    category: 'penasehat_pembina',
    bio: 'Memberikan pertimbangan strategis dan wawasan kebudayaan demi kemajuan organisasi PSM Banaspati Mojopahit.'
  },
  {
    id: 'penasehat-2',
    name: 'Krisna Dwipayana',
    role: 'Penasehat',
    department: 'Dewan Penasehat',
    category: 'penasehat_pembina',
    bio: 'Mendukung pelestarian nilai budaya Majapahit serta tata kelola keorganisasian swadaya yang berkelanjutan.'
  },

  // Advokasi
  {
    id: 'advokasi-1',
    name: 'Sutrisno S.H, M.H',
    role: 'Advokasi Hukum',
    department: 'Tim Advokasi & Legal',
    category: 'penasehat_pembina',
    subCategory: 'Advokasi',
    bio: 'Menangani perlindungan hukum, konsultasi legalitas, dan pendampingan hak-hak hukum anggota dan masyarakat.'
  },
  {
    id: 'advokasi-2',
    name: 'Joko Sujarwo SH',
    role: 'Advokasi Hukum',
    department: 'Tim Advokasi & Legal',
    category: 'penasehat_pembina',
    subCategory: 'Advokasi',
    bio: 'Membantu pendampingan legalitas dan perizinan kegiatan keorganisasian di tingkat daerah.'
  },
  {
    id: 'advokasi-3',
    name: 'Chamim, S.H',
    role: 'Advokasi Hukum',
    department: 'Tim Advokasi & Legal',
    category: 'penasehat_pembina',
    subCategory: 'Advokasi',
    bio: 'Aktif mendampingi kebutuhan advokasi sosial dan kelembagaan masyarakat.'
  },
  {
    id: 'advokasi-4',
    name: 'Herlina Putri Kusumawardani',
    role: 'Advokasi Hukum',
    department: 'Tim Advokasi & Legal',
    category: 'penasehat_pembina',
    subCategory: 'Advokasi',
    bio: 'Pendamping hukum dalam bidang advokasi perlindungan anggota dan pemberdayaan perempuan.'
  },

  // Pembina
  {
    id: 'pembina-1',
    name: 'Syarif Umar Al Faruq',
    role: 'Pembina Utama',
    department: 'Dewan Pembina',
    category: 'penasehat_pembina',
    bio: 'Membina perkembangan karakter, kepemimpinan, dan integrasi moral seluruh anggota PSM Banaspati Mojopahit.'
  },

  // Pengurus Harian Pusat
  {
    id: 'ketua-umum',
    name: 'Hari Priyatno',
    role: 'Ketua Umum',
    department: 'Pengurus Harian Pusat',
    category: 'pengurus_harian',
    bio: 'Memimpin visi dan arah kebijakan strategis PSM Banaspati Mojopahit dalam taraf regional dan nasional.'
  },
  {
    id: 'wakil-ketua-umum',
    name: 'Riadi',
    role: 'Wakil Ketua Umum',
    department: 'Pengurus Harian Pusat',
    category: 'pengurus_harian',
    bio: 'Mendampingi Ketua Umum dalam koordinasi lintas divisi dan penguatan jaringan keorganisasian.'
  },
  {
    id: 'sekjen',
    name: 'Wahyu Saputra',
    role: 'Sekretaris Jenderal',
    department: 'Pengurus Harian Pusat',
    category: 'pengurus_harian',
    bio: 'Mengelola tata usaha, tata kelola administrasi pusat, dan korespondensi kelembagaan.'
  },
  {
    id: 'wasekjen-1',
    name: 'Suci Afifatul Jannah Al Faruq',
    role: 'Wakil Sekretaris Jenderal I',
    department: 'Pengurus Harian Pusat',
    category: 'pengurus_harian',
    bio: 'Membantu pengarsipan dokumen, pendataan anggota, serta penjadwalan kegiatan resmi.'
  },
  {
    id: 'wasekjen-2',
    name: 'Jefri Bagus Setiawan',
    role: 'Wakil Sekretaris Jenderal II',
    department: 'Pengurus Harian Pusat',
    category: 'pengurus_harian',
    bio: 'Mengoordinasikan komunikasi operasional Sekretariat dengan DPD dan DPC.'
  },
  {
    id: 'bendum-1',
    name: 'Riska Indraswari',
    role: 'Bendahara Umum I',
    department: 'Pengurus Harian Pusat',
    category: 'pengurus_harian',
    bio: 'Penanggung jawab keuangan, transparansi kas organisasi, dan akuntabilitas anggaran.'
  },
  {
    id: 'bendum-2',
    name: 'Salza Ayu Puspa Arum Priyatno',
    role: 'Bendahara Umum II',
    department: 'Pengurus Harian Pusat',
    category: 'pengurus_harian',
    bio: 'Mengelola pencatatan keuangan harian, penggalangan dana swadaya, dan pembukuan kegiatan organisasi.'
  },
  {
    id: 'wakil-ketua',
    name: 'Sulis Nova Fadli',
    role: 'Wakil Ketua',
    department: 'Pengurus Harian Pusat',
    category: 'pengurus_harian',
    bio: 'Membantu pengawasan eksekusi program harian dan efektivitas kinerja tim di lapangan.'
  },

  // Divisi Khusus
  {
    id: 'humas-1',
    name: 'Agung Gita Fiandra',
    role: 'Kepala Divisi Humas',
    department: 'Divisi Hubungan Masyarakat',
    category: 'divisi',
    subCategory: 'Humas',
    bio: 'Menjalin komunikasi publik, hubungan media, dan kemitraan strategis dengan instansi pemerintah dan masyarakat.'
  },
  {
    id: 'humas-2',
    name: 'M. Ardi Al Hamzah',
    role: 'Anggota Divisi Humas',
    department: 'Divisi Hubungan Masyarakat',
    category: 'divisi',
    subCategory: 'Humas',
    bio: 'Mengelola media sosial, publikasi kegiatan, dan dokumentasi informasi publik.'
  },
  {
    id: 'data-1',
    name: 'Agus Sutrisno',
    role: 'Kepala Divisi Data',
    department: 'Divisi Data & Informasi',
    category: 'divisi',
    subCategory: 'Kadiv Data',
    bio: 'Mengelola sistem basis data anggota, inventarisasi aset, dan digitalisasi organisasi.'
  },
  {
    id: 'data-2',
    name: 'Marlina',
    role: 'Anggota Divisi Data',
    department: 'Divisi Data & Informasi',
    category: 'divisi',
    subCategory: 'Kadiv Data',
    bio: 'Memverifikasi kelengkapan identitas anggota dan verifikasi pendaftaran cabang baru.'
  },
  {
    id: 'kesehatan-1',
    name: 'Dr. Agus',
    role: 'Kepala Divisi Kesehatan',
    department: 'Divisi Kesehatan & Kesejahteraan',
    category: 'divisi',
    subCategory: 'Kadiv Kesehatan',
    bio: 'Memberikan pelayanan pertolongan medis, pendampingan kesehatan anggota, serta bakti sosial kesehatan.'
  },
  {
    id: 'kesehatan-2',
    name: 'Hariyanto',
    role: 'Anggota Divisi Kesehatan',
    department: 'Divisi Kesehatan & Kesejahteraan',
    category: 'divisi',
    subCategory: 'Kadiv Kesehatan',
    bio: 'Mendampingi logistik pertolongan pertama pada kegiatan bakti sosial dan aksi kemanusiaan.'
  },
  {
    id: 'narkoba-1',
    name: 'Luki Diandaru',
    role: 'Kepala Divisi Kepemudaan & Rehabilitasi Narkoba',
    department: 'Divisi Kepemudaan & Rehabilitasi Narkoba',
    category: 'divisi',
    subCategory: 'Kadiv Kepemudaan & Anti Narkoba',
    bio: 'Menggerakkan pemuda kreatif lewat kegiatan swadaya masyarakat, kampanye pencegahan, dan edukasi rehabilitasi narkoba.'
  },

  // Regional / DPD & DPC Leaders
  {
    id: 'dpd-jatim-ketua',
    name: 'Muhammad Agus Setiyawan',
    role: 'Ketua DPD Jawa Timur',
    department: 'DPD Jawa Timur',
    category: 'wilayah',
    subCategory: 'DPD Jawa Timur',
    bio: 'Koordinator wilayah DPD Jawa Timur untuk pengembangan swadaya masyarakat dan sinergi daerah.'
  },
  {
    id: 'dpd-jatim-sekretaris',
    name: 'Hariyanto',
    role: 'Sekretaris DPD Jawa Timur',
    department: 'DPD Jawa Timur',
    category: 'wilayah',
    subCategory: 'DPD Jawa Timur'
  },
  {
    id: 'dpd-jatim-bendahara',
    name: 'Abdul Rohman',
    role: 'Bendahara DPD Jawa Timur',
    department: 'DPD Jawa Timur',
    category: 'wilayah',
    subCategory: 'DPD Jawa Timur'
  },
  {
    id: 'dpc-tulungagung-ketua',
    name: 'Tri Hadi Susanto',
    role: 'Ketua DPC Tulungagung',
    department: 'DPC Tulungagung',
    category: 'wilayah',
    subCategory: 'DPC Tulungagung'
  },
  {
    id: 'dpc-tulungagung-bendahara',
    name: 'Nanik Puji Lestari',
    role: 'Bendahara DPC Tulungagung',
    department: 'DPC Tulungagung',
    category: 'wilayah',
    subCategory: 'DPC Tulungagung'
  },
  {
    id: 'dpc-nganjuk-ketua',
    name: 'Ahmad Rosidi',
    role: 'Ketua DPC Nganjuk',
    department: 'DPC Nganjuk',
    category: 'wilayah',
    subCategory: 'DPC Nganjuk'
  },
  {
    id: 'dpc-magetan-ketua',
    name: 'Nyoto',
    role: 'Ketua DPC Magetan',
    department: 'DPC Magetan',
    category: 'wilayah',
    subCategory: 'DPC Magetan'
  },
  {
    id: 'dpc-magetan-sekretaris',
    name: 'Warsudi',
    role: 'Sekretaris DPC Magetan',
    department: 'DPC Magetan',
    category: 'wilayah',
    subCategory: 'DPC Magetan'
  }
];

export const REGIONAL_BRANCHES: RegionalBranch[] = [
  {
    id: 'dpd-jatim',
    name: 'DPD Jawa Timur',
    code: 'DPD JATIM',
    level: 'DPD',
    regionName: 'Provinsi Jawa Timur',
    ketua: 'Muhammad Agus Setiyawan',
    sekretaris: 'Hariyanto',
    bendahara: 'Abdul Rohman',
    address: 'Kediri, Jawa Timur',
    activeMembersCount: 145
  },
  {
    id: 'dpc-tulungagung',
    name: 'DPC Tulungagung',
    code: 'DPC TULUNGAGUNG',
    level: 'DPC',
    regionName: 'Kabupaten Tulungagung',
    ketua: 'Tri Hadi Susanto',
    sekretaris: '-',
    bendahara: 'Nanik Puji Lestari',
    address: 'Kabupaten Tulungagung, Jawa Timur',
    activeMembersCount: 38
  },
  {
    id: 'dpc-nganjuk',
    name: 'DPC Nganjuk',
    code: 'DPC NGANJUK',
    level: 'DPC',
    regionName: 'Kabupaten Nganjuk',
    ketua: 'Ahmad Rosidi',
    sekretaris: '-',
    bendahara: '-',
    address: 'Kabupaten Nganjuk, Jawa Timur',
    activeMembersCount: 25
  },
  {
    id: 'dpc-ngawi',
    name: 'DPC Ngawi',
    code: 'DPC NGAWI',
    level: 'DPC',
    regionName: 'Kabupaten Ngawi',
    ketua: '-',
    sekretaris: '-',
    bendahara: '-',
    address: 'Kabupaten Ngawi, Jawa Timur',
    activeMembersCount: 18
  },
  {
    id: 'dpc-magetan',
    name: 'DPC Magetan',
    code: 'DPC MAGETAN',
    level: 'DPC',
    regionName: 'Kabupaten Magetan',
    ketua: 'Nyoto',
    sekretaris: 'Warsudi',
    bendahara: '-',
    address: 'Kabupaten Magetan, Jawa Timur',
    activeMembersCount: 22
  }
];
