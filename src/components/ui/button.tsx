import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/libs/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-muted text-muted-foreground hover:bg-muted/90',
        destructive:
          'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline:
          'border border-muted bg-background hover:bg-accent hover:text-accent-foreground',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
        gradient:
          'bg-gradient-to-r from-teal-600 to-teal-400 bg-clip-text font-semibold text-transparent hover:underline',
        none: 'bg-transparent text-primary-foreground',
      },
      size: {
        default: 'h-10 px-4 py-2',
        xs: 'h-7 px-4 text-sm',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-lg px-8',
        icon: 'h-10 w-10',
        none: 'px-0 py-0 h-auto w-auto',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export interface ShimmerButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  shimmerColor?: string;
  shimmerSize?: string;
  borderRadius?: string;
  shimmerDuration?: string;
  background?: string;
  className?: string;
  children?: React.ReactNode;
}

const ShimmerButton = React.forwardRef<HTMLButtonElement, ShimmerButtonProps>(
  (
    {
      shimmerColor = '#ffffff',
      shimmerSize = '0.05em',
      shimmerDuration = '3s',
      borderRadius = '100px',
      background = 'rgba(24, 24, 27,1)',
      className,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <button
        style={
          {
            '--spread': '90deg',
            '--shimmer-color': shimmerColor,
            '--radius': borderRadius,
            '--speed': shimmerDuration,
            '--cut': shimmerSize,
            '--bg': background,
          } as React.CSSProperties
        }
        className={cn(
          'group relative z-0 flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap border border-white/10 px-6 py-3 text-primary-foreground [background:var(--bg)] [border-radius:var(--radius)]',
          'transform-gpu transition-transform duration-300 ease-in-out active:translate-y-[1px]',
          className
        )}
        ref={ref}
        {...props}
      >
        {/* spark container */}
        <div
          className={cn(
            '-z-30 blur-[2px]',
            'absolute inset-0 overflow-visible [container-type:size]'
          )}
        >
          {/* spark */}
          <div className='absolute inset-0 h-[100cqh] animate-slide [aspect-ratio:1] [border-radius:0] [mask:none]'>
            {/* spark before */}
            <div className='absolute inset-[-100%] w-auto rotate-0 animate-spin-around [background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,var(--shimmer-color)_var(--spread),transparent_var(--spread))] [translate:0_0]' />
          </div>
        </div>
        {children}

        {/* Highlight */}
        <div
          className={cn(
            'insert-0 absolute h-full w-full',

            'rounded-xl px-4 py-1.5 text-sm font-medium shadow-[inset_0_-8px_10px_#ffffff1f]',

            // transition
            'transform-gpu transition-all duration-300 ease-in-out',

            // on hover
            'group-hover:shadow-[inset_0_-6px_10px_#ffffff3f]',

            // on click
            'group-active:shadow-[inset_0_-10px_10px_#ffffff3f]'
          )}
        />

        {/* backdrop */}
        <div
          className={cn(
            'absolute -z-20 [background:var(--bg)] [border-radius:var(--radius)] [inset:var(--cut)]'
          )}
        />
      </button>
    );
  }
);

ShimmerButton.displayName = 'ShimmerButton';

export { Button, buttonVariants, ShimmerButton };
