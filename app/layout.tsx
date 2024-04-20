import type { Metadata } from "next";
import { Karla } from "next/font/google";
import "./globals.css";
import { Navbar } from "./Components/Navbar";
import NextTopLoader from 'nextjs-toploader';
import Footer from "./Components/Footer";
import HorizontalCardScroller from "./Components/HorizontalScroller";
import Countries from "./Components/Countries";


const inter = Karla({weight:"400",subsets:["latin"]})

export const metadata: Metadata = {
  title: "SheShare",
  description: "Vacation Rooms for Rentals",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} w-screen overflow-x-hidden text-base`}>

      <NextTopLoader  color="#F32C49"/>
        <Navbar />
        {children}
       
        </body>
        

    </html>
  );
}
