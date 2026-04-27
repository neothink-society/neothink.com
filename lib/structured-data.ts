import { getFooterNavigationItemListSchema } from "@/lib/footer-navigation";
import { siteConfig } from "@/lib/metadata";
import { schemaIds } from "@/lib/schema-ids";
import { MARK_HAMILTON_PORTRAIT_URL } from "@/lib/wordpress-images";

/**
 * Site-wide JSON-LD graph (root layout). Per-route WebPage and BreadcrumbList live in route `page.tsx` files.
 * We do not emit FAQPage here: those Q&As are not present as visible FAQ content on the homepage, and
 * Google structured-data guidelines require marked-up content to be visible on the page.
 */

type JsonLd = Record<string, unknown>;

export function getOrganizationSchema(): JsonLd {
  return {
    "@type": "ResearchOrganization",
    "@id": `${siteConfig.url}/#organization`,
    name: "The Neothink Institute",
    alternateName: "Neothink Institute",
    url: siteConfig.url,
    logo: {
      "@type": "ImageObject",
      url: `${siteConfig.url}/images/logo.png`,
      width: 512,
      height: 512,
    },
    foundingDate: "1976",
    description:
      "The Neothink Institute is an independent research institution and the public institutional home for the Neothink body of work. Its research spans consciousness, economics, philosophy, business, governance, and civilization design, including the Unified Field of Conscious Civilization, Unleashed, and Neovia.",
    slogan:
      "Restoring man to his nature and building the civilization that comes after.",
    areaServed: "Worldwide",
    founder: {
      "@type": "Person",
      "@id": `${siteConfig.url}/#founder`,
      name: "Mark Hamilton",
    },
    knowsAbout: [
      "Unified Field of Conscious Civilization",
      "Neothink",
      "Neovia",
      "Unleashed",
      "Prime Law",
      "consciousness",
      "economics",
      "philosophy",
      "business",
      "governance",
      "civilization design",
      "integrated thinking",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "General Inquiry",
      email: "support@neothink.com",
      url: `${siteConfig.url}/contact`,
    },
    sameAs: [
      "https://www.facebook.com/people/Neothink-Institute/61585948748781/",
      "https://x.com/NeothinkHQ",
      "https://www.instagram.com/NeothinkInstitute",
      "https://www.youtube.com/@NeothinkInstitute",
      "https://www.tiktok.com/@neothinkinstitute",
      "https://www.linkedin.com/company/neothink-institute",
    ],
  };
}

export function getNeothinkSocietySchema(): JsonLd {
  return {
    "@type": "EducationalOrganization",
    "@id": `${siteConfig.url}/#society`,
    name: "Neothink Society",
    url: siteConfig.url,
    description:
      "A private education organization providing members with access to the Neothink system of integrated thinking, personal development, and civilizational understanding. Founded by Mark Hamilton.",
    founder: {
      "@type": "Person",
      "@id": `${siteConfig.url}/#founder`,
      name: "Mark Hamilton",
    },
    parentOrganization: {
      "@id": `${siteConfig.url}/#organization`,
    },
    areaServed: "Worldwide",
  };
}

export function getWebSiteSchema(): JsonLd {
  const year = new Date().getFullYear();
  return {
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: siteConfig.name,
    description: siteConfig.description,
    inLanguage: "en-US",
    copyrightYear: year,
    copyrightHolder: {
      "@id": schemaIds.organization,
    },
    publisher: {
      "@id": schemaIds.organization,
    },
    /** Primary internal destinations (matches footer `ItemList` @ `footerNavigation`) */
    hasPart: {
      "@id": schemaIds.footerNavigation,
    },
  };
}

export function getFounderSchema(): JsonLd {
  return {
    "@type": "Person",
    "@id": `${siteConfig.url}/#founder`,
    name: "Mark Hamilton",
    jobTitle: "Founder",
    description:
      "Author of the Neothink Manuscripts. Creator of the Neothink Mentality. Founder of the Neothink Institute (a public research organization) and the Neothink Society (a private education organization). His work spans five decades of research into consciousness, economics, political theory, and civilizational design.",
    url: `${siteConfig.url}/mark-hamilton`,
    image: MARK_HAMILTON_PORTRAIT_URL,
    affiliation: [{ "@id": `${siteConfig.url}/#organization` }],
    knowsAbout: [
      "Civilizational theory",
      "Consciousness studies",
      "Integrated thinking",
      "Political philosophy",
      "Non-aggression principle",
      "Human flourishing",
      "Economics",
      "Civilizational design",
    ],
    hasOccupation: [
      {
        "@type": "Occupation",
        name: "Author",
        description:
          "Author of the Neothink Manuscripts, a multi-decade body of work spanning psychology, economics, political theory, and civilizational design.",
      },
      {
        "@type": "Occupation",
        name: "Researcher",
        description:
          "Independent researcher in consciousness studies and civilizational theory.",
      },
    ],
  };
}

