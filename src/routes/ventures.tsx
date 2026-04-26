import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  BackgroundFX,
  Footer,
  GradientCard,
  Nav,
  Section,
} from "@/components/site/Shell";
import venturesHero from "@/assets/ventures-hero.jpg";

export const Route = createFileRoute("/ventures")({
  head: () => ({
    meta: [
      { title: "Ventures — SX Transformation" },
      {
        name: "description",
        content:
          "Selected ventures designed, built, and activated through the SX Transformation Ecosystem — co-created and scaled together.",
      },
      { property: "og:title", content: "Ventures — SX Transformation" },
      {
        property: "og:description",
        content:
          "We don't just launch — we co-create and scale ventures together.",
      },
    ],
  }),
  component: VenturesPage,
});

function VenturesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <BackgroundFX />
      <Nav />
      <main className="relative">
        <PageHero />
        <Ventures />
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
          Ventures / Proof
        </div>
        <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight md:text-6xl">
          We don’t just launch —{" "}
          <span className="text-gradient">we co-create and scale.</span>
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-pretty text-base text-muted-foreground md:text-lg">
          Selected ventures designed, built, and activated through the SX
          Transformation Ecosystem.
        </p>
      </div>

      <div className="relative mx-auto mt-14 max-w-5xl">
        <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-primary opacity-25 blur-3xl" />
        <div
          className="rounded-[2rem] p-px"
          style={{
            backgroundImage:
              "linear-gradient(140deg, color-mix(in oklab, var(--brand-indigo) 60%, transparent), color-mix(in oklab, var(--brand-cyan) 40%, transparent) 50%, transparent 90%)",
          }}
        >
          <div className="overflow-hidden rounded-[1.95rem] border border-border bg-card/40 backdrop-blur">
            <img
              src={venturesHero}
              alt="A venture launching upward through luminous particle trails"
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
    <Section>
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

function CTA() {
  return (
    <Section>
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-balance text-3xl font-bold tracking-tight md:text-4xl">
          Have a venture in mind? Let’s build it together.
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