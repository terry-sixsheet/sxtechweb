import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Cpu,
  Rocket,
  Building2,
  HandCoins,
  Compass,
  Hammer,
  TrendingUp,
  Database,
  Layers,
  GitBranch,
  LayoutDashboard,
  Briefcase,
  Sparkles,
  Bitcoin,
  CalendarDays,
  Target,
  Lightbulb,
  Network,
  ShoppingBag,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  BackgroundFX,
  Footer,
  Nav,
  Section,
} from "@/components/site/Shell";
import heroTechSrc from "@/assets/hero-tech.jpg";
import bvGrowthSrc from "@/assets/bv-growth.jpg";
import heroTechImpactSrc from "@/assets/hero-tech-impact.jpg";

const CACHE_BUST = `v=${Date.now()}`;
const heroTech = `${heroTechSrc}?${CACHE_BUST}`;
const bvGrowth = `${bvGrowthSrc}?${CACHE_BUST}`;
const heroTechImpact = `${heroTechImpactSrc}?${CACHE_BUST}`;

export const Route = createFileRoute("/business-ventures")({
  head: () => ({
    meta: [
      { title: "TECH™ — Technology Venture Builder | SX Transformation" },
      {
        name: "description",
        content:
          "A system to create and scale revenue. Design, Build, Activate, Scale — engineered as one.",
      },
      {
        property: "og:title",
        content: "TECH™ — Technology Venture Builder | SX Transformation",
      },
      {
        property: "og:description",
        content:
          "A system to create and scale revenue. Design → Build → Activate → Scale.",
      },
    ],
  }),
  component: BusinessVenturesPage,
});

function BusinessVenturesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <BackgroundFX />
      <Nav />
      <main className="relative">
        <PageHero />
        <CompanyOverview />
        <Capabilities />
        <InvestmentThesis />
        <FocusDomains />
        <PartnersWith />
        <OurEdge />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

/* =========================================================
   1. HERO
   ========================================================= */
function PageHero() {
  return (
    <section className="relative isolate w-full overflow-hidden px-6 py-24 md:py-36">
      {/* Dramatic hero background image */}
      <img
        src={heroTechImpact}
        alt=""
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover opacity-80"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-br from-background/85 via-background/55 to-background/80"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 -top-32 z-[2] h-[500px] w-[500px] rounded-full opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--brand-magenta) 70%, transparent), transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -left-40 z-[2] h-[520px] w-[520px] rounded-full opacity-45 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--brand-cyan) 65%, transparent), transparent 70%)",
        }}
      />
      <div className="relative z-20 mx-auto max-w-7xl">
        <div className="mb-10 text-xs font-bold uppercase tracking-[0.28em] text-[color:var(--brand-magenta)]">
          Services
        </div>
        <h1 className="text-balance text-5xl font-bold leading-[1.05] tracking-tight text-white md:text-6xl lg:text-7xl">
          We <span className="text-gradient-accent">build and transform</span> businesses — powered by AI.
        </h1>
        <p className="mt-8 max-w-2xl text-pretty text-lg text-neutral-200 md:text-xl">
          From idea to growth — we partner, build, and invest.
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--brand-cyan)] md:text-base">
          <span>Strategy</span>
          <ArrowRight className="h-4 w-4 opacity-70" />
          <span>Build</span>
          <ArrowRight className="h-4 w-4 opacity-70" />
          <span>Scale</span>
          <ArrowRight className="h-4 w-4 opacity-70" />
          <span>Co-invest</span>
        </div>
        <div className="mt-12 flex flex-col gap-3 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="h-12 rounded-full bg-gradient-primary px-8 text-base font-semibold text-white shadow-glow hover:opacity-95"
          >
            <Link to="/contact">
              Start Your Transformation <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   2. COMPANY OVERVIEW  (image 1)
   ========================================================= */
