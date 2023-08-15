"use client";

import { getAll } from "@vercel/edge-config";
import { useEffect, useState } from "react";

import DynamicIcon from "@/components/DynamicIcon";
import GalleryImage from "@/components/GalleryImage";
import Hero from "@/components/Hero";
import IconText from "@/components/IconText";
import PortfolioCard from "@/components/PortfolioCard";
import { SEO } from "@/components/SEO";
import SocialMedia from "@/components/SocialMedia";
import NowPlaying from "@/components/Spotify/NowPlaying";
import TopTrack from "@/components/Spotify/TopTrack";
import ToolsSection from "@/components/ToolsSection";
import Tools from "@/data/Tools";
import { DefaultLayout } from "@/layout";

export async function getServerSideProps() {
    try {
        const { gallery, projects } = await getAll();

        return {
            props: {
                gallery,
                projects,
            },
        };
    } catch (error) {
        console.error("Error fetching data:", error);
        return {
            props: {
                gallery: [],
                projects: [],
            },
        };
    }
}

export default function Home({ gallery, projects }) {
    const [nowPlaying, setNowPlaying] = useState({});
    const [topTracks, setTopTracks] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/personal/dynamic`);
                const { nowPlaying, topTracks } = await response.json();
                setNowPlaying(nowPlaying);
                setTopTracks(topTracks);
            } catch (error) {
                console.error("Error fetching nowPlaying and topTracks:", error);
            }
        }

        fetchData();
    }, []);

    return (
        <DefaultLayout>
            <SEO title="Hello" />
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

                    <span className="my-12 text-sm text-primary-600 dark:text-primary-300">Photo By Unsplash</span>
                </section>
            )}

            {/* <section className="sm:px-8 ">
        <div className="mx-auto max-w-7xl ">
          <div className="s mx-auto  grid grid-cols-1 gap-4 lg:grid-cols-3 ">
            {/* <BlogCard ... /> */}
            {/* </div>
        </div>
      </section> */}

            {Tools.map((tool) => (
                <ToolsSection key={tool.title} {...tool}>
                    {tool.item.map((tool, idx) => (
                        <IconText key={idx} className="group/tools" icon={<DynamicIcon name={tool} />} text={tool} />
                    ))}
                </ToolsSection>
            ))}

            {projects.length > 0 && (
                <section>
                    <div className="py-6">
                        <h1>Portfolio</h1>
                        <div className="md:grid-cols-auto my-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                            {projects.map((project, idx) => (
                                <PortfolioCard key={idx} {...project} />
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {nowPlaying.isPlaying && (
                <section>
                    <NowPlaying {...nowPlaying} />
                </section>
            )}

            {topTracks.length > 0 && (
                <section className="my-4 flex flex-col gap-4">
                    <h3>Top Tracks</h3>
                    <div className="flex flex-col flex-wrap gap-2 lg:flex-row ">
                        {topTracks.map((track, idx) => (
                            <TopTrack key={idx} {...track} />
                        ))}
                    </div>
                </section>
            )}
        </DefaultLayout>
    );
}
