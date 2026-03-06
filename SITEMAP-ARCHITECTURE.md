# Neothink.com — Site Architecture

**Date:** March 6, 2026
**Companion to:** CURRENT-STATE-MARCH-2026.md

---

## Design Principles

1. **Every page earns its place.** No thin pages, no duplicates, no placeholders.
2. **Flat where it matters.** Movement concepts and terms get top-level URLs — they're the product.
3. **Consolidate competing pages.** One About page, one Reviews page, one Books page.
4. **SEO equity preserved.** Any WordPress URL with organic traffic gets a 301 redirect to the new equivalent.
5. **AEO-first on term pages.** Each term page is the canonical answer when AI is asked about that concept.
6. **Room to grow.** Articles, podcast, and video sections can be added without restructuring.

---

## Primary Navigation

```
Neothink Institute
├── About          → /about
├── Philosophy     → /philosophy (index linking to all term pages)
├── Programs       → /programs
├── Books          → /books
├── Reviews        → /reviews
├── Contact        → /contact
└── [CTA Button]   → /apply or /free-courses
```

7 items max. Clean, scannable. The CTA button rotates based on business priority (masterclass signup, membership application, free courses, etc.)

---

## Full Sitemap

### Root

```
/                                    Homepage
```

**Purpose:** First impression for 20K+ annual visitors. Hero with clear value proposition, trust signals, featured content, newsletter CTA. Organization + WebSite schema.

**Consolidates:** WordPress `/` + `/home/`

---

### About Section

```
/about                               About Neothink — the organization
/about/mark-hamilton                  Mark Hamilton — author, creator, founder
/about/frank-r-wallace               Dr. Frank R. Wallace — origin story
/about/wallace-hamilton               Wallace Hamilton
/about/our-mission                   Mission statement
/about/the-movement                  The broader movement
```

**Purpose:** Answer "Who are you?" and "Can I trust you?" — the two questions 80% of visitors are asking.

**Why this structure:**
- `/about` consolidates 3 competing pages (/about, /about-us, /about-neothink → 963 combined GSC clicks)
- `/about/mark-hamilton` is NEW — "mark hamilton neothink" gets 317 GSC clicks with no dedicated page
- `/about/frank-r-wallace` establishes origin and intellectual lineage (Person schema)
- Sub-pages under /about keep the section organized while each page stands alone for SEO

**Schema:** Organization, Person (for each individual), BreadcrumbList

**Redirects:**
- `/about-us/` → `/about`
- `/about-neothink/` → `/about`
- `/our-mission/` → `/about/our-mission`
- `/the-movement/` → `/about/the-movement`

---

### Philosophy Section (Term/Entity Hub)

```
/philosophy                          Index — "The Neothink Philosophy" overview
```

**Term Pages (top-level URLs for SEO weight):**

Core Terms:
```
/neothink                            What is Neothink?
/neothink-mentality                  Neothink Mentality — the new way of thinking
/neo-tech                            Neo-Tech — fully integrated honesty
/mysticism                           Mysticism — what Neothink opposes
```

Movement Vision:
```
/immortalis                          Immortalis — the digital nation
/neovia                              Neovia — the city that cures disease
/the-prime-law                       The Prime Law — politics-free governance
/twelve-visions-party                Twelve Visions Party — political vision
/project-life                        Project Life
/formula-cure-to-aging               Formula Cure to Aging
```

Book Frameworks:
```
/friday-night-essence                Friday Night Essence
/ten-second-miracle                  Ten-Second Miracle
/self-leader                         The Self-Leader Secret
/value-creator                       Value Creator
/integrated-thinking                 Integrated Thinking
/mini-days                           Mini Days — productivity system
/powerthinking                       Powerthinking
/following-mode                      Following Mode — what to break free from
/division-of-essence                 Division of Essence
```

Civilization Concepts:
```
/anticivilization                    The Anticivilization
/bicameral-mind                      The Bicameral Mind
/parasitical-elite                   The Parasitical Elite Ruling Class
```

Journey Terms:
```
/the-awakening                       The Awakening
/the-clearing                        The Clearing
/the-living                          The Living
```

