import localFont from "next/font/local";
import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/mode-toggle";
import { Toaster } from "sonner";
import ImagesDisclaimer from "@/components/images-disclaimer";

const calendas = localFont({
  src: "../fonts/calendas_plus-webfont.woff",
  display: "swap",
  variable: "--font-calendas",
});

export const metadata: Metadata = {
  title: "Vero Design - Dev",
  description:
    "Local web design and development built along with Vero Dashboards",
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
    <html
      lang="en"
      className={`${calendas.variable} antialiased`}
      suppressHydrationWarning
    >
      <body className="flex flex-col min-h-screen">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <ImagesDisclaimer />
          <Navbar />
          <main className="flex-1">{children}</main>
          <div className="fixed bottom-4 right-4 z-50">
            <ModeToggle />
          </div>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
