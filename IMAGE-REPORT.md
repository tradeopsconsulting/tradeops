# Image report

Inventory of media on the production rewrite of https://tradeops-site-b.vercel.app/, plus extras pulled from https://tradeopsconsulting.com/.

Book CTA href reused from live site-b: `https://tradeopsconsulting.com/strategy-call/`

## Kept from site-b

Downloaded from the live origin and served from `public/`.

| File | Use |
|---|---|
| `favicon.svg` | Favicon |
| `tradeops-mark-white.png` | Logo / nav / footer |
| `tradeops-truck-poster.jpg` | Hero poster |
| `tradeops-truck-1080.webm` | Hero video (desktop) |
| `tradeops-truck-1080.mp4` | Hero video (desktop) |
| `tradeops-truck-720.mp4` | Hero video (mobile) |
| `fonts/inter-latin.woff2` | Body font |
| `fonts/inter-latin-ext.woff2` | Body font (extended Latin) |
| `fonts/instrument-serif-latin.woff2` | Display serif |
| `fonts/instrument-serif-italic-latin.woff2` | Display serif italic |
| `result-calls.jpg` | Flagship A/C Man GBP calls panel |
| `result-green-40.jpg` | Green Energy · Canton |
| `result-green-42.jpg` | Green Energy · Needham |
| `result-green-44.jpg` | Green Energy · Lexington |
| `result-jurnee-calls.jpg` | Jurnee Mechanical GBP calls |
| `result-bw-keywords.jpg` | B&W keyword / Search Console panel |
| `proof-gemini.jpg` | Gemini capture, A/C Man listed first |
| `proof-chatgpt.jpg` | ChatGPT capture, A/C Man shortlisted |
| `quote-q1.jpg` … `quote-q10.jpg` | Unprompted message receipts |
| `poster-acman.jpg` | A/C Man testimonial poster |
| `poster-oneup.jpg` | William / 1UP Air Solutions poster |
| `poster-kyleroof.jpg` | Kyle Roof poster |
| `poster-04.jpg` | Anthony Warren / Warren Mechanical poster |
| `t-04.mp4` | Anthony Warren testimonial (local) |
| `jobsite-chipper.jpg` | Bengt founder evidence |
| `founder-yash-speaking.jpg` | Yash at WordCamp Philippines 2026 |

Remote testimonial files already used by site-b (hotlinked, not duplicated locally because each is 20–50 MB):

- `https://tradeopsconsulting.com/wp-content/uploads/2025/12/DONE-Acman-_1.mp4`
- `https://tradeopsconsulting.com/wp-content/uploads/2025/12/DONE-william-am-test.-_1-1.mp4`
- `https://tradeopsconsulting.com/wp-content/uploads/2025/12/DONE-Kyle-Roof-with-caps-on-Working-with-Yash-–-SEO-Success-Story_1.mp4`

YouTube episode thumbs continue to load from `https://img.youtube.com/vi/{id}/hqdefault.jpg`.

## Added from tradeopsconsulting.com

| File | Source | Wired in |
|---|---|---|
| `proof-ai-mode.png` | `/wp-content/uploads/2026/03/Screenshot-2026-03-21-at-3.59.23-PM.png` | AI visibility — Google AI Mode naming A/C Man (missing on site-b; they had no third assistant frame) |
| `quote-highland.jpg` | Instagram-story SMS capture | Messages, behind Show more |
| `quote-gsc-80.jpg` | SMS + Search Console “80 clicks” capture, 26 Jun 2026 | Messages, behind Show more |
| `quote-website-amazing.jpg` | SMS, 18 Apr 2026 | Messages, behind Show more |
| `quote-rankings-sms.jpg` | Rankings update SMS | Messages, behind Show more |
| `result-vancouver-keywords.jpg` | Ahrefs-style Vancouver plumber keyword table | Stored in `public/`; not shown as a named-client card (capture is not one of the five named HVAC operators) |
| `result-gsc-compare.jpg` | Search Console 3-month compare | Stored in `public/`; not attributed to a named client (numbers do not match a claim on this page) |

Anthony Warren’s `.com` file `DONE-Anthony-Warren.mp4` (53 MB) is the same speaker as site-b’s `t-04.mp4` (Warren Mechanical HVAC). The local compressed file is what we play.

## Still missing / not used

- **Perplexity screenshot for B&W / A/C Man.** Site-b already omitted it (“covering the three competitors it details would black out the image”). `.com` did not publish a usable Perplexity capture either. Status is described in copy, not shown as a frame.
- **Generic `.com` Elementor icons** (`crm.png`, `pipeline.png`, `blocked.png`, etc.) — not proof, not used.
- **Landscaping-only message shots** from `.com` (`IMG_0055.jpg`, `IMG_1097.jpg`, `1.jpg`–`12.jpg` lawn/paver threads) — held back so the messages section stays on the HVAC/plumbing replacement-lead campaign described in the copy.
- **Speaker on the A/C Man clip** is named Michael Johnson from the company’s published founder schema (fayettevillehvac.com). If that is the wrong person on camera, swap the name; do not ship “speaker not named.”
- No OG image existed on site-b (`/og.jpg` 404). Hero poster is used as `og:image`.

## Broken on live site-b (now avoided)

Paths that 404’d on the live origin and were never part of the bundle: `/proof-perplexity.jpg`, `/founder-bengt.jpg`, `/logo-*.png`, `/og.jpg`, `/favicon.ico`.
