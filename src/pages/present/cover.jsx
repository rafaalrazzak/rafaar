import { SectionImage } from "@/components/Section"
import { SEO } from "@/components/SEO"
import TableOfContents from "@/data/ppt/TableOfContents"

export default function Cover() {
   <SEO title="Cover" />
  return <SectionImage align="text-center" {...TableOfContents.Cover} />
}
