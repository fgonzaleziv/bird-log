# 🐦 Bird Checklist (Astro + React + Bulma + Deno KV)

Make your birding life easier, amigo!  
This is a **bird checklist** web app built with [Astro](https://astro.build), React, Bulma CSS, and persistent storage on [Deno KV](https://deno.com/kv) (runs great on [Deno Deploy](https://deno.com/deploy)).  
Super lightweight, static, and ready for the next level.

---

## 🚀 Getting Started

**Local Dev (with mock Deno KV):**

```bash
npm install
npm run dev
```

> *Note: For full persistence, deploy to Deno Deploy!*

---

## Features

- List of birds with “Mark as Seen” action (¡visto, compadre!)
- Filter to show only birds you’ve spotted
- Modern, responsive UI with Bulma
- Astro + React: static-site fast, interactive where you need it
- **Persistent storage** via Deno KV (on Deno Deploy)

---

## 🛣️ Roadmaps (el futuro, pana!)

### Persistent Storage: Key-Value Database

**Goal:** Let users keep their bird checklist even when they come back later, using a key-value database that works with Deno Deploy or other cheap/free hosts.

#### Options

- **Deno KV (Recommended for Deno Deploy):**  
  Built-in, super easy to use, 100% free for most hobby projects.
- **Upstash Redis:**  
  Managed Redis, free tier available, works great with edge/serverless.
- **Cloudflare Workers KV:**  
  Killer for global edge apps, generous free tier, but more eventual-consistency.

#### Next Steps

- [ ] **User Auth:**  
   Use cookies or GitHub/Google login for per-user lists.
- [ ] **Bird Data API:**  
   Fetch real bird info, images, and fun facts from an open API.
- [ ] **Mobile PWA Support:**  
   Install the app on your phone—tómalo contigo everywhere!
- [ ] **Internationalization:**  
   ¡Español, Deutsch, français—bring all the birder homies!
- [ ] **Export/Import:**  
   Download your sightings or upload from another tracker.

PRs, ideas, and “oye, try this” always welcome. ¡Vamos pájaros!

---

## Deploying to Deno Deploy

1. [Sign up for Deno Deploy](https://deno.com/deploy)
2. Push this repo to GitHub
3. Click “New Project” > import this repo
4. Done! 🚀

---

## License

MIT.  
