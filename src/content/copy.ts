export const BOOK_HREF = "https://tradeopsconsulting.com/strategy-call/";
export const BOOK_LABEL = "Book a Free Audit";
export const PHONE = {
  display: "+1 (206) 203-8958",
  href: "tel:+12062038958",
} as const;

export const nav = {
  links: [
    { label: "Services", href: "#services" },
    { label: "Results", href: "#results" },
    { label: "Method", href: "#method" },
    { label: "Guarantee", href: "#guarantee" },
    { label: "Radio", href: "#radio" },
    { label: "Founders", href: "#founders" },
    { label: "FAQ", href: "#faq" },
  ],
} as const;

export const hero = {
  eyebrow: "Home service only · Built by operators",
  h1Sans: "More booked jobs in six months,",
  h1Serif: "or we stop charging.",
  sub: "TradeOps gets home service companies found, gets the phone ringing, and ties every booked job back to the work that produced it. One shop for the brand, the marketing, and the tracking — and every figure we publish names its source and its window.",
  ctaPrimary: BOOK_LABEL,
  ctaSecondary: "See real results",
  micro: "Free audit · 15 minutes · You keep the written plan either way",
} as const;

export const logos = {
  label: "The operators we build for",
  items: [
    { name: "B&W Heating & Cooling", href: "https://www.bwheatcool.com" },
    { name: "Saguaro Air Solutions", href: "https://saguaroairsolutions.com" },
    { name: "A/C Man Heating and Air", href: "https://fayettevillehvac.com" },
    { name: "Green Energy AC Heating & Plumbing", href: "" },
    { name: "Jurnee Mechanical", href: "" },
  ],
} as const;

export const problem = {
  eyebrow: "The problem",
  headSans: "Your marketing spend disappears,",
  headSerif: "and nobody can tell you which booked job it bought.",
  body: "The phone rings, but no one can point to why. One vendor runs the ads, another built the website, a third touches the Google profile — and none of them can tell you which booked job came from which dollar. So when the slow season hits, you cut the spend that was probably working, and you find out the hard way that it was.",
  costLabel: "The cost of leaving it",
  cost: "Every replacement job you miss went to the contractor who showed up first in the search. That bill never lands on an invoice.",
  bridge: "Here is what it looks like when the ledger is honest.",
} as const;

export const measureFootnote =
  "Calls may be client-reported from the CRM. Rankings and clicks come from Google Business Profile or Search Console. Every claim names its source and the window it covers.";

export const flagship = {
  eyebrow: "Real operators, real numbers",
  headSans: "Ninety-four calls in August.",
  headSerif: "Up forty percent.",
  body: "A/C Man Heating and Air — August 2026 against August 2025, straight off the Google Business Profile. That is Google rendering the number, not a dashboard we built.",
  meta: "A/C Man Heating and Air · August 2026 vs August 2025 · Google Business Profile",
  support: "Calls that hit the board — not impressions, not clicks dressed up as progress.",
  image: {
    src: "/result-calls.jpg",
    alt: "Google Business Profile performance panel showing 94 calls in August 2026, up 40.3 percent on August 2025",
  },
  secondary: {
    head: "213 calls in a month.",
    label: "Single-location HVAC contractor",
    period: "July 2026",
    line: "Organic clicks 77 → 1,025 a month. Non-brand 61 → 943. Click-through 0.18% → 0.82%. Four of four AI Overviews cite them first on the head term.",
    caveat: "Calls are client-reported. Everything else is Search Console.",
  },
} as const;

