// Define the interfaces for the data structures

import { RESUME_DATA } from './resume-data';

interface Category {
  title: string;
  item: readonly string[];
}

// Define the categories

const Languages: Category = {
  title: 'Languages',
  item: RESUME_DATA.languages,
};

const Technologies: Category = {
  title: 'Technologies',
  item: RESUME_DATA.tools,
};

const SoftwareAndTools: Category = {
  title: 'Software and Tools',
  item: [
    'Adobe CC',
    'Bun',
    'Node.js',
    'Figma',
    'VSCode',
    'Git',
    'Vercel',
    'Docker',
  ],
};

export const tools = [Languages, Technologies, SoftwareAndTools];
