import { Metadata } from "next";
import PortfolioView from "@/features/portfolio/PortfolioView";

export const metadata: Metadata = {
  title: "Akhmad Aldo Sari | Mobile & Web Developer",
  description: "Portfolio of Akhmad Aldo Sari, an expert in web and mobile development. Specializing in creating responsive, user-friendly applications with a focus on performance and scalability.",
  keywords: [
    "Akhmad Aldo Sari",
    "Mobile Developer", "Web Developer", "Software Engineer",
    "React Native", "Flutter", "Next.js", "React", "TypeScript",
    "Portfolio", "Frontend Developer", "Fullstack Developer"
  ],
  authors: [{ name: "Akhmad Aldo Sari", url: "https://aldodevv.com" }],
  creator: "Akhmad Aldo Sari",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://aldodevv.com",
    title: "Akhmad Aldo Sari | Mobile & Web Developer",
    description: "Expert in web and mobile development, specializing in creating responsive, user-friendly applications with a focus on performance and scalability.",
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
    title: "Akhmad Aldo Sari | Mobile & Web Developer",
    description: "Expert in web and mobile development, specializing in creating responsive, user-friendly applications with a focus on performance and scalability.",
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
  return <PortfolioView />;
}
