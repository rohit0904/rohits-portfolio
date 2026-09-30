import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { SITE_URL, profile } from "@/data/portfolio";
import { BackToTop } from "@/components/BackToTop";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { Navbar } from "@/components/Navbar";
import { ScrollProgress } from "@/components/ScrollProgress";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const display = Space_Grotesk({ subsets: ["latin"], variable: "--font-display", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: `${profile.name} | ${profile.rotatingTitles[0]} & ${profile.rotatingTitles[1]}`, template: `%s | ${profile.name}` },
  description: profile.siteDescription,
  applicationName: `${profile.name} Portfolio`,
  authors: [{ name: profile.name }],
  keywords: ["QA Engineer", "QA Lead", "Founding QA", "AI testing", "MCP", "LLM validation", "Test automation", "Mumbai"],
  openGraph: { type: "website", siteName: profile.name, locale: "en_IN" },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#060913" },
    { media: "(prefers-color-scheme: light)", color: "#f6f8fc" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${display.variable}`}>
      <body className="min-h-dvh bg-bg font-sans text-fg">
        <ThemeProvider>
          <a
            href="#main"
            className="gradient-bg fixed left-4 top-4 z-[100] -translate-y-24 rounded-xl px-4 py-2 font-semibold text-white focus:translate-y-0"
          >
            Skip to content
          </a>
          <ScrollProgress />
          <Navbar />
          <main id="main">{children}</main>
          <Footer />
          <BackToTop />
        </ThemeProvider>
        <JsonLd />
      </body>
    </html>
  );
}
