import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import MotionEffects from "./motion";

const nunito = Nunito({ subsets: ["latin"], variable: "--font-brand", display: "swap" });

export const metadata: Metadata = {
  title: "AD Consulting | Gestión y desarrollo de talento",
  description: "Seleccionamos y potenciamos el talento de las organizaciones en todo Chile.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={nunito.variable}><MotionEffects />{children}</body>
    </html>
  );
}
