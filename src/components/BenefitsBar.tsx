import { Truck, RefreshCw, ShieldCheck, Leaf } from 'lucide-react'

const benefits = [
  { icon: Truck, label: 'Frete Grátis', detail: 'acima de R$ 199' },
  { icon: RefreshCw, label: 'Troca Fácil', detail: 'até 30 dias' },
  { icon: ShieldCheck, label: 'Pagamento Seguro', detail: 'criptografado' },
  { icon: Leaf, label: 'Clean & Natural', detail: 'sem tóxicos' },
]

export default function BenefitsBar() {
  return (
    <section className="border-y border-graphite/10 bg-cream">
      <div className="container-petalora grid grid-cols-2 gap-6 py-7 sm:grid-cols-4">
        {benefits.map(({ icon: Icon, label, detail }) => (
          <div key={label} className="flex items-center gap-3">
            <Icon size={20} className="shrink-0 text-blush-500" />
            <div>
              <p className="text-sm font-semibold text-graphite">{label}</p>
              <p className="text-xs text-graphite/55">{detail}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
