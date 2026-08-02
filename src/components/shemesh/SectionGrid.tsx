import { Link } from "@tanstack/react-router";
import { sections } from "@/lib/shemesh";

export function SectionGrid() {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
      {sections.map((section) => {
        const Icon = section.icon;
        return (
          <Link
            key={section.slug}
            to="/sections/$slug"
            params={{ slug: section.slug }}
            className="group flex flex-col gap-3 rounded-2xl border border-border bg-card p-4 shadow-card transition-colors hover:border-gold"
          >
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gold-soft text-gold">
              <Icon className="h-5 w-5" />
            </span>
            <span className="text-sm leading-snug font-semibold text-card-foreground sm:text-base">
              {section.name}
            </span>
          </Link>
        );
      })}
    </div>
  );
}
