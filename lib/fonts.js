import { Lexend_Peta, Lateef, Playfair_Display } from "next/font/google";

export const lexendPeta = Lexend_Peta({
  subsets: ["latin"],
  variable: "--font-lexend-peta",
  display: "swap",
  weight: ["300", "400", "700"] 
});

export const lateef = Lateef({
  subsets: ["latin"],
  variable: "--font-lateef",
  display: "swap",
  weight: ["300", "400", "600"]
});