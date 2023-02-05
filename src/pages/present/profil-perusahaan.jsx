import motion from "@/components/motion/text"
import { Section } from "@/components/section"
import { Card } from "@/components/ui/card"
export default function ProfilPenulis() {
  return (
    <Section
      id="profil-perusahaan"
      bg="/ppt/background/5-dark@1.5x.png"
      bgImg="/ppt/background/damkar-gdc-bg.png"
      className="relative"
    >
      <Card>
        <motion.h1>Profil Perusahaan</motion.h1>
        <table className="table-auto text-base text-gray-400">
          <tbody>
            <tr>
              <td className="px-4 py-2">Nama Perusahaan</td>
              <td className="px-4 py-2">
                : Dinas Pemadam Kebakaran Kota Depok
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2">Bidang Usaha</td>
              <td className="px-4 py-2">: Pemadam Kebakaran</td>
            </tr>
            <tr>
              <td className="px-4 py-2">Alamat</td>
              <td className="px-4 py-2">
                : Jl. Boulevard Grand Depok City, Depok
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2">Kepala Dinas</td>
              <td className="px-4 py-2">: Drs. R. Gandara Budiana</td>
            </tr>
            <tr>
              <td className="px-4 py-2">Pembimbing</td>
              <td className="px-4 py-2">: Nurahman, Atmaja</td>
            </tr>
          </tbody>
        </table>
      </Card>
    </Section>
  )
}