**Why top-level URLs for terms:**
- These ARE the product. "Neothink Mentality" is as important as any program page.
- Short URLs rank better and look authoritative in search results and AI citations.
- WordPress already has `/immortalis`, `/the-prime-law`, `/twelve-visions-party` at top level with organic traffic — changing them would lose equity.
- Zero URL-level competition for any of these terms.

**Purpose per term page:**
1. Clear definition (2-3 sentences — what AI will cite)
2. Full explanation (the depth that earns authority)
3. Origin/attribution (Mark Hamilton, Dr. Wallace, which book)
4. Related terms (internal links to other term pages)
5. Structured data (DefinedTerm or Article schema)
6. CTA (learn more via books/courses, or join)

**The `/philosophy` index page:**
- Overview of the Neothink philosophy as a unified system
- Visual map or organized list of all terms with brief descriptions
- Links to every term page
- Functions as a glossary/knowledge base index

---

### Programs Section

```
/programs                            Programs overview / comparison
/neothink-university                 Neothink University
/free-courses                        Free courses
/coaching                            Coaching programs
/events                              Upcoming events
/apply                               Membership application
```

**Purpose:** Answer "What do you offer?" for people ready to engage.

**Why this structure:**
- `/programs` is the new landing page (replaces fragmented WordPress `/programs/` with 24 GSC clicks)
- `/neothink-university` keeps its URL (277 GSC clicks, 145s engagement)
- `/free-courses` keeps its URL (218 GSC clicks)
- `/coaching` consolidates `/neothink-coaching-programs/` (shorter, cleaner URL)
- `/events` keeps its URL (93 GSC clicks, 195s engagement — highest engagement on site)
- `/apply` replaces `/apply-for-membership/` (shorter, cleaner)

**Schema:** Course, Event, EducationalOrganization

**Redirects:**
- `/neothink-coaching-programs/` → `/coaching`
- `/apply-for-membership/` → `/apply`
- `/ascension-platform-for-business-and-personal-growth/` → `/programs`

---

### Books

```
/books                               Book catalog with structured data
/books/[slug]                        Individual book pages (future, when ready)
```

**Purpose:** Answer "What are the books? Where do I get them?" — "mark hamilton books" gets 388 impressions.

**Schema:** Book, Person (author), ItemList

**What's on the page:** Each book with cover image, description, key concepts, link to purchase. Not individual pages initially — one comprehensive catalog page with anchor links per book.

---

### Reviews

```
/reviews                             Reviews and testimonials
```

**Purpose:** Answer "What do other people think?" — THE biggest untapped SEO opportunity.

**Why this matters:**
- "neothink reviews" → 1,210 impressions, 1 click, position 16.6
- "neothink society reviews" → 269 impressions, 17 clicks, position 5.3
- `/neothink-reviews/` gets 71 GA4 sessions with 132s avg engagement (people read carefully)
- Currently split across `/testimonials/`, `/neothink-reviews/`, `/customer-testimonials/`

**Schema:** Review, AggregateRating

**Redirects:**
- `/testimonials/` → `/reviews`
- `/neothink-reviews/` → `/reviews`
- `/customer-testimonials/` → `/reviews`
- All `/testimonial/*` individual URLs → `/reviews`

---

### Contact & Trust

```
/contact                             Contact form + phone + address
/faq                                 FAQ with FAQPage schema
/newsletter                          Newsletter signup
```

**Purpose:** Trust signals and conversion points.

**Schema:** FAQPage (on /faq), ContactPoint (on /contact)

---

### Articles (Phase 2 — added when ready)

```
/articles                            Article index
/articles/[slug]                     Individual articles
```

**Purpose:** Long-form published content. Replaces WordPress `/blog/` with a more authoritative framing ("articles" = institute publishing, "blog" = casual).

**What migrates here:**
- Best legitimacy content (secret society invitation, is neothink legit, truth about neothink)
- Best philosophical content (from Philosophy/Awakening categories)
- NOT the generic SEO content (feeling stuck, financial habits) — that's not on-brand for an institute

**Schema:** Article, BlogPosting, BreadcrumbList

**Redirect:**
- `/blog/` → `/articles`
- Individual post URLs → `/articles/[same-slug]` (301 redirects for any with traffic)

---

