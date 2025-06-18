import { Header } from './atom/header';
import { ProcessCard } from './atom/procescard';
import {
  AgreementIllustration,
  PaymentIllustration,
  FulfillmentIllustration,
} from './atom/ilustrasi';

export default function Home() {
  return (
    <div className='min-h-screen bg-blue-50 flex'>
      <div className='flex-1'>
        <Header />

        <main className='p-8'>
          <div className='max-w-6xl mx-auto'>
            <h1 className='text-3xl font-semibold text-blue-900 mb-12 text-center'>
              Mulai Perjanjian Rekber Pertamamu
            </h1>

            <div className='grid md:grid-cols-3 gap-8'>
              <ProcessCard
                title='Buat Perjanjian'
                description='Buat proposal rekber bersama rekan bisnis Anda untuk transaksi yang lebih aman.'
                illustration={<AgreementIllustration />}
                learnMoreHref='#agreement'
              />

              <ProcessCard
                title='Pembayaran'
                description='Dapatkan notifikasi saat pembayaran telah dilakukan ke rekening bersama.'
                illustration={<PaymentIllustration />}
                learnMoreHref='#payment'
              />

              <ProcessCard
                title='Penyelesaian'
                description='Dana akan otomatis dicairkan setelah dokumen seperti resi pengiriman diunggah.'
                illustration={<FulfillmentIllustration />}
                learnMoreHref='#fulfillment'
              />
            </div>

            {/* Additional Info Section */}
            <div className='mt-16 bg-white rounded-lg border border-blue-200 p-8'>
              <div className='text-center'>
                <h2 className='text-2xl font-semibold text-blue-900 mb-4'>
                  Layanan Rekber Aman & Terpercaya
                </h2>
                <p className='text-blue-700 max-w-2xl mx-auto'>
                  Platform kami menyediakan layanan rekber yang aman,
                  transparan, dan efisien untuk berbagai kebutuhan transaksi.
                  Lindungi transaksi Anda dengan perantara yang profesional dan
                  terpercaya.
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
