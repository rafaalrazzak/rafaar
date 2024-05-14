// import { Tako, OSIS } from "@/images/logos";
import { socialMedia } from './socialMedia';

export const RESUME_DATA = {
  name: 'Rafa Al Razzak',
  initials: 'RAF',
  location: 'Bogor, Indonesia',
  locationLink: 'https://www.google.com/maps/place/Bogor',
  about:
    'Front-end developer and designer from Indonesia. I love to create beautiful and functional web applications.',
  summary:
    "As a front-end web developer, I specialize in using React and Next.js to create dynamic and responsive user interfaces. With a strong foundation in HTML, CSS, and JavaScript, I build modular and maintainable code using React's component-based approach. Next.js enhances performance by enabling server-side rendering for faster-loading pages. I'm committed to staying updated on the latest developments in React and Next.js to deliver efficient and engaging web applications that meet industry standards. My goal is to create elegant digital solutions that elevate the overall user experience.",
  avatarUrl:
    'https://www.rafaar.my.id/_next/image?url=%2Frafaar.jpg&w=256&q=100',
  ogImage: 'https://www.rafaar.my.id/twitter-card.png',
  personalWebsiteUrl: 'https://rafaar.my.id',
  contact: {
    email: 'contact.rafaalrazzak@gmail.com ',
    social: socialMedia,
  },
  education: [
    {
      school: 'SMK Al-Asiyah',
      degree: 'Computer and Network Enginering',
      start: '2021',
      end: '2024',
    },
  ],
  work: [
    {
      company: 'Tako',
      link: 'https://tako.id',
      badges: ['Remote'],
      title: 'Front End Developer',
      // logo: Tako,
      start: '2023',
      end: 'Present',
      description:
        'Your Hobby Makes Money! Come make money from your hobby and build a community like your favorite creator!',
    },
  ],
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'TypeScript',
    'React/Next.js',
    'Tailwind CSS',
    'Node.js',
    'GraphQL',
    'PostgreSQL',
  ],
  projects: [
    {
      title: 'OSIS SMK Al-Asiyah',
      techStack: ['Side Project', 'TypeScript', 'Next.js', 'React', 'Supabase'],
      description: 'A website of Student Council SMK Al-Asiyah',
      // logo: OSIS,
      link: {
        label: 'osis.matick.me',
        href: 'https://osis.matick.me/',
      },
    },
  ],
} as const;
