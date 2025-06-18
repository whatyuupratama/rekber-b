// 'use client';

// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from '@/components/ui/select';
// import { Card, CardContent } from '@/components/ui/card';
// import {
//   Shield,
//   Zap,
//   Users,
//   CheckCircle,
//   Clock,
//   HeadphonesIcon,
//   UserPlus,
//   CreditCard,
//   ArrowRight,
// } from 'lucide-react';
// import LogoRekber from '@/app/components/atom/rekber';

// export default function RekberLandingPage() {
//   return (
//     <div className='min-h-screen bg-white'>
//       {/* Navbar */}
//       <nav className='bg-white/95 backdrop-blur-sm border-b border-gray-100 px-6 py-4 sticky top-0 z-50'>
//         <div className='max-w-7xl mx-auto flex items-center justify-between'>
//           <div className='flex items-center space-x-8'>
//             <LogoRekber />
//             <div className='hidden md:flex items-center space-x-8'>
//               <a
//                 href='#home'
//                 className='text-gray-700 hover:text-blue-600 font-medium transition-colors'
//               >
//                 Home
//               </a>
//               <a
//                 href='#features'
//                 className='text-gray-700 hover:text-blue-600 font-medium transition-colors'
//               >
//                 Features
//               </a>
//               <a
//                 href='#showcase'
//                 className='text-gray-700 hover:text-blue-600 font-medium transition-colors'
//               >
//                 Showcase
//               </a>
//               <a
//                 href='#pricing'
//                 className='text-gray-700 hover:text-blue-600 font-medium transition-colors'
//               >
//                 Pricing
//               </a>
//             </div>
//           </div>

//           <div className='flex items-center space-x-4'>
//             <Button
//               variant='ghost'
//               className='text-gray-700 hover:text-blue-600 font-medium'
//             >
//               Register
//             </Button>
//             <Button className='bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-medium shadow-lg hover:shadow-xl transition-all'>
//               Login
//             </Button>
//           </div>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <section
//         id='home'
//         className='bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-20'
//       >
//         <div className='max-w-7xl mx-auto px-6'>
//           <div className='grid lg:grid-cols-2 gap-16 items-center'>
//             {/* Left Content */}
//             <div className='space-y-8'>
//               <div className='space-y-6'>
//                 <h1 className='text-5xl lg:text-6xl font-bold text-gray-900 leading-tight'>
//                   Transaksi Aman
//                   <span className='block text-blue-600'>Tanpa Khawatir</span>
//                   <span className='block'>Penipuan</span>
//                 </h1>

//                 <p className='text-xl text-gray-600 leading-relaxed max-w-lg'>
//                   Rekber.com jembatan pembayaran antara pembeli & penjual yang
//                   terpercaya
//                 </p>
//               </div>

//               <Button
//                 size='lg'
//                 className='bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-medium transition-colors'
//               >
//                 Mulai Sekarang
//               </Button>

//               {/* Trust Indicators */}
//               <div className='grid grid-cols-3 gap-8 pt-8'>
//                 <div className='text-center'>
//                   <div className='text-3xl font-bold text-blue-600'>10K+</div>
//                   <div className='text-gray-600 text-sm'>Transaksi Aman</div>
//                 </div>
//                 <div className='text-center'>
//                   <div className='text-3xl font-bold text-blue-600'>5K+</div>
//                   <div className='text-gray-600 text-sm'>Pengguna Aktif</div>
//                 </div>
//                 <div className='text-center'>
//                   <div className='text-3xl font-bold text-blue-600'>99%</div>
//                   <div className='text-gray-600 text-sm'>Tingkat Kepuasan</div>
//                 </div>
//               </div>
//             </div>

//             {/* Right Form - Flat Design */}
//             <div className='flex justify-center lg:justify-end'>
//               <div className='w-full max-w-md bg-white border border-gray-200 rounded-xl p-8'>
//                 <div className='mb-6'>
//                   <h3 className='text-2xl font-bold text-gray-900 text-center mb-2'>
//                     Buat Rekening Bersama
//                   </h3>
//                   <p className='text-gray-600 text-center text-sm'>
//                     Mulai transaksi aman Anda sekarang
//                   </p>
//                 </div>

