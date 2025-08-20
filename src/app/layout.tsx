import type { Metadata } from "next";
// Using local/installed SF UI Display via CSS variables in global styles
import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/global.scss";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

// Deprecated font variables removed; use --font-sf from global styles

export const metadata: Metadata = {
  title: {
    default: "RAG",
    template: "%s | RAG",
  },
  description: "Modern Next.js 14 app with SCSS modules and TypeScript.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "RAG",
    description: "Modern Next.js 14 app with SCSS modules and TypeScript.",
    url: "https://example.com",
    siteName: "RAG",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RAG",
    description: "Modern Next.js 14 app with SCSS modules and TypeScript.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
