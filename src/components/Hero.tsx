import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const stats = [
  { value: '2.4k+', label: 'Clientes Felizes' },
  { value: '100%', label: 'Natural & Clean' },
  { value: '4.9★', label: 'Avaliação Média' },
]

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-blush-50">
      <div className="container-petalora relative grid items-center gap-12 py-20 lg:grid-cols-2 lg:py-28">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="relative z-10"
        >
          <motion.span
            variants={item}
            className="eyebrow mb-5 inline-block"
          >
            Nova Coleção Primavera
          </motion.span>

          <motion.h1
            variants={item}
            className="font-display text-5xl leading-[1.05] text-graphite sm:text-6xl lg:text-7xl"
          >
            Peta<em className="text-blush-500 italic">lora</em>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-md text-base text-graphite/70 sm:text-lg"
          >
            Beleza que floresce. Lar que acolhe. Produtos cuidadosamente
            selecionados para nutrir sua pele e transformar seu lar num
            refúgio de serenidade.
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap gap-4">
            <Link to="/categoria/skincare" className="btn-primary">
              Explorar a Coleção
              <ArrowRight size={16} />
            </Link>
            <Link to="/sobre" className="btn-secondary">
              Sobre Nós
            </Link>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-12 flex gap-10 border-t border-graphite/10 pt-8"
          >
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-2xl text-graphite">{stat.value}</p>
                <p className="mt-1 text-xs text-graphite/60">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative aspect-[4/5] w-full overflow-hidden rounded-organic"
        >
          <img
            src="/hands.jpg"
            alt="Mãos cuidando da pele com produto Petalora"
            className="h-full w-full object-cover"
          />
        </motion.div>
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-blush-200/50 blur-3xl"
      />
    </section>
  )
}
