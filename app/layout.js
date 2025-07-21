import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/navbar/page"
import Footer from "@/app/footer/page";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Mohit Yadav | Full Stack  Web Developer",
  description: "Portfolio of Mohit Yadav a full stack web developer skilled in React, Next.js, Node.js, and MongoDB. Explore my projects and experience",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
