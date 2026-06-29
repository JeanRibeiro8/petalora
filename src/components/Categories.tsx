import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { categoryLabels, products } from '@/data/products'
import type { Category } from '@/types'

const categories: Category[] = ['skincare', 'lar', 'bem-estar']

export default function Categories() {
  return (
    <section className="bg-blush-50 py-24">
      <div className="container-petalora">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="eyebrow">Explore</span>
            <h2 className="mt-3 font-display text-4xl text-graphite sm:text-5xl">
              Nossas <em className="text-blush-500 italic">Categorias</em>
            </h2>
          </div>
          <p className="max-w-sm text-sm text-graphite/65">
            Cada linha foi pensada para fazer parte do seu dia a dia com
            leveza e sofisticação.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {categories.map((cat, i) => {
            const info = categoryLabels[cat]
            const count = products.filter((p) => p.category === cat).length
            return (
              <motion.div
                key={cat}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group overflow-hidden rounded-2xl bg-white"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <span className="absolute right-3 top-3 z-10 rounded-full bg-white/90 px-3 py-1 text-[11px] font-medium text-graphite">
                    {count} produtos
                  </span>
                  <motion.img
                    src={info.image}
                    alt={info.title}
                    className="h-full w-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
                <div className="p-6">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-blush-500">
                    {cat === 'bem-estar' ? 'Bem-Estar' : cat}
                  </span>
                  <h3 className="mt-2 font-display text-xl text-graphite">
                    {info.title}
                  </h3>
                  <p className="mt-2 text-sm text-graphite/60">{info.description}</p>
                  <Link
                    to={`/categoria/${cat}`}
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-graphite transition-colors hover:text-blush-500"
                  >
                    Explorar <ArrowRight size={14} />
                  </Link>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
