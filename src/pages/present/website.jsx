import { SectionImage } from "@/components/Section"
import { SEO } from "@/components/SEO"
export default function Website() {
  return (
    <>
      <SEO title="Website" />
      <SectionImage
        container={{
          bg: "/ppt/background/hero-dark.png",
          center: false,
        }}
        content={{
          title: "Website",
          subTitle: "Kajian Teoritis",
          description:
            "Website adalah halaman web yang tersimpan di server dan bisa diakses melalui internet menggunakan browser.",
          image: "/ppt/thum/website@4x.png",
        }}
      />
    </>
  )
}
