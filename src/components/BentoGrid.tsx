import { ArrowRightIcon } from '@radix-ui/react-icons';
import { ReactNode } from 'react';

import { Button } from '@/components/ui/button';
import { cn } from '@/libs/utils';
import { Project } from '@/types';

import DynamicIcon from './DynamicIcon';
import IconText from './IconText';
import Link from './Link';

const BentoGrid = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        'grid w-full auto-rows-[22rem] grid-cols-2 gap-4',
        className
      )}
    >
      {children}
    </div>
  );
};

export type BentoCardProps = {
  className?: string;
  background: ReactNode;
  Icon?: any;
  cta: string;
} & Project;

const BentoCard = ({
  title,
  className,
  background,
  Icon,
  description,
  stacks,
  link,
  cta,
}: BentoCardProps) => (
  <div
    className={cn(
      'group relative col-span-2 flex flex-col justify-between overflow-hidden rounded-xl',
      'bg-primary-950 transform-gpu border border-muted [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]',
      className
    )}
  >
    <div>{background}</div>
    <div className='pointer-events-none z-10 -mt-24 flex transform-gpu flex-col gap-3 p-6 transition-all duration-300 group-hover:-translate-y-10 sm:-mt-64 lg:-mt-24'>
      {Icon && (
        <Icon className='text-primary-700 h-12 w-12 origin-left transform-gpu transition-all duration-300 ease-in-out group-hover:scale-75' />
      )}

      {stacks && (
        <div className='flex flex-wrap gap-2'>
          {stacks.map((stack, idx) => (
            <IconText
              size='xs'
              key={idx}
              className='group/stacks text-xs'
              icon={<DynamicIcon size={14} name={stack} />}
              text={stack}
            />
          ))}
        </div>
      )}

      <div className='flex flex-col gap-1'>
        <h3 className='text-primary-300 dark:text-primary-300 text-base font-semibold'>
          {title}
        </h3>
        <p className='max-w-lg text-balance text-xs text-muted-foreground'>
          {description}
        </p>
      </div>
    </div>

    <div
      className={cn(
        'pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100'
      )}
    >
      <Link
        href={link}
        variant='ghost'
        size='sm'
        className='pointer-events-auto'
      >
        {cta}
        <ArrowRightIcon className='ml-2 h-4 w-4' />
      </Link>
    </div>
    <div className='group-hover:bg-primary-950/[.03] pointer-events-none absolute inset-0 transform-gpu transition-all duration-300' />
  </div>
);

export { BentoCard, BentoGrid };
