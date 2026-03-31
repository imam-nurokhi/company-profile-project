import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0A0F1E",
};

export const metadata: Metadata = {
  title: {
    default: "bisadibicarakan.com — Enterprise Technology Solutions",
    template: "%s | bisadibicarakan.com",
  },
  description:
    "bisadibicarakan.com delivers enterprise-grade web applications, ERP solutions, and digital transformation services. Trusted by 30+ clients with 50+ projects delivered.",
  keywords: [
    "enterprise software development",
    "web application development",
    "ERP solutions",
    "system architecture",
    "UI/UX design",
    "digital transformation",
    "B2B technology",
    "Next.js development",
    "React development",
    "TypeScript",
  ],
  authors: [{ name: "bisadibicarakan.com" }],
  creator: "bisadibicarakan.com",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nexus.tech",
    siteName: "bisadibicarakan.com",
    title: "bisadibicarakan.com — Enterprise Technology Solutions",
    description:
      "Architecting scalable digital ecosystems for forward-thinking enterprises.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "bisadibicarakan.com",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "bisadibicarakan.com — Enterprise Technology Solutions",
    description:
      "Architecting scalable digital ecosystems for forward-thinking enterprises.",
    images: ["/og-image.png"],
    creator: "@nexustech",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className="min-h-screen antialiased"
        style={{ backgroundColor: "#0A0F1E", color: "#F1F5F9" }}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
