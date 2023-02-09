import {
  ArrowLeftIcon,
  ArrowRightIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline"
import { useRouter } from "next/router"
import { useCallback, useEffect } from "react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import Link from "../Link"

export default function PrevNext({ prev, next, allPages }) {
  const router = useRouter()

  const handlePrev = useCallback(() => {
    router.push(`/present/page/${prev.slug}`)
  }, [prev, router])

  const handleNext = useCallback(() => {
    router.push(`/present/page/${next.slug}`)
  }, [next, router])

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") {
        if (!prev) return
        handlePrev()
      } else if (e.key === "ArrowRight") {
        if (!next) return
        handleNext()
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [handleNext, handlePrev, next, prev])

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[99] m-4  ">
      <div className="mx-auto flex w-48 justify-center gap-4 rounded-xl border border-white/40 bg-black/50 px-4 py-2 backdrop-blur-sm backdrop-filter">
        <div className="flex gap-2">
          <button
            onClick={handlePrev}
            disabled={!prev}
            className="disabled:opacity-30"
          >
            <ArrowLeftIcon className="h-6 w-6 text-white" />
          </button>
          <button
            onClick={handleNext}
            disabled={!next}
            className="disabled:opacity-30"
          >
            <ArrowRightIcon className="h-6 w-6 text-white" />
          </button>
        </div>

        {allPages && (
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Bars3Icon className="h-6 w-6 text-white" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <div className="grid grid-cols-2 gap-4">
                  {allPages.map((page, index) => (
                    <Link key={index} href={`/present/page/${page}`}>
                      {page}
                    </Link>
                  ))}
                </div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </div>
    </div>
  )
}
