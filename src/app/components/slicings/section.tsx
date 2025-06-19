"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { User, Car, Smartphone } from "lucide-react"

const categories = [
  { icon: User, label: "Akun", color: "text-blue-500" },
  { icon: Car, label: "Mobil", color: "text-green-500" },
  { icon: Smartphone, label: "Gadget", color: "text-purple-500" },
]

export default function RekberLanding() {
  const [currentCategory, setCurrentCategory] = useState(0)
  const [value, setValue] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCategory((prev) => (prev + 1) % categories.length)
    }, 3000)
    return () => clearInterval(interval)
  }, []) 
  const handleChange =(e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value.replace(/\D/g, ''); // hanya angka
    const numberValue = Number(rawValue); 
    const formattedValue = new Intl.NumberFormat('id-ID').format(numberValue);
    setValue(formattedValue);
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50"> 
      <div className="container mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Section */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                <span className="text-gray-900">Transaksi Aman</span>
                <br />
                <span className="text-gray-900">Tanpa Khawatir</span>
                <br />
                <span className="text-gray-900">Penipuan</span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Rekber.com jembatan pembayaran antara pembeli & penjual yang terpercaya
              </p>
            </div>
 
            <div className="space-y-4 max-w-3xl">
              <div className="grid grid-cols-3 gap-0">
                <div className="col-span-1">
                  <Select defaultValue="penjual">
                    <SelectTrigger
                      className="bg-white text-gray-800 border border-gray-300 rounded-r-none w-full text-base"
                      style={{ height: 'calc(var(--spacing) * 14)' }}
                    >
                      <SelectValue placeholder="Saya Penjual" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="penjual">Saya Penjual</SelectItem>
                      <SelectItem value="pembeli">Saya Pembeli</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="col-span-2">
                  <Select defaultValue="jual-beli">
                    <SelectTrigger
                      className="bg-white text-gray-500 border border-gray-300 rounded-l-none w-full text-base"
                      style={{ height: 'calc(var(--spacing) * 14)' }}
                    >
                      <SelectValue placeholder="Akun, kendaraan, gadget..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="jual-beli">Akun, kendaraan, gadget...</SelectItem>
                      <SelectItem value="akun">Akun Media Sosial</SelectItem>
                      <SelectItem value="mobil">Kendaraan</SelectItem>
                      <SelectItem value="gadget">Gadget & Elektronik</SelectItem>
                      <SelectItem value="jasa">Jasa & Layanan</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              {/* Second Row - Price Input and Currency */}
              <div className="grid grid-cols-3 gap-0">
                <div className="relative col-span-2">
                  <Input
                    placeholder="800.000" 
                    value={value}
                    onChange={handleChange}
                    className="bg-white text-gray-800 border border-gray-300 rounded-r-none h-14 text-base pl-16 w-full"
                  />
                  <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-600 font-medium text-base">
                    Rp
                  </span>
                </div>

                <div className="col-span-1">
                  <Select defaultValue="idr">
                    <SelectTrigger
                      className="bg-white text-gray-800 border border-gray-300 rounded-l-none w-full text-base"
                      style={{ height: 'calc(var(--spacing) * 14)' }}
                    >
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="idr">
                        <div className="flex items-center space-x-2">
                          <span className="text-red-500">🇮🇩</span>
                          <span>IDR</span>
                        </div>
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Get Started Button */}
              <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white h-14 text-base font-semibold rounded-lg">
                Mulai sekarang
              </Button>
            </div>
 
          </div>

          {/* Right Section - Hidden on mobile */}
          <div className="hidden lg:block relative">
            <div className="text-center space-y-8">
              {/* Circle with Dynamic Text */}
              <div className="relative mx-auto w-64 h-64 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex flex-col items-center justify-center shadow-2xl">
                {/* Current Category Icon */}
                <div className="mb-3">
                  {categories.map((category, index) => {
                    const Icon = category.icon
                    return (
                      <Icon
                        key={index}
                        className={`w-16 h-16 text-white transition-all duration-500 ${
                          index === currentCategory ? "opacity-100 scale-100" : "opacity-0 scale-75 absolute"
                        }`}
                      />
                    )
                  })}
                </div>

                {/* Dynamic Text Based on Current Category */}
                <div className="text-center text-white">
                  <div className="text-lg font-semibold">Jual Beli</div>
                  <div className="text-2xl font-bold">{categories[currentCategory].label}</div>
                  <div className="text-sm opacity-90">Aman & Mudah</div>
                </div>

                {/* Floating Category Indicators */}
                <div className="absolute -top-2 -right-2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center">
                  {categories.map((category, index) => {
                    const Icon = category.icon
                    return (
                      <Icon
                        key={index}
                        className={`w-6 h-6 transition-all duration-500 ${
                          index === (currentCategory + 1) % categories.length
                            ? `${category.color} opacity-100 scale-100`
                            : "text-gray-400 opacity-0 scale-75 absolute"
                        }`}
                      />
                    )
                  })}
                </div>

                <div className="absolute -bottom-2 -left-2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center">
                  {categories.map((category, index) => {
                    const Icon = category.icon
                    return (
                      <Icon
                        key={index}
                        className={`w-6 h-6 transition-all duration-500 ${
                          index === (currentCategory + 2) % categories.length
                            ? `${category.color} opacity-100 scale-100`
                            : "text-gray-400 opacity-0 scale-75 absolute"
                        }`}
                      />
                    )
                  })}
                </div>
              </div>

              {/* Process Steps */}
              <div className="space-y-4 text-left max-w-sm mx-auto">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-sm">Pembeli dan penjual setuju dengan syarat</span>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-sm">Pembeli membayar Rekber.com</span>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-sm">
                    Penjual mengirim {categories[currentCategory].label.toLowerCase()}
                  </span>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-sm">
                    Pembeli memeriksa & menyetujui {categories[currentCategory].label.toLowerCase()}
                  </span>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-sm font-semibold">Rekber.com membayar penjual</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
