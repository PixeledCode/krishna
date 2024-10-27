import type { Metadata } from "next";
import { Karma, Lato, Nunito } from "next/font/google";
import "./globals.css";

const karma = Karma({
  subsets: ["latin"],
  display: "swap",
  weight: ["700"],
  variable: "--font-display",
});

const lato = Lato({
  subsets: ["latin"],
  display: "swap",
  weight: ["700"],
  variable: "--font-lato",
});

const nunito = Nunito({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Krishna Sukumaran",
  description: "Krishna Sukumaran's personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${karma.variable} ${lato.variable} ${nunito.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
