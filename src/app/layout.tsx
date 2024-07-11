import '../styles/globals.css';

import { Inter } from 'next/font/google';

import Analytics from '@/components/Analytics';
import Container from '@/components/Container';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Toaster } from '@/components/ui/sonner';
import { getMetaPage } from '@/libs/metapage/metaPage';

const inter = Inter({
  subsets: ['latin'],
});

export const metadata = getMetaPage();

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html className='relative scroll-my-24' lang='en'>
      <body className={inter.className}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <Analytics />
          <Toaster />
          <main className='min-h-screen'>
            <Container>{children}</Container>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
