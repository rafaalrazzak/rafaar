import { SectionCard } from "@/components/Section"
import TableOfContents from "@/data/ppt/TableOfContents"

export default function ProfilPenulis() {
  return (
    <SectionCard
      align="items-center"
      container={{
        bg: "/ppt/background/hero-dark.png",
      }}
      {...TableOfContents.ProfilPenulis}
    />
  )
}
