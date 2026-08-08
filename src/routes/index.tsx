import { createFileRoute, Link } from "@tanstack/react-router";
import { Logo } from "@/components/shemesh/Logo";
import { SectionGrid } from "@/components/shemesh/SectionGrid";
import { SiteFooter } from "@/components/shemesh/SiteFooter";

import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SheMesh — Everything you need, in one place" },
      {
        name: "description",
        content:
          "Practical tools for South African families, founders, young people and communities. Free to start, simple language, built for mobile.",
      },
      { property: "og:title", content: "SheMesh — Everything you need, in one place" },
      {
        property: "og:description",
        content: "Practical tools for South African families, founders, young people and communities.",
      },
    ],
  }),
  component: Landing,
});

const benefits = ["Free to start", "Simple language", "Built for mobile"];

function Landing() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
          <Logo />
          <Link to="/login" className="text-sm font-semibold text-gold">
            Login
          </Link>
        </div>
      </header>

      <section className="bg-primary px-4 py-12 text-primary-foreground sm:py-16">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-gold/40 bg-gold-soft px-3 py-1 text-xs font-semibold text-gold sm:text-sm">
            🇿🇦 Made for South Africa
          </span>
          <h1 className="mt-5 text-3xl leading-tight font-bold sm:text-5xl">
            Everything you need, in one place
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base text-primary-foreground/80 sm:text-lg">
            Practical tools for South African families, founders, young people and communities
          </p>

          <div className="mx-auto mt-8 flex max-w-sm flex-col gap-3">
            <Button asChild size="lg" className="h-14 w-full text-base bg-gold text-gold-foreground hover:bg-gold/90">
              <Link to="/audit">Take Free Overload Audit</Link>
            </Button>
            <p className="text-sm text-primary-foreground/70">
              Takes less than 5 minutes. No payment required.
            </p>
            <div className="grid grid-cols-2 gap-3">
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-12 border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              >
                <Link to="/register">Create free account</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-12 border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              >
                <Link to="/login">Login</Link>
              </Button>
            </div>
          </div>

          <ul className="mt-8 flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm text-primary-foreground/80">
            {benefits.map((b) => (
              <li key={b} className="flex items-center gap-1.5">
                <Check className="h-4 w-4 text-gold" />
                {b}
              </li>
            ))}
          </ul>
        </div>
      </section>


      <section className="mx-auto max-w-5xl px-4 py-10 sm:py-14">
        <h2 className="text-2xl font-bold sm:text-3xl">Explore the 12 sections</h2>
        <p className="mt-2 text-muted-foreground">Tap any card to see what is inside.</p>
        <div className="mt-6">
          <SectionGrid />
        </div>
      </section>

      <SiteFooter />

    </div>
  );
}
