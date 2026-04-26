import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Brain,
  Cpu,
  Layers,
  Sparkles,
  Target,
  Users,
  Building2,
  Rocket,
  Network,
  Gauge,
  ShieldCheck,
  Zap,
  LineChart,
  Workflow,
  Compass,
  Activity,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import sxLogo from "@/assets/sx-logo.png";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <BackgroundFX />
      <Nav />
      <main className="relative">
        <Hero />
        <CoreBelief />
        <CategoryCreation />
        <WhatWeDo />
        <WhoWeServe />
        <Approach />
        <SXTech />
        <SXHuman />
        <Ventures />
        <FinalMessage />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

/* ----------------------------- Layout helpers ----------------------------- */

function BackgroundFX() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute -top-40 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-primary opacity-20 blur-3xl" />
      <div className="absolute top-[40%] -left-40 h-[500px] w-[500px] rounded-full bg-[color:var(--brand-indigo)] opacity-10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-[color:var(--brand-cyan)] opacity-10 blur-3xl" />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
    </div>
  );
}

function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  className = "",
}: {
  id?: string;
  eyebrow?: string;
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`relative mx-auto max-w-7xl px-6 py-24 md:py-32 ${className}`}
    >
      {(eyebrow || title || subtitle) && (
        <div className="mx-auto mb-16 max-w-3xl text-center">
          {eyebrow && (
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-gradient-primary" />
              {eyebrow}
            </div>
          )}
          {title && (
            <h2 className="text-balance text-4xl font-bold leading-tight tracking-tight md:text-5xl">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="mx-auto mt-5 max-w-2xl text-pretty text-base text-muted-foreground md:text-lg">
              {subtitle}
            </p>
          )}
        </div>
      )}
      {children}
    </section>
  );
}

function GradientCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`group relative rounded-3xl p-px transition-all duration-300 hover:shadow-glow ${className}`}
      style={{
        backgroundImage:
          "linear-gradient(140deg, color-mix(in oklab, var(--brand-indigo) 50%, transparent), color-mix(in oklab, var(--brand-cyan) 30%, transparent) 50%, transparent 80%)",
      }}
    >
      <Card className="h-full rounded-3xl border-0 bg-card/80 backdrop-blur">
        <CardContent className="p-8">{children}</CardContent>
      </Card>
    </div>
  );
}

/* ---------------------------------- Nav ----------------------------------- */

function Nav() {
  const links = [
    { href: "#approach", label: "About Us" },
    { href: "#sx-tech", label: "SX Tech" },
    { href: "#sx-human", label: "SX Human" },
    { href: "#ventures", label: "Ventures" },
  ];
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <a href="#top" className="flex items-center gap-2.5">
          <img
            src={sxLogo}
            alt="SX Transformation"
            className="h-8 w-8 object-contain drop-shadow-[0_0_12px_color-mix(in_oklab,var(--brand-indigo)_60%,transparent)]"
          />
          <span className="text-sm font-semibold tracking-wide">
            SX TRANS
          </span>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <Button
          asChild
          size="sm"
          className="rounded-full bg-gradient-primary text-white shadow-glow hover:opacity-90"
        >
          <a href="#contact">
            Talk to Us <ArrowRight className="ml-1 h-4 w-4" />
          </a>
        </Button>
      </div>
    </header>
  );
}

/* --------------------------------- Hero ----------------------------------- */

