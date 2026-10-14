# THORVON TALENT
**A Talent, Creator Management, and Recruitment Division of Thorvon Media**

A minimalist, high-contrast editorial website engineered specifically for **Thorvon Talent**, serving as a dedicated platform for creator representation, brand collaboration inquiries, and verified talent recruitment for Thorvon Media.

The website maintains the exact visual identity, typography system, spacing, button interactions, ambient cursor glow, kinetic word reveals, and dark editorial aesthetic of the parent **Thorvon Media** platform.

---

## 1. Division Architecture & Core Objectives

* **Parent Brand**: Thorvon Media (`thorvonmedia@gmail.com`)
* **Division**: Thorvon Talent (`thorvonmgmt@gmail.com`)
* **Target Domain**: `talent.yourdomain.com` (e.g. `talent.thorvonmedia.com`)
* **Deployment Target**: Vercel

### Key Platform Areas:
1. **Hero Platform**: Minimalist hero with masked word-by-word kinetic typography ("*Talent Deserves the Right Platform.*") and immediate dual actions.
2. **Creator & Influencer Management**: Detailed overview of 6 management pillars (Representation, Brand Deal Sourcing, Ambassadorships, Growth Support, Social Media Management, and Post-Production Coordination) with a 4-step onboarding roadmap and modal application.
3. **Brand Collaborations**: High-impact business inquiry interface allowing brands, founders, and marketing directors to initiate influencer campaigns with vetted creators.
4. **Careers at Thorvon Media**: Clean job listing interface showcasing 7 verified vacancies with category filtering and an interactive application portal.
5. **About Thorvon Talent**: Articulates the structural synergy between Thorvon Media (PR & content production power) and Thorvon Talent (creator representation and talent pipeline).
6. **Contact Hub**: Separate routing paths for creators, brands, careers, and general inquiries, paired with active direct communication links (Phone, WhatsApp, Email).

---

## 2. File Structure

```
thorvon-talent/
├── index.html       # Clean semantic HTML5 layout & interactive modal systems
├── styles.css       # Monochromatic editorial styling, kinetic reveals & responsive design
├── script.js        # State machine, modal controller, verified job catalog & form engine
├── vercel.json      # Security headers, asset caching & clean URL routing for Vercel
├── README.md        # Documentation and deployment guide
└── assets/          # High-resolution logos, favicons, and icons
    ├── logo-white.png
    ├── logo-dark.png
    ├── apple-touch-icon.png
    ├── favicon-16x16.png
    ├── favicon-32x32.png
    └── favicon.ico
```

---

## 3. How to Preview & Test Locally

### Option 1: Python Local Server (Recommended)
Open PowerShell or your terminal in this directory and run:
```powershell
python -m http.server 8080
```
Then visit **[http://localhost:8080](http://localhost:8080)** in your browser.

### Option 2: Direct Browser Preview
Double-click `index.html` in your file explorer to open it in any modern browser.

---

## 4. Connecting Form Submissions to Your Inboxes

The website supports two delivery modes:

### Mode A: Web3Forms Direct API Delivery (Automated)
To have applications land directly in `thorvonmedia@gmail.com` and `thorvonmgmt@gmail.com`:
1. Visit **[web3forms.com](https://web3forms.com)**.
2. Enter your email and click **Create Access Key** (100% free, no server required).
3. Copy the access key from your inbox.
4. In `script.js` (line 17), update the access key:
   ```javascript
   WEB3FORMS_ACCESS_KEY: 'paste_your_key_here',
   ```
5. Deploy or push changes.

### Mode B: Zero-Config Resilient Fallback (Active by Default)
If no key is configured or the client is offline:
* Every form submission is instantly validated and cleanly formatted.
* A direct `mailto:` link is automatically triggered with pre-formatted Subject and Body targeting the appropriate inbox (`thorvonmgmt@gmail.com` or `thorvonmedia@gmail.com`).
* An on-screen confirmation modal provides a **1-click "Copy Summary"** button so no lead or applicant is ever lost.

---

## 5. Verified Open Positions Catalog

All positions in `script.js` reflect verified openings within Thorvon Media:
* **Clipper (Short-Form Video Editor)** — Urgent Hiring · Remote · Full-time / Part-time
* **Social Media Manager** — Urgent Hiring · Remote · Full-time
* **Content Creator** — Urgent Hiring · Remote · Full-time / Part-time
* **Creator & Brand Acquisition Head** — Leadership Role · Remote · Full-time
* **Content Writers** — Open · Remote · Full-time
* **Graphic Designers** — Open · Remote · Full-time
* **Project Manager** — Open · Remote · Full-time

To add, edit, or close any position, update the `CareerPositions` object in [script.js](file:///C:/Users/User/.gemini/antigravity/scratch/thorvon-talent/script.js#L30-L200).

---

## 6. Deploying to Vercel & Subdomain Setup

### Step 1: Push Project to GitHub
Initialize Git and push to your GitHub account:
```bash
git init
git add .
git commit -m "Initial commit: Thorvon Talent platform"
git branch -M main
git remote add origin https://github.com/your-username/thorvon-talent.git
git push -u origin main
```

### Step 2: Import into Vercel
1. Log in to your [Vercel Dashboard](https://vercel.com).
2. Click **Add New** → **Project**.
3. Select your `thorvon-talent` repository and click **Deploy**.
4. Vercel will automatically recognize the static site and `vercel.json` configuration.

### Step 3: Connect Subdomain (`talent.yourdomain.com`)
1. In your Vercel project dashboard, navigate to **Settings** → **Domains**.
2. Enter your desired subdomain: `talent.yourdomain.com` (e.g. `talent.thorvonmedia.com`).
3. Click **Add**.
4. Vercel will provide a **CNAME record** (e.g., `cname.vercel-dns.com`).
5. Open your DNS provider (Cloudflare, GoDaddy, Namecheap, etc.) where your root domain is managed.
6. Add a new DNS Record:
   * **Type**: `CNAME`
   * **Name / Host**: `talent`
   * **Target / Value**: `cname.vercel-dns.com`
   * **TTL**: Automatic or 1 Hour
7. Once DNS propagates (typically 2–15 minutes), your site will be live securely with automatic SSL at `https://talent.yourdomain.com`.

---

## 7. Contact Details Configuration

To update any telephone number, WhatsApp link, or email address across the site, modify the `AppConfig.CONTACT` object in [script.js](file:///C:/Users/User/.gemini/antigravity/scratch/thorvon-talent/script.js#L20-L30):
```javascript
CONTACT: {
  PHONE: '+916000156191',
  PHONE_DISPLAY: '+91 60001 56191',
  PHONE_LINK: 'tel:+916000156191',
  WHATSAPP: '+917002889463',
  WHATSAPP_DISPLAY: '+91 70028 89463',
  WHATSAPP_LINK: 'https://wa.me/917002889463',
  EMAIL_PRIMARY: 'thorvonmedia@gmail.com',
  EMAIL_RECRUITMENT: 'thorvonmgmt@gmail.com',
  INSTAGRAM_LINK: 'https://instagram.com/thorvonmedia'
}
```

---

## 8. Privacy & Applicant Data Protection

* Applicant resumes and portfolios are collected with explicit consent checkoffs.
* Cloud storage links (Google Drive, Notion, Dropbox) ensure private file handling without hosting sensitive public resume documents on the static server.
* All data transmission is encrypted via HTTPS with security headers configured in `vercel.json`.
