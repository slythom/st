import type { Metadata } from "next";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "Sylvain Thomas - Développeur web",
  description: "Développeur web en freelance : Wordpress, React...",
  metadataBase: new URL("https://www.sylvainthomas.fr"),
  alternates: {
    canonical: "/",
  },
  keywords: [
    "développeur web",
    "développement web",
    "Wordpress",
    "React",
    "frontend",
    "backend",
    "Next.js",
  ],
  authors: [{ name: "Sylvain Thomas" }],
  openGraph: {
    title: "Sylvain Thomas - Développeur Web",
    description: "Sylvain Thomas, développeur web : Wordpress, React",
    url: "https://www.sylvainthomas.fr",
    siteName: "Sylvain Thomas - Développeur web",
    images: [
      {
        url: "https://www.sylvainthomas.fr/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sylvain Thomas - Développeur Web",
    description:
      "Portfolio et blog de Sylvain Thomas, développeur web (Wordpress, React...)",
    images: ["https://www.sylvainthomas.fr/twitter-image.jpg"],
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
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`antialiased`}>
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
