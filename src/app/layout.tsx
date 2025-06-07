import localFont from "next/font/local";
import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const calendas = localFont({
  src: "../fonts/calendas_plus-webfont.woff",
  display: "swap",
  variable: "--font-calendas",
});

export const metadata: Metadata = {
  title: "Vero Design",
  description: "generational web design",
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
    <html lang="en" className={`${calendas.variable} antialiased`}>
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
