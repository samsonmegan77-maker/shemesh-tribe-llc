import { createFileRoute, Link } from "@tanstack/react-router";
import { Logo } from "@/components/shemesh/Logo";
import { SiteFooter } from "@/components/shemesh/SiteFooter";

export const Route = createFileRoute("/privacy-terms")({
  head: () => ({
    meta: [
      { title: "Privacy & Terms — SheMesh Tribe LLC" },
      {
        name: "description",
        content:
          "Privacy, terms of use and intellectual property protection for SheMesh Tribe LLC and the Overload Audit™.",
      },
      { property: "og:title", content: "Privacy & Terms — SheMesh Tribe LLC" },
      {
        property: "og:description",
        content: "How SheMesh handles your information and protects its systems and Overload Audit™ logic.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PrivacyTerms,
});

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="rounded-2xl border border-border bg-card p-5 shadow-card">
      <h2 className="text-lg font-bold">{title}</h2>
      <div className="mt-2 space-y-3 text-sm leading-relaxed text-muted-foreground">{children}</div>
    </section>
  );
}

function PrivacyTerms() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
          <Logo />
          <Link to="/" className="text-sm font-semibold text-gold">
            Home
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-4 py-10">
        <h1 className="text-3xl font-bold sm:text-4xl">Privacy &amp; Terms</h1>
        <p className="mt-2 text-muted-foreground">
          Please read these terms carefully before using SheMesh.
        </p>

        <div className="mt-8 space-y-4">
          <Block title="Intellectual property protection">
            <p className="font-semibold text-foreground">
              Unauthorized data scraping, structural reverse-engineering, automated extraction, or mimicking of the
              SheMesh Tribe LLC architecture, systems, and Overload Audit™ logic is strictly prohibited and subject to
              legal action under South African intellectual property and cybercrimes frameworks.
            </p>
          </Block>

          <Block title="Your information">
            <p>
              We only collect the information you choose to give us, and we use it to give you a better experience on
              SheMesh. We do not sell your personal information.
            </p>
            <p>
              Information you submit through forms and the Overload Audit™ is stored securely and is not made public.
            </p>
          </Block>

          <Block title="Using SheMesh">
            <p>
              SheMesh is provided for personal and community use. You agree not to use automated tools, bots or
              crawlers to copy, harvest or republish any part of the platform or its content.
            </p>
            <p>
              The SheMesh name, logo, design, section structure and Overload Audit™ scoring method remain the property
              of SheMesh Tribe LLC.
            </p>
          </Block>

          <Block title="Contact">
            <p>
              For questions about these terms, or to request removal of your information, please contact SheMesh Tribe
              LLC.
            </p>
          </Block>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
