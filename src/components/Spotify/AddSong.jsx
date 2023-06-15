import { PlusSmallIcon } from "@heroicons/react/24/outline"
import Image from "next/image"

export default function AddSong({ title, artist, songImage, songUri }) {
  const handleAdd = async (e) => {
    e.preventDefault()
    await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/spotify/add-to-playlist?songUri=${songUri}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => alert(data.message))
  }

  return (
    <div className="flex w-full items-center justify-between gap-2 rounded-md bg-primary-50 p-3 dark:bg-primary-700">
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
