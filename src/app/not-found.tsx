'use client';

import Link from 'next/link';
import { AlertTriangle } from 'lucide-react';

export default function NotFound() {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4'>
      <AlertTriangle className='text-yellow-500 mb-6' size={48} />
      <h1 className='text-xl sm:text-2xl font-bold text-gray-800 mb-2 text-center'>
        Segera Hadir
      </h1>
      <p className='text-gray-500 mb-6 text-center text-sm sm:text-base max-w-md'>
        <span className='font-semibold text-blue-500'>rekber.com</span> masih
        dalam proses pengembangan, sehingga mungkin belum dapat diakses halaman
        ini. silakan kembali lagi nanti.
      </p>
      <Link
        href='/'
        className='inline-block px-5 py-2 rounded-full font-medium bg-blue-50 text-blue-700 border border-blue-100 text-sm sm:text-base'
        style={{ backgroundColor: '#f0f6ff' }}
      >
        Kembali ke Beranda
      </Link>
    </div>
  );
}
