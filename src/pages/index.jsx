import BlogCard from '@/components/BlogCard'
import Hero from '@/components/Hero'
import ProjectImage from '@/components/ProjectImage'
import { SEO } from '@/components/SEO'
import SocialMedia from '@/components/SocialMedia'
import { DefaultLayout } from '@/layout'
export default function Home() {
  return (
    <>
      <DefaultLayout>
        <SEO title="Hello" />
        <section>
          <Hero />
          <SocialMedia />
        </section>
        <section className="flex flex-col items-center justify-center py-6">
          <ProjectImage />
          <span className="dark:text-priary-300 my-12 text-sm text-primary-600">
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
                  publishOn="16/10/2022"
                  url="blog/hello-world"
                />
                <BlogCard
                  title="Hello World"
                  description="Hello Dunia LOREM ipsum dolor sit amet"
                  publishOn="16/10/2022"
                  url="blog/hello-world"
                />
              </div>

              {/* <div className="flex flex-col gap-6">
                <form
                  action="/thank-you"
                  className="rounded-2xl border border-primary-100 p-6 dark:border-primary-700/40"
                >
                  <h2 className="flex text-sm font-semibold text-primary-900 dark:text-primary-100">
                    <MailIcon />
                    <span className="ml-3">Stay up to date</span>
                  </h2>
                  <p className="mt-2 text-sm text-primary-600 dark:text-primary-400">
                    Get notified when I publish something new, and unsubscribe
                    at any time.
                  </p>
                  <div className="mt-6 flex">
                    <input
                      type="email"
                      placeholder="Email address"
                      aria-label="Email address"
                      required
                      className="min-w-0 flex-auto appearance-none rounded-md border border-primary-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-primary-800/5 placeholder:text-primary-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-primary-700 dark:bg-primary-700/[0.15] dark:text-primary-200 dark:placeholder:text-primary-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm"
                    />
                    <button
                      className="ml-4 inline-flex flex-none items-center justify-center gap-2 rounded-md bg-primary-800 py-2 px-3 text-sm font-semibold text-primary-100 outline-offset-2 transition hover:bg-primary-700 active:bg-primary-800 active:text-primary-100/70 active:transition-none dark:bg-primary-700 dark:hover:bg-primary-600 dark:active:bg-primary-700 dark:active:text-primary-100/70"
                      type="submit"
                    >
                      Join
                    </button>
                  </div>
                </form>

                <div className="rounded-2xl border border-primary-100 p-6 dark:border-primary-700/40">
                  <h2 className="flex text-sm font-semibold text-primary-900 dark:text-primary-100">
                    <WorkIcon />
                    <span className="ml-3">Work</span>
                  </h2>
                  <ol className="mt-6 space-y-4">
                    <li className="flex items-center gap-4">
                      <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-primary-800/5 ring-1 ring-primary-900/5 dark:border dark:border-primary-700/50 dark:bg-primary-800 dark:ring-0">
                        <Image
                          alt=""
                          src="https://spotlight.tailwindui.com/_next/static/media/planetaria.ecd81ade.svg"
                          width={32}
                          height={32}
                          decoding="async"
                          data-nimg="future"
                          className="h-7 w-7"
                          loading="lazy"
                          style={{ color: "transparent" }}
                        />
                      </div>
                      <dl className="flex flex-auto flex-wrap gap-x-2">
                        <dt className="sr-only">Company</dt>
                        <dd className="w-full flex-none text-sm font-medium text-primary-900 dark:text-primary-100">
                          Planetaria
                        </dd>
                      </dl>
                    </li>
                  </ol>
                  <Link
                    className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary-50 py-2 px-3 text-sm font-medium text-primary-900 outline-offset-2 transition hover:bg-primary-100 active:bg-primary-100 active:text-primary-900/60 active:transition-none dark:bg-primary-800/50 dark:text-primary-300 dark:hover:bg-primary-800 dark:hover:text-primary-50 dark:active:bg-primary-800/50 dark:active:text-primary-50/70"
                    href="/#"
                  >
                    Download CV
                    <ArrowDown />
                  </Link>
                </div>
              </div> */}
            </div>
          </div>
        </section>
      </DefaultLayout>
    </>
  )
}
