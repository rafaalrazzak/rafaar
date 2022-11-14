import Image from "@/components/Image"
import ProjectImage from "@/components/ProjectImage"

function Project() {
  return (
    <section className="flex flex-col items-center justify-center">
      <Image
        alt=""
        src="https://images.unsplash.com/photo-1665909235925-4ecc57b25249?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1895&q=80"
        width="200"
        height="300"
      />
      <span className="dark:text-priary-300 my-12 text-sm text-primary-600">
        Photo By Unsplash
      </span>
    </section>
  )
}

export default Project