export const services = {
  eyebrow: "What we do",
  headSans: "Three ways we sell booked jobs —",
  headSerif: "not vanity metrics.",
  intro:
    "We get you found where homeowners look, get calls while search is still compounding, and get you chosen before anyone types your name. Then we show you which of those calls became booked work.",
  cards: [
    {
      n: "01",
      name: "Get found",
      head: "Own the map in the towns you serve.",
      outcome:
        "Where a homeowner looks first — and where an assistant looks now. This is the work that compounds, and it is why the guarantee runs six months.",
      items: [
        "Local SEO, so you are found first when someone in your towns searches for the work",
        "Google Maps, for the calls that come straight off the map",
        "AI search, so you are named when a homeowner asks an assistant who to call",
      ],
    },
    {
      n: "02",
      name: "Get calls now",
      head: "Calls this week, for the jobs worth paying for.",
      outcome:
        "Search takes months. Paid does not. This fills the schedule while the work above is still compounding — and it is the first thing we cut if it is not paying.",
      items: [
        "Google Ads, for the jobs worth paying for",
        "Local Services Ads, for the badge at the top and the calls that come with it",
        "Meta ads, for replacement leads through the slow season",
      ],
    },
    {
      n: "03",
      name: "Get chosen",
      head: "A brand people recognize in the driveway.",
      outcome:
        "Being found is not the same as being picked. Before anyone searches for you, they drive past you — so we build the parts that live in the driveway too.",
      items: [
        "Web design, for a page that turns a visit into a booked call",
        "Brand and print, for a brand people recognize on the truck and at the door",
        "Video, for your customers on camera — shot and cut by us",
      ],
    },
  ],
  note: "Most search agencies will not touch brand and print. We do, because the homeowner sees that half before they ever search.",
} as const;

export const results = {
  eyebrow: "More proof",
  headSans: "Named clients. Dated windows.",
  headSerif: "Sources you can check.",
  green: {
    name: "Green Energy AC Heating & Plumbing",
    headline: "Ranked in the towns you serve, so the phone rings.",
    detail:
      "Three profiles, reported separately — Canton, Needham, Lexington. August 2026 against August 2025.",
    panels: [
      {
        place: "Canton",
        src: "/result-green-40.jpg",
        alt: "Google Business Profile performance panel showing 53 calls in August 2026, down 62.9 percent on August 2025",
      },
      {
        place: "Needham",
        src: "/result-green-42.jpg",
        alt: "Google Business Profile performance panel showing 26 calls in August 2026, up 30.0 percent on August 2025",
      },
      {
        place: "Lexington",
        src: "/result-green-44.jpg",
        alt: "Google Business Profile performance panel showing 13 calls in August 2026, up 85.7 percent on August 2025",
      },
    ],
  },
  jurnee: {
    name: "Jurnee Mechanical",
    headline: "Calls from the Business Profile up 350%.",
    detail: "August 2026 against August 2025 · Google Business Profile",
    image: {
      src: "/result-jurnee-calls.jpg",
      alt: "Google Business Profile performance panel showing 18 calls in August 2026, up 350.0 percent on August 2025",
    },
  },
  bw: {
    name: "B&W Heating & Cooling",
    headline:
      "Thirty-one of fifty tracked keywords improved — including five that went from outside the top 100 to position one.",
    detail:
      "8 June to 30 August 2026 · Nineteen now in the top three · thirty-one in the top ten",
    frame:
      "Their Business Profile calls went the other way over the same months (down 29.3% on 104 calls). That is why we show rankings here — and why we refuse to hide a weak spot inside a blended average. Every location, every metric, on its own.",
    keywords: [
      "air conditioning installation",
      "furnace replacement",
      "emergency AC repair near me",
      "indoor air quality services",
      "air duct repair",
    ],
    image: {
      src: "/result-bw-keywords.jpg",
      alt: "Search Console performance panel showing 650 clicks from 86,200 impressions over 28 days",
    },
  },
} as const;

export const testimonials = {
  eyebrow: "In their words",
  headSans: "Results focused.",
  headSerif: "Don’t take our word for it.",
  sub: "Shot and cut by TradeOps. Each clip has a line you can read without pressing play.",
  items: [
    {
      name: "Michael Johnson",
      role: "Owner",
      org: "A/C Man Heating and Air",
      quote: "They get the work done — on the first page very quickly.",
      poster: "/poster-acman.jpg",
      src: "https://tradeopsconsulting.com/wp-content/uploads/2025/12/DONE-Acman-_1.mp4",
    },
    {
      name: "William",
      role: "Owner",
      org: "1UP Air Solutions",
      quote: "I would highly recommend them.",
      poster: "/poster-oneup.jpg",
      src: "https://tradeopsconsulting.com/wp-content/uploads/2025/12/DONE-william-am-test.-_1-1.mp4",
    },
    {
      name: "Kyle Roof",
      role: "Founder",
      org: "Page Optimizer Pro",
      quote:
        "He is a young, sharp SEO, helping us implement our own SEO strategy — and he’s doing a really fine job so far.",
      poster: "/poster-kyleroof.jpg",
      src: "https://tradeopsconsulting.com/wp-content/uploads/2025/12/DONE-Kyle-Roof-with-caps-on-Working-with-Yash-%E2%80%93-SEO-Success-Story_1.mp4",
    },
    {
      name: "Anthony Warren",
      role: "Owner",
      org: "Warren Mechanical HVAC",
      quote: "Really do love the website. We’ve been a happy customer.",
      poster: "/poster-04.jpg",
      src: "/t-04.mp4",
    },
  ],
} as const;

