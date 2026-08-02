import { Link } from "@tanstack/react-router";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className="inline-flex items-center gap-2">
      <span
        className={`grid h-9 w-9 shrink-0 place-items-center rounded-xl ${
          light ? "bg-gold text-gold-foreground" : "bg-primary text-primary-foreground"
        }`}
      >
        <span className="font-display text-lg font-bold">S</span>
      </span>
      <span
        className={`font-display text-xl font-bold tracking-tight ${
          light ? "text-primary-foreground" : "text-foreground"
        }`}
      >
        SheMesh
      </span>
    </Link>
  );
}
