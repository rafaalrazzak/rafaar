import '@/styles/globals.css';

import { Inter } from 'next/font/google';

import Analytics from '@/components/Analytics';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Toaster } from '@/components/ui/sonner';
import { getMetaPage } from '@/libs/metapage/metaPage';

import AsciiLogoBackground from '../ascii';
export const metadata = getMetaPage();

const inter = Inter({ subsets: ['latin'] });

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className={`${inter.className}`}>
      <body>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          <Analytics />
          <Toaster />
          <main className='flex size-full flex-col items-center justify-center'>
            <AsciiLogoBackground />
            <div className='mx-auto w-full p-4'>{children}</div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
