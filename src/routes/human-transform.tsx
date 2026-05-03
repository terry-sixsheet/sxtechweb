import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Brain,
  Workflow,
  Activity,
  Gauge,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  BackgroundFX,
  Footer,
  Nav,
  Section,
} from "@/components/site/Shell";
import heroHumanSrc from "@/assets/hero-human.jpg";
import ritualSrc from "@/assets/ritual-experience.jpg";

const CACHE_BUST = `v=${Date.now()}`;
const heroHuman = `${heroHumanSrc}?${CACHE_BUST}`;
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
          HUMAN™
        </div>
        <h1 className="text-balance text-5xl font-bold leading-[1.02] tracking-tight md:text-7xl lg:text-8xl">
          Your business is not the bottleneck.
          <br />
          <span className="text-emerald-400">You are.</span>
        </h1>
        <p className="mx-auto mt-8 max-w-2xl text-pretty text-lg text-muted-foreground md:text-xl">
          A human operating system for leaders. Think · Decide · Perform · Sustain.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button
            asChild
            size="lg"
            variant="outline"
            className="h-12 rounded-full border-emerald-500/40 bg-emerald-500/10 px-8 text-base font-semibold text-emerald-200 backdrop-blur hover:bg-emerald-500/20"
          >
            <Link to="/contact">Talk to Us</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   4. HOW TO — THINK / DECIDE / PERFORM / SUSTAIN  (image 6)
   ========================================================= */
function HowTo() {
  const nodes = [
    { k: "THINK", v: "Clarity under noise.", icon: Brain },
    { k: "DECIDE", v: "Conviction under pressure.", icon: Workflow },
    { k: "PERFORM", v: "Execution under load.", icon: Activity },
    { k: "SUSTAIN", v: "Compounding without burnout.", icon: Gauge },
  ];
  return (
    <Section
      eyebrow="The Framework"
      title={<>Think · Decide · Perform · <span className="text-emerald-400">Sustain.</span></>}
      className="!py-14 md:!py-20"
    >
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {nodes.map((n, i) => (
          <div
            key={n.k}
            className="group relative overflow-hidden rounded-3xl border border-border bg-card/50 p-8 backdrop-blur transition-all hover:-translate-y-1 hover:border-emerald-500/40"
          >
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-emerald-500/15 text-emerald-300">
              <n.icon className="h-5 w-5" />
            </div>
            <div className="mt-6 text-xs font-semibold tracking-[0.24em] text-emerald-300">
              0{i + 1}
            </div>
            <div className="mt-2 text-3xl font-bold tracking-tight">{n.k}</div>
            <p className="mt-3 text-base text-muted-foreground">{n.v}</p>
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
    <Section eyebrow="Partnership" className="!py-14 md:!py-20">
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
    <Section className="!py-14 md:!py-20">
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