//                 <div className='space-y-5'>
//                   <div className='space-y-2'>
//                     <label className='text-sm font-medium text-gray-700 block'>
//                       Status
//                     </label>
//                     <Select defaultValue='seller'>
//                       <SelectTrigger className='h-12 w-full rounded-lg border border-gray-300 bg-gray-50 hover:bg-white focus:bg-white focus:border-blue-500 focus:ring-0 transition-colors'>
//                         <SelectValue />
//                       </SelectTrigger>
//                       <SelectContent>
//                         <SelectItem value='seller'>Saya Penjual</SelectItem>
//                         <SelectItem value='buyer'>Saya Pembeli</SelectItem>
//                       </SelectContent>
//                     </Select>
//                   </div>

//                   <div className='space-y-2'>
//                     <label className='text-sm font-medium text-gray-700 block'>
//                       Nominal
//                     </label>
//                     <Input
//                       placeholder='Masukkan nominal'
//                       className='h-12 rounded-lg border border-gray-300 bg-gray-50 hover:bg-white focus:bg-white focus:border-blue-500 focus:ring-0 transition-colors'
//                     />
//                   </div>

//                   <div className='space-y-2'>
//                     <label className='text-sm font-medium text-gray-700 block'>
//                       Jenis Transaksi
//                     </label>
//                     <Select defaultValue='online'>
//                       <SelectTrigger className='h-12 w-full rounded-lg border border-gray-300 bg-gray-50 hover:bg-white focus:bg-white focus:border-blue-500 focus:ring-0 transition-colors'>
//                         <SelectValue />
//                       </SelectTrigger>
//                       <SelectContent>
//                         <SelectItem value='online'>Jual Beli Online</SelectItem>
//                         <SelectItem value='offline'>
//                           Jual Beli Offline
//                         </SelectItem>
//                         <SelectItem value='service'>Jasa</SelectItem>
//                       </SelectContent>
//                     </Select>
//                   </div>

//                   <Button className='w-full h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors mt-6'>
//                     Lanjutkan
//                   </Button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section id='features' className='py-20 bg-white'>
//         <div className='max-w-7xl mx-auto px-6'>
//           <div className='text-center mb-16'>
//             <h2 className='text-4xl font-bold text-gray-900 mb-4'>
//               Mengapa Pilih Rekber?
//             </h2>
//             <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
//               Keamanan dan kepercayaan adalah prioritas utama kami dalam setiap
//               transaksi
//             </p>
//           </div>

//           <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
//             <Card className='bg-white border border-gray-100 shadow-lg rounded-2xl p-8 text-center hover:shadow-xl transition-all hover:-translate-y-1'>
//               <div className='w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6'>
//                 <Shield className='w-8 h-8 text-blue-600' />
//               </div>
//               <h3 className='text-xl font-bold text-gray-900 mb-4'>
//                 100% Aman
//               </h3>
//               <p className='text-gray-600'>
//                 Dana Anda dijamin aman dengan sistem escrow terpercaya dan
//                 terenkripsi
//               </p>
//             </Card>

//             <Card className='bg-white border border-gray-100 shadow-lg rounded-2xl p-8 text-center hover:shadow-xl transition-all hover:-translate-y-1'>
//               <div className='w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6'>
//                 <Zap className='w-8 h-8 text-green-600' />
//               </div>
//               <h3 className='text-xl font-bold text-gray-900 mb-4'>
//                 Proses Cepat
//               </h3>
//               <p className='text-gray-600'>
//                 Transaksi diproses dengan cepat dan efisien dalam hitungan menit
//               </p>
//             </Card>

//             <Card className='bg-white border border-gray-100 shadow-lg rounded-2xl p-8 text-center hover:shadow-xl transition-all hover:-translate-y-1'>
//               <div className='w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6'>
//                 <HeadphonesIcon className='w-8 h-8 text-purple-600' />
//               </div>
//               <h3 className='text-xl font-bold text-gray-900 mb-4'>
//                 Support 24/7
//               </h3>
//               <p className='text-gray-600'>
//                 Tim support profesional siap membantu Anda kapan saja dibutuhkan
//               </p>
//             </Card>

