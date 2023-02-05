import { SectionImage } from "@/components/Section"
import TableOfContents from "@/data/ppt/TableOfContents"

export default function Cover() {
  return <SectionImage align="text-center" {...TableOfContents.Cover} />
}
