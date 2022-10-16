import Hero from "@/components/Hero"
import Image from "@/components/Image"
import Layout from "@/components/Layout"
import SocialMedia from "@/components/SocialMedia"
import ProjectImage from "@/components/ProjectImage"
import BlogCard from "@/components/BlogCard"
export default function Home() {
  return (
    <>
      <Layout>
        <section>
          <Image
            src="https://res.cloudinary.com/raf-ar/image/upload/v1651370642/blog/avatars/rafa al razzak.jpg"
            width={50}
            height={50}
            alt="Rafa Al Razzak"
            className="h-16 w-16 rounded-full bg-primary-100 object-cover dark:bg-primary-800"
          />

          <Hero />
          <SocialMedia />
        </section>
        <section className="flex flex-col items-center justify-center">
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
                  url="/hello-world"
                />
                <BlogCard
                  title="Hello World"
                  description="Hello Dunia LOREM ipsum dolor sit amet"
                  publishOn="16/10/2022"
                  url="/hello-world"
                />
              </div>

              <div className="flex flex-col gap-6">
                <form
                  action="/thank-you"
                  className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
                >
                  <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                      className="h-6 w-6 flex-none"
                    >
                      <path
                        d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
                        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
                      />
                      <path
                        d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
                        className="stroke-zinc-400 dark:stroke-zinc-500"
                      />
                    </svg>
                    <span className="ml-3">Stay up to date</span>
                  </h2>
                  <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                    Get notified when I publish something new, and unsubscribe
                    at any time.
                  </p>
                  <div className="mt-6 flex">
                    <input
                      type="email"
                      placeholder="Email address"
                      aria-label="Email address"
                      required
                      className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm"
                    />
                    <button
                      className="ml-4 inline-flex flex-none items-center justify-center gap-2 rounded-md bg-zinc-800 py-2 px-3 text-sm font-semibold text-zinc-100 outline-offset-2 transition hover:bg-zinc-700 active:bg-zinc-800 active:text-zinc-100/70 active:transition-none dark:bg-zinc-700 dark:hover:bg-zinc-600 dark:active:bg-zinc-700 dark:active:text-zinc-100/70"
                      type="submit"
                    >
                      Join
                    </button>
                  </div>
                </form>

                <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
                  <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                      className="h-6 w-6 flex-none"
                    >
                      <path
                        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
                        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
                      />
                      <path
                        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
                        className="stroke-zinc-400 dark:stroke-zinc-500"
                      />
                    </svg>
                    <span className="ml-3">Work</span>
                  </h2>
                  <ol className="mt-6 space-y-4">
                    <li className="flex gap-4">
                      <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                        <img
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
                        <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                          Planetaria
                        </dd>
                      </dl>
                    </li>
                  </ol>
                  <a
                    className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-zinc-50 py-2 px-3 text-sm font-medium text-zinc-900 outline-offset-2 transition hover:bg-zinc-100 active:bg-zinc-100 active:text-zinc-900/60 active:transition-none dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:active:bg-zinc-800/50 dark:active:text-zinc-50/70"
                    href="/#"
                  >
                    Download CV
                    <svg
                      viewBox="0 0 16 16"
                      fill="none"
                      aria-hidden="true"
                      className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50"
                    >
                      <path
                        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}
