import { Link } from 'react-router-dom'
import { Instagram, Facebook, Youtube } from 'lucide-react'

const columns = [
  {
    title: 'Loja',
    links: [
      { label: 'Skincare', to: '/categoria/skincare' },
      { label: 'Lar & Casa', to: '/categoria/lar' },
      { label: 'Bem-Estar', to: '/categoria/bem-estar' },
      { label: 'Promoções', to: '/categoria/skincare' },
    ],
  },
  {
    title: 'Informações',
    links: [
      { label: 'Sobre Nós', to: '/sobre' },
      { label: 'Nossa Filosofia', to: '/sobre' },
      { label: 'Sustentabilidade', to: '/sobre' },
    ],
  },
  {
    title: 'Suporte',
    links: [
      { label: 'Minha Conta', to: '/' },
      { label: 'Rastreio de Pedido', to: '/' },
      { label: 'Trocas & Devoluções', to: '/' },
      { label: 'FAQ', to: '/' },
      { label: 'Contato', to: '/' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-graphite pt-20 text-cream/70">
      <div className="container-petalora grid gap-12 pb-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link to="/" className="font-display text-2xl text-cream">
            Peta<em className="italic text-blush-300">lora</em>
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed">
            Beleza clean, acolhedor. Produtos que nutrem a pele e o espaço
            onde você vive — com leveza e propósito.
          </p>
          <div className="mt-5 flex gap-4">
            <a href="#" aria-label="Instagram" className="text-cream/60 hover:text-blush-300">
              <Instagram size={18} />
            </a>
            <a href="#" aria-label="Facebook" className="text-cream/60 hover:text-blush-300">
              <Facebook size={18} />
            </a>
            <a href="#" aria-label="Youtube" className="text-cream/60 hover:text-blush-300">
              <Youtube size={18} />
            </a>
          </div>
        </div>

        {columns.map((col) => (
          <div key={col.title}>
            <h4 className="text-sm font-semibold text-cream">{col.title}</h4>
            <ul className="mt-4 space-y-2.5">
              {col.links.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="text-sm hover:text-blush-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-cream/10 py-6">
        <div className="container-petalora flex flex-col items-center justify-between gap-3 text-xs text-cream/50 sm:flex-row">
          <p>© {new Date().getFullYear()} Petalora. Todos os direitos reservados.</p>
          <p>São Paulo, Brasil</p>
        </div>
      </div>
    </footer>
  )
}
