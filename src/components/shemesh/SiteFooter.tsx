import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="mt-12 border-t border-border bg-card px-4 py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-3 text-center">
        <p className="text-sm font-semibold text-foreground">SheMesh Tribe LLC</p>
        <Link to="/privacy-terms" className="text-sm font-semibold text-gold underline-offset-4 hover:underline">
          Privacy &amp; Terms
        </Link>
        <p className="text-xs text-muted-foreground">
          © 2023 - 2026 SheMesh Tribe LLC. All Rights Reserved. Reg No: 2025/935186/07.
        </p>
      </div>
    </footer>
  );
}
