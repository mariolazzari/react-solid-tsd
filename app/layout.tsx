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
        <div className="p-8 flex flex-col gap-4 items-center justify-center">
          {children}
        </div>
      </body>
    </html>
  );
}

export default RootLayout;
