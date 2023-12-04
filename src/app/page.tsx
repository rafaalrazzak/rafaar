import { getAll } from "@vercel/edge-config";

import DynamicIcon from "@/components/DynamicIcon";
import GalleryImage, { GalleryProps } from "@/components/GalleryImage";
import Hero from "@/components/Hero";
import IconText from "@/components/IconText";
import PortfolioCard, { PortfolioCardProps } from "@/components/PortfolioCard";
import SocialMedia from "@/components/SocialMedia";
import ToolsSection from "@/components/ToolsSection";
import { tools } from "@/data/tools";

interface GetAll {
    gallery: GalleryProps[];
    projects: PortfolioCardProps[];
}

export default async function Page() {
    const { gallery, projects } = await getAll<GetAll>();

    return (
        <>
            <section className="sm:mt-12">
                <Hero />
                <SocialMedia />
            </section>

            {gallery.length > 0 && (
                <section className="-mx-6 flex flex-col items-center justify-center overflow-clip py-6 sm:-mx-12 md:overflow-visible lg:-mx-24 ">
                    <div className="relative inset-x-0 flex justify-center gap-5  py-12 sm:gap-8">
                        {gallery.map((item, idx) => (
                            <GalleryImage key={idx} {...item} />
                        ))}
                    </div>

                    <span className="my-12 text-sm text-primary-300">Photos By Unsplash</span>
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
                <section className="py-6">
                    <h1>Portfolio</h1>
                    <div className="md:grid-cols-auto my-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                        {projects.map((project, idx) => (
                            <PortfolioCard key={idx} {...project} />
                        ))}
                    </div>
                </section>
            )}
        </>
    );
}
