import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import sxLogo from "@/assets/sx-logo.png";

export function BackgroundFX() {
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

export function Nav() {
  const links: Array<{ to: string; label: string; hash?: string }> = [
    { to: "/", hash: "approach", label: "About Us" },
    { to: "/business-ventures", label: "Business & Ventures" },
    { to: "/human-transform", label: "Human Transform" },
    { to: "/ventures", label: "Ventures" },
  ];
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2.5">
          <img
            src={sxLogo}
            alt="SX Transformation"
            className="h-8 w-8 object-contain drop-shadow-[0_0_12px_color-mix(in_oklab,var(--brand-indigo)_60%,transparent)]"
          />
          <span className="text-sm font-semibold tracking-wide">SX TRANS</span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={`${l.to}-${l.label}`}
              to={l.to}
              hash={l.hash}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              activeOptions={{ exact: true }}
              activeProps={{ className: "text-foreground" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <Button
          asChild
          size="sm"
          className="rounded-full bg-gradient-primary text-white shadow-glow hover:opacity-90"
        >
          <Link to="/" hash="contact">
            Talk to Us <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </header>
  );
}

export function Footer() {
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

export function Section({
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

export function GradientCard({
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