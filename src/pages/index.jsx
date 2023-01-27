import BlogCard from "@/components/BlogCard"
import DynamicIcon from "@/components/DynamicIcon"
import Hero from "@/components/Hero"
import IconText from "@/components/IconText"
import PortfolioCard from "@/components/PortfolioCard"
import ProjectImage from "@/components/ProjectImage"
import {SEO} from "@/components/SEO"
import SocialMedia from "@/components/SocialMedia"
import ToolsSection from "@/components/ToolsSection"
import NowPlaying from "@/components/Spotify/NowPlaying"
import TopTrack from "@/components/Spotify/TopTrack"
import Portfolio from "@/data/Portfolio"
import Tools from "@/data/Tools"
import {DefaultLayout} from "@/layout"

export async function getServerSideProps(){
	const nowPlaying = await fetch("https://api.rafaar.me/api/v1/spotify/now-playing").then((res) => res.json())
	const topTracks = await fetch("https://api.rafaar.me/api/v1/spotify/top-tracks?limit=5").then((res) => res.json())

	return {
		props: {
			nowPlaying, topTracks,
		},
	}
}

export default function Home({nowPlaying, topTracks}){

	console.log(topTracks)

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
						<ProjectImage/>
						<span className="my-12 text-sm text-primary-600 dark:text-primary-300">
            Photo By Unsplash
          </span>
					</section>

					<section className="sm:px-8 ">
						<div className="mx-auto max-w-7xl ">
							<div className="mx-auto grid  grid-cols-1 gap-4 s lg:grid-cols-3 ">
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
								/><BlogCard
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
								<ToolsSection key={tool.title} {...tool} >
									{tool.item.map((tool, idx) => (
											<IconText key={idx} className="group/tools" icon={<DynamicIcon name={tool} />} text={tool}/>))}
								</ToolsSection>))}
					</>


					<section>
						<div className="py-6">
							<h1>Portfolio</h1>
							<div className="md:grid-cols-auto my-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
								{Portfolio.map((portfolio, idx) => (
										<PortfolioCard key={idx} {...portfolio} />))}
							</div>
						</div>
					</section>

					{nowPlaying?.isPlaying && (
							<section>
								<NowPlaying {...nowPlaying} />
							</section>)}


					{topTracks && (
							<section className="my-4 gap-4 flex flex-col">
								<h1>Top Tracks</h1>
								<div className="flex flex-wrap gap-2 ">

								{topTracks?.tracks?.map((track, idx) => (
										<TopTrack key={idx} {...track} />
								))}
								</div>
							</section>)}


				</DefaultLayout>
			</>)
}
