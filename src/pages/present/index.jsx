import {
  ArrowLeftIcon,
  ArrowRightIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline"
import dynamic from "next/dynamic"
import { createElement, useCallback, useEffect, useMemo,useState } from "react"

import { MDXComponents, MDXLayoutRenderer } from "@/components/md/MDXComponents"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { getAllFiles, getFileBySlug } from "@/libs/mdx"

const Cover = dynamic(() => import("./cover"))
const LatarBelakang = dynamic(() => import("./latar-belakang"))
const JaringanKomputer = dynamic(() => import("./jaringan-komputer"))
const Komunikasi = dynamic(() => import("./komunikasi"))
const Manfaat = dynamic(() => import("./manfaat"))
const ProfilPerusahaan = dynamic(() => import("./profil-perusahaan"))
const ProfilPenulis = dynamic(() => import("./profil-penulis"))
const WaktuTempat = dynamic(() => import("./waktu-tempat"))
const Website = dynamic(() => import("./website"))
const TemanKerja = dynamic(() => import("./teman-kerja"))
const WhyPHP = dynamic(() => import("./why-php"))

const Pages = {
  Cover,
  LatarBelakang,
  JaringanKomputer,
  Komunikasi,
  Manfaat,
  ProfilPerusahaan,
  ProfilPenulis,
  WaktuTempat,
  Website,
  TemanKerja,
  WhyPHP,
}

const PageList = [
  "Cover",
  "ProfilPenulis",
  "ProfilPerusahaan",
  "LatarBelakang",
  "Manfaat",
  "WaktuTempat",
  "JaringanKomputer",
  "Website",
  "Komunikasi",
  "TemanKerja",
  "WhyPHP",
]

export async function getStaticProps() {
  const allContents = await getAllFiles("md")
  return {
    props: {
      allContents,
    },
  }
}

export default function Present({allContents}) {
  const [page, setPage] = useState("cover")
  const [currentPage, setCurrentPage] = useState()

  console.log(allContents)

  // const PAGE_POSSITION = useMemo(() => 
  //  [
  //   "cover",
  //   "profil-penulis",
  //   "profil-perusahaan",
  //   "latar-belakang",
  //   "manfaat",
  //   "waktu-tempat",
  //   "jaringan-komputer",
  //   "website",
  //   "komunikasi",
  //   "teman-kerja",
  //   "why-php",
  // ],[])

  // useEffect(() => {
  //   const currentPage = PageList.find((page) => page === page)
  //   setCurrentPage(currentPage)
  // }, [PageList, page])

  // const PageList = useMemo(() => {
  //   return allContents.map((content) => {
  //     return {
  //       ...content,
  //       position: PAGE_POSSITION.indexOf(content.frontMatter.slug),
  //     }
  //   })
  // }, [PAGE_POSSITION, allContents])

  // const handleNext = useCallback(() => {
  //   const nextPage = PageList[0]
  //   if (nextPage) {
  //     setPage(nextPage.frontMatter.slug)
  //   }
  // }, [PageList])

  // const handlePrev = useCallback(() => {
  //   const prevPage = PageList[PageList.length - 1]
  //   if (prevPage) {
  //     setPage(prevPage.frontMatter.slug)
  //   }
  // }, [PageList])

  // const [isFirstPage, setIsFirstPage] = useState(true)
  // const [isLastPage, setIsLastPage] = useState(false)

  // const handlePrev = useCallback(() => {
  //   const prevPageIndex = PageList.indexOf(page) - 1
  //   const prevPage = PageList[prevPageIndex]
  //   setPage(prevPage)
  //   setIsFirstPage(prevPageIndex === 0)
  //   setIsLastPage(prevPageIndex === PageList.length - 1)
  // }, [page])

  // const handleNext = useCallback(() => {
  //   const index = PageList.indexOf(page)
  //   const nextPage = PageList[index + 1]
  //   setPage(nextPage)
  //   setIsFirstPage(index === 0)
  //   setIsLastPage(index === PageList.length - 2)
  // }, [page])

  // const handlePage = useCallback((newPage) => {
  //   setPage(newPage)
  //   const index = PageList.indexOf(newPage)
  //   setIsFirstPage(index === 0)
  //   setIsLastPage(index === PageList.length - 2)
  // }, [])

  // useEffect(() => {
  //   const handleKeyDown = (e) => {
  //     if (e.key === "ArrowLeft") {
  //       if (isFirstPage) return
  //       handlePrev()
  //     } else if (e.key === "ArrowRight") {
  //       if (isLastPage) return
  //       handleNext()
  //     }
  //   }
  //   window.addEventListener("keydown", handleKeyDown)
  //   return () => {
  //     window.removeEventListener("keydown", handleKeyDown)
  //   }
  // }, [handleNext, handlePrev, isFirstPage, isLastPage])

  // useEffect(() => {
  //   const handleWheel = (e) => {
  //     if (e.deltaY > 0) {
  //       if (isLastPage) return
  //       handleNext()
  //     } else {
  //       if (isFirstPage) return
  //       handlePrev()
  //     }
  //   }
  //   window.addEventListener("wheel", handleWheel)
  //   return () => {
  //     window.removeEventListener("wheel", handleWheel)
  //   }
  // }, [handleNext, handlePrev, isFirstPage, isLastPage])

  return (
    <>
      <h1>Hello</h1>

      {/* <div className="fixed bottom-0 left-0 right-0 z-[99] m-4  ">
        <div className="mx-auto flex w-48 justify-center gap-4 rounded-xl border border-white/40 bg-black/50 px-4 py-2 backdrop-blur-sm backdrop-filter">
          <div className="flex gap-2">
            <button
              onClick={handlePrev}
              disabled={isFirstPage}
              className="disabled:opacity-30"
            >
              <ArrowLeftIcon className="h-6 w-6 text-white" />
            </button>
            <button
              onClick={handleNext}
              disabled={isLastPage}
              className="disabled:opacity-30"
            >
              <ArrowRightIcon className="h-6 w-6 text-white" />
            </button>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Bars3Icon className="h-6 w-6 text-white" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <div className="grid grid-cols-2 gap-4">
                  {PageList.map((page, index) => (
                    <button key={index} onClick={() => handlePage(page)}>
                      {page}
                    </button>
                  ))}
                </div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div> */}
    </>
  )
}