export function getWebPageSchema(): JsonLd {
  return {
    "@type": "WebPage",
    "@id": schemaIds.homeWebPage,
    url: siteConfig.url,
    name: "Neothink Institute | What Comes Next for Civilization",
    description: siteConfig.description,
    datePublished: "2024-05-02",
    dateModified: new Date().toISOString().split("T")[0],
    inLanguage: "en-US",
    isPartOf: {
      "@id": schemaIds.website,
    },
    publisher: {
      "@id": schemaIds.organization,
    },
    about: {
      "@id": schemaIds.organization,
    },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: `${siteConfig.url}${siteConfig.ogImage}`,
    },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: [
        "#hero-heading",
        "#statement-heading",
        "#unified-field-heading",
      ],
    },
  };
}

/**
 * Unleashed audio/video series, referenced from `/podcast` WebPage `about`.
 */
export function getPodcastSeriesSchema(): JsonLd {
  return {
    "@type": "PodcastSeries",
    "@id": schemaIds.podcastSeries,
    name: "Unleashed, The Podcast",
    url: `${siteConfig.url}/podcast`,
    inLanguage: "en-US",
    publisher: { "@id": schemaIds.organization },
    author: [{ "@id": schemaIds.founder }, { "@id": schemaIds.wallaceHamilton }],
  };
}

export function getUnleashedBookSchema(): JsonLd {
  return {
    "@type": "Book",
    "@id": `${siteConfig.url}/#unleashed`,
    name: "Unleashed: The Promethean Promise",
    alternateName: "Unleashed",
    author: {
      "@id": `${siteConfig.url}/#founder`,
    },
    publisher: {
      "@id": `${siteConfig.url}/#organization`,
    },
    datePublished: "2025",
    genre: ["Civilizational theory", "Political philosophy", "Consciousness studies"],
    description:
      "The complete synthesis of the Unified Field of Conscious Civilization. The first work identifying the single structural pattern governing every empire, every collapse, and every human destiny in recorded history.",
    url: `${siteConfig.url}/unleashed`,
    inLanguage: "en",
  };
}

export function getPrimeLawSchema(): JsonLd {
  return {
    "@type": "CreativeWork",
    "@id": `${siteConfig.url}/#prime-law`,
    name: "The Prime Law",
    author: {
      "@id": `${siteConfig.url}/#founder`,
    },
    publisher: {
      "@id": `${siteConfig.url}/#organization`,
    },
    genre: ["Political philosophy", "Constitutional theory", "Non-aggression principle"],
    description:
      "A proposed constitutional framework grounded in the non-aggression principle, defining the prohibition of initiatory force, threat of force, or fraud as the foundational condition for a free and flourishing civilization.",
    url: `${siteConfig.url}/prime-law`,
    inLanguage: "en",
  };
}

export function getNeothinkSystemSchema(): JsonLd {
  return {
    "@type": "CreativeWork",
    "@id": `${siteConfig.url}/#neothink-system`,
    name: "Neothink Mentality",
    alternateName: "Neothink",
    creator: {
      "@id": `${siteConfig.url}/#founder`,
    },
    publisher: {
      "@id": `${siteConfig.url}/#organization`,
    },
    genre: [
      "Cognitive framework",
      "Integrated thinking",
      "Personal development",
      "Systems thinking",
    ],
    description:
      "A cognitive framework and mentality for integrated thinking created by Mark Hamilton. It is the operating system of the uncovered mind. The capacity to integrate across domains, see cause and effect with precision, and create new knowledge that advances human life.",
    url: `${siteConfig.url}/neothink`,
    inLanguage: "en",
  };
}

export function getWallaceHamiltonSchema(): JsonLd {
  return {
    "@type": "Person",
    "@id": `${siteConfig.url}/#wallace-hamilton`,
    name: "Wallace Hamilton",
    jobTitle: "CEO, Immortalis",
    description:
      "CEO of Immortalis, founder of The Way, and co-host of the Unleashed podcast. Research director and the bridge between the Neothink framework and the individual.",
    url: `${siteConfig.url}/wallace-hamilton`,
    affiliation: [{ "@id": `${siteConfig.url}/#organization` }],
    knowsAbout: [
      "The Way",
      "Personal development",
      "Consciousness studies",
      "AI and civilization",
      "Community building",
    ],
    sameAs: [],
  };
}

export function getStructuredDataGraph(): JsonLd {
  /**
   * NeothinkSociety schema is intentionally NOT included on neothink.com.
   * The Institute is the public-facing research institution; NTS is medium-
   * association per strategic doctrine (visible selectively). When NTS gets
   * its own deploy at neothinksociety.com, that domain will publish its own
   * Organization schema. The function `getNeothinkSocietySchema()` remains
   * defined for that future use.
   */
  return {
    "@context": "https://schema.org",
    "@graph": [
      getOrganizationSchema(),
      getFooterNavigationItemListSchema(),
      getWebSiteSchema(),
      getFounderSchema(),
      getWebPageSchema(),
      getWallaceHamiltonSchema(),
      getPodcastSeriesSchema(),
      getUnleashedBookSchema(),
      getPrimeLawSchema(),
      getNeothinkSystemSchema(),
    ],
  };
}
