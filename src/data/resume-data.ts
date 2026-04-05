import type { ResumeData } from '@/types';
import { differenceInMonths, differenceInYears, format } from 'date-fns';
import { socialMedia } from './social-media';

const dateWorks = {
  tako: {
    start: new Date('2023-06-01'),
    end: 'Present',
  },
} as const;

function calculateDuration(start: Date, end: Date | string): string {
  const endDate = typeof end === 'string' && end.toLowerCase() === 'present'
    ? new Date()
    : typeof end === 'string' ? new Date(end) : end;

  const years = differenceInYears(endDate, start);
  const months = differenceInMonths(endDate, start) % 12;

  const yearString = years > 0 ? `${years} year${years !== 1 ? 's' : ''}` : '';
  const monthString = months > 0 ? `${months} month${months !== 1 ? 's' : ''}` : '';

  if (years > 0 && months > 0) return `${yearString} and ${monthString}`;
  return yearString || monthString;
}

function formatDate(date: Date): string {
  return format(date, 'yyyy');
}

export const RESUME_DATA: ResumeData = {
  name: 'Rafa Al Razzak',
  initials: 'RAF',
  location: 'Bogor, Indonesia',
  locationLink: 'https://www.google.com/maps/place/Bogor',
  about: 'Full-stack engineer and designer crafting beautiful, functional web applications from Indonesia.',
  summary: 'I build elegant digital solutions that work. My expertise spans front-end and back-end development, with a focus on React, TypeScript, and Node.js ecosystems. I create fast, reliable applications that users love to use.',
  skills: ['Design Engineer', 'Full-stack Engineer'],
  avatarUrl: 'https://cdn.kita.blue/rafaar/me.jpg',
  ogImage: 'https://www.rafaar.my.id/thumbnail.png',
  personalWebsiteUrl: 'https://rafaar.my.id',
  contact: {
    email: 'rafaar@kita.blue',
    social: socialMedia,
  },
  education: [
    {
      school: 'SMK Al-Asiyah',
      degree: 'Computer and Network Engineering',
      start: '2021',
      end: '2024',
    },
  ],
  work: [
    {
      company: 'Tako',
      link: 'https://tako.id',
      badges: ['Remote', calculateDuration(dateWorks.tako.start, dateWorks.tako.end)],
      title: 'Full-stack Engineer',
      logo: '/tako.png',
      color: '#37a2ea',
      start: formatDate(dateWorks.tako.start),
      end: dateWorks.tako.end,
      description: 'Pengen dapet penghasilan lebih dari hanya sekedar membuat konten? Langsung aja join Tako sekarang!',
    },
  ],
  languages: ['Go', 'JavaScript', 'TypeScript', 'HTML', 'CSS'],
  tools: [
    'Figma', 'Adobe CC', 'Bun', 'Node.js', 'React.js', 'Next.js', 'Astro', 'Solid',
    'TailwindCSS', 'Supabase', 'Firebase', 'GraphQL', 'MongoDB', 'Prisma', 'Drizzle',
    'VSCode', 'Git', 'Vercel', 'Docker',
  ],
  projects: [
    {
      title: 'Ryu',
      description: 'A beautifully designed spending tracker. Log transactions in seconds, set budgets, and understand where your money goes.',
      url: 'https://ryu.kita.blue/',
      thumbnail: 'https://ryu.kita.blue/og.png',
      badges: ['Web'],
    },
    {
      title: 'Almach',
      description: 'A modern, accessible React UI component library monorepo. Built on React Aria, Tailwind CSS v4, TanStack Query, TanStack Form, and Zod.',
      url: 'https://almach.kita.blue',
      thumbnail: 'https://almach.kita.blue/og.png',
      badges: ['React', 'Tailwind CSS v4', 'React Aria', 'Bun'],
    },
    {
      title: 'Forum GenRe Kabupaten Bogor',
      description: 'Digital platform ecosystem for Forum GenRe Kabupaten Bogor.',
      url: 'https://genre.kita.blue',
      thumbnail: 'https://genre.kita.blue/og.png',
      badges: ['Web'],
    },
    {
      title: 'Events Platform',
      description: 'The ultimate multi-tenant platform for creating, managing, and attending exceptional events. Connect with your audience and create unforgettable experiences.',
      url: 'https://events.kita.blue',
      thumbnail: 'https://events.kita.blue/og.png',
      badges: ['Web'],
    },
    {
      title: 'OSIS SMK Al-Asiyah',
      description: 'Web portal for Student Council (OSIS) operations and information.',
      url: 'https://osis.kita.blue',
      thumbnail: 'https://osis.kita.blue/assets/site/thumbnail-osis.png',
      badges: ['Web'],
    },
    {
      title: 'MPK SMK Al-Asiyah',
      description: 'Web portal for Student Representative Council (MPK).',
      url: 'https://mpk.kita.blue',
      thumbnail: 'https://mpk.kita.blue/assets/thumbnail-mpkj.png',
      badges: ['Web'],
    },
  ],
} as const;
