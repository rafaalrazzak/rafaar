import Link from "@/components/Link"
import motion from "@/components/motion/text"
import { Section } from "@/components/Section"
import { Card } from "@/components/ui/card"
import { ToS } from "@/data/ppt/TableOfContents"

export default function TableOfContent() {
  return (
    <Section id="table-content">
      <Card bg>
        <motion.h1>Table Of Contents</motion.h1>
        <div className="flex w-full flex-col gap-4 dark:text-gray-700">
          {ToS.map((section) => (
            <div key={section.page} className="flex">
              <Link
                href={`#${section.page}`}
                className="flex items-center gap-2"
              >
                <p className="text-base text-white">{section.title}</p>
              </Link>
            </div>
          ))}
        </div>
      </Card>
    </Section>
  )
}
