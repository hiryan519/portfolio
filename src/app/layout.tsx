import type { Metadata } from "next";
import { Antonio, Inter } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hiryan Hang | AI Product Manager Portfolio",
  description:
    "A one-page portfolio showcasing AI product management projects, RAG workflows, Agent design, product thinking, and prototype practice.",
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
});

const antonio = Antonio({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${antonio.variable}`}>{children}</body>
    </html>
  );
}

