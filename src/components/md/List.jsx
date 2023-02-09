import motion from "@/components/motion/text"

export default function List({ data }) {
  return (
    <motion.ul className="list-disc space-y-4 text-base text-gray-300">
      {data.map((content) => (
        <motion.li key={content} className="ml-4 ">
          {content}
        </motion.li>
      ))}
    </motion.ul>
  )
}
