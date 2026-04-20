"use client"

import { useState, useMemo } from "react"
import { products } from "@/lib/data"
import ProductCard from "@/components/catalogue/ProductCard"
import FilterSidebar from "@/components/catalogue/FilterSidebar"
import { Filter, ChevronDown } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import type { Filters, SortOption } from "@/types/product"

export default function CataloguePage() {
  const [filters, setFilters] = useState<Filters>({
    search: '',
    gender: 'all',
    category: 'all',
    material: 'all'
  })
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [sortBy, setSortBy] = useState<SortOption>('featured')

  const filteredProducts = useMemo(() => {
    const filtered = products.filter(product => {
      const matchSearch = product.name.toLowerCase().includes(filters.search.toLowerCase()) ||
                         product.category.toLowerCase().includes(filters.search.toLowerCase())
      const matchGender = filters.gender === 'all' || product.gender === filters.gender
      const matchCategory = filters.category === 'all' || product.category === filters.category
      const matchMaterial = filters.material === 'all' || product.material === filters.material
      
      return matchSearch && matchGender && matchCategory && matchMaterial
    })

    switch (sortBy) {
      case 'price-low':
        return [...filtered].sort((a, b) => a.price - b.price)
      case 'price-high':
        return [...filtered].sort((a, b) => b.price - a.price)
      case 'rating':
        return [...filtered].sort((a, b) => b.rating - a.rating)
      default:
        return filtered
    }
  }, [filters, sortBy])

  const activeFiltersCount = Object.entries(filters).filter(([key, value]) => 
    key !== 'search' && value !== 'all'
  ).length + (filters.search ? 1 : 0)

  const removeFilter = (key: keyof Filters) => {
    setFilters({ ...filters, [key]: key === 'search' ? '' : 'all' })
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-24 pt-20">
      {/* Header */}
      <div className="bg-white border-b sticky top-20 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="font-serif text-3xl font-bold mb-1">Katalog ZANOV</h1>
              <p className="text-muted-foreground text-sm">
                {filteredProducts.length} produk ditemukan
                {activeFiltersCount > 0 && ` • ${activeFiltersCount} filter aktif`}
              </p>
            </div>
            
            <div className="flex items-center gap-4">
              <Button 
                variant="outline"
                onClick={() => setIsSidebarOpen(true)}
                className="lg:hidden"
              >
                <Filter className="w-4 h-4 mr-2" />
                Filter {activeFiltersCount > 0 && `(${activeFiltersCount})`}
              </Button>
              
              <Select value={sortBy} onValueChange={(value) => setSortBy(value as SortOption)}>
                <SelectTrigger className="w-[200px]">
                  <SelectValue placeholder="Urutkan" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Unggulan</SelectItem>
                  <SelectItem value="price-low">Harga: Rendah ke Tinggi</SelectItem>
                  <SelectItem value="price-high">Harga: Tinggi ke Rendah</SelectItem>
                  <SelectItem value="rating">Rating Tertinggi</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Active Filter Pills */}
          {activeFiltersCount > 0 && (
            <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t">
              {filters.search && (
                <Badge variant="default" className="bg-primary text-white pl-3 pr-2 py-1 flex items-center gap-2">
                  Cari: {filters.search}
                  <button onClick={() => removeFilter('search')} className="hover:bg-white/20 rounded-full px-1">
                    ✕
                  </button>
                </Badge>
              )}
              {filters.gender !== 'all' && (
                <Badge variant="default" className="bg-primary text-white pl-3 pr-2 py-1 flex items-center gap-2">
                  {filters.gender === 'men' ? 'Pria' : filters.gender === 'women' ? 'Wanita' : 'Unisex'}
                  <button onClick={() => removeFilter('gender')} className="hover:bg-white/20 rounded-full px-1">
                    ✕
                  </button>
                </Badge>
              )}
              {filters.category !== 'all' && (
                <Badge variant="default" className="bg-primary text-white pl-3 pr-2 py-1 flex items-center gap-2 capitalize">
                  {filters.category}
                  <button onClick={() => removeFilter('category')} className="hover:bg-white/20 rounded-full px-1">
                    ✕
                  </button>
                </Badge>
              )}
              {filters.material !== 'all' && (
                <Badge variant="default" className="bg-primary text-white pl-3 pr-2 py-1 flex items-center gap-2 capitalize">
                  {filters.material === 'leather' ? 'Kulit' : filters.material === 'suede' ? 'Suede' : filters.material === 'canvas' ? 'Canvas' : 'Sintetis'}
                  <button onClick={() => removeFilter('material')} className="hover:bg-white/20 rounded-full px-1">
                    ✕
                  </button>
                </Badge>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          <FilterSidebar 
            filters={filters} 
            setFilters={setFilters}
            isOpen={isSidebarOpen}
            onClose={() => setIsSidebarOpen(false)}
          />

          {filteredProducts.length === 0 ? (
            <div className="flex-1 text-center py-20">
              <h3 className="font-serif text-xl font-semibold mb-2">Tidak ada produk ditemukan</h3>
              <p className="text-muted-foreground mb-6">Coba ubah filter atau kata kunci pencarian</p>
              <Button 
                onClick={() => setFilters({ search: '', gender: 'all', category: 'all', material: 'all' })}
                variant="default"
                className="bg-secondary text-primary hover:bg-secondary/80"
              >
                Reset Semua Filter
              </Button>
            </div>
          ) : (
            <div className="flex-1 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}