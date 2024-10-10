import type { Metadata } from "next";
import "./globals.css";
import { Layout } from "@/types/Layout";
import { geistMono, geistSans } from "./fonts";

export const metadata: Metadata = {
  title: "Solid React",
  description: "Solid principles in ReaactJS",
};

function RootLayout({ children }: Layout) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

export default RootLayout;
