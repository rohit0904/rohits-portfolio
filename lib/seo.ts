import type { Metadata } from "next";
import { profile } from "@/data/portfolio";

interface MetaInput {
  title: string;
  description: string;
  path: string;
}

/** Shared per-page metadata: title, description, canonical, Open Graph and Twitter cards. */
export function buildMetadata({ title, description, path }: MetaInput): Metadata {
  const fullTitle = `${title} | ${profile.name}`;
  const images = [{ url: "/opengraph-image", width: 1200, height: 630, alt: `${profile.name} – ${profile.rotatingTitles[0]}` }];
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title: fullTitle, description, url: path, siteName: profile.name, type: "website", locale: "en_IN", images },
    twitter: { card: "summary_large_image", title: fullTitle, description, images: ["/opengraph-image"] },
  };
}
