import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://akhmadaldo.my.id"),
  title: {
    default: "Akhmad Aldo Sari (Aldo) | Mobile & Web Developer",
    template: "%s | Akhmad Aldo Sari (Aldo)",
  },
  description: "Portfolio of Akhmad Aldo Sari (commonly known as Aldo or Ahmad Aldo), an expert mobile and web developer specializing in Flutter, React Native, Kotlin, Swift, and Next.js.",
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
        className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased bg-[#f7f6f0] text-black font-sans`}
      >
        <div className="fixed inset-0 w-screen h-screen pointer-events-none neo-grid-dots -z-20 opacity-30" />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
