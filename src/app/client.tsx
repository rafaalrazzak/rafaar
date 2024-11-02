'use client';

import { motion } from 'framer-motion';
import { MailIcon } from 'lucide-react';
import { useMemo } from 'react';

import Link from '@/components/Link';
import { RESUME_DATA } from '@/data/resume-data';
import { socialMedia } from '@/data/social-media';
import { useTypewriter } from '@/hooks/use-typewritter';

const ANIMATION_VARIANTS = {
  container: {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  },
  item: {
    hidden: { opacity: 0, y: 10 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  },
};

const Skill = ({ children }: { children: string }) => (
  <p className='rounded-full bg-muted px-4 py-2 text-xs text-muted-foreground'>
    {children}
  </p>
);

const SectionTitle = ({ children }: { children: string }) => (
  <h2 className='text-xl font-semibold text-primary'>{children}</h2>
);

const Section = ({
  title,
  items,
}: {
  title: string;
  items: readonly string[];
}) => (
  <motion.section
    variants={ANIMATION_VARIANTS.item}
    className='flex flex-col gap-4'
  >
    <SectionTitle>{title}</SectionTitle>
    <div className='flex flex-wrap gap-3'>
      {items.map((item) => (
        <Skill key={`${title}-${item}`}>{item}</Skill>
      ))}
    </div>
  </motion.section>
);

const WorkItem = ({ work }: { work: (typeof RESUME_DATA.work)[0] }) => (
  <Link
    href={work.link}
    variant='none'
    size='none'
    className='flex flex-col flex-wrap items-start gap-1 p-1 transition-colors hover:bg-muted/50'
  >
    <div className='flex items-center gap-2'>
      <img
        src={work.logo}
        alt={work.company}
        width={24}
        height={24}
        className='rounded-md'
        loading='lazy'
      />
      <p className='text-primary'>{work.company}</p>
      <p className='text-muted-foreground'>{work.title}</p>
    </div>
    <p className='whitespace-pre-wrap text-muted-foreground'>
      {work.description}
    </p>
  </Link>
);

const SocialLinks = () => (
  <div className='flex gap-3'>
    {RESUME_DATA.contact.email && (
      <Link
        href={`mailto:${RESUME_DATA.contact.email}`}
        variant='none'
        size='none'
        className='p-1 transition-colors hover:text-primary'
      >
        <MailIcon className='size-4 stroke-current text-muted-foreground' />
      </Link>
    )}
    {socialMedia.map((social) => (
      <Link
        key={social.url}
        href={social.url}
        variant='none'
        size='none'
        className='p-1 transition-colors hover:text-primary'
      >
        <social.icon className='size-4 fill-current text-muted-foreground' />
      </Link>
    ))}
  </div>
);

export default function MainPageClient() {
  const displayedText = useTypewriter('Rafa Al Razzak', 300);

  const memoizedContent = useMemo(
    () => (
      <>
        <motion.div
          variants={ANIMATION_VARIANTS.item}
          className='flex flex-col gap-4'
        >
          <h1 className='relative flex items-center text-2xl font-bold text-primary'>
            Hello, I&apos;m {displayedText}
            <div className='ml-1 h-[1.5rem] w-[0.5rem] animate-blink bg-primary' />
          </h1>

          <div className='flex flex-wrap gap-3'>
            {RESUME_DATA.skills.map((skill) => (
              <Skill key={skill}>{skill}</Skill>
            ))}
          </div>

          <p className='text-muted-foreground'>{RESUME_DATA.about}</p>
          <SocialLinks />
        </motion.div>

        <div className='flex flex-col gap-3'>
          {RESUME_DATA.work.map((work) => (
            <WorkItem key={work.company} work={work} />
          ))}
        </div>

        <Section title='Languages' items={RESUME_DATA.languages} />
        <Section title='Technologies and Tools' items={RESUME_DATA.tools} />
      </>
    ),
    [displayedText]
  );

  return (
    <motion.div
      initial='hidden'
      animate='show'
      variants={ANIMATION_VARIANTS.container}
      className='flex w-full flex-col gap-8 p-4 sm:p-8'
    >
      {memoizedContent}
    </motion.div>
  );
}
