import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import Link from '@/components/Link';
import { RESUME_DATA } from '@/data/resumeData';
import { socialMedia } from '@/data/socialMedia';

import Projects from './projects';

export const metadata = {
  title: 'Links',
};

export default function LinksPage() {
  return (
    <main className='mx-auto flex max-w-xl flex-col items-center gap-12 md:gap-8'>
      <Header
        cover='https://cdn.kita.blue/kita/thumbnail-1200x400.png'
        avatar
      />

      <div className='flex w-full flex-col gap-8'>
        <section className='flex flex-col gap-3'>
          <div className='flex flex-col gap-1'>
            <h1 className='text-xl font-bold'>Rafa Al Razzak</h1>

            <p className='text-sm text-primary-300'>{RESUME_DATA.about}</p>
          </div>

          <div className='flex flex-wrap gap-2'>
            {socialMedia.map((social) => (
              <Link key={social.url} href={social.url} size='icon'>
                <social.icon className='size-4 fill-current text-white' />
              </Link>
            ))}
          </div>
        </section>

        <Projects />
      </div>
      <Footer />
    </main>
  );
}
