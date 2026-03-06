# Neothink.com — Entity & Schema.org Map

**Date:** March 6, 2026
**Purpose:** Every entity on neothink.com, its schema.org type, relationships, and structured data.

---

## Schema.org Status (March 2026)

Before assigning types, here's what actually works:

**Google renders rich results for these types:**
Organization, Person, Article, Book, Event, BreadcrumbList, WebSite, ItemList, AggregateRating, Review

**Google does NOT render rich results for (but AI models read them):**
- `ResearchOrganization` — pending, but valid and readable by AI
- `EducationalOrganization` — supported but limited rendering
- `DefinedTerm` — pending, Google ignores it, AI models use it
- `DefinedTermSet` — pending, same as above
- `FAQPage` — restricted to government/health sites since August 2023
- `Course` — rich results dropped June 2025
- `PodcastSeries` / `PodcastEpisode` — pending

**Strategy:** Use the correct schema type for each entity regardless of whether Google renders it. Google rendering = bonus. The primary AEO value is that AI models (ChatGPT, Gemini, Perplexity, Claude) use structured data to understand entities and cite pages.

---

## People

### Mark Hamilton
**Schema:** `Person`
**Primary page:** `/about/mark-hamilton`
**Role:** Author, Creator of Neothink, Founder of Neothink Society, Founder of Immortalis

```json
{
  "@type": "Person",
  "name": "Mark Hamilton",
  "jobTitle": "Founder",
  "description": "Author, creator of the Neothink philosophy, and founder of the Neothink Society. Son of Dr. Frank R. Wallace.",
  "affiliation": [
    { "@type": "ResearchOrganization", "name": "Neothink Institute" },
    { "@type": "EducationalOrganization", "name": "Neothink Society" }
  ],
  "founder": [
    { "@type": "EducationalOrganization", "name": "Neothink Society" },
    { "@type": "Organization", "name": "Immortalis" }
  ],
  "sameAs": [],
  "knowsAbout": [
    "Neothink", "Neo-Tech", "Value Creation", "Integrated Thinking",
    "Self-Leadership", "Biological Immortality", "Neovia", "Immortalis"
  ],
  "hasOccupation": {
    "@type": "Occupation",
    "name": "Author and Philosopher"
  }
}
```

**Relationships:**
- `author` → 26 books
- `founder` → Neothink Society, Immortalis
- `affiliation` → Neothink Institute
- Son of Dr. Frank R. Wallace (intellectual and family lineage)
- Father of Wallace Hamilton

**Philosophical lineage:** Aristotle → Ayn Rand → Dr. Frank R. Wallace (Neo-Tech) → Mark Hamilton (Neothink)

---

### Dr. Frank R. Wallace
**Schema:** `Person`
**Primary page:** `/about/frank-r-wallace`
**Role:** Creator of Neo-Tech, intellectual origin of the entire philosophy

```json
{
  "@type": "Person",
  "name": "Dr. Frank R. Wallace",
  "description": "Creator of Neo-Tech — the philosophy of fully integrated honesty. The intellectual foundation upon which Mark Hamilton built Neothink.",
  "knowsAbout": ["Neo-Tech", "Fully Integrated Honesty", "Philosophy", "Neocheating"],
  "hasOccupation": {
    "@type": "Occupation",
    "name": "Author and Philosopher"
  }
}
```

**Relationships:**
- Creator of Neo-Tech
- Author of Neo-Tech books (The Neo-Tech Weapon, The Neo-Tech System)
- Father of Mark Hamilton
- Grandfather of Wallace Hamilton
- Built on philosophical lineage of Aristotle and Ayn Rand

---

### Wallace Hamilton
**Schema:** `Person`
**Primary page:** `/about/wallace-hamilton`
**Role:** Son of Mark Hamilton, grandson of Dr. Frank R. Wallace, next-generation leader

```json
{
  "@type": "Person",
  "name": "Wallace Hamilton",
  "description": "Son of Mark Hamilton and grandson of Dr. Frank R. Wallace. Next-generation leader and main driver behind modern Neothink operations. Co-author of Your Neothink Puzzle Pictures.",
  "knowsAbout": ["Neothink", "Neo-Tech", "Value Creation"],
  "hasOccupation": {
    "@type": "Occupation",
    "name": "Author and Organizational Leader"
  }
}
```

