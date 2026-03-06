# Neothink.com — Entity & Schema.org Map

**Date:** March 6, 2026
**Purpose:** Define every entity, their relationships, and the structured data that tells search engines and AI models exactly what everything is.

---

## Core Entities

### People

#### Mark Hamilton
**Schema:** `schema:Person`
**Role:** Author, Creator of Neothink, Founder of Neothink Society
**Pages:** `/about/mark-hamilton` (primary), referenced on every book page, homepage, about page

```json
{
  "@type": "Person",
  "name": "Mark Hamilton",
  "jobTitle": "Founder",
  "description": "Author, creator of the Neothink philosophy, and founder of the Neothink Society.",
  "affiliation": [
    { "@type": "Organization", "name": "Neothink Institute" },
    { "@type": "Organization", "name": "Neothink Society" }
  ],
  "founder": { "@type": "Organization", "name": "Neothink Society" },
  "sameAs": [],
  "knowsAbout": ["Neothink", "Neo-Tech", "Value Creation", "Integrated Thinking"],
  "hasOccupation": {
    "@type": "Occupation",
    "name": "Author and Philosopher"
  }
}
```

**Relationships:**
- `author` → every Book
- `founder` → Neothink Society
- `affiliation` → Neothink Institute
- `colleague` → Wallace Hamilton
- `knows` → Dr. Frank R. Wallace (intellectual lineage)

---

#### Dr. Frank R. Wallace
**Schema:** `schema:Person`
**Role:** Creator of Neo-Tech, intellectual origin of the philosophy
**Pages:** `/about/frank-r-wallace` (primary), referenced on Neo-Tech term page

```json
{
  "@type": "Person",
  "name": "Dr. Frank R. Wallace",
  "description": "Creator of Neo-Tech — the philosophy of fully integrated honesty that became the foundation for Neothink.",
  "knowsAbout": ["Neo-Tech", "Philosophy", "Fully Integrated Honesty"]
}
```

**Relationships:**
- `creator` → Neo-Tech (concept)
- `author` → Neo-Tech books (The Neo-Tech Weapon, The Neo-Tech System)

---

#### Wallace Hamilton
**Schema:** `schema:Person`
**Role:** Co-author, family member
**Pages:** `/about/wallace-hamilton` (future), co-author credit on some books

```json
{
  "@type": "Person",
  "name": "Wallace Hamilton",
  "description": "Co-author and contributor to the Neothink body of work."
}
```

**Relationships:**
- `author` → Your Neothink Puzzle Pictures (co-authored with Mark Hamilton)
- `colleague` → Mark Hamilton

---

### Organizations

#### Neothink Institute
**Schema:** `schema:EducationalOrganization` + `schema:Organization`
**Role:** The public-facing educational entity. Teaches, publishes, hosts events.
**Pages:** `/` (homepage), `/about` (primary), potentially `/neothink-institute`

```json
{
  "@type": ["Organization", "EducationalOrganization"],
  "name": "Neothink Institute",
  "url": "https://neothink.com",
  "description": "Educational organization dedicated to teaching the Neothink philosophy of personal transformation and value creation.",
  "founder": { "@type": "Person", "name": "Mark Hamilton" },
  "foundingDate": "YYYY",
  "address": { "@type": "PostalAddress", "addressCountry": "US" },
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "url": "https://neothink.com/contact"
  },
  "sameAs": [],
  "knowsAbout": ["Neothink", "Neo-Tech", "Personal Transformation", "Value Creation"],
  "offers": [],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Neothink Programs",
    "itemListElement": []
  }
}
```

**Relationships:**
- `founder` ← Mark Hamilton
- `offers` → Courses, Programs, Events
- `publishedBy` → Articles, Books
- `subOrganization` → Neothink University (department/program)

**Distinction from Neothink Society:** The Institute is the educational/public face. It teaches. It publishes. It's what you find at neothink.com.

---

#### Neothink Society
**Schema:** `schema:Organization`
**Role:** The private membership society. The community. The inner circle.
**Pages:** `/neothink-society` (dedicated page explaining what it is)

