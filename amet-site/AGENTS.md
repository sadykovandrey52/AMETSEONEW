<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Cursor Cloud specific instructions

This is a single Next.js 14 app (App Router) in `amet-site/`. No Docker, no database, no monorepo tooling.

### Quick reference

| Task | Command (run from `amet-site/`) |
|---|---|
| Install deps | `npm install` |
| Dev server | `npm run dev` (port 3000) |
| Lint | `npm run lint` |
| Build | `npm run build` |

### Notes

- All external integrations (Supabase, OpenAI, Resend, AmoCRM, Telegram) degrade gracefully when env vars are missing. The site is fully navigable without any secrets configured.
- The lead capture form (`/api/lead`) submits successfully even without external service credentials — it redirects to `/spasibo` on success.
- The AI chat widget (`/api/ai-chat`) requires `OPENAI_API_KEY` to function; without it the endpoint returns 500, but the rest of the site works fine.
- Node.js v22 and npm 10 are used. The lockfile is `package-lock.json` (use npm, not pnpm/yarn).
