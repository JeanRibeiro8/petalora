import { AnimatePresence, motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { X, Minus, Plus, Trash2, ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'

export default function CartDrawer() {
  const { items, isOpen, closeCart, updateQuantity, removeItem, totalPrice } = useCart()

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="fixed inset-0 z-[60] bg-graphite/40 backdrop-blur-sm"
          />

          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed right-0 top-0 z-[70] flex h-full w-full max-w-md flex-col bg-cream shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-graphite/10 px-6 py-5">
              <h2 className="font-display text-xl text-graphite">Sua Sacola</h2>
              <button
                onClick={closeCart}
                aria-label="Fechar carrinho"
                className="text-graphite/60 hover:text-blush-500"
              >
                <X size={22} />
              </button>
            </div>

            {items.length === 0 ? (
              <div className="flex flex-1 flex-col items-center justify-center gap-3 px-6 text-center">
                <ShoppingBag size={36} className="text-graphite/25" />
                <p className="text-sm text-graphite/55">
                  Sua sacola está vazia. Que tal explorar nossa coleção?
                </p>
                <Link
                  to="/categoria/skincare"
                  onClick={closeCart}
                  className="btn-primary mt-3"
                >
                  Ver Produtos
                </Link>
              </div>
            ) : (
              <>
                <div className="flex-1 overflow-y-auto px-6 py-5">
                  <ul className="space-y-5">
                    <AnimatePresence initial={false}>
                      {items.map((item) => (
                        <motion.li
                          key={item.product.id}
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.25 }}
                          className="flex gap-4 overflow-hidden"
                        >
                          <img
                            src={item.product.image}
                            alt={item.product.name}
                            className="h-20 w-20 shrink-0 rounded-xl object-cover"
                          />
                          <div className="flex flex-1 flex-col justify-between">
                            <div className="flex items-start justify-between gap-2">
                              <div>
                                <p className="text-sm font-medium text-graphite">
                                  {item.product.name}
                                </p>
                                <p className="text-xs text-graphite/50">
                                  {item.product.subtitle}
                                </p>
                              </div>
                              <button
                                onClick={() => removeItem(item.product.id)}
                                aria-label="Remover item"
                                className="text-graphite/40 hover:text-blush-500"
                              >
                                <Trash2 size={15} />
                              </button>
                            </div>

                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3 rounded-full border border-graphite/15 px-2 py-1">
                                <button
                                  onClick={() =>
                                    updateQuantity(item.product.id, item.quantity - 1)
                                  }
                                  aria-label="Diminuir quantidade"
                                  className="text-graphite/60 hover:text-blush-500"
                                >
                                  <Minus size={13} />
                                </button>
                                <span className="w-4 text-center text-xs font-medium">
                                  {item.quantity}
                                </span>
                                <button
                                  onClick={() =>
                                    updateQuantity(item.product.id, item.quantity + 1)
                                  }
                                  aria-label="Aumentar quantidade"
                                  className="text-graphite/60 hover:text-blush-500"
                                >
                                  <Plus size={13} />
                                </button>
                              </div>
                              <span className="text-sm font-semibold text-graphite">
                                R${' '}
                                {(item.product.price * item.quantity)
                                  .toFixed(2)
                                  .replace('.', ',')}
                              </span>
                            </div>
                          </div>
                        </motion.li>
                      ))}
                    </AnimatePresence>
                  </ul>
                </div>

                <div className="border-t border-graphite/10 px-6 py-6">
                  <div className="flex items-center justify-between text-sm text-graphite/65">
                    <span>Subtotal</span>
                    <span className="font-semibold text-graphite">
                      R$ {totalPrice.toFixed(2).replace('.', ',')}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-graphite/45">
                    Frete e impostos calculados no checkout.
                  </p>
                  <button className="btn-primary mt-5 w-full justify-center">
                    Finalizar Compra
                  </button>
                </div>
              </>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  )
}
