"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function FeaturedCategories() {
  return (
    <section id="collections" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-secondary font-medium tracking-widest text-sm uppercase">Koleksi Eksklusif</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mt-2 mb-4">Pilih Gaya Anda</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Dari rapat bisnis hingga santai akhir pekan, temukan pasangan sempurna untuk setiap kesempatan
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Link href="/catalogue?category=formal" className="group relative overflow-hidden rounded-lg aspect-[4/3] cursor-pointer hover-lift block">
            <img 
              src="https://images.unsplash.com/photo-1614252369475-531eba835eb1?w=1200&h=900&fit=crop" 
              alt="Formal Collection" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8">
              <span className="text-secondary text-sm font-medium tracking-wider uppercase">Koleksi</span>
              <h3 className="font-serif text-3xl font-bold text-white mt-2 mb-2">Formal Elegance</h3>
              <p className="text-gray-300 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Sepatu Oxford, Derby, dan Loafer untuk acara formal
              </p>
              <span className="inline-flex items-center text-white font-medium">
                Lihat Koleksi <ArrowRight className="w-4 h-4 ml-2" />
              </span>
            </div>
          </Link>

          <Link href="/catalogue?category=casual" className="group relative overflow-hidden rounded-lg aspect-[4/3] cursor-pointer hover-lift block">
            <img 
              src="https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=1200&h=900&fit=crop" 
              alt="Casual Collection" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8">
              <span className="text-secondary text-sm font-medium tracking-wider uppercase">Koleksi</span>
              <h3 className="font-serif text-3xl font-bold text-white mt-2 mb-2">Casual Modern</h3>
              <p className="text-gray-300 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Sneakers, Slip-on, dan Casual Boots untuk gaya santai
              </p>
              <span className="inline-flex items-center text-white font-medium">
                Lihat Koleksi <ArrowRight className="w-4 h-4 ml-2" />
              </span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}