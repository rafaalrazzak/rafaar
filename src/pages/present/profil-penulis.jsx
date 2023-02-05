import { Section } from "@/components/section"
import { Card } from "@/components/ui/card"
import motion from "@/components/motion/text"
export default function ProfilPenulis() {
  return (
    <Section id="profil-penulis" bg="/ppt/background/hero-dark.png">
      <Card>
        <motion.h1>Profil Penulis</motion.h1>
        <table className="table-auto text-base text-gray-400">
          <tbody>
            <tr>
              <td className="px-4 py-2">Nama</td>
              <td className="px-4 py-2">: Rafa Al Razzak</td>
            </tr>
            <tr>
              <td className="px-4 py-2">NIS</td>
              <td className="px-4 py-2">: 0057680592</td>
            </tr>
            <tr>
              <td className="px-4 py-2">Kelas</td>
              <td className="px-4 py-2">: XI TKJ 3</td>
            </tr>
            <tr>
              <td className="px-4 py-2">Alamat</td>
              <td className="px-4 py-2">
                : Jl. Kerkop, Kp. Kebon Kopi, RT. 02 / RW.10, Kel. Puspanegara,
                Kec. Citeureup, Kab. Bogor
              </td>
            </tr>
          </tbody>
        </table>
      </Card>
    </Section>
  )
}
