export const base64 = {
  encode: (str) => {
    return Buffer.from(str).toString("base64")
  },
  decode: (str) => {
    return Buffer.from(str, "base64").toString()
  },
}
