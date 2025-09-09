import siteMetadata from "@/data/siteMetadata";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionContainer from "@/components/SectionContainer";
import { ThemeProvider } from "next-themes";
import "./globals.css";

export const metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    default: siteMetadata.title,
    template: `%s | ${siteMetadata.title}`,
  },
  description: siteMetadata.description,
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: "./",
    siteName: siteMetadata.title,
    images: [siteMetadata.socialBanner],
    locale: "zh_CN",
    type: "website",
  },
  alternates: {
    canonical: "./",
    types: {
      "application/rss+xml": `${siteMetadata.siteUrl}/feed.xml`,
    },
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
  twitter: {
    title: siteMetadata.title,
    card: "summary_large_image",
    images: [siteMetadata.socialBanner],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang={siteMetadata.locale} suppressHydrationWarning>
      <body className="bg-white text-black antialiased dark:bg-gray-950 dark:text-white">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <SectionContainer>
            <Header />
            <main className="mb-auto">{children}</main>
          </SectionContainer>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
