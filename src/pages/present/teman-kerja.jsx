import { SectionImage } from "@/components/Section"
import { SEO } from "@/components/SEO"
import TableOfContents from "@/data/ppt/TableOfContents"
export default function TemanKerja() {
  return (
    <>
      <SEO title="Teman Kerja" />
      <SectionImage {...TableOfContents.TemanKerja} />
    </>
  )
}
