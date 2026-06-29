import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Heart, ShoppingBag, Star } from 'lucide-react'
import type { Product } from '@/types'
import { useCart } from '@/context/CartContext'

const badgeStyles: Record<string, string> = {
  'Mais vendido': 'bg-blush-500 text-white',
  Novo: 'bg-graphite text-cream',
  Exclusivo: 'bg-gold text-white',
}

export default function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart()

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5 }}
      className="group"
    >
      <Link to={`/produto/${product.id}`} className="block">
        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-blush-100">
          {product.badge && (
            <span
              className={`absolute left-3 top-3 z-10 rounded-full px-3 py-1 text-[11px] font-semibold ${badgeStyles[product.badge]}`}
            >
              {product.badge}
            </span>
          )}
          <button
            aria-label="Adicionar aos favoritos"
            onClick={(e) => e.preventDefault()}
            className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-graphite/70 transition-colors hover:text-blush-500"
          >
            <Heart size={16} />
          </button>
          <motion.img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover"
            whileHover={{ scale: 1.06 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>

        <div className="mt-4">
          <div className="flex items-center gap-1 text-xs text-graphite/60">
            <Star size={13} className="fill-gold text-gold" />
            <span className="font-medium text-graphite">{product.rating}</span>
            <span>({product.reviewsCount})</span>
          </div>
          <h3 className="mt-1.5 font-display text-lg text-graphite">{product.name}</h3>
          <p className="text-xs text-graphite/55">{product.subtitle}</p>

          <div className="mt-3 flex items-center justify-between">
            <div className="flex items-baseline gap-2">
              <span className="font-semibold text-graphite">
                R$ {product.price.toFixed(2).replace('.', ',')}
              </span>
              {product.oldPrice && (
                <span className="text-xs text-graphite/40 line-through">
                  R$ {product.oldPrice.toFixed(2).replace('.', ',')}
                </span>
              )}
            </div>
            <button
              aria-label={`Adicionar ${product.name} ao carrinho`}
              onClick={(e) => {
                e.preventDefault()
                addItem(product)
              }}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-graphite text-cream transition-colors hover:bg-blush-500"
            >
              <ShoppingBag size={15} />
            </button>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
