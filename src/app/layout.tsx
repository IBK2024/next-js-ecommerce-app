import "@/assets/styles/globals.css";
import Footer from "@/components/layouts/footer";
import Navbar from "@/components/layouts/navbar";
import { siteDescription } from "@/config/constants";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { type ReactNode, StrictMode } from "react";

// !Metadata
export const metadata: Metadata = {
  description: siteDescription,
  icons: [{ url: "/icons/favicon.ico", sizes: "48x48", type: "" }],
};

// !Google fonts
const montserrat = Montserrat({
  subsets: ["latin"],
});

// !Props
type Props = {
  children: ReactNode;
};

// !Root layout
export default function RootLayout({ children }: Readonly<Props>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className}`}>
        <StrictMode>
          <Navbar />
          {children}
          <Footer />
        </StrictMode>
      </body>
    </html>
  );
}
