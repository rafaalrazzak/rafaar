import motion from "@/components/motion/text"
import { Section } from "@/components/Section"

export default function JaringanKomputer() {
  return (
    <Section
      id="jaringan-komputer"
      bg="/ppt/background/8-dark@1.5x.png"
      center={false}
      className="p-24"
    >
      <div className="flex max-w-2xl flex-col gap-12">
        <div className="flex flex-col gap-4">
          <h3 className="text-gray-400">Kajian Teoritis</h3>
          <motion.h1>Jaringan Komputer</motion.h1>
        </div>
        <p className="text-xl text-gray-400">
          Jaringan komputer adalah kumpulan perangkat yang terhubung untuk
          berbagi sumber daya dan informasi.
        </p>

        <p className="text-xl">Jaringan Komputer dibagi menjadi tiga tipe:</p>
        <ul className="ml-6 list-disc space-y-4 text-lg">
          <li className="text-gray-400">Personal Area Network (PAN)</li>
          <li className="text-gray-400">Local Area Network (LAN)</li>
          <li className="text-gray-400">Wide Area Network (WAN)</li>
        </ul>
      </div>
    </Section>
  )
}
