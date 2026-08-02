import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { setUser } from "@/lib/shemesh";
import { AuthShell, Field } from "./register";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Login to SheMesh" },
      { name: "description", content: "Log in to reach your SheMesh dashboard and all 12 sections." },
      { property: "og:title", content: "Login to SheMesh" },
      { property: "og:description", content: "Log in to reach your SheMesh dashboard and all 12 sections." },
    ],
  }),
  component: LoginPage,
});

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !password) return setError("Please enter your email and password.");
    const name = (email.split("@")[0] ?? "friend").replace(/[._-]/g, " ");
    setUser({ name: name.charAt(0).toUpperCase() + name.slice(1), email });
    navigate({ to: "/dashboard" });
  }

  return (
    <AuthShell title="Welcome back" subtitle="Login to continue where you left off.">
      <form onSubmit={onSubmit} className="space-y-4">
        <Field label="Email" type="email" value={email} onChange={setEmail} placeholder="you@email.com" />
        <Field label="Password" type="password" value={password} onChange={setPassword} />
        {error && <p className="text-sm font-medium text-destructive">{error}</p>}
        <Button type="submit" size="lg" className="h-12 w-full bg-gold text-gold-foreground hover:bg-gold/90">
          Login
        </Button>
      </form>
      <p className="mt-4 text-center text-sm">
        <button type="button" className="text-muted-foreground underline">
          Forgot password?
        </button>
      </p>
      <p className="mt-6 text-center text-sm text-muted-foreground">
        New here?{" "}
        <Link to="/register" className="font-semibold text-gold">
          Register
        </Link>
      </p>
    </AuthShell>
  );
}