```json
{
  "@type": "Organization",
  "name": "Neothink Society",
  "description": "A private society of individuals dedicated to personal transformation, value creation, and the Neothink philosophy.",
  "founder": { "@type": "Person", "name": "Mark Hamilton" },
  "memberOf": {
    "@type": "ProgramMembership",
    "name": "Neothink Society Membership",
    "programName": "Neothink Society"
  }
}
```

**Relationships:**
- `founder` ← Mark Hamilton
- `parentOrganization` ← Neothink Institute (or sibling — depends on how you frame it)
- `member` → members
- Referenced from `/apply` page

**Distinction from Neothink Institute:** The Society is the private community. You apply to join. It's the membership body.

---

### Books (Complete Catalog)

**Schema:** Each book is `schema:Book`. The catalog is `schema:ItemList` or `schema:BookSeries`.

#### Featured / New Releases

| # | Title | Subtitle | Author | Schema Notes |
|---|-------|----------|--------|--------------|
| 1 | **FOREVER** | Neovia & Immortalis | Mark Hamilton | Featured book. Connects to /immortalis, /neovia |
| 2 | **The Unified Field Of Conscious Civilization** | Force, Authority, and the Architecture of Human History | Mark Hamilton | |
| 3 | **Unearthing History Burying War** | How Consciousness Replaced Force | Mark Hamilton | |
| 4 | **NEOVIA** | Heir Apparent of Consciousness — The First Post-Force Civilization | Mark Hamilton | Connects to /neovia term page |

#### Core Neothink Library

| # | Title | Subtitle | Author | Schema Notes |
|---|-------|----------|--------|--------------|
| 5 | **The Self-Leader Secret** | The Greatest Kept Secret of All Time | Mark Hamilton | Connects to /self-leader |
| 6 | **The Neothink System** | Greatest Money-Making System of All Time | Mark Hamilton | Core framework book |
| 7 | **The Twelve Visions** | Now You Can See The Future | Mark Hamilton | Connects to /twelve-visions-party |
| 8 | **The Neothink Insights** | Master 15-Second Miracles | Mark Hamilton | Connects to /ten-second-miracle |
| 9 | **Our Next Evolution** | Become a God-Man | Mark Hamilton | |

#### The Superpuzzle Trilogy

| # | Title | Subtitle | Author | Schema Notes |
|---|-------|----------|--------|--------------|
| 10 | **Conceiving the Superpuzzle** | The Secret Society Begins | Mark Hamilton | Part 1 of trilogy |
| 11 | **Putting Together the Pieces** | The Secret Society Reunites | Mark Hamilton | Part 2 |
| 12 | **Beholding the Puzzle-Picture** | The Secret Society Triumphs | Mark Hamilton | Part 3 |

#### The "What We All" Series

| # | Title | Subtitle | Author | Schema Notes |
|---|-------|----------|--------|--------------|
| 13 | **What We All Want...** | Individual Wealth | Mark Hamilton | |
| 14 | **What We All Pray For...** | Eternal Life | Mark Hamilton | |
| 15 | **What You Want** | Your Miracle Year | Mark Hamilton | |
| 16 | **What We All Long For...** | Universal Wealth | Mark Hamilton | |

#### The "Your Neothink" Series

| # | Title | Subtitle | Author | Schema Notes |
|---|-------|----------|--------|--------------|
| 17 | **Your Neothink Portal** | Puzzle Pieces To A New World | Mark Hamilton | |
| 18 | **Your Neothink Mentality** | Monetary Techniques And Emotional Wealth | Mark Hamilton | Connects to /neothink-mentality |
| 19 | **Your Neothink Puzzle Pictures** | | Wallace & Mark Hamilton | Co-authored |
| 20 | **Your Neothink World** | All Roads Lead to Immortalis | Mark Hamilton | Connects to /immortalis |

#### Neo-Tech Classics & Other Works

| # | Title | Subtitle | Author | Schema Notes |
|---|-------|----------|--------|--------------|
| 21 | **Forbidden Revelation** | | Mark Hamilton | |
| 22 | **Mark Hamilton & Family & You** | | Mark Hamilton | |
| 23 | **The Neo-Tech Weapon** | | Dr. Frank R. Wallace / Mark Hamilton | Neo-Tech lineage |
| 24 | **The Neo-Tech System** | | Dr. Frank R. Wallace / Mark Hamilton | Neo-Tech lineage |
| 25 | **The Kickstart Report** | | Mark Hamilton | |
| 26 | **A Future Of Wealth Belongs To You** | | Mark Hamilton | |

