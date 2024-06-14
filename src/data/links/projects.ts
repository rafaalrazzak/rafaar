import { LucideIcon, MessagesSquare, MusicIcon } from 'lucide-react';

export type Project = {
  title: string;
  description: string;
  url: string;
  icon: LucideIcon;
};

export const projects = [
  {
    title: 'Secret Message',
    description: 'ssttt...🤫 ',
    url: 'https://l.kta.blue/secret',
    icon: MessagesSquare,
  },
  {
    title: 'Songs',
    description: 'What are you listening to?',
    url: 'https://l.kta.blue/songs',
    icon: MusicIcon,
  },
] satisfies Project[];
