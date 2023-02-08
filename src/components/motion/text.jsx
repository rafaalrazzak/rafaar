import { motion } from "framer-motion"
import Balancer from "react-wrap-balancer"

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

function h2({ children, ...props }) {
  return (
    <motion.h2
      className="font-display bg-gradient-to-br from-white to-stone-500 bg-clip-text  tracking-[-0.02em] text-transparent drop-shadow-sm "
      variants={FADE_DOWN_ANIMATION_VARIANTS}
      {...props}
    >
      {children}
    </motion.h2>
  )

}

function h3({ children, ...props }) {
  return (
    <motion.h3
      className="font-display bg-gradient-to-br from-white to-stone-500 bg-clip-text  tracking-[-0.02em] text-transparent drop-shadow-sm "
      variants={FADE_DOWN_ANIMATION_VARIANTS}
      {...props}
    >
      {children}
    </motion.h3>
  )
}

function h4({ children, ...props }) {
  return (
    <motion.h4
      className="font-display bg-gradient-to-br from-white to-stone-500 bg-clip-text  tracking-[-0.02em] text-transparent drop-shadow-sm "
      variants={FADE_DOWN_ANIMATION_VARIANTS}
      {...props}
    >
      {children}
    </motion.h4>
  )
}

function h5({ children, ...props }) {
  return (
    <motion.h5
      className="font-display bg-gradient-to-br from-white to-stone-500 bg-clip-text  tracking-[-0.02em] text-transparent drop-shadow-sm "
      variants={FADE_DOWN_ANIMATION_VARIANTS}
      {...props}
    >
      {children}
    </motion.h5>
  )
}

function p({ children, ...props }) {
  return (
    <motion.p variants={FADE_DOWN_ANIMATION_VARIANTS} className="text-base text-gray-300" {...props}>
      <Balancer>{children}</Balancer>
    </motion.p>
  )
}

function ol({
  children,
  ...props
}){
  return (
    <motion.ol variants={FADE_DOWN_ANIMATION_VARIANTS} {...props} className="list-disc space-y-4">
      {children}
    </motion.ol>
  )
}

function ul({
  children,
  ...props
}){
  return (
    <motion.ul variants={FADE_DOWN_ANIMATION_VARIANTS} {...props} className="list-disc space-y-4">
      {children}
    </motion.ul>
  )
}

function li({
  children,
  ...props
}) {
  return (
    <motion.li variants={FADE_DOWN_ANIMATION_VARIANTS} {...props} className="text-base text-gray-300">
      {children}
    </motion.li>
  )
}

function tb({ children, ...props }) {
  return (
    <motion.table variants={FADE_DOWN_ANIMATION_VARIANTS} {...props}>
      {children}
    </motion.table>
  )
}

function tr({ children, ...props }) {
  return (
    <motion.tr variants={FADE_DOWN_ANIMATION_VARIANTS} {...props}>
      {children}
    </motion.tr>
  )
}

function th({ children, ...props }) {
  return (
    <motion.th variants={FADE_DOWN_ANIMATION_VARIANTS} {...props}>
      {children}
    </motion.th>
  )
}

function td({ children, ...props }) {
  return (
    <motion.td variants={FADE_DOWN_ANIMATION_VARIANTS} {...props}>
      {children}
    </motion.td>
  )
}



export default Object.assign({ h1, h2,  h3, h4, h5, p, li, ol, ul, th, td, tr, tb })
