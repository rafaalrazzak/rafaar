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

export async function getServerSideProps() {
  const [dynamicData, { gallery, projects }] = await Promise.all([
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/personal/dynamic`).then((res) =>
      res.json()
    ),
    getAll(),
  ])

  return { props: { ...dynamicData, gallery, projects } }
}

export default function Home({ nowPlaying, topTracks, gallery, projects }) {
  const renderBlogCards = () => (
    <div className="mx-auto max-w-7xl sm:px-8">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        {[...Array(3)].map((_, idx) => (
          <BlogCard
            key={idx}
            title="Hello World"
            description="Hello Dunia LOREM ipsum dolor sit amet"
            publishOn="11 December 2022"
            url="blog/hello-world"
          />
        ))}
      </div>
    </div>
  )

  const renderToolsSections = () => (
    <>
      {Tools.map((tool) => (
        <ToolsSection key={tool.title} {...tool}>
          {tool.item.map((item, idx) => (
            <IconText
              key={idx}
              className="group/tools"
              icon={<DynamicIcon name={item} />}
              text={item}
            />
          ))}
        </ToolsSection>
      ))}
    </>
  )

  const renderPortfolioSection = () => (
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
  )

  const renderNowPlayingSection = () => (
    <section className="my-4 flex flex-col gap-4">
      <h3>Now Playing</h3>
      <NowPlaying {...nowPlaying} />
    </section>
  )

  const renderTopTracksSection = () => (
    <section className="my-4 flex flex-col gap-4">
      <h3>Top Tracks</h3>
      <div className="flex flex-1 flex-wrap gap-2 lg:flex-nowrap">
        {topTracks.map((track, idx) => (
          <TopTrack key={idx} {...track} />
        ))}
      </div>
    </section>
  )

  return (
    <DefaultLayout>
      <SEO title="Hello" />
      <section className="sm:mt-12">
        <Hero />
        <SocialMedia />
      </section>

      {gallery && (
        <section className="-mx-6 flex flex-col items-center justify-center overflow-clip py-6 sm:-mx-14 md:-mx-12">
          <div className="relative inset-x-0 flex justify-center gap-5 py-12 sm:gap-8">
            {gallery.map((item, idx) => (
              <GalleryImage key={idx} {...item} />
            ))}
          </div>
          <span className="my-12 text-sm text-primary-600 dark:text-primary-300">
            Photo By Unsplash
          </span>
        </section>
      )}

      {renderBlogCards()}

      {renderToolsSections()}

      {projects && renderPortfolioSection()}

      <div className="flex flex-col">
        {nowPlaying?.isPlaying && renderNowPlayingSection()}
        {topTracks && renderTopTracksSection()}
      </div>
    </DefaultLayout>
  )
}
