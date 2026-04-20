import { Product } from '@/types/product'

export const products: Product[] = [
  {
    id: 1,
    name: "Oxford Classic Black",
    slug: "oxford-classic-black",
    gender: "men",
    category: "formal",
    material: "leather",
    price: 1250000,
    image: "https://images.unsplash.com/photo-1614252369475-531eba835eb1?w=800&h=800&fit=crop",
    rating: 4.9,
    stock: 15,
    description: "Sepatu formal premium dengan bahan kulit berkualitas tinggi"
  },
  {
    id: 2,
    name: "Loafer Suede Tan",
    slug: "loafer-suede-tan",
    gender: "men",
    category: "casual",
    material: "suede",
    price: 980000,
    image: "https://images.unsplash.com/photo-1533867617858-e7b97e060509?w=800&h=800&fit=crop",
    rating: 4.8,
    stock: 8,
    description: "Loafer casual dengan bahan suede yang nyaman"
  },
  {
    id: 3,
    name: "Minimalist White",
    slug: "minimalist-white",
    gender: "unisex",
    category: "casual",
    material: "canvas",
    price: 750000,
    image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=800&h=800&fit=crop",
    rating: 4.7,
    stock: 20,
    description: "Sneakers putih minimalis untuk gaya sehari-hari"
  },
  {
    id: 4,
    name: "Derby Brown Leather",
    slug: "derby-brown-leather",
    gender: "men",
    category: "formal",
    material: "leather",
    price: 1100000,
    image: "https://images.unsplash.com/photo-1614894075660-25b2d9b5b724?w=800&h=800&fit=crop",
    rating: 4.9,
    stock: 12,
    description: "Sepatu Derby klasik warna coklat"
  },
  {
    id: 5,
    name: "Ballet Flat Nude",
    slug: "ballet-flat-nude",
    gender: "women",
    category: "formal",
    material: "leather",
    price: 850000,
    image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=800&h=800&fit=crop",
    rating: 4.6,
    stock: 18,
    description: "Flat shoes elegan untuk acara formal"
  },
  {
    id: 6,
    name: "Chelsea Boot Black",
    slug: "chelsea-boot-black",
    gender: "men",
    category: "boots",
    material: "leather",
    price: 1450000,
    image: "https://images.unsplash.com/photo-1638247025967-b4e38b787b76?w=800&h=800&fit=crop",
    rating: 4.9,
    stock: 6,
    description: "Chelsea boots hitam timeless"
  },
  {
    id: 7,
    name: "Sneakers Canvas Grey",
    slug: "sneakers-canvas-grey",
    gender: "women",
    category: "casual",
    material: "canvas",
    price: 650000,
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&h=800&fit=crop",
    rating: 4.5,
    stock: 25,
    description: "Sneakers abu-abu casual"
  },
  {
    id: 8,
    name: "High Heels Classic",
    slug: "high-heels-classic",
    gender: "women",
    category: "formal",
    material: "leather",
    price: 1200000,
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&h=800&fit=crop",
    rating: 4.8,
    stock: 10,
    description: "High heels klasik untuk acara formal"
  },
  {
    id: 9,
    name: "Desert Boot Suede",
    slug: "desert-boot-suede",
    gender: "men",
    category: "boots",
    material: "suede",
    price: 1350000,
    image: "https://images.unsplash.com/photo-1638247025967-b4e38b787b76?w=800&h=800&fit=crop",
    rating: 4.7,
    stock: 9,
    description: "Desert boots dari bahan suede"
  },
  {
    id: 10,
    name: "Slip-on Synthetic",
    slug: "slip-on-synthetic",
    gender: "unisex",
    category: "casual",
    material: "synthetic",
    price: 450000,
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&h=800&fit=crop",
    rating: 4.3,
    stock: 30,
    description: "Slip-on casual yang praktis"
  },
  {
    id: 11,
    name: "Monk Strap Double",
    slug: "monk-strap-double",
    gender: "men",
    category: "formal",
    material: "leather",
    price: 1400000,
    image: "https://images.unsplash.com/photo-1614252369475-531eba835eb1?w=800&h=800&fit=crop",
    rating: 4.9,
    stock: 7,
    description: "Monk strap double buckle untuk tampilan eksklusif"
  },
  {
    id: 12,
    name: "Ankle Boot Leather",
    slug: "ankle-boot-leather",
    gender: "women",
    category: "boots",
    material: "leather",
    price: 1300000,
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&h=800&fit=crop",
    rating: 4.8,
    stock: 11,
    description: "Ankle boots kulit yang fashionable"
  }
]

export const categories = [
  { value: 'all', label: 'Semua Kategori' },
  { value: 'formal', label: 'Formal' },
  { value: 'casual', label: 'Casual' },
  { value: 'boots', label: 'Boots' }
]

export const genders = [
  { value: 'all', label: 'Semua' },
  { value: 'men', label: 'Pria' },
  { value: 'women', label: 'Wanita' },
  { value: 'unisex', label: 'Unisex' }
]

export const materials = [
  { value: 'all', label: 'Semua Bahan' },
  { value: 'leather', label: 'Kulit Premium' },
  { value: 'suede', label: 'Suede' },
  { value: 'canvas', label: 'Canvas' },
  { value: 'synthetic', label: 'Sintetis' }
]