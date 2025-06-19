import Rekber from '@/app/components/atom/rekber';
export default function Footer() {
  return (
    <footer className='bg-gray-900 text-white py-16'>
      <div className='max-w-7xl mx-auto px-6'>
        <div className='grid md:grid-cols-4 gap-8 mb-12'>
          <div className='space-y-4'>
            <Rekber />
            <p className='text-gray-400 leading-relaxed'>
              Platform rekening bersama terpercaya untuk transaksi online yang
              aman dan terjamin.
            </p>
          </div>
          <div>
            <h3 className='font-semibold mb-6 text-lg'>Layanan</h3>
            <ul className='space-y-3 text-gray-400'>
              <li>
                <a href='#' className='hover:text-white transition-colors'>
                  Rekening Bersama
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-white transition-colors'>
                  Escrow Service
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-white transition-colors'>
                  Payment Gateway
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-white transition-colors'>
                  API Integration
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className='font-semibold mb-6 text-lg'>Perusahaan</h3>
            <ul className='space-y-3 text-gray-400'>
              <li>
                <a href='#' className='hover:text-white transition-colors'>
                  Tentang Kami
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-white transition-colors'>
                  Karir
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-white transition-colors'>
                  Blog
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-white transition-colors'>
                  Press Kit
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className='font-semibold mb-6 text-lg'>Bantuan</h3>
            <ul className='space-y-3 text-gray-400'>
              <li>
                <a href='#' className='hover:text-white transition-colors'>
                  FAQ
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-white transition-colors'>
                  Kontak
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-white transition-colors'>
                  Support Center
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-white transition-colors'>
                  Syarat & Ketentuan
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className='border-t border-gray-800 pt-8 text-center text-gray-400'>
          <p>
            &copy; 2024 Rekber.com. All rights reserved. Made with ❤️ in
            Indonesia
          </p>
        </div>
      </div>
    </footer>
  );
}
