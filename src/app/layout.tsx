import Navbar from "@/features/navbar";
import "@/styles/globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { type ReactNode, StrictMode } from "react";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

// !Google Fonts
const montserrat = Montserrat({
  subsets: ["latin"],
});

// !Props
interface Props {
  children: ReactNode;
}

// !Root layout
export default function RootLayout({ children }: Readonly<Props>) {
  const navbarLinks = [{ name: "Tees", href: "/" }];
  return (
    <html lang="en">
      <body className={`${montserrat.className}`}>
        <StrictMode>
          <Navbar links={navbarLinks} />
          {children}
        </StrictMode>
      </body>
    </html>
  );
}
