import { SectionText } from "@/components/Section"
import { SEO } from "@/components/SEO"
import TableOfContents from "@/data/ppt/TableOfContents"
export default function WhyPHP() {
  return (
    <>
      <SEO title="Why PHP" />
      <SectionText {...TableOfContents.WhyPHP} />
    </>
  )
}
