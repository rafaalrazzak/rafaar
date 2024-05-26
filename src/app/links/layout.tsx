import { Footer } from '@/components/Footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className='mx-auto flex min-h-screen max-w-xl flex-col items-center gap-12 p-4 md:gap-8 '>
        {children}
        <Footer />
      </body>
    </html>
  );
}