export const ai = {
  eyebrow: "The next front door",
  headSans: "When a homeowner asks an assistant who to call,",
  headSerif: "your name should be in the answer.",
  soWhat:
    "Google is not the only place a job starts anymore. We measure AI visibility the way we measure the map — live, localized, signed out, personalization off — so you can see whether ChatGPT, Gemini, and Perplexity name you in your towns.",
  proofs: [
    {
      client: "B&W Heating & Cooling",
      query: "best AC repair companies in Edwardsville, IL",
      month: "August 2026",
      rows: [
        { engine: "ChatGPT", place: "Named" },
        { engine: "Gemini", place: "Named" },
        { engine: "Perplexity", place: "Named" },
      ],
    },
    {
      client: "A/C Man Heating and Air",
      query: "best ac repair companies in Fayetteville, NC",
      month: "August 2026",
      rows: [
        { engine: "Gemini", place: "Listed first" },
        { engine: "ChatGPT", place: "Shortlisted" },
        { engine: "Perplexity", place: "Fourth (Vetted Score 91 of 100)" },
      ],
    },
  ],
  frames: [
    {
      src: "/proof-gemini.jpg",
      engine: "Gemini",
      place: "A/C Man listed first",
      alt: "Gemini’s answer to a search for the best AC repair companies in Fayetteville, listing A/C Man Heating and Air first",
      cropStart: 0.17,
      crop: 0.7,
    },
    {
      src: "/proof-chatgpt.jpg",
      engine: "ChatGPT",
      place: "A/C Man shortlisted",
      alt: "ChatGPT’s shortlist for the best AC repair companies in Fayetteville, with A/C Man Heating and Air second",
      cropStart: 0.63,
      crop: 0.37,
    },
    {
      src: "/proof-ai-mode.png",
      engine: "Google AI Mode",
      place: "A/C Man named as a top provider",
      alt: "A customer’s phone showing Google AI Mode naming A/C Man Heating and Air among top HVAC companies in Fayetteville, North Carolina",
      cropStart: 0,
      crop: 1,
    },
  ],
  how: "Assistant answers shift between sessions and accounts. Each capture is a point in time and names the month it was taken. Live checks, localized, signed out, personalization off.",
} as const;

