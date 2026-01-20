import type { LucideIcon } from 'lucide-react';

export interface Project {
  title: string;
  description: string;
  url: string;
  icon: LucideIcon;
}

export interface SocialMedia {
  name: string;
  url: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface Work {
  company: string;
  link: string;
  badges: string[];
  title: string;
  logo: string;
  color: string;
  start: string;
  end: string;
  description: string;
}

export interface Education {
  school: string;
  degree: string;
  start: string;
  end: string;
}

export interface ResumeData {
  name: string;
  initials: string;
  location: string;
  locationLink: string;
  about: string;
  summary: string;
  skills: readonly string[];
  avatarUrl: string;
  ogImage: string;
  personalWebsiteUrl: string;
  contact: {
    email: string;
    social: SocialMedia[];
  };
  education: readonly Education[];
  work: readonly Work[];
  languages: readonly string[];
  tools: readonly string[];
}
