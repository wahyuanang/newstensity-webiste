import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Newstensity",
  description: "A fresh Next.js landing page, ready for your ideas.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
