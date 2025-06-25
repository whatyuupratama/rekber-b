"use client"

import type React from "react"

import { useState } from "react"
import { Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useRouter } from 'next/navigation';
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card" 
import NavBar from '../components/slicings/navbar';
import Footer from '../components/slicings/footer';
export default function RekberForm() {
  const [formData, setFormData] = useState({
    buyerEmail: "",
    title: "",
    amount: "",
    transactionFee: "",
    adminFee: "penjual",
    description: "",
  })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    const router = useRouter(); 
    alert("AAS");
    router.push('/dashboard/detail-transaksi'); 
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-white">
    <NavBar /> 

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Card className="shadow-xl border-0 bg-white/70 backdrop-blur-sm">
          <CardHeader className="pb-8">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <Info className="w-5 h-5 text-blue-600" />
              </div>
              <CardTitle className="text-2xl font-bold text-slate-800">Form Rekber</CardTitle>
            </div>
            <CardDescription className="text-slate-600 text-base leading-relaxed">
              Pastikan semua informasi yang Anda masukkan akurat untuk memproses transaksi dengan aman.
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Row 1: Email and Title */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <Label htmlFor="buyerEmail" className="text-sm font-semibold text-slate-700">
                    Buyers Email <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="buyerEmail"
                    type="email"
                    placeholder="Enter email address"
                    value={formData.buyerEmail}
                    onChange={(e) => setFormData({ ...formData, buyerEmail: e.target.value })}
                    className="h-12 border-slate-200 focus:border-blue-500 focus:ring-blue-500/20 bg-white/80" 
                  />
                </div>
                <div className="space-y-3">
                  <Label htmlFor="title" className="text-sm font-semibold text-slate-700">
                    Judul <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="title"
                    type="text"
                    placeholder="Enter transaction title"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="h-12 border-slate-200 focus:border-blue-500 focus:ring-blue-500/20 bg-white/80" 
                  />
                </div>
              </div>

              {/* Row 2: Amount and Transaction Fee */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <Label htmlFor="amount" className="text-sm font-semibold text-slate-700">
                    Jumlah
                  </Label>
                  <div className="relative">
                    <Input
                      id="amount"
                      type="text"
                      placeholder="0"
                      value={formData.amount}
                      onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                      className="h-12 pr-12 border-slate-200 focus:border-blue-500 focus:ring-blue-500/20 bg-white/80"
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                      <span className="text-slate-500 text-sm font-medium">IDR</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <Label htmlFor="transactionFee" className="text-sm font-semibold text-slate-700">
                    Fee Transaksi
                  </Label>
                  <div className="relative">
                    <Input
                      id="transactionFee"
                      type="text"
                      placeholder="0"
                      value={formData.transactionFee}
                      onChange={(e) => setFormData({ ...formData, transactionFee: e.target.value })}
                      className="h-12 pr-12 border-slate-200 focus:border-blue-500 focus:ring-blue-500/20 bg-white/80"
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                      <span className="text-slate-500 text-sm font-medium">IDR</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Row 3: Admin Fee and Description */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <Label htmlFor="adminFee" className="text-sm font-semibold text-slate-700">
                    Biaya Admin <span className="text-red-500">*</span>
                  </Label>
                  <Select
                    value={formData.adminFee}
                    onValueChange={(value) => setFormData({ ...formData, adminFee: value })}
                  >
                    <SelectTrigger className="w-full h-12 border-slate-200 focus:border-blue-500 focus:ring-blue-500/20 bg-white/80">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="penjual">Penjual</SelectItem>
                      <SelectItem value="pembeli">Pembeli</SelectItem>
                      <SelectItem value="split">Split 50/50</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-3">
                  <Label htmlFor="description" className="text-sm font-semibold text-slate-700">
                    Keterangan
                  </Label>
                  <Textarea
                    id="description"
                    placeholder="Enter transaction details..."
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="min-h-[120px] border-slate-200 focus:border-blue-500 focus:ring-blue-500/20 bg-white/80 resize-none"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex justify-end pt-6">
                <Button
                  type="submit"
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 h-12 font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
                >
                  Submit Transaction
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </main>
      <Footer /> 
    </div>
  )
}
