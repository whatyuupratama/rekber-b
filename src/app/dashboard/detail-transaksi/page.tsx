import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"  
import { Send, MessageCircle } from "lucide-react"
import Link from 'next/link';
export default function SimpleCardForm() {
  return (
    <div className="min-h-screen bg-gray-50/30">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Simple Header */}
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-semibold text-gray-800 mb-2">Detail Transaksi</h1>
          <p className="text-gray-500 text-sm">SX1KFNZMIV15</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-4">
            {/* Transaction Info */}
            <Card className="border-0 shadow-sm">
              <CardContent className="p-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Judul</p>
                    <p className="font-medium">srfghikl</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Status</p>
                    <div variant="outline" className="text-orange-600 border-orange-200 bg-orange-50">
                      Menunggu Konfirmasi
                    </div>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Pembeli</p>
                    <p className="font-medium">okok@RFGH</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Biaya Admin</p>
                    <div variant="secondary" className="bg-blue-50 text-blue-700">
                      Penjual
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Financial Details */}
            <Card className="border-0 shadow-sm">
              <CardContent className="p-6">
                <h3 className="font-medium mb-4 text-gray-800">Rincian Keuangan</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                    <span className="text-sm text-gray-600">Jumlah Transaksi</span>
                    <span className="font-semibold text-green-600">Rp 90,000.00</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                    <span className="text-sm text-gray-600">Fee Transaksi</span>
                    <span className="text-sm">Rp 900.00</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                    <span className="text-sm text-gray-600">Dana Ditahan</span>
                    <span className="font-semibold text-blue-600">Rp 90,000.00</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Link href="/">
            <Button
              variant="outline"
              className="text-red-600 border-red-200 hover:bg-red-50"
            >
              Batalkan Transaksi
            </Button>
          </Link>
          </div>

          {/* Chat Sidebar */}
          <div>
            <Card className="border-0 shadow-sm">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center gap-2">
                  <MessageCircle className="h-5 w-5 text-blue-500" />
                  Chat
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                <div className="text-center py-8 text-gray-500">
                  <p className="text-sm">Belum ada percakapan</p>
                </div>
                <div className="space-y-3"> 
                  <Button size="sm" className="w-full bg-blue-500 hover:bg-blue-600">
                    <Send className="h-4 w-4 mr-2" />
                    Kirim
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
