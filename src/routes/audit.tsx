import { SiteFooter } from "@/components/shemesh/SiteFooter";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Logo } from "@/components/shemesh/Logo";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  auditQuestions,
  answerOptions,
  recommendations,
  type AuditCategory,
} from "@/lib/shemesh";

export const Route = createFileRoute("/audit")({
  head: () => ({
    meta: [
      { title: "Free Overload Audit — SheMesh" },
      {
        name: "description",
        content: "Answer 20 short questions and see where your time, energy, money and stress pressure sits.",
      },
      { property: "og:title", content: "Free Overload Audit — SheMesh" },
      {
        property: "og:description",
        content: "Answer 20 short questions and see where your pressure is coming from.",
      },
    ],
  }),
  component: AuditPage,
});

const categories: AuditCategory[] = ["Time", "Energy", "Financial", "Stress"];

function AuditPage() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const total = auditQuestions.length;
  const done = step >= total;

  function answer(value: number) {
    const next = [...answers];
    next[step] = value;
    setAnswers(next);
    setStep(step + 1);
  }

  if (done) return <Results answers={answers} onRestart={() => { setAnswers([]); setStep(0); }} />;

  const question = auditQuestions[step]!;

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card">
        <div className="mx-auto flex max-w-2xl items-center justify-between px-4 py-3">
          <Logo />
          <Link to="/" className="text-sm font-semibold text-gold">
            Exit
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-2xl px-4 py-8">
        {step === 0 && (
          <p className="mb-6 rounded-2xl border border-gold/30 bg-gold-soft p-4 text-base leading-relaxed">
            Answer 20 quick questions to see your Load Score and get 5 practical actions.
          </p>
        )}
        <p className="text-sm font-semibold text-gold">{question.category}</p>
        <div className="mt-2 flex items-center gap-3">
          <Progress value={((step + 1) / total) * 100} className="h-2" />
          <span className="shrink-0 text-sm text-muted-foreground">
            {step + 1} of {total}
          </span>
        </div>

        <h1 className="mt-8 text-2xl leading-snug font-bold sm:text-3xl">{question.text}</h1>


        <div className="mt-6 space-y-3">
          {answerOptions.map((option) => (
            <button
              key={option.label}
              onClick={() => answer(option.value)}
              className="w-full rounded-2xl border border-border bg-card p-4 text-left text-base font-semibold shadow-card transition-colors hover:border-gold hover:bg-gold-soft"
            >
              {option.label}
            </button>
          ))}
        </div>

        {step > 0 && (
          <button
            onClick={() => setStep(step - 1)}
            className="mt-6 text-sm text-muted-foreground underline"
          >
            Go back one question
          </button>
        )}
      </main>
    </div>
  );
}

function Results({ answers, onRestart }: { answers: number[]; onRestart: () => void }) {
  const maxPerCategory = 15;
  const scores = categories.map((category) => {
    const sum = auditQuestions.reduce(
      (acc, q, i) => (q.category === category ? acc + (answers[i] ?? 0) : acc),
      0,
    );
    return { category, sum, percent: Math.round((sum / maxPerCategory) * 100) };
  });

  const overall = Math.round(
    (answers.reduce((a, b) => a + (b ?? 0), 0) / (auditQuestions.length * 3)) * 100,
  );
  const biggest = [...scores].sort((a, b) => b.sum - a.sum)[0]!;
  const actions = recommendations[biggest.category];

  function download() {
    const lines = [
      "SheMesh — My Overload Summary",
      "",
      `Overall Load Score: ${overall} out of 100`,
      `Biggest pressure point: ${biggest.category}`,
      "",
      "Scores by area:",
      ...scores.map((s) => `- ${s.category}: ${s.percent}%`),
      "",
      "Five recommended actions:",
      ...actions.map((a, i) => `${i + 1}. ${a}`),
    ].join("\n");
    const blob = new Blob([lines], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "shemesh-overload-summary.txt";
    link.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card">
        <div className="mx-auto flex max-w-2xl items-center justify-between px-4 py-3">
          <Logo />
          <button onClick={onRestart} className="text-sm font-semibold text-gold">
            Start again
          </button>
        </div>
      </header>

      <main className="mx-auto max-w-2xl px-4 py-8">
        <h1 className="text-2xl font-bold sm:text-3xl">Your results</h1>

        <div className="mt-6 rounded-2xl bg-primary p-6 text-center text-primary-foreground">
          <p className="text-sm text-primary-foreground/70">Overall Load Score</p>
          <p className="font-display text-6xl font-bold text-gold">{overall}</p>
          <p className="text-sm text-primary-foreground/70">out of 100</p>
        </div>

        <div className="mt-6 rounded-2xl border border-border bg-card p-5 shadow-card">
          <p className="text-sm text-muted-foreground">Biggest pressure point</p>
          <p className="text-xl font-bold">{biggest.category}</p>
          <div className="mt-4 space-y-3">
            {scores.map((s) => (
              <div key={s.category}>
                <div className="flex justify-between text-sm font-medium">
                  <span>{s.category}</span>
                  <span className="text-muted-foreground">{s.percent}%</span>
                </div>
                <Progress value={s.percent} className="mt-1 h-2" />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-border bg-card p-5 shadow-card">
          <h2 className="text-lg font-bold">Five things you can do next</h2>
          <ol className="mt-3 space-y-3">
            {actions.map((action, i) => (
              <li key={action} className="flex gap-3">
                <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-gold-soft text-sm font-bold text-gold">
                  {i + 1}
                </span>
                <span className="leading-relaxed">{action}</span>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-6 flex flex-col gap-3">
          <Button onClick={download} className="h-12 bg-gold text-gold-foreground hover:bg-gold/90">
            Download my summary
          </Button>
          <Button asChild variant="outline" className="h-12">
            <Link to="/register">Save results &amp; create account</Link>
          </Button>
          <Button asChild variant="ghost" className="h-12">
            <Link to="/">Back to Home</Link>
          </Button>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
