# Neothink.com — Site Outline

**Date:** March 6, 2026
**Purpose:** Simple, clear blueprint for neothink.com. Pages on who we are, what we do, and what our terms mean — optimized for AEO and SEO.

---

## AEO & SEO Approach (Every Page)

### What Actually Works (March 2026)

**Google renders rich results for:** Organization, Person, Article, Book, Event, BreadcrumbList, WebSite, ItemList, AggregateRating + Review

**Google does NOT render rich results for:** FAQPage (restricted to gov/health since Aug 2023), DefinedTerm (pending), Course (dropped June 2025), ResearchOrganization (pending)

**Still worth using even without Google rich results:** DefinedTerm, ResearchOrganization, DefinedTermSet — AI models (ChatGPT, Gemini, Perplexity, Claude) read and cite these. That's the AEO play.

### Every Page Gets

- JSON-LD structured data (schema types listed per page below)
- BreadcrumbList schema
- Canonical URL
- Open Graph + Twitter Card meta tags
- `datePublished` + `dateModified` (AI citations decay after ~3 months without updates)
- Author attribution back to Mark Hamilton or Neothink Institute
- Scannable formatting: headers, short paragraphs, lists (40-61% of AI Overviews use list format)
- Internal links to related pages (entity interconnection)

### E-E-A-T Signals (Credibility for Google + AI)

Every author-attributed page includes:
- Author name, photo, bio with credentials
- `sameAs` links to verified profiles (YouTube, social, official sites)
- `knowsAbout` array on Person schema
- Publisher info (Neothink Institute) with logo
- Clear "About" and "Contact" pages linked from footer
- Real reviews/testimonials on `/reviews` with AggregateRating schema
- Consistent NAP (Name, Address, Phone) if applicable
- HTTPS, fast loading, mobile-responsive (Core Web Vitals)

---

## The Pages

### Who We Are

#### Homepage `/`
**What it is:** The front door. Establishes Neothink Institute as a legitimate organization.
**What it's about:** One clear statement of what Neothink is, who Mark Hamilton is, and what the Institute does. Links to everything else.
**Schema:** `Organization` (Neothink Institute) + `WebSite` + `SiteNavigationElement`
**AEO target:** "What is Neothink?" "What is Neothink Institute?"

#### About Neothink `/about`
**What it is:** The organization story — what Neothink is, where it came from, what it stands for.
**What it's about:** Neothink as a philosophy and movement. The intellectual lineage: Aristotle → Ayn Rand → Dr. Frank R. Wallace (Neo-Tech) → Mark Hamilton (Neothink). What makes it distinct.
**Schema:** `Organization` + `Article`
**AEO target:** "What is Neothink about?" "Is Neothink legitimate?"

#### Mark Hamilton `/about/mark-hamilton`
**What it is:** Person page — the creator of Neothink.
**What it's about:** Biography, body of work (26 books), founding of the Neothink Society, creation of the Neothink philosophy. Author of Immortalis and Neovia vision.
**Schema:** `Person` with `sameAs`, `knowsAbout`, `hasOccupation`, `affiliation`, `founder`
**AEO target:** "Who is Mark Hamilton?" "Who wrote the Neothink books?"

#### Dr. Frank R. Wallace `/about/frank-r-wallace`
**What it is:** Person page — the creator of Neo-Tech, intellectual origin.
**What it's about:** Creator of Neo-Tech (fully integrated honesty). The philosophical foundation that Neothink builds on. His works and contribution.
**Schema:** `Person`
**AEO target:** "Who is Frank R. Wallace?" "Who created Neo-Tech?"

#### Wallace Hamilton `/about/wallace-hamilton`
**What it is:** Person page — son of Mark Hamilton, grandson of Dr. Frank R. Wallace.
**What it's about:** Next-generation leader. Main driver behind the scenes of modern Neothink operations. Co-author (Your Neothink Puzzle Pictures).
**Schema:** `Person`
**AEO target:** "Who is Wallace Hamilton?"

#### Our Mission `/about/mission`
**What it is:** Mission statement page.
**What it's about:** What Neothink Institute exists to do. The vision of a civilization free from force, fraud, and mysticism. Value creation as the organizing principle.
**Schema:** `Organization` (mission/description fields)

