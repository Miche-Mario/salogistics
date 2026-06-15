import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { CountryProvider } from "@/contexts/CountryContext";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "SA-Errandlogistics — Marketplace West Africa",
  description:
    "Shop and sell across Nigeria, Ghana, and Benin Republic. Direct messaging, flexible delivery — payments handled between you and the seller.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className={poppins.className}>
        <CountryProvider>{children}</CountryProvider>
      </body>
    </html>
  );
}
