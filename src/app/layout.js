import { Inter } from "next/font/google";
import "./globals.css";
import TooSmall from "@/components/TooSmall";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "GCS Gamaforce",
  description:
    "GCS Gamaforce is a web application for monitoring and controlling drone missions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TooSmall />
        <div className="min-[640px]:flex flex-col hidden">{children}</div>
      </body>
    </html>
  );
}
