import { LucideIcon, MessagesSquare } from 'lucide-react';

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
    url: 'https://l.kta.blue/x',
    icon: MessagesSquare,
  },
] satisfies Project[];
