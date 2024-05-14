'use client';

import APP_ROUTE from '@/data/AppRoute';
import Link from './Link';
import { Button } from './ui/button';
import { usePathname } from 'next/navigation';
import { cn } from '@/libs/utils';

export default function Navbar() {
  const pathname = usePathname();
  const isCurrentPath = (path: string) => pathname === path;

  return (
    <header className='fixed left-0 right-0 top-0 z-[100] flex items-center justify-center py-2 print:hidden'>
      <nav className='flex gap-3 rounded-full border border-primary-700/80 bg-primary-800/50 px-4 backdrop-blur-xl'>
        {APP_ROUTE.map((item, i) => (
          <Link key={i} href={item.path}>
            <Button
              variant='link'
              className={cn(
                `px-0 text-primary-300 ${isCurrentPath(item.path) ? 'font-bold text-primary-100' : 'text-primary-400'}`
              )}
            >
              {item.name}
            </Button>
          </Link>
        ))}
      </nav>
    </header>
  );
}