function Hero() {
  return (
    <section id="top" className="relative mx-auto max-w-7xl px-6 pt-24 pb-32 md:pt-36 md:pb-40">
      {/* Background logo watermark + ambient glows */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,color-mix(in_oklab,var(--brand-indigo)_35%,transparent),transparent_70%)] blur-2xl" />
        <img
          src={sxLogo}
          alt=""
          aria-hidden
          className="absolute left-1/2 top-1/2 w-[min(80vw,720px)] -translate-x-1/2 -translate-y-1/2 opacity-[0.07] blur-[1px] select-none"
        />
      </div>
      <div className="mx-auto max-w-4xl text-center">
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur">
          <Sparkles className="h-3.5 w-3.5 text-[color:var(--brand-cyan)]" />
          A New Category — The Transformation Company
        </div>
        <h1 className="text-balance text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
          Transforming Business.{" "}
          <span className="text-gradient">Evolving Humans.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-muted-foreground md:text-xl">
          The SX Transformation Ecosystem — Strategic Intelligence + Human
          Depth.
        </p>
        <p className="mx-auto mt-4 max-w-2xl text-pretty text-base text-muted-foreground/80">
          We transform business systems and evolve the humans behind them —
          creating sustainable, scalable growth.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="h-12 rounded-full bg-gradient-primary px-7 text-base font-semibold text-white shadow-glow transition-transform hover:scale-[1.02] hover:opacity-95"
          >
            <a href="#contact">
              Talk to Us <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="h-12 rounded-full border-border bg-card/40 px-7 text-base font-semibold backdrop-blur hover:bg-card"
          >
            <a href="#approach">Explore Our Approach</a>
          </Button>
        </div>
      </div>

      {/* Hero stat band */}
      <div className="mx-auto mt-20 grid max-w-5xl grid-cols-2 gap-px overflow-hidden rounded-3xl border border-border bg-border/60 md:grid-cols-4">
        {[
          { k: "Strategic", v: "Intelligence" },
          { k: "Human", v: "Depth" },
          { k: "System", v: "Building" },
          { k: "Venture", v: "Activation" },
        ].map((s) => (
          <div
            key={s.k}
            className="bg-card/80 px-6 py-7 text-center backdrop-blur"
          >
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              {s.k}
            </div>
            <div className="mt-1 text-lg font-semibold">{s.v}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------ Core Belief ------------------------------- */

function CoreBelief() {
  return (
    <Section eyebrow="Core Belief">
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-balance text-3xl font-semibold leading-snug tracking-tight md:text-4xl">
          “Real transformation happens when both the{" "}
          <span className="text-gradient">business</span> and the{" "}
          <span className="text-gradient">people</span> evolve together.”
        </p>
        <p className="mx-auto mt-8 max-w-2xl text-pretty text-base text-muted-foreground md:text-lg">
          Most companies upgrade technology, strategy, and teams — but rarely
          upgrade the cognitive infrastructure required to lead them.
        </p>
      </div>
    </Section>
  );
}

/* --------------------------- Category Creation ---------------------------- */

function CategoryCreation() {
  const old = [
    {
      title: "Consulting Firms",
      desc: "Strategy & blueprint design only.",
      icon: Compass,
    },
    {
      title: "Tech Companies",
      desc: "Platform & system development only.",
      icon: Cpu,
    },
    {
      title: "Coaching / Wellness",
      desc: "Human awareness only.",
      icon: Brain,
    },
  ];
  return (
    <Section
      eyebrow="Category Creation"
      title={
        <>
          A New Category:{" "}
          <span className="text-gradient">The Transformation Company</span>
        </>
      }
      subtitle="Traditional models solve one layer. We integrate all three."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {old.map((o) => (
          <Card
            key={o.title}
            className="rounded-3xl border-border/80 bg-card/50 backdrop-blur"
          >
            <CardContent className="p-8">
              <div className="mb-5 grid h-11 w-11 place-items-center rounded-xl border border-border bg-background/50">
                <o.icon className="h-5 w-5 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-semibold">{o.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{o.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-10">
        <GradientCard>
          <div className="flex flex-col items-start gap-6 md:flex-row md:items-center">
            <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-primary text-white shadow-glow">
              <Layers className="h-6 w-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold tracking-tight">
                SX Transformation
              </h3>
              <p className="mt-2 text-muted-foreground">
                Strategy + Technology + Leadership combined into one operating
                model.
              </p>
            </div>
            <div className="rounded-full border border-border bg-background/40 px-4 py-2 text-sm font-medium">
              <span className="text-muted-foreground">Result: </span>
              <span className="text-gradient font-semibold">
                Sustainable, scalable real business growth
              </span>
            </div>
          </div>
        </GradientCard>
      </div>
    </Section>
  );
}

/* ------------------------------ What We Do -------------------------------- */

function WhatWeDo() {
  return (
    <Section
      eyebrow="What We Do"
      title={<>Two Pillars. One Operating Model.</>}
      subtitle="SX Tech rebuilds the system. SX Human evolves the leader. Together they create real, compounding growth."
    >
      <div className="grid gap-8 lg:grid-cols-2">
        <PillarCard
          tag="SX TECH"
          subtitle="System + Revenue"
          title="We design, build, activate, and connect new business systems."
          note="Not consulting. Not development. We are a Transformation System Builder and Venture Enabler."
          outputs={[
            "Revenue streams",
            "Scalable digital systems",
            "Strategic access",
            "Domain expertise",
          ]}
          icon={Cpu}
        />
        <PillarCard
          tag="SX HUMAN"
          subtitle="People + Performance"
          title="We transform leaders and design Human Operating Systems."
          note="Focused on clarity, decision-making, and sustained performance."
          outputs={[
            "Leadership clarity",
            "Decision power",
            "Sustained performance",
          ]}
          icon={Brain}
        />
      </div>
    </Section>
  );
}

function PillarCard({
  tag,
  subtitle,
  title,
  note,
  outputs,
  icon: Icon,
}: {
  tag: string;
  subtitle: string;
  title: string;
  note: string;
  outputs: string[];
  icon: React.ComponentType<{ className?: string }>;
}) {
  return (
    <GradientCard>
      <div className="flex items-center gap-3">
        <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-primary text-white shadow-glow">
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--brand-cyan)]">
            {tag}
          </div>
          <div className="text-sm text-muted-foreground">{subtitle}</div>
        </div>
      </div>
      <h3 className="mt-6 text-2xl font-bold leading-snug tracking-tight">
        {title}
      </h3>
      <p className="mt-3 text-muted-foreground">{note}</p>
      <Separator className="my-6 bg-border/60" />
      <div className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
        Outputs
      </div>
      <ul className="mt-4 grid gap-2 sm:grid-cols-2">
        {outputs.map((o) => (
          <li
            key={o}
            className="flex items-center gap-2 rounded-xl border border-border bg-background/40 px-3 py-2 text-sm"
          >
            <CheckCircle2 className="h-4 w-4 text-[color:var(--brand-cyan)]" />
            {o}
          </li>
        ))}
      </ul>
    </GradientCard>
  );
}

/* ------------------------------ Who We Serve ------------------------------ */

function WhoWeServe() {
  const segments = [
    {
      icon: Building2,
      title: "Enterprises",
      desc: "Require new revenue streams and digital systems.",
    },
    {
      icon: Network,
      title: "Conglomerates",
      desc: "Require transformation across multiple business units.",
    },
    {
      icon: Rocket,
      title: "Innovation / Tech Companies",
      desc: "Require foundational structure and execution.",
    },
    {
      icon: Users,
      title: "CEOs / Founders",
      desc: "Require clarity, decision power, and sustained performance.",
    },
  ];
  const pains = [
    "Growth is slowing",
    "Execution is fragmented",
    "Opportunities are unclear",
    "Leadership is under pressure",
  ];
  return (
    <Section
      eyebrow="Who We Serve"
      title="Built for the operators of complex growth."
      subtitle="We work with organizations and leaders facing the real friction of scale."
    >
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {segments.map((s) => (
          <Card
            key={s.title}
            className="rounded-3xl border-border/80 bg-card/50 backdrop-blur transition-all hover:-translate-y-1 hover:shadow-elevated"
          >
            <CardContent className="p-7">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-primary text-white shadow-glow">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-12">
        <div className="mb-5 text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          The Pain Layer
        </div>
        <div className="flex flex-wrap items-center justify-center gap-3">
          {pains.map((p) => (
            <div
              key={p}
              className="rounded-full border border-border bg-card/60 px-4 py-2 text-sm text-foreground/90 backdrop-blur"
            >
              {p}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ------------------------------- Approach --------------------------------- */

function Approach() {
  const steps = [
    "Client Problem",
    "Business System Design",
    "Platform Build",
    "Venture Activation",
    "Strategic Access",
    "Real Business Growth",
  ];
  return (
    <Section
      id="approach"
      eyebrow="Transformation Approach"
      title="From problem to compounding growth."
      subtitle="A continuous loop — designed, built, activated, and connected."
    >
      <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-6">
        {steps.map((s, i) => (
          <div
            key={s}
            className="group relative rounded-2xl border border-border bg-card/50 p-5 backdrop-blur transition-all hover:-translate-y-1 hover:border-[color:var(--brand-indigo)]"
          >
            <div className="text-xs font-semibold tracking-[0.2em] text-[color:var(--brand-cyan)]">
              0{i + 1}
            </div>
            <div className="mt-2 text-sm font-semibold leading-snug">{s}</div>
            <div className="absolute -right-3 top-1/2 hidden h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background lg:flex">
              <ArrowRight className="h-3 w-3 text-muted-foreground" />
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* -------------------------------- SX Tech --------------------------------- */

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
      id="sx-tech"
      eyebrow="SX Tech"
      title={<>Technology Venture Builder</>}
      subtitle="Build scalable digital platforms. Deliver AI-driven transformation. Invest in synergistic technology ventures."
    >
      {/* Service framework */}
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

      {/* Methodology */}
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

      {/* Multipliers */}
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

      {/* Differentiation */}
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

/* -------------------------------- SX Human -------------------------------- */

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
      id="sx-human"
      eyebrow="SX Human"
      title={<>Mind Longevity for Leaders</>}
      subtitle="Most transformations fail because the business changes, but the leader does not. We upgrade the operator behind the system."
    >
      {/* Insight grid */}
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

      {/* What this is */}
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

      {/* Framework */}
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

      {/* System layers */}
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

      {/* Final output */}
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

/* ------------------------------ Ventures ---------------------------------- */

function Ventures() {
  const cases = [
    {
      name: "SX Snap",
      type: "SaaS Photobooth Platform",
      problem:
        "Event organizers needed scalable, branded photo experiences without heavy production overhead.",
      system:
        "Built a multi-tenant SaaS platform with white-label branding, real-time AI capture, and event analytics.",
      result:
        "Recurring revenue model with rapid market expansion across event operators.",
    },
    {
      name: "KengSob",
      type: "Education Platform",
      problem:
        "Learners lacked an outcomes-driven, high-trust prep ecosystem with monetizable instructor networks.",
      system:
        "Designed and built a vertical education platform with content engine, performance tracking, and creator economy layer.",
      result:
        "Scaled an active community and unlocked multi-channel revenue across instructors and partners.",
    },
  ];
  return (
    <Section
      id="ventures"
      eyebrow="Ventures / Proof"
      title="We don’t just launch — we co-create and scale ventures together."
      subtitle="Selected ventures designed, built, and activated through the SX Transformation Ecosystem."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        {cases.map((c) => (
          <GradientCard key={c.name}>
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-2xl font-bold">{c.name}</h3>
                <div className="mt-1 text-sm text-[color:var(--brand-cyan)]">
                  {c.type}
                </div>
              </div>
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-primary text-white shadow-glow">
                <Rocket className="h-5 w-5" />
              </div>
            </div>
            <div className="mt-6 space-y-4 text-sm">
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  Problem
                </div>
                <p className="mt-1 text-foreground/90">{c.problem}</p>
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  System Built
                </div>
                <p className="mt-1 text-foreground/90">{c.system}</p>
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  Result
                </div>
                <p className="mt-1 text-foreground/90">{c.result}</p>
              </div>
            </div>
          </GradientCard>
        ))}
      </div>
    </Section>
  );
}

/* ----------------------------- Final Message ------------------------------ */

function FinalMessage() {
  return (
    <Section>
      <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card/40 px-8 py-20 text-center backdrop-blur md:px-16 md:py-28">
        <div
          aria-hidden
          className="absolute inset-0 -z-10 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(60% 50% at 50% 0%, color-mix(in oklab, var(--brand-indigo) 50%, transparent), transparent 70%)",
          }}
        />
        <h2 className="mx-auto max-w-3xl text-balance text-4xl font-bold leading-tight tracking-tight md:text-6xl">
          The business can scale because{" "}
          <span className="text-gradient">the leader can handle it.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-pretty text-lg text-muted-foreground">
          We transform the entire system — together.
        </p>
      </div>
    </Section>
  );
}

/* ------------------------------- Final CTA -------------------------------- */

function FinalCTA() {
  return (
    <Section id="contact">
      <div className="mx-auto max-w-3xl text-center">
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground backdrop-blur">
          <Sparkles className="h-3.5 w-3.5 text-[color:var(--brand-cyan)]" />
          Begin the Transformation
        </div>
        <h2 className="text-balance text-4xl font-bold tracking-tight md:text-5xl">
          Let’s design the next version of your{" "}
          <span className="text-gradient">business</span> — and the{" "}
          <span className="text-gradient">leader</span> behind it.
        </h2>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button
            size="lg"
            className="h-12 rounded-full bg-gradient-primary px-7 text-base font-semibold text-white shadow-glow hover:opacity-95"
          >
            Talk to Us <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="h-12 rounded-full border-border bg-card/40 px-7 text-base font-semibold backdrop-blur hover:bg-card"
          >
            Build With Us
          </Button>
          <Button
            size="lg"
            variant="ghost"
            className="h-12 rounded-full px-7 text-base font-semibold hover:bg-card/60"
          >
            Partner With Us
          </Button>
        </div>
      </div>
    </Section>
  );
}

/* -------------------------------- Footer ---------------------------------- */

function Footer() {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-10 text-sm text-muted-foreground md:flex-row">
        <div className="flex items-center gap-2.5">
          <img src={sxLogo} alt="SX Transformation" className="h-7 w-7 object-contain" />
          <span className="font-medium text-foreground">SX Transformation</span>
        </div>
        <div className="text-xs">
          © {new Date().getFullYear()} SX Transformation. Strategic
          Intelligence + Human Depth.
        </div>
      </div>
    </footer>
  );
}
