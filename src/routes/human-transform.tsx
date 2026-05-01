import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Brain,
  Workflow,
  Activity,
  Gauge,
  Target,
  TreePine,
  Cog,
  Clock,
  TrendingUp,
  Heart,
  GitBranch,
  ExternalLink,
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
import humanCoachingSrc from "@/assets/human-coaching.jpg";
import ritualSrc from "@/assets/ritual-experience.jpg";

const CACHE_BUST = `v=${Date.now()}`;
const heroHuman = `${heroHumanSrc}?${CACHE_BUST}`;
const humanCoaching = `${humanCoachingSrc}?${CACHE_BUST}`;
const ritualImg = `${ritualSrc}?${CACHE_BUST}`;

export const Route = createFileRoute("/human-transform")({
  head: () => ({
    meta: [
      { title: "HUMAN™ — Mind Longevity for Leaders | SX Transformation" },
      {
        name: "description",
        content:
          "A Human Operating System for high-performance leaders. Not wellness, not coaching — cognitive system design under real business pressure.",
      },
      { property: "og:title", content: "HUMAN™ — Mind Longevity for Leaders" },
      {
        property: "og:description",
        content:
          "Think · Decide · Perform · Sustain. Built like a software stack — Align, Reset, Integrate, Sustain.",
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
        <MindLongevity />
        <NotWellness />
        <HowTo />
        <RitualPartnership />
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
        src={heroHuman}
        alt=""
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover opacity-55"
      />
      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-background via-background/85 to-background/40" />
      <div className="relative z-20 mx-auto max-w-4xl text-center">
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-emerald-300 backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          HUMAN™ — Mind Longevity for Leaders
        </div>
        <h1 className="text-balance text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl lg:text-8xl">
          Upgrade the leader.
          <br />
          <span className="text-emerald-400">Unlock the system.</span>
        </h1>
        <p className="mx-auto mt-8 max-w-2xl text-pretty text-lg text-muted-foreground md:text-xl">
          A Human Operating System for high-performance leaders.
        </p>
      </div>
    </section>
  );
}

/* =========================================================
   2. UPGRADING MIND LONGEVITY  (image 7)
   ========================================================= */
function MindLongevity() {
  const items = [
    { icon: Brain, label: "Make better decisions." },
    { icon: GitBranch, label: "Handle exponential complexity." },
    { icon: Heart, label: "Sustain high performance without burnout." },
  ];
  return (
    <Section eyebrow="Why HUMAN™">
      <div className="grid items-center gap-12 md:grid-cols-2">
        <div>
          <h2 className="text-balance text-4xl font-bold leading-tight tracking-tight md:text-5xl">
            Upgrading the Leader's{" "}
            <span className="text-emerald-400">Mind Longevity.</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            We optimize how leaders think, decide, and perform — under real
            business pressure.
          </p>
          <ul className="mt-10 space-y-5">
            {items.map((it) => (
              <li key={it.label} className="flex items-center gap-5">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-300">
                  <it.icon className="h-5 w-5" />
                </div>
                <span className="text-lg font-semibold">{it.label}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card/40 backdrop-blur">
          <img
            src={humanCoaching}
            alt="Two leaders in deep dialogue"
            loading="lazy"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 via-transparent to-transparent" />
        </div>
      </div>
    </Section>
  );
}

/* =========================================================
   3. NOT WELLNESS, NOT COACHING  (image 5)
   ========================================================= */
function NotWellness() {
  const traditional = [
    { icon: Brain, k: "Focus", v: "Personality insights & mindfulness" },
    { icon: Cog, k: "Methodology", v: "Theory-based & isolated from business" },
    { icon: TreePine, k: "Environment", v: "Retreats & escapes" },
    { icon: Clock, k: "Outcome", v: "Temporary awareness" },
  ];
  const sxHuman = [
    { icon: Brain, k: "Focus", v: "Cognitive System Design" },
    { icon: Gauge, k: "Methodology", v: "Real-business pressure protocols" },
    { icon: TrendingUp, k: "Environment", v: "Integrated with business scaling" },
    { icon: Target, k: "Outcome", v: "System-level redesign & decision optimization" },
  ];
  return (
    <Section
      eyebrow="Category break"
      title={<>Not wellness. Not traditional coaching.</>}
      subtitle="A Human Operating System for high-performance leaders."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {/* Traditional */}
        <div className="rounded-[2rem] border border-dashed border-border bg-card/30 p-8 backdrop-blur">
          <div className="mb-6 text-center text-xl font-semibold text-muted-foreground">
            Traditional Approach
          </div>
          <ul className="space-y-5">
            {traditional.map((t) => (
              <li key={t.k} className="flex items-start gap-4">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-border bg-background/40 text-muted-foreground">
                  <t.icon className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-sm font-bold">{t.k}</div>
                  <div className="text-sm text-muted-foreground">{t.v}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* HUMAN */}
        <div className="relative rounded-[2rem] border border-emerald-500/40 bg-gradient-to-br from-emerald-500/10 via-card/60 to-card/40 p-8 backdrop-blur shadow-[0_0_60px_-25px_theme(colors.emerald.400)]">
          <div className="mb-6 text-center text-xl font-bold text-emerald-300">
            HUMAN™
          </div>
          <ul className="space-y-5">
            {sxHuman.map((t) => (
              <li key={t.k} className="flex items-start gap-4">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-emerald-500/20 text-emerald-300">
                  <t.icon className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-sm font-bold">{t.k}</div>
                  <div className="text-sm font-medium">{t.v}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}

/* =========================================================
   4. HOW TO — THINK / DECIDE / PERFORM / SUSTAIN  (image 6)
   ========================================================= */
function HowTo() {
  const nodes = [
    {
      k: "THINK",
      v: "Cognitive inputs & pattern recognition",
      pain: "Information Overload & Brain Fog",
      pos: "top",
      icon: Brain,
    },
    {
      k: "DECIDE",
      v: "Decision-making system mapping",
      pain: "Analysis Paralysis & Fear of Failure",
      pos: "right",
      icon: Workflow,
    },
    {
      k: "PERFORM",
      v: "Energy management & real-time execution",
      pain: "Procrastination & Distractions",
      pos: "bottom",
      icon: Activity,
    },
    {
      k: "SUSTAIN",
      v: "Anti-burnout protocols & continuous optimization",
      pain: "Burnout & Chronic Stress",
      pos: "left",
      icon: Gauge,
    },
  ];
  return (
    <Section
      eyebrow="How it works"
      title={<>The loop — under real business pressure.</>}
      subtitle="Four operating modes. One continuous loop. Centered on real-world execution."
    >
      <div className="mb-10 flex justify-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/40 bg-amber-500/10 px-5 py-2 text-sm font-semibold text-amber-300 backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
          Real Business Pressure
        </div>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        {nodes.map((n, i) => (
          <div
            key={n.k}
            className="relative overflow-hidden rounded-3xl border border-border bg-card/50 p-7 backdrop-blur"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-xs font-semibold tracking-[0.2em] text-emerald-300">
                  0{i + 1}
                </div>
                <div className="mt-3 text-2xl font-bold tracking-tight">
                  {n.k}
                </div>
                <div className="mt-2 max-w-xs text-sm text-muted-foreground">
                  {n.v}
                </div>
              </div>
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-emerald-500/15 text-emerald-300">
                <n.icon className="h-5 w-5" />
              </div>
            </div>
            <div className="mt-6 rounded-xl border border-border bg-background/40 p-4">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                Pain it solves
              </div>
              <div className="mt-1 text-base font-semibold">{n.pain}</div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* =========================================================
   6. RITUAL PARTNERSHIP
   ========================================================= */
function RitualPartnership() {
  return (
    <Section eyebrow="Partnership">
      <div className="relative isolate overflow-hidden rounded-[2rem] border border-border bg-card/40 backdrop-blur">
        <div className="grid gap-0 md:grid-cols-2">
          {/* Image */}
          <div className="relative h-72 md:h-auto">
            <img
              src={ritualImg}
              alt="Ritual Experience — gong ceremony for mind longevity"
              loading="lazy"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-background/10 to-background/60 md:bg-gradient-to-r md:from-transparent md:to-background/40" />
          </div>

          {/* Content */}
          <div className="p-8 md:p-12">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/40 bg-amber-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
              In partnership with Ritual Experience
            </div>
            <h2 className="mt-6 text-balance text-3xl font-bold leading-tight tracking-tight md:text-4xl">
              Ritual Experiences for{" "}
              <span className="text-emerald-400">Mind Longevity.</span>
            </h2>
            <p className="mt-5 text-base text-muted-foreground md:text-lg">
              Designed to help leaders reset, realign, and expand awareness.
              Small group · Private · Intentionally guided — integrated into the
              HUMAN™ Integrate layer.
            </p>
            <ul className="mt-7 grid gap-2 text-sm text-foreground/85 sm:grid-cols-2">
              <li className="flex gap-2"><span className="text-emerald-400">·</span> Reset & realign</li>
              <li className="flex gap-2"><span className="text-emerald-400">·</span> Expand awareness</li>
              <li className="flex gap-2"><span className="text-emerald-400">·</span> Small group · Private</li>
              <li className="flex gap-2"><span className="text-emerald-400">·</span> Intentionally guided</li>
            </ul>
            <div className="mt-8">
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-12 rounded-full border-emerald-500/40 bg-emerald-500/10 px-7 text-base font-semibold text-emerald-200 backdrop-blur hover:bg-emerald-500/20"
              >
                <a
                  href="https://ritual-exp.life/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Ritual Experience
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* =========================================================
   7. CTA
   ========================================================= */
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
