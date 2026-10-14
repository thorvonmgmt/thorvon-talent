# THORVON TALENT — FINAL SPECIFICATION
**A Creator Management & Talent Partnerships Division of Thorvon Media**

A premium, visually immersive, highly interactive website built for **Thorvon Talent**, engineered to attract influencers, artists, and digital creators who want professional social media management, stronger personal branding, and access to tier-1 brand collaborations.

Built with an **Apple-inspired typography system**, a signature **Electric Lime & Deep Obsidian** color identity, and purposeful micro-interactions centered around the guiding principle:

> **"Less reading. More experiencing."**

---

## 1. Visual Identity & Apple-Grade Typography

* **Typography**: Elegant Apple-inspired typography stack (`-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Manrope", "Inter", sans-serif`).
  * Comfortable body-text sizing (~18px base desktop, 16px mobile) with 1.6 line height.
  * Large, expressive hero headlines (`clamp(2.6rem, 5.8vw, 5.4rem)`).
  * Avoids tiny captions, excessive uppercase text, overly tight letter spacing, and AI-template clutter.
* **Palette Contrast with Parent Site**:
  * **Primary Accent**: Electric Lime (`#ccff00` / `#d8ff26`) with luminous ambient glow (`rgba(204, 255, 0, 0.28)`).
  * **Surfaces**: Deep Obsidian (`#07080a`), Charcoal Surface (`#0e1015`), and Glass Cards (`#13161f`).
  * **Typography**: Crisp pure white (`#ffffff`) and calm neutral silver (`#9aa5b6`).
* **Motion & Purposeful Micro-Interactions**:
  * 200–500ms smooth cubic-bezier transitions (`cubic-bezier(0.16, 1, 0.3, 1)`).
  * Masked word-by-word kinetic typography reveal on scroll.
  * Luminous electric-lime cursor spotlight.
  * Respects `prefers-reduced-motion` accessibility standards.

---

## 2. Interactive Homepage Experience

### A. Immersive Hero Section
* **Headline**: *"Your Talent. Our Network. Bigger Opportunities."*
* **Supporting Line**: *"Your brand deserves more than just content."*
* **Primary Action**: **Get Represented** (Electric lime pill with hover lift).
* **Secondary Action**: **Discover Thorvon Talent** (Smooth scroll to the Creator Journey).
* **Cinematic Viewfinder**: Interactive camera frame featuring a pulsing `[REC 4K 60FPS]` indicator, aperture crosshair, exposure metrics, and editorial brand statement.

### B. Interactive Creator Journey
Demonstrates the transformation through 3 interactive stages:
1. **`01 — Build Your Presence`**: Social media management, content strategy, and stronger personal branding.
2. **`02 — Find Your Opportunities`**: Relevant brand collaborations, partnerships, and campaign opportunities.
3. **`03 — Focus on Your Craft`**: Let creators focus on creating while the team handles social media and commercial logistics.
* Selecting each stage dynamically updates the live stage card with custom metrics (Retention Pacing, Vetted Sponsors, Zero Admin Friction).

### C. Interactive Creator Showcase
Visual categories demonstrating the diversity of talent Thorvon Talent represents:
* **Artists & Performers**
* **Lifestyle Creators**
* **Educators & Thought Leaders**
* **Podcasters & Talk Formats**
* **Entertainment Creators**
* **Digital Personalities**
* Includes real-time filter pills with category isolation and smooth card elevation.

### D. Brand Partnership Experience
* **Headline**: *"The Right Creator. The Right Opportunity."*
* Connects creator identity with brand objectives (Vetted audience relevance, end-to-end campaign oversight, Thorvon Media production power).
* CTA: **Explore Partnerships** (Opens dedicated brand collaboration modal).

### E. Interactive Final CTA
* **Headline**: *"Your Next Chapter Starts Here."*
* **Supporting Line**: *"Bring your talent. Let's build what's next."*
* Dual CTAs: **Join Thorvon Talent** & **WhatsApp Our Team**.

---

## 3. Creator Application Flow ("Let's Get to Know You.")

Streamlined to maximize conversion without administrative friction:
* Full Name
* Email or Preferred Contact Method
* Main Social Platform (Instagram, YouTube, TikTok, LinkedIn, Podcast, Other)
* Profile Link / Handle
* Content Niche
* Short Optional Introduction
* **Confirmation Dialog**: Clear explanation that the talent management team will review the application and respond if there is a suitable representation opportunity.

---

## 4. Secondary Portals (Kept Strictly Separate)

* **Brand Partnerships Modal**: Conversational inquiry form for marketing directors and founders.
* **Careers at Thorvon Media Modal**: Dedicated portal featuring **7 verified vacancies** (Clipper, Social Media Manager, Content Creator, Acquisition Head, Content Writers, Graphic Designers, Project Manager) with full descriptions, requirements, and an independent application pipeline.
* **Privacy Policy & Data Consent**: Explains confidential applicant handling, creator data protection, and secure routing.

---

## 5. Local Preview & Testing

Run a local HTTP server:
```powershell
python -m http.server 8089
```
Then visit **[http://localhost:8089](http://localhost:8089)** in your browser.

---

## 6. Deployment to Vercel & Subdomain Setup

1. **Commit & Push to GitHub**:
   ```bash
   git add .
   git commit -m "feat: complete final Apple-inspired Thorvon Talent website"
   git push origin main
   ```
2. **Import into Vercel**: Connect your repository in your Vercel Dashboard.
3. **Map Dedicated Subdomain (`talent.yourdomain.com`)**:
   * In Vercel Project → **Settings** → **Domains**, add `talent.yourdomain.com` (e.g. `talent.thorvonmedia.com`).
   * In your DNS provider (Cloudflare, GoDaddy, Namecheap, etc.), create a `CNAME` record:
     * **Host**: `talent`
     * **Target**: `cname.vercel-dns.com`