**Relationships:**
- Co-author → Your Neothink Puzzle Pictures (with Mark Hamilton)
- Son of Mark Hamilton
- Grandson of Dr. Frank R. Wallace
- Main driver behind the scenes of modern operations

---

## Organizations

### Neothink Institute
**Schema:** `ResearchOrganization`
**Primary page:** `/neothink-institute` (also represented on homepage `/`)
**Role:** The public-facing research organization. Researches, publishes, educates. The entity behind neothink.com.

```json
{
  "@type": "ResearchOrganization",
  "name": "Neothink Institute",
  "url": "https://neothink.com",
  "description": "Public research organization dedicated to the Neothink philosophy of value creation and human potential. Founded on the Neo-Tech principles of Dr. Frank R. Wallace and the Neothink philosophy of Mark Hamilton.",
  "founder": { "@type": "Person", "name": "Mark Hamilton" },
  "sameAs": [],
  "knowsAbout": ["Neothink", "Neo-Tech", "Value Creation", "Integrated Thinking"],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "url": "https://neothink.com/contact"
  }
}
```

**Distinct from Neothink Society:** The Institute is the public face. It researches, publishes, and shares knowledge. It's what you find at neothink.com. Anyone can access its content.

---

### Neothink Society
**Schema:** `EducationalOrganization`
**Primary page:** `/neothink-society`
**Role:** The private membership society. Application-based. Where members learn and grow.

```json
{
  "@type": "EducationalOrganization",
  "name": "Neothink Society",
  "description": "A private society of individuals dedicated to personal transformation, value creation, and the Neothink philosophy. Membership is by invitation and application.",
  "founder": { "@type": "Person", "name": "Mark Hamilton" },
  "memberOf": {
    "@type": "ProgramMembership",
    "name": "Neothink Society Membership",
    "programName": "Neothink Society"
  }
}
```

**Membership Levels:**
- Level 0: Invitation / The Awakening
- Level 1: Entry member / The Clearing
- Level 2: Active member / The Living
- Level 3: Advanced member / The Now

**Distinct from Neothink Institute:** The Society is the private membership body. You apply to join. It's where the personal transformation work happens.

---

### Immortalis
**Schema:** `Organization`
**Primary page:** `/immortalis`
**Role:** Active network state project replacing the Twelve Visions Party.

```json
{
  "@type": "Organization",
  "name": "Immortalis",
  "url": "https://joinimmortalis.com",
  "description": "A startup society, network union, and network state project. The successor to the Twelve Visions Party.",
  "founder": { "@type": "Person", "name": "Mark Hamilton" }
}
```

---

### Neovia
**Schema:** `Organization`
**Primary page:** `/neovia`
**Role:** Physical freedom zone project. Each location is a Neovia.

```json
{
  "@type": "Organization",
  "name": "Neovia",
  "url": "https://joinneovia.com",
  "description": "America's first biotech freedom city. A physical freedom zone project where each location is a Neovia.",
  "founder": { "@type": "Person", "name": "Mark Hamilton" }
}
```

---

## The Website Itself

### Neothink.com
**Schema:** `WebSite`

```json
{
  "@type": "WebSite",
  "name": "Neothink",
  "url": "https://neothink.com",
  "publisher": { "@type": "ResearchOrganization", "name": "Neothink Institute" }
}
```

---

## Philosophies / Concepts

### Neothink (the philosophy)
**Schema:** `DefinedTerm` + `Article`
**Primary page:** `/neothink`

No single schema.org type perfectly fits "a philosophy." Using dual schema:
- `DefinedTerm` — tells AI models this is a defined concept with a specific meaning
- `Article` — tells Google this is authoritative content (Google renders Article rich results)

```json
[
  {
    "@type": "DefinedTerm",
    "name": "Neothink",
    "description": "The philosophy and method of fully integrated honesty applied to every area of life. Created by Mark Hamilton, building on the Neo-Tech foundation of Dr. Frank R. Wallace.",
    "url": "https://neothink.com/neothink",
    "inDefinedTermSet": {
      "@type": "DefinedTermSet",
      "name": "The Neothink Philosophy",
      "url": "https://neothink.com/philosophy"
    }
  },
  {
    "@type": "Article",
    "headline": "What Is Neothink?",
    "author": { "@type": "Person", "name": "Mark Hamilton" },
    "publisher": { "@type": "ResearchOrganization", "name": "Neothink Institute" },
    "about": { "@type": "DefinedTerm", "name": "Neothink" },
    "mainEntityOfPage": "https://neothink.com/neothink"
  }
]
```

