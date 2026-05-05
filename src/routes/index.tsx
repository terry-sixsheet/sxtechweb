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
  TrendingUp,
  Zap,
  Target,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useRef, useState } from "react";
import sxLogo from "@/assets/sx-logo.png";
import heroEcosystem from "@/assets/home-ecosystem.jpg";
import bvPlatform from "@/assets/bv-platform.jpg";
import humanCoaching from "@/assets/human-coaching.jpg";
import humanMind from "@/assets/human-mind.jpg";
import bvGrowth from "@/assets/bv-growth.jpg";
import heroTechImpact from "@/assets/hero-tech-impact.jpg";
import heroHuman from "@/assets/hero-human.jpg";
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
        <HeroCarousel />
        <MainSolution />
        <Proof />
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
function HeroCarousel() {
  const autoplay = useRef(
    Autoplay({ delay: 6500, stopOnInteraction: false, stopOnMouseEnter: true }),
  );
  const [api, setApi] = useState<CarouselApi | undefined>(undefined);
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());
    const onSelect = () => setCurrent(api.selectedScrollSnap());
    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <section className="relative isolate overflow-hidden">
      <Carousel
        setApi={setApi}
        opts={{ loop: true, align: "start" }}
        plugins={[autoplay.current]}
        className="w-full"
      >
        <CarouselContent>
          <CarouselItem>
            <HeroSlide />
          </CarouselItem>
          <CarouselItem>
            <CoreInsightSlide />
          </CarouselItem>
          <CarouselItem>
            <ConceptSlide
              image={heroTechImpact}
              tag="TECH™"
              accent="cyan"
              headline="A system to create and scale revenue."
              body="Design. Build. Activate. Scale. — production-grade platforms, AI, and growth engines that turn ideas into compounding revenue."
              points={["Design", "Build", "Activate", "Scale"]}
              ctaLabel="Explore TECH™"
              href="/business-ventures"
              icon={Cpu}
            />
          </CarouselItem>
          <CarouselItem>
            <ConceptSlide
              image={heroHuman}
              tag="HUMAN™"
              accent="indigo"
              headline="Your business is not the bottleneck. You are."
              body="A human operating system for leaders — think clearer, decide sharper, perform deeper, and sustain it."
              points={["Think", "Decide", "Perform", "Sustain"]}
              ctaLabel="Explore HUMAN™"
              href="/human-transform"
              icon={Brain}
            />
          </CarouselItem>
        </CarouselContent>

        {/* Dots */}
        <div className="absolute bottom-6 left-1/2 z-30 flex -translate-x-1/2 items-center gap-2">
          {Array.from({ length: count }).map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => api?.scrollTo(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === current
                  ? "w-8 bg-gradient-primary"
                  : "w-3 bg-foreground/25 hover:bg-foreground/40"
              }`}
            />
          ))}
        </div>
      </Carousel>
    </section>
  );
}

function HeroSlide() {
  return (
    <div className="relative isolate overflow-hidden">
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
        <h1 className="text-balance text-5xl font-bold leading-[1.02] tracking-tight md:text-7xl lg:text-[6rem]">
          We build revenue systems.
          <br />
          And <span className="text-gradient">upgrade the leaders</span> behind them.
        </h1>
        <p className="mx-auto mt-8 max-w-2xl text-pretty text-lg text-muted-foreground md:text-xl">
          Building ventures, systems, and leaders for scalable growth.
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
          <Button
            asChild
            size="lg"
            variant="outline"
            className="h-13 rounded-full border-border bg-card/40 px-8 py-6 text-base font-semibold backdrop-blur hover:bg-card/70"
          >
            <Link to="/business-ventures">Build a Venture</Link>
          </Button>
        </div>
      </Container>
    </div>
  );
}

/* ---------- 2. CORE INSIGHT ---------- */
function CoreInsightSlide() {
  return (
    <div className="relative isolate flex min-h-[88vh] items-center overflow-hidden py-20 md:py-28">
      <Container className="relative z-10">
        <p className="mx-auto max-w-4xl text-balance text-center text-4xl font-semibold leading-[1.1] tracking-tight md:text-6xl">
          Most companies upgrade systems.
          <br />
          <span className="text-muted-foreground">Few upgrade the </span>
          <span className="text-gradient">leaders running them.</span>
        </p>

        <ProblemCards />
      </Container>
    </div>
  );
}

/* ---------- Concept Slide (TECH / HUMAN) ---------- */
function ConceptSlide({
  image,
  tag,
  accent,
  headline,
  body,
  points,
  ctaLabel,
  href,
  icon: Icon,
}: {
  image: string;
  tag: string;
  accent: "cyan" | "indigo";
  headline: string;
  body: string;
  points: string[];
  ctaLabel: string;
  href: "/business-ventures" | "/human-transform";
  icon: React.ComponentType<{ className?: string }>;
}) {
  const accentText =
    accent === "cyan"
      ? "text-[color:var(--brand-cyan)]"
      : "text-[color:var(--brand-indigo)]";
  const accentTint =
    accent === "cyan"
      ? "from-[color:var(--brand-cyan)]/30 via-transparent to-transparent"
      : "from-[color:var(--brand-indigo)]/40 via-transparent to-transparent";
  return (
    <div className="relative isolate overflow-hidden">
      <img
        src={image}
        alt=""
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover opacity-45"
      />
      <div
        aria-hidden
        className={`pointer-events-none absolute inset-0 z-10 bg-gradient-to-br ${accentTint}`}
      />
      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-b from-background/70 via-background/85 to-background" />
      <Container className="relative z-20 flex min-h-[88vh] flex-col items-center justify-center py-32 text-center md:py-40">
        <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.24em] text-muted-foreground backdrop-blur">
          <span className="grid h-5 w-5 place-items-center rounded-md bg-gradient-primary text-white">
            <Icon className="h-3 w-3" />
          </span>
          <span className={accentText}>{tag}</span>
          <span className="text-muted-foreground/60">— Concept</span>
        </div>
        <h2 className="text-balance text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
          {headline}
        </h2>
        <p className="mx-auto mt-7 max-w-2xl text-pretty text-lg text-muted-foreground md:text-xl">
          {body}
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2.5">
          {points.map((p) => (
            <span
              key={p}
              className="rounded-full border border-border bg-card/50 px-4 py-1.5 text-sm font-medium backdrop-blur"
            >
              {p}
            </span>
          ))}
        </div>
        <div className="mt-12">
          <Button
            asChild
            size="lg"
            className="h-13 rounded-full bg-gradient-primary px-8 py-6 text-base font-semibold text-white shadow-glow transition-transform hover:scale-[1.02] hover:opacity-95"
          >
            <Link to={href}>
              {ctaLabel} <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </Container>
    </div>
  );
}

/* ---------- 3. PROBLEM CARDS ---------- */
function ProblemCards() {
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
    <div className="mt-16 md:mt-20">
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
    </div>
  );
}

/* ---------- 4. MAIN SOLUTION ---------- */
function MainSolution() {
  return (
    <section className="relative isolate overflow-hidden py-24 md:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(80%_60%_at_50%_0%,color-mix(in_oklab,var(--brand-cyan)_18%,transparent),transparent_70%)]"
      />
      <Container>
        {/* Impact-first header */}
        <div className="mb-14 grid items-end gap-10 md:mb-20 md:grid-cols-12">
          <div className="md:col-span-7">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.22em] text-[color:var(--brand-cyan)] backdrop-blur">
              <Target className="h-3.5 w-3.5" />
              Built for business impact
            </div>
            <h2 className="text-balance text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
              Revenue you can <span className="text-gradient">measure.</span>
              <br />
              Leaders you can <span className="text-gradient">trust.</span>
            </h2>
            <p className="mt-6 max-w-xl text-pretty text-lg text-muted-foreground md:text-xl">
              We don't sell frameworks. We build the systems and the leaders that turn strategy into compounding business outcomes.
            </p>
          </div>
          <div className="md:col-span-5">
            <div className="grid grid-cols-3 gap-3">
              <ImpactStat icon={TrendingUp} value="3–10×" label="Revenue lift" />
              <ImpactStat icon={Zap} value="90 days" label="To activation" />
              <ImpactStat icon={Rocket} value="0→1" label="Ventures launched" />
            </div>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <SolutionBlock
            tone="tech"
            tag="TECH™"
            title="A system to create and scale revenue."
            description="Production-grade platforms, AI, and growth engines — engineered to compound revenue, not just ship features."
            points={["Design", "Build", "Activate", "Scale"]}
            outputs={["Revenue streams", "Scalable platforms", "New ventures"]}
            ctaLabel="Explore TECH™"
            href="/business-ventures"
            icon={Cpu}
            image={bvPlatform}
          />
          <SolutionBlock
            tone="human"
            tag="HUMAN™"
            title="Your business is not the bottleneck. You are."
            description="A leader operating system that sharpens decisions, raises performance, and keeps the engine running."
            points={["Think", "Decide", "Perform", "Sustain"]}
            outputs={["Better decisions", "Clear thinking", "Sustained performance"]}
            ctaLabel="Explore HUMAN™"
            href="/human-transform"
            icon={Brain}
            image={humanCoaching}
          />
        </div>
      </Container>
    </section>
  );
}

function ImpactStat({
  icon: Icon,
  value,
  label,
}: {
  icon: React.ComponentType<{ className?: string }>;
  value: string;
  label: string;
}) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-border bg-card/50 p-4 backdrop-blur">
      <div className="mb-3 grid h-8 w-8 place-items-center rounded-lg bg-gradient-primary text-white shadow-glow">
        <Icon className="h-4 w-4" />
      </div>
      <div className="text-2xl font-bold leading-none tracking-tight md:text-3xl">
        <span className="text-gradient">{value}</span>
      </div>
      <div className="mt-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
        {label}
      </div>
    </div>
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
                <Link to="/contact">
                  Start a Project <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
