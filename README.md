# JVK Portfolio

A lightweight, editorial personal portfolio for **Jaithra Vidwath Kavuri** — a sophomore B.Tech CSE-IoT student at VNR VJIET in Hyderabad, India. The site presents verified education, skills, projects, interests, program experience, profile links, and contact details without inventing qualifications or project features.

## Stack

- React 19 + TypeScript
- Vite 7
- Express 5 server
- Inline SVG/CSS visuals; no animation framework or database
- Server-side OpenAI-compatible chatbot endpoint with a truthful no-key fallback

## Run locally

Requirements: Node.js 22+ and pnpm 10+.

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3000`. The same server uses Vite middleware in development and serves `dist/` in production.

For a production build and local production server:

```bash
pnpm build
NODE_ENV=production pnpm start
```

## Ask JVK configuration

The frontend calls `POST /api/chat`; credentials are read only by `server/index.ts` and are never bundled into client JavaScript. Copy the example file to `.env` and add a server-side OpenAI-compatible key:

```bash
cp .env.example .env
# set OPENAI_API_KEY, and optionally OPENAI_API_BASE / OPENAI_MODEL
```

The default model is `gpt-5-mini`, which is available through the configured OpenAI-compatible proxy. The endpoint validates message shape and length, keeps only a short recent conversation, applies a lightweight per-IP cooldown, and supplies a restrictive verified profile knowledge base to the model. If `OPENAI_API_KEY` is missing, the endpoint still works and explicitly labels its short responses as a local verified fallback rather than live AI. If the upstream service fails, the UI shows an error while the rest of the portfolio remains usable.

For a deployment, configure the environment variables as server secrets. Do not commit `.env` or any real key.

## Add the resume

Place the real, user-supplied PDF at:

```text
public/resume.pdf
```

The path is centralized in `src/data/profile.ts`. The Resume section checks whether the file is available; until then it shows a graceful “Resume not added yet” state and does not fabricate a document.

## Updating the portfolio

Most personal content lives in `src/data/profile.ts`: name, education, links, contact values, skills, interests, projects, and the chatbot knowledge object. Project links are optional and unavailable links are intentionally omitted. Section composition is in `src/App.tsx`; visual styles are in `src/styles.css`.

## Deployment

The included `Dockerfile` builds the client and starts the Express server on `PORT` (default 3000). It exposes `/api/health` for health checks and serves the SPA for the public route `/`.

A static host can use the `dist/` directory after `pnpm build`, but the Ask JVK server endpoint requires a Node-capable host or a separately deployed compatible backend. Configure `OPENAI_API_KEY`, `OPENAI_API_BASE`, `OPENAI_MODEL`, and `PORT` in the server environment.

## GitHub

This project is Git-ready but has not been published to GitHub by this task. To push it yourself:

```bash
git init
git add .
git commit -m "Build JVK portfolio"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
git push -u origin main
```

Do not commit `.env`, `node_modules`, `dist`, or a private resume unless you intend to publish it.

## Validation notes

Measured in this sandbox on the final Vite build:

- `pnpm run check`: passed
- `pnpm run build`: passed
- Initial JS bundle: 250.78 kB raw / 77.27 kB gzip
- Initial CSS bundle: 30.87 kB raw / 6.97 kB gzip
- `/manus-routes.json`: served with the single `/` route
- `/api/health`: returned `{ "ok": true }`
- Missing-key chatbot fallback: verified on an alternate local port
- Desktop and mobile Preview screenshots: inspected

No physical low-end-device, Lighthouse, throttled-network, or published-domain score is claimed here. The actual LLM response path depends on the deployment's configured provider key and model access.
