import { useEffect } from "react";

interface SEOHeadProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  noIndex?: boolean;
}

const SITE_NAME = "Pomeranian-Zucht Anne & Georg";
const DEFAULT_OG_IMAGE =
  "https://storage.googleapis.com/gpt-engineer-file-uploads/o51KER1Flcb7QPp78KnVB7I2NI32/social-images/social-1771346648019-Webclip_256x256.webp";

const SEOHead = ({ title, description, canonical, ogImage, noIndex = false }: SEOHeadProps) => {
  useEffect(() => {
    // ── Title ──────────────────────────────────────────────────────────
    const fullTitle = title.includes(SITE_NAME)
      ? title
      : `${title} | ${SITE_NAME}`;
    document.title = fullTitle;

    const image = ogImage ?? DEFAULT_OG_IMAGE;
    const url = canonical ?? window.location.href;

    // ── Helper ─────────────────────────────────────────────────────────
    const setMeta = (selector: string, attrKey: string, attrValue: string, content: string) => {
      let el = document.querySelector(`meta[${attrKey}="${attrValue}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attrKey, attrValue);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
      return el;
    };

    const setLink = (rel: string, href: string) => {
      let el = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
      if (!el) {
        el = document.createElement("link");
        el.setAttribute("rel", rel);
        document.head.appendChild(el);
      }
      el.setAttribute("href", href);
      return el;
    };

    // ── Standard meta ──────────────────────────────────────────────────
    setMeta("", "name", "description", description);
    setMeta("", "name", "robots", noIndex ? "noindex, nofollow" : "index, follow");

    // ── Open Graph ─────────────────────────────────────────────────────
    setMeta("", "property", "og:title", fullTitle);
    setMeta("", "property", "og:description", description);
    setMeta("", "property", "og:type", "website");
    setMeta("", "property", "og:url", url);
    setMeta("", "property", "og:image", image);
    setMeta("", "property", "og:locale", "de_DE");
    setMeta("", "property", "og:site_name", SITE_NAME);

    // ── Twitter / X ────────────────────────────────────────────────────
    setMeta("", "name", "twitter:card", "summary_large_image");
    setMeta("", "name", "twitter:title", fullTitle);
    setMeta("", "name", "twitter:description", description);
    setMeta("", "name", "twitter:image", image);

    // ── Canonical ─────────────────────────────────────────────────────
    if (canonical) {
      setLink("canonical", canonical);
    }

    // ── JSON-LD structured data ────────────────────────────────────────
    const existingJsonLd = document.getElementById("seo-jsonld");
    if (existingJsonLd) existingJsonLd.remove();

    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: fullTitle,
      description,
      url,
      inLanguage: "de-DE",
      isPartOf: {
        "@type": "WebSite",
        name: SITE_NAME,
        url: "https://www.pomeranianzucht-sachsen-anhalt.de/",
        publisher: {
          "@type": "Organization",
          name: SITE_NAME,
          url: "https://www.pomeranianzucht-sachsen-anhalt.de/",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Marienroda 4",
            addressLocality: "Finneland",
            postalCode: "06647",
            addressCountry: "DE",
          },
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+49-34465-690366",
            contactType: "customer service",
            availableLanguage: "German",
          },
        },
      },
    };

    const script = document.createElement("script");
    script.id = "seo-jsonld";
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(jsonLd);
    document.head.appendChild(script);

    return () => {
      const s = document.getElementById("seo-jsonld");
      if (s) s.remove();
    };
  }, [title, description, canonical, ogImage, noIndex]);

  return null;
};

export default SEOHead;
