export interface TechIcon {
    name: string;
    icon: string;
}

export interface WorkExperienceItem {
    id: string;
    title: string;
    period: string;
    description: string;
    image: string;
    icon: string;
    link: string;
    techStack: TechIcon[];
}

const ICONS = {
    react: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    nextjs: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    flutter: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg",
    go: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original.svg",
    kotlin: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg",
    swift: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swift/swift-original.svg",
    typescript: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    nodejs: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
    tailwind: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    express: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
};

export const workExperiences: WorkExperienceItem[] = [
    {
        id: "qlola-ibtoken",
        title: "QLola IB Token",
        period: "Juli 2025 - Sekarang",
        description: "QLola IB Token provides easy access to feature integration anywhere, anytime for corporate clients of Bank Rakyat Indonesia.",
        image: "https://res.cloudinary.com/dyuol7xfx/image/upload/v1773130036/Screenshot_2026-03-10_at_15.00.55_ehgpb2.png",
        icon: "https://res.cloudinary.com/dyuol7xfx/image/upload/v1773131334/qlola_ib_esqw6r.webp",
        link: "https://play.google.com/store/search?q=qlola+ib+token&c=apps",
        techStack: [
            { name: "Flutter", icon: ICONS.flutter },
            { name: "Kotlin", icon: ICONS.kotlin },
            { name: "Swift", icon: ICONS.swift }
        ],
    },
    {
        id: "qlola-mobile",
        title: "QLola Mobile by BRI",
        period: "Januari 2024 - Maret 2026",
        description: "Core mobile development for QLola by BRI, maintaining robust banking operations and integrating secure financial services for enterprise users.",
        image: "https://res.cloudinary.com/dyuol7xfx/image/upload/v1773130037/Screenshot_2026-03-10_at_15.00.22_vvw9je.png",

        icon: "https://res.cloudinary.com/dyuol7xfx/image/upload/v1773131357/ql_ahxyej.webp",
        link: "https://play.google.com/store/apps/details?id=id.co.bri.qlola",
        techStack: [
            { name: "React Native", icon: ICONS.react },
            { name: "TypeScript", icon: ICONS.typescript },
            { name: "Kotlin", icon: ICONS.kotlin },
            { name: "Swift", icon: ICONS.swift }
        ],
    },
    {
        id: "qlola-web-2023",
        title: "QLola by BRI",
        period: "November 2023 - Sekarang",
        description: "Development of the QLola integrated corporate banking web platform, ensuring secure, fast, and reliable financial transaction experiences.",
        image: "https://res.cloudinary.com/dyuol7xfx/image/upload/v1773132129/Screenshot_2026-03-10_at_15.41.47_pl2xe2.png",
        icon: "https://res.cloudinary.com/dyuol7xfx/image/upload/v1773131544/qlola_by_bri_rpdav0.png",
        link: "https://qlola.bri.co.id/",
        techStack: [
            { name: "Next.js", icon: ICONS.nextjs },
            { name: "React", icon: ICONS.react },
            { name: "TypeScript", icon: ICONS.typescript },
            { name: "Tailwind CSS", icon: ICONS.tailwind },
        ],
    },
    {
        id: "spriicommerce-2022",
        title: "Spriicommerce (Simajji)",
        period: "Juli 2022 - Agustus 2023",
        description: "Developed the Spriicommerce platform, a Social Commerce and Loyalty Management System (SLM) enabling brands to integrate eCommerce functionalities and reward systems seamlessly.",
        image: "https://res.cloudinary.com/dyuol7xfx/image/upload/v1773131870/protuct-cover-02_sybmdv.jpg",
        icon: "https://res.cloudinary.com/dyuol7xfx/image/upload/v1773131870/logo_i2sotk.png",
        link: "https://www.simajji.com/spriicommerce.html",
        techStack: [
            { name: "React", icon: ICONS.react },
            { name: "Node.js", icon: ICONS.nodejs },
            { name: "Express", icon: ICONS.express },
            { name: "TypeScript", icon: ICONS.typescript },
        ],
    },
    {
        id: "idn-media-2021",
        title: "IDN Media",
        period: "September 2021 - Juli 2022",
        description: "Contributed to the IDN Media consumer tech platform ecosystem, empowering Millennials and Gen Z in Indonesia by building high-traffic, performant news and media interfaces.",
        image: "https://res.cloudinary.com/dyuol7xfx/image/upload/v1773131762/9258cc_91e27373365b4deba24e17db3d657a60f000_wyqp1h.avif",
        icon: "https://res.cloudinary.com/dyuol7xfx/image/upload/v1773131760/9258cc_10a2e00d0ba94f77b2d94b1ec687cafe_mv2_vqrl8a.avif",
        link: "https://www.idn.media/",
        techStack: [
            { name: "Next.js", icon: ICONS.nextjs },
            { name: "React", icon: ICONS.react },
            { name: "TypeScript", icon: ICONS.typescript },
        ],
    },
    {
        id: "media-pintar-2021",
        title: "Media Pintar Perjuangan",
        period: "Juni 2021 - September 2021",
        description: "Developed a collaborative digital platform app for MSMEs and creators to build the people's economy, focused on robust feature delivery and cross-platform compatibility.",
        image: "https://res.cloudinary.com/dyuol7xfx/image/upload/v1773130039/Screenshot_2026-03-10_at_15.01.33_gmupra.png",
        icon: "https://res.cloudinary.com/dyuol7xfx/image/upload/v1773131290/mpp_jn5sht.webp",
        link: "https://play.google.com/store/apps/details?id=com.pdipkreatif.mpp",
        techStack: [
            { name: "React Native", icon: ICONS.react },
            { name: "TypeScript", icon: ICONS.typescript },
            { name: "Kotlin", icon: ICONS.kotlin },
            { name: "Swift", icon: ICONS.swift },
        ],
    },
    {
        id: "panca-eka-2021",
        title: "Panca Eka Wira Sanjaya",
        period: "Januari 2021 - Juni 2021",
        description: "Built corporate digital solutions for Panca Eka Wira Sanjaya. Transformed their vision into a modern, efficient web platform for project and service management.",
        icon: "https://res.cloudinary.com/dyuol7xfx/image/upload/v1773131543/logo-panca-web-200x168_jrwenn.png",
        image: "https://res.cloudinary.com/dyuol7xfx/image/upload/v1773131667/icon-1_jovclq.png",
        link: "https://pancaekawirasanjaya.co.id/",
        techStack: [
            { name: "React", icon: ICONS.react },
            { name: "TypeScript", icon: ICONS.typescript },
            { name: "Tailwind", icon: ICONS.tailwind },
            { name: "Node.js", icon: ICONS.nodejs },
        ],
    },
];
