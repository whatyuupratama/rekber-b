'use client';

import type React from 'react';
import { useState } from 'react';
import {
  RefreshCw,
  Send,
  MessageCircle,
  CreditCard,
  Clock,
  DollarSign,
  X,
  Copy,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';
import Footer from '@/app/components/slicings/footer';
import { useParams } from 'next/navigation';
import { Header } from '@/app/components/dashboardui/atom/header';
import { useRouter } from 'next/navigation';
export default function TransactionDetails() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<
    Array<{ id: number; sender: string; text: string; time: string }>
  >([]);
  const params = useParams();
  const router = useRouter();
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

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 2,
    }).format(amount);
  };

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
  const handleProfileClick = () => {
    router.push('/dashboard/profile');
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
    <div className='min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-white'>
      <Header onProfileClick={handleProfileClick} />
      <main className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
          <Card className='shadow-xl border-0 bg-white/70 backdrop-blur-sm'>
            <CardHeader className='pb-6'>
              <div className='flex items-center justify-between'>
                <div className='flex items-center space-x-3'>
                  <div className='w-10 h-10 bg-green-100 rounded-full flex items-center justify-center'>
                    <CreditCard className='w-5 h-5 text-green-600' />
                  </div>
                  <div>
                    <CardTitle className='text-xl font-bold text-slate-800'>
                      Selling Jual Beli Akun
                    </CardTitle>
                    <CardDescription className='text-slate-600 mt-1'>
                      Detail transaksi escrow
                    </CardDescription>
                  </div>
                </div>
                <Badge
                  variant='secondary'
                  className='bg-amber-100 text-amber-800 border-amber-200 px-3 py-1 font-medium'
                >
                  <Clock className='w-3 h-3 mr-1' />
                  Pending
                </Badge>
              </div>
            </CardHeader>

            <CardContent className='space-y-6'>
              {/* Transaction ID */}
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

              {/* Basic Info */}
              <div className='grid grid-cols-2 gap-4'>
                <div className='space-y-2'>
                  <p className='text-sm font-medium text-slate-700'>Judul</p>
                  <p className='text-slate-900 font-medium'>
                    {transactionData.title}
                  </p>
                </div>
                <div className='space-y-2'>
                  <p className='text-sm font-medium text-slate-700'>Pembeli</p>
                  <p className='text-slate-900 font-medium'>
                    {transactionData.buyer}
                  </p>
                </div>
              </div>

              <div className='grid grid-cols-2 gap-4'>
                <div className='space-y-2'>
                  <p className='text-sm font-medium text-slate-700'>
                    Biaya Admin
                  </p>
                  <Badge variant='outline' className='w-fit'>
                    {transactionData.adminFee}
                  </Badge>
                </div>
                <div className='space-y-2'>
                  <p className='text-sm font-medium text-slate-700'>Status</p>
                  <Badge
                    variant='secondary'
                    className='bg-amber-100 text-amber-800 border-amber-200 w-fit'
                  >
                    {transactionData.status}
                  </Badge>
                </div>
              </div>

              <Separator />

              {/* Financial Details */}
              <div className='space-y-4'>
                <h3 className='font-semibold text-slate-800 flex items-center'>
                  <DollarSign className='w-4 h-4 mr-2' />
                  Rincian Keuangan
                </h3>

                <div className='space-y-3'>
                  <div className='flex justify-between items-center'>
                    <span className='text-slate-600'>Jumlah</span>
                    <span className='font-semibold text-slate-900'>
                      {formatCurrency(transactionData.amount)}
                    </span>
                  </div>
                  <div className='flex justify-between items-center'>
                    <span className='text-slate-600'>Fee Transaksi</span>
                    <span className='font-semibold text-slate-900'>
                      {formatCurrency(transactionData.transactionFee)}
                    </span>
                  </div>
                  <div className='flex justify-between items-center'>
                    <span className='text-slate-600'>
                      Pembayaran yang Dibuat
                    </span>
                    <span className='font-semibold text-slate-900'>
                      {formatCurrency(transactionData.paymentMade)}
                    </span>
                  </div>
                  <div className='flex justify-between items-center'>
                    <span className='text-slate-600'>Di Danai</span>
                    <span className='font-semibold text-slate-900'>
                      {formatCurrency(transactionData.received)}
                    </span>
                  </div>
                  <div className='flex justify-between items-center'>
                    <span className='text-slate-600'>
                      Rekber belum di danai
                    </span>
                    <span className='font-semibold text-slate-900'>
                      {formatCurrency(transactionData.escrowPending)}
                    </span>
                  </div>

                  <Separator />

                  <div className='flex justify-between items-center p-3 bg-blue-50 rounded-lg'>
                    <span className='font-semibold text-blue-900'>
                      Dana yang Akan Ditahan Pihak Rekber
                    </span>
                    <span className='font-bold text-blue-900 text-lg'>
                      {formatCurrency(transactionData.escrowAmount)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Cancel Button */}
              <div className='pt-4'>
                <Button variant='destructive' className='w-full'>
                  <X className='w-4 h-4 mr-2' />
                  Batalkan Transaksi
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Chat Section */}
          <Card className='shadow-xl border-0 bg-white/70 backdrop-blur-sm'>
            <CardHeader className='pb-4'>
              <div className='flex items-center justify-between'>
                <div className='flex items-center space-x-3'>
                  <div className='w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center'>
                    <MessageCircle className='w-5 h-5 text-blue-600' />
                  </div>
                  <div>
                    <CardTitle className='text-xl font-bold text-slate-800'>
                      Percakapan Kedua Belah Pihak
                    </CardTitle>
                    <CardDescription className='text-slate-600 mt-1'>
                      Komunikasi dengan pihak lain
                    </CardDescription>
                  </div>
                </div>
                <Button
                  variant='outline'
                  size='sm'
                  className='border-slate-200 text-slate-600 hover:bg-slate-50'
                >
                  <RefreshCw className='w-4 h-4' />
                </Button>
              </div>
            </CardHeader>

            <CardContent className='p-0'>
              {/* Messages Area */}
              <div className='h-96 flex flex-col'>
                <ScrollArea className='flex-1 px-6'>
                  {messages.length === 0 ? (
                    <div className='flex flex-col items-center justify-center h-full text-center py-12'>
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

                {/* Message Input */}
                <div className='p-6 border-t border-slate-200'>
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
                      className='bg-green-600 hover:bg-green-700 text-white px-4 h-12'
                    >
                      <Send className='w-4 h-4' />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
