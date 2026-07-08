import { Metadata } from "next";
import PortfolioView from "@/features/portfolio/PortfolioView";

export const metadata: Metadata = {
  title: "Akhmad Aldo Sari (Aldo) | Mobile & Web Developer",
  description: "Portfolio of Akhmad Aldo Sari (commonly known as Aldo or Ahmad Aldo), an expert mobile and web developer based in Depok, Indonesia. Specializing in high-performance applications with Flutter, React Native, Kotlin, Swift, and Next.js.",
  keywords: [
    "Akhmad Aldo Sari",
    "Akhmad Aldo",
    "ahmad aldo",
    "akhmadaldo",
    "aldos",
    "aldodevv",
    "Mobile Developer Depok",
    "Web Developer Indonesia",
    "Software Engineer Indonesia",
    "Flutter Developer Indonesia",
    "React Native Developer",
    "Next.js Developer",
    "QLola Mobile BRI",
    "QLola IB Token",
    "Kotlin Developer",
    "Swift Developer",
    "Bank Rakyat Indonesia Developer",
    "Aldo",
    "Aldodevv"
  ],
  authors: [{ name: "Akhmad Aldo Sari", url: "https://akhmadaldo.my.id" }],
  creator: "Akhmad Aldo Sari",
  openGraph: {
    type: "profile",
    firstName: "Akhmad Aldo",
    lastName: "Sari",
    username: "aldodevv",
    gender: "male",
    locale: "en_US",
    url: "https://akhmadaldo.my.id",
    title: "Akhmad Aldo Sari (Aldo) | Mobile & Web Developer",
    description: "Portfolio of Akhmad Aldo Sari (commonly known as Aldo or Ahmad Aldo), an expert mobile and web developer based in Depok, Indonesia. Specializing in high-performance applications with Flutter, React Native, Kotlin, Swift, and Next.js.",
    siteName: "Akhmad Aldo Sari Portfolio",
    images: [
      {
        url: "/assets/me.png",
        width: 1200,
        height: 630,
        alt: "Akhmad Aldo Sari",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Akhmad Aldo Sari (Aldo) | Mobile & Web Developer",
    description: "Portfolio of Akhmad Aldo Sari (commonly known as Aldo or Ahmad Aldo), an expert mobile and web developer based in Depok, Indonesia. Specializing in high-performance applications with Flutter, React Native, Kotlin, Swift, and Next.js.",
    creator: "@aldodevv",
    images: ["/assets/me.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/assets/logo.png",
    shortcut: "/assets/logo.png",
    apple: "/assets/logo.png",
  },
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Akhmad Aldo Sari",
    "alternateName": ["Ahmad Aldo", "Aldo", "Ahmad Aldo Sari", "Akhmad Aldo", "aldodevv", "akhmadaldo", "aldos"],
    "url": "https://akhmadaldo.my.id",
    "image": "https://akhmadaldo.my.id/assets/me.png",
    "jobTitle": "Mobile & Web Developer",
    "gender": "Male",
    "nationality": {
      "@type": "Country",
      "name": "Indonesia"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Depok",
      "addressRegion": "West Java",
      "addressCountry": "ID"
    },
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Universitas Bina Sarana Informatika"
    },
    "knowsAbout": [
      "Mobile Application Development",
      "Web Development",
      "Software Engineering",
      "Flutter",
      "React Native",
      "Kotlin",
      "Swift",
      "Next.js",
      "React",
      "TypeScript",
      "Go"
    ],
    "sameAs": [
      "https://github.com/aldodevv",
      "https://linkedin.com/in/aldodevv",
      "https://instagram.com/aldodevv",
      "https://play.google.com/store/apps/details?id=id.co.bri.qlola"
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PortfolioView />
    </>
  );
}
