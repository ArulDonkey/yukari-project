// Header About
interface HeaderAbout {
    id: string;
    background: string;
    title: string;
    subTitle: string;
}

export const dataHeaderAbout: HeaderAbout[] = [
    {
        id: "Background About",
        background: "/assets/images/about/background-about.png",
        title: "BUILT ON TRUST",
        subTitle: "信 頼 を 土 台 に",
    }
];

// About LPK Yukari
interface AboutLPKYukari {
    title: string;
    subtitle: string;
    desc: string[];
}

export const dataAboutLPKYukari: AboutLPKYukari[] = [
    {
        title: "Tentang LPK Yukari",
        subtitle: "縁について",
        desc: [
            `LPK Yukari Indonesia yang merupakan afiliasi dari TSK Technosmile Japan adalah lembaga resmi yang fokus pada pelatihan dan pembinaan untuk ke Jepang melalui program TITP (Technical Intern Training Program), SSW (Specified Skilled Worker), dan Engineer.",

            Metode pembelajaran yang digunakan di LPK Yukari Indonesia adalah metode pembelajaran original; Japanese Hybrid Online Learning (J-HOL).

            LPK Yukari Indonesiaは、TSKテクノスマイルの日本法人であり、技能実習（TITP）、特定技能（SSW）、およびエンジニアとして日本で働くことを目指す方々を対象に、トレーニングと指導を行っている認定機関です。,

            当校では、独自の教育手法である「Japanese Hybrid Online Learning（J-HOL）」を採用しています。`
        ],
    }
];

// About J-HOL
interface AboutJHOL {
    titile: string;
    desc: string;
    hero: string;
}

interface IconJHOL{
    id: string;
    icon: string;
    title: string;
    desc: string;
}

export const dataAboutJHOL: AboutJHOL[] =[
    {
        titile: "Japanese Hybrid Online Learning (J-HOL)",
        desc: "Gabungan pembelajaran online dan tatap muka – versi unggulan pendidikan bahasa Jepang “J-HOL”. Materi pembelajaran yang dirancang dengan pengalaman lebih dari 15 tahun dalam pengajaran bahasa Jepang.",
        hero: "/assets/images/about/Picture1.png",
    }
];

export const dataIconJHOL: IconJHOL[] = [
    {
        id: "Thubm UP",
        icon: "/assets/svgs/about/thumb-up.svg",
        title: "Kualitas Pembelajaran Terjamin",
        desc: "Kurikulum disusun di bawah supervisi profesor dari Universitas Waseda, sehingga kualitasnya terjamin.",
    },
    {
        id: "Smile",
        icon: "/assets/svgs/about/smile.svg",
        title: "Aplikasi Mudah Digunakan",
        desc: "Bagian yang dirasa sulit dapat terlihat dengan jelas, sehingga dapat dipelajari lebih intensif.",
    },
    {
        id: "List",
        icon: "/assets/svgs/about/list.svg",
        title: "4 Level Kemampuan",
        desc: "Terdapat 4 tingkatan pembelajaran, level 0-3, sehingga siswa dapat belajar sesuai dengan kemampuan "
    },
    {
        id: "Square Play",
        icon: "/assets/svgs/about/square-play.svg",
        title: "Animasi",
        desc: "Bisa terus semangat belajar karena sambil nonton animasi",
    },
    {
        id: "Speech",
        icon: "/assets/svgs/about/speech.svg",
        title: "Pengawasan Oleh Profesional",
        desc: "Pembelajaran dilakukan secara daring (online) dengan bimbingan langsung oleh pengajar profesional di bidang pendidikan bahasa Jepang.",
    },
    {
        id: "Check - Check",
        icon: "/assets/svgs/about/check-check.svg",
        title: "Praktis dan Fleksibel",
        desc: "Materi dapat diakses melalui berbagai perangkat, memungkinkan pembelajaran kapan saja dan di mana",
    },
];

// Learning Program 
interface LearningProgram {
    title: string;
    image: string;
}

export const dataLearningProgram: LearningProgram[] = [
    {
        title: "Program Belajar",
        image: "/assets/images/about/program-belajar.png"
    }
];

// Business Permit
interface BusinessPermit {
    subTitle: string;
    title: string;
    desc: string[];
    image: string;
}

export const dataBusinessPermit: BusinessPermit[] = [
    {
        subTitle: "IZIN USAHA",
        title: "Memiliki Izin Resmi",
        desc: [
            `PT. Yukari Koneksi Indonesia sudah memiliki legal standing yang sah dan diakui oleh Pemerintah Republik Indonesia sebagai Lembaga Pelatihan Kerja. Anda tidak perlu ragu lagi untuk mewujudkan mimpi dan karir di Jepang bersama Kami.
            
            PT. Yukari Koneksi Indonesiaは、インドネシア共和国政府から正式に認可された、法的地位を持つ労働研修機関です。

            私たちは、皆様が日本で夢やキャリアを実現できるよう、全力でサポートいたします。
安心して私たちにお任せください。`
        ],
        image: "/assets/images/about/business-permit.png"
    }
];