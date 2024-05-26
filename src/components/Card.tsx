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
        'relative isolate flex w-full animate-border items-center overflow-hidden rounded-2xl bg-gradient-to-r from-white/10 via-white/30 to-white/10 p-px text-white shadow-xl shadow-black/5 before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:border-t before:border-rose-100/10 before:bg-gradient-to-r before:from-transparent before:via-rose-100/10 before:to-transparent '
      }
    >
      <motion.div
        initial='hidden'
        animate='visible'
        custom={i}
        variants={variants}
        className='flex flex-1 items-center justify-between gap-2 rounded-2xl bg-primary-950 p-3 transition-colors duration-300 ease-in-out hover:bg-primary-900'
      >
        {Icon && (
          <div className='rounded-full border border-primary-700  bg-gradient-to-br  from-primary-700  to-primary-800  p-2 '>
            <Icon className='h-5 w-5' />
          </div>
        )}

        <div className='flex flex-col text-center'>
          <h2 className='text-base font-semibold '>{title}</h2>
          <p className='text-xs font-light text-primary-500'>{description}</p>
        </div>

        <div>
          <ExternalLink className='h-5 w-5' />
        </div>
      </motion.div>
    </Link>
  );
}
