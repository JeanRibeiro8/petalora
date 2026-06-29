export type Category = 'skincare' | 'lar' | 'bem-estar'

export interface Product {
  id: string
  name: string
  category: Category
  subtitle: string
  description: string
  price: number
  oldPrice?: number | null
  rating: number
  reviewsCount: number
  image: string
  badge?: 'Mais vendido' | 'Novo' | 'Exclusivo' | null
  ingredients?: string[] | null
}

export interface CartItem {
  product: Product
  quantity: number
}

export interface Testimonial {
  id: string
  name: string
  role: string
  quote: string
  rating: number
  avatar: string
}
