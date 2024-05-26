import NextLink from 'next/link';

import { cn } from '@/libs/utils';

import { ButtonProps, buttonVariants } from './ui/button';

interface LinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    Pick<ButtonProps, 'size' | 'variant'> {
  href: string;
  children: React.ReactNode;
}

function Link({
  href,
  className,
  children,
  variant,
  size,
  ...props
}: LinkProps) {
  return (
    <NextLink
      href={href}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {children}
    </NextLink>
  );
}

export default Link;
