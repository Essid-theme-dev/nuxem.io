import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { publicAssetPath } from "@/app/lib/public-asset";
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
  title: "Nuxem Dashboard",
  description: "Dashboard app with collapsible sidebar and top navbar",
  icons: {
    icon: publicAssetPath("/logo-icon.svg"),
    shortcut: publicAssetPath("/logo-icon.svg"),
    apple: publicAssetPath("/logo-icon.svg"),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
      data-accent-theme="blue"
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
