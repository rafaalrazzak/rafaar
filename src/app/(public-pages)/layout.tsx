import '@/styles/globals.css';

import { Inter } from 'next/font/google';

import Analytics from '@/components/Analytics';
import Container from '@/components/Container';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Toaster } from '@/components/ui/sonner';
import { getMetaPage } from '@/libs/metapage/metaPage';

import AsciiLogoBackground from './ascii';

const inter = Inter({ subsets: ['latin'] });
export const metadata = getMetaPage();

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className={inter.className}>
      <body>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          <Analytics />
          <Toaster />
          <main className='flex flex-col items-center justify-center'>
            <AsciiLogoBackground />
            <Container>{children}</Container>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
