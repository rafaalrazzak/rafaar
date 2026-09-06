import type { ResumeData } from "@/types";
import { socialMedia } from "./social-media";

export const RESUME_DATA: ResumeData = {
  name: "Rafa Al Razzak",
  role: "Design & Full-stack Engineer",
  location: "Bogor, Indonesia",
  about:
    "I build fast, well-crafted web products end to end — from interface design through to the systems behind them. Mostly TypeScript, React, and Go.",
  email: "me@rafaar.com",
  social: socialMedia,
  elsewhere: [
    {
      name: "Message",
      url: "https://l.kta.blue/secret",
      icon: "messages",
      note: "Say something anonymously",
    },
    {
      name: "Songs",
      url: "https://l.kta.blue/songs",
      icon: "music",
      note: "What I have on repeat",
    },
  ],
  work: [
    {
      company: "ngonlenin",
      role: "Full-stack Engineer & Finance",
      mode: "Remote",
      url: "https://ngonlenin.id",
      logo: "/ngonlenin.png",
      startDate: "2026-08-01",
      end: "Present",
      description:
        "Commerce platform for Indonesian small businesses: a shareable storefront, QR ordering at the table, and cashier and kitchen queues that update live, with nothing to install. I build the product and own the money side of it, from the 2.5% per-sale model through to merchant reporting.",
      tags: ["Next.js", "Postgres", "Realtime", "Payments"],
    },
    {
      company: "Mulfu",
      role: "Full-stack Engineer & DevOps",
      mode: "Remote",
      url: "https://mulfu.co",
      logo: "/mulfu.png",
      startDate: "2026-08-01",
      end: "Present",
      description:
        "Plagiarism and AI-detection service that gives Indonesian students an affordable alternative to Turnitin, with paraphrasing and document repair alongside it. I build the app and run the cluster underneath it, where queued workers return a checked document in minutes, around the clock.",
      tags: ["Next.js", "Bun", "Kubernetes", "Terraform"],
    },
    {
      company: "Tako",
      role: "Full-stack Engineer",
      mode: "Remote",
      url: "https://tako.id",
      logo: "/tako.png",
      startDate: "2023-06-01",
      end: "Present",
      description:
        "Creator gifting platform for Indonesian streamers, where a viewer's paid gift becomes a live alert on stream seconds later. I work across the API and the web app on a team that has taken it past 10,000 users and 2,500 creators.",
      tags: ["Next.js", "Postgres", "Realtime", "Payments"],
    },
  ],
  projects: [
    {
      title: "Ryu",
      description:
        "A spending tracker built for speed: log a transaction in seconds, set budgets, see where the money actually goes. Runs on the web and as a desktop build, on components from Almach.",
      url: "https://ryu.rin.ci",
      thumbnail: "https://ryu.rin.ci/og.jpg",
      tags: ["TanStack", "Tauri", "Cloudflare"],
    },
    {
      title: "Rinci",
      description: "Short links, custom domains, and click analytics.",
      url: "https://link.rin.ci",
      thumbnail: "https://link.rin.ci/og.png",
      tags: ["Astro", "React"],
    },
    {
      title: "Almach",
      description:
        "An accessible React component library: 30+ components on React Aria and Tailwind v4, with typed form and query layers alongside. It is the base the rest of my projects are built on.",
      url: "https://almach.kita.blue",
      thumbnail: "https://almach.kita.blue/og.png",
      tags: ["React Aria", "Tailwind v4", "TanStack"],
    },
    {
      title: "Events Platform",
      description:
        "Multi-tenant platform for creating, managing and attending events, from ticketing through to the attendee experience.",
      url: "https://events.kita.blue",
      thumbnail: "https://events.kita.blue/og.png",
      tags: ["Next.js", "Multi-tenant"],
    },
    {
      title: "NFCC",
      description:
        "Site for Nurul Fikri Cybersecurity Community: offensive security workshops, CTF, and boot-to-root sessions for STT Terpadu Nurul Fikri students.",
      url: "https://nfcc.my.id",
      thumbnail: "https://nfcc.my.id/hero.webp",
      tags: ["Web"],
    },
    {
      title: "Forum GenRe Bogor",
      description: "Digital platform ecosystem for Forum GenRe Kabupaten Bogor.",
      url: "https://genre.kita.blue",
      thumbnail: "https://genre.kita.blue/og.png",
      tags: ["Web"],
    },
    {
      title: "OSIS SMK Al-Asiyah",
      description: "Web portal for Student Council operations and information.",
      url: "https://osis.kita.blue",
      thumbnail: "https://osis.kita.blue/assets/site/thumbnail-osis.png",
      tags: ["Web"],
    },
    {
      title: "MPK SMK Al-Asiyah",
      description: "Web portal for the Student Representative Council.",
      url: "https://mpk.kita.blue",
      thumbnail: "https://mpk.kita.blue/assets/thumbnail-mpkj.png",
      tags: ["Web"],
    },
  ],
  education: [
    {
      school: "SMK Al-Asiyah",
      degree: "Computer and Network Engineering",
      start: "2021",
      end: "2024",
    },
  ],
  stack: [
    { group: "Languages", items: ["TypeScript", "JavaScript", "Go", "SQL"] },
    {
      group: "Frontend",
      items: ["React", "Next.js", "SolidJS", "Astro", "TanStack", "Tailwind CSS"],
    },
    { group: "Backend", items: ["Bun", "Elysia", "Node.js", "Postgres", "Drizzle", "Redis"] },
    {
      group: "Infrastructure",
      items: ["Kubernetes", "Terraform", "Docker", "ArgoCD", "Cloudflare"],
    },
    { group: "Design", items: ["Figma", "Adobe CC"] },
  ],
} as const;
