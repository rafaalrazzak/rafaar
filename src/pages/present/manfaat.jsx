import motion from "@/components/motion/text"
import { Section } from "@/components/section"

export default function Manfaat() {
  return (
    <Section id="manfaat" bg="/ppt/background/6-dark@1.5x.png">
      <div className="flex max-w-2xl flex-col gap-6">
        <motion.h1 className="text-center">Manfaat Prakerin</motion.h1>
        <ul className="list-disc space-y-4">
          <li className="text-base text-gray-400">
            Mengenlkan siswa-siswi pada pekerjaanlapangan di dunia industry dan
            usaha sehingga pada saatnya mereka terjun ke lapangan pekerjaan yang
            sesungguhnya dapat beradaptasi dengan cepat.
          </li>
          <li className="text-base text-gray-400">
            Menambah keterampilan, pengetahuan, gagasan-gagasan seputar dunia
            usaha serta industri yang professional dan handal.
          </li>
          <li className="text-base text-gray-400">
            Mengasah keterampilan yang diberikan sekolah menengah kejuruan (SMK)
          </li>
        </ul>
      </div>
    </Section>
  )
}
