import type { Metadata } from "next";
import { Mulish } from "next/font/google";
import "./globals.css";

const mulish = Mulish({
  variable: "--font-mulish",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Flex Dashboard",
  description: "Dashboard UI",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${mulish.variable} ${mulish.className} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
