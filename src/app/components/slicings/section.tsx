'use client';

import { useState, useEffect } from 'react';
import { ChevronDown, TrendingUp, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import BtnCustom from '../atom/btnCustom';
export default function RekberLanding() {
  const [chartData, setChartData] = useState<number[]>([
    60, 80, 45, 90, 70, 55,
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setChartData((prev) => prev.map(() => Math.random() * 80 + 20));
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='overflow-hidden'>
      <main className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:py-12'>
        <div className='grid lg:grid-cols-2 gap-10 lg:gap-16 items-start'>
          <div className='lg:pt-8 space-y-6 text-start lg:text-left'>
            <h3 className='text-4xl sm:text-4xl lg:text-6xl font-bold text-gray-900 leading-tight'>
              Transaksi Aman & Mudah Dengan{' '}
              <span className='text-blue-600'>Rekber.com</span>
              <br />
            </h3>
            <p className='text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-lg mx-auto lg:mx-0'>
              Rekber.com adalah solusi transaksi online terpercaya dengan sistem
              rekening bersama (escrow) untuk keamanan maksimal bagi pembeli dan
              penjual
            </p>
            <BtnCustom href='/auth/register'>Mulai Sekarang</BtnCustom>
          </div>
          <div className='relative mt-8 lg:mt-1 justify-self-center lg:justify-self-end w-full max-w-xs sm:max-w-sm lg:max-w-sm'>
            <div className='absolute -top-3 md:-top-7 -left-6 md:-left-8 w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl shadow-lg flex items-center justify-center transform rotate-12 animate-bounce'>
              <TrendingUp className='w-8 h-8 text-white' />
            </div>
            <div className='absolute -left-16 top-1/2 transform -translate-y-1/2 hidden lg:block'>
              <div className='flex items-end space-x-1 h-20'>
                {chartData.map((height, index) => (
                  <div
                    key={index}
                    className={`w-2 rounded-full transition-all duration-1000 ${
                      index % 3 === 0
                        ? 'bg-red-400'
                        : index % 3 === 1
                        ? 'bg-blue-500'
                        : 'bg-purple-400'
                    }`}
                    style={{
                      height: `${height}%`,
                      transitionDelay: `${index * 100}ms`,
                    }}
                  />
                ))}
              </div>
            </div>
            <Card className='bg-white/90 backdrop-blur-sm border-0 rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-3xl hover:scale-[1.02] w-full max-w-full sm:max-w-sm mx-auto lg:mx-0'>
              <CardContent className='p-4 sm:p-6 lg:p-8 space-y-6'>
                <div className='space-y-2'>
                  <div className='flex items-center space-x-2'>
                    <Zap className='w-5 h-5 text-blue-600' />
                    <h3 className='text-xl lg:text-2xl font-bold text-gray-900'>
                      Buat Rekening Bersama
                    </h3>
                  </div>
                  <p className='text-gray-600 text-sm'>
                    Transaksi aman & mudah
                  </p>
                </div>
                <div className='space-y-3'>
                  <div className='space-y-2'>
                    <div className='relative'>
                      <select
                        className='w-full h-10 px-3 text-sm rounded-xl border border-gray-200 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white'
                        defaultValue=''
                      >
                        <option value='jual-beli'>Saya Penjual</option>
                        <option value='investasi'>Saya Pembeli</option>
                      </select>
                      <div className='absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none'>
                        <ChevronDown className='w-4 h-4 text-gray-400' />
                      </div>
                    </div>
                  </div>
                  <div className='space-y-2'>
                    <label className='text-xs font-medium text-gray-600'>
                      Nominal
                    </label>
                    <div className='relative'>
                      <input
                        type='text'
                        id='nominal'
                        name='nominal'
                        placeholder='Masukkan nominal'
                        className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                      />
                    </div>
                  </div>
                  <div className='space-y-2'>
                    <label className='text-xs font-medium text-gray-600'>
                      Jenis Transaksi
                    </label>
                    <div className='relative'>
                      <select
                        className='w-full h-10 px-3 text-sm rounded-xl border border-gray-200 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white'
                        defaultValue=''
                      >
                        <option value='' disabled>
                          Pilih jenis transaksi
                        </option>
                        <option value='jual-beli'>Jual Beli Online</option>
                        <option value='investasi'>Investasi Bersama</option>
                        <option value='freelance'>Proyek Freelance</option>
                      </select>
                      <div className='absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none'>
                        <ChevronDown className='w-4 h-4 text-gray-400' />
                      </div>
                    </div>
                  </div>
                  <Button className='w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white h-10 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl'>
                    Lanjutkan
                  </Button>
                </div>
              </CardContent>
            </Card>
            <div className='absolute -bottom-8 -right-8 w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl shadow-lg items-center justify-center transform -rotate-12 animate-pulse hidden lg:flex'>
              <span className='text-white font-bold text-sm'>99.9%</span>
            </div>
            <div className='absolute -bottom-6 left-1/2 transform -translate-x-1/2'>
              <div className='bg-white/90 backdrop-blur-sm px-2 md:px-4 py-1 md:py-2 rounded-full shadow-lg border border-gray-100'>
                <span className='text-[10px] md:text-xs text-gray-600 whitespace-nowrap'>
                  Dipercaya 10,000+ pengguna
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
