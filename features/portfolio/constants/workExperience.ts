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
        id: "qlola-mobile-2025",
        title: "QLola by BRI (Mobile)",
        period: "Juli 2025 - Sekarang",
        description: "QLola Mobile Apps provides easy access to feature integration anywhere, anytime for corporate clients of Bank Rakyat Indonesia.",
        image: "https://play-lh.googleusercontent.com/y0P_ZJgYpYgqfNq9QWvY3R4x8Z9_c9_F__o_a3t9Xo_K_m4sY1_0-x5h5hXv3nB1xWg=w240-h480-rw", // Extracted App Icon fallback, otherwise clearsbit
        link: "https://play.google.com/store/search?q=qlola+ib+token&c=apps",
        techStack: [
            { name: "React Native", icon: ICONS.react },
            { name: "TypeScript", icon: ICONS.typescript },
            { name: "Kotlin", icon: ICONS.kotlin },
            { name: "Swift", icon: ICONS.swift }
        ],
    },
    {
        id: "qlola-core-2024",
        title: "QLola by BRI (Mobile Core)",
        period: "Januari 2024 - Maret 2026",
        description: "Core mobile development for QLola by BRI, maintaining robust banking operations and integrating secure financial services for enterprise users.",
        image: "https://logo.clearbit.com/bri.co.id",
        link: "https://play.google.com/store/apps/details?id=id.co.bri.qlola",
        techStack: [
            { name: "Flutter", icon: ICONS.flutter },
            { name: "Go", icon: ICONS.go },
            { name: "Kotlin", icon: ICONS.kotlin },
        ],
    },
    {
        id: "qlola-web-2023",
        title: "QLola by BRI (Website)",
        period: "November 2023 - Sekarang",
        description: "Development of the QLola integrated corporate banking web platform, ensuring secure, fast, and reliable financial transaction experiences.",
        image: "https://logo.clearbit.com/bri.co.id",
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
        image: "https://logo.clearbit.com/simajji.com",
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
        image: "https://logo.clearbit.com/idn.media",
        link: "https://www.idn.media/",
        techStack: [
            { name: "Next.js", icon: ICONS.nextjs },
            { name: "React", icon: ICONS.react },
            { name: "Go", icon: ICONS.go },
            { name: "Node.js", icon: ICONS.nodejs },
        ],
    },
    {
        id: "media-pintar-2021",
        title: "Media Pintar Perjuangan",
        period: "Juni 2021 - September 2021",
        description: "Developed a collaborative digital platform app for MSMEs and creators to build the people's economy, focused on robust feature delivery and cross-platform compatibility.",
        image: "https://play-lh.googleusercontent.com/9w211U55s7-fX_K0a4q9s1s4f5T1T6_t-_fXk59s3J-X9_51gW695v2pW_57oB-B2q_U=w240-h480-rw",
        link: "https://play.google.com/store/apps/details?id=com.pdipkreatif.mpp",
        techStack: [
            { name: "Flutter", icon: ICONS.flutter },
            { name: "Kotlin", icon: ICONS.kotlin },
            { name: "Swift", icon: ICONS.swift },
        ],
    },
    {
        id: "panca-eka-2021",
        title: "Panca Eka Wira Sanjaya",
        period: "Januari 2021 - Juni 2021",
        description: "Built corporate digital solutions for Panca Eka Wira Sanjaya. Transformed their vision into a modern, efficient web platform for project and service management.",
        image: "https://logo.clearbit.com/pancaekawirasanjaya.co.id",
        link: "https://pancaekawirasanjaya.co.id/",
        techStack: [
            { name: "React", icon: ICONS.react },
            { name: "Tailwind", icon: ICONS.tailwind },
            { name: "Node.js", icon: ICONS.nodejs },
        ],
    },
];
