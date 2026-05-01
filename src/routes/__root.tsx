import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "SX TECH — Transforming Business. Evolving Humans." },
      {
        name: "description",
        content:
          "SX Transformation is a new category: Strategic Intelligence + Human Depth. We transform business systems and evolve the leaders behind them.",
      },
      { name: "author", content: "SX Transformation" },
      {
        property: "og:title",
        content: "SX Transformation — Transforming Business. Evolving Humans.",
      },
      {
        property: "og:description",
        content:
          "The SX Transformation Ecosystem — Strategic Intelligence + Human Depth. Sustainable, scalable real business growth.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { property: "og:title", content: "SX TECH — Transforming Business. Evolving Humans." },
      { name: "twitter:title", content: "SX TECH — Transforming Business. Evolving Humans." },
      { name: "description", content: "SX TECH — Transforming Business. Evolving Humans." },
      { property: "og:description", content: "SX TECH — Transforming Business. Evolving Humans." },
      { name: "twitter:description", content: "SX TECH — Transforming Business. Evolving Humans." },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/244b79a1-0ef3-4736-8889-2b5c03c30436" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/244b79a1-0ef3-4736-8889-2b5c03c30436" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
