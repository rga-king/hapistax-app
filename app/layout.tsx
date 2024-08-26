import type { Metadata } from "next";
import Header from "@/components/BaseHeader";
import Footer from "@/components/Footer";
import { Inter } from "next/font/google";
import "@/css/globals.css";
import { lateef, lexendPeta } from '@/lib/fonts';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HAPiSTAX",
  description: "Robin King, software developer, based in Harpenden UK",
  icons: {
    icon: '/favicon.png'
  },
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={
      `${lexendPeta.variable} ${lateef.variable}`
    }>
      <body className={inter.className}>
        {/* <Header /> */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
