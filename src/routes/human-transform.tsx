import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Brain,
  Workflow,
  Activity,
  Gauge,
  Zap,
  AlertTriangle,
  Layers3,
  RefreshCw,
  Anchor,
  Flame,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  BackgroundFX,
  Footer,
  GradientCard,
  Nav,
  Section,
} from "@/components/site/Shell";
import heroHumanSrc from "@/assets/hero-human.jpg";

const CACHE_BUST = `v=${Date.now()}`;
const heroHuman = `${heroHumanSrc}?${CACHE_BUST}`;

export const Route = createFileRoute("/human-transform")({
  head: () => ({
    meta: [
      { title: "HUMAN™ — Operator Upgrade | SX Transformation" },
      {
        name: "description",
        content:
          "Your business is not the bottleneck. You are. Upgrade how you think, decide, and perform under pressure.",
      },
      { property: "og:title", content: "HUMAN™ — Operator Upgrade | SX Transformation" },
      {
        property: "og:description",
        content:
          "Not coaching. Not wellness. A cognitive system designed inside real business pressure.",
      },
    ],
  }),
  component: HumanTransformPage,
});

function HumanTransformPage() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <BackgroundFX />
      <Nav />
      <main className="relative">
        <PageHero />
        <Problem />
        <BreakCategory />
        <WhatWeDo />
        <Framework />
        <SystemFlow />
        <Reality />
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
        src={heroHuman}
        alt=""
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover opacity-55"
      />
      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-background via-background/85 to-background/40" />
      <div className="relative z-20 mx-auto max-w-4xl text-center">
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-emerald-300 backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          HUMAN™ — Operator Upgrade
        </div>
        <h1 className="text-balance text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl lg:text-8xl">
          Your business is not the bottleneck.
          <br />
          <span className="text-emerald-400">You are.</span>
        </h1>
        <p className="mx-auto mt-8 max-w-2xl text-pretty text-lg text-muted-foreground md:text-xl">
          Upgrade how you think, decide, and perform under pressure.
        </p>
      </div>
    </section>
  );
}

