'use client';

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

import { Project } from '@/data/links/projects';

type CardProps = {
  i: number;
  title: string;
  description: string;
} & Project;

export const variants = {
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: 'easeIn',
      type: 'spring',
      stiffness: 50,
    },
  }),
  hidden: { opacity: 0, y: 200 },
};

export function Card({ url, i, title, description, icon: Icon }: CardProps) {
  return (
    <Link
      href={url}
      target='_blank'
      rel='noopener noreferrer'
      className={
        'relative isolate flex w-full animate-border items-center overflow-hidden rounded-2xl bg-gradient-to-r from-primary/10 via-primary/30 to-primary/10 p-px text-primary shadow-xl shadow-black/5 before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:border-t before:border-muted/30 before:bg-gradient-to-r before:from-transparent before:via-muted/30 before:to-transparent'
      }
    >
      <motion.div
        initial='hidden'
        animate='visible'
        custom={i}
        variants={variants}
        className='flex flex-1 items-center justify-between gap-2 rounded-2xl bg-background p-3 transition-colors duration-300 ease-in-out hover:bg-muted/50'
      >
        {Icon && (
          <div className='rounded-full border border-muted bg-gradient-to-br from-muted to-background p-2'>
            <Icon className='h-5 w-5' />
          </div>
        )}

        <div className='flex flex-col text-center'>
          <h2 className='text-base font-semibold'>{title}</h2>
          <p className='text-primary-muted-foreground text-xs font-light'>
            {description}
          </p>
        </div>

        <div>
          <ExternalLink className='h-5 w-5' />
        </div>
      </motion.div>
    </Link>
  );
}
