"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[url('/static/images/zanovFIXlogo.png')] bg-cover bg-center"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div className="animate-fade-in max-w-3xl mx-auto">
          <span className="text-white font-medium tracking-widest text-sm uppercase mb-4 block">EST. 2022</span>
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
            Langkah <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">Elegan</span><br />
            untuk Setiap Momen
          </h1>
          <p className="text-gray-300 text-lg mb-8 max-w-lg mx-auto leading-relaxed">
            ZANOV menghadirkan koleksi sepatu formal dan casual berkualitas premium, 
            dirancang untuk pria dan wanita modern yang mengutamakan kenyamanan dan gaya.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg" className="group relative bg-gradient-to-r from-orange-500 to-orange-600 text-white border-2 border-orange-400 hover:from-orange-600 hover:to-orange-700 hover:border-orange-500 font-bold text-lg px-10 py-6 rounded-full shadow-lg hover:shadow-orange-500/50 hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <Link href="#collections" className="flex items-center gap-2">
                Lihat Koleksi
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}