#### Neothink Institute `/neothink-institute`
**What it is:** Dedicated page for the public research organization.
**What it's about:** What the Institute is, what it does (research, publishing, education). Distinct from the Society. The public-facing entity at neothink.com.
**Schema:** `ResearchOrganization`
**AEO target:** "What is Neothink Institute?"

#### Neothink Society `/neothink-society`
**What it is:** Dedicated page for the private membership society.
**What it's about:** What the Society is, how membership works (Level 0 invitation → Level 1 → Level 2 → Level 3), what members do and learn. Private, application-based.
**Schema:** `EducationalOrganization` + `ProgramMembership`
**AEO target:** "What is Neothink Society?" "How do I join Neothink?"

---

### What We Do

#### Immortalis `/immortalis`
**What it is:** Active project page — the network state replacing the Twelve Visions Party.
**What it's about:** A startup society / network union / network archipelago / network state project. What it is, why it exists, how to participate. Links to joinimmortalis.com.
**Schema:** `Organization` + `Article`
**AEO target:** "What is Immortalis?" "What replaced the Twelve Visions Party?"

#### Neovia `/neovia`
**What it is:** Active project page — the physical freedom zone.
**What it's about:** America's first biotech freedom city. The nation-state project. Each location is a Neovia. Links to joinneovia.com.
**Schema:** `Organization` + `Article`
**AEO target:** "What is Neovia?"

#### Books `/books`
**What it is:** Complete catalog of Mark Hamilton's 26 books.
**What it's about:** The full library, organized by series. Featured/new releases, Core Neothink Library, Superpuzzle Trilogy, "What We All" series, "Your Neothink" series, Neo-Tech Classics.
**Schema:** `ItemList` of `Book` entries (each with author, publisher, about)
**AEO target:** "What books has Mark Hamilton written?" "Neothink books"

#### Reviews `/reviews`
**What it is:** Real testimonials and reviews.
**What it's about:** Verified member experiences. This is the single most important credibility page for both Google E-E-A-T and AI trust signals.
**Schema:** `AggregateRating` + individual `Review` entries
**AEO target:** "Neothink reviews" "Is Neothink Society worth it?"

#### Apply `/apply`
**What it is:** Membership application entry point.
**What it's about:** How to begin the process of joining the Neothink Society. What to expect, what's required.
**Schema:** `Offer` + `ProgramMembership`

#### Contact `/contact`
**What it is:** Contact information.
**What it's about:** How to reach Neothink Institute. Email, form, any physical address.
**Schema:** `ContactPoint`

---

### What Our Terms Mean

#### Philosophy Index `/philosophy`
**What it is:** The glossary/index page. Links to every term with a short definition.
**What it's about:** The complete Neothink and Neo-Tech vocabulary, organized by category. This is the DefinedTermSet — the master container for all terms.
**Schema:** `DefinedTermSet` + `ItemList`
**AEO target:** "Neothink philosophy" "Neothink concepts"

Each term below gets its own page at the listed URL. Every term page uses dual schema: `DefinedTerm` (for AI entity understanding) + `Article` (for Google rich results). Each includes the definition, context, related terms, origin, and links to related pages.

**Core Philosophy**

- **Neothink** `/neothink` — The philosophy and method of fully integrated honesty applied to every area of life. Created by Mark Hamilton, building on Neo-Tech.
- **Neo-Tech** `/neo-tech` — Fully integrated honesty. The philosophical foundation created by Dr. Frank R. Wallace upon which Neothink was built.
- **Neothink Mentality** `/neothink-mentality` — The new way of thinking that replaces the follower mentality with self-leadership and value creation.
- **New Mentality** `/new-mentality` — The shift in consciousness from following to creating. The internal transformation that Neothink produces.
- **New Human** `/new-human` — The person who has adopted the Neothink Mentality. Synonymous with God-Man in source texts, but New Human is the public-facing term.
- **Mysticism** `/mysticism` — What Neothink identifies and opposes. Any dishonesty that distorts reality and blocks human potential.

**Active Projects & Movement**

