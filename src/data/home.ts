import { ArrowUpRight, Handshake, ThumbsUp, Sheet, BicepsFlexed, School, Sofa, LibraryBig, Hotel, HardHat, Speech, UserRound } from "lucide-react";

// Header Component Data
interface HeaderContent {
    title: string;
    subTitle: string;
    desc: string;
    buttonText: string;
    iconButton: any;
    backgroundHero: string;
}

// Card Component Data
interface CardComponent {
    id: number;
    iconCard: any;
    iconText: string;
}

// Visi and Mision
interface Visi {
    descVisi: string;
}

interface Mision {
    descMision: string;
}

interface VisiMisionImage {
    id: string;
    hero: string;
    
}

// Methode Learning
interface MethodLearning{
    background: string;
    subTitle: string;
    title: string;
    desc: string;
    list: string;
    schedule: string;
    fill: string;
}

// Carousel Image
interface CarouselImage {
    id: string;
    images: string;
}

// Fasilitases
interface FasilitasesHero {
    id: string;
    image: string;
    title: string;
    subTitle: string;
}

interface FasilitasesComponent {
    icon: any;
    textIcon: string;
}

// Departement Component
interface Departementackground{
    id: string;
    background: string;
}

interface DepartementComponent{
    icon: any;
    amount: string;
    text: string;

}

// CTA Component
interface CTABackground {
    background: string;
}

interface CTAComponent {
    title: string;
    textButton: string;
    icon: any;
}

// HeaderContent
export const dataHeaderContent: HeaderContent[] = [
    {
        title: "WALK THE FUTURE",
        subTitle: "未 来 を と も に 歩 む",
        desc: "Melangkahlah dengan penuh kepastian. Karena di LPK Yukari, kami berkomitmen untuk memandu anda dalam perjalanan meniti karir di Jepang — dengan penuh perhatian, integritas, dan dukungan di setiap langkahnya.",
        buttonText: "KENALI YUKARI LEBIH DEKAT",
        iconButton: ArrowUpRight,
        backgroundHero: "/assets/images/home/background-home.png",
    }
];

// CardComponent
export const dataCardComponent: CardComponent[] = [
    {
        id: 1,
        iconCard: Handshake,
        iconText: "Dukungan Karir",
    },
    {
        id: 2,
        iconCard: ThumbsUp,
        iconText: "Belajar Fleksibel",
    },
    {
        id: 3,
        iconCard: Sheet,
        iconText: "Pengajar Profesional",
    },
    {
        id: 4,
        iconCard: BicepsFlexed,
        iconText: "Dukungan Persiapan Karir",
    },
];

// Visi and Mision
export const dataVisi: Visi[] = [
    {
        descVisi: "Menciptakan SDM yang Tangguh, Berkualitas, Siap Kerja dan Bermoral sehingga mampu berkontribusi terhadap Masyarakat.",
    }
];

export const dataMision: Mision[] = [
    {
        descMision: "Pendidikan dan Pelatihan dengan standar Jepang",
    },
    {
        descMision: "Mempromosikan Program Magang Jepang untuk Meningkatkan Keterampilan Pemuda Indonesia",
    },
    {
        descMision: "Membantu pemerintah Indonesia mengurangi tingkat pengangguran",
    }
];

export const dataImageVisiMision: VisiMisionImage[] = [
    {
        id: "Gambar Visi dan Misi 1",
        hero: "/assets/images/home/visi-misi-1.png",
    },
    {
        id: "Gambar Visi dan Misi 2",
        hero: "/assets/images/home/visi-misi-2.png"
    },
    {
        id: "Gambar Visi dan Misi 3",
        hero: "/assets/images/home/visi-misi-3.png"
    }
];

// Method Learning Data
export const dataLearning: MethodLearning[] = [
    {
        background: "/assets/images/home/galery-method.png",
        subTitle: "学習方法 ",  
        title: "Metode Pembelajaran",
        desc: "Kami menggunakan metode pembelajaran original Japanese Hybrid Online Learning (J-HOL) yang dikembangkan oleh Profesor Satoshi Miyazaki dari Waseda University. Beberapa keunggulan metode kami yaitu :",
        list: 
        `1. Penyajian materi menggunakan animasi yang disesuaikan dengan tampilan di layar handphone.   
        2. Materi dipersiapkan oleh Tenaga Pengajar Bahasa Jepang Profesional di Jepang dan sudah teruji.
        `,
        schedule: "Time schedule:",
        fill: "1+4+1 (Onsite + Online + Onsite)"
    }
];

// Data Carousel
export const dataCarousel: CarouselImage[] = [
    {
        id: "Manufactur Image",
        images: "/assets/images/home/manufactur.png"
    },
    {
        id: "Caregiver Image",
        images: "/assets/images/home/perawatan-lansia.png"
    },
    {
        id: "Construction Image",
        images: "/assets/images/home/kontruksi.png"
    },
    {
        id: "Otomotive Image",
        images: "/assets/images/home/otomotif.png"
    },
    {
        id: "Hotelier Image",
        images: "/assets/images/home/pengelolaan-makanan.png"
    }
];

// Fasilitases Component
export const dataFasiitasesHero: FasilitasesHero[] = [
    {
        id: "Pexels Jeswin",
        image: "/assets/images/home/pexels-jeswin-3380743 1.png",
        title: "Fasilitas Pendukung",
        subTitle: "支援施設（しえんしせつ）"
    },
];

export const dataFasilitasesComponent: FasilitasesComponent[] = [
    {
        icon: School,
        textIcon: "Classroom",
    },
    {
        icon: LibraryBig,
        textIcon: "Library",
    },
    {
        icon: Sofa,
        textIcon: "Teachers Lounge",
    },
    {
        icon: Hotel,
        textIcon: "Dormitory",
    }
];

// CTA Component
export const dataDepartementBackground : Departementackground[] = [
    {
        id: "Gallery Departement",
        background: "/assets/images/home/galery.png",
    }
];

export const dataDepartementComponent : DepartementComponent[] = [
    {
        icon: HardHat,
        amount: "0",
        text: "Kandidat Tenaga Kerja"
    },
    {
        icon: Speech,
        amount: "13+",
        text: "Kandidat Tenaga Kerja"
    },
    {
        icon: UserRound,
        amount: "1000+",
        text: "Kandidat Tenaga Kerja"
    },
];

// CTA Component
export const dataCTABackground: CTABackground[] = [
    {
        background: "/assets/images/home/footer-image.png",
    },
];

export const dataCTAComponent: CTAComponent[] = [
    {
        title: "Karir Impianmu dimulai dari sini.",
        textButton: "DAFTAR SEKARANG",
        icon: ArrowUpRight,
    }
];