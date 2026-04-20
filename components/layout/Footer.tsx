import Link from "next/link"
import { Camera, Share2, X } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="font-serif text-black text-2xl font-bold mb-4">ZANOV</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Brand sepatu premium Indonesia yang menghadirkan kualitas terbaik.
            </p>
          </div>
        {/*   
          <div>
            <h4 className="font-semibold mb-4 text-secondary">Koleksi</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/catalogue?category=formal" className="hover:text-white transition-colors">Sepatu Formal</Link></li>
              <li><Link href="/catalogue?category=casual" className="hover:text-white transition-colors">Sepatu Casual</Link></li>
              <li><Link href="/catalogue?category=boots" className="hover:text-white transition-colors">Boots</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-secondary">Perusahaan</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/#about" className="hover:text-white transition-colors">Tentang Kami</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Karir</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Kontak</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-secondary">Ikuti Kami</h4>
            <div className="flex space-x-4">
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-secondary hover:text-primary transition-all"
              >
                <Camera className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-secondary hover:text-primary transition-all"
              >
                <Share2 className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-secondary hover:text-primary transition-all"
              >
                <X className="w-5 h-5" />
              </a>
            </div>
          </div> */}
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">&copy; 2024 ZANOV. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0 text-sm text-gray-400">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}