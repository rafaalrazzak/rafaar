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
    'Full-stack developer and designer from Indonesia. I love to create beautiful and functional web applications.',
  summary:
    "I'm a full-stack developer specializing in creating elegant digital solutions that drive results. Whether it's a simple website or a complex application, I take a holistic approach to development, ensuring that both the user interface and underlying infrastructure are optimized for performance and reliability. My expertise in React, Next.js, HTML, CSS, JavaScript/TypeScript, Bun, Node.js, Hono, Express, and PostgreSQL allows me to tailor solutions to your specific needs. By staying ahead of industry trends, I can deliver modern, efficient web applications with minimal bugs and a focus on enhancing the user experience.",
  avatarUrl: 'https://cdn.kita.blue/rafaar%2Fme.png',
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
      title: 'Full-stack Developer',
      logo: 'https://tako.id/icon.png',
      color: '#37a2ea',
      start: formatDate(dateWorks.tako.start),
      end: dateWorks.tako.end,
      description:
        'Pengen dapet penghasilan lebih dari hanya sekedar membuat konten? Langsung aja join Tako sekarang!',
    },
  ],
} as const;
