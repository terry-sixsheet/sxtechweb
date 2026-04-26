import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Brain,
  Workflow,
  Activity,
  Gauge,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  BackgroundFX,
  Footer,
  GradientCard,
  Nav,
  Section,
} from "@/components/site/Shell";
import heroHuman from "@/assets/hero-human.jpg";
import humanMind from "@/assets/human-mind.jpg";
import humanCoaching from "@/assets/human-coaching.jpg";
import humanFocus from "@/assets/human-focus.jpg";

export const Route = createFileRoute("/human-transform")({
  head: () => ({
    meta: [
      { title: "Human Transform — SX Transformation" },
      {
        name: "description",
        content:
          "SX Human: Mind Longevity for Leaders. A Human Operating System for high-performance leaders — clarity, decision power, and sustained performance.",
      },
      { property: "og:title", content: "Human Transform — SX Transformation" },
      {
        property: "og:description",
        content:
          "We upgrade the operator behind the system. Better decisions, complexity handled, performance sustained.",
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
        <SXHuman />
        <ImageBand />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

function PageHero() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 pt-20 pb-8 md:pt-28 md:pb-12">
      <div className="mx-auto max-w-3xl text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-gradient-primary" />
          Human Transform
        </div>
        <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight md:text-6xl">
          Mind Longevity for <span className="text-gradient">Leaders</span>
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-pretty text-base text-muted-foreground md:text-lg">
          Most transformations fail because the business changes, but the
          leader does not. We upgrade the operator behind the system.
        </p>
      </div>

      <div className="relative mx-auto mt-14 max-w-5xl">
        <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-primary opacity-20 blur-3xl" />
        <div
          className="rounded-[2rem] p-px"
          style={{
            backgroundImage:
              "linear-gradient(140deg, color-mix(in oklab, var(--brand-indigo) 60%, transparent), color-mix(in oklab, var(--brand-cyan) 40%, transparent) 50%, transparent 90%)",
          }}
        >
          <div className="overflow-hidden rounded-[1.95rem] border border-border bg-card/40 backdrop-blur">
            <img
              src={heroHuman}
              alt="Profile portrait of a contemplative leader"
              loading="lazy"
              width={1600}
              height={900}
              className="h-auto w-full opacity-95"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ImageBand() {
  const items = [
    { src: humanCoaching, alt: "Two leaders in coaching dialogue", label: "1:1 Coaching" },
    { src: humanMind, alt: "Glowing neural brain visualization", label: "Cognitive System" },
    { src: humanFocus, alt: "Calm flowing energy waves", label: "Focus & Clarity" },
  ];
  return (
    <Section>
      <div className="grid gap-6 md:grid-cols-3">
        {items.map((it) => (
          <div
            key={it.label}
            className="group relative overflow-hidden rounded-3xl border border-border bg-card/40 backdrop-blur"
          >
            <img
              src={it.src}
              alt={it.alt}
              loading="lazy"
              width={1400}
              height={900}
              className="h-64 w-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-[1.04]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--brand-cyan)]">
                {it.label}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function SXHuman() {
  const framework = [
    { k: "Think", v: "Cognitive input · Pattern recognition", icon: Brain },
    { k: "Decide", v: "Decision system mapping", icon: Workflow },
    { k: "Perform", v: "Execution · Energy management", icon: Activity },
    { k: "Sustain", v: "Anti-burnout · Continuous optimization", icon: Gauge },
  ];
  const layers = [
    {
      title: "Align",
      points: [
        "Cognitive pattern analysis",
        "Decision-making system mapping",
        "Energy & performance diagnostics",
      ],
      output: "Personal Operating System Blueprint",
    },
    {
      title: "Reset",
      points: [
        "Energy management system (sleep / stress / rhythm)",
        "Focus & clarity architecture",
        "Anti-burnout protocol",
      ],
      output: "Daily / weekly execution system",
    },
    {
      title: "Integrate",
      points: [
        "Deep transformation experience (1–3 day reset)",
        "Cognitive & emotional recalibration",
      ],
      output: "State shift and clarity reset",
    },
    {
      title: "Sustain",
      points: [
        "Ongoing advisory",
        "Performance tracking system",
        "Feedback loops",
      ],
      output: "Long-term performance upgrade",
    },
  ];
  return (
    <Section
      eyebrow="SX Human"
      title={<>The Human Operating System</>}
      subtitle="A system for clarity, decision-making, and sustained performance — built for the operators of complex growth."
    >
      <div className="mb-14 grid gap-6 md:grid-cols-2">
        <Card className="rounded-3xl border-border/80 bg-card/50 backdrop-blur">
          <CardContent className="p-8">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Leaders Upgrade
            </div>
            <ul className="mt-4 space-y-2 text-foreground/90">
              <li>· Technology</li>
              <li>· Strategy</li>
              <li>· Teams</li>
            </ul>
          </CardContent>
        </Card>
        <GradientCard>
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--brand-cyan)]">
            But Do Not Upgrade
          </div>
          <ul className="mt-4 space-y-2 font-medium">
            <li>· Cognitive system</li>
            <li>· Decision-making architecture</li>
          </ul>
          <p className="mt-5 rounded-xl border border-border bg-background/40 p-4 text-sm italic text-foreground/90">
            → Result: bottleneck in scaling.
          </p>
        </GradientCard>
      </div>

      <div className="mb-14 grid gap-6 md:grid-cols-2">
        <Card className="rounded-3xl border-dashed border-border bg-transparent">
          <CardContent className="p-8">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              What This Is Not
            </div>
            <p className="mt-3 text-lg text-muted-foreground line-through">
              Wellness · Traditional coaching
            </p>
          </CardContent>
        </Card>
        <GradientCard>
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--brand-cyan)]">
            What This Is
          </div>
          <p className="mt-3 text-xl font-semibold leading-snug">
            A Human Operating System for high-performance leaders.
          </p>
        </GradientCard>
      </div>

      <div className="mb-14">
        <div className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          Framework
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {framework.map((f) => (
            <Card
              key={f.k}
              className="rounded-3xl border-border/80 bg-card/50 backdrop-blur"
            >
              <CardContent className="p-6">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-primary text-white shadow-glow">
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-xl font-bold">{f.k}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{f.v}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="mb-14">
        <div className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          System Layers
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {layers.map((l, i) => (
            <GradientCard key={l.title}>
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-background/40 text-sm font-bold text-[color:var(--brand-cyan)]">
                  0{i + 1}
                </div>
                <h3 className="text-xl font-semibold">{l.title}</h3>
              </div>
              <ul className="mt-5 space-y-2.5">
                {l.points.map((p) => (
                  <li
                    key={p}
                    className="flex items-start gap-2.5 text-sm text-muted-foreground"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--brand-cyan)]" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 rounded-xl border border-border bg-background/40 p-4 text-sm">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  Output ·
                </span>{" "}
                <span className="font-medium">{l.output}</span>
              </div>
            </GradientCard>
          ))}
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {[
          "Better decisions",
          "Handle complexity",
          "Sustain high performance without burnout",
        ].map((o) => (
          <div
            key={o}
            className="rounded-2xl border border-border bg-card/50 p-6 text-center backdrop-blur"
          >
            <div className="text-base font-semibold">{o}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function CTA() {
  return (
    <Section>
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-balance text-3xl font-bold tracking-tight md:text-4xl">
          Evolve the leader. Unlock the system.
        </h2>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="h-12 rounded-full bg-gradient-primary px-7 text-base font-semibold text-white shadow-glow hover:opacity-95"
          >
            <Link to="/" hash="contact">
              Talk to Us <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="h-12 rounded-full border-border bg-card/40 px-7 text-base font-semibold backdrop-blur hover:bg-card"
          >
            <Link to="/business-ventures">Explore Business &amp; Ventures</Link>
          </Button>
        </div>
      </div>
    </Section>
  );
}