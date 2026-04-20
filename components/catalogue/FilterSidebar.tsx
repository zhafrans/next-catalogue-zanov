"use client"

import { X, RotateCcw } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { categories, genders, materials } from "@/lib/data"
import { Filters } from "@/types/product"
import { Button } from "@/components/ui/button"

interface FilterSidebarProps {
  filters: Filters
  setFilters: (filters: Filters) => void
  isOpen: boolean
  onClose: () => void
}

export default function FilterSidebar({ filters, setFilters, isOpen, onClose }: FilterSidebarProps) {
  const updateFilter = (key: keyof Filters, value: string) => {
    setFilters({ ...filters, [key]: value })
  }

  const clearFilters = () => {
    setFilters({
      search: '',
      gender: 'all',
      category: 'all',
      material: 'all'
    })
  }

  const sidebarClasses = isOpen 
    ? "fixed inset-y-0 left-0 z-50 w-80 bg-white shadow-2xl transform transition-transform duration-300 translate-x-0 overflow-y-auto"
    : "hidden lg:block lg:w-80 lg:sticky lg:top-24 lg:h-fit space-y-6"

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={onClose} />
      )}

      <aside className={sidebarClasses}>
        <div className="p-6 space-y-8">
          <div className="flex justify-between items-center lg:hidden">
            <h2 className="font-serif text-xl font-bold">Filter</h2>
            <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Search */}
          <div className="space-y-3">
            <Label className="text-sm font-semibold uppercase tracking-wider text-muted">
              Pencarian
            </Label>
            <Input 
              type="text"
              placeholder="Cari sepatu..."
              value={filters.search}
              onChange={(e) => updateFilter('search', e.target.value)}
              className="w-full"
            />
          </div>

          {/* Gender Filter */}
          <div className="space-y-3">
            <Label className="text-sm font-semibold uppercase tracking-wider text-muted">
              Gender
            </Label>
            <RadioGroup 
              value={filters.gender}
              onValueChange={(value) => updateFilter('gender', value)}
              className="space-y-2"
            >
              {genders.map(g => (
                <div key={g.value} className="flex items-center space-x-2">
                  <RadioGroupItem value={g.value} id={`gender-${g.value}`} />
                  <Label htmlFor={`gender-${g.value}`} className="cursor-pointer">
                    {g.label}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>

          {/* Category Filter */}
          <div className="space-y-3">
            <Label className="text-sm font-semibold uppercase tracking-wider text-muted">
              Kategori
            </Label>
            <RadioGroup 
              value={filters.category}
              onValueChange={(value) => updateFilter('category', value)}
              className="space-y-2"
            >
              {categories.map(c => (
                <div key={c.value} className="flex items-center space-x-2">
                  <RadioGroupItem value={c.value} id={`category-${c.value}`} />
                  <Label htmlFor={`category-${c.value}`} className="cursor-pointer capitalize">
                    {c.label}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>

          {/* Material Filter */}
          <div className="space-y-3">
            <Label className="text-sm font-semibold uppercase tracking-wider text-muted">
              Bahan
            </Label>
            <RadioGroup 
              value={filters.material}
              onValueChange={(value) => updateFilter('material', value)}
              className="space-y-2"
            >
              {materials.map(m => (
                <div key={m.value} className="flex items-center space-x-2">
                  <RadioGroupItem value={m.value} id={`material-${m.value}`} />
                  <Label htmlFor={`material-${m.value}`} className="cursor-pointer capitalize">
                    {m.label}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>

          {/* Clear Filters */}
          <Button 
            variant="outline"
            onClick={clearFilters}
            className="w-full"
          >
            <RotateCcw className="w-4 h-4 mr-2" />
            Reset Filter
          </Button>
        </div>
      </aside>
    </>
  )
}