export const messages = {
  eyebrow: "In their words",
  headSans: "The messages",
  headSerif: "we didn’t ask for.",
  sub: "Sent to us unprompted. Nothing that identifies the sender is in frame.",
  body: "The campaign was built for replacement leads. Ten of forty shown — the rest named someone, or were a number with no date, so they stay held back.",
  highlight: {
    text: "On the same ad he posted on June 27th, we are now up to 114 lead submissions at $43 per qualified lead. They have been doing great with our meta ads and maintaining our company’s Facebook page. I’m pleased with these guys.",
    src: "/quote-q1.jpg",
    alt: "A public Facebook comment from a client reporting 114 lead submissions at $43 per qualified lead",
  },
  quotes: [
    {
      text: "Bro, we are gonna have to stop. I’m getting too many calls. We will let it go through April but I’m getting so busy, it’s wild.",
      surface: "A text message",
      src: "/quote-q2.jpg",
    },
    {
      text: "It’s looking like the best website I ever had.",
      surface: "A message",
      src: "/quote-q8.jpg",
    },
    {
      text: "No complaints. Overall I’m happy with the website and marketing. Will probably be running a bigger Google budget going into next season.",
      surface: "A text message",
      src: "/quote-q3.jpg",
    },
    {
      text: "Definitely way busier than I have normally been beginning of season. I feel like we are getting a lot of new customers. I think right now the visibility is at an all-time high.",
      surface: "A text message",
      src: "/quote-q6.jpg",
    },
    {
      text: "Is definitely going really well. I didn’t expect to be as busy in April.",
      surface: "A text message",
      src: "/quote-q4.jpg",
    },
    {
      text: "I’ll get the pictures done. I’ve noticed more GBP calls.",
      surface: "A message",
      src: "/quote-q7.jpg",
    },
    {
      text: "Bro it’s been going great thanks to the advice of yours. I started Facebook and Google ads and got more clients.",
      surface: "A message",
      src: "/quote-q9.jpg",
    },
    {
      text: "Hey bro, business has been great since I followed the advice you gave me. Thank you.",
      surface: "A message",
      src: "/quote-q10.jpg",
    },
    {
      text: "This is on Google. We don’t service Arizona. I had someone call last night in Ohio. Said he saw us there too.",
      surface: "A message, sender cropped out",
      src: "/quote-q5.jpg",
    },
    {
      text: "It worked — we are getting a call a day in Highland Village, which started happening consistently about three weeks ago.",
      surface: "A text, April 2026 window",
      src: "/quote-highland.jpg",
    },
    {
      text: "Yes sir, my google calls have been daily and sometimes 4–5.",
      surface: "A text · 26 June 2026",
      src: "/quote-gsc-80.jpg",
    },
    {
      text: "Had to type that three times because the website looks amazing.",
      surface: "A text · 18 April 2026",
      src: "/quote-website-amazing.jpg",
    },
    {
      text: "Hell yeah, you guys kick ass brother, many thanks.",
      surface: "A text, after a rankings update",
      src: "/quote-rankings-sms.jpg",
    },
  ],
} as const;

export const method = {
  eyebrow: "The TradeOps method",
  headSans: "How we turn you into",
  headSerif: "the obvious choice in your towns.",
  intro:
    "Four phases. Every client moves through them. What happens inside each one is built around your market, your margins, and how many calls your office can actually answer.",
  phases: [
    {
      n: "01",
      name: "Audit",
      window: "Week 1",
      body: "Where you rank today, where the calls are going, which leads never got a callback, and what the missed replacement work is worth. You leave with a written plan whether or not you hire us.",
    },
    {
      n: "02",
      name: "Foundation",
      window: "Days 7 to 30",
      body: "Call tracking and the CRM go in under everything, so every call has a source from the first week. The Business Profile is rebuilt. The site and service area pages go live.",
    },
    {
      n: "03",
      name: "Scale",
      window: "Days 31 to 90",
      body: "Ads on for the jobs worth paying for. What works gets more. What does not gets cut. The first monthly report shows which calls closed — not how many people saw something.",
    },
    {
      n: "04",
      name: "Compound",
      window: "Months 4 to 6",
      body: "Rankings and AI visibility measured every month. Replacement leads through the slow season. The ledger of booked work compared against what you spent — the comparison the guarantee turns on.",
    },
  ],
  timelineLabel: "The first six months",
  timeline: [
    { when: "Day 01", what: "Audit delivered" },
    { when: "Day 07", what: "Call tracking and CRM live" },
    { when: "Day 30", what: "Profile, site, and service area pages live" },
    { when: "Day 60", what: "Ads and pages scaling" },
    { when: "Day 90", what: "First report showing which calls closed" },
    { when: "Month 6", what: "The guarantee check" },
  ],
  outcome: "Outcome by month six: ahead on the ledger, or we stop charging.",
  caution: "Anyone who promises you a date overnight is selling something.",
} as const;

export const guarantee = {
  eyebrow: "The guarantee",
  headSans: "Leave ahead on the ledger,",
  headSerif: "or we stop charging.",
  definition:
    "Over six months we track every lead the work produces. You keep the CRM honest about which jobs closed and what they were worth. Then we compare the value of booked jobs from tracked TradeOps work against what you paid us. If you are not ahead, we keep working and stop billing until you are.",
  beats: [
    { n: "01", label: "Start", body: "Tracking on" },
    { n: "02", label: "The work", body: "Every lead tracked" },
    { n: "03", label: "Six months", body: "We compare the two" },
    { n: "04", label: "Ahead", body: "The work continues" },
    { n: "05", label: "Not ahead", body: "We keep working, and stop charging" },
  ],
  points: [
    {
      label: "On speed",
      body: "No promise about how fast. Scaling a contractor is not overnight work, and anyone who says otherwise is selling something.",
    },
    {
      label: "On measurement",
      body: "The tracking is the reason we can offer this at all. An agency that cannot see past the lead has nothing to measure a promise against.",
    },
    {
      label: "On your side",
      body: "Complete the onboarding, act on the advice, keep the CRM current with numbers third-party data can back up. Cancel any time on thirty days’ notice.",
    },
  ],
  note: "The agreement draws the rule. Your numbers fill it in. It carries no pre-filled figures, because nothing in it has been measured yet.",
} as const;

