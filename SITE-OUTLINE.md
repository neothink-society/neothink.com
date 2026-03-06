# Neothink.com — Site Outline

**Date:** March 6, 2026
**Purpose:** Page-by-page blueprint for rebuilding neothink.com. Each page has: what it is, what it's about, how to optimize for AEO and SEO, and where it fits in the build sequence.

**Priority Entities:** Mark Hamilton, Neothink, Neothink Institute, Neothink Society

---

## How This Document Works

Each page entry follows this structure:

- **URL** — the permanent address
- **What it is** — the page type and role on the site
- **What it's about** — the actual content and message (1-3 sentences)
- **AEO strategy** — how this page teaches AI models about the entity (schema.org types, citation targets)
- **SEO strategy** — how this page ranks in Google (target queries, meta approach, internal links)
- **Build phase** — when to build it

The build phases:

| Phase | Timeline | Focus | Pages |
|-------|----------|-------|-------|
| **1** | Week 1-2 | Core identity — who we are | 9 pages |
| **2** | Week 3-4 | Programs + movement vision | 11 pages |
| **3** | Month 2 | Term/concept library (AEO push) | ~30 pages |
| **4** | Month 3+ | Content sections, books, articles | Ongoing |

---

## AEO & SEO Principles (Applied to Every Page)

### AEO (AI Engine Optimization)

The goal: when someone asks an AI "What is Neothink?" or "Who is Mark Hamilton?", the AI cites neothink.com as the canonical source.

How we achieve this:

1. **Structured data (JSON-LD)** — Every page declares its entities using schema.org. This is the primary signal AI models use to understand what something IS.
2. **Clear definitions in the first 2-3 sentences** — AI models extract definitions from early paragraph text. The opening of every page must be a clean, factual, quotable statement.
3. **Entity disambiguation** — Neothink Institute ≠ Neothink Society ≠ Neothink (the philosophy). Each gets its own page, its own schema, its own definition.
4. **Relationship modeling** — Schema.org properties like `founder`, `author`, `affiliation`, `about`, and `inDefinedTermSet` connect entities to each other. AI models use these connections to build knowledge graphs.
5. **Internal linking** — Every term page links to related terms, creating a web of context that both search engines and AI crawlers can follow.

### SEO Fundamentals

1. **Unique title + meta description** per page — target the highest-value query for that page
2. **Canonical URLs** — no trailing slashes, no duplicates, one URL per concept
3. **BreadcrumbList schema** on every page — helps Google understand site hierarchy
4. **Core Web Vitals** — Next.js 16 with server components gives us fast LCP, low CLS, good INP out of the box
5. **301 redirects** — every WordPress URL with organic traffic gets redirected to its Next.js equivalent
6. **Image optimization** — WebP/AVIF with descriptive alt text, lazy loading below the fold
7. **Mobile-first** — 72% of organic traffic is mobile

---

## Phase 1: Core Identity (Week 1-2)

These 9 pages answer the question every visitor is asking: **"Who are you, and can I trust you?"**

This is 80%+ of organic traffic. Ship these first.

---

### `/` — Homepage

**What it is:** The front door. The first impression for 20K+ annual visitors arriving from Zoom webinars, ads, organic search, and direct visits.

**What it's about:** Neothink Institute is an educational organization founded by Mark Hamilton that teaches a philosophy of personal transformation and value creation. The homepage establishes credibility, communicates the value proposition, and routes visitors to what they're looking for — whether that's learning about the philosophy, exploring programs, reading reviews, or contacting the Institute.

**AEO strategy:**
- Schema: `Organization` + `WebSite` + `SiteNavigationElement`
- The Organization schema declares: name, URL, founder (Mark Hamilton), founding date, description, contact point, and `knowsAbout` topics
- The WebSite schema enables sitelinks search box in Google
- Opening headline and paragraph must contain a clean, factual statement: what Neothink Institute is, who founded it, what it teaches

**SEO strategy:**
- Target query: "neothink" (730 clicks, 3,372 impressions, position 2.1)
- Secondary: "neothink society" (725 clicks), "neo think" (80 clicks)
- Title: `Neothink Institute — Personal Transformation & Value Creation`
- Meta: Clear statement of what the Institute is, mentioning Mark Hamilton
- Hero section: value proposition + trust signals (years active, members, books published)
- Feature cards linking to: About, Programs, Books, Reviews
- Newsletter CTA above the fold

**Internal links from homepage:** About, Mark Hamilton, Programs, Books, Reviews, Contact, Philosophy, Apply

**Build phase:** 1

---

### `/about` — About Neothink

**What it is:** The primary identity page. Consolidates three WordPress pages (`/about/`, `/about-us/`, `/about-neothink/`) that currently split 963 combined GSC clicks.

**What it's about:** The story of Neothink — where the philosophy came from (Dr. Frank R. Wallace's Neo-Tech), how Mark Hamilton developed it into Neothink, what the Institute does today (education, publishing, community), and the distinction between the Neothink Institute (public educational org) and the Neothink Society (private membership community). This page answers: "What is this organization, and why does it exist?"

