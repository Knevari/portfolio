import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Mateus "Knevari" Souza | Senior Product Architect',
  description: "Architecting the technical horizon of Web3 & FinTech. Founding Partner at N3MUS. Specialist in high-scale systems and decentralized architecture.",
  keywords: ["Web3", "Product Architect", "FinTech", "N3MUS", "Knevari", "Blockchain", "Next.js", "System Design"],
  authors: [{ name: "Mateus Souza" }],
  openGraph: {
    title: 'Mateus "Knevari" Souza | Senior Product Architect',
    description: "Senior Technical Architect specialized in Web3 platforms and FinTech systems architecture.",
    url: "https://knevari.me",
    siteName: "Knevari Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Knevari // Senior Product Architect",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: 'Mateus "Knevari" Souza | Senior Product Architect',
    description: "Architecting high-scale Web3 & FinTech systems.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
