'use client';

import { usePathname } from 'next/navigation';

import { APP_ROUTE } from '@/data/app-route';
import { cn } from '@/libs/utils';

import Link from './Link';
import { ModeToggle } from './ToggleTheme';

export default function Navbar() {
  const pathname = usePathname();
  const isCurrentPath = (path: string) => pathname === path;

  return (
    <header className='fixed left-0 right-0 top-0 z-[100] flex items-center justify-center gap-2 py-2 text-base print:hidden'>
      <nav className='flex gap-3 rounded-full border border-muted/40 bg-primary/20 px-4 backdrop-blur-xl'>
        {APP_ROUTE.map((item, i) => (
          <Link
            variant='link'
            key={i}
            href={item.path}
            className={cn(
              `px-0 text-xs md:text-base ${isCurrentPath(item.path) ? 'font-bold text-primary' : 'text-muted-foreground'}`
            )}
          >
            {item.name}
          </Link>
        ))}
      </nav>
      <ModeToggle />
    </header>
  );
}
