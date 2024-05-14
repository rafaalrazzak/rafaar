import '../styles/globals.css';

import { Inter } from 'next/font/google';

import Analytics from '@/components/Analytics';
import Container from '@/components/Container';
import Navbar from '@/components/Navbar';
import { Toaster } from '@/components/ui/sonner';
import { getMetaPage } from '@/libs/metapage/metaPage';
import { cn } from '@/libs/utils';

const inter = Inter({
  subsets: ['latin'],
});

export const metadata = getMetaPage();

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html className='relative scroll-my-24'>
      <Navbar />
      <body
        className={cn(
          inter.className,
          'overflow-x-hidden bg-primary-900 text-white'
        )}
      >
        <Analytics />
        <Toaster />
        <Container>
          <main className={cn('min-h-screens my-16')}>{children}</main>
        </Container>
      </body>
    </html>
  );
}
