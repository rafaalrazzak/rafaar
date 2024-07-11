import React from 'react';

import { cn } from '@/libs/utils';

export interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Section({ className, ...props }: SectionProps) {
  return (
    <section
      className={cn('flex min-h-0 flex-col gap-y-3', className)}
      {...props}
    />
  );
}

export function SectionWithText({
  title,
  children,
  className,
  ...props
}: SectionProps & { title: string }) {
  return (
    <section
      className={cn('flex min-h-0 flex-col gap-y-3', className)}
      {...props}
    >
      <h2 className='text-xl font-bold'>{title}</h2>
      <div className='flex flex-col gap-y-2'>{children}</div>
    </section>
  );
}