**AEO strategy:**
- Schema: `Organization` (with full properties: name, description, founder, foundingDate, address, contactPoint, sameAs)
- The first paragraph must define Neothink Institute clearly enough for an AI to cite: "Neothink Institute is an educational organization founded by Mark Hamilton, dedicated to teaching the Neothink philosophy of personal transformation and value creation."
- Link to both `/neothink-institute` and `/neothink-society` for entity disambiguation

**SEO strategy:**
- Target queries: "about neothink" (combined 963 clicks across 3 pages), "what is neothink" (42 clicks, 189 impressions)
- Title: `About Neothink — The Philosophy of Personal Transformation`
- Meta: Who we are, what we teach, who founded it
- 301 redirects: `/about-us/` → `/about`, `/about-neothink/` → `/about`
- Sub-navigation to all `/about/*` child pages

**Internal links:** Mark Hamilton, Frank R. Wallace, Our Mission, The Movement, Philosophy, Neothink Institute, Neothink Society

**Build phase:** 1

---

### `/about/mark-hamilton` — Mark Hamilton

**What it is:** The dedicated biography page for the founder. Currently does NOT exist — "mark hamilton neothink" gets 317 GSC clicks with no landing page. This is the single biggest missed opportunity on the site.

**What it's about:** Mark Hamilton is the author, creator of the Neothink philosophy, and founder of the Neothink Society. This page covers his background, his body of work (26 books), the development of Neothink from Dr. Wallace's Neo-Tech foundation, and his role leading the Neothink Institute today. It answers: "Who is Mark Hamilton, and why should I pay attention?"

**AEO strategy:**
- Schema: `Person` — this is the PRIMARY page for the Mark Hamilton entity
- Properties: name, jobTitle, description, affiliation (Neothink Institute), founder (Neothink Society), author (link to books), knowsAbout, sameAs
- The opening must be a clean biographical statement suitable for AI citation: "Mark Hamilton is the author, creator of the Neothink philosophy, and founder of the Neothink Society. He has written 26 books on personal transformation, value creation, and the Neothink system."
- Cross-reference with Book schema on `/books` and Organization schema on `/about`

**SEO strategy:**
- Target queries: "mark hamilton neothink" (317 clicks), "mark hamilton author" (14 clicks, 419 impressions), "mark hamilton books" (12 clicks, 388 impressions)
- Title: `Mark Hamilton — Author, Creator of Neothink`
- Meta: Biographical summary mentioning books, philosophy, founding of the Society
- This page alone could capture 200+ additional clicks/year from queries that currently have no landing page

**Internal links:** Books, About, Neothink, Philosophy, Neothink Society, individual book pages (when built)

**Build phase:** 1

---

### `/about/our-mission` — Our Mission

**What it is:** The mission statement page. Preserves URL from WordPress (26 GSC clicks, 76s engagement).

**What it's about:** Why Neothink Institute exists. The mission to make the Neothink philosophy accessible to everyone, eliminate mysticism, and help individuals become self-leaders and value creators. This is the "why" behind the organization.

**AEO strategy:**
- Schema: part of the `Organization` entity — mission statement as `description` or `slogan`
- Cross-reference with the main Organization schema on `/about`

**SEO strategy:**
- Target query: "neothink mission" / "neothink institute mission"
- Title: `Our Mission — Neothink Institute`
- Redirect: `/our-mission/` → `/about/our-mission`
- Keep content focused and specific — no generic corporate language

**Build phase:** 1

---

### `/about/the-movement` — The Movement

**What it is:** Overview of the broader Neothink movement beyond the Institute and Society. Preserves URL (72 GSC clicks).

**What it's about:** The Neothink movement is larger than any single organization. It encompasses the philosophy, the community of practitioners worldwide, the political vision (Twelve Visions Party), the civilization concepts (Immortalis, Neovia, Prime Law), and the ongoing work to spread integrated thinking. This page is the bridge between "who we are" and "what we envision."

**AEO strategy:**
- Schema: `Organization` (movement as a broader entity)
- Links to all vision/movement term pages: Immortalis, Neovia, Prime Law, Twelve Visions Party

**SEO strategy:**
- Target query: "neothink movement" (72 clicks on `/the-movement/`)
- Title: `The Neothink Movement — A Vision for Human Transformation`
- Redirect: `/the-movement/` → `/about/the-movement`

**Build phase:** 1

---

### `/contact` — Contact

**What it is:** How to reach the Neothink Institute. 141 GSC clicks, 166s engagement (people are composing real messages).

**What it's about:** Contact form, phone number, email address, physical address. Direct and functional. People searching "neothink society phone number" (36 clicks, 330 impressions) need to find this immediately.

**AEO strategy:**
- Schema: `ContactPoint` — telephone, email, contactType, areaServed
- Make the phone number and address prominent for AI knowledge panel extraction

**SEO strategy:**
- Target queries: "neothink contact" (141 clicks), "neothink society phone number" (36 clicks, 330 impressions — position 3.8)
- Title: `Contact Neothink Institute`
- Meta: Include phone number in meta description (Google often shows it in snippets)
- No redirect needed — keep `/contact`

**Build phase:** 1

---

### `/faq` — Frequently Asked Questions

**What it is:** Answers to the most common questions about Neothink. 101 GSC clicks, 117s engagement.

