import type { ReactNode } from "react";
import "./globals.css";

export const metadata = {
  title: "DND Digital Printing & Advertising",
  description: "DND Digital Printing & Advertising landing page.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="id">
      <body className="bg-white text-[#231F20] antialiased">
        <div className="min-h-screen pb-20 md:pb-0">{children}</div>
      </body>
    </html>
  );
}
