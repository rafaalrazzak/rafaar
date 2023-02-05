import {
  Bars3Icon,
  CalendarDaysIcon,
  ClockIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline"
import { TypeAnimation } from "react-type-animation"
import Balancer from "react-wrap-balancer"

import Image from "@/components/Image"
import Link from "@/components/Link"
import Parallax from "@/components/motion/parallax"
import motion from "@/components/motion/text"
import { Section, SectionNavigator } from "@/components/Section"
import { SEO } from "@/components/SEO"
import { Card, ImageCard } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ToS } from "@/data/ppt/TableOfContents"

export default function PowerPoint() {
  return (
    <>
      <SEO title="Presentasi" />
      <div
        className={
          "snap h-screen w-screen snap-y snap-mandatory overflow-scroll text-white "
        }
      >
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

        <Section id="table-content">
          <Card bg>
            <motion.h1>Table Of Contents</motion.h1>
            <div className="flex w-full flex-col gap-4 dark:text-gray-700">
              {ToS.map((section) => (
                <div key={section.page} className="flex">
                  <Link
                    href={`#${section.page}`}
                    className="flex items-center gap-2"
                  >
                    <p className="text-base text-white">{section.title}</p>
                  </Link>
                </div>
              ))}
            </div>
          </Card>
        </Section>

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
                    : Jl. Kerkop, Kp. Kebon Kopi, RT. 02 / RW.10, Kel.
                    Puspanegara, Kec. Citeureup, Kab. Bogor
                  </td>
                </tr>
              </tbody>
            </table>
          </Card>
        </Section>

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

        <Section id="latar-belakang" bg="/ppt/background/5-dark@1.5x.png">
          <div className="flex max-w-2xl flex-col gap-6">
            <motion.h1 className="text-center">
              Latar Belakang Prakerin
            </motion.h1>
            <p className="text-base text-gray-400">
              Praktik Kerja Lapangan (PKL) merupakan program penyelenggara
              pendidikan yang di rancang untuk memudahkan para siswa mencapai
              keterampilan masing-masing. Dalam Pelaksanaan PKL, pemberian
              pengalaman belajar sebagian diberikan oleh dunia usaha
            </p>
          </div>
        </Section>

        <Section id="manfaat" bg="/ppt/background/6-dark@1.5x.png">
          <div className="flex max-w-2xl flex-col gap-6">
            <motion.h1 className="text-center">Manfaat Prakerin</motion.h1>
            <ul className="list-disc space-y-4">
              <li className="text-base text-gray-400">
                Mengenlkan siswa-siswi pada pekerjaanlapangan di dunia industry
                dan usaha sehingga pada saatnya mereka terjun ke lapangan
                pekerjaan yang sesungguhnya dapat beradaptasi dengan cepat.
              </li>
              <li className="text-base text-gray-400">
                Menambah keterampilan, pengetahuan, gagasan-gagasan seputar
                dunia usaha serta industri yang professional dan handal.
              </li>
              <li className="text-base text-gray-400">
                Mengasah keterampilan yang diberikan sekolah menengah kejuruan
                (SMK)
              </li>
            </ul>
          </div>
        </Section>

        <Section id="waktu-tempat" bg="/ppt/background/7-dark@1.5x.png">
          <Card bg>
            <motion.h1 className="text-center">
              Waktu dan Tempat Prakerin
            </motion.h1>
            <ul className="space-y-4">
              <li className="text-base text-gray-400">
                <CalendarDaysIcon className="mr-2 inline-block h-5 w-5 text-gray-400" />
                13 Desember 2022 - 13 Januari 2023
              </li>
              <li className="text-base text-gray-400">
                <ClockIcon className="mr-2 inline-block h-5 w-5 text-gray-400" />
                07.30 - 14.30
              </li>
              <li className="text-base text-gray-400">
                <MapPinIcon className="mr-2 inline-block h-5 w-5 text-gray-400" />
                Dinas Pemadam Kebakaran Kota Depok
              </li>
            </ul>
          </Card>
        </Section>

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

            <p className="text-xl">
              Jaringan Komputer dibagi menjadi tiga tipe:
            </p>
            <ul className="ml-6 list-disc space-y-4 text-lg">
              <li className="text-gray-400">Personal Area Network (PAN)</li>
              <li className="text-gray-400">Local Area Network (LAN)</li>
              <li className="text-gray-400">Wide Area Network (WAN)</li>
            </ul>
          </div>
        </Section>

        <Section id="website" bg="/ppt/background/hero-dark.png" center={false}>
          <div className="flex w-full items-center justify-between p-24">
            <div className="flex flex-col gap-12 px-24">
              <div className="flex flex-col gap-4">
                <h3 className="text-gray-400">Kajian Teoritis</h3>
                <motion.h1>Website</motion.h1>
              </div>
              <Balancer className="text-xl text-gray-400">
                Website adalah halaman web yang tersimpan di server dan bisa
                diakses melalui internet menggunakan browser.
              </Balancer>
            </div>
            <ImageCard bg src="/ppt/thum/website@4x.png" />
          </div>
        </Section>

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
                  HTTP untuk mentransfer halaman web, gambar, dan file lainnya
                  pada website.
                </li>
                <li>HTTPS adalah versi aman dari HTTP.</li>
                <li>WS untuk mentransfer data secara interaktif.</li>
                <li>SMTP untuk mentransfer email.</li>
              </ul>
            </div>
          </div>
        </Section>

        <Section>
          {/*  MOTION H1 OFFSET Y 40*/}
          <Parallax>
            <motion.h1>Hello World</motion.h1>
            <motion.p>
              Hello World adalah program pertama yang biasa dipelajari oleh
              programmer pemula. Program ini biasanya ditulis pada bahasa
              pemrograman yang baru dipelajari.
            </motion.p>
          </Parallax>
        </Section>

        <div className="fixed bottom-0 left-0 right-0 m-4  ">
          <div className="mx-auto flex w-32 justify-center gap-4 rounded-xl border border-white/40 bg-black/50 px-4 py-2 backdrop-blur-sm backdrop-filter">
            <SectionNavigator />
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Bars3Icon className="h-6 w-6 text-white" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <div className="flex flex-col gap-4">
                    {ToS.map((section) => (
                      <div key={section.page} className="flex">
                        <Link
                          href={`#${section.page}`}
                          className="flex items-center gap-2"
                        >
                          <p className="text-xs text-white">{section.title}</p>
                        </Link>
                      </div>
                    ))}
                  </div>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </>
  )
}
