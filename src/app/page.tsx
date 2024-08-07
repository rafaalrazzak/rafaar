import { BentoCard, BentoGrid } from '@/components/BentoGrid';
import DynamicIcon from '@/components/DynamicIcon';
import GalleryImage from '@/components/GalleryImage';
import Hero from '@/components/Hero';
import IconText from '@/components/IconText';
import Image from '@/components/Image';
import Navbar from '@/components/Navbar';
import ToolsSection from '@/components/ToolsSection';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { tools } from '@/data/tools';
import { getGallery, getProjects } from '@/libs/api';

export const runtime = 'edge';
export const revalidate = 3600;

export default async function Page() {
  const gallery = await getGallery();
  const projects = await getProjects();

  return (
    <main className='my-16'>
      <Navbar />
      <Hero />

      {gallery.length > 0 && (
        <ScrollArea className='h-full w-full whitespace-nowrap'>
          <div className='flex w-max gap-4'>
            {gallery.map((item, idx) => (
              <figure key={idx} className='my-12 shrink-0'>
                <GalleryImage {...item} />
              </figure>
            ))}
          </div>
          <ScrollBar orientation='horizontal' />
        </ScrollArea>
      )}

      {tools.map((tool) => (
        <ToolsSection key={tool.title} {...tool}>
          {tool.item.map((tool, idx) => (
            <IconText
              key={idx}
              className='group/tools'
              icon={<DynamicIcon name={tool} />}
              text={tool}
            />
          ))}
        </ToolsSection>
      ))}

      {projects.length > 0 && (
        <section className='flex flex-col gap-4 py-6'>
          <h2>Portfolio</h2>

          <BentoGrid>
            {projects.map((project) => (
              <BentoCard
                {...project}
                key={project.title}
                cta='Learn more'
                className='col-span-2 md:col-span-1'
                background={
                  <div className='relative flex bg-cover bg-center ring-muted after:absolute after:inset-0 after:bg-gradient-to-t after:from-background after:to-transparent'>
                    <Image
                      src={project.cover}
                      alt={project.title}
                      className='relative inset-0 top-0 size-full object-cover object-center after:absolute after:inset-0 after:z-10 after:bg-gradient-to-t after:from-background after:via-background after:to-transparent'
                      width={600}
                      height={300}
                      sizes='(max-width: 800px) 100vw, (max-width: 1200px) 50vw, 40vw'
                    />
                  </div>
                }
              />
            ))}
          </BentoGrid>
        </section>
      )}
    </main>
  );
}
