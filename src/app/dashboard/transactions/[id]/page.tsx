"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Copy, Send, MessageCircle, DollarSign, User, Clock, CheckCircle, AlertCircle } from "lucide-react"
import { useParams } from 'next/navigation';
 
interface ChatMessage {
  id: string
  sender: "buyer" | "seller" | "admin"
  message: string
  timestamp: string
}

export default function TransactionInterface() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<
    Array<{ id: number; sender: string; text: string; time: string }>
  >([]);
  const [chatMessages] = useState<ChatMessage[]>([
    {
      id: "1",
      sender: "admin",
      message: "Transaksi telah dimulai. Silakan lakukan pembayaran sesuai instruksi.",
      timestamp: "10:30",
    },
    {
      id: "2",
      sender: "buyer",
      message: "Sudah transfer, mohon dicek",
      timestamp: "10:45",
    },
  ])

  const [transactionProgress] = useState([
    {
      id: "1",
      title: "Transaksi Dibuat",
      description: "Transaksi TXN-002 telah dibuat oleh penjual",
      status: "completed",
      timestamp: "2024-01-22 09:30:00",
      icon: "create",
    },
    {
      id: "2",
      title: "Menunggu Pembayaran",
      description: "Pembeli diminta untuk melakukan pembayaran ke rekening escrow",
      status: "completed",
      timestamp: "2024-01-22 09:35:00",
      icon: "payment",
    },
    {
      id: "3",
      title: "Pembayaran Diterima",
      description: "Dana sebesar Rp 213.123,00 telah diterima di rekening escrow",
      status: "current",
      timestamp: "2024-01-22 10:45:00",
      icon: "received",
    },
    {
      id: "4",
      title: "Verifikasi Pembayaran",
      description: "Tim admin sedang memverifikasi pembayaran yang masuk",
      status: "pending",
      timestamp: "",
      icon: "verify",
    },
    {
      id: "5",
      title: "Penjual Mengirim Barang",
      description: "Penjual akan mengirimkan detail akun kepada pembeli",
      status: "pending",
      timestamp: "",
      icon: "delivery",
    },
    {
      id: "6",
      title: "Konfirmasi Penerimaan",
      description: "Pembeli mengkonfirmasi bahwa barang/akun telah diterima",
      status: "pending",
      timestamp: "",
      icon: "confirm",
    },
    {
      id: "7",
      title: "Dana Dicairkan",
      description: "Dana akan dicairkan ke rekening penjual setelah konfirmasi",
      status: "pending",
      timestamp: "",
      icon: "withdraw",
    },
  ])
  
  const params = useParams();
  const transactionId = (params?.id ?? '') as string;
  const transactionData = {
    id: transactionId,
    title: 'transaksi',
    buyer: 'ads@adasd',
    adminFee: 'Penjual',
    status: 'Rekber Belum diterima',
    amount: 213123.0,
    transactionFee: 47131.23,
    paymentMade: 0.0,
    received: 0.0,
    escrowPending: 0.0,
    escrowAmount: 213123.0,
  };
  const getProgressIcon = (iconType: string, status: string) => {
    const iconClass =
      status === "completed" ? "text-green-500" : status === "current" ? "text-blue-500" : "text-gray-400"

    switch (iconType) {
      case "create":
        return <User className={`h-4 w-4 ${iconClass}`} />
      case "payment":
        return <DollarSign className={`h-4 w-4 ${iconClass}`} />
      case "received":
        return <CheckCircle className={`h-4 w-4 ${iconClass}`} />
      case "verify":
        return <AlertCircle className={`h-4 w-4 ${iconClass}`} />
      case "delivery":
        return <Send className={`h-4 w-4 ${iconClass}`} />
      case "confirm":
        return <CheckCircle className={`h-4 w-4 ${iconClass}`} />
      case "withdraw":
        return <DollarSign className={`h-4 w-4 ${iconClass}`} />
      default:
        return <Clock className={`h-4 w-4 ${iconClass}`} />
    }
  }

  const getProgressBadge = (status: string) => {
    switch (status) {
      case "completed":
        return <Badge className="bg-green-100 text-green-800 text-xs">Selesai</Badge>
      case "current":
        return <Badge className="bg-blue-100 text-blue-800 text-xs">Sedang Proses</Badge>
      case "pending":
        return <Badge className="bg-gray-100 text-gray-600 text-xs">Menunggu</Badge>
      default:
        return <Badge className="bg-gray-100 text-gray-600 text-xs">Menunggu</Badge>
    }
  }
  

  const handleSendMessage = () => {
    if (message.trim()) {
      const newMessage = {
        id: Date.now(),
        sender: 'You',
        text: message,
        time: new Date().toLocaleTimeString('id-ID', {
          hour: '2-digit',
          minute: '2-digit',
        }),
      };
      setMessages([...messages, newMessage]);
      setMessage('');
    }
  };
  
    const handleKeyPress = (e: React.KeyboardEvent) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        handleSendMessage();
      }
    };
  
  const copyTransactionId = () => {
    navigator.clipboard.writeText(transactionData.id);
  };

  return (
    <div className="min-h-screen bg-gray-50"> 
      <div className="flex flex-col md:flex-row">
        {/* Main Content - Transaction Details (2/3 width) */}
        <div className="flex-1 p-6 md:flex-[2] pr-0">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-xl font-semibold text-blue-600">Selling Jual Beli Akun</CardTitle>
                  <p className="text-sm text-gray-600 mt-1">Detail transaksi escrow</p>
                </div>
                <Badge className="bg-yellow-100 text-yellow-800">Pending</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Transaction Number */}
              <div className='flex items-center justify-between p-4 bg-slate-50 rounded-lg border border-slate-200'>
                <div>
                  <p className='text-sm font-medium text-slate-700'>
                    Nomor Transaksi
                  </p>
                  <p className='text-lg font-mono font-bold text-slate-900'>
                    {transactionData.id}
                  </p>
                </div>
                <Button
                  onClick={copyTransactionId}
                  variant='outline'
                  size='sm'
                  className='border-slate-200 text-slate-600 hover:bg-slate-50'
                >
                  <Copy className='w-4 h-4' />
                </Button>
              </div>

              {/* Transaction Details */}
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="text-sm font-medium text-gray-700">Judul transaksi</label>
                  <p className="mt-1">transaksi</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">Pembeli</label>
                  <p className="mt-1">ads@adasd</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="text-sm font-medium text-gray-700">Biaya Admin</label>
                  <p className="mt-1">Penjual</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">Status</label>
                  <div className="mt-1">
                    <Badge className="bg-yellow-100 text-yellow-800">Rekber Belum diterima</Badge>
                  </div>
                </div>
              </div>

              <Separator />

              {/* Financial Details */}
              <div>
                <h3 className="text-lg font-semibold flex items-center space-x-2 mb-4">
                  <DollarSign className="h-5 w-5" />
                  <span>Rincian Keuangan</span>
                </h3>

                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Jumlah</span>
                    <span className="font-semibold">Rp 213.123,00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Fee Transaksi</span>
                    <span className="font-semibold">Rp 47.131,23</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Pembayaran yang Dibuat</span>
                    <span className="font-semibold">Rp 0,00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Di Danai</span>
                    <span className="font-semibold">Rp 0,00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Rekber belum di danai</span>
                    <span className="font-semibold">Rp 0,00</span>
                  </div>

                  <Separator />

                  <div className="flex justify-between text-lg font-bold text-blue-600">
                    <span>Dana yang Akan Ditahan Pihak Rekber</span>
                    <span>Rp 213.123,00</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <Button className="w-full bg-red-600 hover:bg-red-700 text-white">✕ Batalkan Transaksi</Button>
            </CardContent>
          </Card>
        </div>

        {/* Right Sidebar - Chat and History (1/3 width) */}
        <div className="w-full md:w-1/3 p-6 space-y-6">
          {/* Transaction Progress */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center space-x-2">
                <Clock className="h-5 w-5" />
                <span>Progress Transaksi</span>
              </CardTitle>
              <p className="text-sm text-gray-600">Timeline dan status transaksi TXN-002</p>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-80">
                <div className="space-y-4">
                  {transactionProgress.map((step, index) => (
                    <div key={step.id} className="relative">
                      {/* Timeline line */}
                      {index < transactionProgress.length - 1 && (
                        <div className="absolute left-5 top-8 w-0.5 h-16 bg-gray-200"></div>
                      )}

                      <div className="flex items-start space-x-3">
                        {/* Icon */}
                        <div
                          className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center border-2 ${
                            step.status === "completed"
                              ? "bg-green-50 border-green-200"
                              : step.status === "current"
                                ? "bg-blue-50 border-blue-200"
                                : "bg-gray-50 border-gray-200"
                          }`}
                        >
                          {getProgressIcon(step.icon, step.status)}
                        </div>

                        {/* Content */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between mb-1">
                            <h4
                              className={`font-medium text-sm ${
                                step.status === "current" ? "text-blue-600" : "text-gray-900"
                              }`}
                            >
                              {step.title}
                            </h4>
                            {getProgressBadge(step.status)}
                          </div>

                          <p className="text-xs text-gray-600 mb-2">{step.description}</p>

                          {step.timestamp && (
                            <p className="text-xs text-gray-500">
                              {new Date(step.timestamp).toLocaleString("id-ID", {
                                day: "2-digit",
                                month: "2-digit",
                                year: "numeric",
                                hour: "2-digit",
                                minute: "2-digit",
                              })}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
          
          {/* Chat Section */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center space-x-2">
                <MessageCircle className="h-5 w-5" />
                <span>Percakapan Kedua Belah Pihak</span>
              </CardTitle> 
            </CardHeader>
            <CardContent>
              <div className="space-y-4"> 
                 <ScrollArea className='flex-1 px-1 h-50'>
                  {messages.length === 0 ? (
                    <div className='flex flex-col items-center justify-center h-full text-center py-2'> 
                      <div className='w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-4'>
                        <MessageCircle className='w-8 h-8 text-slate-400' />
                      </div>
                      <h3 className='text-lg font-semibold text-slate-700 mb-2'>
                        Belum ada percakapan
                      </h3>
                      <p className='text-slate-500 text-sm'>
                        Belum ada percakapan kedua belah pihak. Mulai komunikasi
                        dengan mengirim pesan.
                      </p>
                    </div>
                  ) : (
                    <div className='space-y-4 py-4'>
                      {messages.map((msg) => (
                        <div key={msg.id} className='flex justify-end'>
                          <div className='bg-blue-600 text-white rounded-lg px-4 py-2 max-w-xs'>
                            <p className='text-sm'>{msg.text}</p>
                            <p className='text-xs text-blue-100 mt-1'>
                              {msg.time}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </ScrollArea>

                {chatMessages.length === 0 && (
                  <div className="text-center py-8">
                    <MessageCircle className="h-12 w-12 text-gray-300 mx-auto mb-2" />
                    <p className="text-gray-500">Belum ada percakapan</p>
                    <p className="text-sm text-gray-400">Mulai komunikasi dengan mengirim pesan.</p>
                  </div>
                )}

              <div className='pt-2 border-t border-slate-200'>
                  <div className='flex space-x-3'>
                    <Input
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder='Send Message'
                      className='flex-1 h-12 border-slate-200 focus:border-blue-500 focus:ring-blue-500/20 bg-white/80'
                    />
                    <Button
                      onClick={handleSendMessage}
                      disabled={!message.trim()}
                      className='bg-blue-600 hover:bg-blue-700 text-white px-4 h-12'
                    >
                      <Send className='w-4 h-4' />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

        </div>
      </div>
    </div>
  )
}
