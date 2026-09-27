# Tasks Claude Can Do Now

These are pure code changes — no external accounts or decisions needed from Jakiur.

---

## Ready to implement immediately

### 1. Add Google Search Console verification tag
**File:** `includes/seo.php`
**What:** Add `<meta name="google-site-verification" content="..." />` after the theme-color tag.
**Waiting for:** Jakiur to paste the verification code from Search Console.

### 2. Make the availability badge link to /contact/
**File:** `index.php`
**What:** Wrap the `.avail-badge` div in an `<a href="/contact/">` tag so clicking it takes visitors to the contact page.
**Status:** Can do right now — no info needed.

### 3. Add "What happens next" 4-step process to homepage
**File:** `index.php`
**What:** Add a condensed version of the inquiry-to-kickoff steps (already on contact page) just above the final CTA section. Increases conversion by reducing uncertainty.
**Status:** Can do right now.

### 4. Add EU-focused FAQ section / answers to homepage
**File:** `index.php`
**What:** Add FAQ items covering: GDPR compliance, EU timezone availability, international payments, and response time for EU clients. Helps European keyword ranking.
**Status:** Can do right now.

### 5. Add `<picture>` + WebP support for profile photo
**Files:** `index.php`, `about/index.php`
**What:** Wrap `<img>` tags with `<picture>` element using a `.webp` source and `.jpg` fallback. Improves Core Web Vitals (LCP).
**Waiting for:** Jakiur to provide a WebP version of `ajdm-jakiur-rahman.jpg` (can be converted at squoosh.app for free). Claude will update all HTML immediately after.

### 6. Add contact form to /contact/ page
**File:** `contact/index.php` + `includes/process.php`
**What:** Add a simple HTML form (name, email, project type, message) that submits to `process.php` and sends an email to `hello@lunovadigital.net`. Captures leads who prefer email over WhatsApp.
**Status:** Can do right now.

### 7. Add testimonials section to homepage
**File:** `index.php`
**What:** Add a testimonials section between the "Why Work With Me" section and the blog section — grid of 3 quote cards with name, company, country, and outcome.
**Waiting for:** Jakiur to provide 3 client quotes (name, company/country, and 1–2 sentence quote).

### 8. Add pricing signals to service pages
**Files:** `services/laravel-development/index.php`, `services/wordpress-plugin-development/index.php`, etc.
**What:** Add a "Investment" section to each service page with starting price range and what's included. Reduces bounce from unqualified visitors, improves qualified lead conversion.
**Waiting for:** Jakiur to decide on the price ranges to show.

### 9. Add Calendly booking link to contact page
**File:** `contact/index.php`
**What:** Add a "Book a 30-min call" button as a secondary CTA next to WhatsApp. Important for EU clients who prefer scheduled calls.
**Waiting for:** Jakiur's Calendly URL.

### 10. Replace OG image with proper 1200×630 banner
**Files:** `includes/data.php` (update `OG_IMAGE` constant), `includes/seo.php`
**What:** Update the OG image URL to point to the new branded banner and upload the file.
**Waiting for:** Jakiur to create the banner in Canva and provide the image file.

### 11. Add newsletter signup box to blog and footer
**Files:** `blog/index.php`, `includes/footer.php`
**What:** Add a simple email capture box ("Get monthly engineering notes") with a Mailchimp or Brevo embed form.
**Waiting for:** Jakiur's newsletter service signup link/embed code.

### 12. Fix FAQ button missing icon on About page
**File:** `about/index.php`
**What:** The FAQ `<button>` on the about page is missing the `<span class="faq-icon">` SVG arrow that the homepage FAQ has. Minor visual inconsistency — easy 2-minute fix.
**Status:** Can do right now.

---

## Order of operations (things I can do without waiting)

1. Make availability badge clickable → `/contact/`
2. Fix FAQ icon on about page
3. Add EU-focused FAQ items to homepage
4. Add "What happens next" process steps to homepage
5. Add contact form to contact page

**Then waiting for Jakiur:**
- Search Console code → add verification tag
- Client quotes → add testimonials section
- Pricing decisions → add to service pages
- Calendly URL → add to contact page
- OG banner image → replace current OG image
- WebP photo → update picture elements
- Newsletter embed code → add signup box

---

Say "do it" for any item above and Claude will implement it immediately.
