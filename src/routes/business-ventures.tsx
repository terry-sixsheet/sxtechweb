import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Cpu,
  Rocket,
  Network,
  ShieldCheck,
  Zap,
  LineChart,
  Target,
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
import heroTech from "@/assets/hero-tech.jpg";
import bvVenture from "@/assets/bv-venture.jpg";
import bvGrowth from "@/assets/bv-growth.jpg";

export const Route = createFileRoute("/business-ventures")({
  head: () => ({
    meta: [
      { title: "Business & Ventures Transform — SX Transformation" },
      {
        name: "description",
        content:
          "SX Tech: Technology Venture Builder. Build scalable digital platforms, deliver AI-driven transformation, and invest in synergistic technology ventures.",
      },
      {
        property: "og:title",
        content: "Business & Ventures Transform — SX Transformation",
      },
      {
        property: "og:description",
        content:
          "Strategy + Build + Venture + Market Access + Domain Expertise = Full Loop Execution.",
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
        <SXTech />
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
          Business &amp; Ventures Transform
        </div>
        <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight md:text-6xl">
          Technology <span className="text-gradient">Venture Builder</span>
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-pretty text-base text-muted-foreground md:text-lg">
          We design, build, activate, and connect new business systems —
          transforming companies into compounding revenue engines.
        </p>
      </div>
    </section>
  );
}

function ImageBand() {
  const items = [
    { src: bvVenture, alt: "Founder reading live venture dashboards", label: "Venture Studio" },
    { src: bvGrowth, alt: "Compounding growth visualization", label: "Compounding Growth" },
  ];
  return (
    <Section>
      <div className="grid gap-6 md:grid-cols-2">
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
              className="h-72 w-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-[1.04]"
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

function SXTech() {
  const services = [
    {
      title: "Venture Studio",
      icon: Rocket,
      points: [
        "Build startup or new business unit",
        "Co-invest (equity / revenue share)",
        "Go-to-market strategy",
        "Venture creation and acceleration",
      ],
    },
    {
      title: "Platform Builder",
      icon: Cpu,
      points: [
        "Full digital platform development",
        "System modernization (legacy upgrade)",
        "AI implementation squad",
        "Production-ready systems",
      ],
    },
    {
      title: "Biz Growth Design",
      icon: LineChart,
      points: [
        "Revenue blueprint",
        "Business operating system design",
        "Monetization (platform / ecosystem / subscription)",
        "Transformation control tower",
      ],
    },
    {
      title: "Power Layer",
      icon: ShieldCheck,
      points: [
        "Technology infrastructure",
        "Data infrastructure",
        "Scalable foundation for business",
      ],
    },
  ];
  const methodology = [
    { k: "Design", v: "Business architecture" },
    { k: "Build", v: "Platform creation" },
    { k: "Activate", v: "Unlock partners & opportunities" },
    { k: "Connect", v: "Convert system into revenue" },
    { k: "Specialize", v: "Apply domain expertise" },
  ];
  const domains = ["Fintech", "Martech", "Event Tech", "AI Transformation", "Blockchain"];

  return (
    <Section
      eyebrow="SX Tech"
      title={<>Build, Activate, and Compound Growth</>}
      subtitle="Build scalable digital platforms. Deliver AI-driven transformation. Invest in synergistic technology ventures."
    >
      <div className="mb-14">
        <div className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          Service Framework
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {services.map((s) => (
            <GradientCard key={s.title}>
              <div className="flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-primary text-white shadow-glow">
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold">{s.title}</h3>
              </div>
              <ul className="mt-5 space-y-2.5">
                {s.points.map((p) => (
                  <li
                    key={p}
                    className="flex items-start gap-2.5 text-sm text-muted-foreground"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--brand-cyan)]" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </GradientCard>
          ))}
        </div>
      </div>

      <div className="mb-14">
        <div className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          Core Methodology
        </div>
        <div className="grid gap-4 md:grid-cols-5">
          {methodology.map((m, i) => (
            <div
              key={m.k}
              className="rounded-2xl border border-border bg-card/50 p-5 backdrop-blur"
            >
              <div className="text-xs font-semibold tracking-[0.2em] text-[color:var(--brand-cyan)]">
                STEP 0{i + 1}
              </div>
              <div className="mt-2 text-lg font-semibold">{m.k}</div>
              <div className="mt-1 text-sm text-muted-foreground">{m.v}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-14 grid gap-6 md:grid-cols-2">
        <GradientCard>
          <div className="flex items-center gap-3">
            <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-primary text-white shadow-glow">
              <Network className="h-5 w-5" />
            </div>
            <h3 className="text-xl font-semibold">Strategic Access</h3>
          </div>
          <ul className="mt-5 space-y-2.5 text-sm text-muted-foreground">
            <li className="flex gap-2.5"><Zap className="mt-0.5 h-4 w-4 text-[color:var(--brand-cyan)]" /> Ecosystem building</li>
            <li className="flex gap-2.5"><Zap className="mt-0.5 h-4 w-4 text-[color:var(--brand-cyan)]" /> Access to key players</li>
            <li className="flex gap-2.5"><Zap className="mt-0.5 h-4 w-4 text-[color:var(--brand-cyan)]" /> Faster deal execution</li>
          </ul>
          <p className="mt-5 rounded-xl border border-border bg-background/40 p-4 text-sm italic text-foreground/90">
            “Execution speed is a competitive advantage.”
          </p>
        </GradientCard>

        <GradientCard>
          <div className="flex items-center gap-3">
            <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-primary text-white shadow-glow">
              <Target className="h-5 w-5" />
            </div>
            <h3 className="text-xl font-semibold">Domain Expertise</h3>
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            {domains.map((d) => (
              <span
                key={d}
                className="rounded-full border border-border bg-background/40 px-3 py-1.5 text-sm"
              >
                {d}
              </span>
            ))}
          </div>
          <p className="mt-5 rounded-xl border border-border bg-background/40 p-4 text-sm italic text-foreground/90">
            “Not generic consulting — domain-driven system building.”
          </p>
        </GradientCard>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="rounded-3xl border-border/80 bg-card/40 backdrop-blur">
          <CardContent className="p-8">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Others
            </div>
            <ul className="mt-4 space-y-2 text-muted-foreground">
              <li>— Strategy only</li>
              <li>— Development only</li>
              <li>— No execution ownership</li>
            </ul>
          </CardContent>
        </Card>
        <GradientCard>
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--brand-cyan)]">
            SX Tech
          </div>
          <p className="mt-4 text-lg font-semibold leading-snug">
            Strategy + Build + Venture + Market Access + Domain Expertise
          </p>
          <p className="mt-3 text-gradient text-2xl font-bold">
            = Full Loop Execution
          </p>
        </GradientCard>
      </div>
    </Section>
  );
}

function CTA() {
  return (
    <Section>
      <div className="relative mx-auto max-w-4xl overflow-hidden rounded-[2rem] border border-border bg-card/40 px-8 py-20 text-center backdrop-blur md:px-16 md:py-24">
        <img
          src={heroTech}
          alt=""
          aria-hidden
          loading="lazy"
          className="absolute inset-0 -z-20 h-full w-full object-cover opacity-30"
        />
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-gradient-to-t from-background via-background/80 to-background/40"
        />
        <h2 className="text-balance text-3xl font-bold tracking-tight md:text-4xl">
          Ready to build the next venture — together?
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
            <Link to="/human-transform">Explore Human Transform</Link>
          </Button>
        </div>
      </div>
    </Section>
  );
}