### Neo-Tech (the philosophy)
**Schema:** `DefinedTerm` + `Article`
**Primary page:** `/neo-tech`

Same dual pattern. Neo-Tech is the foundation; Neothink builds on it.

```json
{
  "@type": "DefinedTerm",
  "name": "Neo-Tech",
  "description": "Fully integrated honesty — the philosophical foundation created by Dr. Frank R. Wallace upon which Mark Hamilton built the Neothink philosophy.",
  "url": "https://neothink.com/neo-tech",
  "inDefinedTermSet": {
    "@type": "DefinedTermSet",
    "name": "The Neothink Philosophy",
    "url": "https://neothink.com/philosophy"
  }
}
```

---

## All Terms (DefinedTermSet)

The `/philosophy` page hosts the master `DefinedTermSet`. Every term page below is a `DefinedTerm` within this set, paired with an `Article` for Google.

### Term Categories

**Core Philosophy:** Neothink, Neo-Tech, Neothink Mentality, New Mentality, New Human, Mysticism

**Active Projects:** Immortalis, Neovia, The Prime Law, Neothink Clubhouses, Twelve Visions Party, Secret Society

**Book Frameworks:** Friday Night Essence, Ten-Second Miracle, Self-Leader, Value Creator, Integrated Thinking, Mini Days, Powerthinking, Following Mode, Power Approach, Division of Essence

**Civilization Concepts:** Anticivilization, Bicameral Mind / The 2,500-Year Mistake, Parasitical Elite Ruling Class, Civilization of the Universe, Unified Field of Conscious Civilization, Force-backed Hierarchy, Hierarchy, The New World

**Additional Concepts:** Neocheating, White-Collar Hoax, Golden Helmet, Wide Scope Thinking, Value Reflection, Value Producer, Value Destroyers / Usurpers, Downstream Focus, Geniuses of Society

**Membership Journey (Levels 0-3):** The Awakening, The Clearing, The Living, The Covering, The Ground, Return to the Ground, Seeing, The Now

### Term Page Schema Pattern

Every term page uses this pattern:

```json
[
  {
    "@type": "DefinedTerm",
    "name": "[Term Name]",
    "description": "[Clear, factual definition]",
    "url": "https://neothink.com/[slug]",
    "inDefinedTermSet": {
      "@type": "DefinedTermSet",
      "name": "The Neothink Philosophy",
      "url": "https://neothink.com/philosophy"
    },
    "termCode": "[slug]"
  },
  {
    "@type": "Article",
    "headline": "What Is [Term Name]?",
    "description": "[Meta description]",
    "author": { "@type": "Person", "name": "Mark Hamilton" },
    "publisher": { "@type": "ResearchOrganization", "name": "Neothink Institute" },
    "about": { "@type": "DefinedTerm", "name": "[Term Name]" },
    "datePublished": "[ISO date]",
    "dateModified": "[ISO date]",
    "mainEntityOfPage": "https://neothink.com/[slug]"
  }
]
```

---

## Books

**Schema:** Each book is `Book`. The catalog page uses `ItemList`.

26 books total. Full list:

