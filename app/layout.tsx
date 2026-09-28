import type { Metadata } from "next";
import { Space_Grotesk, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-display",
  display: "swap",
});

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Marouane Abderrahmane — Développeur Web Full-Stack",
  description:
    "Portfolio de Marouane Abderrahmane, développeur web full-stack junior basé à Casablanca. React, Next.js, Laravel, Node.js.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${spaceGrotesk.variable} ${plexSans.variable}`}>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
