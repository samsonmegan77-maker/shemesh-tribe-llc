import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { TopNav } from "@/components/shemesh/TopNav";
import { SectionGrid } from "@/components/shemesh/SectionGrid";
import { Button } from "@/components/ui/button";
import { getUser } from "@/lib/shemesh";

export const Route = createFileRoute("/dashboard")({
  head: () => ({
    meta: [
      { title: "Your SheMesh Dashboard" },
      { name: "description", content: "All 12 SheMesh sections in one simple place." },
      { property: "og:title", content: "Your SheMesh Dashboard" },
      { property: "og:description", content: "All 12 SheMesh sections in one simple place." },
    ],
  }),
  component: Dashboard,
});

function Dashboard() {
  const [firstName, setFirstName] = useState("friend");

  useEffect(() => {
    const user = getUser();
    if (user?.name) setFirstName(user.name.split(" ")[0]);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <TopNav />
      <main className="mx-auto max-w-5xl px-4 py-8">
        <h1 className="text-2xl font-bold sm:text-3xl">Welcome back, {firstName}</h1>
        <p className="mt-2 text-muted-foreground">Pick a section to get started today.</p>

        <div className="mt-6 rounded-2xl border border-border bg-card p-5 shadow-card">
          <h2 className="text-lg font-bold">Not sure where to start?</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Take the free Overload Audit and see where your pressure is coming from.
          </p>
          <Button asChild className="mt-4 h-11 bg-gold text-gold-foreground hover:bg-gold/90">
            <Link to="/audit">Take Free Overload Audit</Link>
          </Button>
        </div>

        <h2 className="mt-10 text-xl font-bold">The 12 sections</h2>
        <div className="mt-4">
          <SectionGrid />
        </div>
      </main>
    </div>
  );
}
