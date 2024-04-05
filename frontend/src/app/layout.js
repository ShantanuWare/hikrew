import { Lobster } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";

const lobster_init = Lobster({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-lobster",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${lobster_init.variable} flex flex-col min-h-screen font-lobster`}
      >
        <div className="sticky top-0 z-10 shadow-md  ">
          <Navbar />
        </div>
        <section className="h-full bg-white flex-grow">{children}</section>
        <Footer />
      </body>
    </html>
  );
}