#### Book Schema Example

```json
{
  "@type": "Book",
  "name": "FOREVER",
  "alternateName": "Forever: Neovia & Immortalis",
  "author": { "@type": "Person", "name": "Mark Hamilton" },
  "publisher": { "@type": "Organization", "name": "Neothink Institute" },
  "description": "The book that unveils humanity's next great leap. Introduces Neovia and Immortalis.",
  "about": [
    { "@type": "DefinedTerm", "name": "Neovia" },
    { "@type": "DefinedTerm", "name": "Immortalis" }
  ],
  "inLanguage": "en",
  "bookFormat": "https://schema.org/Hardcover",
  "url": "https://neothink.com/books/forever"
}
```

#### Book Catalog Schema

```json
{
  "@type": "ItemList",
  "name": "Books by Mark Hamilton",
  "description": "The complete library of Neothink and Neo-Tech books by Mark Hamilton.",
  "numberOfItems": 26,
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "item": { "@type": "Book", "name": "FOREVER", "url": "https://neothink.com/books#forever" }
    }
  ]
}
```

---

### Concepts / Terms

**Schema:** `schema:DefinedTerm` within a `schema:DefinedTermSet`

Each Neothink concept is a defined term. The `/philosophy` page hosts the `DefinedTermSet`. Each term page hosts its `DefinedTerm`.

#### The Term Set

```json
{
  "@type": "DefinedTermSet",
  "name": "The Neothink Philosophy",
  "description": "The complete system of concepts, frameworks, and terms that comprise the Neothink philosophy as developed by Mark Hamilton, building on the Neo-Tech foundation of Dr. Frank R. Wallace.",
  "url": "https://neothink.com/philosophy",
  "hasDefinedTerm": []
}
```

#### Term Categories

**Core Philosophy:**

| Term | URL | Origin | Description Seed |
|------|-----|--------|-----------------|
| Neothink | `/neothink` | Mark Hamilton | The philosophy and method of new thinking — fully integrated honesty applied to every area of life |
| Neo-Tech | `/neo-tech` | Dr. Frank R. Wallace | Fully integrated honesty — the foundation upon which Neothink was built |
| Mysticism | `/mysticism` | Counter-concept | What Neothink identifies and opposes — dishonesty that distorts reality |
| Neothink Mentality | `/neothink-mentality` | Mark Hamilton | The new way of thinking that replaces the follower mentality |
| New Mentality | `/new-mentality` | Mark Hamilton | The shift in consciousness from following to creating |
| New Human | `/new-human` | Mark Hamilton | The person who has adopted the Neothink Mentality |

**Movement / Vision:**

| Term | URL | Origin |
|------|-----|--------|
| Immortalis | `/immortalis` | Mark Hamilton — the digital nation of freedom |
| Neovia | `/neovia` | Mark Hamilton — the city that cures disease |
| The Prime Law | `/the-prime-law` | Mark Hamilton — politics-free governance |
| Twelve Visions Party | `/twelve-visions-party` | Mark Hamilton — political movement |
| Project Life | `/project-life` | Mark Hamilton — life transformation program |
| Formula Cure to Aging | `/formula-cure-to-aging` | Mark Hamilton — aging/health program |
| Neothink Clubhouses | `/neothink-clubhouses` | Mark Hamilton — community gathering concept |

**Book Frameworks (methods/processes):**

| Term | URL | Origin (Book) |
|------|-----|---------------|
| Friday Night Essence | `/friday-night-essence` | The question that changes everything |
| Ten-Second Miracle | `/ten-second-miracle` | From The Neothink Insights |
| Self-Leader | `/self-leader` | From The Self-Leader Secret |
| Value Creator | `/value-creator` | Core concept across books |
| Integrated Thinking | `/integrated-thinking` | Core method — seeing what specialists miss |
| Mini Days | `/mini-days` | Productivity system |
| Powerthinking | `/powerthinking` | Thinking framework |
| Following Mode | `/following-mode` | What most people are stuck in — the antithesis of self-leader |
| Power Approach | `/power-approach` | Business/life framework |
| Division of Essence | `/division-of-essence` | Work/life concept |