function Problem() {
  const items = [
    { icon: Layers3, label: "More complexity" },
    { icon: AlertTriangle, label: "More decisions" },
    { icon: Flame, label: "Less clarity" },
  ];
  return (
    <Section
      eyebrow="The real bottleneck"
      title={
        <>
          The business evolves.
          <br />
          The leader does not.
        </>
      }
      subtitle="Most transformations fail not because of strategy — but because the operator behind it stays the same."
    >
      <div className="grid gap-5 md:grid-cols-3">
        {items.map((it) => (
          <div
            key={it.label}
            className="rounded-3xl border border-border bg-card/50 p-8 text-center backdrop-blur"
          >
            <div className="mx-auto grid h-12 w-12 place-items-center rounded-xl bg-emerald-500/15 text-emerald-300">
              <it.icon className="h-5 w-5" />
            </div>
            <div className="mt-5 text-xl font-bold">{it.label}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function BreakCategory() {
  const traditional = ["Awareness", "Retreat", "Theory"];
  const us = ["Cognitive system design", "Real business pressure", "Decision optimization"];
  return (
    <Section
      eyebrow="Category break"
      title={<>This is not coaching. Not wellness.</>}
    >
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl border border-dashed border-border bg-transparent p-8">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Traditional
          </div>
          <ul className="mt-6 space-y-3">
            {traditional.map((t) => (
              <li key={t} className="text-lg text-muted-foreground line-through">
                {t}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-3xl border border-emerald-500/40 bg-emerald-500/5 p-8 backdrop-blur">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">
            HUMAN™
          </div>
          <ul className="mt-6 space-y-3">
            {us.map((t) => (
              <li key={t} className="flex items-center gap-3 text-lg font-semibold">
                <Zap className="h-5 w-5 text-emerald-400" />
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}

function WhatWeDo() {
  const outputs = ["Faster decisions", "Clear thinking", "High performance"];
  return (
    <Section
      eyebrow="What we do"
      title={<>We redesign how leaders operate.</>}
    >
      <div className="grid gap-5 md:grid-cols-3">
        {outputs.map((o) => (
          <GradientCard key={o}>
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">
              Output
            </div>
            <div className="mt-4 text-3xl font-bold leading-tight">{o}</div>
          </GradientCard>
        ))}
      </div>
    </Section>
  );
}

function Framework() {
  const framework = [
    { k: "Think", icon: Brain },
    { k: "Decide", icon: Workflow },
    { k: "Perform", icon: Activity },
    { k: "Sustain", icon: Gauge },
  ];
  return (
    <Section
      eyebrow="Framework"
      title={<>Think · Decide · Perform · Sustain.</>}
    >
      <div className="grid gap-5 md:grid-cols-4">
        {framework.map((f) => (
          <div
            key={f.k}
            className="rounded-3xl border border-border bg-card/50 p-8 text-center backdrop-blur"
          >
            <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-emerald-500/15 text-emerald-300">
              <f.icon className="h-6 w-6" />
            </div>
            <div className="mt-6 text-2xl font-bold">{f.k}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function SystemFlow() {
  const steps = [
    { k: "Align", v: "Map cognition. Diagnose bottlenecks.", icon: Anchor },
    { k: "Reset", v: "Recalibrate energy and clarity.", icon: RefreshCw },
    { k: "Integrate", v: "Install new operating patterns.", icon: Workflow },
    { k: "Sustain", v: "Lock in performance over time.", icon: Gauge },
  ];
  return (
    <Section
      eyebrow="System"
      title={<>Built like a system. Not a session.</>}
    >
      <div className="grid gap-5 md:grid-cols-4">
        {steps.map((s, i) => (
          <div
            key={s.k}
            className="relative rounded-3xl border border-border bg-card/50 p-7 backdrop-blur"
          >
            <div className="text-xs font-semibold tracking-[0.2em] text-emerald-300">
              0{i + 1}
            </div>
            <div className="mt-3 grid h-11 w-11 place-items-center rounded-xl bg-emerald-500/15 text-emerald-300">
              <s.icon className="h-5 w-5" />
            </div>
            <div className="mt-5 text-2xl font-bold">{s.k}</div>
            <div className="mt-2 text-sm text-muted-foreground">{s.v}</div>
            {i < steps.length - 1 && (
              <ArrowRight className="absolute -right-3 top-1/2 hidden h-5 w-5 -translate-y-1/2 text-emerald-400 md:block" />
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}

function Reality() {
  const items = ["Not a retreat", "Not theory", "Real execution environment"];
  return (
    <Section eyebrow="Reality">
      <div className="mx-auto max-w-4xl rounded-[2rem] border border-emerald-500/30 bg-emerald-500/5 p-10 text-center backdrop-blur md:p-16">
        <h2 className="text-balance text-3xl font-bold leading-tight tracking-tight md:text-5xl">
          This runs inside <span className="text-emerald-400">real business pressure.</span>
        </h2>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {items.map((i) => (
            <div
              key={i}
              className="rounded-2xl border border-border bg-background/40 p-5 text-base font-semibold"
            >
              {i}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function CTA() {
  return (
    <Section>
      <div className="relative isolate mx-auto max-w-4xl overflow-hidden rounded-[2rem] border border-border bg-card/40 px-8 py-24 text-center backdrop-blur md:px-16 md:py-28">
        <img
          src={heroHuman}
          alt=""
          aria-hidden
          loading="lazy"
          className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover opacity-45"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-background/95 via-background/75 to-background/40"
        />
        <h2 className="relative z-20 text-balance text-4xl font-bold tracking-tight md:text-5xl">
          Upgrade your <span className="text-emerald-400">operating system.</span>
        </h2>
        <div className="relative z-20 mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="h-12 rounded-full bg-emerald-500 px-8 text-base font-semibold text-emerald-950 shadow-[0_0_40px_-10px_theme(colors.emerald.400)] hover:bg-emerald-400"
          >
            <Link to="/contact">
              Apply for Program <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </Section>
  );
}
