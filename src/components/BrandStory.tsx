import { motion } from 'framer-motion'
import { Sparkles, Droplet, Flower2, Heart } from 'lucide-react'

const pillars = [
  { icon: Droplet, title: 'Ingredientes Puros', text: 'Apenas o que a natureza oferece — sem parabenos, sulfatos ou aromas artificiais.' },
  { icon: Sparkles, title: 'Hidratação Profunda', text: 'Fórmulas com ativos naturais que vão fundo, respeitando o ritmo da sua pele.' },
  { icon: Flower2, title: 'Glow Natural', text: 'Nosso brilho é feito pra você parecer descansada, nunca artificial.' },
  { icon: Heart, title: 'Leveza & Cuidado', text: 'Texturas leves, absorção rápida e a sensação de leveza a cada aplicação.' },
]

export default function BrandStory() {
  return (
    <section className="bg-cream py-24">
      <div className="container-petalora grid items-center gap-14 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 gap-4"
        >
          <div className="space-y-4">
            <img
              src="/flower.jpg"
              alt="Pétalas e óleo botânico"
              className="aspect-square w-full rounded-2xl object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=500&q=80"
              alt="Produtos de skincare organizados"
              className="aspect-[4/5] w-full rounded-2xl object-cover"
            />
          </div>
          <div className="pt-10">
            <img
              src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=500&q=80"
              alt="Mulher sorrindo com pele saudável"
              className="aspect-[3/4] w-full rounded-2xl object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="eyebrow">Nossa Filosofia</span>
          <h2 className="mt-3 font-display text-4xl text-graphite sm:text-5xl">
            Beleza com <em className="text-blush-500 italic">propósito</em>
          </h2>
          <p className="mt-5 text-graphite/70">
            A Petalora nasceu da convicção de que cuidar de si mesma deve ser
            um ato de prazer, não de pressa. Cada produto é formulado com
            ingredientes de procedência natural, pensado por mulheres que
            valorizam leveza, eficácia e beleza genuína.
          </p>
          <p className="mt-3 text-graphite/70">
            Do skincare ao lar, nossa coleção foi desenhada para criar
            momentos de pausa e autocuidado no seu cotidiano.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-6">
            {pillars.map(({ icon: Icon, title, text }) => (
              <div key={title}>
                <Icon size={20} className="text-blush-500" />
                <h3 className="mt-3 text-sm font-semibold text-graphite">{title}</h3>
                <p className="mt-1 text-xs leading-relaxed text-graphite/55">{text}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
