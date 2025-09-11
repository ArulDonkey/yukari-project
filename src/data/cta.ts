import { ArrowUpRight } from "lucide-react";

// CTA Component
interface CTABackground {
    background: string;
}

interface CTAComponent {
    title: string;
    textButton: string;
    icon: any;
}


// CTA Component
export const dataCTABackground: CTABackground[] = [
    {
        background: "/assets/images/footer-image.png",
    },
];

export const dataCTAComponent: CTAComponent[] = [
    {
        title: "Karir Impianmu dimulai dari sini.",
        textButton: "DAFTAR SEKARANG",
        icon: ArrowUpRight,
    }
];