'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <nav className={cn(
        "fixed w-full z-50 bg-white/95 backdrop-blur-md border-b transition-all duration-300",
        isScrolled ? "shadow-md" : "border-gray-100"
      )}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="font-serif text-3xl font-bold tracking-wider text-primary hover:text-secondary transition-colors">
              ZANOV
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-sm font-medium hover:text-secondary transition-colors">Beranda</Link>
              <Link href="/#about" className="text-sm font-medium hover:text-secondary transition-colors">Tentang</Link>
              <Link href="/catalogue" className="text-sm font-medium text-secondary">Katalog</Link>
            </div>

            <div className="flex items-center space-x-4">
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <Search className="w-5 h-5" />
              </button>
              {/* <button className="p-2 hover:bg-gray-100 rounded-full transition-colors relative">
                <ShoppingBag className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 bg-secondary text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">3</span>
              </button> */}
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={cn(
        "fixed inset-x-0 top-20 z-40 bg-white border-b border-gray-100 transform transition-transform duration-300 md:hidden",
        isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
      )}>
        <div className="px-4 pt-2 pb-4 space-y-2">
          <Link href="/" className="block py-2 text-sm font-medium" onClick={() => setIsMobileMenuOpen(false)}>Beranda</Link>
          <Link href="/catalogue" className="block py-2 text-sm font-medium text-secondary" onClick={() => setIsMobileMenuOpen(false)}>Katalog</Link>
          <Link href="/#collections" className="block py-2 text-sm font-medium" onClick={() => setIsMobileMenuOpen(false)}>Koleksi</Link>
          <Link href="/#about" className="block py-2 text-sm font-medium" onClick={() => setIsMobileMenuOpen(false)}>Tentang</Link>
        </div>
      </div>
    </>
  )
}