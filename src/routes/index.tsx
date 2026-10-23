import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { posters } from "@/data/posters";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Katyayani Padavala — Performance Marketing Specialist" },
      { name: "description", content: "Performance-driven advertising across hospitality, restaurants, jewellery, fashion, real estate and consumer products. Google Ads, Meta Ads, local business marketing, WordPress and AI-powered website development." },
      { property: "og:title", content: "Katyayani Padavala — Performance Marketing Specialist" },
      { property: "og:description", content: "300+ conversions, 6.5% CTR, 200+ branding designs. Paid advertising, campaign optimization, local business marketing and marketing-focused websites." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const stats = [
  ["300+", "Conversions delivered"],
  ["6.5%", "CTR · 156% above avg"],
  ["₹0.39", "Lowest CPC"],
  ["200+", "Branding designs"],
];

const services = [
  { n: "01", t: "Paid Ads", d: "Google & Meta campaigns for 15+ clients, ₹50L+ annual budgets optimised on ROAS." },
  { n: "02", t: "LinkedIn & Snapchat Ads", d: "Working knowledge of B2B targeting on LinkedIn and Gen‑Z reach on Snapchat." },
  { n: "03", t: "Content Calendar & Scheduling", d: "Monthly content calendars planned, written and scheduled across every client channel." },
  { n: "04", t: "SMO", d: "Social media optimisation — profiles, hashtags, posting rhythm and engagement growth." },
  { n: "05", t: "Branding", d: "200+ branding pieces designed — posters, social posts, brand visuals and identity work." },
  { n: "06", t: "Ad Creatives — made by me", d: "Every ad creative designed in‑house by me using Canva & AI tools, top performers >5% CTR." },
];

const skillCategories = [
  {
    cat: "Paid Advertising",
    items: [
      "Meta Ads campaign management",
      "Google Ads Search and Display",
      "Lead generation campaigns",
      "Audience research and retargeting",
      "Keyword research and search intent",
      "Campaign budget management",
      "Creative strategy and A/B testing",
      "Campaign optimization",
    ],
  },
  {
    cat: "Tracking & Analytics",
    items: [
      "Google Analytics 4 (GA4)",
      "Google Tag Manager",
      "Meta Pixel",
      "Conversion tracking",
      "UTM tracking",
      "CTR, CPC, CPM, CPL, CPA & conversion rate analysis",
      "ROAS analysis when revenue tracking is available",
      "Reporting and performance insights",
    ],
  },
  {
    cat: "Local Business Marketing",
    items: [
      "Google Business Profile (formerly GMB)",
      "Local search visibility",
      "Business profile optimization",
      "Local customer acquisition",
      "Calls, website clicks, direction requests & profile interaction analysis",
    ],
  },
];

const webSkills = [
  { n: "01", t: "WordPress Development", d: "Business websites, landing pages, website customization and Elementor page building." },
  { n: "02", t: "AI-Powered Website Development", d: "Websites and prototypes created with AI-assisted development tools such as Lovable, Claude, Gemini and Google AI Studio." },
  { n: "03", t: "Website Design", d: "Responsive layouts, user-friendly interfaces, modern design and mobile-friendly experiences." },
  { n: "04", t: "Marketing-Focused Websites", d: "Landing pages designed around business goals — lead generation, user experience and conversions." },
  { n: "05", t: "Website Optimization", d: "Basic SEO considerations, conversion-focused improvements and integration with marketing analytics." },
];

const webDevTools = ["WordPress", "Elementor", "Lovable", "Claude", "Gemini", "Google AI Studio", "ChatGPT", "Canva"];

const aiTools = ["Lovable", "Claude", "Gemini", "Google AI Studio", "ChatGPT", "Canva", "Flow"];

const projectHighlights = ["Personally developed by me", "AI-assisted website development", "Personal branding & presentation", "Responsive website design", "Marketing + creativity + technology"];

const tools = ["Google Ads", "Meta Ads", "LinkedIn Ads", "Snapchat Ads", "GA4", "GTM", "Meta Pixel", "WordPress", "Elementor", "Lovable", "Canva", "ChatGPT", "Claude", "Gemini", "Google AI Studio", "Flow"];

type IndustryProject = {
  id: string;
  title: string;
  platform: string;
  objective: string;
  audience: string;
  strategies: string[];
  metrics: string[];
  note?: string;
};

const industryProjects: IndustryProject[] = [
  {
    id: "A",
    title: "Convention Hall Marketing",
    platform: "Meta Ads",
    objective: "Generate enquiries for venue bookings, weddings and events.",
    audience: "Families and organisers searching for wedding and event venues locally.",
    strategies: [
      "Location-focused audience targeting",
      "Event and venue promotional creatives",
      "Lead generation campaigns",
      "WhatsApp enquiries and follow-up where used",
      "Audience and creative testing",
      "Lead quality and cost-per-enquiry analysis",
    ],
    metrics: ["Ad spend", "Impressions & reach", "CTR", "CPC & CPM", "Enquiries", "CPL", "Lead-to-booking rate when tracked"],
  },
  {
    id: "B",
    title: "Restaurant Marketing",
    platform: "Meta Ads",
    objective: "Increase local awareness, customer enquiries and promotional engagement.",
    audience: "Local diners and food lovers in the delivery / catchment radius.",
    strategies: [
      "Food-focused video and image creatives",
      "Local audience targeting",
      "Offers and seasonal promotions",
      "Click-to-WhatsApp campaigns where used",
      "Creative testing and campaign optimization",
    ],
    metrics: ["Ad spend", "Impressions", "CTR", "CPC", "WhatsApp enquiries", "Cost per enquiry", "Orders only when verified"],
  },
  {
    id: "C",
    title: "Boutique Marketing",
    platform: "Meta Ads",
    objective: "Promote collections and generate product enquiries or purchases.",
    audience: "Fashion-conscious local shoppers and repeat customers.",
    strategies: [
      "Product-focused creatives",
      "Collection launches and promotional campaigns",
      "Local audience targeting",
      "Retargeting where applicable",
      "Creative testing and audience optimization",
    ],
    metrics: ["Impressions", "CTR", "CPC", "Product enquiries", "CPL", "Purchases & ROAS only with reliable revenue data"],
  },
  {
    id: "D",
    title: "Jewellery Marketing",
    platform: "Meta Ads",
    objective: "Improve product discovery and generate qualified purchase enquiries or store visits.",
    audience: "Prospective buyers for festive, bridal and occasion-based purchases.",
    strategies: [
      "Jewellery product creatives",
      "Festive and occasion-based promotions",
      "Local audience targeting",
      "WhatsApp enquiries where applicable",
      "Retargeting and creative optimization",
    ],
    metrics: ["Impressions", "CTR", "CPC", "Enquiries", "CPL", "Store visits & sales only when verified"],
  },
  {
    id: "E",
    title: "Water Purifier Brand",
    platform: "Google Ads",
    objective: "Reach people actively searching for water purifier products or related services and connect search intent with business offerings.",
    audience: "High-intent searchers researching water purifiers and related services.",
    strategies: [
      "Google Search Ads",
      "Keyword research and search intent analysis",
      "Campaign structure and location targeting",
      "Search ad copy and messaging",
      "Negative keyword research",
      "Search-term quality analysis",
      "CTR, CPC, conversion rate and CPL monitoring",
      "Conversion tracking for calls, forms or enquiries where configured",
    ],
    metrics: ["Impressions", "CTR", "CPC", "Conversions", "CPL", "Search-term quality"],
    note: "Campaign Optimization Approach — keyword relevance, search-term quality, ad messaging and conversion data guide every optimization decision: irrelevant search terms are negated, better-intent keywords are scaled, ad copy is matched to what converts.",
  },
];

const metricsDashboard = [
  { m: "Ad spend", f: "Total budget spent on campaigns" },
  { m: "Impressions", f: "How many times ads were shown" },
  { m: "Reach", f: "Unique people who saw the ads" },
  { m: "CTR", f: "Clicks ÷ Impressions × 100" },
  { m: "Link clicks", f: "Clicks through to the destination" },
  { m: "CPC", f: "Ad Spend ÷ Clicks" },
  { m: "CPM", f: "Ad Spend ÷ Impressions × 1,000" },
  { m: "Leads / enquiries", f: "Forms, calls, WhatsApp or walk-in enquiries generated" },
  { m: "CPL", f: "Ad Spend ÷ Leads" },
  { m: "Conversion rate", f: "Conversions ÷ Relevant Clicks × 100" },
  { m: "CPA", f: "Ad Spend ÷ Conversions" },
  { m: "ROAS", f: "Attributed Revenue ÷ Ad Spend — shown only when revenue data is available" },
];

const scenarioData = [
  ["Convention Hall", "₹30,000", "150,000", "1.8%", "2,700", "₹11.11", "₹200", "180", "₹166.67", "6.67%"],
  ["Restaurant", "₹15,000", "250,000", "2.5%", "6,250", "₹2.40", "₹60", "320", "₹46.88", "5.12%"],
  ["Boutique", "₹20,000", "200,000", "2.2%", "4,400", "₹4.55", "₹100", "250", "₹80", "5.68%"],
  ["Jewellery", "₹30,000", "180,000", "1.6%", "2,880", "₹10.42", "₹166.67", "160", "₹187.50", "5.56%"],
];

const optimizationSteps = [
  { n: "01", t: "Research", d: "Understand the business, audience, keywords, competitors and objectives." },
  { n: "02", t: "Setup", d: "Plan campaigns, targeting, budgets, creatives and conversion tracking." },
  { n: "03", t: "Testing", d: "Test creative variations, messaging, audiences and placements." },
  { n: "04", t: "Measurement", d: "Analyze CTR, CPC, CPM, CPL, conversion rate, lead quality and ROAS when available." },
  { n: "05", t: "Optimization", d: "Improve campaign efficiency based on reliable data and business outcomes." },
];

const menuSections = [
  ["#top", "Home"],
  ["#services", "What I do"],
  ["#ai-tools", "AI Tools"],
  ["#projects", "Projects"],
  ["#metrics", "Metrics Dashboard"],
  ["#scenarios", "Campaign Scenarios"],
  ["#process", "Optimization Process"],
  ["#webdev", "Web Development"],
  ["#website", "Portfolio Website"],
  ["#work", "Posters & Creatives"],
  ["#experience", "Experience"],
  ["#contact", "Contact"],
];

function MetricChip({ label }: { label: string }) {
  return <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium">{label}</span>;
}

function ProjectCard({ p }: { p: IndustryProject }) {
  return (
    <article className="flex flex-col rounded-xl border bg-card p-8 transition-colors hover:bg-secondary/60">
      <div className="flex items-start justify-between gap-3">
        <span className="font-display text-sm font-bold text-primary">Project {p.id}</span>
        <span className="rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">{p.platform}</span>
      </div>
      <h3 className="mt-2 text-2xl font-bold">{p.title}</h3>
      <dl className="mt-5 grid gap-3 text-sm">
        <div>
          <dt className="font-display text-xs font-bold uppercase tracking-widest text-primary">Objective</dt>
          <dd className="mt-1 text-muted-foreground">{p.objective}</dd>
        </div>
        <div>
          <dt className="font-display text-xs font-bold uppercase tracking-widest text-primary">Target audience</dt>
          <dd className="mt-1 text-muted-foreground">{p.audience}</dd>
        </div>
        <div>
          <dt className="font-display text-xs font-bold uppercase tracking-widest text-primary">Campaign strategy</dt>
          <dd>
            <ul className="mt-1 grid gap-1.5 text-muted-foreground">
              {p.strategies.map((s) => (
                <li key={s} className="flex gap-2"><span className="text-primary">▸</span>{s}</li>
              ))}
            </ul>
          </dd>
        </div>
        <div>
          <dt className="font-display text-xs font-bold uppercase tracking-widest text-primary">Tracking & measurement</dt>
          <dd className="mt-2 flex flex-wrap gap-2">{p.metrics.map((m) => <MetricChip key={m} label={m} />)}</dd>
        </div>
      </dl>
      {p.note && <p className="mt-5 rounded-lg bg-background p-4 text-sm leading-relaxed text-muted-foreground">{p.note}</p>}
    </article>
  );
}

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <main id="top" className="overflow-hidden">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <span className="font-display text-xl font-extrabold">KP<span className="text-primary">.</span></span>
        <nav className="hidden gap-8 text-sm font-medium sm:flex">
          <a href="#projects" className="hover:text-primary">Projects</a>
          <a href="#services" className="hover:text-primary">Skills</a>
          <a href="#webdev" className="hover:text-primary">Web Dev</a>
          <a href="#work" className="hover:text-primary">Work</a>
          <a href="#contact" className="hover:text-primary">Contact</a>
        </nav>
        <button
          type="button"
          aria-label="Open sections menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(true)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full border bg-card sm:hidden"
        >
          <span className="block h-0.5 w-5 rounded-full bg-foreground" />
          <span className="block h-0.5 w-5 rounded-full bg-foreground" />
          <span className="block h-0.5 w-5 rounded-full bg-foreground" />
        </button>
      </header>

      <div className={`fixed inset-0 z-50 sm:hidden ${menuOpen ? "" : "pointer-events-none"}`} aria-hidden={!menuOpen}>
        <div
          onClick={() => setMenuOpen(false)}
          className={`absolute inset-0 bg-ink/60 transition-opacity duration-300 ${menuOpen ? "opacity-100" : "opacity-0"}`}
        />
        <aside className={`absolute right-0 top-0 flex h-full w-72 max-w-[82vw] flex-col bg-background shadow-2xl transition-transform duration-300 ${menuOpen ? "translate-x-0" : "translate-x-full"}`}>
          <div className="flex items-center justify-between border-b px-5 py-5">
            <span className="font-display text-sm font-bold uppercase tracking-widest text-primary">Sections</span>
            <button
              type="button"
              aria-label="Close sections menu"
              onClick={() => setMenuOpen(false)}
              className="flex h-9 w-9 items-center justify-center rounded-full border text-xl leading-none"
            >
              ×
            </button>
          </div>
          <nav className="flex-1 overflow-y-auto px-3 py-4">
            {menuSections.map(([href, label]) => (
              <a
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="block rounded-lg px-3 py-3 font-medium hover:bg-secondary hover:text-primary"
              >
                {label}
              </a>
            ))}
          </nav>
        </aside>
      </div>

      <section className="mx-auto max-w-6xl px-6 pb-16 pt-10">
        <p className="mb-6 inline-block rounded-full bg-accent px-4 py-1 text-sm font-semibold text-accent-foreground">Performance Marketing Specialist</p>
        <h1 className="text-[2.6rem] font-extrabold leading-[0.95] tracking-tight sm:text-7xl md:text-8xl">
          Katyayani<br />Padavala<span className="text-primary">.</span>
        </h1>
        <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
          I help businesses grow through performance advertising, creative strategy and data-driven campaign optimization — across hospitality, restaurants, jewellery, fashion, real estate and more. I also build WordPress websites with AI-powered tools.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#projects" className="rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground hover:opacity-90">Explore My Work</a>
          <a href="#contact" className="rounded-full border-2 border-foreground px-6 py-3 font-semibold hover:bg-foreground hover:text-background">Let's Connect</a>
        </div>
      </section>

      <section className="bg-ink py-12 text-ink-foreground">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 md:grid-cols-4">
          {stats.map(([v, l]) => (
            <div key={l}>
              <div className="font-display text-4xl font-extrabold text-primary md:text-5xl">{v}</div>
              <div className="mt-1 text-sm opacity-70">{l}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="services" className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="text-3xl font-extrabold md:text-5xl">What I do</h2>
        <div className="mt-12 grid gap-px overflow-hidden rounded-xl border bg-border md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.n} className="bg-card p-8 transition-colors hover:bg-secondary">
              <span className="font-display text-sm font-bold text-primary">{s.n}</span>
              <h3 className="mt-3 text-xl font-bold">{s.t}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y bg-background py-24">
        <div className="mx-auto max-w-6xl px-6">
          <p className="mb-4 font-display text-sm font-bold uppercase tracking-widest text-primary">Core strengths</p>
          <h2 className="text-3xl font-extrabold md:text-5xl">Performance Marketing Skills</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {skillCategories.map((c, i) => (
              <div key={c.cat} className="rounded-xl border bg-card p-8">
                <span className="font-display text-sm font-bold text-primary">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 text-xl font-bold">{c.cat}</h3>
                <ul className="mt-5 grid gap-2.5 text-sm text-muted-foreground">
                  {c.items.map((it) => (
                    <li key={it} className="flex gap-2"><span className="text-primary">▸</span>{it}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="ai-tools" className="mx-auto max-w-6xl px-6 py-24">
        <p className="mb-4 font-display text-sm font-bold uppercase tracking-widest text-primary">Creative technology</p>
        <h2 className="text-3xl font-extrabold md:text-5xl">AI Tools</h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">AI tools I use every day — for ad creative design, content and AI-assisted website development.</p>
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {aiTools.map((t) => (
            <div key={t} className="rounded-xl border bg-card p-6 text-center font-display text-lg font-bold transition-colors hover:bg-secondary">{t}</div>
          ))}
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
        <p className="mb-4 font-display text-sm font-bold uppercase tracking-widest text-primary">Industry experience</p>
        <h2 className="text-3xl font-extrabold md:text-5xl">Performance Marketing Projects</h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">Campaign work across multiple industries — each project organised the way I explain it in an interview: objective, audience, platform, strategy, tracking and results.</p>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {industryProjects.map((p) => <ProjectCard key={p.id} p={p} />)}
        </div>
      </section>

      <section id="metrics" className="bg-ink py-24 text-ink-foreground">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-extrabold md:text-5xl">Performance Metrics Dashboard</h2>
          <p className="mt-4 max-w-2xl text-ink-foreground/70">The numbers I track on every campaign — with the formulas I hold them to, so every figure stays mathematically consistent.</p>
          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {metricsDashboard.map((m) => (
              <div key={m.m} className="rounded-xl border border-ink-foreground/10 bg-ink-foreground/5 p-5">
                <div className="font-display text-lg font-bold text-primary">{m.m}</div>
                <div className="mt-2 text-xs leading-relaxed opacity-70">{m.f}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="scenarios" className="mx-auto max-w-6xl px-6 py-24">
        <p className="mb-2 inline-block rounded-full bg-accent px-4 py-1 text-sm font-semibold text-accent-foreground">Illustrative Campaign Scenarios</p>
        <h2 className="mt-4 text-3xl font-extrabold md:text-5xl">Industry Campaign Scenarios &amp; Performance Analysis</h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">These figures are illustrative examples, not verified results from my campaigns. They demonstrate how campaign metrics can be presented and analysed.</p>
        <div className="mt-10 overflow-x-auto rounded-xl border bg-card">
          <table className="w-full min-w-[900px] text-sm">
            <thead>
              <tr className="border-b bg-secondary text-left">
                {["Industry", "Ad Spend", "Impressions", "CTR", "Clicks", "CPC", "CPM", "Leads", "CPL", "Click-to-Lead"].map((h) => (
                  <th key={h} className="px-4 py-3 font-display text-xs font-bold uppercase tracking-widest text-muted-foreground">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {scenarioData.map((row) => (
                <tr key={row[0]} className="border-b last:border-0">
                  {row.map((cell, i) => (
                    <td key={i} className={i === 0 ? "px-4 py-3 font-semibold" : "px-4 py-3 text-muted-foreground"}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section id="process" className="bg-secondary py-24">
        <div className="mx-auto max-w-6xl px-6">
          <p className="mb-4 font-display text-sm font-bold uppercase tracking-widest text-primary">My process</p>
          <h2 className="text-3xl font-extrabold md:text-5xl">How I Approach Campaign Optimization</h2>
          <div className="mt-12 grid gap-4 md:grid-cols-5">
            {optimizationSteps.map((s) => (
              <div key={s.n} className="rounded-xl border bg-card p-6">
                <span className="font-display text-3xl font-extrabold text-primary">{s.n}</span>
                <h3 className="mt-3 text-lg font-bold">{s.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-xl border-l-4 border-primary bg-card p-6">
            <p className="text-sm leading-relaxed text-muted-foreground">
              <span className="font-bold text-foreground">A lower CPL is not always better.</span> A campaign with a cheaper cost per lead can still underperform if the leads are irrelevant or fail to convert into customers. Lead quality and downstream conversion matter as much as cost — which is why optimization decisions weigh business outcomes, not one metric alone.
            </p>
          </div>
        </div>
      </section>

      <section id="webdev" className="mx-auto max-w-6xl px-6 py-24">
        <p className="mb-4 inline-block rounded-full bg-primary px-4 py-1 text-sm font-semibold text-primary-foreground">Secondary strength</p>
        <h2 className="text-3xl font-extrabold md:text-5xl">Website Development &amp; AI Innovation</h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">Alongside my marketing work, I build websites — combining marketing strategy with website creation to help businesses improve their online presence and customer journey.</p>
        <div className="mt-12 grid gap-px overflow-hidden rounded-xl border bg-border md:grid-cols-2 lg:grid-cols-3">
          {webSkills.map((s) => (
            <div key={s.n} className="bg-card p-8 transition-colors hover:bg-secondary">
              <span className="font-display text-sm font-bold text-primary">{s.n}</span>
              <h3 className="mt-3 text-xl font-bold">{s.t}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{s.d}</p>
            </div>
          ))}
          <div className="flex flex-col justify-center bg-primary p-8 text-primary-foreground">
            <h3 className="font-display text-2xl font-extrabold">Marketer who builds.</h3>
            <p className="mt-3 text-sm opacity-90">I know how landing pages, tracking and analytics work together — because I run the campaigns they serve.</p>
          </div>
        </div>
        <div className="mt-8 flex flex-wrap gap-2">
          {webDevTools.map((t) => (
            <span key={t} className="rounded-full border px-4 py-1.5 text-sm font-medium">{t}</span>
          ))}
        </div>
      </section>

      <section id="website" className="border-y bg-secondary py-24">
        <div className="mx-auto max-w-6xl px-6">
          <p className="mb-4 font-display text-sm font-bold uppercase tracking-widest text-primary">Featured project</p>
          <h2 className="text-3xl font-extrabold md:text-5xl">Personal Portfolio Website — Designed &amp; Developed by Me</h2>
          <div className="mt-10 grid gap-8 rounded-xl border bg-card p-8 md:grid-cols-2 md:p-12">
            <p className="text-lg leading-relaxed text-muted-foreground">
              I developed my own portfolio website using AI-assisted development tools, bringing together my professional profile, performance marketing skills, industry projects and website development capabilities in one digital experience.
            </p>
            <div>
              <div className="flex flex-wrap gap-2">
                {projectHighlights.map((h) => (
                  <span key={h} className="rounded-full bg-background px-4 py-1.5 text-sm font-medium">{h}</span>
                ))}
              </div>
              <p className="mt-6 text-sm text-muted-foreground">A "View Live Website" button will appear here once this site is deployed.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="mx-auto max-w-6xl px-6 py-24">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="text-3xl font-extrabold md:text-5xl">Posters &amp; ad creatives</h2>
          <p className="max-w-sm text-sm text-muted-foreground">Designed by me — branding, social posts and ad creatives from 200+ pieces.</p>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          {posters.map((p) => (
            <figure key={p.title} className="group relative aspect-[4/5] overflow-hidden rounded-xl bg-poster">
              {p.src ? (
                <img src={p.src} alt={p.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              ) : (
                <div className="flex h-full flex-col justify-between p-4 text-primary-foreground">
                  <span className="self-start rounded-full bg-background/20 px-2 py-0.5 text-xs">{p.tag}</span>
                  <span className="font-display text-2xl font-extrabold">{p.title}</span>
                </div>
              )}
            </figure>
          ))}
        </div>
      </section>

      <section className="border-y bg-background py-6">
        <div className="marquee flex w-max gap-10 whitespace-nowrap font-display text-2xl font-bold">
          {[...tools, ...tools].map((t, i) => (
            <span key={i}>{t} <span className="text-primary">✦</span></span>
          ))}
        </div>
      </section>

      <section id="experience" className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="text-3xl font-extrabold md:text-5xl">Experience</h2>
        <div className="mt-10 rounded-xl border bg-card p-8">
          <div className="flex flex-wrap justify-between gap-2">
            <h3 className="text-2xl font-bold">Digital Marketing Executive · Dizital Monk</h3>
          </div>
          <ul className="mt-6 grid gap-3 text-muted-foreground md:grid-cols-2">
            <li>▸ 300+ conversions at ₹23.81 CPR — 44% below benchmark</li>
            <li>▸ 60+ A/B tests, conversion rate up 28%</li>
            <li>▸ Content calendars &amp; post scheduling for 15+ clients</li>
            <li>▸ 200+ ad creatives designed myself with AI tools</li>
            <li>▸ AI workflows cut setup &amp; reporting time by 35%</li>
            <li>▸ Weekly GA4 reports with actionable insights</li>
          </ul>
          <p className="mt-6 text-sm">Certified: Google Ads Search · Google Analytics 4</p>
        </div>
      </section>

      <section id="contact" className="bg-primary py-24 text-primary-foreground">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-5xl font-extrabold md:text-7xl">Let's grow your brand.</h2>
          <p className="mt-4 max-w-xl text-lg opacity-90">From the ad to the landing page — I handle both sides of the funnel.</p>
          <div className="mt-10 flex flex-wrap gap-4 text-lg font-semibold">
            <a href="mailto:katyayanipadavala@gmail.com" className="rounded-full bg-ink px-6 py-3 text-ink-foreground">katyayanipadavala@gmail.com</a>
            <a href="https://linkedin.com/in/katyayanipadavala" target="_blank" rel="noreferrer" className="rounded-full border-2 border-primary-foreground px-6 py-3">LinkedIn ↗</a>
          </div>
        </div>
      </section>
    </main>
  );
}
