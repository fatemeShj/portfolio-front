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
          <main className="flex-grow px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
