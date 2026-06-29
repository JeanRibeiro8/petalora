import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function PromoBanner() {
  return (
    <section className="container-petalora py-16">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blush-500 via-blush-400 to-graphite/80 px-8 py-14 sm:px-16"
      >
        <span className="eyebrow text-blush-100">Edição Limitada</span>
        <h2 className="mt-3 max-w-md font-display text-3xl text-white sm:text-4xl">
          Ritual Completo <em className="italic">de Outono</em>
        </h2>
        <p className="mt-4 max-w-sm text-sm text-white/80">
          Uma coleção curada para nutrir sua pele nas estações mais frias —
          com calor, leveza e muito cuidado.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Link
            to="/categoria/skincare"
            className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-graphite transition-opacity hover:opacity-90"
          >
            Ver Coleção <ArrowRight size={16} />
          </Link>
          <Link to="/sobre" className="text-sm font-semibold text-white underline-offset-4 hover:underline">
            Saiba Mais
          </Link>
        </div>

        <div className="absolute bottom-8 right-8 hidden rounded-2xl bg-white/15 px-6 py-4 backdrop-blur-sm sm:block">
          <p className="text-[10px] uppercase tracking-wider text-white/70">A partir de</p>
          <p className="font-display text-2xl text-white">R$ 149</p>
        </div>
      </motion.div>
    </section>
  )
}
