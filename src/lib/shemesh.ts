import {
  Wallet,
  Briefcase,
  ShieldCheck,
  Building2,
  CalendarCheck,
  SearchCheck,
  GraduationCap,
  Sprout,
  Hammer,
  Clapperboard,
  Utensils,
  HeartPulse,
  type LucideIcon,
} from "lucide-react";

export type Section = {
  slug: string;
  name: string;
  icon: LucideIcon;
  description: string;
  tip: string;
};

export const sections: Section[] = [
  {
    slug: "money-digital-tools",
    name: "Money & Digital Tools",
    icon: Wallet,
    description:
      "Simple ways to keep track of your money every month. Learn how to plan, save and spend with confidence. Everything is explained in plain language.",
    tip: "Free starter tip: write down every rand you spend for seven days. Most families find one or two costs they can stop right away.",
  },
  {
    slug: "jobs-youth",
    name: "Jobs & Youth",
    icon: Briefcase,
    description:
      "Help for young people looking for work, learnerships or a first income. Practical steps you can take this week. No fancy words, just what works.",
    tip: "Free starter tip: keep your CV to one page and put your phone number and email at the very top.",
  },
  {
    slug: "safety-rules",
    name: "Safety & Rules",
    icon: ShieldCheck,
    description:
      "Know your everyday rights and how to stay safe at home, at work and online. Clear guidance written for real life. Share it with the people you care about.",
    tip: "Free starter tip: save three emergency numbers on your phone under the letter A so they are always easy to find.",
  },
  {
    slug: "city-community",
    name: "City & Community",
    icon: Building2,
    description:
      "Find out what is happening where you live and who to speak to about it. Report problems and follow up properly. Small steps make a big difference locally.",
    tip: "Free starter tip: when you report a fault, always ask for a reference number and the date.",
  },
  {
    slug: "personal-assistant",
    name: "Personal Assistant",
    icon: CalendarCheck,
    description:
      "A helping hand for your day to day plans and reminders. Keep your tasks, appointments and errands in one place. Less mental load for you.",
    tip: "Free starter tip: choose only three must-do tasks each morning. Everything else is a bonus.",
  },
  {
    slug: "smart-checking-tools",
    name: "Smart Checking Tools",
    icon: SearchCheck,
    description:
      "Quick checks before you say yes to something. Test a message, an offer or a price before you commit. Avoid the most common traps.",
    tip: "Free starter tip: if an offer needs an upfront payment before you get anything, pause and check it twice.",
  },
  {
    slug: "learning-education",
    name: "Learning & Education",
    icon: GraduationCap,
    description:
      "Support for learners, parents and adults going back to study. Find easy study routines and free learning ideas. Build a little every week.",
    tip: "Free starter tip: 20 focused minutes a day beats three rushed hours the night before.",
  },
  {
    slug: "land-homes-growing",
    name: "Land, Homes & Growing",
    icon: Sprout,
    description:
      "Ideas for your home, your yard and growing your own food. Start small with what you already have. Grow it step by step.",
    tip: "Free starter tip: spinach and green beans are forgiving crops for a first small garden or a few buckets.",
  },
  {
    slug: "skills-practical-projects",
    name: "Skills & Practical Projects",
    icon: Hammer,
    description:
      "Learn hands-on skills you can use or sell. Simple projects with clear steps and low costs. Perfect for weekends and side income.",
    tip: "Free starter tip: pick one skill and practise it five times before adding a new one.",
  },
  {
    slug: "stories-media",
    name: "Stories & Media",
    icon: Clapperboard,
    description:
      "Real stories from people building something good. Short reads and clips to keep you going. Learn from what others have already tried.",
    tip: "Free starter tip: write down your own story in ten lines. It helps you see how far you have come.",
  },
  {
    slug: "food-community-share",
    name: "Food & Community Share",
    icon: Utensils,
    description:
      "Stretch your food budget and share what you have. Easy meals, bulk buying ideas and community sharing. Nobody should eat alone or go hungry.",
    tip: "Free starter tip: cook one big pot meal on Sunday and split it into portions for the week.",
  },
  {
    slug: "family-health",
    name: "Family Health",
    icon: HeartPulse,
    description:
      "Everyday wellbeing for the whole family. Simple habits for sleep, movement and check-ups. Small routines that are easy to keep.",
    tip: "Free starter tip: a ten minute walk after supper helps sleep, mood and digestion for everyone.",
  },
];

