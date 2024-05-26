import { Header } from '@/components/Header';
import Link from '@/components/Link';
import { Button } from '@/components/ui/button';
import { RESUME_DATA } from '@/data/resumeData';
import { socialMedia } from '@/data/socialMedia';

import Projects from './projects';

export default function LinksPage() {
  return (
    <>
      <Header
        cover={'https://cdn.kita.blue/kita/thumbnail-1200x400.png'}
        avatar
      />
      <main className='flex w-full flex-col gap-8'>
        <section className='flex flex-col gap-3'>
          <div className='flex flex-col gap-1'>
            <h1 className='text-xl font-bold'>Rafa Al Razzak</h1>
            <p className='text-sm'>
              Frontend Web Developer with experience in{' '}
              {RESUME_DATA.passions.map((passion, index) => (
                <span key={index}>
                  <Link
                    href={passion.url}
                    className='bg-gradient-to-r from-teal-600 to-teal-400 bg-clip-text font-semibold text-transparent hover:underline'
                  >
                    {passion.name}
                  </Link>
                  {index < RESUME_DATA.passions.length - 1 && ', '}
                </span>
              ))}
              . Passionate about crafting modern web applications.
            </p>
          </div>
          <div className='flex flex-wrap gap-2'>
            {socialMedia.map((social) => (
              <Button
                key={social.name}
                className='size-8 text-white'
                size='icon'
                asChild
              >
                <a href={social.url}>
                  <social.icon className='size-4 fill-current' />
                </a>
              </Button>
            ))}
          </div>
        </section>
        <Projects />
      </main>
    </>
  );
}
