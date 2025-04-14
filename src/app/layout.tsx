// import { Geist, Geist_Mono } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { ThemeProvider } from "@/context/ThemeContext";

export const metadata: Metadata = {
  title: "Fatemeh Shojaei",
  description: "This is my portfolio",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-[var(--bg-color)] text-[var(--text-color)]">
        <ThemeProvider>
          <Navbar />
          <main className="flex-grow pmx-auto px-6 lg:px-8 xl:px-20 2xl:px-52 py-16 md:py-20">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
