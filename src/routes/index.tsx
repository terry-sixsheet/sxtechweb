import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Brain,
  Cpu,
  Sparkles,
  TrendingDown,
  GitBranch,
  AlertTriangle,
  Camera,
  GraduationCap,
  Rocket,
  Compass,
  Hammer,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import sxLogo from "@/assets/sx-logo.png";
import heroEcosystem from "@/assets/home-ecosystem.jpg";
import bvPlatform from "@/assets/bv-platform.jpg";
import humanCoaching from "@/assets/human-coaching.jpg";
import humanMind from "@/assets/human-mind.jpg";
import bvGrowth from "@/assets/bv-growth.jpg";
import {
  BackgroundFX,
  Footer,
  Nav,
} from "@/components/site/Shell";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SX Transformation — We build revenue systems. We upgrade leaders." },
      {
        name: "description",
        content:
          "A Transformation Company combining Technology + Human Performance. We build business systems and upgrade the leaders behind them.",
      },
      { property: "og:title", content: "SX Transformation — The Transformation Company" },
      {
        property: "og:description",
        content: "We build revenue systems. And upgrade the leaders behind them.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <BackgroundFX />
      <Nav />
      <main className="relative">
        <Hero />
        <CoreInsight />
        <Problem />
        <MainSolution />
        <Proof />
        <Approach />
        <FinalMessage />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

/* ---------- Wrapper ---------- */
function Container({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`mx-auto w-full max-w-7xl px-6 ${className}`}>{children}</div>
  );
}

/* ---------- 1. HERO ---------- */
function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <img
        src={heroEcosystem}
        alt=""
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover opacity-40"
      />
      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-b from-background/70 via-background/85 to-background" />
      <img
        src={sxLogo}
        alt=""
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 z-10 w-[min(75vw,720px)] -translate-x-1/2 -translate-y-1/2 opacity-[0.05] select-none"
      />
      <Container className="relative z-20 flex min-h-[88vh] flex-col items-center justify-center py-32 text-center md:py-40">
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground backdrop-blur">
          <Sparkles className="h-3.5 w-3.5 text-[color:var(--brand-cyan)]" />
          The Transformation Company
        </div>
        <h1 className="text-balance text-5xl font-bold leading-[1.02] tracking-tight md:text-7xl lg:text-[5.5rem]">
          We build revenue systems.
          <br />
          And <span className="text-gradient">upgrade the leaders</span> behind them.
        </h1>
        <p className="mx-auto mt-8 max-w-2xl text-pretty text-lg text-muted-foreground md:text-xl">
          A Transformation Company combining Technology + Human Performance.
        </p>
        <p className="mx-auto mt-3 max-w-xl text-pretty text-base text-muted-foreground/80">
          Transforming business systems. Evolving humans.
        </p>
        <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="h-13 rounded-full bg-gradient-primary px-8 py-6 text-base font-semibold text-white shadow-glow transition-transform hover:scale-[1.02] hover:opacity-95"
          >
            <Link to="/contact">
              Start a Project <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}

/* ---------- 2. CORE INSIGHT ---------- */
function CoreInsight() {
  return (
    <section className="py-32 md:py-40">
      <Container>
        <p className="mx-auto max-w-4xl text-balance text-center text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
          Most companies upgrade systems.
          <br />
          <span className="text-muted-foreground">Few upgrade the </span>
          <span className="text-gradient">leaders running them.</span>
        </p>
      </Container>
    </section>
  );
}

