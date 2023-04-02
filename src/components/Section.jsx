import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/24/outline"
import { cva } from "class-variance-authority"
import clsx from "clsx"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

import Image from "./Image"
import Link from "./Link"
import motionText from "./motion/text"
import { Card, ImageCard } from "./ui/card"

const colorAmbient = cva("", {
  variants: {
    color: {
      redBlue: ["from-red-500", "to-blue-500"],
      redWhite: ["from-red-500", "to-white"],
      yellowGreen: ["from-yellow-500", "to-green-500"],
      tealSky: ["from-teal-500", "to-sky-500"],
      blueGray: ["from-blue-500", "to-gray-500"],
      purplePink: ["from-purple-500", "to-pink-500"],
      orangeYellow: ["from-orange-500", "to-yellow-500"],
      greenBlue: ["from-green-500", "to-blue-500"],
      pinkPurple: ["from-pink-500", "to-purple-500"],
      grayBlue: ["from-gray-500", "to-blue-500"],
      whiteRed: ["from-white", "to-red-500"],
      whiteBlue: ["from-white", "to-blue-500"],
      whiteGreen: ["from-white", "to-green-500"],
      whiteTeal: ["from-white", "to-teal-500"],
    },
    possition: {
      toR: "bg-gradient-to-r",
      toT: "bg-gradient-to-t",
      toB: "bg-gradient-to-b",
      toL: "bg-gradient-to-l",
      toTR: "bg-gradient-to-tr",
      toTL: "bg-gradient-to-tl",
      toBR: "bg-gradient-to-br",
      toBL: "bg-gradient-to-bl",
    },
  },
  defaultVariants: {
    variant: "redBlue",
    possition: "toR",
  },
})

function Section({
  children,
  bg,
  bgImg,
  bgImgOpacity = "opacity-10",
  className: addClassName,
  childClassName,
  center = true,
  ...props
}) {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      animate="show"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.15,
          },
        },
      }}
      className={clsx(
        "relative flex h-screen  w-screen bg-black  text-3xl text-white",
        { "items-center justify-center": center },
        addClassName
      )}
      {...props}
    >
      <div
        className={`absolute top-0 left-0 h-full w-full bg-cover bg-center bg-no-repeat opacity-80 transition-opacity`}
      >
        {bg && <Image src={bg} className="object-cover" alt="Image" fill />}

        {bgImg && (
          <div
            className={clsx(
              "-z-1 absolute top-0 right-0 h-full w-1/2 bg-cover bg-center bg-no-repeat mix-blend-screen",
              bgImgOpacity,
              "brightness-50",
              "after:absolute after:inset-0 after:bg-gradient-to-r after:from-black after:via-transparent"
            )}
            style={{ backgroundImage: `url(${bgImg})` }}
          />
        )}
      </div>

      <div
        className={clsx(
          "z-10 mx-auto flex items-center justify-center gap-4 p-4",
          childClassName
        )}
      >
        {children}
      </div>
    </motion.section>
  )
}

function SectionImage({
  frontMatter: {
    title,
    subTitle,
    cardImage,
    bg,
    bgImg,
    image,
    imageBg,
    imageTitle,
    order,
    flex,
    center = false,
    align,
  },
  children,
}) {
  return (
    <Section bg={bg} bgImg={bgImg} center={center}>
      <div
        className={clsx(
          " w-full items-center justify-between gap-12 p-4 py-12 md:p-24",
          flex ? "flex" : "flex flex-col"
        )}
      >
        <div
          className={clsx(
            "flex flex-col gap-4 md:px-24",
            order === "last" && "order-last"
          )}
        >
          <div className={clsx("flex flex-col gap-4", align)}>
            {subTitle && (
              <motionText.h3 className="text-gray-300">
                {subTitle}
              </motionText.h3>
            )}
            {title && <motionText.h1>{title}</motionText.h1>}
          </div>
          {children}
        </div>
        {cardImage ? (
          <ImageCard bg={imageBg} title={imageTitle} src={image} />
        ) : (
          <Image src={image} width={200} height={200} alt="Image" />
        )}
      </div>
    </Section>
  )
}

function SectionCard({
  frontMatter: { title, bg, bgImg, gradientBg, center = true },
  children,
}) {
  return (
    <Section bg={bg} center={center} bgImg={bgImg}>
      <Card
        bg={colorAmbient({
          color: gradientBg?.color,
          possition: gradientBg?.possition,
        })}
      >
        <div className="flex flex-col items-center justify-center gap-4">
          <motionText.h1>{title}</motionText.h1>
          {children}
        </div>
      </Card>
    </Section>
  )
}

function SectionText({
  frontMatter: {
    title,
    subTitle,
    titleAlign,
    bg,
    bgImg,
    bgImgOpacity,
    center = false,
  } = [],
  children,
}) {
  return (
    <Section bg={bg} center={false} bgImg={bgImg} bgImgOpacity={bgImgOpacity}>
      <div
        className={clsx("flex max-w-3xl flex-col gap-4", {
          "items-center": center,
        })}
      >
        {subTitle && <motionText.h4>{subTitle}</motionText.h4>}
        {title && <motionText.h1 className={titleAlign}>{title}</motionText.h1>}
        {children}
      </div>
    </Section>
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

export { Section, SectionCard, SectionImage, SectionNavigator, SectionText }