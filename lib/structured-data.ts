import { siteConfig } from "@/lib/metadata";

type JsonLd = Record<string, unknown>;

export function getOrganizationSchema(): JsonLd {
  return {
    "@type": "ResearchOrganization",
    "@id": `${siteConfig.url}/#organization`,
    name: "Neothink Institute",
    url: siteConfig.url,
    logo: {
      "@type": "ImageObject",
      url: `${siteConfig.url}/images/logo.png`,
      width: 512,
      height: 512,
    },
    foundingDate: "1976",
    description:
      "A public research organization dedicated to the study of conscious civilization, integrated thinking, and the structural conditions for human flourishing. Founded by Mark Hamilton.",
    areaServed: "Worldwide",
    founder: {
      "@type": "Person",
      "@id": `${siteConfig.url}/#founder`,
      name: "Mark Hamilton",
    },
    knowsAbout: [
      "Consciousness studies",
      "Political philosophy",
      "Integrated thinking",
      "Civilizational theory",
      "Non-aggression principle",
      "Human flourishing",
      "Personal development",
      "AI alignment",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "General Inquiry",
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
  return {
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: siteConfig.name,
    publisher: {
      "@id": `${siteConfig.url}/#organization`,
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
    affiliation: [
      { "@id": `${siteConfig.url}/#organization` },
      { "@id": `${siteConfig.url}/#society` },
    ],
    sameAs: ["https://www.wikidata.org/wiki/Q6042981"],
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
          "Author of the Neothink Manuscripts — a multi-decade body of work spanning psychology, economics, political theory, and civilizational design.",
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
    "@id": `${siteConfig.url}/#webpage`,
    url: siteConfig.url,
    name: "Neothink Institute | What Comes Next for Civilization",
    description: siteConfig.description,
    datePublished: "2024-05-02",
    dateModified: new Date().toISOString().split("T")[0],
    inLanguage: "en-US",
    isPartOf: {
      "@id": `${siteConfig.url}/#website`,
    },
    about: {
      "@id": `${siteConfig.url}/#organization`,
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

export function getFAQSchema(): JsonLd {
  return {
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the Neothink Institute?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The Neothink Institute is a public research organization founded by Mark Hamilton. It is dedicated to the study of conscious civilization, integrated thinking, and the structural conditions for human flourishing, integrating insights from consciousness studies, political philosophy, and civilizational theory into a unified intellectual framework.",
        },
      },
      {
        "@type": "Question",
        name: "What is the Unified Field of Conscious Civilization?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The Unified Field of Conscious Civilization is a theoretical framework that integrates findings from consciousness studies, political philosophy, and systems theory. It identifies structural patterns across civilizations to explain recurring cycles of progress and collapse, proposing conditions under which sustained human advancement becomes possible.",
        },
      },
      {
        "@type": "Question",
        name: "What is Neovia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Neovia is a proposed intentional community and charter city designed around the non-aggression principle. It serves as a practical demonstration of the Neothink Institute's civilizational framework, applying constitutional protections modeled on individual sovereignty and voluntary association.",
        },
      },
      {
        "@type": "Question",
        name: "What is the Prime Law?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The Prime Law is a proposed constitutional framework grounded in the non-aggression principle. It defines a single legal constraint — the prohibition of initiatory force, threat of force, or fraud — as the foundational condition for a free and flourishing civilization.",
        },
      },
      {
        "@type": "Question",
        name: "What is Neothink?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Neothink is a cognitive framework and mentality for integrated thinking created by Mark Hamilton. It is the operating system of the uncovered mind — the capacity to integrate across domains, see cause and effect with precision, detect contradictions, build concepts into larger concepts, and create new knowledge that advances human life.",
        },
      },
      {
        "@type": "Question",
        name: "What is The Way?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The Way is a personal development path and self-awareness practice outlined by the Neothink Institute. It provides a structured approach for individuals to identify and overcome internalized patterns of stagnation, building toward sustained creative output and psychological integration.",
        },
      },
      {
        "@type": "Question",
        name: "Who is Mark Hamilton?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Mark Hamilton is the author of the Neothink Manuscripts, creator of the Neothink Mentality, and founder of both the Neothink Institute (a public research organization) and the Neothink Society (a private education organization). His work spans five decades of research into consciousness, economics, political theory, and civilizational design.",
        },
      },
      {
        "@type": "Question",
        name: "How does AI relate to the Neothink framework?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The Neothink Institute views artificial intelligence through the lens of civilizational risk and human consciousness. Its framework addresses AI alignment by arguing that the structural conditions for beneficial AI development require the same foundational protections — individual sovereignty and the non-aggression principle — that underpin a flourishing human civilization.",
        },
      },
    ],
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
      "A cognitive framework and mentality for integrated thinking created by Mark Hamilton. It is the operating system of the uncovered mind — the capacity to integrate across domains, see cause and effect with precision, and create new knowledge that advances human life.",
    url: `${siteConfig.url}/neothink`,
    inLanguage: "en",
  };
}

export function getStructuredDataGraph(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@graph": [
      getOrganizationSchema(),
      getNeothinkSocietySchema(),
      getWebSiteSchema(),
      getFounderSchema(),
      getWebPageSchema(),
      getFAQSchema(),
      getUnleashedBookSchema(),
      getPrimeLawSchema(),
      getNeothinkSystemSchema(),
    ],
  };
}

export function getAllStructuredData(): JsonLd[] {
  return [
    getOrganizationSchema(),
    getWebSiteSchema(),
    getFounderSchema(),
    getWebPageSchema(),
    getFAQSchema(),
    getUnleashedBookSchema(),
    getPrimeLawSchema(),
    getNeothinkSystemSchema(),
  ];
}
