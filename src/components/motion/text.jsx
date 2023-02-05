import { motion } from "framer-motion"

import { FADE_DOWN_ANIMATION_VARIANTS } from "@/libs/animation/variants"

function h1({ children, ...props }) {
  return (
    <motion.h1
      className="font-display bg-gradient-to-br from-white to-stone-500 bg-clip-text  tracking-[-0.02em] text-transparent drop-shadow-sm "
      variants={FADE_DOWN_ANIMATION_VARIANTS}
      {...props}
    >
      {children}
    </motion.h1>
  )
}

function p({ children, ...props }) {
  return (
    <motion.p variants={FADE_DOWN_ANIMATION_VARIANTS} {...props}>
      {children}
    </motion.p>
  )
}

export default Object.assign({ h1, p })
