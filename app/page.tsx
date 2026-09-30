import type { Metadata } from "next";
import { AICapabilities } from "@/components/AICapabilities";
import { CareerSnapshot } from "@/components/CareerSnapshot";
import { CTABanner } from "@/components/CTABanner";
import { CurrentRole } from "@/components/CurrentRole";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { Hero } from "@/components/Hero";
import { seo } from "@/data/portfolio";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...buildMetadata({ ...seo.home, path: "/" }),
  title: { absolute: seo.home.title },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <CurrentRole />
      <CareerSnapshot />
      <AICapabilities />
      <FeaturedProjects />
      <CTABanner />
    </>
  );
}
