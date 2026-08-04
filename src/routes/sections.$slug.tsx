import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/shemesh/Logo";
import { getSection, sections } from "@/lib/shemesh";
import { Lock, ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/sections/$slug")({
  loader: ({ params }) => {
    const section = getSection(params.slug);
    if (!section) throw notFound();
    return { name: section.name, description: section.description };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Section not found — SheMesh" }, { name: "robots", content: "noindex" }] };
    }
    return {
      meta: [
        { title: `${loaderData.name} — SheMesh` },
        { name: "description", content: loaderData.description },
        { property: "og:title", content: `${loaderData.name} — SheMesh` },
        { property: "og:description", content: loaderData.description },
      ],
    };
  },
  component: SectionPage,
});

function SectionPage() {
  const { slug } = Route.useParams();
  const section = getSection(slug)!;
  const Icon = section.icon;
  const others = sections.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-4 py-3">
          <Logo />
          <Link to="/dashboard" className="text-sm font-semibold text-gold">
            Dashboard
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-4 py-8">
        <Link
          to="/audit"
          className="flex items-center justify-between gap-3 rounded-2xl bg-gold px-5 py-4 text-gold-foreground shadow-card transition-opacity hover:opacity-90"
        >
          <span className="text-sm font-bold sm:text-base">Take Free Overload Audit</span>
          <span className="text-xs opacity-80">Free · 5 min</span>
        </Link>

        <span className="mt-8 grid h-12 w-12 place-items-center rounded-2xl bg-gold-soft text-gold">
          <Icon className="h-6 w-6" />
        </span>
        <h1 className="mt-4 text-2xl font-bold sm:text-3xl">{section.name}</h1>
        <p className="mt-3 text-base leading-relaxed text-muted-foreground">{section.description}</p>


        <div className="mt-6 rounded-2xl border border-gold/30 bg-gold-soft p-5">
          <h2 className="text-lg font-bold">Start here — free</h2>
          <p className="mt-2 leading-relaxed">{section.tip}</p>
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Button className="h-12 flex-1 bg-gold text-gold-foreground hover:bg-gold/90">
            <Lock className="mr-2 h-4 w-4" /> Unlock Full Access
          </Button>
          <Button asChild variant="outline" className="h-12 flex-1">
            <Link to="/dashboard">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Dashboard
            </Link>
          </Button>
        </div>

        <h2 className="mt-10 text-lg font-bold">Also worth a look</h2>
        <div className="mt-3 grid gap-3 sm:grid-cols-3">
          {others.map((other) => (
            <Link
              key={other.slug}
              to="/sections/$slug"
              params={{ slug: other.slug }}
              className="rounded-2xl border border-border bg-card p-4 text-sm font-semibold shadow-card transition-colors hover:border-gold"
            >
              {other.name}
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
