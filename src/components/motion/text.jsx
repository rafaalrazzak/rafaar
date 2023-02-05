import { AnimatePresence, motion } from "framer-motion"

const variants = {
  hidden: {
    opacity: 0,
    y: 120,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  visible: {
    opacity: 1,
    y: 0,
  },
}

function h1({ children, ...props }) {
  return (
    <AnimatePresence>
      <motion.h1
        initial="hidden"
        animate="visible"
        variants={variants}
        {...props}
      >
        {children}
      </motion.h1>
    </AnimatePresence>
  )
}

function p({ children, ...props }) {
  return (
    <motion.p initial="hidden" animate="visible" variants={variants} {...props}>
      {children}
    </motion.p>
  )
}

export default Object.assign({ h1, p })
