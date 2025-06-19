import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export default function HeroSection() {
  return (
    <section
      id='home'
      className='bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-20'
    >
      <div className='max-w-7xl mx-auto px-6'>
        <div className='grid lg:grid-cols-2 gap-16 items-center'>
          <div className='space-y-8'>
            <div className='space-y-6'>
              <h1 className='text-5xl lg:text-6xl font-bold text-gray-900 leading-tight'>
                Transaksi Aman
                <span className='block text-blue-600'>Tanpa Khawatir</span>
                <span className='block'>Penipuan</span>
              </h1>
              <p className='text-xl text-gray-600 leading-relaxed max-w-lg'>
                Rekber.com jembatan pembayaran antara pembeli & penjual yang
                terpercaya
              </p>
            </div>
            <Button
              size='lg'
              className='bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-medium transition-colors'
            >
              Mulai Sekarang
            </Button>
            <div className='grid grid-cols-3 gap-8 pt-8'>
              <div className='text-center'>
                <div className='text-3xl font-bold text-blue-600'>10K+</div>
                <div className='text-gray-600 text-sm'>Transaksi Aman</div>
              </div>
              <div className='text-center'>
                <div className='text-3xl font-bold text-blue-600'>5K+</div>
                <div className='text-gray-600 text-sm'>Pengguna Aktif</div>
              </div>
              <div className='text-center'>
                <div className='text-3xl font-bold text-blue-600'>99%</div>
                <div className='text-gray-600 text-sm'>Tingkat Kepuasan</div>
              </div>
            </div>
          </div>
          {/* Right Form */}
          <div className='flex justify-center lg:justify-end'>
            <div className='w-full max-w-md bg-white border border-gray-200 rounded-xl p-8'>
              <div className='mb-6'>
                <h3 className='text-2xl font-bold text-gray-900 text-center mb-2'>
                  Buat Rekening Bersama
                </h3>
                <p className='text-gray-600 text-center text-sm'>
                  Mulai transaksi aman Anda sekarang
                </p>
              </div>
              <div className='space-y-5'>
                <div className='space-y-2'>
                  <label className='text-sm font-medium text-gray-700 block'>
                    Status
                  </label>
                  <Select defaultValue='seller'>
                    <SelectTrigger className='h-12 w-full rounded-lg border border-gray-300 bg-gray-50 hover:bg-white focus:bg-white focus:border-blue-500 focus:ring-0 transition-colors'>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value='seller'>Saya Penjual</SelectItem>
                      <SelectItem value='buyer'>Saya Pembeli</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className='space-y-2'>
                  <label className='text-sm font-medium text-gray-700 block'>
                    Nominal
                  </label>
                  <Input
                    placeholder='Masukkan nominal'
                    className='h-12 rounded-lg border border-gray-300 bg-gray-50 hover:bg-white focus:bg-white focus:border-blue-500 focus:ring-0 transition-colors'
                  />
                </div>
                <div className='space-y-2'>
                  <label className='text-sm font-medium text-gray-700 block'>
                    Jenis Transaksi
                  </label>
                  <Select defaultValue='online'>
                    <SelectTrigger className='h-12 w-full rounded-lg border border-gray-300 bg-gray-50 hover:bg-white focus:bg-white focus:border-blue-500 focus:ring-0 transition-colors'>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value='online'>Jual Beli Online</SelectItem>
                      <SelectItem value='offline'>Jual Beli Offline</SelectItem>
                      <SelectItem value='service'>Jasa</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button className='w-full h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors mt-6'>
                  Lanjutkan
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