- **Immortalis** `/immortalis` — (Covered above in What We Do — dedicated project page)
- **Neovia** `/neovia` — (Covered above in What We Do — dedicated project page)
- **The Prime Law** `/the-prime-law` — The fundamental law of protection: no person, group, or government shall initiate force, threat of force, or fraud against any individual's self, property, or contract. Politics-free governance.
- **Neothink Clubhouses** `/neothink-clubhouses` — Community gathering spaces for Neothink Society members.
- **Twelve Visions Party** `/twelve-visions-party` — Original political movement, now succeeded by Immortalis.
- **Secret Society** `/secret-society` — The Neothink Society's identity as a private, invitation-based organization.

**Book Frameworks (Methods & Processes)**

- **Friday Night Essence** `/friday-night-essence` — The question that unlocks personal direction: "What would I do with my life if I had all the money and time in the world?" From Mark Hamilton's works.
- **Ten-Second Miracle** `/ten-second-miracle` — Rapid insight technique. From The Neothink Insights.
- **Self-Leader** `/self-leader` — The person who leads themselves rather than following external authority. From The Self-Leader Secret.
- **Value Creator** `/value-creator` — Someone who produces more than they consume. The core identity Neothink cultivates.
- **Integrated Thinking** `/integrated-thinking` — Seeing across disciplines what specialists miss. The thinking method of Neothink.
- **Mini Days** `/mini-days` — Productivity system for organizing work into focused, completable units.
- **Powerthinking** `/powerthinking` — Advanced thinking framework for creative and business breakthroughs.
- **Following Mode** `/following-mode` — What most people are stuck in. The antithesis of self-leadership. The default state Neothink aims to replace.
- **Power Approach** `/power-approach` — Business and life framework for taking action from a position of created value.
- **Division of Essence** `/division-of-essence` — Framework for understanding how to organize the components of a productive life.

**Civilization Concepts**

- **Anticivilization** `/anticivilization` — The current civilization structure that suppresses human potential through force, fraud, and mysticism.
- **Bicameral Mind / The 2,500-Year Mistake** `/bicameral-mind` — The authority-following psychology that has persisted since the breakdown of the bicameral mind. The foundational error Neothink identifies in human history.
- **Parasitical Elite Ruling Class** `/parasitical-elite` — The power structure that extracts value rather than creating it. What Neothink identifies as the governing force of the anticivilization.
- **Civilization of the Universe** `/civilization-of-the-universe` — The ultimate vision. A civilization organized around value creation, free from initiatory force.
- **Unified Field of Conscious Civilization** `/unified-field` — The theoretical framework connecting individual consciousness to civilizational transformation.
- **Force-backed Hierarchy** `/force-backed-hierarchy` — Organizational structures maintained by coercion rather than voluntary value exchange.
- **Hierarchy** `/hierarchy` — The structural analysis of how power organizes in the anticivilization vs. a free civilization.
- **The New World** `/the-new-world` — The civilization that emerges when Neothink principles replace anticivilization structures.

**Additional Terms**

- **Neocheating** `/neocheating` — Sophisticated dishonesty disguised as legitimate authority. A core Neo-Tech concept for identifying hidden manipulation.
- **White-Collar Hoax** `/white-collar-hoax` — Institutional-level deception perpetrated through professional/governmental authority.
- **Golden Helmet** `/golden-helmet` — Protection framework against value destruction and manipulation.
- **Wide Scope Thinking** `/wide-scope-thinking` — Expansive perspective-taking that connects disparate domains.
- **Value Reflection** `/value-reflection` — The practice of examining one's actual value production vs. consumption.
- **Value Producer** `/value-producer` — Related to Value Creator — someone who generates tangible value in the world.
- **Value Destroyers / Usurpers** `/value-destroyers` — Those who extract, consume, or destroy value created by others.
- **Downstream Focus** `/downstream-focus` — Concentrating effort on the highest-impact activities.
- **Geniuses of Society** `/geniuses-of-society` — The value creators and integrated thinkers throughout history who advanced civilization.

**Membership Journey (Levels 0-3)**

These terms describe the stages of membership in the Neothink Society. They're part of the funnel from non-member to advanced member:

