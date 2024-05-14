import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
// import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from '@/components/ui/badge';
// import { CommandMenu } from "@/components/command-menu";
import { Metadata } from 'next';
import { Section } from '@/components/Section';
import { GlobeIcon, MailIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { RESUME_DATA } from '@/data/resumeData';
import { getProjects } from '@/libs/api';
import { tools } from '@/data/tools';
import IconText from '@/components/IconText';
import DynamicIcon from '@/components/DynamicIcon';
import Image from '@/components/Image';
import { getFavicon } from '@/libs/utils';
import Print from './Print';
// import { ProjectCard } from "@/components/project-card";

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
    <main className='container relative mx-auto scroll-my-12 overflow-auto p-4 md:p-16 print:my-12 print:p-12'>
      <section className='bg-background mx-auto w-full max-w-2xl space-y-8 print:space-y-6'>
        <div className='flex items-center justify-between'>
          <div className='flex-1 space-y-1.5'>
            <h1 className='text-2xl font-bold'>{RESUME_DATA.name}</h1>

            <p className='max-w-md text-pretty font-mono text-sm text-primary-400'>
              {RESUME_DATA.about}
            </p>
            <p className='max-w-md items-center text-pretty font-mono text-xs text-primary-400'>
              <a
                className='inline-flex gap-x-1.5 align-baseline leading-none hover:underline'
                href={RESUME_DATA.locationLink}
                target='_blank'
              >
                <GlobeIcon className='size-3' />
                {RESUME_DATA.location}
              </a>
            </p>
            <div className='flex gap-x-1 pt-1 font-mono text-sm text-primary-400 print:hidden'>
              {RESUME_DATA.contact.email ? (
                <Button className='size-8 text-white' size='icon' asChild>
                  <a href={`mailto:${RESUME_DATA.contact.email}`}>
                    <MailIcon className='size-4' />
                  </a>
                </Button>
              ) : null}
              {RESUME_DATA.contact.social.map((social) => (
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
            <div className='hidden flex-col gap-x-1 font-mono text-sm text-primary-400 print:flex'>
              {RESUME_DATA.contact.email ? (
                <a href={`mailto:${RESUME_DATA.contact.email}`}>
                  <span className='underline'>{RESUME_DATA.contact.email}</span>
                </a>
              ) : null}
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
        <Section>
          <h2 className='text-xl font-bold'>About</h2>
          <p className='text-pretty font-mono text-sm text-primary-400'>
            {RESUME_DATA.summary}
          </p>
        </Section>
        <Section>
          <h2 className='text-xl font-bold'>Work Experience</h2>
          {RESUME_DATA.work.map((work) => {
            return (
              <div key={work.company}>
                <div className='flex flex-col gap-2'>
                  <div className='flex items-center justify-between gap-x-2 text-base'>
                    <h5 className='inline-flex items-center justify-center gap-x-1 font-semibold leading-none'>
                      <a className='hover:underline' href={work.link}>
                        {work.company}
                      </a>

                      <span className='inline-flex gap-x-1'>
                        {work.badges.map((badge) => (
                          <Badge
                            variant='secondary'
                            className='align-middle text-xs'
                            key={badge}
                          >
                            {badge}
                          </Badge>
                        ))}
                      </span>
                    </h5>
                    <div className='text-sm tabular-nums text-primary-400'>
                      {work.start} - {work.end}
                    </div>
                  </div>

                  <h4 className='font-mono text-sm leading-none'>
                    {work.title}
                  </h4>
                </div>
                <div className='mt-2 text-sm text-primary-400'>
                  {work.description}
                </div>
              </div>
            );
          })}
        </Section>
        <Section>
          <h2 className='text-xl font-bold'>Education</h2>
          {RESUME_DATA.education.map((education) => {
            return (
              <div key={education.school}>
                <div>
                  <div className='flex items-center justify-between gap-x-2 text-base'>
                    <h5 className='font-semibold leading-none'>
                      {education.school}
                    </h5>
                    <div className='text-sm tabular-nums text-primary-400'>
                      {education.start} - {education.end}
                    </div>
                  </div>
                </div>
                <div className='mt-2 text-sm text-primary-400'>
                  {education.degree}
                </div>
              </div>
            );
          })}
        </Section>
        <Section className='print-force-new-page print:pt-12'>
          <h2 className='text-xl font-bold'>Skills and Tools</h2>
          <div className='flex flex-wrap gap-1'>
            {tools.flatMap((tool) =>
              tool.item.map((item, idx) => (
                <IconText
                  key={idx}
                  className='group/tools'
                  icon={<DynamicIcon fill='#fffa' size={16} name={item} />}
                  text={item}
                />
              ))
            )}
          </div>
        </Section>

        <Section>
          <h2 className='text-xl font-bold'>Projects</h2>
          <div className='grid grid-cols-1 gap-3 md:grid-cols-2 print:grid-cols-2 print:gap-2'>
            {projects.map(({ link, title, description, stacks }) => {
              return (
                <div className='flex flex-col overflow-hidden rounded-xl border border-primary-600 p-3'>
                  <div className='flex flex-col gap-2'>
                    {link && (
                      <img
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
                          >
                            {title}{' '}
                            <span className='size-1 rounded-full bg-green-500'></span>
                          </a>
                        ) : (
                          title
                        )}
                      </div>
                      <div className='hidden font-mono text-xs underline print:flex'>
                        {link
                          ?.replace('https://', '')
                          .replace('www.', '')
                          .replace('/', '')}
                      </div>
                      <div className='font-mono text-xs text-primary-400'>
                        {description}
                      </div>
                    </div>
                  </div>
                  <div className='mt-auto flex'>
                    <div className='mt-2 flex flex-wrap gap-1'>
                      {stacks.map((stack) => (
                        <Badge
                          className='px-1 py-0 text-[10px]'
                          variant='secondary'
                          key={stack}
                        >
                          {stack}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Section>
      </section>

      <Print />
    </main>
  );
}