function CompanyOverview() {
  const pillars = [
    {
      icon: Lightbulb,
      title: "Our Vision",
      desc: "Build the next generation of ventures — powered by AI.",
    },
    {
      icon: Rocket,
      title: "Our Mission",
      desc: "We partner with early-stage founders, AI builders, and business owners to build, scale, and co-invest in ventures — powered by technology, execution, and strong networks.",
    },
  ];
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-16 md:py-24">
      <div className="relative isolate overflow-hidden rounded-[2rem] border border-border px-6 py-20 md:px-12 md:py-28">
        <img
          src={bvGrowth}
          alt=""
          aria-hidden
          className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover opacity-40"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-b from-background/70 via-background/85 to-background/95"
        />
        <div className="relative z-20">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-gradient-primary" />
              Why We Exist
            </div>
            <h2 className="text-balance text-4xl font-bold leading-tight tracking-tight md:text-6xl">
              We build the <span className="text-gradient">growth engine.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-pretty text-base text-muted-foreground md:text-lg">
              Platforms, ventures, and revenue systems — designed to compound.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="rounded-2xl border border-border bg-card/60 p-7 backdrop-blur"
              >
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-primary text-white shadow-glow">
                  <p.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-6 text-2xl font-bold leading-tight">{p.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   5. THE SYSTEM — Design / Build / Activate / Scale
   ========================================================= */
function ServiceFramework() {
  const stages = [
    { k: "Design", desc: "Map the system. Architect the path.", icon: Compass },
    { k: "Build", desc: "Ship platforms, ventures, infrastructure.", icon: Hammer },
    { k: "Activate", desc: "Launch revenue. Open access. Convert.", icon: Rocket },
    { k: "Scale", desc: "Compound the system. Sustain growth.", icon: TrendingUp },
  ];
  return (
    <Section
      eyebrow="The System"
      title={<>Four stages. <span className="text-gradient">One revenue engine.</span></>}
    >
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {stages.map((s, i) => (
          <div
            key={s.k}
            className="group relative isolate overflow-hidden rounded-3xl border border-border bg-card/60 p-8 backdrop-blur transition-all hover:-translate-y-1 hover:shadow-elevated"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute -right-4 -top-4 select-none text-[5rem] font-black leading-none tracking-tighter text-foreground/[0.05]"
            >
              0{i + 1}
            </div>
            <div className="relative z-10">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-primary text-white shadow-glow">
                <s.icon className="h-5 w-5" />
              </div>
              <div className="mt-6 text-xs font-semibold tracking-[0.24em] text-[color:var(--brand-cyan)]">
                STAGE 0{i + 1}
              </div>
              <h3 className="mt-2 text-2xl font-bold tracking-tight">{s.k}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* =========================================================
   6. CTA
   ========================================================= */
function CTA() {
  return (
    <Section>
      <div className="relative isolate mx-auto max-w-4xl overflow-hidden rounded-[2rem] border border-border bg-card/40 px-8 py-24 text-center backdrop-blur md:px-16 md:py-28">
        <img
          src={heroTech}
          alt=""
          aria-hidden
          loading="lazy"
          className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover opacity-50"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-background/95 via-background/70 to-background/40"
        />
        <h2 className="relative z-20 text-balance text-4xl font-bold tracking-tight md:text-5xl">
          Build your next <span className="text-gradient">revenue system.</span>
        </h2>
        <div className="relative z-20 mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="h-12 rounded-full bg-gradient-primary px-8 text-base font-semibold text-white shadow-glow hover:opacity-95"
          >
            <Link to="/contact">
              Start a Project <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="h-12 rounded-full border-border bg-card/40 px-8 text-base font-semibold backdrop-blur"
          >
            <Link to="/contact">Build a Venture</Link>
          </Button>
        </div>
      </div>
    </Section>
  );
}

/* =========================================================
   7. HOW WE BUILD YOUR SYSTEM
   ========================================================= */
function SystemBuild() {
  const blocks = [
    {
      icon: Compass,
      label: "01 — Architecture",
      title: "Revenue & Business Design",
      desc: "Design revenue architecture and business systems.",
      points: ["Business model design", "Monetization strategy", "Transformation roadmap"],
    },
    {
      icon: Cpu,
      label: "02 — Product",
      title: "Platform & AI Development",
      desc: "Build production-ready platforms and AI systems.",
      points: ["Platform development", "System integration", "AI implementation"],
    },
    {
      icon: Rocket,
      label: "03 — Ventures",
      title: "Venture Creation & Scaling",
      desc: "Co-build and scale ventures and new business units.",
      points: ["Venture studio", "Go-to-market", "Growth strategy"],
    },
    {
      icon: Database,
      label: "04 — Foundation",
      title: "Infrastructure & Data Layer",
      desc: "Build scalable infrastructure and data systems.",
      points: ["Data architecture", "Cloud systems", "Backend infrastructure"],
    },
  ];
  return (
    <Section
      eyebrow="The Build"
      title={<>How we <span className="text-gradient">build your system.</span></>}
    >
      <div className="grid gap-6 md:grid-cols-2">
        {blocks.map((b) => (
          <div
            key={b.title}
            className="group relative isolate overflow-hidden rounded-3xl p-px transition-all hover:-translate-y-1"
            style={{
              backgroundImage:
                "linear-gradient(140deg, color-mix(in oklab, var(--brand-indigo) 45%, transparent), color-mix(in oklab, var(--brand-cyan) 25%, transparent) 55%, transparent 85%)",
            }}
          >
            <div className="relative h-full rounded-[calc(1.5rem-1px)] bg-card/80 p-10 backdrop-blur md:p-12">
              <div className="flex items-start justify-between gap-6">
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-primary text-white shadow-glow">
                  <b.icon className="h-6 w-6" />
                </div>
                <span className="text-xs font-semibold tracking-[0.24em] text-[color:var(--brand-cyan)]">
                  {b.label}
                </span>
              </div>
              <h3 className="mt-8 text-3xl font-bold leading-tight tracking-tight md:text-4xl">
                {b.title}
              </h3>
              <p className="mt-4 text-base text-muted-foreground">{b.desc}</p>
              <div className="mt-8 h-px w-full bg-border/60" />
              <ul className="mt-6 space-y-3">
                {b.points.map((p) => (
                  <li key={p} className="flex items-center gap-3 text-sm text-foreground/80">
                    <span className="h-1.5 w-1.5 rounded-full bg-gradient-primary" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* =========================================================
   8. SIX CAPABILITIES
   ========================================================= */
function Capabilities() {
  const items = [
    {
      icon: Rocket,
      title: "Startup & Venture Launch",
      tagline: "Launch your business from zero",
      desc: "Validate ideas, build MVP, and launch your venture end-to-end.",
    },
    {
      icon: Layers,
      title: "Digital Platform Development",
      tagline: "Build your core technology platform",
      desc: "Design and develop scalable web, mobile, and backend systems.",
    },
    {
      icon: Sparkles,
      title: "Powered by AI Implementation",
      tagline: "Embed AI into the core of your business",
      desc: "Deploy production-grade AI across content, operations, sales, and decision loops — turning intelligence into measurable revenue and efficiency gains.",
    },
    {
      icon: GitBranch,
      title: "System Integration & Modernization",
      tagline: "Connect and upgrade your systems",
      desc: "Integrate tools, modernize legacy systems, and streamline your tech stack.",
    },
    {
      icon: LayoutDashboard,
      title: "PMO & Delivery Management",
      tagline: "Ensure projects get delivered — on time, on target",
      desc: "We manage execution, align teams, track progress, and drive outcomes.",
    },
    {
      icon: Briefcase,
      title: "C-Level as a Service",
      tagline: "Get experienced leadership without full-time cost",
      desc: "Fractional CTO, CPO, CIO to drive strategy, tech, and product execution.",
    },
  ];
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-20 md:py-28">
      <div
        className="relative isolate overflow-hidden rounded-[2rem] px-8 py-20 md:px-16 md:py-28"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.30 0.04 265) 0%, oklch(0.26 0.05 260) 50%, oklch(0.22 0.06 255) 100%)",
        }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -right-32 top-20 z-0 h-[500px] w-[500px] rounded-full opacity-40 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, color-mix(in oklab, var(--brand-cyan) 60%, transparent), transparent 70%)",
          }}
        />
        <div className="relative z-10 mx-auto max-w-5xl">
          <h2 className="text-balance text-3xl font-bold leading-tight tracking-tight text-white md:text-4xl lg:text-5xl">
            Our services. <span className="text-gradient">One integrated team.</span>
          </h2>
          <p className="mt-4 max-w-2xl text-pretty text-sm text-neutral-300 md:text-base">
            Hire us for any of these — or fold the whole set into a single transformation program.
          </p>
        </div>
        <div className="relative z-10 mx-auto mt-14 grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <div
              key={it.title}
              className="group relative flex flex-col rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-md shadow-[0_2px_20px_-8px_rgba(0,0,0,0.4)] transition-all hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.08] hover:shadow-[0_12px_40px_-12px_rgba(0,0,0,0.6)]"
            >
              <div className="flex items-start justify-between">
                <div className="grid h-12 w-12 place-items-center rounded-full bg-gradient-primary text-white shadow-glow">
                  <it.icon className="h-5 w-5" />
                </div>
                <span className="text-xs font-medium tracking-wider text-neutral-500">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-8 text-2xl font-bold leading-tight tracking-tight text-white">
                {it.title}
              </h3>
              <p className="mt-3 text-sm font-semibold text-[color:var(--brand-cyan)]">
                {it.tagline}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-neutral-300">
                {it.desc}
              </p>
              <div className="mt-8 h-px w-12 bg-gradient-primary opacity-60" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   9. FOCUS DOMAINS
   ========================================================= */
function FocusDomains() {
  const domains = [
    {
      icon: Rocket,
      title: "Tech & Startup",
      desc: "Early-stage ventures with scalable models — from MVP to product-market fit.",
    },
    {
      title: "Marketing Tech",
      icon: Target,
      desc: "Tools and growth loops that drive measurable conversion and lower CAC.",
    },
    {
      icon: Sparkles,
      title: "AI & Automation",
      desc: "Intelligent systems that replace manual work and embed AI into the workflows that move the P&L.",
    },
    {
      icon: ShoppingBag,
      title: "Digital Commerce",
      desc: "D2C, platforms, and marketplaces — built to scale revenue across channels.",
    },
  ];
  return (
    <Section
      eyebrow="Focus Areas"
      title={<>Where <span className="text-gradient">growth is happening.</span></>}
      subtitle={
        <>We build where the <span className="text-gradient">market is moving.</span></>
      }
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {domains.map((d) => (
          <div
            key={d.title}
            className="group relative overflow-hidden rounded-3xl border border-border bg-card/60 p-10 backdrop-blur transition-all hover:-translate-y-1 hover:border-[color:var(--brand-cyan)]/40 hover:shadow-elevated"
          >
            <div className="grid h-12 w-12 place-items-center rounded-xl border border-[color:var(--brand-cyan)]/30 bg-[color:var(--brand-cyan)]/10 text-[color:var(--brand-cyan)]">
              <d.icon className="h-5 w-5" />
            </div>
            <h3 className="mt-8 text-2xl font-bold leading-tight tracking-tight">
              {d.title}
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {d.desc}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* =========================================================
   10. INVESTMENT THESIS
   ========================================================= */
function InvestmentThesis() {
  const principles = [
    {
      icon: HandCoins,
      label: "01",
      title: "Capital + Execution",
      desc: "Funding combined with real product, tech, and growth support — we operate alongside you.",
    },
    {
      icon: Sparkles,
      label: "02",
      title: "AI & Technology Power",
      desc: "AI-driven development, automation, and scalable platforms built into every venture.",
    },
    {
      icon: TrendingUp,
      label: "03",
      title: "Go-to-Market & Growth",
      desc: "Marketing, content, and distribution engines to accelerate traction from day one.",
    },
    {
      icon: Network,
      label: "04",
      title: "Strong Network Access",
      desc: "Partners, customers, and ecosystems that unlock real opportunities at every stage.",
    },
  ];
  return (
    <Section
      eyebrow="Co-Invest"
      title={<>We co-build and co-invest in <span className="text-gradient">what we believe.</span></>}
      subtitle={
        <>
          We don’t just invest capital — we invest execution. We partner with founders to build, scale, and grow together.
        </>
      }
    >
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {principles.map((p) => (
          <div
            key={p.title}
            className="group relative isolate overflow-hidden rounded-3xl border border-border bg-card/60 p-8 backdrop-blur transition-all hover:-translate-y-1 hover:shadow-elevated"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute -right-4 -top-4 select-none text-[5rem] font-black leading-none tracking-tighter text-foreground/[0.05]"
            >
              {p.label}
            </div>
            <div className="relative z-10">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-primary text-white shadow-glow">
                <p.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-6 text-xl font-bold tracking-tight">{p.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* =========================================================
   11. WHO WE PARTNER WITH
   ========================================================= */
function PartnersWith() {
  const partners = [
    {
      icon: Lightbulb,
      title: "Early-stage Founders",
      desc: "Have ideas but no product or team yet — we help you go from zero to MVP.",
    },
    {
      icon: Cpu,
      title: "AI Builders & Developers",
      desc: "Strong in tech but lack scalability, structure, or go-to-market muscle.",
    },
    {
      icon: Network,
      title: "Business Owners & Network Players",
      desc: "Looking to expand, digitize, or build new ventures on top of an existing base.",
    },
  ];
  return (
    <Section
      eyebrow="Who We Partner With"
      title={<>Built for <span className="text-gradient">builders.</span></>}
      subtitle={<>We work with people who are ready to execute — not just talk.</>}
    >
      <div className="grid gap-6 md:grid-cols-3">
        {partners.map((p) => (
          <div
            key={p.title}
            className="group relative overflow-hidden rounded-3xl border border-border bg-card/60 p-10 backdrop-blur transition-all hover:-translate-y-1 hover:border-[color:var(--brand-cyan)]/40 hover:shadow-elevated"
          >
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-primary text-white shadow-glow">
              <p.icon className="h-5 w-5" />
            </div>
            <h3 className="mt-8 text-2xl font-bold leading-tight tracking-tight">{p.title}</h3>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* =========================================================
   12. OUR EDGE
   ========================================================= */
function OurEdge() {
  const edges = [
    {
      title: "Strong business + tech execution",
      desc: "Operators who have built and scaled real ventures — not just consultants.",
    },
    {
      title: "AI-first approach",
      desc: "AI embedded into every venture, every workflow, every decision loop.",
    },
    {
      title: "Network-driven growth",
      desc: "Tap into our mentor, partner, and investor pool to accelerate every stage.",
    },
    {
      title: "Co-build & co-invest model",
      desc: "Skin in the game — we share the risk and the upside alongside you.",
    },
  ];
  return (
    <Section
      eyebrow="What Makes Us Different"
      title={<>Our <span className="text-gradient">unfair advantage.</span></>}
    >
      <div className="grid gap-5 md:grid-cols-2">
        {edges.map((e) => (
          <div
            key={e.title}
            className="flex items-start gap-5 rounded-3xl border border-border bg-card/60 p-8 backdrop-blur transition-all hover:-translate-y-1 hover:shadow-elevated"
          >
            <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-primary text-white shadow-glow">
              <CheckCircle2 className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold leading-tight tracking-tight">{e.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{e.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
