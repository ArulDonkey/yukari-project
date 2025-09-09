import { Info, GraduationCap, Smile } from "lucide-react";

interface headerContent {
  desc: "LPK Yukari Indonesia hadir dengan beragam wawasan, inspirasi, dan panduan terpercaya melalui rubrik Informasi, Edukasi, dan Hiburan. Kami membantu kamu memahami budaya kerja Jepang sekaligus mempersiapkan diri meraih karier global yang berintegritas dan penuh peluang.";
  japaneseDesc: "日本の職場文化を理解し、誠実なグローバルキャリアを築くための知識・ヒント・インスピレーションをご紹介します。";
}

interface IconArticle {
  id: number;
  icon: any;
  title: string;
}

interface articleComponent {
  id: number;
  hero: string;
  category: string;
  title: string;
  date: string;
  slug: string;
  content: string;
}

export const dataContent: headerContent[] = [
  {
    desc: "LPK Yukari Indonesia hadir dengan beragam wawasan, inspirasi, dan panduan terpercaya melalui rubrik Informasi, Edukasi, dan Hiburan. Kami membantu kamu memahami budaya kerja Jepang sekaligus mempersiapkan diri meraih karier global yang berintegritas dan penuh peluang.",
    japaneseDesc:
      "日本の職場文化を理解し、誠実なグローバルキャリアを築くための知識・ヒント・インスピレーションをご紹介します。",
  },
];

export const dataIcon: IconArticle[] = [
  {
    id: 1,
    icon: Info,
    title: "Rubrik Informasi",
  },
  {
    id: 2,
    icon: GraduationCap,
    title: "Rubrik Edukasi",
  },
  {
    id: 3,
    icon: Smile,
    title: "Rubrik Hiburan ",
  },
];

