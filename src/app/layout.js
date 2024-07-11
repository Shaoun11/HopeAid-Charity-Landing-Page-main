import { Jost } from "next/font/google";
import "./globals.css";

const jost = Jost({ subsets: ["latin"] ,
  weight:["400","500","600"],
  
});

export const metadata = {
  title: "HopeAid Project",
  description: "Generated by DevGenius Technologies Ltd © 2024",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jost.className}>{children}</body>
    </html>
  );
}
