import { useRef } from "react"
export default function AudioPlayer({ playing, src }) {
  const ref = useRef(null)
  if (ref.current) playing ? ref.current.play() : ref.current.pause()
  //updates audio element only on seekTime change (and not on each rerender):
  return <audio src={src} ref={ref} />
}
