import Balancer from "react-wrap-balancer"

import motion from "@/components/motion/text"
import { Section } from "@/components/Section"
import { ImageCard } from "@/components/ui/card"
export default function Website() {
  return (
    <Section id="website" bg="/ppt/background/hero-dark.png" center={false}>
      <div className="flex w-full items-center justify-between p-24">
        <div className="flex flex-col gap-12 px-24">
          <div className="flex flex-col gap-4">
            <h3 className="text-gray-400">Kajian Teoritis</h3>
            <motion.h1>Website</motion.h1>
          </div>
          <Balancer className="text-xl text-gray-400">
            Website adalah halaman web yang tersimpan di server dan bisa diakses
            melalui internet menggunakan browser.
          </Balancer>
        </div>
        <ImageCard bg src="/ppt/thum/website@4x.png" />
      </div>
    </Section>
  )
}
