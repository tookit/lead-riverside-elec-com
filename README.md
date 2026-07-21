# Riverside Electric Inc. — Website Redesign

A complete static redesign of Riverside Electric Inc., a fourth-generation family-owned electrical contractor founded in 1945, serving Cincinnati, Columbus, and Indianapolis.

**Live original:** [riverside-elec.com](https://www.riverside-elec.com/)

## Overview

- **Industry:** Electrical contracting / Commercial & Industrial
- **Brand tagline:** "Never Feel Powerless"
- **Core services:** Commercial electrical, Generac generator installation & service, EV charger installation
- **Service area:** OH / KY / IN tri-state
- **Key credentials:** 80+ years experience, 24/7 emergency service, Generac PowerPro Premier dealer, 300+ five-star reviews

## Pages

| Page | File | Description |
|------|------|-------------|
| Home | `index.html` | Hero with quote form, trust bar, services overview, generator spotlight, certifications, heritage timeline, testimonials, blog teasers, CTA |
| Services | `service.html` | Six service detail blocks, four-step process, FAQ accordion |
| About | `about.html` | Company history since 1945, stats, milestone timeline, values, service areas |
| Contact | `contact.html` | Three office locations (Cincinnati / Columbus / Indianapolis), contact form, business hours |

## Tech Stack

Plain HTML, CSS, and vanilla JavaScript. No build step, no framework, no dependencies.

- **`styles.css`** — design tokens (CSS custom properties), header/nav, footer, reusable components, page-specific rules
- **`main.js`** — sticky nav, mobile menu, scroll-reveal animations, smooth scroll, FAQ accordion, form toasts
- **Fonts:** DM Sans (display) + Inter (body) via Google Fonts
- **Images:** Real brand imagery in `assets/images/`

## Design System

| Token | Value |
|-------|-------|
| Primary navy | `#1A3C6E` |
| Primary dark | `#0F2547` |
| Accent orange-red | `#E84627` |
| Neutral dark | `#1A1A1A` |
| Neutral light | `#F5F5F5` |
| Display font | DM Sans |
| Body font | Inter |
| Max content width | 1320px |

Full design specification and decisions documented in [`design.md`](design.md).

## Run Locally

```bash
# Any static file server works:
python -m http.server 8000

# Or with Node:
npx serve .
```

Open [http://localhost:8000](http://localhost:8000) in a browser.

## Deployment

[![Deploy to Cloudflare Pages](https://github.com/tookit/lead-riverside-elec-com/actions/workflows/deploy.yml/badge.svg)](https://github.com/tookit/lead-riverside-elec-com/actions/workflows/deploy.yml)

**Live demo:** [lead-riverside-elec-com.pages.dev](https://lead-riverside-elec-com.pages.dev)

Deployed on [Cloudflare Pages](https://pages.cloudflare.com). Push to `main` triggers automatic deployment via `wrangler pages deploy`.

```bash
# Manual deploy:
npx wrangler pages deploy . --project-name=lead-riverside-elec-com
```

## Credits

Original site: [riverside-elec.com](https://www.riverside-elec.com/)
Redesigned as part of [Themedown](https://themedown.com) — AI-driven website redesign platform.
