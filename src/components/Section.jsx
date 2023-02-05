import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/24/outline"
import { cva } from "class-variance-authority"
import clsx from "clsx"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import Balancer from "react-wrap-balancer"

import DynamicHeroIcons from "./DynamicHeroIcons"
import Image from "./Image"
import Link from "./Link"
import motionText from "./motion/text"
import { Card, ImageCard } from "./ui/card"

function Section({
  children,
  bg,
  bgImg,
  className: addClassName,
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
        "relative flex h-screen  w-screen snap-start bg-black  text-3xl text-white",
        { "items-center justify-center": center },
        addClassName
      )}
      {...props}
    >
      <div
        className={
          "absolute top-0 left-0 h-full w-full bg-cover bg-center bg-no-repeat opacity-80"
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
    </motion.section>
  )
}

function SectionImage({
  container: { bg, center = false },
  content: {
    title,
    subTitle,
    description,
    image,
    imageBg,
    imageTitle,
    order,
    footer,
    flex,
    cardImage = true,
  },
  align,
  children,
}) {
  return (
    <Section bg={bg} center={center}>
      <div
        className={clsx(
          " w-full items-center justify-between gap-12 p-4 py-12 md:p-24",
          order === "last" && "order-last",
          flex ? "flex" : "flex flex-col"
        )}
      >
        <div className={clsx("flex flex-col md:px-24")}>
          <div className={clsx("flex flex-col gap-4", align)}>
            {subTitle && <h3 className="text-gray-300">{subTitle}</h3>}
            {Array.isArray(title) ? (
              <>
                {title.map((content) => (
                  <motionText.h1 key={content}>{content}</motionText.h1>
                ))}
              </>
            ) : (
              <motionText.h1>{title}</motionText.h1>
            )}
          </div>
          <Balancer className="text-xl text-gray-300">{description}</Balancer>
          {children}
        </div>
        {cardImage ? (
          <Image src={image} width={200} height={200} alt="Image" />
        ) : (
          <ImageCard bg={imageBg} title={imageTitle} src={image} />
        )}
        <div className={clsx("flex flex-col items-center", align)}>
          {Array.isArray(footer) ? (
            <div className="flex flex-col gap-4">
              {footer.map((content) => (
                <motionText.h1 key={content}>{content}</motionText.h1>
              ))}
            </div>
          ) : (
            <motionText.h1>{footer}</motionText.h1>
          )}
        </div>
      </div>
    </Section>
  )
}

function SectionCard({
  container: { bg, bgImg, cardBg, cardBgPoss, center = true },
  content: { title, table, icon },
}) {
  const colorAmbient = cva("", {
    variants: {
      color: {
        redBlue: ["from-red-500", "to-blue-500"],
        redWhite: ["from-red-500", "to-white"],
        yellowGreen: ["from-yellow-500", "to-green-500"],
        tealSky: ["from-teal-500", "to-sky-500"],
      },
      possition: {
        toR: "bg-gradient-to-r",
        toT: "bg-gradient-to-t",
        toB: "bg-gradient-to-b",
      },
    },
    defaultVariants: {
      variant: "redBlue",
      possition: "toR",
    },
  })

  return (
    <Section bg={bg} center={center} bgImg={bgImg}>
      <Card
        bg={colorAmbient({
          color: cardBg,
          possition: cardBgPoss,
        })}
      >
        <motionText.h1>{title}</motionText.h1>

        {icon && (
          <div className="flex flex-col gap-2">
            {icon.map((content) => (
              <div key={content} className="flex gap-2 text-gray-300">
                <DynamicHeroIcons name={content.icon} />
                <span className="text-base">{content.title}</span>
              </div>
            ))}
          </div>
        )}

        {table && (
          <table className="table-auto text-base text-gray-300 ">
            <tbody className="w-64">
              {table.map((tableContent) => (
                <tr key={tableContent}>
                  {tableContent.map((cell) => (
                    <td className="px-4 py-2" key={cell}>
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </Card>
    </Section>
  )
}

function SectionText({
  container: { bg, center = true },
  content: { title, description, list, align },
}) {
  return (
    <Section bg={bg} center={center}>
      <div className={clsx("flex max-w-3xl flex-col gap-4")}>
        <motionText.h1 className={clsx(align)}>{title}</motionText.h1>

        {description && (
          <motionText.p className="text-base text-gray-300">
            <Balancer>{description}</Balancer>
          </motionText.p>
        )}

        {list && (
          <ul className="list-disc space-y-4">
            {list.map((content) => (
              <li key={content} className="text-base text-gray-300">
                {content}
              </li>
            ))}
          </ul>
        )}
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
