import type { Metadata } from "next";
import { Geist, Geist_Mono, Philosopher } from "next/font/google";
import "./globals.css";
import "./style/components.css";
import "./style/layouts.css";
import type { Viewport } from "next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WCB Cafe",
  description: "ブレンドコーヒーとヘルシーなオーガニックフードを提供するカフェ",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // suppressHydrationWarning を追加
    <html lang="ja" suppressHydrationWarning>
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
