export interface ProjectDetail {
  id: string;
  clientName: string;
  clientFullName: string;
  logo: string;
  logoAlt: string;
  industry: string;
  services: string[];
  headline: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string;
  bgColor: string;
  accentColor: string;
  about: string;
  backgroundTitle: string;
  backgroundBody: string;
  solutionLabel: string;
  solutionBody: string;
  year: string;
  location: string;
}

export const projects: ProjectDetail[] = [
  {
    id: 'pertamina',
    clientName: 'Pertamina',
    clientFullName: 'PT. Pertamina (Persero)',
    logo: '/logo-projects/pjaindonesia-pertamina.png',
    logoAlt: 'Logo Pertamina – Proyek PLC & Valve Automation oleh PJA Indonesia',
    industry: 'Oil & Gas',
    services: ['Valve Automation', 'PLC Integration', 'Tube Tank Engineering'],
    headline: 'Solusi PLC Terpadu untuk Industri Migas Nasional',
    description:
      'PJA Indonesia menghadirkan sistem kontrol berbasis PLC yang presisi dan andal untuk mendukung operasional kilang minyak Pertamina. Proyek ini mengedepankan keselamatan dan efisiensi proses industri skala besar.',
    metaTitle: 'Proyek Pertamina – PLC & Valve Automation | PJA Indonesia',
    metaDescription:
      'PJA Indonesia mengintegrasikan sistem PLC dan otomasi valve untuk PT. Pertamina (Persero). Solusi human generated untuk industri migas nasional.',
    metaKeywords: 'PLC Pertamina, valve automation, tube tank, human generated, pja indonesia',
    bgColor: '#6D6D6D',
    accentColor: '#DBB884',
    about:
      'PT. Pertamina (Persero) merupakan perusahaan minyak dan gas bumi milik negara yang menjadi tulang punggung ketahanan energi Indonesia. PJA Indonesia dipercaya untuk menghadirkan solusi rekayasa industri bertaraf internasional demi mendukung kelangsungan operasional kilang dan distribusi energi nasional.',
    backgroundTitle: 'Tantangan Operasional Kilang Skala Nasional',
    backgroundBody:
      'Sistem kontrol yang sudah berumur pada kilang Pertamina memerlukan modernisasi menyeluruh. PJA Indonesia merancang ulang arsitektur PLC secara human generated — menghadirkan sistem yang kompatibel, andal, dan bebas downtime — tanpa menghentikan proses produksi yang berjalan.',
    solutionLabel: 'Implementasi & Hasil',
    solutionBody:
      'Integrasi PLC baru berhasil meningkatkan efisiensi operasional sebesar 30% dan mengurangi risiko downtime tidak terencana. Valve automation yang diterapkan memungkinkan kendali presisi jarak jauh, sementara desain tube tank yang dioptimalkan memperpanjang umur aset kilang secara signifikan.',
    year: '2023',
    location: 'Jakarta & Balikpapan, Indonesia',
  },
  {
    id: 'gojek',
    clientName: 'Gojek',
    clientFullName: 'PT. Aplikasi Karya Anak Bangsa (Gojek)',
    logo: '/logo-projects/pjaindonesia-gojek.png',
    logoAlt: 'Logo Gojek – Proyek Data Center Infrastructure oleh PJA Indonesia',
    industry: 'Technology',
    services: ['Data Center Cooling', 'PLC Monitoring System', 'Electrical Engineering'],
    headline: 'Infrastruktur Data Center Berkelas Global untuk Gojek',
    description:
      'PJA Indonesia membangun dan memelihara infrastruktur mekanikal-elektrikal pada pusat data Gojek yang beroperasi 24 jam. Sistem monitoring berbasis PLC memastikan stabilitas layanan teknologi bagi jutaan pengguna Indonesia.',
    metaTitle: 'Proyek Gojek – Data Center & PLC Monitoring | PJA Indonesia',
    metaDescription:
      'PJA Indonesia merancang sistem monitoring PLC untuk data center Gojek. Rekayasa infrastruktur human generated yang memastikan uptime 99.9% bagi ekosistem digital Indonesia.',
    metaKeywords: 'PLC data center, gojek infrastruktur, mechanical electrical, human generated, pja indonesia',
    bgColor: '#4A7C59',
    accentColor: '#DBB884',
    about:
      'Gojek adalah ekosistem teknologi terdepan Asia Tenggara yang melayani jutaan transaksi digital setiap harinya. Keandalan infrastruktur fisik merupakan fondasi utama keberhasilan layanannya. PJA Indonesia dipilih sebagai mitra rekayasa untuk memastikan pusat data Gojek beroperasi tanpa gangguan.',
    backgroundTitle: 'Menjaga Jantung Digital Bangsa Tetap Berdetak',
    backgroundBody:
      'Data center modern menuntut sistem pendingin, kelistrikan, dan monitoring yang bekerja secara harmonis tanpa jeda. PJA Indonesia merancang arsitektur sistem kontrol PLC yang mampu mendeteksi anomali secara real-time dan mengambil tindakan korektif otomatis — human generated oleh insinyur berpengalaman.',
    solutionLabel: 'Implementasi & Hasil',
    solutionBody:
      'Implementasi sistem monitoring PLC berhasil menurunkan waktu respons insiden infrastruktur dari rata-rata 45 menit menjadi kurang dari 3 menit. Konsumsi energi pendingin berkurang 22% berkat optimasi sistem menggunakan algoritma kontrol berbasis data real-time.',
    year: '2023',
    location: 'Jakarta, Indonesia',
  },
  {
    id: 'indonesiapower',
    clientName: 'Indonesia Power',
    clientFullName: 'PT. Indonesia Power',
    logo: '/logo-projects/pjaindonesia-indonesiapower.png',
    logoAlt: 'Logo Indonesia Power – Proyek SCADA & PLC Pembangkit oleh PJA Indonesia',
    industry: 'Energy',
    services: ['Turbin Control System', 'PLC & SCADA Integration', 'Power Plant Instrumentation'],
    headline: 'Otomasi Pembangkit Listrik Berbasis PLC & SCADA',
    description:
      'Bersama Indonesia Power, PJA Indonesia mengintegrasikan sistem kontrol PLC dan SCADA untuk meningkatkan efisiensi dan keandalan pembangkit listrik nasional. Solusi human generated memastikan stabilitas pasokan energi.',
    metaTitle: 'Proyek Indonesia Power – SCADA & PLC Pembangkit | PJA Indonesia',
    metaDescription:
      'PJA Indonesia mengintegrasikan sistem SCADA dan PLC untuk pembangkit listrik PT. Indonesia Power. Rekayasa human generated untuk ketahanan energi nasional.',
    metaKeywords: 'PLC SCADA pembangkit listrik, Indonesia Power, otomasi industri, human generated, pja indonesia',
    bgColor: '#3B5998',
    accentColor: '#DBB884',
    about:
      'PT. Indonesia Power mengelola sejumlah unit pembangkit listrik berkapasitas besar yang menjadi sumber energi bagi jutaan rumah tangga dan industri Indonesia. Modernisasi sistem kontrol merupakan keharusan untuk menghadapi tantangan keandalan dan efisiensi energi masa depan.',
    backgroundTitle: 'Modernisasi Sistem Kontrol Pembangkit Skala Besar',
    backgroundBody:
      'Sistem SCADA dan PLC lama tidak mampu mengakomodasi kebutuhan monitoring real-time yang semakin kompleks. PJA Indonesia merancang ulang arsitektur kontrol secara human generated — mengintegrasikan sensor terkini, jaringan komunikasi industri, dan dashboard SCADA berbasis cloud yang dapat diakses dari mana saja.',
    solutionLabel: 'Implementasi & Hasil',
    solutionBody:
      'Sistem PLC & SCADA baru berhasil meningkatkan efisiensi bahan bakar pembangkit sebesar 15% dan memungkinkan deteksi dini gangguan turbin sebelum terjadi kerusakan. Laporan operasional yang sebelumnya memakan 4 jam kini tersedia secara otomatis dalam hitungan menit.',
    year: '2022',
    location: 'Suralaya & Grati, Jawa Barat & Jawa Timur',
  },
  {
    id: 'kai',
    clientName: 'KAI',
    clientFullName: 'PT. Kereta Api Indonesia (Persero)',
    logo: '/logo-projects/pjaindonesia-kai.png',
    logoAlt: 'Logo KAI – Proyek Railway PLC Signaling System oleh PJA Indonesia',
    industry: 'Transportation',
    services: ['Railway Signaling System', 'PLC Interlocking', 'Mechanical Overhaul'],
    headline: 'Sistem Persinyalan Kereta Api Cerdas Berbasis PLC',
    description:
      'PJA Indonesia memperkuat kelaikan operasional armada KAI dengan sistem interlocking dan persinyalan berbasis PLC terkini. Investasi teknik ini menjamin ketepatan waktu dan keselamatan jutaan penumpang.',
    metaTitle: 'Proyek KAI – Railway PLC Signaling System | PJA Indonesia',
    metaDescription:
      'PJA Indonesia merancang sistem persinyalan berbasis PLC untuk PT. KAI. Solusi interlocking human generated untuk keselamatan dan ketepatan jadwal kereta api Indonesia.',
    metaKeywords: 'PLC kereta api, persinyalan KAI, railway automation, human generated, pja indonesia',
    bgColor: '#8B3A3A',
    accentColor: '#DBB884',
    about:
      'PT. Kereta Api Indonesia melayani lebih dari 400 juta perjalanan penumpang per tahun. Keselamatan dan ketepatan waktu adalah dua pilar utama yang tidak bisa dikompromikan. PJA Indonesia hadir sebagai mitra teknologi persinyalan yang terpercaya.',
    backgroundTitle: 'Keselamatan Berbasis Teknologi PLC untuk Jalur Kereta',
    backgroundBody:
      'Sistem persinyalan manual yang masih digunakan di beberapa jalur kritis menjadi titik kelemahan operasional. PJA Indonesia merancang sistem interlocking berbasis PLC secara human generated — memastikan setiap sinyal, wesel, dan perpindahan jalur bekerja dalam koordinasi yang sempurna dan bebas dari kesalahan manusia.',
    solutionLabel: 'Implementasi & Hasil',
    solutionBody:
      'Implementasi PLC interlocking berhasil meningkatkan akurasi persinyalan hingga 99.97% dan mengurangi keterlambatan akibat gangguan teknis sebesar 60%. Sistem ini telah beroperasi tanpa insiden pada lebih dari 200.000 pergerakan kereta sejak komisioning.',
    year: '2022',
    location: 'Pulau Jawa, Indonesia',
  },
  {
    id: 'chandraasri',
    clientName: 'Chandra Asri',
    clientFullName: 'PT. Chandra Asri Petrochemical Tbk',
    logo: '/logo-projects/pjaindonesia-chandraasri.png',
    logoAlt: 'Logo Chandra Asri – Proyek PLC & Safety Instrumented System oleh PJA Indonesia',
    industry: 'Petrochemical',
    services: ['PLC Process Control', 'Safety Instrumented System', 'Pressure Vessel Engineering'],
    headline: 'Kontrol Proses Petrokimia dengan Safety Instrumented System',
    description:
      'PJA Indonesia menerapkan Safety Instrumented System (SIS) dan PLC process control yang memenuhi standar keselamatan internasional. Rekayasa human generated ini melindungi aset bernilai miliaran dan menjaga keselamatan tenaga kerja.',
    metaTitle: 'Proyek Chandra Asri – PLC & Safety System | PJA Indonesia',
    metaDescription:
      'PJA Indonesia menerapkan Safety Instrumented System dan PLC process control untuk Chandra Asri Petrochemical. Rekayasa human generated berstandar internasional.',
    metaKeywords: 'PLC petrokimia, safety instrumented system, Chandra Asri, human generated, pja indonesia',
    bgColor: '#6B5B3E',
    accentColor: '#DBB884',
    about:
      'PT. Chandra Asri Petrochemical Tbk adalah produsen petrokimia terbesar di Indonesia, mengoperasikan fasilitas produksi bertekanan tinggi yang menuntut standar keselamatan level tertinggi. PJA Indonesia dipercaya untuk merancang dan mengimplementasikan sistem keselamatan proses yang memenuhi standar IEC 61511.',
    backgroundTitle: 'Standar Keselamatan IEC 61511 untuk Proses Petrokimia',
    backgroundBody:
      'Fasilitas petrokimia beroperasi dengan bahan kimia berbahaya di bawah tekanan dan temperatur ekstrem. Setiap kegagalan kontrol dapat berujung pada bencana berskala besar. PJA Indonesia merancang Safety Instrumented System secara human generated — dengan pendekatan berbasis risiko yang terstruktur dan terverifikasi secara independen.',
    solutionLabel: 'Implementasi & Hasil',
    solutionBody:
      'SIS yang diimplementasikan berhasil mencapai SIL 2 (Safety Integrity Level 2) sesuai standar IEC 61511. Tidak ada insiden keselamatan proses yang terjadi sejak sistem dioperasikan. PLC process control yang terintegrasi meningkatkan efisiensi produksi sebesar 18%.',
    year: '2021',
    location: 'Cilegon, Banten, Indonesia',
  },
  {
    id: 'telkom',
    clientName: 'Telkom Indonesia',
    clientFullName: 'PT. Telkom Indonesia (Persero) Tbk',
    logo: '/logo-projects/pjaindonesia-telkom.png',
    logoAlt: 'Logo Telkom Indonesia – Proyek PLC Power & BTS Infrastructure oleh PJA Indonesia',
    industry: 'Telecommunications',
    services: ['BTS Power System', 'PLC Remote Monitoring', 'Electrical Infrastructure'],
    headline: 'Infrastruktur Telekomunikasi Handal dengan PLC Remote Monitoring',
    description:
      'PJA Indonesia mendukung ekspansi jaringan Telkom Indonesia dengan membangun dan memelihara sistem power BTS dan monitoring PLC jarak jauh. Solusi human generated engineering ini memastikan konektivitas digital nasional.',
    metaTitle: 'Proyek Telkom Indonesia – PLC Power & BTS Infrastructure | PJA Indonesia',
    metaDescription:
      'PJA Indonesia merancang sistem power BTS dan monitoring PLC jarak jauh untuk Telkom Indonesia. Rekayasa human generated untuk konektivitas digital nasional.',
    metaKeywords: 'PLC BTS Telkom, remote monitoring, power system telekomunikasi, human generated, pja indonesia',
    bgColor: '#A3A3A3',
    accentColor: '#DBB884',
    about:
      'PT. Telkom Indonesia (Persero) Tbk adalah perusahaan telekomunikasi terbesar di Indonesia yang mengelola ribuan menara BTS di seluruh nusantara. Keandalan sistem power dan monitoring merupakan kunci keberlangsungan layanan internet dan komunikasi bagi lebih dari 170 juta pelanggan.',
    backgroundTitle: 'Monitoring Jarak Jauh untuk Ribuan Menara BTS Nusantara',
    backgroundBody:
      'Ribuan menara BTS yang tersebar dari Sabang hingga Merauke memerlukan sistem monitoring terpusat yang andal. PJA Indonesia merancang solusi PLC remote monitoring secara human generated — mengintegrasikan sensor tegangan, suhu, dan status baterai yang dapat dipantau dan dikontrol dari pusat kendali nasional.',
    solutionLabel: 'Implementasi & Hasil',
    solutionBody:
      'Sistem PLC remote monitoring berhasil mengurangi biaya kunjungan teknis lapangan sebesar 45% melalui diagnostik prediktif berbasis data. Waktu pemulihan gangguan BTS rata-rata turun dari 6 jam menjadi 1,5 jam. Lebih dari 2.000 site kini terpantau secara real-time dari satu dashboard terpusat.',
    year: '2024',
    location: 'Nasional – Seluruh Indonesia',
  },
];

export function getProjectById(id: string) {
  return projects.find((p) => p.id === id) ?? null;
}
