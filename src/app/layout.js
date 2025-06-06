import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
  display: "swap",
})

export const metadata = {
  title: "Cyber - Online Gadget Store",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} overflow-x-hidden antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
