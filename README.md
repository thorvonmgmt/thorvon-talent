# THORVON TALENT
**A Creator Management Division of Thorvon Media**

A visually arresting, high-contrast editorial platform for **Thorvon Talent**, engineered to attract influencers, artists, and digital creators looking for professional representation, elevated social presence, and tier-1 brand collaborations.

Built with an **Electric Lime / Acid Green** (`#ccff00`) and **Deep Charcoal** (`#07080a`) color identity that stands out sharply while honoring the typographic rigor and editorial standards of Thorvon Media.

---

## 1. Core Vision & Experience

* **Philosophy**: *Less text. More emotion. More aspiration. More visual impact.*
* **Primary Objective**: Creator acquisition.
* **Core Value Pillars**:
  1. **WE BUILD YOUR PRESENCE.** Social media strategy and management that make your brand stand out.
  2. **WE CONNECT YOU TO BRANDS.** Relevant partnerships and campaign opportunities that fit your identity.
  3. **WE HANDLE THE EXECUTION.** Operational freedom covering content planning, editing, and distribution.
* **Secondary Pathways**:
  * **Brand Partnerships**: Dedicated conversational modal for companies seeking creator campaigns.
  * **Careers at Thorvon Media**: Secondary portal featuring 7 verified agency vacancies, strictly separated from creator onboarding.

---

## 2. Visual Identity & Contrast with Parent Site

| Element | Thorvon Media (Parent) | Thorvon Talent (Creator Division) |
| :--- | :--- | :--- |
| **Primary Accent** | Monochrome / Classic Blue (`#3b82f6`) | **Electric Lime / Acid Green (`#ccff00`)** |
| **Accent Glow** | Cool Blue Subtlety | **Luminous Acid Lime Halo (`rgba(204, 255, 0, 0.3)`)** |
| **Background** | Deep Graphite (`#090a0d`) | **High-Contrast Deep Obsidian (`#07080a`)** |
| **Atmosphere** | Corporate & Editorial PR | **Cinematic Viewfinder, Stage Lighting & Editorial Culture** |
| **Typography** | Plus Jakarta Sans, Inter & Space Mono | Retained for brand family harmony |

---

## 3. Homepage Architecture

1. **Hero Platform**:
   * Headline: *"Your Talent. Our Network. Bigger Opportunities."*
   * Supporting Line: *"Your brand deserves more than just content."*
   * Primary Action: **Get Represented** (Electric lime pill).
   * Secondary Action: **See What We Do** (Smooth scroll).
   * Visual Centerpiece: Dramatic camera/creator viewfinder container with REC indicator and technical metrics.
2. **The Transformation**:
   * Three punchy statements supported by compact visual indicators.
3. **Creator Opportunities**:
   * *"Make Your Influence Mean More. Build your brand. Find your people. Unlock new opportunities."*
   * CTA: **Join Thorvon Talent**.
4. **Final CTA**:
   * *"Ready for What's Next?"*
   * CTA: **Let's Talk**.

---

## 4. Streamlined Creator Application

To maximize applicant conversion, the application form is fast and focused:
* Full Name
* Email or Preferred Contact
* Primary Social Platform (Instagram, YouTube, TikTok, LinkedIn, etc.)
* Profile Link / Handle
* Content Niche
* Short Optional Introduction

---

## 5. Local Testing & Verification

Run a lightweight local server:
```powershell
python -m http.server 8089
```
Then open **[http://localhost:8089](http://localhost:8089)** in any browser.

---

## 6. Form Transmission (Web3Forms or Direct Mailto)

* **Web3Forms Key**: Update `AppConfig.WEB3FORMS_ACCESS_KEY` in `script.js` with your key from [web3forms.com](https://web3forms.com).
* **Failsafe Mailto Mode**: Active by default. Automatically generates an email formatted with all applicant details targeting `thorvonmgmt@gmail.com` with a 1-click clipboard summary so no lead is ever lost.

---

## 7. Deployment to Vercel (Subdomain Setup)

1. Push this repository to GitHub:
   ```bash
   git add .
   git commit -m "feat: complete creator-first electric lime redesign"
   git push origin main
   ```
2. Import project into your **Vercel Dashboard**.
3. Under **Settings** → **Domains**, add `talent.yourdomain.com` (e.g. `talent.thorvonmedia.com`).
4. In your DNS provider, create a `CNAME` record:
   * **Host**: `talent`
   * **Target**: `cname.vercel-dns.com`
