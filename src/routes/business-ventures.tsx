import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Cpu,
  Rocket,
  Network,
  Zap,
  LineChart,
  Target,
  CheckCircle2,
  Compass,
  Hammer,
  TrendingUp,
  Sparkles,
  Layers,
  Coins,
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
import bvVentureSrc from "@/assets/bv-venture.jpg";
import bvGrowthSrc from "@/assets/bv-growth.jpg";

const CACHE_BUST = `v=${Date.now()}`;
const heroTech = `${heroTechSrc}?${CACHE_BUST}`;
const bvVenture = `${bvVentureSrc}?${CACHE_BUST}`;
const bvGrowth = `${bvGrowthSrc}?${CACHE_BUST}`;

export const Route = createFileRoute("/business-ventures")({
  head: () => ({
    meta: [
      { title: "TECH™ — Venture Builder | SX Transformation" },
      {
        name: "description",
        content:
          "We build new revenue systems. Not just platforms. Venture building, AI systems, and execution — engineered as one transformation system.",
      },
      {
        property: "og:title",
        content: "TECH™ — Venture Builder | SX Transformation",
      },
      {
        property: "og:description",
        content:
          "Design → Build → Activate → Scale. A full transformation system that turns companies into compounding revenue engines.",
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
        <WhatWeCreate />
        <SystemFlow />
        <Services />
        <Multiplier />
        <Proof />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

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
          TECH™ — Venture Builder
        </div>
        <h1 className="text-balance text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl lg:text-8xl">
          We build new <span className="text-gradient">revenue systems.</span>
          <br />
          Not just platforms.
        </h1>
        <p className="mx-auto mt-8 max-w-2xl text-pretty text-lg text-muted-foreground md:text-xl">
          Venture building + AI systems + execution.
        </p>
      </div>
    </section>
  );
}

function WhatWeCreate() {
  const items = [
    { icon: Coins, title: "New revenue streams", desc: "Monetization engines, not just MVPs." },
    { icon: Layers, title: "Scalable business systems", desc: "Operating systems built for compounding growth." },
    { icon: Sparkles, title: "Venture assets", desc: "Equity-grade businesses, owned and operable." },
  ];
  return (
    <Section
      eyebrow="What we create"
      title={<>Outcomes, not deliverables.</>}
    >
      <div className="grid gap-6 md:grid-cols-3">
        {items.map((it) => (
          <GradientCard key={it.title}>
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-primary text-white shadow-glow">
              <it.icon className="h-5 w-5" />
            </div>
            <h3 className="mt-6 text-2xl font-bold leading-tight">{it.title}</h3>
            <p className="mt-3 text-sm text-muted-foreground">{it.desc}</p>
          </GradientCard>
        ))}
      </div>
    </Section>
  );
}

function SystemFlow() {
  const steps = [
    { k: "Design", v: "Revenue blueprint", icon: Compass },
    { k: "Build", v: "Platform & AI", icon: Hammer },
    { k: "Activate", v: "Venture & GTM", icon: Rocket },
    { k: "Scale", v: "Ecosystem growth", icon: TrendingUp },
  ];
  return (
    <Section
      eyebrow="The System"
      title={<>A full transformation system.</>}
      subtitle="One connected flow — from blueprint to compounding growth."
    >
      <div className="relative grid gap-5 md:grid-cols-4">
        {steps.map((s, i) => (
          <div
            key={s.k}
            className="relative rounded-3xl border border-border bg-card/50 p-7 backdrop-blur"
          >
            <div className="text-xs font-semibold tracking-[0.2em] text-[color:var(--brand-cyan)]">
              0{i + 1}
            </div>
            <div className="mt-3 grid h-11 w-11 place-items-center rounded-xl bg-gradient-primary text-white shadow-glow">
              <s.icon className="h-5 w-5" />
            </div>
            <div className="mt-5 text-2xl font-bold">{s.k}</div>
            <div className="mt-1 text-sm text-muted-foreground">{s.v}</div>
            {i < steps.length - 1 && (
              <ArrowRight className="absolute -right-3 top-1/2 hidden h-5 w-5 -translate-y-1/2 text-[color:var(--brand-cyan)] md:block" />
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}

function Services() {
  const services = [
    {
      title: "Venture Studio",
      icon: Rocket,
      copy: "We don't launch startups. We co-build and scale revenue engines.",
    },
    {
      title: "Platform Builder",
      icon: Cpu,
      copy: "Not just software. Production-ready business systems.",
    },
    {
      title: "Biz Growth Design",
      icon: LineChart,
      copy: "Not strategy decks. Executable revenue architecture.",
    },
  ];
  return (
    <Section
      eyebrow="Capabilities"
      title={<>Three layers. One system.</>}
    >
      <div className="grid gap-5 md:grid-cols-3">
        {services.map((s) => (
          <GradientCard key={s.title}>
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-primary text-white shadow-glow">
              <s.icon className="h-5 w-5" />
            </div>
            <h3 className="mt-6 text-2xl font-bold">{s.title}</h3>
            <p className="mt-4 text-base leading-relaxed text-foreground/85">
              {s.copy}
            </p>
          </GradientCard>
        ))}
      </div>
    </Section>
  );
}

function Multiplier() {
  const domains = ["Fintech", "AI", "Martech", "Blockchain"];
  return (
    <Section
      eyebrow="Unfair advantage"
      title={<>What gives us unfair advantage.</>}
    >
      <div className="grid gap-6 md:grid-cols-2">
        <GradientCard>
          <div className="flex items-center gap-3">
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-primary text-white shadow-glow">
              <Network className="h-5 w-5" />
            </div>
            <h3 className="text-2xl font-bold">Strategic access</h3>
          </div>
          <ul className="mt-6 space-y-3 text-base text-foreground/85">
            <li className="flex gap-3"><Zap className="mt-1 h-4 w-4 shrink-0 text-[color:var(--brand-cyan)]" /> Ecosystem & key-player access</li>
            <li className="flex gap-3"><Zap className="mt-1 h-4 w-4 shrink-0 text-[color:var(--brand-cyan)]" /> Speed of execution</li>
            <li className="flex gap-3"><Zap className="mt-1 h-4 w-4 shrink-0 text-[color:var(--brand-cyan)]" /> Active deal flow</li>
          </ul>
        </GradientCard>
        <GradientCard>
          <div className="flex items-center gap-3">
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-primary text-white shadow-glow">
              <Target className="h-5 w-5" />
            </div>
            <h3 className="text-2xl font-bold">Domain expertise</h3>
          </div>
          <div className="mt-6 flex flex-wrap gap-2.5">
            {domains.map((d) => (
              <span
                key={d}
                className="rounded-full border border-border bg-background/40 px-4 py-2 text-sm font-medium"
              >
                {d}
              </span>
            ))}
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            Domain-driven system building — not generic consulting.
          </p>
        </GradientCard>
      </div>
    </Section>
  );
}

function Proof() {
  const cases = [
    {
      name: "SX Snap",
      problem: "Events lacked compounding capture.",
      built: "Live capture & content engine.",
      result: "10× engagement, instant assets.",
      img: bvVenture,
    },
    {
      name: "KengSob",
      problem: "Fragmented exam prep market.",
      built: "AI learning platform & ecosystem.",
      result: "Scaled to a national category.",
      img: bvGrowth,
    },
    {
      name: "Future venture",
      problem: "Untapped revenue surface.",
      built: "Co-built venture with us.",
      result: "Your next compounding asset.",
      img: heroTech,
    },
  ];
  return (
    <Section
      eyebrow="Proof"
      title={<>Built. Not just designed.</>}
    >
      <div className="grid gap-6 md:grid-cols-3">
        {cases.map((c) => (
          <div
            key={c.name}
            className="group relative overflow-hidden rounded-3xl border border-border bg-card/50 backdrop-blur"
          >
            <div className="relative h-44 overflow-hidden">
              <img
                src={c.img}
                alt=""
                aria-hidden
                loading="lazy"
                className="h-full w-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
            </div>
            <div className="p-7">
              <div className="text-xl font-bold">{c.name}</div>
              <dl className="mt-5 space-y-3 text-sm">
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">Problem</dt>
                  <dd className="mt-1 text-foreground/90">{c.problem}</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">System built</dt>
                  <dd className="mt-1 text-foreground/90">{c.built}</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--brand-cyan)]">Result</dt>
                  <dd className="mt-1 font-semibold">{c.result}</dd>
                </div>
              </dl>
              <div className="mt-5 flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="h-4 w-4 text-[color:var(--brand-cyan)]" />
                Live system
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

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