export const getSection = (slug: string) => sections.find((s) => s.slug === slug);

export type AuditCategory = "Time" | "Energy" | "Financial" | "Stress";

export type AuditQuestion = { id: number; category: AuditCategory; text: string };

export const auditQuestions: AuditQuestion[] = [
  { id: 1, category: "Time", text: "I often run out of time before I finish my day." },
  { id: 2, category: "Time", text: "I feel rushed from the moment I wake up." },
  { id: 3, category: "Time", text: "I struggle to find time for myself each week." },
  { id: 4, category: "Time", text: "I am the one who plans most things for others." },
  { id: 5, category: "Time", text: "I put off important tasks because my day is too full." },
  { id: 6, category: "Energy", text: "I wake up tired even after a full night of sleep." },
  { id: 7, category: "Energy", text: "I have little energy left by the afternoon." },
  { id: 8, category: "Energy", text: "I skip meals or eat on the run." },
  { id: 9, category: "Energy", text: "I rarely move my body or exercise." },
  { id: 10, category: "Energy", text: "I feel drained after being around other people." },
  { id: 11, category: "Financial", text: "Money runs out before the end of the month." },
  { id: 12, category: "Financial", text: "I worry about unexpected costs." },
  { id: 13, category: "Financial", text: "I do not have savings I can use in an emergency." },
  { id: 14, category: "Financial", text: "I support more people than my income comfortably allows." },
  { id: 15, category: "Financial", text: "I avoid looking at my bank balance." },
  { id: 16, category: "Stress", text: "I find it hard to switch off my thoughts at night." },
  { id: 17, category: "Stress", text: "I feel irritated by small things." },
  { id: 18, category: "Stress", text: "I carry other people's problems for them." },
  { id: 19, category: "Stress", text: "I feel alone with my responsibilities." },
  { id: 20, category: "Stress", text: "I feel overwhelmed more days than not." },
];

export const answerOptions = [
  { label: "Never", value: 0 },
  { label: "Sometimes", value: 1 },
  { label: "Often", value: 2 },
  { label: "Always", value: 3 },
];

export const recommendations: Record<AuditCategory, string[]> = {
  Time: [
    "Choose only three must-do tasks each morning.",
    "Block off one hour a week that belongs to you alone.",
    "Ask one person to take over one regular task.",
    "Put everything in one list instead of many places.",
    "Say no to one new request this week.",
  ],
  Energy: [
    "Go to bed 30 minutes earlier for the next seven nights.",
    "Eat something small every four hours instead of skipping meals.",
    "Take a ten minute walk after supper.",
    "Drink a glass of water first thing in the morning.",
    "Take one full rest day this month with no chores.",
  ],
  Financial: [
    "Write down every rand you spend for seven days.",
    "Cancel one thing you pay for but rarely use.",
    "Put a small fixed amount aside on payday, even R50.",
    "List your debts on one page so you can see them clearly.",
    "Agree with your family on one spending rule for the month.",
  ],
  Stress: [
    "Write your worries down before bed so your mind can rest.",
    "Speak to one trusted person about how you are feeling.",
    "Switch your phone off for one hour every evening.",
    "Breathe slowly for two minutes when things feel heavy.",
    "Hand back one problem that is not yours to carry.",
  ],
};

// Simple demo-only user storage (public demonstration app, no real accounts).
export type DemoUser = { name: string; email: string };

const KEY = "shemesh_user";

export function getUser(): DemoUser | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as DemoUser) : null;
  } catch {
    return null;
  }
}

export function setUser(user: DemoUser) {
  window.localStorage.setItem(KEY, JSON.stringify(user));
}

export function clearUser() {
  window.localStorage.removeItem(KEY);
}
