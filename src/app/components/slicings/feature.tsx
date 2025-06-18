import { Card } from '@/components/ui/card';
import {
  Shield,
  Zap,
  HeadphonesIcon,
  CheckCircle,
  Clock,
  Users,
} from 'lucide-react';

export default function FeaturesSection() {
  return (
    <section id='features' className='py-20 bg-white'>
      <div className='max-w-7xl mx-auto px-6'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl font-bold text-gray-900 mb-4'>
            Mengapa Pilih Rekber?
          </h2>
          <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
            Keamanan dan kepercayaan adalah prioritas utama kami dalam setiap
            transaksi
          </p>
        </div>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          <Card className='bg-white border border-gray-100 shadow-lg rounded-2xl p-8 text-center hover:shadow-xl transition-all hover:-translate-y-1'>
            <div className='w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6'>
              <Shield className='w-8 h-8 text-blue-600' />
            </div>
            <h3 className='text-xl font-bold text-gray-900 mb-4'>100% Aman</h3>
            <p className='text-gray-600'>
              Dana Anda dijamin aman dengan sistem escrow terpercaya dan
              terenkripsi
            </p>
          </Card>
          <Card className='bg-white border border-gray-100 shadow-lg rounded-2xl p-8 text-center hover:shadow-xl transition-all hover:-translate-y-1'>
            <div className='w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6'>
              <Zap className='w-8 h-8 text-green-600' />
            </div>
            <h3 className='text-xl font-bold text-gray-900 mb-4'>
              Proses Cepat
            </h3>
            <p className='text-gray-600'>
              Transaksi diproses dengan cepat dan efisien dalam hitungan menit
            </p>
          </Card>
          <Card className='bg-white border border-gray-100 shadow-lg rounded-2xl p-8 text-center hover:shadow-xl transition-all hover:-translate-y-1'>
            <div className='w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6'>
              <HeadphonesIcon className='w-8 h-8 text-purple-600' />
            </div>
            <h3 className='text-xl font-bold text-gray-900 mb-4'>
              Support 24/7
            </h3>
            <p className='text-gray-600'>
              Tim support profesional siap membantu Anda kapan saja dibutuhkan
            </p>
          </Card>
          <Card className='bg-white border border-gray-100 shadow-lg rounded-2xl p-8 text-center hover:shadow-xl transition-all hover:-translate-y-1'>
            <div className='w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-6'>
              <CheckCircle className='w-8 h-8 text-orange-600' />
            </div>
            <h3 className='text-xl font-bold text-gray-900 mb-4'>Terpercaya</h3>
            <p className='text-gray-600'>
              Dipercaya oleh ribuan pengguna dengan rating kepuasan tinggi
            </p>
          </Card>
          <Card className='bg-white border border-gray-100 shadow-lg rounded-2xl p-8 text-center hover:shadow-xl transition-all hover:-translate-y-1'>
            <div className='w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-6'>
              <Clock className='w-8 h-8 text-red-600' />
            </div>
            <h3 className='text-xl font-bold text-gray-900 mb-4'>Real-time</h3>
            <p className='text-gray-600'>
              Pantau status transaksi Anda secara real-time dengan notifikasi
              instant
            </p>
          </Card>
          <Card className='bg-white border border-gray-100 shadow-lg rounded-2xl p-8 text-center hover:shadow-xl transition-all hover:-translate-y-1'>
            <div className='w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-6'>
              <Users className='w-8 h-8 text-indigo-600' />
            </div>
            <h3 className='text-xl font-bold text-gray-900 mb-4'>Komunitas</h3>
            <p className='text-gray-600'>
              Bergabung dengan komunitas trader dan seller terpercaya di
              Indonesia
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}
