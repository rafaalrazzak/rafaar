import { MagnifyingGlassIcon, PlusSmallIcon } from "@heroicons/react/24/outline"
import Image from "next/image"
import { useState } from "react"

import { DefaultLayout } from "@/layout"

const API_URL = "https://api.rafaar.me/api/v1/spotify/"

function Song({ title, artist, songImage, songUri }) {
  const handleAdd = async (e) => {
    e.preventDefault()
    const response = await fetch(
      `${API_URL}add-to-playlist?songUri=${songUri}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((res) => res.json())
    alert(response?.message)
  }

  return (
    <div className="flex flex-1 items-center justify-between gap-2 rounded-md bg-primary-50 p-3 dark:bg-primary-700">
      <div className="flex gap-2">
        <Image
          src={songImage}
          alt={title}
          className="h-12 w-12 rounded-lg"
          width={50}
          height={50}
        />
        <div>
          <h5>{title}</h5>
          <p>{artist}</p>
        </div>
      </div>

      <button
        type={"button"}
        onClick={handleAdd}
        className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500"
      >
        <PlusSmallIcon className="h-6 text-white" />
      </button>
    </div>
  )
}

export default function Playlist() {
  const [songSearch, setSongSearch] = useState("")
  const [results, setResults] = useState([])

  const handleSearch = async (e) => {
    e.preventDefault()
    setResults(
      await fetch(`${API_URL}search?q=${songSearch}`).then((res) => res.json())
    )
  }

  const handleChange = (e) => {
    setSongSearch(e.target.value)
  }

  return (
    <DefaultLayout>
      <div className="my-24 flex flex-col gap-4">
        <h1>Made for Me</h1>
        <iframe
          title="Made for Me"
          src="https://open.spotify.com/embed/playlist/5R5IdlSxHI3a5aTRTSYyUr?&theme=white"
          width="100%"
          height={352}
          frameborder={0}
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          className="rounded-2xl"
        />
      </div>
      <div className="flex flex-col gap-4">
        <h3>Add song to the playlist</h3>
        <form className="flex flex-col gap-2 rounded-xl bg-primary-100 p-6 dark:bg-primary-800">
          <div className="inline-flex items-center gap-2 ">
            <input
              onChange={handleChange}
              type="search"
              placeholder="Search song"
              className="flex flex-1 bg-transparent focus:outline-none"
            />
            <button
              type={"submit"}
              onClick={handleSearch}
              className=" rounded-full bg-green-500 px-3 py-1"
            >
              <MagnifyingGlassIcon className="h-4 text-white" />
            </button>
          </div>

          {results.length > 0 && (
            <div className="my-4 flex flex-col gap-4 lg:flex-row lg:flex-wrap">
              {results.map((result, idx) => (
                <Song key={idx} {...result} />
              ))}
            </div>
          )}
        </form>
      </div>
    </DefaultLayout>
  )
}
