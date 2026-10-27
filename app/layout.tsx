import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

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
  description: "Portfolio of Akhmad Aldo, Software Engineer specializing in Flutter, React Native, Kotlin, Swift, and Next.js.",
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
        <link rel="preconnect" href="https://api.fontshare.com" crossOrigin="anonymous" />
        <link href="https://api.fontshare.com/v2/css?f[]=chillax@500,600&display=swap" rel="stylesheet" />
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://api.iconify.design" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://res.cloudinary.com" crossOrigin="anonymous" />
      </head>
      <body
        className={`${jetbrainsMono.variable} antialiased paper-grain min-h-screen selection:bg-[#fae438] selection:text-[#1a2230]`}
      >
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
