import { differenceInMonths, differenceInYears, format } from 'date-fns';

import { socialMedia } from './social-media';

// Define work start and end dates
const dateWorks = {
  tako: {
    start: new Date('2023-06-01'),
    end: 'Present', // Use 'Present' or specify end date as string
  },
};

// Function to calculate duration in years and months using date-fns
function calculateDuration(start: Date, end: Date | string): string {
  let endDate: Date;

  if (typeof end === 'string' && end.toLowerCase() === 'present') {
    endDate = new Date(); // Assume 'Present' means current date
  } else {
    endDate = typeof end === 'string' ? new Date(end) : end;
  }

  const years = differenceInYears(endDate, start);
  const months = differenceInMonths(endDate, start) % 12;

  const yearString = years > 0 ? `${years} year${years !== 1 ? 's' : ''}` : '';
  const monthString =
    months > 0 ? `${months} month${months !== 1 ? 's' : ''}` : '';

  if (years > 0 && months > 0) {
    return `${yearString} and ${monthString}`;
  } else {
    return yearString || monthString;
  }
}

// Format date into string (yyyy format)
function formatDate(date: Date): string {
  return format(date, 'yyyy');
}

export const RESUME_DATA = {
  name: 'Rafa Al Razzak',
  initials: 'RAF',
  location: 'Bogor, Indonesia',
  locationLink: 'https://www.google.com/maps/place/Bogor',
  about:
    'Full-stack engineer and designer crafting beautiful, functional web applications from Indonesia.',
  summary:
    'I build elegant digital solutions that work. My expertise spans front-end and back-end development, with a focus on React, TypeScript, and Node.js ecosystems. I create fast, reliable applications that users love to use.',
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
      badges: [
        'Remote',
        // Duration
        `${calculateDuration(dateWorks.tako.start, dateWorks.tako.end)}`,
      ],
      title: 'Full-stack Engineer',
      logo: 'https://tako.id/icon.png',
      color: '#37a2ea',
      start: formatDate(dateWorks.tako.start),
      end: dateWorks.tako.end,
      description:
        'Pengen dapet penghasilan lebih dari hanya sekedar membuat konten? Langsung aja join Tako sekarang!',
    },
  ],
  languages: ['Go', 'JavaScript', 'TypeScript', 'HTML', 'CSS'],
  tools: [
    // Design Tools
    'Figma',
    'Adobe CC',

    // Build Tools & Runtime
    'Bun',
    'Node.js',

    // Frontend Frameworks
    'React.js',
    'Next.js',
    'Astro',
    'Solid',

    // Styling
    'TailwindCSS',

    // Databases & Backend
    'Supabase',
    'Firebase',
    'GraphQL',
    'MongoDB',

    // Database Tools
    'Prisma',
    'Drizzle',

    // Development Environment
    'VSCode',
    'Git',

    // Deployment & Infrastructure
    'Vercel',
    'Docker',
  ],
} as const;
