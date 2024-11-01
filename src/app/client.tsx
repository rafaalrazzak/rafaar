'use client';
import { motion } from 'framer-motion';
import { MailIcon } from 'lucide-react';
import { useId } from 'react';

import Link from '@/components/Link';
import { Button } from '@/components/ui/button';
import { RESUME_DATA } from '@/data/resume-data';
import { socialMedia } from '@/data/social-media';

const variants = {
  container: {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  },
  item: { hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } },
};

export default function MainPageClient() {
  const id = useId();

  const renderSection = (title: string, items: readonly string[]) => (
    <motion.section variants={variants.item} className='flex flex-col gap-4'>
      <h2 className='text-xl font-semibold text-primary'>{title}</h2>
      <div className='flex flex-wrap gap-3'>
        {items.map((item) => (
          <p
            key={id}
            className='rounded-full bg-muted px-3 py-1 text-sm text-muted-foreground'
          >
            {item}
          </p>
        ))}
      </div>
    </motion.section>
  );

  return (
    <motion.div
      initial='hidden'
      animate='show'
      variants={variants.container}
      className='flex w-full flex-col gap-8 p-4 sm:p-8'
    >
      <motion.div variants={variants.item} className='flex flex-col gap-4'>
        <h1 className='relative flex items-center text-2xl font-bold text-primary'>
          Rafa Al Razzak
          <div className='ml-1 h-[1.5rem] w-[0.5rem] animate-blink bg-primary' />
        </h1>
        <div className='flex flex-wrap gap-3'>
          {RESUME_DATA.skills.map((skill) => (
            <p
              key={id}
              className='rounded-full bg-muted px-4 py-2 text-xs text-muted-foreground'
            >
              {skill}
            </p>
          ))}
        </div>

        <p className='text-muted-foreground'>{RESUME_DATA.about}</p>

        <div className='flex gap-3'>
          {RESUME_DATA.contact.email && (
            <Link
              href={`mailto:${RESUME_DATA.contact.email}`}
              variant='none'
              size='none'
              className='p-1'
            >
              <MailIcon className='size-4 stroke-current text-muted-foreground' />
            </Link>
          )}
          {socialMedia.map((social, index) => (
            <Link
              key={id}
              href={social.url}
              variant='none'
              size='none'
              className='p-1'
            >
              <social.icon className='size-4 fill-current text-muted-foreground' />
            </Link>
          ))}
        </div>
      </motion.div>

      <div className='flex flex-col gap-3'>
        {RESUME_DATA.work.map((work) => (
          <Link
            key={id}
            href={work.link}
            variant='none'
            size='none'
            className='flex flex-col flex-wrap items-start gap-1 p-1'
          >
            <div className='flex items-center gap-2'>
              <img
                src={work.logo}
                alt={work.company}
                width={24}
                height={24}
                className='rounded-md'
              />
              <p className='text-primary'>{work.company}</p>
              <p className='text-muted-foreground'>{work.title}</p>
            </div>

            <p className='whitespace-pre-wrap text-muted-foreground'>
              {work.description}
            </p>
          </Link>
        ))}
      </div>

      {renderSection('Languages', RESUME_DATA.languages)}
      {renderSection('Technologies and Tools', RESUME_DATA.tools)}
    </motion.div>
  );
}
