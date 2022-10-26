import { useState, useEffect } from "react"
import clsx from "clsx"
import { toCountDown } from "@/utils/toCountDown"
import { useKeyboard } from "@/hooks/useKeyboard"

export async function getServerSideProps(req) {
  const query = req.query
  return {
    props: {
      time: query.time || 300,
    },
  }
}

function Timer({ time, m }) {
  const second = time
    .toString()
    .split(".")
    .reduce((a, b) => {
      return parseInt(a * 60) + parseInt(b)
    })
  const [counter, setCounter] = useState(second)
  const [isTimeout, setIsTimeOut] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const onKeyPress = (event) => {
    switch (event.key) {
      case "r":
        setCounter(second)
        setIsTimeOut(false)
        break
      case "s":
        setCounter(0)
        break
      case "p":
        if (counter !== 0) {
          setIsPaused((prevPause) => !prevPause)
        }
        break
      case "ArrowUp":
        setCounter((prevCount) => prevCount + 5)
        break
      case "ArrowDown":
        if (counter !== 0) {
          setCounter((prevCount) => prevCount - 5)
        }
        break

      default:
        break
    }
  }

  useEffect(() => {
    if (!isPaused) {
      const timer = setTimeout(() => {
        setCounter((prevCounter) => {
          if (prevCounter === 0) {
            return prevCounter
          }
          return prevCounter - 1
        })
      }, 900)
      if (counter <= 10) {
        setIsTimeOut(true)
      }
      return () => clearTimeout(timer)
    }
  }, [counter, isPaused])

  useKeyboard(["r", "t", "s", "p", "ArrowUp", "ArrowDown"], onKeyPress)
  return (
    <div className="relative overflow-hidden text-black">
      <div
        className={clsx(
          " flex h-screen w-full items-center justify-center bg-white transition-all duration-300 ease-in-out ",
          {
            "animate-pulse bg-red-500 ": isTimeout && counter > 0,
          },
        )}
      >
        <h1
          className={clsx(
            "countdown text-[150px] font-bold ",
            isTimeout && counter > 0 && "animate-scale",
            counter == 0 ? "text-4xl lg:text-[300px]" : "lg:text-[500px]",
            isPaused && "animate-pulse",
          )}
        >
          {counter ? toCountDown(counter) : "Time's Up"}
        </h1>
      </div>
    </div>
  )
}

export default Timer
