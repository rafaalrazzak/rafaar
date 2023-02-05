import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/24/outline"
import clsx from "clsx"
import { useEffect, useState } from "react"

import Link from "@/components/Link"

function Section({
  children,
  bg,
  bgImg,
  className: addClassName,
  center = true,
  ...props
}) {
  return (
    <section
      className={clsx(
        "relative flex h-screen  w-screen snap-start bg-black  text-3xl text-white",
        { "items-center justify-center": center },
        addClassName
      )}
      {...props}
    >
      <div
        className={
          "absolute top-0 left-0 h-full w-full bg-cover bg-center bg-no-repeat opacity-30"
        }
        style={bg && { backgroundImage: `url(${bg})` }}
      >
        {bgImg && (
          <div
            className={
              "-z-1 absolute top-0 right-0 h-full w-1/2 bg-cover bg-center bg-no-repeat opacity-10 mix-blend-overlay brightness-[0.4]"
            }
            style={{ backgroundImage: `url(${bgImg})` }}
          />
        )}
      </div>

      {children}
    </section>
  )
}

const SectionNavigator = () => {
  const [previousId, setPreviousId] = useState(null)
  const [nextId, setNextId] = useState(null)

  useEffect(() => {
    let currentSection = null
    let observer = null

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          currentSection = entry.target
          updateNavigationLinks()
        }
      })
    }

    const updateNavigationLinks = () => {
      const sections = document.querySelectorAll("section")
      const currentIndex = [...sections].indexOf(currentSection)
      const previousSection = sections[currentIndex - 1]
      const nextSection = sections[currentIndex + 1]

      setPreviousId(previousSection ? previousSection.id : null)
      setNextId(nextSection ? nextSection.id : null)
    }

    const observerOptions = {
      root: null,
      threshold: 0.5,
    }

    observer = new IntersectionObserver(handleIntersection, observerOptions)

    const sections = document.querySelectorAll("section")
    sections.forEach((section) => {
      observer.observe(section)
    })

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <div className="flex gap-2">
      {previousId && (
        <Link href={`#${previousId}`}>
          <ArrowUpIcon className="h-6 w-6" />
        </Link>
      )}
      {nextId && (
        <Link href={`#${nextId}`}>
          <ArrowDownIcon className="h-6 w-6" />
        </Link>
      )}
    </div>
  )
}

export { Section, SectionNavigator }
