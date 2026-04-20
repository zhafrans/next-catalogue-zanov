"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { products } from "@/lib/data"
import ProductCard from "@/components/catalogue/ProductCard"
import { Button } from "@/components/ui/button"

export default function FeaturedProducts() {
  const featuredProducts = products.slice(0, 3)

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <span className="text-secondary font-medium tracking-widest text-sm uppercase">Produk Unggulan</span>
            <h2 className="font-serif text-4xl font-bold mt-2">Best Seller Minggu Ini</h2>
          </div>
          <Button asChild variant="link" className="hidden md:flex items-center text-primary">
            <Link href="/catalogue">
              Lihat Semua <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <Button asChild variant="link">
            <Link href="/catalogue">
              Lihat Semua Produk <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}