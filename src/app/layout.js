import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import SpotlightCursor from "@/components/effects/SpotlightCursor";

import BackToTop from "@/components/layout/BackToTop";
import LiveActivity from "@/components/effects/LiveActivity";


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
});

export const metadata = {
  title: "SkillSwap — Trade Skills, Not Money",
  description: "An international skill exchange platform. Teach what you know, learn what you want.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceGrotesk.variable} antialiased relative`}>
        <SpotlightCursor />
        
        {children}
        <BackToTop />
        <LiveActivity />
      </body>
    </html>
  );
}