"use client"

import { Product } from "@/types/product"
import { Badge } from "@/components/ui/badge"
import { formatPrice } from "@/lib/utils"
import { ImageModal } from "./ImageModal"
import { Eye } from "lucide-react"

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const getCategoryLabel = (cat: string) => {
    const labels = { formal: 'Formal', casual: 'Casual', boots: 'Boots' }
    return labels[cat as keyof typeof labels] || cat
  }

  const getMaterialLabel = (mat: string) => {
    const labels = { leather: 'Kulit', suede: 'Suede', canvas: 'Canvas', synthetic: 'Sintetis' }
    return labels[mat as keyof typeof labels] || mat
  }

  return (
    <div className="group bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <ImageModal product={product}>
        <div className="relative aspect-square bg-gray-100 overflow-hidden cursor-pointer">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
          
          {/* Stock Badge */}
          {product.stock < 10 && (
            <Badge variant="secondary" className="absolute top-3 left-3 bg-red-500 text-white border-0">
              Stok Terbatas
            </Badge>
          )}
          
          {product.stock >= 10 && product.rating >= 4.8 && (
            <Badge variant="default" className="absolute top-3 left-3 bg-secondary text-primary border-0">
              Best Seller
            </Badge>
          )}

          {/* Quick View Overlay */}
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <div className="bg-white text-primary px-4 py-2 rounded-full flex items-center gap-2 font-medium">
              <Eye className="w-4 h-4" />
              Lihat Detail
            </div>
          </div>
        </div>
      </ImageModal>
      
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <Badge variant="outline" className="text-xs">
            {getMaterialLabel(product.material)}
          </Badge>
          <div className="flex items-center gap-1">
            <span className="text-yellow-500 text-sm">★</span>
            <span className="text-xs font-medium">{product.rating}</span>
          </div>
        </div>
        
        <h3 className="font-serif text-lg font-semibold mb-1 group-hover:text-secondary transition-colors">
          {product.name}
        </h3>
        
        <p className="text-muted text-sm mb-3 capitalize">
          {getCategoryLabel(product.category)} • {product.gender === 'men' ? 'Pria' : product.gender === 'women' ? 'Wanita' : 'Unisex'}
        </p>
        
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-primary">
            {formatPrice(product.price)}
          </span>
        </div>
      </div>
    </div>
  )
}