//             <Card className='bg-white border border-gray-100 shadow-lg rounded-2xl p-8 text-center hover:shadow-xl transition-all hover:-translate-y-1'>
//               <div className='w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-6'>
//                 <CheckCircle className='w-8 h-8 text-orange-600' />
//               </div>
//               <h3 className='text-xl font-bold text-gray-900 mb-4'>
//                 Terpercaya
//               </h3>
//               <p className='text-gray-600'>
//                 Dipercaya oleh ribuan pengguna dengan rating kepuasan tinggi
//               </p>
//             </Card>

//             <Card className='bg-white border border-gray-100 shadow-lg rounded-2xl p-8 text-center hover:shadow-xl transition-all hover:-translate-y-1'>
//               <div className='w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-6'>
//                 <Clock className='w-8 h-8 text-red-600' />
//               </div>
//               <h3 className='text-xl font-bold text-gray-900 mb-4'>
//                 Real-time
//               </h3>
//               <p className='text-gray-600'>
//                 Pantau status transaksi Anda secara real-time dengan notifikasi
//                 instant
//               </p>
//             </Card>

//             <Card className='bg-white border border-gray-100 shadow-lg rounded-2xl p-8 text-center hover:shadow-xl transition-all hover:-translate-y-1'>
//               <div className='w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-6'>
//                 <Users className='w-8 h-8 text-indigo-600' />
//               </div>
//               <h3 className='text-xl font-bold text-gray-900 mb-4'>
//                 Komunitas
//               </h3>
//               <p className='text-gray-600'>
//                 Bergabung dengan komunitas trader dan seller terpercaya di
//                 Indonesia
//               </p>
//             </Card>
//           </div>
//         </div>
//       </section>

//       {/* How It Works Section */}
//       <section className='py-20 bg-gray-50'>
//         <div className='max-w-7xl mx-auto px-6'>
//           <div className='text-center mb-16'>
//             <h2 className='text-4xl font-bold text-gray-900 mb-4'>
//               Cara Kerja Rekber
//             </h2>
//             <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
//               Proses sederhana dalam 4 langkah untuk transaksi yang aman
//             </p>
//           </div>

//           <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
//             <div className='text-center'>
//               <Card className='bg-white border-0 shadow-lg rounded-2xl p-8 mb-4 hover:shadow-xl transition-shadow'>
//                 <CardContent className='p-0'>
//                   <div className='w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6'>
//                     <UserPlus className='w-8 h-8 text-blue-600' />
//                   </div>
//                   <h3 className='text-lg font-bold text-gray-900 mb-3'>
//                     1. Daftar
//                   </h3>
//                   <p className='text-gray-600 text-sm'>
//                     Buat akun dan verifikasi identitas Anda dengan mudah
//                   </p>
//                 </CardContent>
//               </Card>
//               <div className='hidden lg:block'>
//                 <ArrowRight className='w-6 h-6 text-gray-400 mx-auto' />
//               </div>
//             </div>

//             <div className='text-center'>
//               <Card className='bg-white border-0 shadow-lg rounded-2xl p-8 mb-4 hover:shadow-xl transition-shadow'>
//                 <CardContent className='p-0'>
//                   <div className='w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6'>
//                     <CreditCard className='w-8 h-8 text-green-600' />
//                   </div>
//                   <h3 className='text-lg font-bold text-gray-900 mb-3'>
//                     2. Deposit
//                   </h3>
//                   <p className='text-gray-600 text-sm'>
//                     Pembeli melakukan deposit dana ke rekening bersama
//                   </p>
//                 </CardContent>
//               </Card>
//               <div className='hidden lg:block'>
//                 <ArrowRight className='w-6 h-6 text-gray-400 mx-auto' />
//               </div>
//             </div>

