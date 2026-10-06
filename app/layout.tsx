import type { Metadata } from "next";
import { VT323, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const vt323 = VT323({
  weight: "400",
  variable: "--font-vt323",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.akhmadaldo.my.id"),
  title: {
    default: "Akhmad Aldo (Aldo) | Mobile & Web Developer",
    template: "%s | Akhmad Aldo (Aldo)",
  },
  description: "Portfolio of Akhmad Aldo (commonly known as Aldo or Ahmad Aldo), an expert mobile and web developer specializing in Flutter, React Native, Kotlin, Swift, and Next.js.",
  alternates: {
    canonical: "./",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://api.iconify.design" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://res.cloudinary.com" crossOrigin="anonymous" />
      </head>
      <body
        className={`${vt323.variable} ${jetbrainsMono.variable} antialiased bg-black text-white font-sans selection:bg-[#fa520f] selection:text-black`}
      >
        <div className="crt-overlay" />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
