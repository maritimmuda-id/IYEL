// ** Import CSS
import "./globals.css";

import { Inter, Poppins } from "next/font/google";

const poppins = Poppins({
  weight: "500",
  subsets: ["devanagari"],
});

export const metadata = {
  title: "IYEL",
  description: "Generated by create next app",
};

export const dynamic = "force-dynamic";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={poppins.className}>{children} </body>
    </html>
  );
}
