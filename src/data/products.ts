import type { Product, Testimonial } from '@/types'

export const products: Product[] = [
  {
    id: 'serum-glow',
    name: 'Sérum Facial Glow',
    category: 'skincare',
    subtitle: 'Vitamina C + Ácido Hialurônico',
    description:
      'Iluminação profunda e hidratação intensa para uma pele radiante. Fórmula com vitamina C estabilizada que age contra os sinais de cansaço e ácido hialurônico de baixo peso molecular para penetração real nas camadas da pele.',
    price: 189,
    oldPrice: 229,
    rating: 4.9,
    reviewsCount: 342,
    image:
      'https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=800&q=80',
    badge: 'Mais vendido',
    ingredients: ['Vitamina C estabilizada', 'Ácido hialurônico', 'Niacinamida', 'Extrato de centella asiática'],
  },
  {
    id: 'creme-noturno',
    name: 'Creme Noturno Reparador',
    category: 'skincare',
    subtitle: 'Rosa Mosqueta + Retinol Suave',
    description:
      'Regeneração noturna com o poder da rosa mosqueta orgânica e um retinol de liberação gradual, formulado para não irritar peles sensíveis. Acorde com a pele visivelmente mais firme.',
    price: 224,
    rating: 4.8,
    reviewsCount: 198,
    image:
      '/creamnoturn.jpg',
    badge: 'Novo',
    ingredients: ['Óleo de rosa mosqueta', 'Retinol encapsulado', 'Manteiga de karité', 'Vitamina E'],
  },
  {
    id: 'kit-organizador',
    name: 'Kit Organizador Linho',
    category: 'lar',
    subtitle: 'Coleção Maison Naturelle',
    description:
      'Organize sua casa com elegância: cestas trançadas à mão em fibra natural e linho cru, perfeitas para banheiro, closet ou sala. Cada peça é única, feita por artesãs parceiras.',
    price: 158,
    oldPrice: 198,
    rating: 5.0,
    reviewsCount: 76,
    image:
      'https://images.unsplash.com/photo-1616627561839-074385245ff6?w=800&q=80',
    badge: 'Exclusivo',
  },
  {
    id: 'oleo-corporal',
    name: 'Óleo Corporal Seco Florescer',
    category: 'skincare',
    subtitle: 'Amêndoas + Flor de Laranjeira',
    description:
      'Textura seca de absorção instantânea, sem deixar a pele pegajosa. Um blend de óleo de amêndoas doces e flor de laranjeira que perfuma suavemente enquanto nutre.',
    price: 142,
    rating: 4.7,
    reviewsCount: 211,
    image:
      'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=800&q=80',
    ingredients: ['Óleo de amêndoas doces', 'Extrato de flor de laranjeira', 'Vitamina E'],
  },
  {
    id: 'difusor-aromas',
    name: 'Difusor de Aromas Cozy',
    category: 'lar',
    subtitle: 'Cerâmica Artesanal',
    description:
      'Peça em cerâmica feita à mão, com vapor ultrassônico silencioso e luz ambiente em 3 tons. Vem com um óleo essencial de lavanda e camomila para começar.',
    price: 219,
    rating: 4.8,
    reviewsCount: 134,
    image:
      '/arom.jpg',
  },
  {
    id: 'kit-spa-casa',
    name: 'Kit Spa em Casa',
    category: 'bem-estar',
    subtitle: 'Ritual Completo de Autocuidado',
    description:
      'Tudo que você precisa para transformar o banheiro de casa em um spa: sais de banho aromáticos, esponja konjac, vela de soja e uma máscara facial de argila rosa.',
    price: 249,
    oldPrice: 299,
    rating: 4.9,
    reviewsCount: 167,
    image:
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80',
    badge: 'Mais vendido',
  },
  {
    id: 'manta-trico',
    name: 'Manta de Tricô Cozy Home',
    category: 'lar',
    subtitle: 'Algodão Egípcio',
    description:
      'Manta tricotada à mão em algodão egípcio, leve mas incrivelmente aconchegante. Perfeita para tardes de leitura ou noites de filme.',
    price: 268,
    rating: 4.9,
    reviewsCount: 89,
    image:
      'https://images.unsplash.com/photo-1580301762395-21ce84d00bc6?w=800&q=80',
    badge: 'Novo',
  },
  {
    id: 'vela-relaxante',
    name: 'Vela Aromática Spa & Relaxar',
    category: 'bem-estar',
    subtitle: 'Lavanda + Sândalo',
    description:
      'Vela de cera de soja com pavio de algodão, queima limpa por até 40 horas. Aroma envolvente de lavanda francesa e sândalo para fechar o dia com calma.',
    price: 98,
    rating: 4.8,
    reviewsCount: 256,
    image:
      '/candle.jpg',
  },
  {
    id: 'massageador-facial',
    name: 'Massageador Facial Gua Sha',
    category: 'bem-estar',
    subtitle: 'Quartzo Rosa Natural',
    description:
      'Ferramenta de quartzo rosa 100% natural para massagem facial de drenagem linfática. Cada peça é única na veiagem da pedra. Inclui guia de uso ilustrado.',
    price: 129,
    rating: 4.7,
    reviewsCount: 178,
    image:
      'https://images.unsplash.com/photo-1612817288484-6f916006741a?w=800&q=80',
  },
]

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Ana Beatriz',
    role: 'Designer, São Paulo',
    quote:
      'O Sérum Glow transformou minha pele em 3 semanas. Nunca mais voltei pra outra rotina, é a fórmula que finalmente fez sentido pra minha pele.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80',
  },
  {
    id: 't2',
    name: 'Camila Ferreira',
    role: 'Empreendedora, Rio de Janeiro',
    quote:
      'Os organizadores de linho são simplesmente perfeitos. Elevaram o visual da minha penteadeira e ainda são extremamente úteis no dia a dia.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80',
  },
  {
    id: 't3',
    name: 'Mariana Costa',
    role: 'Médica, Curitiba',
    quote:
      'Tenho pele sensível e sempre tive medo de testar novos produtos. Com a Petalora eu tive um glow sutil e nada de irritação. Virei cliente fiel.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&q=80',
  },
]

export const categoryLabels: Record<string, { title: string; description: string; image: string }> = {
  skincare: {
    title: 'Ritual de Beleza',
    description:
      'Sérums, cremes e óleos formulados com ingredientes botânicos puros para uma rotina verdadeiramente transformadora.',
    image: '/relaxing.jpg',
  },
  lar: {
    title: 'Cozy Home',
    description:
      'Objetos e organizadores que transformam cada cantinho da sua casa em um refúgio sereno e cheio de personalidade.',
    image: 'https://images.unsplash.com/photo-1616627561839-074385245ff6?w=800&q=80',
  },
  'bem-estar': {
    title: 'Spa & Relaxar',
    description:
      'Difusores, aromaterapia e rituais de autocuidado para desacelerar de verdade e cuidar da sua essência.',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80',
  },
}
