import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { type ReactNode } from "react";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md text-center bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
        <h1 className="text-7xl font-bold font-display text-primary">404</h1>
        <h2 className="mt-4 text-2xl font-bold text-ink">Page Not Found</h2>
        <p className="mt-4 text-base text-muted-foreground leading-relaxed">
          The page you're looking for doesn't exist or has been moved. Let's get you back on the
          road.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row flex-wrap justify-center gap-3">
          <Link
            to="/"
            className="inline-flex h-12 items-center justify-center rounded-xl bg-primary px-6 text-sm font-bold text-white shadow-sm transition-all hover:bg-[#EA580C] active:scale-95"
          >
            Go Home
          </Link>
          <a
            href="/#cars"
            className="inline-flex h-12 items-center justify-center rounded-xl border border-gray-200 bg-white px-6 text-sm font-bold text-ink transition-all hover:bg-gray-50 hover:border-gray-300 active:scale-95"
          >
            View Cars
          </a>
          <a
            href="/#contact"
            className="inline-flex h-12 items-center justify-center rounded-xl border border-gray-200 bg-white px-6 text-sm font-bold text-ink transition-all hover:bg-gray-50 hover:border-gray-300 active:scale-95"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "RK Travels & Self-Drive Cars | Car Rentals in Jadcherla, Telangana" },
      {
        name: "description",
        content:
          "Book self-drive cars and reliable car rental services in Jadcherla, Telangana with RK Travels. Explore cars, flexible rental options and outstation travel services.",
      },
      { name: "author", content: "RK Travels & Self-Drive Cars" },
      { property: "og:site_name", content: "RK Travels & Self-Drive Cars" },
      {
        property: "og:title",
        content: "RK Travels & Self-Drive Cars | Car Rentals in Jadcherla, Telangana",
      },
      {
        property: "og:description",
        content:
          "Book self-drive cars and reliable car rental services in Jadcherla, Telangana with RK Travels. Explore cars, flexible rental options and outstation travel services.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.rktravels.in/" },
      { property: "og:image", content: "https://www.rktravels.in/logo.png" },
      { property: "og:locale", content: "en_IN" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "RK Travels & Self-Drive Cars | Car Rentals in Jadcherla" },
      {
        name: "twitter:description",
        content:
          "Book self-drive cars and reliable car rental services in Jadcherla, Telangana with RK Travels.",
      },
      { name: "twitter:image", content: "https://www.rktravels.in/logo.png" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Sora:wght@600;700;800&family=Manrope:wght@400;500;600;700&display=swap",
      },
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", href: "/logo.png", type: "image/png" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "AutoRental",
              "@id": "https://www.rktravels.in/#organization",
              "name": "RK Travels & Self-Drive Cars",
              "url": "https://www.rktravels.in/",
              "logo": "https://www.rktravels.in/logo.png",
              "image": "https://www.rktravels.in/logo.png",
              "telephone": "+919177340016",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Road No. 03, Vijay Nagar Colony",
                "addressLocality": "Jadcherla",
                "addressRegion": "Telangana",
                "addressCountry": "IN"
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday"
                ],
                "opens": "00:00",
                "closes": "23:59"
              },
              "makesOffer": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Self-Drive Cars"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Outstation Travel"
                  }
                }
              ]
            },
            {
              "@type": "WebSite",
              "@id": "https://www.rktravels.in/#website",
              "url": "https://www.rktravels.in/",
              "name": "RK Travels & Self-Drive Cars",
              "description": "Book self-drive cars and reliable car rental services in Jadcherla, Telangana with RK Travels.",
              "publisher": {
                "@id": "https://www.rktravels.in/#organization"
              },
              "inLanguage": "en-IN"
            }
          ]
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body className="overflow-x-hidden antialiased">
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
