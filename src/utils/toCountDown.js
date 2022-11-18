export const toCountDown = (seconds) => {
  const minutes = Math.floor(seconds / 60)
  const remainingSeconds = seconds % 60
  return (
    <>
      <span style={{ '--value': minutes }}></span>:
      <span style={{ '--value': remainingSeconds }}></span>
    </>
  )
}
