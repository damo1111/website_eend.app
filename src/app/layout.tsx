import type { Metadata } from "next";
import { Syne, DM_Sans, DM_Mono } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-dm-sans",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["300", "400"],
  variable: "--font-dm-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://eend.app"),
  title: "eend — AI product studio",
  description:
    "An indie AI product studio. Three AI apps in private beta across travel, finance and trading.",
  openGraph: {
    title: "eend",
    description:
      "An indie AI product studio. Three AI apps in private beta across travel, finance and trading.",
    url: "https://eend.app",
    siteName: "eend",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "eend — AI product studio",
    description:
      "An indie AI product studio. Three AI apps in private beta across travel, finance and trading.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${dmSans.variable} ${dmMono.variable}`}
    >
      <body className="bg-page text-ink font-body antialiased">{children}</body>
    </html>
  );
}
