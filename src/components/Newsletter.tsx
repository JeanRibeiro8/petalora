import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Check } from 'lucide-react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (!email) return
    setSubmitted(true)
  }

  return (
    <section className="relative overflow-hidden bg-graphite py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blush-500/20 via-transparent to-gold/10"
      />
      <div className="container-petalora relative text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="eyebrow text-blush-300">Clube Petalora</span>
          <h2 className="mt-3 font-display text-4xl text-cream sm:text-5xl">
            Seja a primeira <em className="italic text-blush-300">a saber</em>
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm text-cream/65">
            Receba novidades, rituais de beleza exclusivos, lançamentos e 10%
            off na sua primeira compra.
          </p>

          {submitted ? (
            <div className="mx-auto mt-8 flex max-w-md items-center justify-center gap-2 rounded-full bg-white/10 px-6 py-4 text-sm text-cream">
              <Check size={18} className="text-blush-300" />
              Cadastro confirmado — seu cupom chega no e-mail em instantes.
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="seu@email.com"
                className="flex-1 rounded-full border border-white/15 bg-white/5 px-5 py-3.5 text-sm text-cream placeholder:text-cream/40 focus:border-blush-300 focus:outline-none"
              />
              <button type="submit" className="btn-primary justify-center">
                Quero meu desconto <ArrowRight size={16} />
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}
