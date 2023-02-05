import { Section } from "@/components/section"
import motion from "@/components/motion/text"
export default function LatarBelakang() {
  return (
    <Section id="latar-belakang" bg="/ppt/background/5-dark@1.5x.png">
      <div className="flex max-w-2xl flex-col gap-6">
        <motion.h1 className="text-center">Latar Belakang Prakerin</motion.h1>
        <p className="text-base text-gray-400">
          Praktik Kerja Lapangan (PKL) merupakan program penyelenggara
          pendidikan yang di rancang untuk memudahkan para siswa mencapai
          keterampilan masing-masing. Dalam Pelaksanaan PKL, pemberian
          pengalaman belajar sebagian diberikan oleh dunia usaha
        </p>
      </div>
    </Section>
  )
}
