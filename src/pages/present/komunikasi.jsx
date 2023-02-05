import { Section, SectionImage } from "@/components/Section"
import { SEO } from "@/components/SEO"

export default function Komunikasi() {
  return (
    <>
      <SEO title="Komunikasi" />
      <Section
        id="komunkasi-web"
        bg="/ppt/background/4-dark@1.5x.png"
        center={false}
      >
        <SectionImage
          container={{
            bg: "/ppt/background/4-dark@1.5x.png",
            center: false,
          }}
          content={{
            title: "Bagaimana Cara Berkomunikasi Pada Web?",
            subTitle: "Kajian Teoritis",
            description:
              "Ada berbagai macam protokol yang digunakan pada web untuk berkomunikasi, diantaranya:",
            image: "/ppt/thum/http.png",
            imageBg: "bg-gradient-to-t from-teal-500 to-yellow-500",
            imageTitle: "fetch(http://api.request)",
          }}
        >
          <ul className="ml-6 list-disc space-y-4 text-lg text-gray-400">
            <li>
              HTTP untuk mentransfer halaman web, gambar, dan file lainnya pada
              website.
            </li>
            <li>HTTPS adalah versi aman dari HTTP.</li>
            <li>WS untuk mentransfer data secara interaktif.</li>
            <li>SMTP untuk mentransfer email.</li>
          </ul>
        </SectionImage>
      </Section>
    </>
  )
}