export const articles: articleComponent[] = [
  {
    id: 1,
    hero: "/assets/images/artikel/Rubrik Informasi.png",
    slug: "caregiver-articles",
    content: 
    `Dari Caregiver Sampai S2 di Jepang: Sebuah Perjalanan Inspiratif
Banyak orang menganggap impian untuk sekolah ke luar negeri, apalagi hingga jenjang S2, adalah sesuatu yang mustahil. Apalagi jika berangkat dari latar belakang pekerjaan yang tidak linear. Namun, kisah Yuni menjadi bukti bahwa dedikasi dan tekad bisa mengubah takdir. Ia memulai perjalanannya di Jepang sebagai seorang caregiver, dan kini berhasil menembus program magister di salah satu universitas bergengsi di sana.
Awal Mula Perjalanan: Menjadi Caregiver

Pada tahun 2017, Yuni tiba di Jepang dengan visa caregiver melalui jalur swasta. Lulusan dari Universitas Airlangga ini sudah mantap dengan pilihannya, karena ia sadar bahwa jalur caregiver adalah salah satu pintu tercepat untuk datang dan bekerja di Jepang. Meskipun tantangannya berat—mulai dari kendala bahasa hingga beban kerja yang tinggi—Yuni menjalaninya dengan penuh tanggung jawab.
Selama menjadi caregiver di sebuah panti jompo, ia tidak hanya merawat para lansia. Ia juga belajar banyak tentang etos kerja, budaya Jepang, dan yang paling penting, menguasai Bahasa Jepang secara aktif. Dengan menguasai Bahasa Jepang, ia bisa berkomunikasi dengan baik, membangun hubungan dengan rekan kerja, dan perlahan-lahan mulai merajut impian berikutnya.
Merajut Mimpi Baru: Menembus Beasiswa S2

Setelah menjalani pekerjaan sebagai caregiver selama 3 tahun, Yuni mulai merasa sudah saatnya untuk naik ke level yang lebih tinggi. Ia tidak hanya ingin bekerja, tapi juga ingin memperdalam ilmu yang relevan dengan pengalamannya. Ia mulai mencari informasi mengenai beasiswa. Setelah mempertimbangkan berbagai pilihan, ia memutuskan untuk melamar beasiswa Monbukagakusho (MEXT) dari Kedutaan Besar Jepang.
Yuni pun mempersiapkan semua persyaratan dengan matang. Tidak hanya kemampuan bahasa, ia juga harus memiliki proposal penelitian yang kuat dan rekomendasi dari profesor. Pengalaman 3 tahun sebagai caregiver ternyata menjadi nilai tambah. Ia mampu menulis proposal penelitian yang sangat relevan dan otentik tentang perawatan lansia di Jepang, sesuatu yang tidak dimiliki oleh pelamar lain.

Berbuah Hasil: Menggapai Bangku Kuliah S2
Perjuangan Yuni tidak sia-sia. Setelah melalui serangkaian proses seleksi yang ketat, termasuk ujian dan wawancara, ia berhasil mendapatkan beasiswa MEXT. Ini adalah momen yang sangat membanggakan, karena ia berhasil mengubah statusnya dari seorang pekerja menjadi mahasiswa S2, dan mendapatkan beasiswa penuh yang sangat kompetitif.
Saat ini, Yuni sedang menempuh studi S2 di salah satu universitas terkemuka di Jepang, dengan fokus pada bidang gerontologi atau ilmu yang mempelajari tentang lansia. Kisahnya menjadi inspirasi bagi banyak orang. Ia membuktikan bahwa tidak ada jalur yang salah, yang ada hanya tekad untuk terus belajar.

Pelajaran dari Kisah Yuni
Kisah Yuni mengajarkan kita beberapa hal penting:
1. Jangan remehkan pekerjaan awal. Setiap pekerjaan adalah jembatan menuju kesempatan berikutnya. Pengalaman sebagai caregiver menjadi bekal berharga yang mengantarkannya ke gerbang pendidikan tinggi.
2. Manfaatkan setiap kesempatan. Selama bekerja, Yuni tidak hanya fokus pada pekerjaan, tetapi juga aktif belajar bahasa dan budaya. Hal ini membuka jalan baginya untuk melangkah lebih jauh.
3. Tekad dan konsistensi adalah kunci. Proses menuju S2 di Jepang tidaklah mudah. Namun, dengan tekad yang kuat dan konsistensi dalam mempersiapkan diri, mimpi yang besar bisa menjadi kenyataan.

Kisah Yuni menunjukkan bahwa impian untuk menempuh pendidikan tinggi di luar negeri tidak terbatas pada mereka yang datang dari jalur akademis formal. Dengan kerja keras, ketekunan, dan kemauan untuk terus belajar, siapa pun bisa mengubah nasib dan meraih cita-cita tertinggi.
`,
    category: "RUBRIK INFORMASI",
    title: "Dari Caregiver sampai S2 di Jepang",
    date: "AUG 2025",
  },
  {
    id: 2,
    hero: "/assets/images/artikel/Rubrik Edukasi.png",
    slug: "agensi-articles",
    content: 
    `Dari Caregiver Sampai S2 di Jepang: Sebuah Perjalanan Inspiratif
Banyak orang menganggap impian untuk sekolah ke luar negeri, apalagi hingga jenjang S2, adalah sesuatu yang mustahil. Apalagi jika berangkat dari latar belakang pekerjaan yang tidak linear. Namun, kisah Yuni menjadi bukti bahwa dedikasi dan tekad bisa mengubah takdir. Ia memulai perjalanannya di Jepang sebagai seorang caregiver, dan kini berhasil menembus program magister di salah satu universitas bergengsi di sana.
Awal Mula Perjalanan: Menjadi Caregiver

Pada tahun 2017, Yuni tiba di Jepang dengan visa caregiver melalui jalur swasta. Lulusan dari Universitas Airlangga ini sudah mantap dengan pilihannya, karena ia sadar bahwa jalur caregiver adalah salah satu pintu tercepat untuk datang dan bekerja di Jepang. Meskipun tantangannya berat—mulai dari kendala bahasa hingga beban kerja yang tinggi—Yuni menjalaninya dengan penuh tanggung jawab.
Selama menjadi caregiver di sebuah panti jompo, ia tidak hanya merawat para lansia. Ia juga belajar banyak tentang etos kerja, budaya Jepang, dan yang paling penting, menguasai Bahasa Jepang secara aktif. Dengan menguasai Bahasa Jepang, ia bisa berkomunikasi dengan baik, membangun hubungan dengan rekan kerja, dan perlahan-lahan mulai merajut impian berikutnya.
Merajut Mimpi Baru: Menembus Beasiswa S2

Setelah menjalani pekerjaan sebagai caregiver selama 3 tahun, Yuni mulai merasa sudah saatnya untuk naik ke level yang lebih tinggi. Ia tidak hanya ingin bekerja, tapi juga ingin memperdalam ilmu yang relevan dengan pengalamannya. Ia mulai mencari informasi mengenai beasiswa. Setelah mempertimbangkan berbagai pilihan, ia memutuskan untuk melamar beasiswa Monbukagakusho (MEXT) dari Kedutaan Besar Jepang.
Yuni pun mempersiapkan semua persyaratan dengan matang. Tidak hanya kemampuan bahasa, ia juga harus memiliki proposal penelitian yang kuat dan rekomendasi dari profesor. Pengalaman 3 tahun sebagai caregiver ternyata menjadi nilai tambah. Ia mampu menulis proposal penelitian yang sangat relevan dan otentik tentang perawatan lansia di Jepang, sesuatu yang tidak dimiliki oleh pelamar lain.

Berbuah Hasil: Menggapai Bangku Kuliah S2
Perjuangan Yuni tidak sia-sia. Setelah melalui serangkaian proses seleksi yang ketat, termasuk ujian dan wawancara, ia berhasil mendapatkan beasiswa MEXT. Ini adalah momen yang sangat membanggakan, karena ia berhasil mengubah statusnya dari seorang pekerja menjadi mahasiswa S2, dan mendapatkan beasiswa penuh yang sangat kompetitif.
Saat ini, Yuni sedang menempuh studi S2 di salah satu universitas terkemuka di Jepang, dengan fokus pada bidang gerontologi atau ilmu yang mempelajari tentang lansia. Kisahnya menjadi inspirasi bagi banyak orang. Ia membuktikan bahwa tidak ada jalur yang salah, yang ada hanya tekad untuk terus belajar.

Pelajaran dari Kisah Yuni
Kisah Yuni mengajarkan kita beberapa hal penting:
1. Jangan remehkan pekerjaan awal. Setiap pekerjaan adalah jembatan menuju kesempatan berikutnya. Pengalaman sebagai caregiver menjadi bekal berharga yang mengantarkannya ke gerbang pendidikan tinggi.
2. Manfaatkan setiap kesempatan. Selama bekerja, Yuni tidak hanya fokus pada pekerjaan, tetapi juga aktif belajar bahasa dan budaya. Hal ini membuka jalan baginya untuk melangkah lebih jauh.
3. Tekad dan konsistensi adalah kunci. Proses menuju S2 di Jepang tidaklah mudah. Namun, dengan tekad yang kuat dan konsistensi dalam mempersiapkan diri, mimpi yang besar bisa menjadi kenyataan.

Kisah Yuni menunjukkan bahwa impian untuk menempuh pendidikan tinggi di luar negeri tidak terbatas pada mereka yang datang dari jalur akademis formal. Dengan kerja keras, ketekunan, dan kemauan untuk terus belajar, siapa pun bisa mengubah nasib dan meraih cita-cita tertinggi.
`,
    category: "RUBRIK EDUKASI",
    title: "Pentingnya Memilih Bibit Tanaman: ...",
    date: "AUG 2025",
  },
  {
    id: 3,
    hero: "/assets/images/artikel/Frame 91.png",
    slug: "bibit-articles",
    content: 
    `Dari Caregiver Sampai S2 di Jepang: Sebuah Perjalanan Inspiratif
Banyak orang menganggap impian untuk sekolah ke luar negeri, apalagi hingga jenjang S2, adalah sesuatu yang mustahil. Apalagi jika berangkat dari latar belakang pekerjaan yang tidak linear. Namun, kisah Yuni menjadi bukti bahwa dedikasi dan tekad bisa mengubah takdir. Ia memulai perjalanannya di Jepang sebagai seorang caregiver, dan kini berhasil menembus program magister di salah satu universitas bergengsi di sana.
Awal Mula Perjalanan: Menjadi Caregiver

Pada tahun 2017, Yuni tiba di Jepang dengan visa caregiver melalui jalur swasta. Lulusan dari Universitas Airlangga ini sudah mantap dengan pilihannya, karena ia sadar bahwa jalur caregiver adalah salah satu pintu tercepat untuk datang dan bekerja di Jepang. Meskipun tantangannya berat—mulai dari kendala bahasa hingga beban kerja yang tinggi—Yuni menjalaninya dengan penuh tanggung jawab.
Selama menjadi caregiver di sebuah panti jompo, ia tidak hanya merawat para lansia. Ia juga belajar banyak tentang etos kerja, budaya Jepang, dan yang paling penting, menguasai Bahasa Jepang secara aktif. Dengan menguasai Bahasa Jepang, ia bisa berkomunikasi dengan baik, membangun hubungan dengan rekan kerja, dan perlahan-lahan mulai merajut impian berikutnya.
Merajut Mimpi Baru: Menembus Beasiswa S2

Setelah menjalani pekerjaan sebagai caregiver selama 3 tahun, Yuni mulai merasa sudah saatnya untuk naik ke level yang lebih tinggi. Ia tidak hanya ingin bekerja, tapi juga ingin memperdalam ilmu yang relevan dengan pengalamannya. Ia mulai mencari informasi mengenai beasiswa. Setelah mempertimbangkan berbagai pilihan, ia memutuskan untuk melamar beasiswa Monbukagakusho (MEXT) dari Kedutaan Besar Jepang.
Yuni pun mempersiapkan semua persyaratan dengan matang. Tidak hanya kemampuan bahasa, ia juga harus memiliki proposal penelitian yang kuat dan rekomendasi dari profesor. Pengalaman 3 tahun sebagai caregiver ternyata menjadi nilai tambah. Ia mampu menulis proposal penelitian yang sangat relevan dan otentik tentang perawatan lansia di Jepang, sesuatu yang tidak dimiliki oleh pelamar lain.

Berbuah Hasil: Menggapai Bangku Kuliah S2
Perjuangan Yuni tidak sia-sia. Setelah melalui serangkaian proses seleksi yang ketat, termasuk ujian dan wawancara, ia berhasil mendapatkan beasiswa MEXT. Ini adalah momen yang sangat membanggakan, karena ia berhasil mengubah statusnya dari seorang pekerja menjadi mahasiswa S2, dan mendapatkan beasiswa penuh yang sangat kompetitif.
Saat ini, Yuni sedang menempuh studi S2 di salah satu universitas terkemuka di Jepang, dengan fokus pada bidang gerontologi atau ilmu yang mempelajari tentang lansia. Kisahnya menjadi inspirasi bagi banyak orang. Ia membuktikan bahwa tidak ada jalur yang salah, yang ada hanya tekad untuk terus belajar.

Pelajaran dari Kisah Yuni
Kisah Yuni mengajarkan kita beberapa hal penting:
1. Jangan remehkan pekerjaan awal. Setiap pekerjaan adalah jembatan menuju kesempatan berikutnya. Pengalaman sebagai caregiver menjadi bekal berharga yang mengantarkannya ke gerbang pendidikan tinggi.
2. Manfaatkan setiap kesempatan. Selama bekerja, Yuni tidak hanya fokus pada pekerjaan, tetapi juga aktif belajar bahasa dan budaya. Hal ini membuka jalan baginya untuk melangkah lebih jauh.
3. Tekad dan konsistensi adalah kunci. Proses menuju S2 di Jepang tidaklah mudah. Namun, dengan tekad yang kuat dan konsistensi dalam mempersiapkan diri, mimpi yang besar bisa menjadi kenyataan.

Kisah Yuni menunjukkan bahwa impian untuk menempuh pendidikan tinggi di luar negeri tidak terbatas pada mereka yang datang dari jalur akademis formal. Dengan kerja keras, ketekunan, dan kemauan untuk terus belajar, siapa pun bisa mengubah nasib dan meraih cita-cita tertinggi.
`,
    category: "RUBRIK INFORMASI",
    title: "Agensi Konstruksi Jepang dari Alumni Yukari",
    date: "AUG 2025",
  },
  {
    id: 4,
    hero: "/assets/images/artikel/Frame 91.png",
    slug: "tanaman-articles",
    content: 
    `Dari Caregiver Sampai S2 di Jepang: Sebuah Perjalanan Inspiratif
Banyak orang menganggap impian untuk sekolah ke luar negeri, apalagi hingga jenjang S2, adalah sesuatu yang mustahil. Apalagi jika berangkat dari latar belakang pekerjaan yang tidak linear. Namun, kisah Yuni menjadi bukti bahwa dedikasi dan tekad bisa mengubah takdir. Ia memulai perjalanannya di Jepang sebagai seorang caregiver, dan kini berhasil menembus program magister di salah satu universitas bergengsi di sana.
Awal Mula Perjalanan: Menjadi Caregiver

Pada tahun 2017, Yuni tiba di Jepang dengan visa caregiver melalui jalur swasta. Lulusan dari Universitas Airlangga ini sudah mantap dengan pilihannya, karena ia sadar bahwa jalur caregiver adalah salah satu pintu tercepat untuk datang dan bekerja di Jepang. Meskipun tantangannya berat—mulai dari kendala bahasa hingga beban kerja yang tinggi—Yuni menjalaninya dengan penuh tanggung jawab.
Selama menjadi caregiver di sebuah panti jompo, ia tidak hanya merawat para lansia. Ia juga belajar banyak tentang etos kerja, budaya Jepang, dan yang paling penting, menguasai Bahasa Jepang secara aktif. Dengan menguasai Bahasa Jepang, ia bisa berkomunikasi dengan baik, membangun hubungan dengan rekan kerja, dan perlahan-lahan mulai merajut impian berikutnya.
Merajut Mimpi Baru: Menembus Beasiswa S2

Setelah menjalani pekerjaan sebagai caregiver selama 3 tahun, Yuni mulai merasa sudah saatnya untuk naik ke level yang lebih tinggi. Ia tidak hanya ingin bekerja, tapi juga ingin memperdalam ilmu yang relevan dengan pengalamannya. Ia mulai mencari informasi mengenai beasiswa. Setelah mempertimbangkan berbagai pilihan, ia memutuskan untuk melamar beasiswa Monbukagakusho (MEXT) dari Kedutaan Besar Jepang.
Yuni pun mempersiapkan semua persyaratan dengan matang. Tidak hanya kemampuan bahasa, ia juga harus memiliki proposal penelitian yang kuat dan rekomendasi dari profesor. Pengalaman 3 tahun sebagai caregiver ternyata menjadi nilai tambah. Ia mampu menulis proposal penelitian yang sangat relevan dan otentik tentang perawatan lansia di Jepang, sesuatu yang tidak dimiliki oleh pelamar lain.

Berbuah Hasil: Menggapai Bangku Kuliah S2
Perjuangan Yuni tidak sia-sia. Setelah melalui serangkaian proses seleksi yang ketat, termasuk ujian dan wawancara, ia berhasil mendapatkan beasiswa MEXT. Ini adalah momen yang sangat membanggakan, karena ia berhasil mengubah statusnya dari seorang pekerja menjadi mahasiswa S2, dan mendapatkan beasiswa penuh yang sangat kompetitif.
Saat ini, Yuni sedang menempuh studi S2 di salah satu universitas terkemuka di Jepang, dengan fokus pada bidang gerontologi atau ilmu yang mempelajari tentang lansia. Kisahnya menjadi inspirasi bagi banyak orang. Ia membuktikan bahwa tidak ada jalur yang salah, yang ada hanya tekad untuk terus belajar.

Pelajaran dari Kisah Yuni
Kisah Yuni mengajarkan kita beberapa hal penting:
1. Jangan remehkan pekerjaan awal. Setiap pekerjaan adalah jembatan menuju kesempatan berikutnya. Pengalaman sebagai caregiver menjadi bekal berharga yang mengantarkannya ke gerbang pendidikan tinggi.
2. Manfaatkan setiap kesempatan. Selama bekerja, Yuni tidak hanya fokus pada pekerjaan, tetapi juga aktif belajar bahasa dan budaya. Hal ini membuka jalan baginya untuk melangkah lebih jauh.
3. Tekad dan konsistensi adalah kunci. Proses menuju S2 di Jepang tidaklah mudah. Namun, dengan tekad yang kuat dan konsistensi dalam mempersiapkan diri, mimpi yang besar bisa menjadi kenyataan.

Kisah Yuni menunjukkan bahwa impian untuk menempuh pendidikan tinggi di luar negeri tidak terbatas pada mereka yang datang dari jalur akademis formal. Dengan kerja keras, ketekunan, dan kemauan untuk terus belajar, siapa pun bisa mengubah nasib dan meraih cita-cita tertinggi.
`,
    category: "RUBRIK INFORMASI",
    title: "Agensi Konstruksi Jepang dari Alumni Yukari",
    date: "AUG 2025",
  },
  {
    id: 5,
    hero: "/assets/images/artikel/Rubrik Edukasi.png",
    slug: "petani-articles",
    content: 
    `Dari Caregiver Sampai S2 di Jepang: Sebuah Perjalanan Inspiratif
Banyak orang menganggap impian untuk sekolah ke luar negeri, apalagi hingga jenjang S2, adalah sesuatu yang mustahil. Apalagi jika berangkat dari latar belakang pekerjaan yang tidak linear. Namun, kisah Yuni menjadi bukti bahwa dedikasi dan tekad bisa mengubah takdir. Ia memulai perjalanannya di Jepang sebagai seorang caregiver, dan kini berhasil menembus program magister di salah satu universitas bergengsi di sana.
Awal Mula Perjalanan: Menjadi Caregiver

Pada tahun 2017, Yuni tiba di Jepang dengan visa caregiver melalui jalur swasta. Lulusan dari Universitas Airlangga ini sudah mantap dengan pilihannya, karena ia sadar bahwa jalur caregiver adalah salah satu pintu tercepat untuk datang dan bekerja di Jepang. Meskipun tantangannya berat—mulai dari kendala bahasa hingga beban kerja yang tinggi—Yuni menjalaninya dengan penuh tanggung jawab.
Selama menjadi caregiver di sebuah panti jompo, ia tidak hanya merawat para lansia. Ia juga belajar banyak tentang etos kerja, budaya Jepang, dan yang paling penting, menguasai Bahasa Jepang secara aktif. Dengan menguasai Bahasa Jepang, ia bisa berkomunikasi dengan baik, membangun hubungan dengan rekan kerja, dan perlahan-lahan mulai merajut impian berikutnya.
Merajut Mimpi Baru: Menembus Beasiswa S2

Setelah menjalani pekerjaan sebagai caregiver selama 3 tahun, Yuni mulai merasa sudah saatnya untuk naik ke level yang lebih tinggi. Ia tidak hanya ingin bekerja, tapi juga ingin memperdalam ilmu yang relevan dengan pengalamannya. Ia mulai mencari informasi mengenai beasiswa. Setelah mempertimbangkan berbagai pilihan, ia memutuskan untuk melamar beasiswa Monbukagakusho (MEXT) dari Kedutaan Besar Jepang.
Yuni pun mempersiapkan semua persyaratan dengan matang. Tidak hanya kemampuan bahasa, ia juga harus memiliki proposal penelitian yang kuat dan rekomendasi dari profesor. Pengalaman 3 tahun sebagai caregiver ternyata menjadi nilai tambah. Ia mampu menulis proposal penelitian yang sangat relevan dan otentik tentang perawatan lansia di Jepang, sesuatu yang tidak dimiliki oleh pelamar lain.

Berbuah Hasil: Menggapai Bangku Kuliah S2
Perjuangan Yuni tidak sia-sia. Setelah melalui serangkaian proses seleksi yang ketat, termasuk ujian dan wawancara, ia berhasil mendapatkan beasiswa MEXT. Ini adalah momen yang sangat membanggakan, karena ia berhasil mengubah statusnya dari seorang pekerja menjadi mahasiswa S2, dan mendapatkan beasiswa penuh yang sangat kompetitif.
Saat ini, Yuni sedang menempuh studi S2 di salah satu universitas terkemuka di Jepang, dengan fokus pada bidang gerontologi atau ilmu yang mempelajari tentang lansia. Kisahnya menjadi inspirasi bagi banyak orang. Ia membuktikan bahwa tidak ada jalur yang salah, yang ada hanya tekad untuk terus belajar.

Pelajaran dari Kisah Yuni
Kisah Yuni mengajarkan kita beberapa hal penting:
1. Jangan remehkan pekerjaan awal. Setiap pekerjaan adalah jembatan menuju kesempatan berikutnya. Pengalaman sebagai caregiver menjadi bekal berharga yang mengantarkannya ke gerbang pendidikan tinggi.
2. Manfaatkan setiap kesempatan. Selama bekerja, Yuni tidak hanya fokus pada pekerjaan, tetapi juga aktif belajar bahasa dan budaya. Hal ini membuka jalan baginya untuk melangkah lebih jauh.
3. Tekad dan konsistensi adalah kunci. Proses menuju S2 di Jepang tidaklah mudah. Namun, dengan tekad yang kuat dan konsistensi dalam mempersiapkan diri, mimpi yang besar bisa menjadi kenyataan.

Kisah Yuni menunjukkan bahwa impian untuk menempuh pendidikan tinggi di luar negeri tidak terbatas pada mereka yang datang dari jalur akademis formal. Dengan kerja keras, ketekunan, dan kemauan untuk terus belajar, siapa pun bisa mengubah nasib dan meraih cita-cita tertinggi.
`,
    category: "RUBRIK EDUKASI",
    title: "Pentingnya Memilih Bibit Tanaman: ...",
    date: "AUG 2025",
  },
];
