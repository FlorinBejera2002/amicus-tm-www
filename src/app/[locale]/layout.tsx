import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Nav from "./components/nav";
import Footer from "./components/footer";
// css
import "./css/theme.css";
import "./css/theme-shop.css";
import "./css/theme-blog.css";
import "./css/skin-creative-agency-2.css";
import "./css/simple-line-icons.min.css";
import "./css/owl.theme.default.min.css";
import "./css/owl.carousel.min.css";
import "./css/magnific-popup.min.css";
import "./css/demo-creative-agency-2.css";
import "./css/custom.css";
import "./css/bootstrap.min.css";
import "./css/animate.compat.css";
import "./globals.css"


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children, params: { locale } }: any) {
  return (
    <html lang={locale}>
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
