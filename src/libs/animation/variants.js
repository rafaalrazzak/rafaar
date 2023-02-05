const hidden = {
  y: 15,
  opacity: 0,
}

const visible = {
  y: 0,
  opacity: 1,
}

const variants = () => ({
  hidden,
  visible: {
    ...visible,
    transition: {
      type: "tween",
      duration: 0.15,
    },
  },
})

export const FADE_IN_ANIMATION_SETTINGS = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.2 },
}

export const FADE_DOWN_ANIMATION_VARIANTS = {
  hidden: { opacity: 0, y: -10 },
  show: { opacity: 1, y: 0, transition: { type: "spring" } },
}

export const FADE_UP_ANIMATION_VARIANTS = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { type: "spring" } },
}

export const withExit = (func) => {
  const v = func()

  return {
    ...v,
    exit: {
      y: 20,
      opacity: 0,
      transition: {
        type: "tween",
        duration: 0.25,
      },
    },
  }
}

export default variants
