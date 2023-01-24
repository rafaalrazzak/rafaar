import React from "react"

import { ArrowRightIcon } from "@/icons"

import { dateFormat } from "@/utils/dateFormat"
import Link from "./Link"

function BlogCard({ title, description, publishOn, url }) {
  return (
    <article className="group relative flex flex-col justify-start ">
      <div className=" transition-color  rounded-xl p-4 ease-in-out group-hover:bg-primary-50 dark:group-hover:bg-primary-800/50 sm:rounded-2xl">
        <time
          className="relative z-10 order-first mb-3 flex items-center gap-3 text-sm text-primary-400 dark:text-primary-500 "
          dateTime={dateFormat(publishOn)}
        >
          <span
            className="absolute inset-y-0 left-0 flex items-center"
            aria-hidden="true"
          ></span>
          <span className="h-4 w-0.5 rounded-full bg-primary-200 dark:bg-primary-500"></span>
          {dateFormat(publishOn)}
        </time>
        <h2 className="text-base font-semibold tracking-tight text-primary-800 dark:text-primary-100">
          <Link href={url}>
            <span className="relative z-10">{title}</span>
          </Link>
        </h2>
        <p className="relative z-10 mt-2 text-sm text-primary-600 dark:text-primary-400">
          {description}
        </p>
        <Link
          aria-hidden="true"
          className="relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500"
          href={url}
        >
          Read article
          <ArrowRightIcon />
        </Link>
      </div>
    </article>
  )
}

export default BlogCard
