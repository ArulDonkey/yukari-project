interface Programs {
  id: number;
  background: string;
  abbreviation: string;
  title: string;
  details: string;
  slug: string;
  desc: string;
  descJapanese: string;
}

export const dummyProgram: Programs[] = [
  {
    id: 1,
    background: "/assets/images/kerja-magang-program.png",
    abbreviation: "Technichal Intern Training Program",
    title: "Kerja Magang/TITP",
    details: "送出し機関のサポート (Bantuan Sending Organization (SO) )",
    slug: "kerja-magang-programs",
    desc: "Magang teknis di Jepang, yang juga dikenal sebagai Technical Intern Training Program (TITP) atau Ginou Jisshuu, adalah program pelatihan kerja untuk belajar keterampilan teknis dan bekerja di Jepang selama beberapa tahun.",
    descJapanese: "「技能実習制度（ぎのうじっしゅうせいど）」、通称「TITP」として知られる日本の技術研修制度は、日本で数年間、技術を学びながら働くための研修プログラムです。"
  },
  {
    id: 2,
    background: "/assets/images/ssw-program.png",
    abbreviation: "Specified Skilled Worker",
    title: "SSW",
    details: "特定技能",
    slug: "ssw-programs",
    desc: "Specified Skilled Worker, adalah program visa kerja di Jepang untuk bekerja di berbagai bidang industri dengan status izin tinggal yang sama dengan pekerja Jepang.",
    descJapanese: "特定技能（とくていぎのう）は、特定の産業分野で働く外国人向けの在留資格で、日本人労働者と同等の待遇で日本での就労が認められるプログラムです。"
  },
  {
    id: 3,
    background: "/assets/images/engineer-program.png",
    abbreviation: "Profesional",
    title: "Engineer",
    details: "エンジニア",
    slug: "engineer-program",
    desc: "Jenis visa kerja di Jepang yang ditujukan untuk tenaga kerja asing dengan keahlian khusus di bidang teknik, humaniora, atau layanan internasional.",
    descJapanese: "「日本の在留資格（就労ビザ）の一種で、技術、人文知識、国際業務の分野における専門的な知識やスキルを持つ外国人向けのものです。」"
  },
];