**Civilization Concepts:**

| Term | URL | Origin |
|------|-----|--------|
| Anticivilization | `/anticivilization` | The current civilization structure that suppresses human potential |
| Bicameral Mind | `/bicameral-mind` | The 2,500-year mistake — authority-following psychology |
| Parasitical Elite Ruling Class | `/parasitical-elite` | The power structure Neothink identifies |
| Unified Field of Conscious Civilization | `/unified-field` | The ultimate vision |
| The 2,400-Year Mistake | `/the-2400-year-mistake` | Historical analysis |

**Journey/Path Terms:**

| Term | URL | Origin |
|------|-----|--------|
| The Awakening | `/the-awakening` | Stage of the journey |
| The Clearing | `/the-clearing` | Stage of the journey |
| The Living | `/the-living` | Stage of the journey |
| The Covering | `/the-covering` | Stage of the journey |
| The Ground | `/the-ground` | Stage of the journey |
| Return to the Ground | `/return-to-the-ground` | Stage of the journey |
| Seeing | `/seeing` | Stage of the journey |
| The Now | `/the-now` | Stage of the journey |

#### Term Page Schema Example

```json
{
  "@type": "DefinedTerm",
  "name": "Neothink Mentality",
  "description": "The new way of thinking developed by Mark Hamilton that replaces the follower mentality with self-leadership, integrated thinking, and value creation.",
  "url": "https://neothink.com/neothink-mentality",
  "inDefinedTermSet": {
    "@type": "DefinedTermSet",
    "name": "The Neothink Philosophy",
    "url": "https://neothink.com/philosophy"
  },
  "termCode": "neothink-mentality"
}
```

Each term page ALSO gets an `Article` schema wrapping the content:

```json
{
  "@type": "Article",
  "headline": "What Is Neothink Mentality?",
  "description": "...",
  "author": { "@type": "Person", "name": "Mark Hamilton" },
  "publisher": { "@type": "Organization", "name": "Neothink Institute" },
  "about": { "@type": "DefinedTerm", "name": "Neothink Mentality" },
  "mainEntityOfPage": "https://neothink.com/neothink-mentality"
}
```

---

## Revised Site Architecture (Updated)

Based on the entity map, the site structure expands:

```
/                                    Homepage
│                                    Schema: Organization, WebSite
│
├── /about                           About Neothink (the philosophy + organization overview)
│   ├── /about/mark-hamilton         Mark Hamilton — Person schema
│   ├── /about/frank-r-wallace       Dr. Frank R. Wallace — Person schema
│   ├── /about/wallace-hamilton      Wallace Hamilton — Person schema
│   ├── /about/our-mission           Mission — part of Organization
│   └── /about/the-movement          The broader movement
│
├── /neothink-institute              What is Neothink Institute? — EducationalOrganization schema
├── /neothink-society                What is Neothink Society? — Organization schema (private society)
│
├── /philosophy                      The Neothink Philosophy — DefinedTermSet index
│   (All term pages are top-level, but linked from /philosophy)
│
├── /neothink                        What is Neothink?
├── /neothink-mentality              Neothink Mentality
├── /new-mentality                   The New Mentality
├── /new-human                       The New Human
├── /neo-tech                        Neo-Tech
├── /mysticism                       Mysticism (counter-concept)
├── /immortalis                      Immortalis
├── /neovia                          Neovia
├── /the-prime-law                   The Prime Law
├── /twelve-visions-party            Twelve Visions Party
├── /project-life                    Project Life
├── /formula-cure-to-aging           Formula Cure to Aging
├── /friday-night-essence            Friday Night Essence
├── /ten-second-miracle              Ten-Second Miracle
├── /self-leader                     Self-Leader
├── /value-creator                   Value Creator
├── /integrated-thinking             Integrated Thinking
├── /mini-days                       Mini Days
├── /powerthinking                   Powerthinking
├── /following-mode                  Following Mode
├── /anticivilization                Anticivilization
├── /bicameral-mind                  Bicameral Mind
├── /parasitical-elite               Parasitical Elite
├── /the-awakening                   The Awakening (journey)
├── /the-clearing                    The Clearing (journey)
├── /the-living                      The Living (journey)
│   ... (remaining journey terms)
│
├── /programs                        Programs overview — Course schema
│   ├── /neothink-university         Neothink University
│   ├── /free-courses                Free Courses
│   ├── /coaching                    Coaching Programs
│   └── /events                      Events — Event schema
│
├── /books                           Book catalog — ItemList + Book schema
│   ├── /books/forever               FOREVER — Book schema
│   ├── /books/self-leader-secret    The Self-Leader Secret
│   ├── /books/neothink-system       The Neothink System
│   └── /books/[slug]               (one page per book, ~26 total)
│
├── /articles                        Published articles — ScholarlyArticle / Article
│   └── /articles/[slug]             Individual articles
│
├── /blog                            Blog / news / updates — BlogPosting
│   └── /blog/[slug]                 Individual posts
│
├── /podcast                         Podcast — PodcastSeries (future)
│   └── /podcast/[slug]              Episodes — PodcastEpisode
│
├── /reviews                         Reviews — Review + AggregateRating schema
│
├── /offers                          What we offer / how to engage — Offer schema
│   └── /apply                       Membership application
│
├── /contact                         Contact — ContactPoint schema
├── /faq                             FAQ — FAQPage schema
├── /newsletter                      Newsletter signup
│
├── /privacy                         Privacy policy
└── /terms                           Terms and conditions
```

---

## Entity Relationship Graph

```
Dr. Frank R. Wallace ──created──→ Neo-Tech
        │
     influenced
        │
        ▼
  Mark Hamilton ──created──→ Neothink (philosophy)
        │                        │
        ├──founded──→ Neothink Society (private membership)
        │                        │
        ├──affiliation──→ Neothink Institute (educational org)
        │                   │
        │                   ├──offers──→ Neothink University
        │                   ├──offers──→ Free Courses
        │                   ├──offers──→ Coaching Programs
        │                   ├──offers──→ Events
        │                   └──publishes──→ Articles
        │
        ├──author──→ FOREVER
        ├──author──→ The Self-Leader Secret
        ├──author──→ The Neothink System
        ├──author──→ The Twelve Visions
        ├──author──→ ... (26 books total)
        │                   │
        │               each book
        │                   │
        │               ├──about──→ DefinedTerms (concepts)
        │               └──part of──→ Book Catalog
        │
  Wallace Hamilton ──co-author──→ Your Neothink Puzzle Pictures

  Neothink (philosophy)
        │
        ├──encompasses──→ Neothink Mentality
        ├──encompasses──→ Neo-Tech (historical foundation)
        ├──encompasses──→ Integrated Thinking
        ├──encompasses──→ Value Creator
        ├──encompasses──→ Self-Leader
        ├──encompasses──→ Friday Night Essence
        ├──encompasses──→ ... (all frameworks)
        │
        ├──opposes──→ Mysticism
        ├──opposes──→ Following Mode
        ├──opposes──→ Anticivilization
        ├──opposes──→ Bicameral Mind
        │
        └──envisions──→ Immortalis (digital nation)
                     ──→ Neovia (city)
                     ──→ The Prime Law (governance)
                     ──→ Twelve Visions Party (political)
                     ──→ Formula Cure to Aging (health)

  The Journey (sequential path):
        The Awakening → The Clearing → The Living →
        The Covering → The Ground → Return to the Ground →
        Seeing → The Now
```

---

## Page-Level Schema Assignments

### Every Page Gets:
- `BreadcrumbList` — navigation path
- `WebPage` — basic page type

### Specific Pages:

