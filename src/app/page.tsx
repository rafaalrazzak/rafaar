import DynamicIcon from "@/components/DynamicIcon";
import GalleryImage from "@/components/GalleryImage";
import Hero from "@/components/Hero";
import IconText from "@/components/IconText";
import PortfolioCard from "@/components/PortfolioCard";
import ToolsSection from "@/components/ToolsSection";
import { tools } from "@/data/tools";
import { getGallery, getProjects } from "@/libs/api";

export const runtime = "edge";

export default async function Page() {
    const gallery = await getGallery();
    const projects = await getProjects();

    return (
        <>
            <Hero />

            {gallery.length > 0 && (
                <section className="flex flex-col items-center justify-center overflow-clip py-2 md:overflow-visible">
                    <div className="relative inset-x-0 flex justify-center gap-5 py-12 sm:gap-8">
                        {gallery.map((item, idx) => (
                            <GalleryImage key={idx} {...item} />
                        ))}
                    </div>

                    <span className="text-sm text-primary-700">Photos By Unsplash</span>
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