**What it's about:** Addresses the real questions people have: What is Neothink? Is it legitimate? What is the Neothink Society? How is it different from a secret society? Who is Mark Hamilton? What do the books teach? How much does it cost? This page directly serves the "vetting" visitor segment.

**AEO strategy:**
- Schema: `FAQPage` with `Question` + `Answer` pairs — this is one of the most powerful schema types for AI citation
- Each Q&A pair becomes a potential featured snippet and a potential AI answer
- Structure questions around the actual queries from GSC: "What is Neothink?", "Is Neothink Society legit?", "Who is Mark Hamilton?", "What are the Neothink books about?"

**SEO strategy:**
- Target queries: "what is neothink" (42 clicks), "is neothink legit" (emerging), "neothink society reviews" (17 clicks)
- Title: `FAQ — Neothink Institute`
- FAQPage schema generates rich results in Google (expandable answers below the listing)
- Each answer should be 2-4 sentences — concise, factual, linkable

**Internal links from FAQ:** Every answer links to the relevant page (books page, reviews page, Mark Hamilton page, etc.)

**Build phase:** 1

---

### `/reviews` — Reviews & Testimonials

**What it is:** Consolidated reviews page. The single biggest SEO quick win on the entire site.

**What it's about:** Real reviews and testimonials from Neothink members, book readers, and program participants. Organized by category (books, courses, membership experience). This page answers: "What do other people think about Neothink?"

**Why this is urgent:** "neothink reviews" gets 1,210 impressions with only 1 click (position 16.6). A dedicated, optimized page could capture 100-200+ clicks/year. Currently split across `/testimonials/`, `/neothink-reviews/`, `/customer-testimonials/`.

**AEO strategy:**
- Schema: `Review` (individual reviews) + `AggregateRating` (overall rating)
- AggregateRating tells AI models: "Neothink Institute has X rating based on Y reviews"
- Each review includes: reviewer name, date, rating, review body, item reviewed
- This directly feeds Google's review snippets and AI trust signals

**SEO strategy:**
- Target queries: "neothink reviews" (1 click, 1,210 impressions — position 16.6), "neothink society reviews" (17 clicks, 269 impressions — position 5.3)
- Title: `Neothink Reviews — What Members and Readers Say`
- Meta: Include aggregate rating if possible ("Rated 4.8/5 by X members")
- 301 redirects: `/testimonials/` → `/reviews`, `/neothink-reviews/` → `/reviews`, `/customer-testimonials/` → `/reviews`
- Structured review markup generates star ratings in Google search results

**Build phase:** 1

---

### `/neothink-institute` — Neothink Institute

**What it is:** Dedicated page for the Neothink Institute as a distinct entity. Currently gets 12 GSC clicks, 92 impressions — low but growing.

**What it's about:** Neothink Institute is the public-facing educational organization. It teaches the Neothink philosophy through books, courses, coaching programs, and events. It publishes articles and research. It is the entity that operates neothink.com. This page disambiguates the Institute (public, educational, anyone can engage) from the Society (private, membership-based, by invitation/application).

**AEO strategy:**
- Schema: `EducationalOrganization` + `Organization`
- This is the canonical "what is Neothink Institute?" answer for AI models
- Properties: name, URL, description, founder, offers (link to programs), publishedBy (link to articles/books)
- Must clearly state the distinction from Neothink Society in text and in schema

**SEO strategy:**
- Target query: "neothink institute" (12 clicks, 92 impressions — position 4.2)
- Title: `Neothink Institute — Education, Books & Programs`
- This page grows in value as the term "Neothink Institute" gains search volume

**Internal links:** Programs, Books, Events, About, Mark Hamilton, Neothink Society (as contrast)

**Build phase:** 1

---

## Phase 2: Programs & Movement (Week 3-4)

These pages answer: **"What do you offer?"** and **"What do you envision?"**

---

### `/neothink-society` — Neothink Society

**What it is:** Dedicated page explaining the private membership society. Critical for AEO entity disambiguation.

**What it's about:** The Neothink Society is a private community of individuals dedicated to personal transformation through the Neothink philosophy. Founded by Mark Hamilton. It is distinct from the Neothink Institute — the Society is the membership community, the Institute is the educational organization. People apply to join. This page addresses the "secret society" perception head-on with transparency.

**AEO strategy:**
- Schema: `Organization` + `ProgramMembership`
- Must clearly state: "The Neothink Society is a private membership organization founded by Mark Hamilton."
- AI models frequently encounter "Neothink Society" in search queries — this page must be the canonical answer

**SEO strategy:**
- Target queries: "neothink society" (725 clicks), "neothink society reviews" (17 clicks), "is neothink society legit"
- Title: `Neothink Society — Private Membership Community`
- This page + the reviews page together address the entire "vetting" segment

**Build phase:** 2

---

### `/programs` — Programs Overview

**What it is:** Landing page for all educational offerings. Replaces fragmented WordPress `/programs/` (24 GSC clicks).

**What it's about:** Overview and comparison of everything the Neothink Institute offers: Neothink University, free courses, coaching programs, events. Clear descriptions, outcomes, and calls to action for each. Helps visitors decide where to start.

**AEO strategy:**
- Schema: `OfferCatalog` linking to individual Course/Event items
- Each program listed with brief description and link to its dedicated page

