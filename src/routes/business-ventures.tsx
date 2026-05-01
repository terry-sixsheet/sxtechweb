import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Cpu,
  Rocket,
  LineChart,
  Database,
  Building2,
  HandCoins,
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
          "SX Tech is a technology venture builder. Scalable digital platforms, AI-driven transformation, and synergistic technology ventures.",
      },
      {
        property: "og:title",
        content: "TECH™ — Technology Venture Builder | SX Transformation",
      },
      {
        property: "og:description",
        content:
          "Transformation Systems · Strategic Access · Domain Expertise. Design → Build → Activate → Connect → Specialize.",
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
          TECH™ — Technology Venture Builder
        </div>
        <h1 className="text-balance text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl lg:text-8xl">
          Transformation Systems.
          <br />
          <span className="text-gradient">Built to compound.</span>
        </h1>
        <p className="mx-auto mt-8 max-w-2xl text-pretty text-lg text-muted-foreground md:text-xl">
          Strategic access · Domain expertise · Full-loop execution.
        </p>
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
      title: "Technology Venture Builder",
      desc: "We build scalable digital platforms — not just deliver projects.",
    },
    {
      icon: Cpu,
      title: "AI-Driven Transformation",
      desc: "AI as an operating layer for new revenue and efficiency.",
    },
    {
      icon: HandCoins,
      title: "Synergistic Investment",
      desc: "We co-invest in ventures that compound with our system.",
    },
  ];
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
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
              Company Overview
            </div>
            <h2 className="text-balance text-4xl font-bold leading-tight tracking-tight md:text-5xl">
              Mission &amp; Vision
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-pretty text-base text-muted-foreground md:text-lg">
              Empower businesses through innovative solutions and strategic
              partnerships — fostering growth in an ever-evolving digital
              landscape.
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
   5. SERVICE FRAMEWORK  (image 4)
   ========================================================= */
function ServiceFramework() {
  const layers = [
    {
      title: "Venture Studio",
      desc: "Build ventures and create assets.",
      icon: Rocket,
    },
    {
      title: "Platform Builder",
      desc: "Build digital platforms and AI systems.",
      icon: Cpu,
    },
    {
      title: "Biz Growth Design",
      desc: "Design revenue systems and growth strategy.",
      icon: LineChart,
    },
    {
      title: "Power Layer",
      desc: "Technology &amp; data infrastructure foundation.",
      icon: Database,
    },
  ];
  return (
    <Section
      eyebrow="Service Framework"
      title={<>One connected stack — strategy to revenue.</>}
    >
      <div className="grid items-center gap-8 md:grid-cols-[1fr_auto_18rem]">
        {/* Stacked layers */}
        <div className="space-y-3">
          {layers.map((l, i) => (
            <div
              key={l.title}
              className="group flex items-center gap-5 rounded-2xl border border-border bg-card/60 p-6 backdrop-blur transition-all hover:shadow-glow"
              style={{
                marginLeft: `${i * 12}px`,
              }}
            >
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-primary text-white shadow-glow">
                <l.icon className="h-5 w-5" />
              </div>
              <div>
                <div className="text-lg font-bold">{l.title}</div>
                <div
                  className="mt-1 text-sm text-muted-foreground"
                  dangerouslySetInnerHTML={{ __html: l.desc }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Brace */}
        <div
          aria-hidden
          className="hidden h-full w-8 rounded-r-full border-y-2 border-r-2 border-[color:var(--brand-cyan)]/50 md:block"
        />

        {/* Pull quote */}
        <div className="rounded-3xl border border-border bg-card/60 p-7 backdrop-blur">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--brand-cyan)]">
            Designed as one
          </div>
          <p className="mt-4 text-lg font-semibold leading-snug">
            Every service is engineered to connect — from planning, to building,
            to driving real revenue.
          </p>
          <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
            <li className="flex gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-[color:var(--brand-cyan)]" /> Strategy + Build</li>
            <li className="flex gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-[color:var(--brand-cyan)]" /> Venture + Market access</li>
            <li className="flex gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-[color:var(--brand-cyan)]" /> Domain expertise</li>
          </ul>
        </div>
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
              Start a Venture <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </Section>
  );
}
