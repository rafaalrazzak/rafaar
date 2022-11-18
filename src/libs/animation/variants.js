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
      type: 'tween',
      duration: 0.15,
    },
  },
})

export const withExit = (func) => {
  const v = func()

  return {
    ...v,
    exit: {
      y: 20,
      opacity: 0,
      transition: {
        type: 'tween',
        duration: 0.25,
      },
    },
  }
}

export default variants
