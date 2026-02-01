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
  title: "Knevari | Senior Product Architect",
  description: "Architecting the Event Horizon of Web3 & FinTech. Founding Partner at N3MUS, Technical Architect for BitX and BlkBirds.",
  keywords: ["Web3", "Product Architect", "FinTech", "N3MUS", "Knevari", "Blockchain Architecture", "Next.js", "Three.js"],
  authors: [{ name: "Knevari" }],
  openGraph: {
    title: "Knevari | Senior Product Architect",
    description: "Building the future of decentralized finance and gaming architecture.",
    type: "website",
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
