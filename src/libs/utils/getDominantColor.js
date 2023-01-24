import rgbToHex from "@/libs/utils/rgbToHex"

export default function getDominantColor(event) {
  const img = event.target
  const canvas = document.createElement("canvas")
  const ctx = canvas.getContext("2d")
  canvas.width = img.width
  canvas.height = img.height
  ctx.drawImage(img, 0, 0)
  const imageData = ctx.getImageData(0, 0, img.width, img.height).data
  // Get the dominant color by averaging the color values
  let r = 0
  let g = 0
  let b = 0
  for (let i = 0; i < imageData.length; i += 4) {
    r += imageData[i]
    g += imageData[i + 1]
    b += imageData[i + 2]
  }
  r /= imageData.length / 4
  g /= imageData.length / 4
  b /= imageData.length / 4
  return `#${rgbToHex(r.toFixed(), g.toFixed(), b.toFixed())}`
}
