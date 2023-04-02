import { getAll } from "@vercel/edge-config"

import BlogCard from "@/components/BlogCard"
import DynamicIcon from "@/components/DynamicIcon"
import GalleryImage from "@/components/GalleryImage"
import Hero from "@/components/Hero"
import IconText from "@/components/IconText"
import PortfolioCard from "@/components/PortfolioCard"
import { SEO } from "@/components/SEO"
import SocialMedia from "@/components/SocialMedia"
import NowPlaying from "@/components/Spotify/NowPlaying"
import TopTrack from "@/components/Spotify/TopTrack"
import ToolsSection from "@/components/ToolsSection"
import Tools from "@/data/Tools"
import { DefaultLayout } from "@/layout"
import { twclsx } from "@/libs/twclsx"

export async function getServerSideProps() {
  const [{ nowPlaying, topTracks }] = await Promise.all([
    fetch("https://api.rafaar.me/api/v1/personal/dynamic").then((res) =>
      res.json()
    ),
  ])

  const { gallery, projects } = await getAll()

  return {
    props: {
      nowPlaying,
      topTracks,
      gallery,
      projects,
    },
  }
}

export default function Home({ nowPlaying, topTracks, gallery, projects }) {
  return (
    <>
      <DefaultLayout>
        <SEO title="Hello" />
        <section className="sm:mt-12">
          <Hero />
          <SocialMedia />
        </section>

        {gallery && (
          <section className="-mx-6 flex flex-col items-center justify-center overflow-clip py-6 sm:-mx-14 md:-mx-12 ">
            <div className="relative inset-x-0 flex justify-center gap-5  py-12 sm:gap-8">
              {gallery.map((item, idx) => (
                <GalleryImage key={idx} {...item} />
              ))}
            </div>

            <span className="my-12 text-sm text-primary-600 dark:text-primary-300">
              Photo By Unsplash
            </span>
          </section>
        )}

        <section className="sm:px-8 ">
          <div className="mx-auto max-w-7xl ">
            <div className="s mx-auto  grid grid-cols-1 gap-4 lg:grid-cols-3 ">
              <BlogCard
                title="Hello World"
                description="Hello Dunia LOREM ipsum dolor sit amet"
                publishOn="11 December 2022"
                url="blog/hello-world"
              />
              <BlogCard
                title="Hello World"
                description="Hello Dunia LOREM ipsum dolor sit amet"
                publishOn="11 December 2022"
                url="blog/hello-world"
              />
              <BlogCard
                title="Hello World"
                description="Hello Dunia LOREM ipsum dolor sit amet"
                publishOn="11 December 2022"
                url="blog/hello-world"
              />
            </div>
          </div>
        </section>

        <>
          {Tools.map((tool) => (
            <ToolsSection key={tool.title} {...tool}>
              {tool.item.map((tool, idx) => (
                <IconText
                  key={idx}
                  className="group/tools"
                  icon={<DynamicIcon name={tool} />}
                  text={tool}
                />
              ))}
            </ToolsSection>
          ))}
        </>

        {projects && (
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

        <div
          className={twclsx("grid grid-cols-1 gap-2", {
            "lg:grid-cols-2": nowPlaying?.isPlaying,
          })}
        >
          {nowPlaying?.isPlaying && (
            <section className="my-4 flex shrink flex-col gap-4">
              <h3>Now Playing</h3> <NowPlaying {...nowPlaying} />
            </section>
          )}

          {topTracks && (
            <section className="my-4  flex flex-col gap-4 ">
              <h3>Top Tracks</h3>
              <div className="flex flex flex-1 flex-wrap gap-2 lg:flex-nowrap ">
                {topTracks?.map((track, idx) => (
                  <TopTrack key={idx} {...track} />
                ))}
              </div>
            </section>
          )}
        </div>
      </DefaultLayout>
    </>
  )
}
