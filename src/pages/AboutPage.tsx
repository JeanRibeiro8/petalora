import { motion } from 'framer-motion'
import BrandStory from '@/components/BrandStory'
import Testimonials from '@/components/Testimonials'
import Newsletter from '@/components/Newsletter'

export default function AboutPage() {
  return (
    <div className="bg-cream">
      <section className="container-petalora py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl"
        >
          <span className="eyebrow">Nossa História</span>
          <h1 className="mt-3 font-display text-5xl text-graphite">
            Feito por mulheres, <em className="text-blush-500 italic">para mulheres</em>
          </h1>
          <p className="mt-5 text-graphite/65">
            A Petalora começou em 2021 como um pequeno ateliê de cosméticos
            naturais e hoje é a casa de mais de duas mil clientes que
            acreditam, assim como a gente, que autocuidado não é luxo — é
            necessidade.
          </p>
        </motion.div>
      </section>

      <BrandStory />
      <Testimonials />
      <Newsletter />
    </div>
  )
}
