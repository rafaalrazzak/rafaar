import Balancer from "react-wrap-balancer"

import motion from "@/components/motion/text"
import { Section } from "@/components/Section"
import { ImageCard } from "@/components/ui/card"

export default function Komunikasi() {
  return (
    <Section
      id="komunkasi-web"
      bg="/ppt/background/4-dark@1.5x.png"
      center={false}
    >
      <div className="flex w-full items-center justify-between p-24">
        <ImageCard
          src="/ppt/thum/http.png"
          bg="bg-gradient-to-t from-teal-500 to-yellow-500"
          className="p-12"
          title="fetch(http://api.request)"
        />

        <div className="flex flex-col gap-12 px-24">
          <div className="flex flex-col gap-4">
            <h3 className="text-gray-400">Kajian Teoritis</h3>
            <motion.h1>Bagaimana Cara Berkomunikasi Pada Web?</motion.h1>
          </div>
          <Balancer className="text-xl text-gray-400">
            Ada berbagai macam protokol yang digunakan pada web untuk
            berkomunikasi, diantaranya:
          </Balancer>
          <ul className="ml-6 list-disc space-y-4 text-lg text-gray-400">
            <li>
              HTTP untuk mentransfer halaman web, gambar, dan file lainnya pada
              website.
            </li>
            <li>HTTPS adalah versi aman dari HTTP.</li>
            <li>WS untuk mentransfer data secara interaktif.</li>
            <li>SMTP untuk mentransfer email.</li>
          </ul>
        </div>
      </div>
    </Section>
  )
}
