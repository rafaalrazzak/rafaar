import '../styles/globals.css';

import { Inter } from 'next/font/google';

import Analytics from '@/components/Analytics';
import Container from '@/components/Container';
import { Toaster } from '@/components/ui/sonner';
import { getMetaPage } from '@/libs/metapage/metaPage';
import { cn } from '@/libs/utils';

const inter = Inter({
  subsets: ['latin'],
});

export const metadata = getMetaPage();

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html className='relative scroll-my-24' lang='en'>
      <body
        className={cn(
          inter.className,
          'overflow-x-hidden bg-primary-900 text-white'
        )}
      >
        <Analytics />
        <Toaster />
        <main className='min-h-screen'>
          <Container>{children}</Container>
        </main>
      </body>
    </html>
  );
}
