import { useState } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Star, Minus, Plus, ShoppingBag, Heart, Truck, RefreshCw } from 'lucide-react'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'
import ProductCard from '@/components/ProductCard'

export default function ProductPage() {
  const { id } = useParams<{ id: string }>()
  const product = products.find((p) => p.id === id)
  const { addItem } = useCart()
  const [quantity, setQuantity] = useState(1)
  const [added, setAdded] = useState(false)

  if (!product) {
    return <Navigate to="/" replace />
  }

  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3)

  function handleAddToCart() {
    for (let i = 0; i < quantity; i++) addItem(product)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <div className="bg-cream">
      <div className="container-petalora py-12">
        <nav className="text-xs text-graphite/50">
          <Link to="/" className="hover:text-blush-500">
            Início
          </Link>{' '}
          /{' '}
          <Link to={`/categoria/${product.category}`} className="hover:text-blush-500">
            {product.category === 'bem-estar' ? 'Bem-Estar' : product.category}
          </Link>{' '}
          / <span className="text-graphite/70">{product.name}</span>
        </nav>

        <div className="mt-8 grid gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="aspect-square overflow-hidden rounded-organic bg-blush-100"
          >
            <img
              src={product.image}
              alt={product.name}
              className="h-full w-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {product.badge && (
              <span className="eyebrow">{product.badge}</span>
            )}
            <h1 className="mt-3 font-display text-4xl text-graphite">
              {product.name}
            </h1>
            <p className="mt-1 text-sm text-graphite/55">{product.subtitle}</p>

            <div className="mt-3 flex items-center gap-1.5 text-sm">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={15}
                    className={
                      i < Math.round(product.rating)
                        ? 'fill-gold text-gold'
                        : 'text-graphite/20'
                    }
                  />
                ))}
              </div>
              <span className="font-medium text-graphite">{product.rating}</span>
              <span className="text-graphite/50">
                ({product.reviewsCount} avaliações)
              </span>
            </div>

            <div className="mt-6 flex items-baseline gap-3">
              <span className="font-display text-3xl text-graphite">
                R$ {product.price.toFixed(2).replace('.', ',')}
              </span>
              {product.oldPrice && (
                <span className="text-graphite/40 line-through">
                  R$ {product.oldPrice.toFixed(2).replace('.', ',')}
                </span>
              )}
            </div>

            <p className="mt-6 leading-relaxed text-graphite/70">
              {product.description}
            </p>

            {product.ingredients && (
              <div className="mt-6">
                <h3 className="text-sm font-semibold text-graphite">
                  Principais ativos
                </h3>
                <ul className="mt-2 flex flex-wrap gap-2">
                  {product.ingredients.map((ing) => (
                    <li
                      key={ing}
                      className="rounded-full bg-blush-100 px-3 py-1 text-xs text-blush-600"
                    >
                      {ing}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-4 rounded-full border border-graphite/15 px-3 py-2.5">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  aria-label="Diminuir quantidade"
                  className="text-graphite/60 hover:text-blush-500"
                >
                  <Minus size={15} />
                </button>
                <span className="w-5 text-center text-sm font-medium">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  aria-label="Aumentar quantidade"
                  className="text-graphite/60 hover:text-blush-500"
                >
                  <Plus size={15} />
                </button>
              </div>

              <button onClick={handleAddToCart} className="btn-primary flex-1">
                <ShoppingBag size={16} />
                {added ? 'Adicionado!' : 'Adicionar à Sacola'}
              </button>

              <button
                aria-label="Adicionar aos favoritos"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-graphite/15 text-graphite/60 hover:text-blush-500"
              >
                <Heart size={18} />
              </button>
            </div>

            <div className="mt-8 flex flex-col gap-3 border-t border-graphite/10 pt-6 text-sm text-graphite/65">
              <div className="flex items-center gap-2">
                <Truck size={16} className="text-blush-500" />
                Frete grátis para compras acima de R$ 199
              </div>
              <div className="flex items-center gap-2">
                <RefreshCw size={16} className="text-blush-500" />
                Troca grátis em até 30 dias
              </div>
            </div>
          </motion.div>
        </div>

        {related.length > 0 && (
          <section className="mt-24">
            <h2 className="font-display text-2xl text-graphite">
              Você também pode gostar
            </h2>
            <div className="mt-8 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  )
}
