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
  metadataBase: new URL("https://akhmadaldo.my.id"),
  title: {
    default: "Akhmad Aldo Sari | Mobile & Web Developer",
    template: "%s | Akhmad Aldo Sari",
  },
  description: "Portfolio of Akhmad Aldo Sari, an expert mobile and web developer specializing in Flutter, React Native, Kotlin, Swift, and Next.js.",
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
      <body
        className={`${vt323.variable} ${jetbrainsMono.variable} antialiased bg-black text-white font-sans`}
      >
        <div className="crt-overlay" />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