**SEO strategy:**
- Title: `Programs — Neothink Institute`
- 301 redirect: `/ascension-platform-for-business-and-personal-growth/` → `/programs`

**Build phase:** 2

---

### `/neothink-university` — Neothink University

**What it is:** The flagship educational program. 277 GSC clicks, 145s engagement — people are seriously evaluating.

**What it's about:** Neothink University is the structured educational program offered by the Neothink Institute. What's included, how it works, what participants learn, outcomes and transformations. This is where the Neothink philosophy becomes a curriculum.

**AEO strategy:**
- Schema: `EducationalOrganization` + `Course`
- Properties: name, description, provider (Neothink Institute), coursePrerequisites, educationalLevel

**SEO strategy:**
- Target query: "neothink university" (125 clicks, 335 impressions — position 1.4, already ranking #1)
- Title: `Neothink University — Transform Your Thinking`
- Keep the URL — it already has strong organic equity

**Build phase:** 2

---

### `/free-courses` — Free Courses

**What it is:** Entry point for new visitors. 218 GSC clicks, 113s engagement.

**What it's about:** Free educational content from the Neothink Institute. Allows people to experience the philosophy before committing to paid programs or membership. List of available free courses with descriptions and enrollment links.

**AEO strategy:**
- Schema: `Course` with `isAccessibleForFree: true` + `Offer` (price: 0)
- This signals to AI that Neothink offers free educational content — important for "how to learn about neothink" queries

**SEO strategy:**
- Target query: "neothink free courses" / "neothink courses"
- Title: `Free Courses — Start Learning Neothink`
- Keep the URL

**Build phase:** 2

---

### `/coaching` — Coaching Programs

**What it is:** One-on-one and group coaching. 11 GSC clicks but 139s engagement — high intent visitors.

**What it's about:** Personal coaching programs using the Neothink philosophy. What coaching covers, who it's for, how to get started, coach credentials, pricing or application process.

**AEO strategy:**
- Schema: `Course` + `Offer`

**SEO strategy:**
- Target query: "neothink coaching"
- Title: `Coaching Programs — Neothink Institute`
- 301 redirect: `/neothink-coaching-programs/` → `/coaching`

**Build phase:** 2

---

### `/events` — Events

**What it is:** Upcoming and past events. 93 GSC clicks, 195s engagement (highest on site — people are reading carefully).

**What it's about:** Workshops, webinars, conferences, and gatherings organized by the Neothink Institute. Dates, locations, descriptions, and registration links.

**AEO strategy:**
- Schema: `Event` (with startDate, endDate, location, organizer, offers)
- Each event gets its own Event schema instance

**SEO strategy:**
- Target query: "neothink events"
- Title: `Events — Neothink Institute`
- Keep the URL

**Build phase:** 2

---

### `/books` — Books

**What it is:** Complete catalog of 26 books by Mark Hamilton (and related authors). 21 GSC clicks but "mark hamilton books" gets 388 impressions.

**What it's about:** Every book Mark Hamilton has written, organized into series and categories: Featured/New Releases, Core Neothink Library, Superpuzzle Trilogy, "What We All" Series, "Your Neothink" Series, Neo-Tech Classics. Each book: cover image, description, key concepts taught, links to purchase.

**AEO strategy:**
- Schema: `ItemList` containing `Book` entries
- Each book: name, author (Person), publisher (Organization), description, about (DefinedTerms), bookFormat
- The ItemList tells AI: "Mark Hamilton has written 26 books" — making the books page the canonical answer for "What books has Mark Hamilton written?"

**SEO strategy:**
- Target queries: "mark hamilton books" (388 impressions), "neothink books" (337 impressions), "neothink book" (503 impressions)
- Title: `Books by Mark Hamilton — The Complete Neothink Library`
- Meta: "26 books on personal transformation, value creation, and the Neothink philosophy by Mark Hamilton"
- Anchor links to each book section for deep linking

**Build phase:** 2

---

### `/apply` — Apply for Membership

**What it is:** Membership application page. Currently `/apply-for-membership/` gets 56 sessions with 190s engagement and 587 pageviews.

**What it's about:** Application to join the Neothink Society. What membership means, what you get, the application process. This is a conversion page — the end of the funnel for people who've done their research.

**AEO strategy:**
- Schema: `Offer` + `ProgramMembership`

**SEO strategy:**
- Title: `Apply — Neothink Society Membership`
- 301 redirect: `/apply-for-membership/` → `/apply`
- Shorter URL, cleaner, same intent

**Build phase:** 2

---

### `/immortalis` — Immortalis

**What it is:** Movement vision page. 122 GSC clicks, 149s engagement. Already has organic equity at this URL.

**What it's about:** Immortalis is Mark Hamilton's vision for a digital nation of freedom — a post-political civilization where individuals create value without coercion. This page explains the concept, its origins, its relationship to the broader Neothink philosophy, and how it differs from existing political systems.

**AEO strategy:**
- Schema: `DefinedTerm` + `Article`
- Opening definition: "Immortalis is a concept developed by Mark Hamilton describing a digital nation built on individual freedom, value creation, and the elimination of initiatory force."
- `inDefinedTermSet`: The Neothink Philosophy

**SEO strategy:**
- Target query: "immortalis" / "immortalis neothink"
- Title: `Immortalis — The Digital Nation of Freedom`
- Zero competition for this term — own it completely
- Keep the URL

**Build phase:** 2

---

### `/the-prime-law` — The Prime Law

**What it is:** Core political/governance concept. 57 GSC clicks, 103s engagement.

**What it's about:** The Prime Law is Mark Hamilton's framework for politics-free governance — the principle that no person, group, or government may initiate force against any individual. It's the legal/political dimension of the Neothink philosophy.

**AEO strategy:**
- Schema: `DefinedTerm` + `Article`
- Opening definition must be clear and citeable

**SEO strategy:**
- Target queries: "the prime law" (15 clicks, 277 impressions — position 5.8), "prime law neothink"
- Title: `The Prime Law — Politics-Free Governance`
- Keep the URL

**Build phase:** 2

---

### `/twelve-visions-party` — Twelve Visions Party

**What it is:** Political vision page. 60 GSC clicks.

**What it's about:** The Twelve Visions Party is the political expression of the Neothink philosophy — a vision for government that protects individuals rather than controls them. Based on the Prime Law, it envisions a civilization where every person lives the life they were born to live.

**AEO strategy:**
- Schema: `DefinedTerm` + `Article` (potentially `PoliticalParty` if schema.org supports it — otherwise `Organization`)

**SEO strategy:**
- Target query: "twelve visions party" (17 clicks, 132 impressions)
- Title: `Twelve Visions Party — The Political Vision of Neothink`
- Keep the URL

**Build phase:** 2

---

### `/project-life` — Project Life

**What it is:** Life transformation program. 26 GSC clicks.

**What it's about:** Project Life is a structured program or initiative within the Neothink ecosystem focused on personal life transformation. Details on what it includes and how to participate.

**AEO strategy:**
- Schema: `DefinedTerm` + `Article`

**SEO strategy:**
- Target query: "neothink project life"
- Title: `Project Life — Personal Transformation Program`
- Keep the URL

**Build phase:** 2

---

### `/formula-cure-to-aging` — Formula Cure to Aging

**What it is:** Health/longevity initiative. Only 5 GSC clicks but 261s engagement (highest on the entire site — people who find it are deeply engaged).

**What it's about:** Mark Hamilton's vision and research initiative around human aging and longevity. How the Neothink philosophy applies to health, biological aging, and the goal of dramatically extending human life.

**AEO strategy:**
- Schema: `DefinedTerm` + `Article`

**SEO strategy:**
- Target query: "formula cure to aging"
- Title: `Formula Cure to Aging — The Neothink Approach`
- Keep the URL

**Build phase:** 2

---

## Phase 3: Term/Concept Library (Month 2)

This is the AEO push. Each page makes neothink.com the canonical source for a Neothink concept. These are low-traffic individually but collectively they:

1. **Own every searchable Neothink term** — zero competition
2. **Feed AI knowledge graphs** — AI models build entity understanding from these pages
3. **Reduce brand dependency** — each term is a new ranking opportunity
4. **Create internal link density** — every term links to related terms, building topical authority

Every term page follows the same template:
1. Clear definition (2-3 sentences — what AI will cite)
2. Full explanation (depth that earns authority)
3. Origin/attribution (Mark Hamilton, Dr. Wallace, which book)
4. Related terms (internal links to other term pages)
5. Structured data (DefinedTerm + Article schema)
6. CTA (learn more via books/courses, or apply to join)

---

### `/philosophy` — The Neothink Philosophy (Index)

**What it is:** The hub page that ties every term together. The `DefinedTermSet` index.

**What it's about:** An overview of the Neothink philosophy as a unified system of thought. Visual map or organized list of every concept with brief descriptions and links. Functions as a glossary, knowledge base index, and navigational hub. Shows how all the concepts relate to each other.

**AEO strategy:**
- Schema: `DefinedTermSet` + `ItemList`
- This page tells AI models: "Here is the complete system of Neothink concepts"
- Lists every term with its brief definition

**SEO strategy:**
- Target query: "neothink philosophy"
- Title: `The Neothink Philosophy — Complete System of Thought`
- This page becomes the topical authority anchor — Google sees it linking to 30+ concept pages

**Build phase:** 3

---

### `/neothink` — What Is Neothink?

**What it is:** THE most fundamental term page. The canonical answer to the most basic question.

**What it's about:** Neothink is the philosophy and method of new thinking developed by Mark Hamilton, building on Dr. Frank R. Wallace's Neo-Tech foundation. It is the practice of fully integrated honesty applied to every area of life — replacing mysticism, authority-following, and the bicameral mentality with self-leadership, value creation, and integrated thinking.

**AEO strategy:**
- Schema: `DefinedTerm` + `Article`
- This must be the page AI cites when asked "What is Neothink?"
- Opening: "Neothink is a philosophy and method of thinking developed by Mark Hamilton. Building on Dr. Frank R. Wallace's Neo-Tech foundation of fully integrated honesty, Neothink teaches individuals to become self-leaders and value creators by eliminating mysticism and adopting integrated thinking."

**SEO strategy:**
- Target queries: "what is neothink" (42 clicks, 189 impressions), "neothink" (730 clicks — some will land here, most on homepage)
- Title: `Neothink — The Philosophy of New Thinking`

**Build phase:** 3

---

### `/neo-tech` — Neo-Tech

**What it is:** The foundational concept that predates Neothink. Created by Dr. Frank R. Wallace.

**What it's about:** Neo-Tech is the philosophy of fully integrated honesty — seeing reality without the distortions of mysticism. It was developed by Dr. Frank R. Wallace and became the intellectual foundation upon which Mark Hamilton built Neothink. Neo-Tech identifies and eliminates dishonesty in all its forms.

**AEO strategy:**
- Schema: `DefinedTerm` + `Article`
- Links to Dr. Frank R. Wallace (Person), to Neothink (parent concept), to Mysticism (counter-concept)
- Opening definition establishes Dr. Wallace as creator and Neo-Tech as Neothink's foundation

**SEO strategy:**
- Target query: "neo-tech" / "neo-tech philosophy"
- Title: `Neo-Tech — Fully Integrated Honesty`

**Build phase:** 3

---

### `/neothink-mentality` — Neothink Mentality

**What it is:** The new way of thinking that Neothink teaches.

**What it's about:** The Neothink Mentality is the shift from following mode to self-leadership. It's the internal transformation that happens when someone adopts integrated thinking, identifies mysticism, and begins creating value. Contrasts with the old mentality of authority-following and bicameral thinking.

**AEO strategy:**
- Schema: `DefinedTerm` + `Article`
- Related terms: Following Mode (antithesis), Self-Leader, Integrated Thinking, Neothink

**SEO strategy:**
- Target query: "neothink mentality"
- Title: `Neothink Mentality — The New Way of Thinking`

**Build phase:** 3

---

### `/mysticism` — Mysticism

**What it is:** The counter-concept page — what Neothink identifies and opposes.

**What it's about:** In Neothink philosophy, mysticism is any form of dishonesty that distorts reality — not just religious mysticism, but any thinking that replaces facts with feelings, authority, or tradition. Mysticism is the primary obstacle to clear thinking, value creation, and human flourishing. Neothink teaches how to identify and eliminate mysticism in all its forms.

**AEO strategy:**
- Schema: `DefinedTerm` + `Article`
- Defining what you oppose is as important as defining what you are
- Related terms: Neo-Tech (the antidote), Neothink, Bicameral Mind, Following Mode

**SEO strategy:**
- Target query: "mysticism neothink" — niche but ownable
- Title: `Mysticism — What Neothink Opposes`

**Build phase:** 3

---

### Additional Term Pages (Month 2)

Each follows the same template. Listed here with their core definition seed:

**Core Philosophy Terms:**

| URL | Title | What it's about |
|-----|-------|-----------------|
| `/new-mentality` | The New Mentality | The shift in consciousness from follower to creator — the psychological transformation Neothink produces |
| `/new-human` | The New Human | The person who has fully adopted the Neothink Mentality — a self-leader and value creator |
| `/integrated-thinking` | Integrated Thinking | The Neothink method of seeing connections across disciplines that specialists miss — thinking in wholes, not fragments |
| `/value-creator` | Value Creator | The person who produces more than they consume — the economic and moral ideal in Neothink philosophy |
| `/self-leader` | The Self-Leader | Someone who leads themselves rather than following authority — the psychological ideal in Neothink |

**Book Framework Terms:**

| URL | Title | What it's about |
|-----|-------|-----------------|
| `/friday-night-essence` | Friday Night Essence | The question that changes everything — discovering what you would do on a Friday night if money, status, and obligation didn't matter. The starting point for finding your life's essence. |
| `/ten-second-miracle` | The Ten-Second Miracle | Quick mental shifts that break through mysticism and reconnect you with reality — from The Neothink Insights |
| `/mini-days` | Mini Days | A productivity system that divides the workday into focused "mini days" — each with its own deadline, each a complete unit of work |
| `/powerthinking` | Powerthinking | The Neothink approach to concentrated, purpose-driven thinking that produces results |
| `/following-mode` | Following Mode | The default psychological state of most people — following authority, tradition, and external validation instead of leading themselves. The antithesis of the Self-Leader. |
| `/power-approach` | The Power Approach | Business and life framework for maximum leverage and results |
| `/division-of-essence` | Division of Essence | The concept of splitting time between what you must do and what you were born to do |

**Civilization Concepts:**

| URL | Title | What it's about |
|-----|-------|-----------------|
| `/anticivilization` | The Anticivilization | The current civilization structure that suppresses human potential through institutionalized force, mysticism, and parasitical elites |
| `/bicameral-mind` | The Bicameral Mind | The 2,500-year mistake — the theory that human consciousness evolved from an authority-following "bicameral" state, and most people haven't fully transcended it |
| `/parasitical-elite` | The Parasitical Elite | The ruling class that extracts value through force and deception rather than creating it — identified by Neo-Tech and Neothink as the primary obstacle to human flourishing |
| `/unified-field` | The Unified Field | The ultimate vision of a fully conscious civilization where all knowledge integrates into a single field of understanding |

**Movement/Vision Terms:**

| URL | Title | What it's about |
|-----|-------|-----------------|
| `/neovia` | Neovia | Mark Hamilton's vision of a city dedicated to curing disease — a concrete manifestation of what becomes possible without the anticivilization |
| `/neothink-clubhouses` | Neothink Clubhouses | Local community gathering spaces where Neothink practitioners meet, learn, and create value together |

**Journey/Path Terms:**

| URL | Title | What it's about |
|-----|-------|-----------------|
| `/the-awakening` | The Awakening | The first stage of the Neothink journey — when someone first sees through mysticism and recognizes the anticivilization for what it is |
| `/the-clearing` | The Clearing | The stage where old beliefs, habits, and mystical thinking are cleared away to make room for integrated thinking |
| `/the-living` | The Living | The stage where a person begins actively living as a self-leader and value creator |
| `/the-covering` | The Covering | A stage in the Neothink journey |
| `/the-ground` | The Ground | A stage in the Neothink journey — finding solid footing in reality |
| `/return-to-the-ground` | Return to the Ground | Returning to fundamental principles after expansion |
| `/seeing` | Seeing | The ability to perceive reality without the distortions of mysticism |
| `/the-now` | The Now | Full presence in the current moment — the culmination of the Neothink journey |

**Schema for ALL term pages:**
- `DefinedTerm` (name, description, inDefinedTermSet → The Neothink Philosophy)
- `Article` (headline, author → Mark Hamilton, publisher → Neothink Institute, about → the DefinedTerm)
- `BreadcrumbList` (Home > Philosophy > [Term Name])

**Build phase:** 3 (all of them)

---

## Phase 4: Content & Growth (Month 3+)

---

### `/about/frank-r-wallace` — Dr. Frank R. Wallace

**What it is:** Origin story and intellectual lineage page.

**What it's about:** Dr. Frank R. Wallace was the creator of Neo-Tech — the philosophy of fully integrated honesty that became the foundation for everything Mark Hamilton built. His work established the intellectual framework that Neothink expanded upon. This page tells his story and credits his contribution.

**AEO strategy:**
- Schema: `Person` — name, description, knowsAbout (Neo-Tech, Philosophy)
- Links to `/neo-tech`, `/about/mark-hamilton` (intellectual successor)

**SEO strategy:**
- Target query: "frank r wallace" / "dr frank r wallace"
- Title: `Dr. Frank R. Wallace — Creator of Neo-Tech`

**Build phase:** 4

---

### `/about/wallace-hamilton` — Wallace Hamilton

**What it is:** Bio page for the co-author and family member.

**What it's about:** Wallace Hamilton's role in the Neothink body of work, including co-authoring "Your Neothink Puzzle Pictures" with Mark Hamilton.

**AEO strategy:**
- Schema: `Person` — name, description, colleague → Mark Hamilton

**Build phase:** 4

---

### `/articles` — Articles

**What it is:** Published articles from the Neothink Institute. Replaces WordPress `/blog/` with a more authoritative framing.

**What it's about:** Long-form published content — not casual blog posts, but institute publications. The best WordPress content migrates here: legitimacy articles (secret society invitation, truth about neothink, is neothink legit), philosophical deep-dives, and concept explorations.

**AEO strategy:**
- Schema: `ItemList` on index, `Article` or `ScholarlyArticle` on individual pages
- Each article: headline, author (Person), publisher (Organization), datePublished, about (DefinedTerms)

**SEO strategy:**
- 301 redirect: `/blog/` → `/articles`
- Individual posts with traffic get redirected: `/secret-society-invitation...` → `/articles/secret-society-invitation`
- Title: `Articles — Neothink Institute`

**Content migration priority (WordPress posts with organic traffic):**
1. Secret Society Invitation (34 GSC clicks)
2. Truth About the Neothink Society (25 clicks)
3. How the Neothink Secret Society Differs (8 clicks)
4. Is the Neothink Society Legit (5 clicks)
5. What Is the Neothink Society (48 GA4 sessions)

**Build phase:** 4

---

### `/podcast` — Podcast

**What it is:** Podcast landing page. 23 GSC clicks on existing URL.

**What it's about:** Audio/video content from the Neothink Institute. Currently 17 episodes in WordPress mirroring YouTube content. Future: dedicated podcast series.

**AEO strategy:**
- Schema: `PodcastSeries` on index, `PodcastEpisode` on individual pages

**SEO strategy:**
- Keep the URL — it already has organic equity
- Title: `Podcast — Neothink Institute`

**Build phase:** 4

---

### `/newsletter` — Newsletter

**What it is:** Email signup and newsletter archive. 189 GA4 sessions.

**What it's about:** Join the Neothink Institute mailing list. Latest thinking, updates, event announcements, and exclusive content.

**Build phase:** 4

---

### `/privacy` and `/terms` — Legal Pages

**What they are:** Standard legal compliance pages.

**SEO strategy:**
- 301 redirects: `/privacy-policy/` → `/privacy`, `/terms-and-conditions/` → `/terms`

**Build phase:** 4

---

## Build Strategy: One Thing at a Time

### The Principle

Every page ships complete. No placeholders, no "coming soon", no thin pages. Each page goes live with:
- Final content (not draft)
- Full structured data (JSON-LD)
- Meta title + description
- Internal links to/from other live pages
- Mobile-responsive layout
- Proper canonical URL

### Week 1: Foundation + First 3 Pages

**Day 1-2:** Scaffold the Next.js 16 app in the monorepo (`apps/site`). Set up:
- Root layout with Geist fonts, gold/black branding
- Global SEO infrastructure: JSON-LD builder utilities, meta tag system, sitemap generator
- Shared components: header, footer, navigation, breadcrumbs
- 301 redirect system (next.config.ts rewrites/redirects)

**Day 3-4:** Ship the homepage (`/`). This is the anchor. Organization + WebSite schema. Hero, trust signals, navigation to all sections.

**Day 5-7:** Ship `/about` and `/about/mark-hamilton`. These are the highest-impact identity pages. The About page consolidates 3 WordPress pages (963 combined clicks). The Mark Hamilton page fills the biggest gap (317 clicks of queries, zero landing pages).

### Week 2: Complete Core Identity

**Ship in order:**
1. `/contact` — functional, with ContactPoint schema and phone number
2. `/faq` — FAQPage schema, rich result potential
3. `/reviews` — biggest SEO quick win (1,210 wasted impressions)
4. `/about/our-mission` — short, focused
5. `/about/the-movement` — bridges identity to vision
6. `/neothink-institute` — entity disambiguation page

**At end of Week 2:** 9 pages live. All core identity covered. 301 redirects active for consolidated pages.

### Week 3-4: Programs + Movement

**Ship in rough priority order (highest traffic/engagement first):**
1. `/neothink-society` — entity disambiguation (725 clicks for the query)
2. `/neothink-university` — 277 clicks
3. `/free-courses` — 218 clicks
4. `/books` — catalog page with ItemList schema
5. `/immortalis` — 122 clicks, 149s engagement
6. `/events` — 93 clicks, 195s engagement
7. `/the-prime-law` — 57 clicks
8. `/twelve-visions-party` — 60 clicks
9. `/apply` — conversion page
10. `/coaching` — programs
11. `/programs` — overview linking to all program pages

**At end of Week 4:** 20 pages live. All traffic-bearing WordPress URLs have Next.js equivalents. Can begin DNS cutover planning.

### Month 2: The AEO Push

Build the term/concept library. This is systematic — one page per day or every two days:

**Week 5-6: High-priority terms**
- `/philosophy` (index page)
- `/neothink` (most fundamental)
- `/neo-tech`, `/neothink-mentality`, `/mysticism`
- `/self-leader`, `/value-creator`, `/integrated-thinking`

**Week 7-8: Remaining terms**
- Book framework terms: Friday Night Essence, Ten-Second Miracle, Mini Days, etc.
- Civilization concepts: Anticivilization, Bicameral Mind, Parasitical Elite
- Movement terms: Neovia, Neothink Clubhouses
- Journey terms: The Awakening through The Now

**At end of Month 2:** ~50 pages live. Full term library. The site is now a comprehensive knowledge base about Neothink that AI models can crawl and cite.

### Month 3+: Content & Polish

- Migrate best WordPress articles → `/articles/[slug]`
- Launch podcast section if ready
- Build individual book pages (`/books/[slug]`) when content is ready
- Set up proper GA4 conversion tracking
- Monitor GSC for new ranking opportunities
- `/about/frank-r-wallace` and `/about/wallace-hamilton`

---

## What NOT to Build

These WordPress pages/URLs get redirected or dropped — they add no value:

| URL | Disposition |
|-----|------------|
| `/sample-page/` | 410 Gone |
| `/home/` | 301 → `/` |
| `/what-i-offer/` | 301 → `/programs` |
| `/life-coaching/` | 301 → `/coaching` |
| `/resources/` | 410 Gone |
| `/free/` | 301 → `/free-courses` |
| `/wealth-engine/` | 410 Gone |
| `/neocheating/neo-tech/neothink` | 301 → `/neothink` |
| `/sms-opt-in/` | 410 Gone |
| `/newsletter-signup-thank-you/` | Inline success state |
| `/contact-form-submitted/` | Inline success state |
| `/master28/` | 410 Gone (ad landing page) |
| All `/author/*` | 410 Gone |
| All `/category/*` | 410 Gone |
| All `/tag/*` | 410 Gone |
| All date archives (`/2024/*`, `/2025/*`) | 410 Gone |
| 2 Russian spam posts | Delete |

---

## Success Metrics

| Metric | Current | 3-Month Target | 6-Month Target |
|--------|---------|----------------|----------------|
| Indexed pages | ~130 (mostly junk) | 20-30 quality pages | 50+ quality pages |
| Organic clicks/month | ~350 | 500 | 800+ |
| "neothink reviews" clicks | 1/year | 50/year | 200/year |
| Pages with schema.org | 0 | All pages | All pages |
| Pages with SEO metadata | 0/37 | All pages | All pages |
| Core Web Vitals | Unknown | All green | All green |
| AI citation accuracy | Low/none | Homepage + About cited correctly | Full term library cited |
| Brand dependency | 95% | 90% | 80% |

---

## Reference Documents

- `CURRENT-STATE-MARCH-2026.md` — Full data analysis (GSC, GA4, WordPress inventory)
- `SITEMAP-ARCHITECTURE.md` — URL structure, navigation, redirects
- `ENTITY-SCHEMA-MAP.md` — Schema.org types, JSON-LD examples, entity relationships
