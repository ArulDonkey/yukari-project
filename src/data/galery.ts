interface Galery {
    id: number;
    image: string;
}

interface Content{
    desc: "Gallery ini menjadi ruang untuk mendokumentasikan perjalanan LPK Yukari Indonesia. Di sini, kami menghadirkan momen penting, aktivitas, serta suasana pembelajaran yang menggambarkan semangat dan komitmen dalam mendampingi peserta yang sedang mempersiapkan diri menuju karier global di Jepang."; 
    japaneseDesc: "当ギャラリーは、LPKゆかりインドネシアの歩みを記録する場です。ここでは、グローバルなキャリアを築くために日本へ旅立つ準備をしている参加者への支援における、私たちの情熱と真摯な姿勢を表す重要な瞬間、活動、そして学習の雰囲気を紹介します。";
}

export const dataGalery: Galery[] = [
    {
        id: 1,
        image: "/assets/images/galery/img-1.png",
    },
    {
        id: 2,
        image: "/assets/images/galery/img-2.png",
    },
    {
        id: 1,
        image: "/assets/images/galery/img-3.png",
    },
    {
        id: 1,
        image: "/assets/images/galery/img-4.png",
    },
    {
        id: 1,
        image: "/assets/images/galery/img-5.png",
    },
];

export const dataContent: Content[] =[
    {
        desc: "Gallery ini menjadi ruang untuk mendokumentasikan perjalanan LPK Yukari Indonesia. Di sini, kami menghadirkan momen penting, aktivitas, serta suasana pembelajaran yang menggambarkan semangat dan komitmen dalam mendampingi peserta yang sedang mempersiapkan diri menuju karier global di Jepang.",
        japaneseDesc: "当ギャラリーは、LPKゆかりインドネシアの歩みを記録する場です。ここでは、グローバルなキャリアを築くために日本へ旅立つ準備をしている参加者への支援における、私たちの情熱と真摯な姿勢を表す重要な瞬間、活動、そして学習の雰囲気を紹介します。"
    }
];