| # | Title | Author | Series |
|---|-------|--------|--------|
| 1 | FOREVER: Neovia & Immortalis | Mark Hamilton | Featured |
| 2 | The Unified Field Of Conscious Civilization | Mark Hamilton | Featured |
| 3 | Unearthing History Burying War | Mark Hamilton | Featured |
| 4 | NEOVIA | Mark Hamilton | Featured |
| 5 | The Self-Leader Secret | Mark Hamilton | Core Library |
| 6 | The Neothink System | Mark Hamilton | Core Library |
| 7 | The Twelve Visions | Mark Hamilton | Core Library |
| 8 | The Neothink Insights | Mark Hamilton | Core Library |
| 9 | Our Next Evolution | Mark Hamilton | Core Library |
| 10 | Conceiving the Superpuzzle | Mark Hamilton | Superpuzzle Trilogy |
| 11 | Putting Together the Pieces | Mark Hamilton | Superpuzzle Trilogy |
| 12 | Beholding the Puzzle-Picture | Mark Hamilton | Superpuzzle Trilogy |
| 13 | What We All Want... | Mark Hamilton | "What We All" |
| 14 | What We All Pray For... | Mark Hamilton | "What We All" |
| 15 | What You Want | Mark Hamilton | "What We All" |
| 16 | What We All Long For... | Mark Hamilton | "What We All" |
| 17 | Your Neothink Portal | Mark Hamilton | "Your Neothink" |
| 18 | Your Neothink Mentality | Mark Hamilton | "Your Neothink" |
| 19 | Your Neothink Puzzle Pictures | Wallace & Mark Hamilton | "Your Neothink" |
| 20 | Your Neothink World | Mark Hamilton | "Your Neothink" |
| 21 | Forbidden Revelation | Mark Hamilton | Other |
| 22 | Mark Hamilton & Family & You | Mark Hamilton | Other |
| 23 | The Neo-Tech Weapon | Dr. Frank R. Wallace / Mark Hamilton | Neo-Tech Classics |
| 24 | The Neo-Tech System | Dr. Frank R. Wallace / Mark Hamilton | Neo-Tech Classics |
| 25 | The Kickstart Report | Mark Hamilton | Other |
| 26 | A Future Of Wealth Belongs To You | Mark Hamilton | Other |

Book schema example:

```json
{
  "@type": "Book",
  "name": "FOREVER",
  "alternateName": "Forever: Neovia & Immortalis",
  "author": { "@type": "Person", "name": "Mark Hamilton" },
  "publisher": { "@type": "ResearchOrganization", "name": "Neothink Institute" },
  "description": "Introduces the Neovia and Immortalis projects.",
  "about": [
    { "@type": "DefinedTerm", "name": "Neovia" },
    { "@type": "DefinedTerm", "name": "Immortalis" }
  ],
  "inLanguage": "en",
  "url": "https://neothink.com/books/forever"
}
```

---

## Entity Relationship Graph

```
Aristotle → Ayn Rand → Dr. Frank R. Wallace → Mark Hamilton
                              (philosophical lineage)

Dr. Frank R. Wallace ──created──→ Neo-Tech (philosophy)
        │
   father of
        │
        ▼
  Mark Hamilton ──created──→ Neothink (philosophy)
        │
        ├──founded──→ Neothink Society (private, EducationalOrganization)
        ├──affiliation──→ Neothink Institute (public, ResearchOrganization)
        ├──founded──→ Immortalis (network state, Organization)
        ├──founded──→ Neovia (freedom zones, Organization)
        ├──author──→ 26 books (Book)
        │
   father of
        │
        ▼
  Wallace Hamilton ──co-author──→ Your Neothink Puzzle Pictures
                   ──operates──→ Modern Neothink operations

  Neothink (philosophy)
        │
        ├──builds on──→ Neo-Tech
        ├──encompasses──→ All DefinedTerms (40+ concepts)
        ├──opposes──→ Mysticism, Following Mode, Anticivilization
        └──envisions──→ Immortalis, Neovia, The Prime Law, Civilization of the Universe

  Membership Journey:
        Level 0 (Awakening) → Level 1 (Clearing) → Level 2 (Living) → Level 3 (The Now)
```

---

## Page-Level Schema Summary

| Page | Primary Schema | Google Renders? |
|------|---------------|-----------------|
| `/` | Organization + WebSite | Yes |
| `/about` | Organization + Article | Yes |
| `/about/mark-hamilton` | Person | Yes |
| `/about/frank-r-wallace` | Person | Yes |
| `/about/wallace-hamilton` | Person | Yes |
| `/about/mission` | Organization | Yes |
| `/neothink-institute` | ResearchOrganization | No (AI only) |
| `/neothink-society` | EducationalOrganization | Partial |
| `/immortalis` | Organization + Article | Yes |
| `/neovia` | Organization + Article | Yes |
| `/philosophy` | DefinedTermSet + ItemList | ItemList only |
| `/neothink` | DefinedTerm + Article | Article only |
| `/neo-tech` | DefinedTerm + Article | Article only |
| All term pages | DefinedTerm + Article | Article only |
| `/books` | ItemList + Book | Yes |
| `/articles` | ItemList | Yes |
| `/articles/[slug]` | Article | Yes |
| `/reviews` | AggregateRating + Review | Yes |
| `/apply` | Offer | Yes |
| `/contact` | ContactPoint | Partial |
| Every page | BreadcrumbList | Yes |
