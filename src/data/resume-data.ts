import type { ResumeData } from "@/types";
import { socialMedia } from "./social-media";

export const RESUME_DATA: ResumeData = {
  name: "Rafa Al Razzak",
  role: "Design & Full-stack Engineer",
  location: "Bogor, Indonesia",
  about:
    "I design and build web products end to end, from the interface to the infrastructure it runs on. Mostly TypeScript, React, and Go.",
  email: "me@rafaar.com",
  social: socialMedia,
  elsewhere: [
    {
      name: "Message",
      url: "https://l.kta.blue/secret",
      icon: "messages",
      note: "Say something anonymously",
    },
    // {
    //   name: "Songs",
    //   url: "https://l.kta.blue/songs",
    //   icon: "music",
    //   note: "What I have on repeat",
    // },
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
        "Commerce platform for Indonesian small businesses: online storefront, QR table ordering, and live cashier and kitchen queues in the browser. I build the product and run finance, from the 2.5% per-sale pricing to merchant reporting.",
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
        "Plagiarism and AI-detection service for Indonesian students, priced below Turnitin, with paraphrasing and document repair. I build the app and run its Kubernetes cluster, where queued workers return a checked document in minutes.",
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
        "Creator gifting platform for Indonesian streamers: a viewer's paid gift appears as an on-stream alert within seconds. I work on the API and web app. The platform has passed 10,000 users and 2,500 creators.",
      tags: ["Next.js", "Postgres", "Realtime", "Payments"],
    },
  ],
  projects: [
    {
      title: "Ryu",
      description:
        "Spending tracker: log a transaction in seconds, set budgets, and see where the money goes. Runs on the web and desktop, built on Almach.",
      url: "https://ryu.rin.ci",
      thumbnail: "https://ryu.rin.ci/og.jpg",
      tags: ["TanStack", "Tauri", "Cloudflare"],
    },
    {
      title: "Waktu Sholat",
      description:
        "Offline Android prayer-times app matching the official Kemenag schedule, with a Qibla compass and five home-screen widgets. Under 300 KB, no ads, no tracking.",
      url: "https://waktu-sholat.rafaar.com",
      thumbnail: "https://waktu-sholat.rafaar.com/og-image.png",
      tags: ["Kotlin", "Android", "Astro"],
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
        "Accessible React component library: 30+ components on React Aria and Tailwind v4, with typed form and query layers. The base for my other projects.",
      url: "https://almach.kita.blue",
      thumbnail: "https://almach.kita.blue/og.png",
      tags: ["React Aria", "Tailwind v4", "TanStack"],
    },
    {
      title: "Events Platform",
      description:
        "Multi-tenant platform for creating, managing, and attending events, including ticketing.",
      url: "https://events.kita.blue",
      thumbnail: "https://events.kita.blue/og.png",
      tags: ["Next.js"],
    },
    {
      title: "NFCC",
      description:
        "Site for the Nurul Fikri Cybersecurity Community at STT Terpadu Nurul Fikri: offensive security workshops, CTFs, and boot-to-root sessions.",
      url: "https://nfcc.my.id",
      thumbnail: "https://nfcc.my.id/hero.webp",
    },
    {
      title: "Forum GenRe Bogor",
      description: "Website for Forum GenRe Kabupaten Bogor.",
      url: "https://genre.kita.blue",
      thumbnail: "https://genre.kita.blue/og.png",
      hideInPrint: true,
    },
    {
      title: "OSIS SMK Al-Asiyah",
      description: "Website for the school's student council.",
      url: "https://osis.kita.blue",
      thumbnail: "https://osis.kita.blue/assets/site/thumbnail-osis.png",
      hideInPrint: true,
    },
    {
      title: "MPK SMK Al-Asiyah",
      description: "Website for the school's student representative council.",
      url: "https://mpk.kita.blue",
      thumbnail: "https://mpk.kita.blue/assets/thumbnail-mpkj.png",
      hideInPrint: true,
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
