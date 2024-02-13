import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  weight: ["400", "500"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tareeq",
  description:
    "Our powerful app builder will help you build your desired app in minutes without coding knowledge and once your app is ready, you can publish it on Google Play and App Store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-auto snap-y snap-mandatory">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
