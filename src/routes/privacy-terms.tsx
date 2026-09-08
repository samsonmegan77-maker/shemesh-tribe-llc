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
          "Privacy, terms of use and public-facing intellectual property boundaries for SheMesh Tribe LLC.",
      },
      { property: "og:title", content: "Privacy & Terms — SheMesh Tribe LLC" },
      {
        property: "og:description",
        content: "How SheMesh handles information and separates its public interface from protected material.",
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
          <Block title="Public-facing boundary">
            <p className="font-semibold text-foreground">
              This public application is a user-facing interface. Protected algorithms, confidential methods, trade
              secrets, private datasets, credentials, unpublished technical designs and other non-public material are
              not intentionally disclosed through this public surface.
            </p>
          </Block>

          <Block title="Intellectual property">
            <p>
              Public visibility does not place SheMesh material in the public domain, waive intellectual-property
              rights, or grant a general licence to reproduce protected works.
            </p>
            <p>
              Some original systems, methods, designs, written works and other protected material may be created and
              owned by their individual creator(s) and may be made available to SheMesh Tribe LLC under separate
              licensing arrangements. This page is not itself a licence or assignment of those rights.
            </p>
            <p>
              Users must not attempt to extract, reconstruct or reproduce protected non-public implementation,
              confidential methodology or trade secrets through automated extraction, reverse engineering or other
              unauthorized means.
            </p>
          </Block>

          <Block title="Your information">
            <p>
              We only collect the information you choose to give us, and we use it to provide the relevant SheMesh
              experience. We do not sell your personal information.
            </p>
            <p>
              Information you submit through forms or account features is not intentionally published as part of the
              public repository or public interface.
            </p>
          </Block>

          <Block title="Using SheMesh">
            <p>
              SheMesh is provided for personal and community use. You agree not to use automated tools, bots or
              crawlers to copy, harvest or republish protected or non-public material.
            </p>
            <p>
              Public-facing content may be viewed and shared through the normal public interface. Separate permissions
              or licences may apply to protected works and commercial uses.
            </p>
          </Block>

          <Block title="Contact">
            <p>
              For questions about these terms, intellectual-property permissions, or requests concerning your
              information, please contact SheMesh Tribe LLC.
            </p>
          </Block>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
