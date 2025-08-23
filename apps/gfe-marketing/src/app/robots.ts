import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/m09-pricing-section-tiers",
        "/m10-statistics-section",
        "/m11-newsletter-section",
        "/m12-contact-section",
        "/m13-team-section",
        "/m14-404-section",
        "/m15-faq-section",
        "/m16-testimonials-section",
        "/m17-marquee-section",
        "/m18-cookie-consent",
        "/m19-footer-section",
      ],
    },
    sitemap: `${process.env.NEXT_PUBLIC_URL}/sitemap.xml`,
  };
}
