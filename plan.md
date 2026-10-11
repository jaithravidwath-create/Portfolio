# JVK Portfolio — implementation plan

## Product scope

Build a single-page, content-rich personal portfolio for **Jaithra Vidwath Kavuri** with eight anchored sections: Home, About, Resume, Skills, Projects, Interests, Work Experience, and Contact. The portfolio must accurately use only the supplied profile facts, provide working external/contact links, gracefully handle a missing `/resume.pdf`, and include a resilient Ask JVK chatbot backed by a server-side OpenAI-compatible API when configured.

## Implementation approach

- **Stack:** React + TypeScript + Vite for a small, maintainable client; one Express server entrypoint that serves the Vite production output and exposes `POST /api/chat`.
- **Data model:** `src/data/profile.ts` is the single source of truth for personal facts, public profiles, contact details, resume path, skills, interests, projects, and verified chatbot knowledge. Components render from this data rather than duplicating copy.
- **Frontend structure:** `src/App.tsx` owns the single-page composition and section-observer state. Small presentational components live in `src/components/` for the navigation dock, hero, section header, project visuals, chatbot, and reusable link/button elements. `src/styles.css` contains the design system and responsive states without a CSS framework to keep the bundle lean.
- **Backend:** `server/index.ts` validates message arrays and a 2,000-character user-message limit, applies a lightweight in-memory per-IP cooldown, loads `OPENAI_API_KEY` and optional `OPENAI_API_BASE`/`OPENAI_MODEL` only on the server, and sends a tightly scoped system prompt containing the verified profile facts. If no key is configured, the endpoint returns an explicit configuration message plus a clearly labeled rule-based response for common questions. Errors are JSON and never crash the portfolio.
- **Resume:** `public/resume.pdf` is intentionally absent until the user supplies it. The frontend performs a small `HEAD` request when the Resume section mounts; View/Download are enabled only when the file exists and otherwise show a concise configuration notice. The path is a single constant in `src/data/profile.ts`.
- **Routing and SEO:** The app is a single public route `/`; `public/manus-routes.json` declares `/`. The committed `index.html` contains meaningful title, description, semantic body fallback copy, theme color and social metadata without guessing a canonical public origin. `public/robots.txt` and `public/sitemap.xml` are included with relative-safe defaults where useful.
- **Runtime:** The server listens on `PORT` or 3000 and binds `0.0.0.0` for Preview. In development, Vite middleware serves the client and Express handles `/api/chat`; in production, Express serves `dist`.
- **Delivery:** Include `README.md`, `.env.example`, `.gitignore`, `Dockerfile`, `package.json`/lockfile and a simple production build command. No database, tracker, stock portrait, invented repository URL, fake form, proficiency bars, or heavy visual library is needed.

## Design direction

- **Design movement:** Warm editorial minimalism with a developer-portfolio backbone: calm paper-like surfaces, asymmetrical composition, and quiet technical notation rather than a generic card grid.
- **Core principles:** (1) generous whitespace and strong hierarchy, (2) truthful content with editorial restraint, (3) tactile warm surfaces balanced by navy contrast, and (4) motion only where it clarifies interaction.
- **Color philosophy:** Cream is the page canvas; warm beige creates quiet depth; brown acts as a tactile ink/accent; deep navy carries the most important text and actions; muted text preserves reading comfort. The ownable signature color is **ink navy `#24364B`**, softened by the paper palette.
- **Layout paradigm:** A vertical reading ribbon with offset content blocks. The fixed left dock is the persistent index; each section uses a different rhythm (split editorial intro, document panel, horizontal skill bands, featured project dossier, interest constellation, program timeline, contact letter) instead of identical centered cards.
- **Signature elements:** (1) the JVK monogram dock mark, (2) fine numbered section indices and hairline rules, and (3) thin-node SVG/CSS connector diagrams reused as a restrained technical motif.
- **Interaction philosophy:** Hover and focus states feel like ink moving across paper: slight translation, border/underline emphasis, and navy fill only on primary actions. No interaction depends on animation.
- **Animation:** Short opacity/translate entrances for hero and observed sections; a 160–240ms ease-out for buttons, dock items and chatbot; one quiet SVG pulse with `prefers-reduced-motion` disabled. No continuous parallax, particle canvas, blur-heavy glass, or long intro sequence.
- **Typography system:** Use `Playfair Display` and `Inter` from Google Fonts with `font-display: swap`, but keep local system fallbacks. Playfair is reserved for h1/major section titles; Inter is used for body, labels, nav and controls. Use `clamp()` sparingly for hero scale and fixed readable line heights.
- **Brand essence:** “A thoughtful CSE-IoT builder translating connected-systems curiosity into practical software.” Personality: **thoughtful, grounded, curious**.
- **Brand voice:** Specific, warm and modest; never inflated. Example headline: “Thoughtful code. Meaningful connections.” Example microcopy: “A few things I’m learning by building.”
- **Wordmark/mark:** A compact `JVK` monogram drawn as three offset typographic lines inside a rounded square, paired with a small vertical index line; it functions as a recognizable mark rather than plain text.

## Project structure

```text
.
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── server/index.ts
├── src/
│   ├── App.tsx
│   ├── main.tsx
│   ├── styles.css
│   ├── components/
│   │   ├── Chatbot.tsx
│   │   ├── FloatingDock.tsx
│   │   ├── SectionHeading.tsx
│   │   └── ProjectVisual.tsx
│   └── data/profile.ts
├── public/
│   ├── manus-routes.json
│   ├── robots.txt
│   └── sitemap.xml
├── app.config.ts
├── .env.example
├── Dockerfile
├── README.md
├── TODO.md
└── plan.md
```

## Verification and honest limits

Use TypeScript/Vite build and a running Preview HTTP check. Verify route manifest, build output, API no-key behavior, key links, contact protocols, resume missing-state code path, and static code paths for dock/observer/chatbot. Use Preview screenshots only if needed for a concrete visual defect. Do not claim real-device or Lighthouse scores unless measured; record measured local bundle/build facts in the README after validation.
