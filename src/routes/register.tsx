import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Logo } from "@/components/shemesh/Logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { setUser } from "@/lib/shemesh";

export const Route = createFileRoute("/register")({
  head: () => ({
    meta: [
      { title: "Create your SheMesh account" },
      { name: "description", content: "Register free and get practical tools for everyday life." },
      { property: "og:title", content: "Create your SheMesh account" },
      { property: "og:description", content: "Register free and get practical tools for everyday life." },
    ],
  }),
  component: RegisterPage,
});

function RegisterPage() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name || !email || !password) return setError("Please fill in all the fields.");
    if (password !== confirm) return setError("Your passwords do not match.");
    setUser({ name, email });
    navigate({ to: "/dashboard" });
  }

  return (
    <AuthShell title="Create your account" subtitle="It takes less than a minute.">
      <form onSubmit={onSubmit} className="space-y-4">
        <Field label="Full name" value={name} onChange={setName} placeholder="Thandi Mokoena" />
        <Field label="Email" type="email" value={email} onChange={setEmail} placeholder="you@email.com" />
        <Field label="Password" type="password" value={password} onChange={setPassword} />
        <Field label="Confirm password" type="password" value={confirm} onChange={setConfirm} />
        {error && <p className="text-sm font-medium text-destructive">{error}</p>}
        <Button type="submit" size="lg" className="h-14 w-full text-base bg-gold text-gold-foreground hover:bg-gold/90">
          Create free account
        </Button>
      </form>
      <p className="mt-6 text-center text-sm text-muted-foreground">
        Already have an account?{" "}
        <Link to="/login" className="font-semibold text-gold">
          Login
        </Link>
      </p>
    </AuthShell>

  );
}

export function AuthShell({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background px-4 py-8">
      <div className="mx-auto w-full max-w-md">
        <div className="flex justify-center">
          <Logo />
        </div>
        <div className="mt-6 rounded-2xl border border-border bg-card p-6 shadow-card">
          <h1 className="text-2xl font-bold">{title}</h1>
          <p className="mt-1 mb-6 text-sm text-muted-foreground">{subtitle}</p>
          {children}
        </div>
        <p className="mt-6 text-center text-sm">
          <Link to="/" className="text-muted-foreground">
            Back to Home
          </Link>
        </p>
      </div>
    </div>
  );
}

export function Field({
  label,
  value,
  onChange,
  type = "text",
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div className="space-y-1.5">
      <Label className="text-sm font-semibold">{label}</Label>
      <Input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="h-12 bg-background"
      />
    </div>
  );
}