export const comparison = {
  eyebrow: "The comparison",
  headSans: "Most agencies aren’t built for the truck schedule.",
  headSerif: "We are.",
  theirsLabel: "Other agencies",
  oursLabel: "TradeOps",
  primary: [
    {
      label: "Scope",
      theirs: "A different agency per service",
      ours: "One shop for the brand, the marketing, and the tracking",
    },
    {
      label: "Reporting",
      theirs: "Vanity metrics and impression screenshots",
      ours: "Calls, rankings, and which jobs closed — the numbers Google and Search Console render",
    },
    {
      label: "Guarantee",
      theirs: "None",
      ours: "Ahead on the ledger in six months, or we stop charging",
    },
    {
      label: "Proof",
      theirs: "Trust us",
      ours: "Every figure names its source and window",
    },
  ],
  extra: [
    {
      label: "Industry focus",
      theirs: "Any business with a credit card",
      ours: "Home service only",
    },
    {
      label: "Tracking",
      theirs: "GA4 and hope",
      ours: "Call tracking plus the CRM under every service",
    },
    {
      label: "Built by",
      theirs: "Career marketers",
      ours: "An operator who ran and sold a home service company",
    },
    {
      label: "Contract",
      theirs: "12 to 24 month lock-in",
      ours: "Cancel any time on thirty days’ notice",
    },
    {
      label: "Communication",
      theirs: "One welcome call, then silence",
      ours: "Proactive, from the founders",
    },
  ],
} as const;

export const founders = {
  eyebrow: "Why this company exists",
  headSans: "You are not getting an account manager.",
  headSerif: "You are getting the two people whose names are on these results.",
  stats: [
    { figure: "1", label: "home service company built and sold" },
    { figure: "5", label: "clients named on this page" },
    { figure: "30", label: "operator conversations on TradeOps Radio" },
  ],
  people: [
    {
      id: "bengt",
      name: "Bengt Jobe",
      role: "Co-founder",
      lead: "Bengt ran the trucks before he ran the marketing.",
      body: "Bengt started a home service company, scaled it, and sold it. That is why we know what seasonality does to a schedule — and what a missed replacement job actually costs a crew week.",
      evidence: {
        src: "/jobsite-chipper.jpg",
        alt: "A chipper and dump trailer beside a cleared driveway",
        caption:
          "The business Bengt ran — landscaping and hardscaping from the company he sold. Not client jobs.",
      },
    },
    {
      id: "yash",
      name: "Yash Singh",
      role: "Co-founder",
      lead: "Yash runs the search on the accounts named on this page. The invitations came after the results.",
      body: "His local SEO course is published on Kyle Roof’s platform, and he spoke on local SEO at WordCamp Philippines 2026.",
      evidence: {
        src: "/founder-yash-speaking.jpg",
        alt: "Yash Singh at a lectern with a microphone, mid-session at WordCamp Philippines 2026",
        caption: "Photo: WordPress Philippines, CC BY-NC-SA 4.0.",
      },
      links: [
        {
          label: "The session page",
          href: "https://philippines.wordcamp.org/2026/session/local-seo-in-2026/",
        },
        {
          label: "The organizer’s recap",
          href: "https://philippines.wordcamp.org/2026/wcph2026-highlights/",
        },
        {
          label: "IMG Courses",
          href: "https://img.courses/yash-singh-local-seo-domination-blueprint/",
        },
      ],
    },
  ],
  cta: "Talk with the two people whose names are on these results",
} as const;

