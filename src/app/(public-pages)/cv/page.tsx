/* eslint-disable @next/next/no-img-element */
import { GlobeIcon } from 'lucide-react';
import { Metadata } from 'next';
import Image from 'next/image';

import DynamicIcon from '@/components/DynamicIcon';
import IconText from '@/components/IconText';
import Navbar from '@/components/Navbar';
import { Section, SectionWithText } from '@/components/Section';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { RESUME_DATA } from '@/data/resume-data';
import { tools } from '@/data/tools';
import { MailIcon } from '@/icons';
import { getProjects } from '@/libs/api';
import { getFavicon } from '@/libs/utils';

import Print from './Print';

export const metadata: Metadata = {
  title: `${RESUME_DATA.name} | ${RESUME_DATA.about}`,
  description: RESUME_DATA.summary,
  openGraph: {
    siteName: `${RESUME_DATA.name} | ${RESUME_DATA.about}`,
    type: 'website',
    images: [
      {
        url: RESUME_DATA.ogImage,
        width: 1200,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default async function Page() {
  const projects = await getProjects();

  return (
    <main className='container relative mx-auto my-12 scroll-my-12 overflow-auto py-4 md:p-16 print:p-12'>
      <Navbar />
      <Section className='mx-auto flex w-full max-w-2xl flex-col gap-8 print:gap-12'>
        <div className='flex items-center justify-between gap-4'>
          <div className='flex flex-1 flex-col gap-4'>
            <h1 className='text-2xl font-bold'>{RESUME_DATA.name}</h1>

            <p className='max-w-md text-pretty text-sm text-muted-foreground'>
              {RESUME_DATA.about}
            </p>
            <p className='max-w-md items-center text-pretty text-xs text-muted-foreground'>
              <a
                className='inline-flex gap-x-1.5 align-baseline leading-none hover:underline'
                href={RESUME_DATA.locationLink}
                target='_blank'
                rel='noopener noreferrer'
              >
                <GlobeIcon className='size-3' />
                {RESUME_DATA.location}
              </a>
            </p>
            <div className='flex gap-x-1 pt-1 text-sm text-muted-foreground print:hidden'>
              {RESUME_DATA.contact.email && (
                <Button className='size-8' size='icon' asChild>
                  <a href={`mailto:${RESUME_DATA.contact.email}`}>
                    <MailIcon className='size-4 fill-current' />
                  </a>
                </Button>
              )}
              {RESUME_DATA.contact.social.map((social) => (
                <Button
                  key={social.name}
                  className='size-8'
                  size='icon'
                  asChild
                >
                  <a href={social.url}>
                    <social.icon className='size-4 fill-current' />
                  </a>
                </Button>
              ))}
            </div>
            <div className='hidden flex-col gap-x-1 text-sm text-muted-foreground print:flex'>
              {RESUME_DATA.contact.email && (
                <a href={`mailto:${RESUME_DATA.contact.email}`}>
                  <span className='underline'>{RESUME_DATA.contact.email}</span>
                </a>
              )}
            </div>
          </div>

          <Avatar className='size-28'>
            <AvatarImage
              className='object-cover'
              alt={RESUME_DATA.name}
              src={RESUME_DATA.avatarUrl}
            />
            <AvatarFallback>{RESUME_DATA.initials}</AvatarFallback>
          </Avatar>
        </div>

        <SectionWithText title='About'>
          <p className='text-pretty text-sm leading-relaxed text-muted-foreground'>
            {RESUME_DATA.summary}
          </p>
        </SectionWithText>

        <SectionWithText title='Work Experience'>
          {RESUME_DATA.work.map((work) => (
            <div
              key={work.company}
              className='flex flex-col gap-2 overflow-hidden rounded-xl border border-muted p-3'
              style={{
                backgroundImage: `linear-gradient(90deg, ${work.color} 0%, ${work.color} 3px, transparent 1px, transparent 100%)`,
              }}
            >
              <div className='flex gap-2'>
                <img
                  src={work.logo}
                  alt={work.company}
                  className='h-7 w-7 rounded-full p-1'
                  style={{
                    backgroundColor: work.color,
                  }}
                />

                <div className='flex flex-col gap-2 text-base'>
                  <div className='flex justify-between gap-2'>
                    <h4>
                      <a className='hover:underline' href={work.link}>
                        {work.company}
                      </a>

                      {work.link && (
                        <a
                          href={work.link}
                          className='hidden text-xs underline print:flex'
                        >
                          {work.link?.replace(/https:\/\/|www\.|\//g, '')}
                        </a>
                      )}
                    </h4>

                    <span className='text-sm tabular-nums text-muted-foreground'>
                      {work.start} - {work.end}
                    </span>
                  </div>

                  <h4 className='text-sm leading-none'>{work.title}</h4>

                  <div className='inline-flex gap-x-1 text-xs text-muted-foreground'>
                    {work.badges.map((badge, idx) => (
                      <div key={idx} className='flex gap-x-1'>
                        <span>{badge}</span>
                        {idx !== work.badges.length - 1 && <span>·</span>}
                      </div>
                    ))}
                  </div>

                  <div className='text-balance text-sm leading-relaxed text-muted-foreground'>
                    {work.description}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </SectionWithText>
        <SectionWithText title='Education'>
          {RESUME_DATA.education.map((education) => (
            <div key={education.school}>
              <div>
                <div className='flex items-center justify-between gap-x-2 text-base'>
                  <h5 className='font-semibold leading-none'>
                    {education.school}
                  </h5>
                  <div className='text-sm tabular-nums text-muted-foreground'>
                    {education.start} - {education.end}
                  </div>
                </div>
              </div>
              <div className='mt-2 text-sm text-muted-foreground'>
                {education.degree}
              </div>
            </div>
          ))}
        </SectionWithText>

        <SectionWithText
          title='Skills and Tools'
          className='print-force-new-page print:pt-12'
        >
          <div className='flex flex-wrap gap-2'>
            {tools.flatMap((tool) =>
              tool.item.map((item, idx) => (
                <IconText
                  key={idx}
                  className='group/tools rounded-full'
                  icon={
                    <DynamicIcon
                      className='fill-muted-foreground'
                      size={16}
                      name={item}
                    />
                  }
                  text={item}
                />
              ))
            )}
          </div>
        </SectionWithText>

        <SectionWithText title='Projects'>
          <div className='grid grid-cols-1 gap-3 md:grid-cols-2 print:grid-cols-2 print:gap-2'>
            {projects.map(({ link, title, description, stacks }) => (
              <div
                key={title}
                className='flex flex-col gap-3 overflow-hidden rounded-xl border border-muted p-3'
              >
                <div className='flex flex-col gap-2'>
                  {link && (
                    <Image
                      width={16}
                      height={16}
                      alt={title}
                      src={getFavicon(link)}
                      className='inline-block h-4 w-4'
                    />
                  )}
                  <div className='space-y-1'>
                    <div className='text-sm font-bold'>
                      {link ? (
                        <a
                          href={link}
                          target='_blank'
                          className='inline-flex items-center gap-1 hover:underline'
                          rel='noopener noreferrer'
                        >
                          {title}{' '}
                          <span className='size-1 rounded-full bg-accent-foreground'></span>
                        </a>
                      ) : (
                        title
                      )}
                    </div>
                    <a
                      href={link}
                      className='hidden text-sm underline print:flex'
                    >
                      {link?.replace(/https:\/\/|www\.|\//g, '')}
                    </a>
                    <div className='text-sm text-muted-foreground'>
                      {description}
                    </div>
                  </div>
                </div>
                <div className='flex'>
                  <div className='flex flex-wrap gap-1'>
                    {stacks.map((stack, idx) => (
                      <IconText
                        key={idx}
                        size='xs'
                        icon={
                          <DynamicIcon
                            className='fill-primary'
                            size={14}
                            name={stack}
                          />
                        }
                        text={stack}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </SectionWithText>
      </Section>

      <Print />
    </main>
  );
}
