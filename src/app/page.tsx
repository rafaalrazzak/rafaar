import DynamicIcon from "@/components/DynamicIcon";
import GalleryImage from "@/components/GalleryImage";
import Hero from "@/components/Hero";
import IconText from "@/components/IconText";
import ToolsSection from "@/components/ToolsSection";
import { tools } from "@/data/tools";
import { getGallery, getProjects } from "@/libs/api";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

import { BentoCard, BentoGrid } from "@/components/BentoGrid";
import Image from "@/components/Image";

export const runtime = "edge";
export const revalidate = 3600;

export default async function Page() {
    const gallery = await getGallery();
    const projects = await getProjects();

    return (
        <>
            <Hero />

            {gallery.length > 0 && (
                <section className="flex flex-col items-center gap-6">
                    <ScrollArea className="w-full h-full whitespace-nowrap">
                        <div className="flex w-max gap-4">
                            {gallery.map((item, idx) => (
                                <figure key={idx} className="shrink-0 my-12">
                                    <GalleryImage {...item} />
                                </figure>
                            ))}
                        </div>
                        <ScrollBar orientation="horizontal" />
                    </ScrollArea>

                    <span className="text-sm text-primary-700">Photos by me</span>
                </section>
            )}

            {tools.map((tool) => (
                <ToolsSection key={tool.title} {...tool}>
                    {tool.item.map((tool, idx) => (
                        <IconText key={idx} className="group/tools" icon={<DynamicIcon name={tool} />} text={tool} />
                    ))}
                </ToolsSection>
            ))}

            {projects.length > 0 && (
                <section className="py-6 flex flex-col gap-4">
                    <h2>Portfolio</h2>

                    <BentoGrid>
                        {projects.map((project) => (
                            <BentoCard
                                {...project}
                                key={project.title}
                                cta="Learn more"
                                className="col-span-2 md:col-span-1"
                                background={
                                    <div className="relative flex bg-cover bg-center after:absolute  after:inset-0 after:bg-gradient-to-t after:from-primary-950 after:to-transparent ring-primary-900">
                                        <Image
                                            src={project.cover}
                                            alt={project.title}
                                            className="relative top-0 size-full inset-0 object-cover object-center after:absolute  after:inset-0 after:z-10 after:bg-gradient-to-t after:from-primary-950 after:via-primary-950after:to-transparent"
                                            width={1200}
                                            height={600}
                                            sizes="(max-width: 800px) 100vw, (max-width: 1200px) 50vw, 40vw"
                                        />
                                    </div>
                                }
                            />
                        ))}
                    </BentoGrid>
                </section>
            )}
        </>
    );
}
