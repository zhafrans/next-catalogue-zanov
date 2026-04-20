"use client"

import HeroSection from '@/components/home/HeroSection'
import FeaturedCategories from '@/components/home/FeaturedCategories'
import FeaturedProducts from '@/components/home/FeaturedProducts'
import Link from 'next/link'

export default function HomePage() {
  return (
    <>
      <HeroSection />
 {/*      <FeaturedCategories />
      <FeaturedProducts /> */}
      
      {/* About Section */}
      <section id="about" className="py-32 bg-gradient-to-b from-gray-900 to-black text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/static/images/zanovFIXlogo.png')] bg-cover bg-center"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="text-orange-400 font-medium tracking-widest text-sm uppercase mb-4 block">EST. 2022</span>
            <h2 className="font-serif text-4xl md:text-6xl font-bold mb-6">
              Kesenian dalam <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">Setiap Jahitan</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
              Sejak 2022, ZANOV lahir dari passion akan kerajinan sepatu tradisional yang dikombinasikan dengan desain modern. 
              Setiap pasang sepatu ZANOV dibuat dengan memperhatikan detail terkecil, menggunakan bahan berkualitas 
              tinggi yang dipilih secara selektif untuk memberikan pengalaman terbaik bagi setiap langkah Anda.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-orange-500/50 transition-all duration-300 hover:scale-105 hover:bg-white/10">
              <div className="text-5xl font-bold text-orange-400 mb-2 group-hover:scale-110 transition-transform duration-300">100%</div>
              <div className="text-gray-300 font-medium">Kulit Premium</div>
              <div className="mt-4 h-1 w-0 bg-orange-400 group-hover:w-full transition-all duration-500"></div>
            </div>
            <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-orange-500/50 transition-all duration-300 hover:scale-105 hover:bg-white/10">
              <div className="text-5xl font-bold text-orange-400 mb-2 group-hover:scale-110 transition-transform duration-300">50+</div>
              <div className="text-gray-300 font-medium">Desain Eksklusif</div>
              <div className="mt-4 h-1 w-0 bg-orange-400 group-hover:w-full transition-all duration-500"></div>
            </div>
            <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-orange-500/50 transition-all duration-300 hover:scale-105 hover:bg-white/10">
              <div className="text-5xl font-bold text-orange-400 mb-2 group-hover:scale-110 transition-transform duration-300">10K+</div>
              <div className="text-gray-300 font-medium">Pelanggan Puas</div>
              <div className="mt-4 h-1 w-0 bg-orange-400 group-hover:w-full transition-all duration-500"></div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-2 text-gray-400 mb-8">
              <div className="w-12 h-px bg-gray-600"></div>
              <span className="text-sm tracking-widest uppercase">Info Pemesanan</span>
              <div className="w-12 h-px bg-gray-600"></div>
            </div>
            <div className="max-w-2xl mx-auto space-y-6">
              <p className="text-gray-400 text-sm font-medium">
                VARIAN WARNA DAN UKURAN DAPAT DISESUAIKAN DENGAN PERMINTAAN BILA TERSEDIA
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a 
                  href="tel:089527321478" 
                  className="group relative bg-gradient-to-r from-orange-500 to-orange-600 text-white border-2 border-orange-400 hover:from-orange-600 hover:to-orange-700 hover:border-orange-500 font-semibold text-base px-8 py-4 rounded-full shadow-lg hover:shadow-orange-500/50 hover:shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  <span className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    089527321478
                  </span>
                </a>
                <a 
                  href="tel:081329235551" 
                  className="group relative bg-gradient-to-r from-yellow-500 to-yellow-600 text-white border-2 border-yellow-400 hover:from-yellow-600 hover:to-yellow-700 hover:border-yellow-500 font-semibold text-base px-8 py-4 rounded-full shadow-lg hover:shadow-yellow-500/50 hover:shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  <span className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    081329235551
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
     {/*  <section className="py-24 bg-secondary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Lebih Dekat dengan ZANOV</h2>
          <p className="text-muted-foreground mb-8">
            Dapatkan update koleksi terbaru dan penawaran eksklusif langsung ke inbox Anda
          </p>
          <form 
            className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto" 
            onSubmit={(e) => { e.preventDefault(); alert('Terima kasih telah berlangganan!'); }}
          >
            <input 
              type="email" 
              placeholder="Alamat email Anda" 
              className="flex-1 px-6 py-4 rounded-sm border border-gray-300 focus:outline-none focus:border-secondary transition-colors" 
              required 
            />
            <button 
              type="submit" 
              className="bg-primary text-white px-8 py-4 rounded-sm font-medium hover:bg-gray-800 transition-colors whitespace-nowrap"
            >
              Berlangganan
            </button>
          </form>
        </div>
      </section> */}
    </>
  )
}