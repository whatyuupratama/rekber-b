import { Card, CardContent } from '@/components/ui/card';
import {
  UserPlus,
  CreditCard,
  Shield,
  CheckCircle,
  ArrowRight,
} from 'lucide-react';

export default function HowItWorksSection() {
  return (
    <section className='py-20 bg-gray-50'>
      <div className='max-w-7xl mx-auto px-6'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl font-bold text-gray-900 mb-4'>
            Cara Kerja Rekber
          </h2>
          <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
            Proses sederhana dalam 4 langkah untuk transaksi yang aman
          </p>
        </div>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
          <div className='text-center'>
            <Card className='bg-white border-0 shadow-lg rounded-2xl p-8 mb-4 hover:shadow-xl transition-shadow'>
              <CardContent className='p-0'>
                <div className='w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6'>
                  <UserPlus className='w-8 h-8 text-blue-600' />
                </div>
                <h3 className='text-lg font-bold text-gray-900 mb-3'>
                  1. Daftar
                </h3>
                <p className='text-gray-600 text-sm'>
                  Buat akun dan verifikasi identitas Anda dengan mudah
                </p>
              </CardContent>
            </Card>
            <div className='hidden lg:block'>
              <ArrowRight className='w-6 h-6 text-gray-400 mx-auto' />
            </div>
          </div>
          <div className='text-center'>
            <Card className='bg-white border-0 shadow-lg rounded-2xl p-8 mb-4 hover:shadow-xl transition-shadow'>
              <CardContent className='p-0'>
                <div className='w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6'>
                  <CreditCard className='w-8 h-8 text-green-600' />
                </div>
                <h3 className='text-lg font-bold text-gray-900 mb-3'>
                  2. Deposit
                </h3>
                <p className='text-gray-600 text-sm'>
                  Pembeli melakukan deposit dana ke rekening bersama
                </p>
              </CardContent>
            </Card>
            <div className='hidden lg:block'>
              <ArrowRight className='w-6 h-6 text-gray-400 mx-auto' />
            </div>
          </div>
          <div className='text-center'>
            <Card className='bg-white border-0 shadow-lg rounded-2xl p-8 mb-4 hover:shadow-xl transition-shadow'>
              <CardContent className='p-0'>
                <div className='w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6'>
                  <Shield className='w-8 h-8 text-purple-600' />
                </div>
                <h3 className='text-lg font-bold text-gray-900 mb-3'>
                  3. Transaksi
                </h3>
                <p className='text-gray-600 text-sm'>
                  Penjual mengirim barang, pembeli konfirmasi penerimaan
                </p>
              </CardContent>
            </Card>
            <div className='hidden lg:block'>
              <ArrowRight className='w-6 h-6 text-gray-400 mx-auto' />
            </div>
          </div>
          <div className='text-center'>
            <Card className='bg-white border-0 shadow-lg rounded-2xl p-8 mb-4 hover:shadow-xl transition-shadow'>
              <CardContent className='p-0'>
                <div className='w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-6'>
                  <CheckCircle className='w-8 h-8 text-orange-600' />
                </div>
                <h3 className='text-lg font-bold text-gray-900 mb-3'>
                  4. Selesai
                </h3>
                <p className='text-gray-600 text-sm'>
                  Dana otomatis diteruskan ke penjual setelah konfirmasi
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
