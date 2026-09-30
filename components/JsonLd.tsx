import { GITHUB_URL, LINKEDIN_URL, SITE_URL, profile } from "@/data/portfolio";
import { isConfigured } from "@/lib/utils";

/** JSON-LD "Person" schema for search engines. */
export function JsonLd() {
  const sameAs = [LINKEDIN_URL, GITHUB_URL].filter(isConfigured);
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.title,
    url: SITE_URL,
    email: `mailto:${profile.email}`,
    telephone: profile.phoneHref,
    address: { "@type": "PostalAddress", addressLocality: "Mumbai", addressCountry: "IN" },
    knowsAbout: ["Quality Assurance", "Test Automation", "AI-augmented testing", "LLM validation", "Model Context Protocol"],
    sameAs,
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
