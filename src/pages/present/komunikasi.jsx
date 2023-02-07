import { SectionImage } from "@/components/Section"
import { SEO } from "@/components/SEO"
import TableOfContents from "@/data/ppt/TableOfContents"

export default function Komunikasi() {
  return (
    <>
      <SEO title="Komunikasi" />
      <SectionImage {...TableOfContents.Komunikasi} />
    </>
  )
}
