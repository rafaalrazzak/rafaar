import BlogCard from "@/components/BlogCard"
import DynamicIcon from "@/components/DynamicIcon"
import Hero from "@/components/Hero"
import PortfolioCard from "@/components/PortfolioCard"
import ProjectImage from "@/components/ProjectImage"
import {SEO} from "@/components/SEO"
import SocialMedia from "@/components/SocialMedia"
import NowPlaying from "@/components/Spotify/NowPlaying"
import Tooltip from "@/components/Tooltip"
import Portfolio from "@/data/Portfolio"
import Skills from "@/data/Skills"
import {DefaultLayout} from "@/layout"

export async function getServerSideProps(){
  const nowPlaying = await fetch(
      "https://api.rafaar.me/api/v1/spotify/now-playing"
  ).then((res) => res.json())

  return {
    props: {
      nowPlaying,
    },
  }
}

export default function Home({nowPlaying}){
  console.log(nowPlaying)

  return (
      <>
        <DefaultLayout>
          <SEO title="Hello"/>
          <section className="sm:mt-12">
            <Hero/>
            <SocialMedia/>
          </section>
          <section
              className="-mx-6 flex flex-col items-center justify-center overflow-clip py-6 sm:-mx-12 md:overflow-visible lg:-mx-24 ">
          <ProjectImage />
          <span className="my-12 text-sm text-primary-600 dark:text-primary-300">
            Photo By Unsplash
          </span>
        </section>

        <section className="sm:px-8 ">
          <div className="mx-auto max-w-7xl lg:px-8">
            <div className="mx-auto grid max-w-xl grid-cols-1 gap-4 gap-y-20 lg:max-w-none lg:grid-cols-2">
              <div className="flex flex-col gap-16">
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
          </div>
        </section>

        <section>
          <div className="py-6">
            <h1>Skills</h1>

            <div
              className="flex flex-wrap gap-4 py-6"
              style={{
                display: "flex",
                flexWrap: "wrap",
              }}
            >
              {Skills.map((skill) => (
                <Tooltip key={skill} title={skill}>
                  <DynamicIcon name={skill} className="flex"/>
                </Tooltip>
              ))}
            </div>
          </div>
        </section>
          <section>
            <div className="py-6">
              <h1>Portfolio</h1>

              <div className="my-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {Portfolio.map((portfolio, idx) => (
                    <PortfolioCard key={idx} {...portfolio} />
                ))}
              </div>
            </div>
          </section>

          {nowPlaying?.isPlaying && (
              <section>
                <NowPlaying {...nowPlaying} />
              </section>
          )}
        </DefaultLayout>
    </>
  )
}
