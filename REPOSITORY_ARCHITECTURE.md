# Neothink Repository Architecture Guide

**Complete navigation for the Neothink ecosystem**

---

## 🏗️ **Repository Overview**

### Current Location: `neothink-com` (Research Hub)
**You are here:** Strategic research and planning repository

### Architecture Map
```
~/dev/active/neothink/
├── neothink-web/          🌐 IMPLEMENTATION - Modern Next.js 15.5 application
├── neothink-supabase/     🗄️ BACKEND - Database, auth, edge functions
├── neothink-admin/        🔧 ADMIN - Internal management interface
├── neothink-com/          📊 RESEARCH - Strategic planning hub (this repo)
└── neothink-mobile/       📱 MOBILE - Future mobile application
```

---

## 📍 **Quick Navigation**

### Need to Work on Implementation?
→ **`cd ../neothink-web`** - Modern Next.js application with React 19.1
- **Status:** ✅ Fully implemented AI-native application
- **Features:** Complete app router, 25+ pages, shadcn/ui components
- **Ready for:** Production deployment and content migration

### Need Database/Backend Work?
→ **`cd ../neothink-supabase`** - Production-ready Supabase backend
- **Status:** ✅ Advanced multi-tenant architecture
- **Features:** 30+ migrations, edge functions, AI vector database
- **Ready for:** Edge function deployment and AI tool generation

### Need Admin Interface?
→ **`cd ../neothink-admin`** - Internal administration tools
- **Status:** ⚠️ Scripts configured, UI application needed
- **Features:** Working GHL/Intercom integrations, AI configuration
- **Needs:** Next.js application structure (follow neothink-web pattern)

### Need Strategic Research?
→ **Stay here** - `neothink-com` contains comprehensive research
- **Status:** ✅ World-class SEO and strategic analysis
- **Purpose:** Foundation and planning for all implementations

---

## 🔄 **Workflow Integration**

### Development Workflow
1. **Plan here:** Use neothink-com research and documentation
2. **Implement in:** neothink-web (website) or neothink-admin (internal tools)
3. **Backend support:** neothink-supabase provides shared infrastructure

### Content Migration Workflow
1. **Source:** WordPress analysis in `neothink-com/performance/`
2. **Planning:** SEO migration strategy in `neothink-com/research/`
3. **Execution:** Content migration to `neothink-web` application
4. **Tracking:** Performance monitoring in `neothink-com/data/tracking/`

---

## 📊 **Data Sources & References**

### Analytics Data (Verified)
- **Location:** `data/baseline/baseline-data/`
- **Key Metrics:** 4,256 organic clicks, 3,703 users, 21,137 total users
- **Period:** September 2024 - September 2025

### Strategic Documents
- **SEO Master Plan:** `research/seo-strategy/seo-intelligence-master-report-2025.md`
- **Revenue Projections:** `research/seo-strategy/funnel-integrated-seo-strategy.md`
- **Tech Stack Research:** `modern-tech-stack/` directory

### Implementation Guides
- **Priority Actions:** `actions/high-priority/` and `actions/medium-priority/`
- **Current Focus:** `actions/current-focus/`

---

## 🚀 **Getting Started by Role**

### Developers
1. **Review architecture:** This file + `modern-tech-stack/NEOTHINK-ADOPTION.md`
2. **Set up environment:** `modern-tech-stack/RUNBOOK.md`
3. **Start coding:** Switch to `neothink-web` or `neothink-admin`

### Content Strategists
1. **Current performance:** `SEO-CURRENT-STATUS.md`
2. **Strategic foundation:** `research/seo-strategy/`
3. **Implementation plan:** `actions/` directories

### Business Stakeholders
1. **Executive overview:** `START-HERE.md`
2. **Performance data:** `data/reports/performance-dashboard.md`
3. **Revenue projections:** `research/seo-strategy/funnel-integrated-seo-strategy.md`

### AI Assistants (Claude Code)
1. **Session context:** `PROJECT-CONTEXT.md`
2. **Current status:** `SEO-CURRENT-STATUS.md`
3. **Architecture map:** This file
4. **Data verification:** `DATA_VERIFICATION_CRITICAL_FINDINGS.md`

---

## ⚡ **Common Commands**

### Switch to Implementation
```bash
cd ../neothink-web && npm run dev
```

### Check Backend Status
```bash
cd ../neothink-supabase && supabase status
```

### Review Admin Integrations
```bash
cd ../neothink-admin && npm run test
```

### Return to Research Hub
```bash
cd ../neothink-com
```

---

## 🎯 **Current Priorities**

### Immediate (This Week)
1. **Deploy neothink-web** to production
2. **Migrate content** from WordPress to neothink-web
3. **Build admin UI** following neothink-web patterns

### Strategic (This Month)
1. **Activate AI features** in all applications
2. **Implement SEO strategies** from research
3. **Establish monitoring** workflows

---

**Quick Reference:**
- 🌐 **Implementation:** `../neothink-web/`
- 🗄️ **Backend:** `../neothink-supabase/`
- 🔧 **Admin:** `../neothink-admin/`
- 📊 **Research:** `./` (you are here)

**Last Updated:** September 22, 2025