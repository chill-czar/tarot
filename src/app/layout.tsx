import "~/styles/globals.css";

import { type Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";

export const metadata: Metadata = {
  title: "Tarot with DD | Professional Tarot Readings & Spiritual Guidance",
  description: "Experience transformative tarot readings with DD. Live interactive sessions and comprehensive written readings to unlock your spiritual path and inner wisdom. Awaken your soul today.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "600"],
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${playfair.variable} ${montserrat.variable}`}>
      <body>{children}</body>
    </html>
  );
}
