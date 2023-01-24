export const toMinuteSecond = (time) => {
  return time
    .toString()
    .split(".")
    .reduce((a, b) => {
      return parseInt(a * 60) + parseInt(b)
    })
}
