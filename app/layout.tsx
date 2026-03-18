import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "./components/Navbar";
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
  title: "Next.js Advanced Data Fetching",
  description: "A beautiful Next.js application demonstrating SSR, SSG, and Dynamic Routing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-gray-50 dark:bg-[#0a0a0a] text-gray-900 dark:text-gray-100 transition-colors duration-300`}
      >
        <Navbar />
        <main className="pt-16 min-h-[calc(100vh-4rem)] flex flex-col">
          {children}
        </main>
      </body>
    </html>
  );
}
