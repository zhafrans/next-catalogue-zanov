export type Gender = 'men' | 'women' | 'unisex'
export type Category = 'formal' | 'casual' | 'boots'
export type Material = 'leather' | 'suede' | 'canvas' | 'synthetic'

export interface Product {
  id: number
  name: string
  slug: string
  gender: Gender
  category: Category
  material: Material
  price: number
  image: string
  rating: number
  stock: number
  description?: string
}

export interface Filters {
  search: string
  gender: Gender | 'all'
  category: Category | 'all'
  material: Material | 'all'
}

export type SortOption = 'featured' | 'price-low' | 'price-high' | 'rating'