import Image from 'next/image'
import Link from 'next/link'

import BlogCard from '@/components/BlogCard'
import DynamicIcon from '@/components/DynamicIcon'
import Hero from '@/components/Hero'
import ProjectImage from '@/components/ProjectImage'
import { SEO } from '@/components/SEO'
import SocialMedia from '@/components/SocialMedia'
import Tooltip from '@/components/Tooltip'
import Skills from '@/data/Skills'
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
              <div className="py-6">
                <h1>Skills</h1>

                <div
                  className="flex flex-wrap gap-4 py-6"
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                  }}
                >
                  {Skills.map((skill) => (
                    <Tooltip key={skill} title={skill}>
                      <DynamicIcon name={skill} className="flex" />
                    </Tooltip>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </DefaultLayout>
    </>
  )
}
