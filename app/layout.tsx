import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sylvain Thomas",
  description: "Freelance en développement web",
  keywords: ["développement web", "Wordpress", "frontend", "backend", "React", "Next.js"],
  authors: [{ name: "Sylvain Thomas" }],
  openGraph: {
    title: "Sylvain Thomas - Développement Web",
    description: "Sylvain Thomas, développement web - Wordpress, React",
    url: "https://www.sylvainthomas.fr",
    siteName: "Sylvain Thomas - Développement web",
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
    title: "Sylvain Thomas - Développement Web",
    description: "Portfolio et blog de Sylvain Thomas, freelance en développement web",
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
      </body>
    </html>
  );
}
