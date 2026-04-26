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
  ShieldCheck,
  Compass,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import sxLogo from "@/assets/sx-logo.png";
import {
  BackgroundFX,
  Footer,
  GradientCard,
  Nav,
  Section,
} from "@/components/site/Shell";

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
        <Ventures />
        <FinalMessage />
        <FinalCTA />
      </main>
      <Footer />
    </div>
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

