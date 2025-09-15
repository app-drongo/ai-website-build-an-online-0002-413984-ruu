import Hero from '@/components/sections/home/Hero'
import Productgrid from '@/components/sections/home/Productgrid'
import Features from '@/components/sections/home/Features'
import Cta from '@/components/sections/home/Cta'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Productgrid />
      <Features />
      <Cta />
    </>
  )
}