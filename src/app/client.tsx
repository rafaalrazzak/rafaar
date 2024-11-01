'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Twitter, Globe } from 'lucide-react';
import { BentoCard, BentoGrid } from '@/components/BentoGrid';
import { Project } from '@/types';

type SocialLink = {
  icon: React.FC;
  label: string;
};

const SOCIAL_LINKS: SocialLink[] = [
  { icon: Github, label: 'GitHub' },
  { icon: Twitter, label: 'Twitter' },
  { icon: Globe, label: 'Website' },
];

const SKILLS = ['Design Engineering', 'Full-stack Developer'];

const LANGUAGES = [
  { name: 'JavaScript', color: 'gray-500' },
  { name: 'Java', color: 'gray-500' },
  { name: 'HTML', color: 'gray-500' },
  { name: 'CSS', color: 'gray-500' },
];

const TECHNOLOGIES = [
  'React',
  'Node.js',
  'Next.js',
  'TypeScript',
  'TailwindCSS',
  'PostgreSQL',
];

const TOOLS = ['VS Code', 'Figma', 'Adobe CC', 'Docker', 'Git', 'Terminal'];

const variants = {
  container: {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } },
  },
  item: {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 },
  },
};

export default function MainPageClient({projects}: {projects: Project[]}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const renderSection = (
    title: string,
    items: string[],
    renderItem: (item: string) => JSX.Element
  ) => (
    <motion.section variants={variants.item} className='space-y-4'>
      <h2 className='text-xl text-white'>{title}</h2>
      <div className='flex flex-wrap gap-3'>{items.map(renderItem)}</div>
    </motion.section>
  );

  return (
    <motion.div
      initial='hidden'
      animate={mounted ? 'show' : 'hidden'}
      variants={variants.container}
      className='space-y-8'
    >
      <motion.header variants={variants.item} className='space-y-4'>
        <h1 className='relative flex items-center text-2xl text-white'>
          Rafa Al Razzak
          <span className='animate-blink ml-1 h-[1.5rem] w-[0.5rem] bg-white' />
        </h1>

        <div className='flex flex-wrap gap-3'>
          {SKILLS.map((skill) => (
            <span
              key={skill}
              className='rounded-full bg-gray-800 px-4 py-2 text-sm text-gray-200 transition hover:bg-gray-700'
            >
              {skill}
            </span>
          ))}
        </div>
        <p className='max-w-2xl text-gray-400'>
          Full-stack developer and designer from Indonesia. Creating beautiful
          and performant web applications.
        </p>
        <div className='flex space-x-4'>
          {SOCIAL_LINKS.map(({ icon: Icon, label }) => (
            <a
              key={label}
              href='#'
              className='text-gray-500 transition hover:text-white'
              aria-label={label}
            >
              <Icon className='h-5 w-5' />
            </a>
          ))}
        </div>
      </motion.header>

      {/* Skills */}
      <motion.div
        initial='hidden'
        animate={mounted ? 'show' : 'hidden'}
        variants={variants.container}
        className='space-y-6'
      >
        {/* Languages */}
        {renderSection(
          'Languages',
          LANGUAGES.map((lang) => lang.name),
          (name) => (
            <span
              key={name}
              className='flex items-center gap-2 rounded-full bg-gray-800 px-3 py-1 text-sm text-gray-200'
            >
              <span className={`h-2 w-2 rounded-full bg-gray-500`} />
              {name}
            </span>
          )
        )}

        {/* Technologies */}
        {renderSection('Technologies', TECHNOLOGIES, (tech) => (
          <span
            key={tech}
            className='rounded-full bg-gray-800 px-3 py-1 text-sm text-gray-200 transition hover:bg-gray-700'
          >
            {tech}
          </span>
        ))}

        {/* Software and Tools */}
        {renderSection('Software and Tools', TOOLS, (tool) => (
          <span
            key={tool}
            className='rounded-full bg-gray-800 px-3 py-1 text-sm text-gray-200 transition hover:bg-gray-700'
          >
            {tool}
          </span>
        ))}
      </motion.div>


      <BentoGrid>
            {projects.map((project) => (
              <BentoCard
                {...project}
                key={project.title}
                cta='Learn more'
                className='col-span-2 md:col-span-1'
                background={
                  <div className='relative flex bg-cover bg-center ring-muted after:absolute after:inset-0 after:bg-gradient-to-t after:from-background after:to-transparent'>
                    <Image
                      src={project.cover}
                      alt={project.title}
                      className='relative inset-0 top-0 size-full object-cover object-center after:absolute after:inset-0 after:z-10 after:bg-gradient-to-t after:from-background after:via-background after:to-transparent'
                      width={600}
                      height={300}
                      sizes='(max-width: 800px) 100vw, (max-width: 1200px) 50vw, 40vw'
                    />
                  </div>
                }
              />
            ))}
          </BentoGrid>
    </motion.div>
  );
}
