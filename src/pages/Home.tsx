import Hero from '@/components/Hero'
import BenefitsBar from '@/components/BenefitsBar'
import FeaturedProducts from '@/components/FeaturedProducts'
import Categories from '@/components/Categories'
import BrandStory from '@/components/BrandStory'
import PromoBanner from '@/components/PromoBanner'
import Testimonials from '@/components/Testimonials'
import Newsletter from '@/components/Newsletter'

export default function Home() {
  return (
    <>
      <Hero />
      <BenefitsBar />
      <FeaturedProducts />
      <Categories />
      <BrandStory />
      <PromoBanner />
      <Testimonials />
      <Newsletter />
    </>
  )
}
