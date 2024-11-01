'use client';

import { usePathname } from 'next/navigation';

import { APP_ROUTE } from '@/data/app-route';
import { cn } from '@/libs/utils';

import Link from './Link';
import { ModeToggle } from './ToggleTheme';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className='flex items-center justify-center gap-2 py-4 text-base print:hidden'>
      <nav className='flex gap-3 rounded-full border border-muted/40 bg-muted/80 px-4 backdrop-blur-xl'>
        {APP_ROUTE.map(({ path, name }, i) => (
          <Link
            key={i}
            href={path}
            variant='link'
            className={cn(
              'px-0 text-xs md:text-base',
              pathname === path
                ? 'font-bold text-primary'
                : 'text-muted-foreground'
            )}
          >
            {name}
          </Link>
        ))}
      </nav>
      <ModeToggle />
    </header>
  );
}