### Podcast (Phase 3 — when launched)

```
/podcast                             Podcast landing page
/podcast/[slug]                      Individual episodes
```

**Redirect:** `/podcast/` already has 23 GSC clicks. Keep the URL.

---

### Legal

```
/privacy                             Privacy policy
/terms                               Terms and conditions
```

**Redirects:**
- `/privacy-policy/` → `/privacy`
- `/terms-and-conditions/` → `/terms`

---

### Infrastructure (not in navigation)

```
/sitemap.xml                         Dynamic sitemap (all indexed pages)
/robots.txt                          Allow all, point to sitemap
/feed.xml                            RSS feed for articles
/opengraph-image                     Default OG image
```

---

## What Gets Cut (Not Rebuilt)

These WordPress pages/URLs should NOT be rebuilt — they add no value:

| URL | Reason |
|-----|--------|
| `/sample-page/` | Default WordPress page |
| `/home/` | Duplicate of `/` |
| `/what-i-offer/` | Redundant with `/programs` |
| `/life-coaching/` | Redundant with `/coaching` |
| `/resources/` | Vague, low traffic |
| `/free/` | Unclear purpose |
| `/wealth-engine/` | Internal tool, not public page |
| `/neocheating/neo-tech/neothink` | Old URL pattern from legacy site |
| `/sms-opt-in/` | Internal form, not a page |
| `/newsletter-signup-thank-you/` | Becomes a success state in the newsletter component |
| `/contact-form-submitted/` | Becomes a success state in the contact form |
| `/master28/` | Landing page, move to ad-specific routing |
| All `/author/*` URLs | WordPress artifact, no value |
| All `/category/*` URLs | WordPress artifact, no value |
| All `/2024/*` and `/2025/*` date URLs | WordPress date archives, no value |
| All `/tag/*` URLs | WordPress artifact, no value |
| 2 Russian spam posts | Delete |

These get either a 301 to the nearest relevant page or a 410 (gone) signal.

---

## Phasing

### Now (Week 1-2): Ship the Institute

Pages: `/`, `/about`, `/about/mark-hamilton`, `/contact`, `/faq`, `/reviews`

This covers the primary use case: someone from an ad/webinar visits, sees a professional institute site, reads about who we are, checks reviews, contacts us.

### Week 3-4: Programs & Movement

Pages: `/programs`, `/neothink-university`, `/free-courses`, `/coaching`, `/events`, `/apply`, `/books`

Plus movement vision pages: `/immortalis`, `/the-prime-law`, `/twelve-visions-party`, `/project-life`

### Month 2: Term Pages (AEO push)

All term/concept pages: `/neothink`, `/neothink-mentality`, `/neo-tech`, `/integrated-thinking`, `/value-creator`, `/self-leader`, `/friday-night-essence`, etc.

Plus the `/philosophy` index page linking them all together.

### Month 3+: Content Sections

- `/articles` with curated WordPress migration
- `/podcast` when launched
- `/about/frank-r-wallace`, `/about/wallace-hamilton`
- Additional term pages as needed
- `/newsletter` archives

---

## Total Page Count by Phase

| Phase | Pages | Cumulative |
|-------|-------|------------|
| Week 1-2 | 6 | 6 |
| Week 3-4 | 11 | 17 |
| Month 2 | ~25 terms + index | ~43 |
| Month 3+ | Articles + remaining | ~60-80 |

Compare to WordPress: 37 pages + 114 posts = 151 URLs, of which Google only indexes ~130 and only ~25 get any traffic.

**Fewer pages, all high-quality, all indexed, all earning their place.**

---

## Structured Data Map

| Page Type | Schema Types |
|-----------|-------------|
| Homepage | Organization, WebSite, SiteNavigationElement |
| About pages | Organization, Person |
| Mark Hamilton | Person, author of Book |
| Term pages | Article or DefinedTerm, BreadcrumbList |
| Programs | Course, EducationalOrganization |
| Events | Event |
| Books | Book, ItemList, Person (author) |
| Reviews | Review, AggregateRating |
| FAQ | FAQPage |
| Articles | Article, BlogPosting, BreadcrumbList |
| Contact | ContactPoint |
| All pages | BreadcrumbList |
