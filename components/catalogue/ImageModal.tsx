"use client"

import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog"
import { Product } from "@/types/product"
import { formatPrice } from "@/lib/utils"
import { X } from "lucide-react"

interface ImageModalProps {
  product: Product
  children: React.ReactNode
}

export function ImageModal({ product, children }: ImageModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-screen-xl w-full h-screen p-0 overflow-hidden bg-black/95 border-0">
        <DialogClose className="absolute top-4 right-4 z-50 bg-white/90 hover:bg-white text-gray-900 rounded-full p-2 transition-colors">
          <X className="w-6 h-6" />
        </DialogClose>
        <div className="relative w-full h-full flex items-center justify-center">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-contain"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
            <h3 className="font-serif text-2xl font-bold text-white mb-2">
              {product.name}
            </h3>
            <div className="flex items-center justify-between text-white">
              <div>
                <p className="text-sm text-gray-300 mb-1">
                  {product.category === 'formal' ? 'Formal' : product.category === 'casual' ? 'Casual' : 'Boots'} •
                  {product.gender === 'men' ? ' Pria' : product.gender === 'women' ? ' Wanita' : ' Unisex'}
                </p>
                <p className="text-2xl font-bold text-secondary">
                  {formatPrice(product.price)}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  <span className="text-yellow-400">★</span>
                  <span>{product.rating}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}