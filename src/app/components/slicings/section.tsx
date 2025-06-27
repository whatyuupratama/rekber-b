"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { User, Car, Smartphone, Calculator,TrendingUp } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Link from 'next/link';
import { Separator } from "@/components/ui/separator"

const categories = [
  { icon: User, label: "Akun", color: "text-blue-500" },
  { icon: Car, label: "Mobil", color: "text-green-500" },
  { icon: Smartphone, label: "Gadget", color: "text-purple-500" },
]

export default function RekberLanding() {
  const [currentCategory, setCurrentCategory] = useState(0)
  const [currentStep, setCurrentStep] = useState(0) 
  
  useEffect(() => {
    const categoryInterval = setInterval(() => {
      setCurrentCategory((prev) => (prev + 1) % categories.length)
    }, 6000)

    const stepInterval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % 6) // 6 steps total (0-5, where 0 means no steps completed)
    }, 1000) // Each step appears every 1 second

    return () => {
      clearInterval(categoryInterval)
      clearInterval(stepInterval)
    }
  }, [])

  const [amount, setAmount] = useState("")   
  const [fee, setFee] = useState(0)
  const [totalAmount, setTotalAmount] = useState(0)

  // Fungsi untuk menghitung fee
  const calculateFee = (inputAmount: number) => {
    if (inputAmount <= 0) return 0

    let calculatedFee = 0
    const hundredMillion = 100000000 // 100 juta

    if (inputAmount < hundredMillion) {
      // Dibawah 100 juta = 1%
      calculatedFee = inputAmount * 0.01
    } else {
      // Lebih dari 100 juta = 0.5%
      calculatedFee = inputAmount * 0.005
    }

    // Minimum fee adalah 10.000
    return Math.max(calculatedFee, 10000)
  }

  // Format currency untuk display
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value)
  }

  // Format number dengan separator
  const formatNumber = (value: string) => {
    const number = value.replace(/\D/g, "")
    return new Intl.NumberFormat("id-ID").format(Number.parseInt(number) || 0)
  }

  // Handle perubahan amount
  const handleAmountChange = (value: string) => {
    const numericValue = value.replace(/\D/g, "")
    setAmount(numericValue)

    const parsedAmount = Number.parseInt(numericValue) || 0
    const calculatedFee = calculateFee(parsedAmount)
    setFee(calculatedFee)
    setTotalAmount(parsedAmount + calculatedFee)
  }
  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50">   
      <div className="container mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
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
              <span className="font-semibold text-blue-900">Rekber.com </span> jembatan pembayaran antara pembeli & penjual yang terpercaya.
              </p>
            </div>
 
            <div className="space-y-4 max-w-3xl">
              <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-3 sm:gap-y-0 gap-x-0">
                {/* Select 1 */}
                <div className="sm:col-span-1">
                  <Select defaultValue="penjual">
                    <SelectTrigger
                      className="bg-white text-gray-800 border border-gray-300 w-full text-base pr-8 
                                rounded-t-lg sm:rounded-l-lg sm:rounded-r-none sm:border-r-0"
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

                {/* Select 2 */}
                <div className="sm:col-span-2">
                  <Select defaultValue="jual-beli">
                    <SelectTrigger
                      className="bg-white text-gray-500 border border-gray-300 w-full text-base 
                                rounded-b-lg sm:rounded-r-lg sm:rounded-l-none"
                      style={{ height: 'calc(var(--spacing) * 14)' }}
                    >
                       <SelectValue placeholder="Jual Beli Akun" />
                    </SelectTrigger>
                    <SelectContent>  
                      <SelectItem value="jual-beli">Jual Beli Akun</SelectItem> 
                      <SelectItem value="mobil">Kendaraan</SelectItem>
                      <SelectItem value="gadget">Gadget & Elektronik</SelectItem>
                      <SelectItem value="jasa">Jasa & Layanan</SelectItem>
                      <SelectItem value="properti">Properti</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              {/* Second Row - Price Input and Currency */}
              <div className="grid grid-cols-3 gap-0">
                <div className="relative col-span-2">
                  <Input
                    placeholder="1.000.000" 
                    value={formatNumber(amount)}
                    onChange={(e) => handleAmountChange(e.target.value)}
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

                {/* Fee Calculation - Show only when amount is entered */}
                {amount && Number.parseInt(amount) > 0 && (
                  <Card className="bg-blue-50 border-blue-200 p-0">
                    <CardContent className="p-4 space-y-3">
                      <div className="flex items-center space-x-2 text-blue-700">
                        <Calculator className="h-4 w-4" />
                        <span className="font-semibold">Kalkulasi Biaya</span>
                      </div>

                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Jumlah Transaksi:</span>
                          <span className="font-semibold">{formatCurrency(Number.parseInt(amount))}</span>
                        </div>

                        <div className="flex justify-between">
                          <span className="text-gray-600">
                            Fee ({Number.parseInt(amount) < 100000000 ? "1%" : "0.5%"}, min. Rp 10.000):
                          </span>
                          <span className="font-semibold text-orange-600">{formatCurrency(fee)}</span>
                        </div>

                        <Separator />

                        <div className="flex justify-between text-base">
                          <span className="font-semibold text-blue-700">Total yang Harus Dibayar:</span>
                          <span className="font-bold text-blue-700">{formatCurrency(totalAmount)}</span>
                        </div>
                      </div>

                      {/* Fee Info */}
                      <div className="mt-3 p-3 bg-white rounded-lg border border-blue-200">
                        <div className="flex items-start space-x-2">
                          <TrendingUp className="h-4 w-4 text-blue-500 mt-0.5" />
                          <div className="text-xs text-gray-600">
                            <p className="font-medium text-blue-600 mb-1">Informasi Fee:</p>
                            <p>• Transaksi dibawah Rp 100.000.000 = 1%</p>
                            <p>• Transaksi diatas Rp 100.000.000 = 0.5%</p>
                            <p>• Fee minimum adalah Rp 10.000</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )}

              <Link href='/formrekber'>
                <Button className="bg-blue-500 hover:bg-blue-600 text-white h-14 text-base font-semibold rounded-lg w-full sm:w-[160px]">
                  Mulai sekarang
                </Button>
              </Link>
            </div>
 
          </div>
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
                  <div className="text-sm opacity-90">Aman & Terpercaya</div>
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
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-500 ${
                      currentStep >= 1 ? "bg-green-500 scale-100" : "bg-gray-300 scale-75"
                    }`}
                  >
                    <svg
                      className={`w-4 h-4 text-white transition-opacity duration-300 ${
                        currentStep >= 1 ? "opacity-100" : "opacity-0"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span
                    className={`text-sm transition-colors duration-300 ${
                      currentStep >= 1 ? "text-gray-700 font-medium" : "text-gray-400"
                    }`}
                  >
                    Pembeli dan penjual setuju dengan syarat
                  </span>
                </div>

                <div className="flex items-center space-x-3">
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-500 ${
                      currentStep >= 2 ? "bg-green-500 scale-100" : "bg-gray-300 scale-75"
                    }`}
                  >
                    <svg
                      className={`w-4 h-4 text-white transition-opacity duration-300 ${
                        currentStep >= 2 ? "opacity-100" : "opacity-0"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span
                    className={`text-sm transition-colors duration-300 ${
                      currentStep >= 2 ? "text-gray-700 font-medium" : "text-gray-400"
                    }`}
                  >
                    Pembeli membayar Rekber.com
                  </span>
                </div>

                <div className="flex items-center space-x-3">
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-500 ${
                      currentStep >= 3 ? "bg-green-500 scale-100" : "bg-gray-300 scale-75"
                    }`}
                  >
                    <svg
                      className={`w-4 h-4 text-white transition-opacity duration-300 ${
                        currentStep >= 3 ? "opacity-100" : "opacity-0"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span
                    className={`text-sm transition-colors duration-300 ${
                      currentStep >= 3 ? "text-gray-700 font-medium" : "text-gray-400"
                    }`}
                  >
                    Penjual mengirim {categories[currentCategory].label.toLowerCase()}
                  </span>
                </div>

                <div className="flex items-center space-x-3">
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-500 ${
                      currentStep >= 4 ? "bg-green-500 scale-100" : "bg-gray-300 scale-75"
                    }`}
                  >
                    <svg
                      className={`w-4 h-4 text-white transition-opacity duration-300 ${
                        currentStep >= 4 ? "opacity-100" : "opacity-0"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span
                    className={`text-sm transition-colors duration-300 ${
                      currentStep >= 4 ? "text-gray-700 font-medium" : "text-gray-400"
                    }`}
                  >
                    Pembeli memeriksa & menyetujui {categories[currentCategory].label.toLowerCase()}
                  </span>
                </div>

                <div className="flex items-center space-x-3">
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-500 ${
                      currentStep >= 5 ? "bg-green-500 scale-100" : "bg-gray-300 scale-75"
                    }`}
                  >
                    <svg
                      className={`w-4 h-4 text-white transition-opacity duration-300 ${
                        currentStep >= 5 ? "opacity-100" : "opacity-0"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span
                    className={`text-sm transition-colors duration-300 ${
                      currentStep >= 5 ? "text-gray-700 font-semibold" : "text-gray-400"
                    }`}
                  >
                    Rekber.com membayar penjual
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
