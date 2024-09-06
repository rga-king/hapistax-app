import type { Metadata } from "next";
import Footer from "@/components/Footer";
import { Inter } from "next/font/google";
import "@/css/globals.css";
import { lateef, lexendPeta } from "@/lib/fonts";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HAPiSTAX",
  description:
    "HAPiSTAX is the online home of Robin King, software developer, based in Harpenden UK",
  robots: {
    index: true,
    follow: true,
    nocache: false
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${lexendPeta.variable} ${lateef.variable}`}>
      <body className={inter.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
