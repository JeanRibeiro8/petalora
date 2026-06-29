import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { products } from '@/data/products'
import ProductCard from './ProductCard'

export default function FeaturedProducts() {
  const featured = products.slice(0, 3)

  return (
    <section className="bg-cream py-24">
      <div className="container-petalora">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-xl text-center"
        >
          <span className="eyebrow">Destaques da Semana</span>
          <h2 className="mt-3 font-display text-4xl text-graphite sm:text-5xl">
            Produtos que fazem{' '}
            <em className="text-blush-500 italic">você florescer</em>
          </h2>
          <p className="mt-4 text-graphite/65">
            Formulados com ingredientes naturais e embalados com carinho —
            porque você merece o melhor.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link to="/categoria/skincare" className="btn-secondary">
            Ver Todos os Produtos
          </Link>
        </div>
      </div>
    </section>
  )
}
