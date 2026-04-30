import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Cpu,
  Rocket,
  LineChart,
  Database,
  Building2,
  HandCoins,
  Network,
  Compass,
  Hammer,
  Zap,
  Plug,
  Microscope,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  BackgroundFX,
  Footer,
  GradientCard,
  Nav,
  Section,
} from "@/components/site/Shell";
import heroTechSrc from "@/assets/hero-tech.jpg";

const CACHE_BUST = `v=${Date.now()}`;
const heroTech = `${heroTechSrc}?${CACHE_BUST}`;

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
        <WhySXTech />
        <CoreMethodology />
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
    <Section
      eyebrow="Company Overview"
      title={<>Mission &amp; Vision</>}
      subtitle="Empower businesses through innovative solutions and strategic partnerships — fostering growth in an ever-evolving digital landscape."
    >
      <div className="grid gap-5 md:grid-cols-3">
        {pillars.map((p) => (
          <GradientCard key={p.title}>
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-primary text-white shadow-glow">
              <p.icon className="h-5 w-5" />
            </div>
            <h3 className="mt-6 text-2xl font-bold leading-tight">{p.title}</h3>
            <p className="mt-3 text-sm text-muted-foreground">{p.desc}</p>
          </GradientCard>
        ))}
      </div>
    </Section>
  );
}

/* =========================================================
   3. WHY SX TECH  (image 2)
   ========================================================= */
function WhySXTech() {
  const reasons = [
    {
      icon: Rocket,
      title: "Build new ventures",
      desc: "We co-build Start-ups and new Business Units for corporates, SMEs, partners, and young entrepreneurs.",
    },
    {
      icon: HandCoins,
      title: "Co-develop · Co-invest · Go-to-market",
      desc: "We don't just advise. We build, fund, and ship to market alongside you.",
    },
    {
      icon: Network,
      title: "Partners &amp; Ecosystem",
      desc: "We unlock partners and assemble the ecosystem your venture needs to grow.",
    },
  ];
  return (
    <Section
      eyebrow="Why SX Tech"
      title={<>Transformation Systems · Strategic Access · Domain Expertise</>}
    >
      <div className="grid items-center gap-10 md:grid-cols-[auto_1fr]">
        {/* Center hub */}
        <div className="mx-auto">
          <div
            className="relative grid h-56 w-56 place-items-center rounded-full text-center text-white shadow-glow md:h-64 md:w-64"
            style={{
              backgroundImage:
                "linear-gradient(140deg, color-mix(in oklab, var(--brand-indigo) 95%, transparent), color-mix(in oklab, var(--brand-cyan) 80%, transparent))",
            }}
          >
            <div
              aria-hidden
              className="absolute -inset-2 rounded-full border border-dashed border-[color:var(--brand-cyan)]/40"
            />
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.25em] opacity-80">
                Why
              </div>
              <div className="mt-1 text-3xl font-bold tracking-tight">
                SX TECH
              </div>
            </div>
          </div>
        </div>

        {/* Reasons */}
        <ul className="space-y-4">
          {reasons.map((r) => (
            <li
              key={r.title}
              className="flex gap-5 rounded-2xl border border-border bg-card/50 p-6 backdrop-blur"
            >
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-primary text-white shadow-glow">
                <r.icon className="h-5 w-5" />
              </div>
              <div>
                <div className="text-lg font-bold">{r.title}</div>
                <div
                  className="mt-1 text-sm text-muted-foreground"
                  dangerouslySetInnerHTML={{ __html: r.desc }}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

/* =========================================================
   4. CORE METHODOLOGY — The Transformation Loop  (image 3)
   ========================================================= */
function CoreMethodology() {
  const steps = [
    {
      k: "Design",
      v: "Architect a new business blueprint.",
      icon: Compass,
    },
    {
      k: "Build",
      v: "Develop platforms and systems that actually run.",
      icon: Hammer,
    },
    {
      k: "Activate",
      v: "Turn the system into real revenue.",
      icon: Zap,
    },
    {
      k: "Connect",
      v: "Unlock partners and business opportunities.",
      icon: Plug,
    },
    {
      k: "Specialize",
      v: "Apply deep domain expertise per industry.",
      icon: Microscope,
    },
  ];
  return (
    <Section
      eyebrow="Core Methodology"
      title={<>The Transformation Loop</>}
      subtitle="A continuous loop — every venture compounds back into the next."
    >
      <div className="relative">
        {/* connecting line */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-0 right-0 top-1/2 hidden h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-[color:var(--brand-cyan)]/40 to-transparent md:block"
        />
        <div className="relative grid gap-5 md:grid-cols-5">
          {steps.map((s, i) => (
            <div
              key={s.k}
              className="relative rounded-3xl border border-border bg-card/60 p-6 backdrop-blur"
            >
              <div className="text-xs font-semibold tracking-[0.2em] text-[color:var(--brand-cyan)]">
                0{i + 1}
              </div>
              <div className="mt-3 grid h-11 w-11 place-items-center rounded-xl bg-gradient-primary text-white shadow-glow">
                <s.icon className="h-5 w-5" />
              </div>
              <div className="mt-5 text-xl font-bold">{s.k}</div>
              <div className="mt-2 text-sm text-muted-foreground">{s.v}</div>
            </div>
          ))}
        </div>
      </div>
    </Section>
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
