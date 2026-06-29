import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Search, Heart, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'

const navLinks = [
  { label: 'Beleza', to: '/categoria/skincare' },
  { label: 'Lar & Vida', to: '/categoria/lar' },
  { label: 'Bem-Estar', to: '/categoria/bem-estar' },
  { label: 'Sobre Nós', to: '/sobre' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { totalItems, openCart } = useCart()

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 8)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-colors duration-300 ${
        scrolled ? 'bg-cream/90 shadow-sm backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="container-petalora flex h-20 items-center justify-between">
        <Link to="/" className="font-display text-2xl text-graphite">
          Peta<em className="text-blush-500 not-italic font-medium italic">lora</em>
        </Link>

        <nav className="hidden items-center gap-9 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-sm font-medium text-graphite/80 transition-colors hover:text-blush-500"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button
            aria-label="Buscar"
            className="hidden text-graphite/70 transition-colors hover:text-blush-500 sm:block"
          >
            <Search size={20} />
          </button>
          <button
            aria-label="Favoritos"
            className="hidden text-graphite/70 transition-colors hover:text-blush-500 sm:block"
          >
            <Heart size={20} />
          </button>
          <button
            aria-label="Abrir carrinho"
            onClick={openCart}
            className="relative text-graphite/70 transition-colors hover:text-blush-500"
          >
            <ShoppingBag size={20} />
            {totalItems > 0 && (
              <motion.span
                key={totalItems}
                initial={{ scale: 0.6 }}
                animate={{ scale: 1 }}
                className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-blush-500 text-[10px] font-semibold text-white"
              >
                {totalItems}
              </motion.span>
            )}
          </button>
          <button
            className="text-graphite/70 lg:hidden"
            aria-label="Abrir menu"
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
          <button className="hidden rounded-full bg-graphite px-5 py-2.5 text-sm font-medium text-cream transition-opacity hover:opacity-90 lg:block">
            Entrar
          </button>
        </div>
      </div>

      {mobileOpen && (
        <motion.nav
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="overflow-hidden border-t border-graphite/10 bg-cream lg:hidden"
        >
          <div className="container-petalora flex flex-col gap-4 py-6">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className="text-base font-medium text-graphite"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </motion.nav>
      )}
    </header>
  )
}