/* ---------- 3. PROBLEM ---------- */
function Problem() {
  const items = [
    {
      icon: TrendingDown,
      label: "Growth is slowing",
      cutout: "GROWTH",
      tone: "from-[color:var(--brand-cyan)]/40 to-transparent",
    },
    {
      icon: GitBranch,
      label: "Execution is fragmented",
      cutout: "EXECUTION",
      tone: "from-[color:var(--brand-indigo)]/45 to-transparent",
    },
    {
      icon: AlertTriangle,
      label: "Leadership is the bottleneck",
      cutout: "LEADERSHIP",
      tone: "from-[color:var(--brand-cyan)]/35 to-transparent",
    },
  ];
  return (
    <section className="py-24 md:py-28">
      <Container>
        <div className="grid gap-5 md:grid-cols-3">
          {items.map((p) => (
            <div
              key={p.label}
              className="group relative isolate overflow-hidden rounded-[20px] border border-border bg-card/40 p-7 backdrop-blur"
            >
              <div
                aria-hidden
                className={`pointer-events-none absolute inset-0 z-0 bg-gradient-to-br ${p.tone}`}
              />
              <div
                aria-hidden
                className="pointer-events-none absolute -right-4 -bottom-6 z-0 select-none text-[6.5rem] font-black uppercase leading-none tracking-tighter text-foreground/[0.04]"
              >
                {p.cutout}
              </div>
              <div className="relative z-10 flex items-center gap-4">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-border bg-background/60">
                  <p.icon className="h-5 w-5 text-[color:var(--brand-cyan)]" />
                </div>
                <div className="text-lg font-semibold leading-snug">{p.label}</div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ---------- 4. MAIN SOLUTION ---------- */
function MainSolution() {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <div className="mb-16 text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-gradient-primary" />
            The Core
          </div>
          <h2 className="text-balance text-4xl font-bold tracking-tight md:text-6xl">
            Two systems. <span className="text-gradient">One transformation.</span>
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <SolutionBlock
            tone="tech"
            tag="SX TECH"
            title="Build Systems. Generate Revenue."
            description="We design, build, and scale business systems that generate real revenue."
            points={[
              "Scalable digital platforms",
              "Revenue system design",
              "Venture creation",
            ]}
            outputs={["New revenue streams", "Scalable infrastructure", "Business growth"]}
            ctaLabel="Explore SX Tech"
            href="/business-ventures"
            icon={Cpu}
            image={bvPlatform}
          />
          <SolutionBlock
            tone="human"
            tag="SX HUMAN"
            title="Upgrade Leaders. Sustain Performance."
            description="We design human operating systems for leaders to think, decide, and perform better."
            points={[
              "Decision systems",
              "Cognitive clarity",
              "High-performance execution",
            ]}
            outputs={["Better decisions", "Clear thinking", "Sustainable performance"]}
            ctaLabel="Explore SX Human"
            href="/human-transform"
            icon={Brain}
            image={humanCoaching}
          />
        </div>
      </Container>
    </section>
  );
}

function SolutionBlock({
  tone,
  tag,
  title,
  description,
  points,
  outputs,
  ctaLabel,
  href,
  icon: Icon,
  image,
}: {
  tone: "tech" | "human";
  tag: string;
  title: string;
  description: string;
  points: string[];
  outputs: string[];
  ctaLabel: string;
  href: "/business-ventures" | "/human-transform";
  icon: React.ComponentType<{ className?: string }>;
  image: string;
}) {
  const accent =
    tone === "tech"
      ? "text-[color:var(--brand-cyan)]"
      : "text-[color:var(--brand-indigo)]";
  const tint =
    tone === "tech"
      ? "from-[color:var(--brand-cyan)]/30 via-transparent to-transparent"
      : "from-[color:var(--brand-indigo)]/35 via-transparent to-transparent";
  return (
    <Link
      to={href}
      className="group relative isolate flex min-h-[640px] flex-col overflow-hidden rounded-[28px] border border-border bg-card/40 p-10 backdrop-blur transition-all hover:-translate-y-1 hover:shadow-elevated"
    >
      <img
        src={image}
        alt=""
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover opacity-25 transition-transform duration-700 group-hover:scale-[1.04]"
      />
      <div
        aria-hidden
        className={`pointer-events-none absolute inset-0 z-10 bg-gradient-to-br ${tint}`}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-background via-background/85 to-background/40"
      />

      <div className="relative z-20 flex h-full flex-col">
        <div className="flex items-center gap-3">
          <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-primary text-white shadow-glow">
            <Icon className="h-5 w-5" />
          </div>
          <div className={`text-xs font-bold uppercase tracking-[0.24em] ${accent}`}>
            {tag}
          </div>
        </div>

        <h3 className="mt-8 text-3xl font-bold leading-tight tracking-tight md:text-4xl">
          {title}
        </h3>
        <p className="mt-4 text-base text-muted-foreground md:text-lg">{description}</p>

        <div className="mt-8 space-y-2.5">
          {points.map((p) => (
            <div key={p} className="flex items-center gap-3 text-base font-medium">
              <span className="h-1.5 w-1.5 rounded-full bg-gradient-primary" />
              {p}
            </div>
          ))}
        </div>

        <div className="mt-auto pt-10">
          <div className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Outputs
          </div>
          <div className="flex flex-wrap gap-2">
            {outputs.map((o) => (
              <span
                key={o}
                className="rounded-full border border-border bg-background/50 px-3 py-1.5 text-sm backdrop-blur"
              >
                {o}
              </span>
            ))}
          </div>
          <div className={`mt-8 inline-flex items-center gap-2 text-sm font-semibold ${accent} transition-transform group-hover:translate-x-1`}>
            {ctaLabel} <ArrowRight className="h-4 w-4" />
          </div>
        </div>
      </div>
    </Link>
  );
}

/* ---------- 5. PROOF ---------- */
function Proof() {
  const cases = [
    {
      icon: Camera,
      name: "CAP*TURES Booth",
      desc: "SaaS photobooth platform",
      problem: "Fragmented event tech, no scalable backend.",
      built: "Built scalable system",
      result: "Market expansion",
      image: bvPlatform,
    },
    {
      icon: GraduationCap,
      name: "KengSob",
      desc: "Education platform",
      problem: "Manual learning operations limiting reach.",
      built: "Built digital system",
      result: "Scalable learning system",
      image: humanMind,
    },
    {
      icon: Rocket,
      name: "Your Ventures?",
      desc: "Co-built with founders",
      problem: "New category opportunity.",
      built: "Co-building new ventures",
      result: "In progress",
      image: bvGrowth,
    },
  ];
  return (
    <section className="py-24 md:py-32">
      <Container>
        <div className="mb-16 text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-gradient-primary" />
            Proof
          </div>
          <h2 className="text-balance text-4xl font-bold tracking-tight md:text-6xl">
            Built. <span className="text-gradient">Not just advised.</span>
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {cases.map((c) => (
            <div
              key={c.name}
              className="group relative isolate flex flex-col overflow-hidden rounded-[24px] border border-border bg-card/50 backdrop-blur transition-all hover:-translate-y-1 hover:shadow-elevated"
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={c.image}
                  alt={c.name}
                  className="h-full w-full object-cover opacity-70 transition-transform duration-700 group-hover:scale-[1.06]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                <div className="absolute bottom-4 left-5 flex items-center gap-2.5">
                  <div className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-primary text-white shadow-glow">
                    <c.icon className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-base font-bold leading-tight">{c.name}</div>
                    <div className="text-xs text-muted-foreground">{c.desc}</div>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-4 p-6">
                <Row label="Problem" value={c.problem} />
                <Row label="What we built" value={c.built} />
                <Row label="Result" value={c.result} accent />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Row({ label, value, accent }: { label: string; value: string; accent?: boolean }) {
  return (
    <div>
      <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
        {label}
      </div>
      <div className={`mt-1 text-sm leading-snug ${accent ? "text-gradient font-semibold" : "text-foreground/90"}`}>
        {value}
      </div>
    </div>
  );
}

/* ---------- 6. APPROACH ---------- */
function Approach() {
  const steps = ["Design", "Build", "Scale"];
  return (
    <section id="approach" className="py-24 md:py-32">
      <Container>
        <div className="mb-16 text-center">
          <h2 className="text-balance text-4xl font-bold tracking-tight md:text-6xl">
            How we work
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-pretty text-base text-muted-foreground md:text-lg">
            We don't just design strategies. We build and execute systems.
          </p>
        </div>
        <div className="mx-auto flex max-w-4xl flex-col items-stretch gap-4 md:flex-row md:items-center">
          {steps.map((s, i) => (
            <div key={s} className="flex flex-1 items-center gap-4">
              <div className="flex-1 rounded-[20px] border border-border bg-card/50 p-8 text-center backdrop-blur">
                <div className="text-xs font-semibold tracking-[0.24em] text-[color:var(--brand-cyan)]">
                  0{i + 1}
                </div>
                <div className="mt-2 text-2xl font-bold tracking-tight">{s}</div>
              </div>
              {i < steps.length - 1 && (
                <ArrowRight className="hidden h-5 w-5 shrink-0 text-muted-foreground md:block" />
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ---------- 7. DEEP — SX TECH ---------- */
function DeepTech() {
  const services = [
    {
      title: "Venture Studio",
      points: ["Build new business / startup", "Co-invest", "Go-to-market"],
    },
    {
      title: "Platform Builder",
      points: ["Full system development", "AI integration", "System modernization"],
    },
    {
      title: "Biz Growth Design",
      points: ["Revenue blueprint", "Business system architecture", "Monetization system"],
    },
    {
      title: "Power Layer",
      points: ["Infrastructure", "Data systems"],
    },
  ];
  const methodology = ["Design", "Build", "Activate", "Connect", "Specialize"];
  const domains = ["Fintech", "Martech", "AI", "Blockchain"];

  return (
    <section className="relative isolate overflow-hidden py-28 md:py-36">
      <img
        src={bvPlatform}
        alt=""
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover opacity-15"
      />
      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-b from-background via-background/95 to-background" />
      <Container className="relative z-20">
        <div className="mb-16 max-w-3xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-[color:var(--brand-cyan)] backdrop-blur">
            <Cpu className="h-3.5 w-3.5" />
            SX Tech
          </div>
          <h2 className="text-balance text-4xl font-bold tracking-tight md:text-6xl">
            Technology <span className="text-gradient">Venture Builder</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Build platforms. AI transformation. Venture investment.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {services.map((s) => (
            <div
              key={s.title}
              className="rounded-[24px] border border-border bg-card/60 p-8 backdrop-blur"
            >
              <h3 className="text-xl font-bold tracking-tight">{s.title}</h3>
              <ul className="mt-5 space-y-2.5">
                {s.points.map((p) => (
                  <li key={p} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--brand-cyan)]" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <div className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
            Methodology
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {methodology.map((m, i) => (
              <div key={m} className="flex items-center gap-2">
                <span className="rounded-full border border-border bg-card/60 px-4 py-2 text-sm font-semibold backdrop-blur">
                  {m}
                </span>
                {i < methodology.length - 1 && (
                  <ArrowRight className="h-3.5 w-3.5 text-muted-foreground" />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <div className="rounded-[24px] border border-border bg-card/50 p-7 backdrop-blur">
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
              Multipliers
            </div>
            <div className="mt-4 space-y-2 text-sm">
              <div>· Strategic access — ecosystem, speed</div>
              <div>· Domain expertise</div>
              <div className="mt-3 flex flex-wrap gap-2">
                {domains.map((d) => (
                  <span
                    key={d}
                    className="rounded-full border border-border bg-background/50 px-3 py-1 text-xs"
                  >
                    {d}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="rounded-[24px] border border-border bg-gradient-to-br from-[color:var(--brand-indigo)]/20 to-[color:var(--brand-cyan)]/15 p-7 backdrop-blur">
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--brand-cyan)]">
              Differentiation
            </div>
            <p className="mt-4 text-lg font-semibold leading-snug">
              Full execution loop — not just strategy or development.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ---------- 8. DEEP — SX HUMAN ---------- */
function DeepHuman() {
  const framework = ["THINK", "DECIDE", "PERFORM", "SUSTAIN"];
  const layers = [
    { k: "Align", v: ["Cognitive analysis", "Decision mapping"] },
    { k: "Reset", v: ["Energy system", "Focus system"] },
    { k: "Integrate", v: ["Deep transformation", "State reset"] },
    { k: "Sustain", v: ["Continuous optimization", "Performance tracking"] },
  ];
  const outputs = ["Better decisions", "Handle complexity", "Sustainable high performance"];
  return (
    <section className="relative isolate overflow-hidden py-28 md:py-36">
      <img
        src={humanCoaching}
        alt=""
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover opacity-15"
      />
      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-b from-background via-background/95 to-background" />
      <Container className="relative z-20">
        <div className="mb-16 max-w-3xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-[color:var(--brand-indigo)] backdrop-blur">
            <Brain className="h-3.5 w-3.5" />
            SX Human
          </div>
          <h2 className="text-balance text-4xl font-bold tracking-tight md:text-6xl">
            Mind Longevity for <span className="text-gradient">Leaders</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Business grows, leader does not. We change that.
          </p>
        </div>

        <div className="mb-12">
          <div className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
            Framework
          </div>
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-4">
            {framework.map((f, i) => (
              <div
                key={f}
                className="rounded-[20px] border border-border bg-card/60 p-6 backdrop-blur"
              >
                <div className="text-xs font-semibold tracking-[0.24em] text-[color:var(--brand-cyan)]">
                  0{i + 1}
                </div>
                <div className="mt-2 text-xl font-bold tracking-tight">{f}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <div className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
            System
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {layers.map((l, i) => (
              <div
                key={l.k}
                className="rounded-[24px] border border-border bg-card/60 p-7 backdrop-blur"
              >
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-background/40 text-sm font-bold text-[color:var(--brand-cyan)]">
                    0{i + 1}
                  </div>
                  <h3 className="text-xl font-semibold">{l.k}</h3>
                </div>
                <ul className="mt-5 space-y-2">
                  {l.v.map((p) => (
                    <li key={p} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--brand-cyan)]" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {outputs.map((o) => (
            <div
              key={o}
              className="rounded-[20px] border border-border bg-gradient-to-br from-[color:var(--brand-indigo)]/15 to-transparent p-6 text-center backdrop-blur"
            >
              <div className="text-base font-semibold">{o}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ---------- 9. FINAL MESSAGE ---------- */
function FinalMessage() {
  return (
    <section className="py-32 md:py-40">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-balance text-4xl font-bold leading-[1.1] tracking-tight md:text-6xl">
            The business can scale because{" "}
            <span className="text-gradient">the leader can handle it.</span>
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-pretty text-lg text-muted-foreground md:text-xl">
            We transform the entire system — together.
          </p>
        </div>
      </Container>
    </section>
  );
}

/* ---------- 10. FINAL CTA ---------- */
function FinalCTA() {
  return (
    <section id="contact" className="pb-32 pt-8 md:pb-40">
      <Container>
        <div className="relative isolate overflow-hidden rounded-[28px] border border-border bg-card/40 px-8 py-20 text-center backdrop-blur md:px-16 md:py-28">
          <img
            src={heroEcosystem}
            alt=""
            aria-hidden
            className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover opacity-30"
          />
          <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-b from-background/80 via-background/85 to-background/95" />
          <div className="relative z-20">
            <h2 className="mx-auto max-w-3xl text-balance text-4xl font-bold leading-tight tracking-tight md:text-5xl">
              Let's build your <span className="text-gradient">next growth system.</span>
            </h2>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="h-13 rounded-full bg-gradient-primary px-8 py-6 text-base font-semibold text-white shadow-glow transition-transform hover:scale-[1.02] hover:opacity-95"
              >
                <a href="mailto:hello@sxtrans.com">
                  Start a Project <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-13 rounded-full border-border bg-card/40 px-8 py-6 text-base font-semibold backdrop-blur hover:bg-card"
              >
                <a href="mailto:hello@sxtrans.com">Talk to Us</a>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
