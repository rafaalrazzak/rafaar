import SocialMedia from "@/components/SocialMedia"
import Image from "@/components/Image"
import HeroTitle from "@/components/Hero"
function Hero() {
  return (
    <section>
      <Image
        src="https://res.cloudinary.com/raf-ar/image/upload/v1651370642/blog/avatars/rafa al razzak.jpg"
        width={50}
        height={50}
        alt="Rafa Al Razzak"
        className="h-16 w-16 rounded-full bg-primary-100 object-cover dark:bg-primary-800"
      />

      <HeroTitle />
      <SocialMedia />
    </section>
  )
}

export default Hero
