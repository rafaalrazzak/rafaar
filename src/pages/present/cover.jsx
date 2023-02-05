import Image from "@/components/Image"
import motion from "@/components/motion/text"
import { Section } from "@/components/Section"

export default function Cover() {
  return (
    <Section id="cover" bg="/ppt/background/4-dark@1.5x.png">
      <div className={"flex flex-col items-center justify-center gap-10"}>
        <div className="flex flex-col items-center">
          <motion.h1>Laporan Praktek Kerja Industri</motion.h1>
          <motion.h1>Dinas Pemadam Kebakaran Kota Depok</motion.h1>
        </div>
        <Image
          src={"/ppt/logo-alas.png"}
          width={200}
          height={200}
          alt="Logo"
          priority
        />
        <div className="flex flex-col items-center">
          <motion.h1>SMK AL-ASIYAH</motion.h1>
          <motion.h1>CIBINONG</motion.h1>
        </div>
      </div>
    </Section>
  )
}
