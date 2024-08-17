import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GrupoCom",
  description: "Servicios de TI para empresas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/LogoGrupoCom.webp" sizes="64x64" />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
