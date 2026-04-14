<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

For Neothink Institute **voice, vocabulary, colors, typography, and page patterns**, read `docs/brand/NTI-Brand-Guidelines.md` before writing or migrating marketing pages.

## WordPress blog posts: agency vs in-house

Use the post’s WordPress **published date** (`date` from the REST API, not only `modified`):

- **Before 2025-12-01:** Created by the former SEO agency. **Preserve their work:** migrate copy, headings, and SEO structure faithfully from WordPress (REST `content.rendered` or a saved HTML snapshot). Prefer light cleanup only (encoding, broken links, obvious spam, legal/medical safety). Do **not** rewrite for Institute voice unless the stakeholder explicitly requests a post-by-post pass.
- **2025-12-01 and later:** In-house (project owner). Still migrate from source, but editorial alignment with `docs/brand/NTI-Brand-Guidelines.md` is allowed when asked.

When adding a migrated post, note the era in the data module file header, e.g. `Agency-era post (published YYYY-MM-DD). Source-faithful migration.` or `In-house post (published YYYY-MM-DD).`