//             <div className='text-center'>
//               <Card className='bg-white border-0 shadow-lg rounded-2xl p-8 mb-4 hover:shadow-xl transition-shadow'>
//                 <CardContent className='p-0'>
//                   <div className='w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6'>
//                     <Shield className='w-8 h-8 text-purple-600' />
//                   </div>
//                   <h3 className='text-lg font-bold text-gray-900 mb-3'>
//                     3. Transaksi
//                   </h3>
//                   <p className='text-gray-600 text-sm'>
//                     Penjual mengirim barang, pembeli konfirmasi penerimaan
//                   </p>
//                 </CardContent>
//               </Card>
//               <div className='hidden lg:block'>
//                 <ArrowRight className='w-6 h-6 text-gray-400 mx-auto' />
//               </div>
//             </div>

//             <div className='text-center'>
//               <Card className='bg-white border-0 shadow-lg rounded-2xl p-8 mb-4 hover:shadow-xl transition-shadow'>
//                 <CardContent className='p-0'>
//                   <div className='w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-6'>
//                     <CheckCircle className='w-8 h-8 text-orange-600' />
//                   </div>
//                   <h3 className='text-lg font-bold text-gray-900 mb-3'>
//                     4. Selesai
//                   </h3>
//                   <p className='text-gray-600 text-sm'>
//                     Dana otomatis diteruskan ke penjual setelah konfirmasi
//                   </p>
//                 </CardContent>
//               </Card>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className='bg-gray-900 text-white py-16'>
//         <div className='max-w-7xl mx-auto px-6'>
//           <div className='grid md:grid-cols-4 gap-8 mb-12'>
//             <div className='space-y-4'>
//               <div className='flex items-center space-x-2'>
//                 <div className='w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg flex items-center justify-center'>
//                   <span className='text-white font-bold text-sm'>R</span>
//                 </div>
//                 <span className='text-2xl font-bold'>REKBER</span>
//               </div>
//               <p className='text-gray-400 leading-relaxed'>
//                 Platform rekening bersama terpercaya untuk transaksi online yang
//                 aman dan terjamin.
//               </p>
//             </div>

//             <div>
//               <h3 className='font-semibold mb-6 text-lg'>Layanan</h3>
//               <ul className='space-y-3 text-gray-400'>
//                 <li>
//                   <a href='#' className='hover:text-white transition-colors'>
//                     Rekening Bersama
//                   </a>
//                 </li>
//                 <li>
//                   <a href='#' className='hover:text-white transition-colors'>
//                     Escrow Service
//                   </a>
//                 </li>
//                 <li>
//                   <a href='#' className='hover:text-white transition-colors'>
//                     Payment Gateway
//                   </a>
//                 </li>
//                 <li>
//                   <a href='#' className='hover:text-white transition-colors'>
//                     API Integration
//                   </a>
//                 </li>
//               </ul>
//             </div>

//             <div>
//               <h3 className='font-semibold mb-6 text-lg'>Perusahaan</h3>
//               <ul className='space-y-3 text-gray-400'>
//                 <li>
//                   <a href='#' className='hover:text-white transition-colors'>
//                     Tentang Kami
//                   </a>
//                 </li>
//                 <li>
//                   <a href='#' className='hover:text-white transition-colors'>
//                     Karir
//                   </a>
//                 </li>
//                 <li>
//                   <a href='#' className='hover:text-white transition-colors'>
//                     Blog
//                   </a>
//                 </li>
//                 <li>
//                   <a href='#' className='hover:text-white transition-colors'>
//                     Press Kit
//                   </a>
//                 </li>
//               </ul>
//             </div>

//             <div>
//               <h3 className='font-semibold mb-6 text-lg'>Bantuan</h3>
//               <ul className='space-y-3 text-gray-400'>
//                 <li>
//                   <a href='#' className='hover:text-white transition-colors'>
//                     FAQ
//                   </a>
//                 </li>
//                 <li>
//                   <a href='#' className='hover:text-white transition-colors'>
//                     Kontak
//                   </a>
//                 </li>
//                 <li>
//                   <a href='#' className='hover:text-white transition-colors'>
//                     Support Center
//                   </a>
//                 </li>
//                 <li>
//                   <a href='#' className='hover:text-white transition-colors'>
//                     Syarat & Ketentuan
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </div>

//           <div className='border-t border-gray-800 pt-8 text-center text-gray-400'>
//             <p>
//               &copy; 2024 Rekber.com. All rights reserved. Made with ❤️ in
//               Indonesia
//             </p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }
