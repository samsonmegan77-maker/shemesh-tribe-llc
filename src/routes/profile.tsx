import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { TopNav } from "@/components/shemesh/TopNav";
import { Button } from "@/components/ui/button";
import { clearUser, getUser } from "@/lib/shemesh";

export const Route = createFileRoute("/profile")({
  head: () => ({
    meta: [
      { title: "Your SheMesh Profile" },
      { name: "description", content: "See your SheMesh details and manage your account." },
      { property: "og:title", content: "Your SheMesh Profile" },
      { property: "og:description", content: "See your SheMesh details and manage your account." },
    ],
  }),
  component: ProfilePage,
});

function ProfilePage() {
  const navigate = useNavigate();
  const [user, setLocalUser] = useState<{ name: string; email: string } | null>(null);

  useEffect(() => setLocalUser(getUser()), []);

  return (
    <div className="min-h-screen bg-background">
      <TopNav />
      <main className="mx-auto max-w-2xl px-4 py-8">
        <h1 className="text-2xl font-bold sm:text-3xl">Your profile</h1>
        <div className="mt-6 space-y-4 rounded-2xl border border-border bg-card p-5 shadow-card">
          <div>
            <p className="text-sm text-muted-foreground">Full name</p>
            <p className="text-lg font-semibold">{user?.name ?? "Guest"}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Email</p>
            <p className="text-lg font-semibold break-all">{user?.email ?? "Not signed in"}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Plan</p>
            <p className="text-lg font-semibold">Free starter</p>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-3">
          <Button asChild className="h-12 bg-gold text-gold-foreground hover:bg-gold/90">
            <Link to="/dashboard">Back to Dashboard</Link>
          </Button>
          <Button
            variant="outline"
            className="h-12"
            onClick={() => {
              clearUser();
              navigate({ to: "/", replace: true });
            }}
          >
            Logout
          </Button>
        </div>
      </main>
    </div>
  );
}
