import type React from "react";
import type { Metadata, Viewport } from "next";

const tagline = "committing crimes against large language models since 2025";

export const metadata: Metadata = {
  metadataBase: new URL("https://trashpanda.land"),
  title: "trashpanda",
  description: tagline,
  openGraph: {
    type: "website",
    url: "/",
    title: "trashpanda",
    description: tagline,
    images: [
      {
        url: "/og.jpg",
        type: "image/jpeg",
        width: 1200,
        height: 630,
        alt: "A wanted poster for the trashpanda raccoon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    description: tagline,
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
    other: [
      {
        rel: "manifest",
        url: "/site.webmanifest",
      },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: "#070606",
  colorScheme: "dark",
};

// The mugshot's preload (imagesrcset, imagesizes, fetchpriority high) is emitted by React from the page's <img>.

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" as="font" type="font/woff2" href="/fonts/inter-var.woff2" crossOrigin="" />
        <link rel="preload" as="font" type="font/woff2" href="/fonts/courier-prime-400.woff2" crossOrigin="" />
        <link rel="preload" as="font" type="font/woff2" href="/fonts/courier-prime-700.woff2" crossOrigin="" />
      </head>
      <body>{children}</body>
    </html>
  );
}
