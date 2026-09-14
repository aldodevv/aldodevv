import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.akhmadaldo.my.id"),
  title: {
    default: "AKHMAD ALDO // SYS.ENG | Mobile & Web Systems",
    template: "%s | AKHMAD ALDO",
  },
  description: "Tactical telemetry engineering & portfolio of Akhmad Aldo (Aldo). Systems architect specializing in cross-platform mobile, distributed backends, and performance-critical web platforms.",
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
    <html lang="en" className="scroll-smooth dark">
      <head>
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://api.iconify.design" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://res.cloudinary.com" crossOrigin="anonymous" />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased bg-[#0a0a0a] text-[#eaeaea] font-mono selection:bg-[#ff2a2a] selection:text-black`}
      >
        {/* Analog CRT Scanlines & Telemetry Background Grid */}
        <div className="fixed inset-0 w-screen h-screen pointer-events-none crt-scanlines z-50 opacity-40" />
        <div className="fixed inset-0 w-screen h-screen pointer-events-none telemetry-grid -z-20 opacity-40" />

        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