- **The Awakening** `/the-awakening` — Level 0. The initial encounter with Neothink ideas. Invitation stage.
- **The Clearing** `/the-clearing` — Level 1. Beginning to clear away mysticism and following mode.
- **The Living** `/the-living` — Level 2. Active application of Neothink principles.
- **The Covering** `/the-covering` — Part of the journey framework.
- **The Ground** `/the-ground` — Foundation-building stage.
- **Return to the Ground** `/return-to-the-ground` — Revisiting and deepening foundational understanding.
- **Seeing** `/seeing` — Clarity stage — seeing reality without mystical distortion.
- **The Now** `/the-now` — Level 3. Full integration. Living as a New Human.

---

### Content (Grows Over Time)

#### Articles `/articles`
**What it is:** Published articles and content. Migrated from WordPress + new.
**What it's about:** Best content from the 112 WordPress posts (curated, not all), plus new articles.
**Schema:** `Article` per post, `ItemList` on index
**Note:** WordPress posts that have Rank Math SEO data (112 of 114) are candidates. The 50 "Uncategorized" older posts need individual review — some are generic SEO filler, some are substantive.

#### Podcast `/podcast` (when launched)
**What it is:** Podcast series with episodes.
**Schema:** `PodcastSeries` + `PodcastEpisode`

#### Events `/events` (when applicable)
**What it is:** Upcoming events, workshops, meetups.
**Schema:** `Event`

---

### Standard Pages

- **Privacy Policy** `/privacy`
- **Terms of Service** `/terms`
- **Newsletter** `/newsletter` — Email signup

---

## Site-Wide Schema (Every Page Load)

These appear on every page via the root layout:

```json
{
  "@context": "https://schema.org",
  "@type": "ResearchOrganization",
  "name": "Neothink Institute",
  "url": "https://neothink.com",
  "logo": "https://neothink.com/logo.png",
  "founder": { "@type": "Person", "name": "Mark Hamilton" },
  "description": "Public research organization dedicated to the Neothink philosophy of value creation and human potential.",
  "sameAs": ["https://youtube.com/...", "https://..."],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "url": "https://neothink.com/contact"
  }
}
```

```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Neothink",
  "url": "https://neothink.com",
  "publisher": { "@type": "ResearchOrganization", "name": "Neothink Institute" }
}
```

---

## Build Order (Priority, Not Timeline)

**First — Foundation:**
1. Homepage
2. About + People pages (Mark Hamilton, Dr. Wallace, Wallace Hamilton, Mission)
3. Contact
4. Reviews

These establish the core entities (Organization, Person) and credibility signals. Without these, nothing else works for AEO or E-E-A-T.

**Second — Identity:**
5. Neothink Institute page
6. Neothink Society page
7. Apply page

These distinguish the two organizations and create the membership funnel.

**Third — Projects:**
8. Immortalis page
9. Neovia page

Active projects with their own domains. These need to exist on neothink.com for entity connection.

**Fourth — Terms:**
10. Philosophy index page
11. Core philosophy terms (Neothink, Neo-Tech, Neothink Mentality, New Human, Mysticism)
12. Remaining terms (build out over time, prioritize by search volume)

This is the AEO engine. Each term page is an entity that AI models can cite.

**Fifth — Content:**
13. Books catalog
14. Articles (migrated from WordPress)
15. Remaining term pages
16. Podcast, Events (when ready)

**Sixth — Standard:**
17. Privacy, Terms, Newsletter

---

## URL Strategy

No need to preserve WordPress URL structure. Start clean:

- People: `/about/mark-hamilton`, `/about/frank-r-wallace`, `/about/wallace-hamilton`
- Organizations: `/neothink-institute`, `/neothink-society`
- Terms: `/neothink`, `/neo-tech`, `/neothink-mentality`, etc. (top-level slugs)
- Books: `/books` (single catalog page initially, individual `/books/[slug]` later)
- Articles: `/articles/[slug]`
- Projects: `/immortalis`, `/neovia`

301 redirects from old WordPress URLs can be added in `next.config.ts` when the domain cuts over. Not a blocker for building.

---

## What This Site Is NOT

- Not a blog migration. The blog content serves the authority site, not the other way around.
- Not a course platform. Programs and courses may come later, but they're not the initial build.
- Not an e-commerce store. Book purchases link to external stores or future checkout.
- Not a social network. The Society's membership tools live elsewhere (app.neothink.io or similar).
