import { useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { SlidersHorizontal } from 'lucide-react'
import { products, categoryLabels } from '@/data/products'
import type { Category } from '@/types'
import ProductCard from '@/components/ProductCard'

type SortOption = 'relevancia' | 'menor-preco' | 'maior-preco' | 'avaliacao'

const sortLabels: Record<SortOption, string> = {
  relevancia: 'Relevância',
  'menor-preco': 'Menor preço',
  'maior-preco': 'Maior preço',
  avaliacao: 'Mais avaliados',
}

export default function CategoryPage() {
  const { category } = useParams<{ category: string }>()
  const cat = (category ?? 'skincare') as Category
  const info = categoryLabels[cat] ?? categoryLabels.skincare

  const [sort, setSort] = useState<SortOption>('relevancia')
  const [onlyPromo, setOnlyPromo] = useState(false)

  const filtered = useMemo(() => {
    let list = products.filter((p) => p.category === cat)
    if (onlyPromo) list = list.filter((p) => p.oldPrice)

    switch (sort) {
      case 'menor-preco':
        return [...list].sort((a, b) => a.price - b.price)
      case 'maior-preco':
        return [...list].sort((a, b) => b.price - a.price)
      case 'avaliacao':
        return [...list].sort((a, b) => b.rating - a.rating)
      default:
        return list
    }
  }, [cat, sort, onlyPromo])

  return (
    <div className="bg-cream">
      <div className="container-petalora py-16">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-xl"
        >
          <span className="eyebrow">Coleção</span>
          <h1 className="mt-3 font-display text-4xl text-graphite sm:text-5xl">
            {info.title}
          </h1>
          <p className="mt-3 text-graphite/65">{info.description}</p>
        </motion.div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-b border-graphite/10 pb-6">
          <p className="text-sm text-graphite/55">
            {filtered.length} {filtered.length === 1 ? 'produto' : 'produtos'}
          </p>

          <div className="flex items-center gap-4">
            <label className="flex items-center gap-2 text-sm text-graphite/70">
              <input
                type="checkbox"
                checked={onlyPromo}
                onChange={(e) => setOnlyPromo(e.target.checked)}
                className="h-4 w-4 rounded border-graphite/30 text-blush-500 focus:ring-blush-400"
              />
              Somente promoções
            </label>

            <div className="flex items-center gap-2">
              <SlidersHorizontal size={15} className="text-graphite/50" />
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value as SortOption)}
                className="bg-transparent text-sm text-graphite focus:outline-none"
              >
                {Object.entries(sortLabels).map(([value, label]) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {filtered.length === 0 ? (
          <p className="py-20 text-center text-graphite/55">
            Nenhum produto encontrado com esse filtro.
          </p>
        ) : (
          <div className="mt-10 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
