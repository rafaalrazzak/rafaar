import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/libs/utils';

const badgeVariants = cva(
  'inline-flex items-center rounded-md border px-2 py-0.5 text-xs font-semibold font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap',
  {
    variants: {
      variant: {
        default:
          'border-transparent bg-primary-800  text-primary-200 hover:bg-primary-600/60',
        secondary:
          'border-transparent bg-primary-700 text-primary-200 hover:bg-secondary/60',
        destructive:
          'border-transparent bg-red-700 text-red-400-foreground hover:bg-red-700/80',
        outline: 'text-primary-400',
        success:
          'bg-green-700 text-green-400-foreground hover:bg-green-700/80 border-green-700',
      },
    },

    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
