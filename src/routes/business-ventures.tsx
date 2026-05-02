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
  Layers,
  Database,
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

const CACHE_BUST = `v=${Date.now()}`;
const heroTech = `${heroTechSrc}?${CACHE_BUST}`;
const bvGrowth = `${bvGrowthSrc}?${CACHE_BUST}`;

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
        <ServiceFramework />
        <SystemBuild />
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
    <section className="relative isolate mx-auto max-w-7xl overflow-hidden rounded-[2rem] px-6 py-32 md:mt-8 md:py-44">
      <img
        src={heroTech}
        alt=""
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover opacity-60"
      />
      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-background via-background/80 to-background/40" />
      <div className="relative z-20 mx-auto max-w-4xl text-center">
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-gradient-primary" />
          TECH™
        </div>
        <h1 className="text-balance text-5xl font-bold leading-[1.02] tracking-tight md:text-7xl lg:text-8xl">
          A system to <span className="text-gradient">create and scale revenue.</span>
        </h1>
        <p className="mx-auto mt-8 max-w-2xl text-pretty text-lg text-muted-foreground md:text-xl">
          Design. Build. Activate. Scale.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
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
            <Link to="/contact">Talk to Us</Link>
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
      icon: Building2,
      title: "Venture Builder",
      desc: "We build platforms — not deliver projects.",
    },
    {
      icon: Cpu,
      title: "AI as the Operating Layer",
      desc: "New revenue. Compounding efficiency.",
    },
    {
      icon: HandCoins,
      title: "We Co-Invest",
      desc: "Skin in the game. Aligned outcomes.",
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
              Mission & Vision
            </div>
            <h2 className="text-balance text-4xl font-bold leading-tight tracking-tight md:text-6xl">
              We build the <span className="text-gradient">growth engine.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-pretty text-base text-muted-foreground md:text-lg">
              Platforms, ventures, and revenue systems — designed to compound.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
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
