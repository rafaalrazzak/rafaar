import { SectionCard } from "@/components/Section"
import TableOfContents from "@/data/ppt/TableOfContents"

export default function ProfilPerusahaan() {
  console.log(TableOfContents.ProfilPerusahaan)
  return (
    <SectionCard align="items-center" {...TableOfContents.ProfilPerusahaan} />
  )
}
