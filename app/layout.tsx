import type { Metadata } from "next";
import Footer from "@/components/Footer";
import "@/css/globals.css";
import { lateef, lexendPeta, inter } from "@/lib/fonts";

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
    <html lang="en" className={`${lexendPeta.variable} ${lateef.variable} ${inter.variable}`}>
      <body className={inter.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
