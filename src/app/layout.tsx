import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Satheesh Baabu M | Full Stack Developer",
  description:
    "Full Stack Developer specializing in Next.js, TypeScript, React, Node.js and MongoDB. Explore my projects, experience and technical skills.",
  keywords: [
    "Satheesh Baabu M",
    "Full Stack Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "React Developer",
    "Node.js Developer",
    "MongoDB",
    "Sivakasi Developer",
    "Web Developer Portfolio",
  ],
  authors: [
    {
      name: "Satheesh Baabu M",
      url: "https://satheeshbaabum-portfolio.netlify.app",
    },
  ],
  creator: "Satheesh Baabu M",
  metadataBase: new URL("https://satheeshbaabum-portfolio.netlify.app"),
  openGraph: {
    title: "Satheesh Baabu M | Full Stack Developer",
    description:
      "Full Stack Developer specializing in Next.js, TypeScript, React, Node.js and MongoDB. Explore my production projects, experience, and technical skills.",
    url: "https://satheeshbaabum-portfolio.netlify.app",
    siteName: "Satheesh Baabu M Portfolio",
    locale: "en_US",
    images: [
      {
        url: "/sb_logo.png",
        width: 1200,
        height: 630,
        alt: "Satheesh Baabu M - Full Stack Developer",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Satheesh Baabu M | Full Stack Developer",
    description:
      "Full Stack Developer specializing in Next.js, TSX, JSX, React, Express.js, Node.js and MongoDB.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#07111F",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className="bg-[#07111F] text-slate-100 antialiased selection:bg-blue-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