export const radio = {
  eyebrow: "We host our own show",
  headSans: "Welcome to",
  headSerif: "TradeOps Radio.",
  body: "Thirty conversations with operators. Nobody selling anything. Two years of it, from August 2024 — thirty-four hours in total. Owners who went from almost bankrupt to $1.7 million. A nineteen-year-old who sold $2.26 million in his first year. A buyer who has sold more than 136 companies. It is the least polished thing we make, and the most useful.",
  cta: "All 30 episodes",
  href: "https://www.youtube.com/playlist?list=PLbWGX7GwdVozUMp2ywTAjjv1fpgaFHDPW",
  episodes: [
    { n: "03", id: "PWi2QjkxUnU", title: "Stephen Jobe, almost bankrupt to $1.7M" },
    { n: "15", id: "vTrBghoJ9oM", title: "Nineteen years old, $2.26M in the first year" },
    { n: "23", id: "0TTyqcTfcGk", title: "Patrick Lange has sold over 136 companies" },
    { n: "27", id: "XneeuqiCOT8", title: "Michael Pompeo, $7M to $40M" },
    { n: "10", id: "e7IVzsE-9ro", title: "Chris Crew, $0 to $30M" },
    { n: "05", id: "_J3U5xOWP2U", title: "Eric Turner, a master plumber on AI" },
    { n: "04", id: "W0szbT_Mgb8", title: "Lawrence Castillo, an 81-year-old HVAC company" },
    { n: "21", id: "C13F0HFGwNU", title: "Derik Wolfe, the Call Dad operations playbook" },
  ],
} as const;

export const faq = {
  eyebrow: "FAQ",
  headSans: "The questions",
  headSerif: "operators actually ask.",
  items: [
    {
      q: "Who is this for?",
      a: "Home service operators who want more booked jobs they can trace — not a logo refresh and a hope. If you run the trucks (or a portfolio of companies that do), the audit is built for you.",
    },
    {
      q: "How is TradeOps different from every other agency that pitched me?",
      a: "We build for home service companies and nothing else. One of us ran a home service company and sold it. Every figure on this page names its source and the window it covers, and the work is backed by a six-month guarantee on the ledger.",
    },
    {
      q: "How long before I see results?",
      a: "No overnight promise. Search and reputation compound over months. The guarantee runs six months for that reason, and you get a monthly report the whole way.",
    },
    {
      q: "Do I have to sign a long contract?",
      a: "No. Cancel any time on thirty days’ notice before your next billing date.",
    },
    {
      q: "I have been burned before. Why trust you?",
      a: "Do not trust us — check us. The numbers on this page are the ones Google and Search Console render, not our own dashboard, and every one names the month it covers. The guarantee exists for the same reason. Both our names are on these results.",
    },
    {
      q: "What does pricing look like?",
      a: "You get an exact number on the audit call, once we have seen your market. There is no figure on this page because there is no figure that is true for every operator. You still leave with a written plan either way.",
    },
    {
      q: "Do you do branding, video, or social?",
      a: "Brand and print, yes. Video, yes — shot and cut by us. Both are on this page with the work behind them. Anything not on this page, we do not do.",
    },
  ],
} as const;

export const finalCta = {
  eyebrow: "Home service only",
  headSans: "You run the trucks.",
  headSerif: "We fill the schedule.",
  body: "We look at your business — or a portfolio company — and send back a written plan. Where you rank today. Where the calls are going. Which leads never got followed up. What the missed replacement work is worth. Then what to do first.",
  ctaPrimary: BOOK_LABEL,
  ctaSecondary: "See available times",
  micro: "Free audit · 15 minutes · You keep the plan either way",
  close:
    "More booked jobs, a ledger you can check, and a guarantee that has to clear math — not marketing language.",
} as const;

export const footer = {
  brand:
    "TradeOps Consulting. Every figure on this page names its source and the window it covers.",
  phone: PHONE,
  columns: [
    {
      title: "Services",
      links: [
        { label: "Get found", href: "#services" },
        { label: "Get calls now", href: "#services" },
        { label: "Get chosen", href: "#services" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "Founders", href: "#founders" },
        { label: "Results", href: "#results" },
        { label: "Method", href: "#method" },
        { label: "Guarantee", href: "#guarantee" },
        { label: "TradeOps Radio", href: "#radio" },
        { label: "FAQ", href: "#faq" },
      ],
    },
  ],
} as const;