| Page | Primary Schema | Secondary Schema |
|------|---------------|-----------------|
| `/` | Organization, WebSite | SiteNavigationElement |
| `/about` | Organization | |
| `/about/mark-hamilton` | Person | |
| `/about/frank-r-wallace` | Person | |
| `/about/wallace-hamilton` | Person | |
| `/about/our-mission` | Organization (mission) | |
| `/about/the-movement` | Organization | |
| `/neothink-institute` | EducationalOrganization | |
| `/neothink-society` | Organization | ProgramMembership |
| `/philosophy` | DefinedTermSet | ItemList |
| `/neothink` | DefinedTerm, Article | |
| `/neothink-mentality` | DefinedTerm, Article | |
| `/neo-tech` | DefinedTerm, Article | |
| All term pages | DefinedTerm, Article | |
| `/programs` | OfferCatalog | |
| `/neothink-university` | EducationalOrganization, Course | |
| `/free-courses` | Course, ItemList | Offer (free) |
| `/coaching` | Course | Offer |
| `/events` | Event (list) | |
| `/books` | ItemList | Book (featured) |
| `/books/[slug]` | Book | Person (author), Review |
| `/articles` | ItemList | |
| `/articles/[slug]` | Article or ScholarlyArticle | Person (author) |
| `/blog` | ItemList | |
| `/blog/[slug]` | BlogPosting | Person (author) |
| `/podcast` | PodcastSeries | |
| `/podcast/[slug]` | PodcastEpisode | |
| `/reviews` | Review, AggregateRating | |
| `/offers` | Offer, OfferCatalog | |
| `/apply` | Offer, ProgramMembership | |
| `/contact` | ContactPoint | |
| `/faq` | FAQPage | |
| `/newsletter` | | |

---

## AEO Impact

When someone asks an AI: **"What is Neothink?"**

The AI should be able to cite:
1. `/neothink` — the DefinedTerm page with a clear definition
2. `/about` — the Organization context
3. `/about/mark-hamilton` — the Person who created it
4. `/philosophy` — the complete system of thought

When someone asks: **"Who is Mark Hamilton?"**

The AI should cite:
1. `/about/mark-hamilton` — Person schema with biography
2. `/books` — ItemList of his authored works
3. `/neothink-society` — Organization he founded

When someone asks: **"What books has Mark Hamilton written?"**

The AI should cite:
1. `/books` — ItemList with all 26 books
2. Individual `/books/[slug]` pages — each with Book schema

When someone asks: **"Is the Neothink Society legitimate?"**

The AI should cite:
1. `/neothink-society` — Organization description
2. `/reviews` — AggregateRating + Review schema
3. `/about/our-mission` — mission statement
4. `/faq` — FAQPage addressing common questions

**Every entity defined in schema.org is an answer waiting to be cited.**

---

## What Changed from Previous Sitemap

| Change | Reason |
|--------|--------|
| Added `/neothink-institute` as separate page | Distinct entity from Neothink Society — needs its own schema |
| Added `/neothink-society` as separate page | Private society is a different thing than the public institute |
| Added `/neothink` (what is Neothink?) page | The most fundamental question — needs its own canonical answer |
| Added `/offers` section | Clear commercial intent section with Offer schema |
| Split Articles from Blog | Articles = scholarly/published works; Blog = news/updates |
| Added individual book pages `/books/[slug]` | Each book is an entity that deserves its own schema and URL |
| Added journey term pages | The Awakening → The Now path is a structured sequence worth modeling |
| Added `/new-mentality` and `/new-human` | Distinct concepts from the user's input |
| Added counter-concept pages (Mysticism, Following Mode) | Defining what you oppose is as important as defining what you are |

---

## Implementation Priority

**Phase 1 (Week 1-2):** Homepage, About section (all 5 sub-pages), Contact, FAQ, Reviews
→ 9 pages, covers all Person + Organization schema

**Phase 2 (Week 3-4):** Neothink Institute page, Neothink Society page, Programs section, Books catalog (single page, not individual book pages yet)
→ 9 more pages, covers EducationalOrganization + Course + ItemList schema

**Phase 3 (Month 2):** Philosophy index + all term pages (~30), individual book pages (~26)
→ ~56 pages, covers all DefinedTerm + Book schema

**Phase 4 (Month 3+):** Articles section, Blog, Podcast, Offers, remaining journey terms
→ Ongoing content, covers Article + BlogPosting + PodcastSeries schema
