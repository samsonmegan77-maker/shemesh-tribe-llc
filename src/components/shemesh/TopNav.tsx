import { Link, useNavigate } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { clearUser } from "@/lib/shemesh";

export function TopNav() {
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-20 border-b border-border bg-card/95 backdrop-blur">
      <div className="mx-auto grid max-w-5xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 py-3">
        <div className="min-w-0">
          <Logo />
        </div>
        <nav className="flex items-center gap-1 text-sm font-medium">
          <Link
            to="/dashboard"
            className="rounded-lg px-2.5 py-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            activeProps={{ className: "rounded-lg px-2.5 py-1.5 bg-muted text-foreground" }}
          >
            Dashboard
          </Link>
          <Link
            to="/profile"
            className="rounded-lg px-2.5 py-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            activeProps={{ className: "rounded-lg px-2.5 py-1.5 bg-muted text-foreground" }}
          >
            Profile
          </Link>
          <button
            onClick={() => {
              clearUser();
              navigate({ to: "/", replace: true });
            }}
            className="rounded-lg px-2.5 py-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            Logout
          </button>
        </nav>
      </div>
    </header>
  );
}
