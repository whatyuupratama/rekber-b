'use client';

import { useState, useEffect } from 'react';
import {
  BarChart3,
  Check,
  ChevronDown,
  TrendingUp,
  Shield,
  Zap,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function RekberLanding() {
  //   const [isHovered, setIsHovered] = useState<boolean>(false);
  const [animatedValue, setAnimatedValue] = useState<number>(1000000);
  const [chartData, setChartData] = useState<number[]>([
    60, 80, 45, 90, 70, 55,
  ]);

  // Animate transaction value
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimatedValue((prev) => {
        const change = (Math.random() - 0.5) * 100000;
        const newValue = Math.max(500000, Math.min(2000000, prev + change));
        return Math.round(newValue / 10000) * 10000;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Animate chart data
  useEffect(() => {
    const interval = setInterval(() => {
      setChartData((prev) => prev.map(() => Math.random() * 80 + 20));
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  const formatCurrency = (value: number): string => {
    return new Intl.NumberFormat('id-ID').format(value);
  };

  return (
    <div className='min-h-screen overflow-hidden'>
      <main className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12'>
        <div className='grid lg:grid-cols-2 gap-8 lg:gap-16 items-start'>
          {/* Left Side - Content */}
          <div className='pt-8 lg:pt-16 space-y-6'>
            <h1 className='text-4xl lg:text-6xl font-bold text-gray-900 leading-tight'>
              Kelola Transaksi <br />
              <span className='text-blue-600'>Seperti Ahli</span>
            </h1>

            <p className='text-lg lg:text-xl text-gray-600 leading-relaxed max-w-lg'>
              Rekber membantu Anda mengatur transaksi online tanpa memerlukan
              keahlian keuangan atau pengetahuan sebelumnya
            </p>

            <Button
              size='lg'
              className='bg-blue-600 hover:bg-blue-700 text-white px-6 py-6 rounded-full text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300'
            >
              Mulai Sekarang
            </Button>
          </div>

          {/* Right Side - Interactive Card */}
          <div className='relative lg:mt-8'>
            {/* Floating Data Visualizations */}
            <div className='absolute -top-8 -left-8 w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl shadow-lg flex items-center justify-center transform rotate-12 animate-bounce'>
              <TrendingUp className='w-8 h-8 text-white' />
            </div>

            <div className='absolute -top-4 -right-12 w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full shadow-lg flex items-center justify-center animate-pulse'>
              <Shield className='w-6 h-6 text-white' />
            </div>

            {/* Animated Chart Outside Card */}
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

            {/* Main Card */}
            <Card
              className='bg-white/90 backdrop-blur-sm  border-0 rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-3xl hover:scale-[1.02] max-w-sm mx-auto lg:mx-0'
              //   onMouseEnter={() => setIsHovered(true)}
              //   onMouseLeave={() => setIsHovered(false)}
            >
              <CardContent className='p-6 lg:p-8 space-y-6'>
                {/* Header */}
                <div className='space-y-2'>
                  <div className='flex items-center space-x-2'>
                    <Zap className='w-5 h-5 text-blue-600' />
                    <h3 className='text-xl lg:text-2xl font-bold text-gray-900'>
                      Rekening Bersama
                    </h3>
                  </div>
                  <p className='text-gray-600 text-sm'>
                    Transaksi aman & mudah
                  </p>
                </div>

                {/* Security Status */}
                <div className='flex items-center justify-between bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-2xl'>
                  <div className='flex items-center space-x-3'>
                    <div className='flex items-center justify-center w-8 h-8 bg-green-100 rounded-full'>
                      <Check className='w-4 h-4 text-green-600' />
                    </div>
                    <div>
                      <span className='font-semibold text-green-800 text-sm'>
                        Transaksi Aman
                      </span>
                      <p className='text-xs text-green-600'>Keamanan 100%</p>
                    </div>
                  </div>
                  <div className='w-2 h-2 bg-green-500 rounded-full animate-ping'></div>
                </div>

                {/* Live Analytics */}
                <div className='space-y-3'>
                  <div className='flex items-center justify-between'>
                    <div className='flex items-center space-x-2'>
                      <BarChart3 className='w-4 h-4 text-blue-600' />
                      <span className='font-medium text-gray-900 text-sm'>
                        Live Analytics
                      </span>
                    </div>
                    <span className='text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full'>
                      Real-time
                    </span>
                  </div>

                  {/* Mini Chart Inside Card */}
                  <div className='flex items-end space-x-1 h-8 bg-gray-50 p-2 rounded-lg'>
                    {chartData.slice(0, 8).map((height, index) => (
                      <div
                        key={index}
                        className={`w-1.5 rounded-sm transition-all duration-1000 ${
                          index % 2 === 0 ? 'bg-blue-500' : 'bg-blue-300'
                        }`}
                        style={{
                          height: `${(height / 100) * 100}%`,
                          transitionDelay: `${index * 50}ms`,
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Transaction Amount */}
                <div className='space-y-3'>
                  <div className='flex justify-between items-center'>
                    <span className='font-medium text-gray-700 text-sm'>
                      Nilai Transaksi
                    </span>
                    <div className='text-right'>
                      <span className='text-xl font-bold text-gray-900 tabular-nums'>
                        Rp {formatCurrency(animatedValue)}
                      </span>
                      <div className='flex items-center space-x-1 justify-end'>
                        <TrendingUp className='w-3 h-3 text-green-500' />
                        <span className='text-xs text-green-500'>+2.5%</span>
                      </div>
                    </div>
                  </div>

                  {/* Transaction Type Selector */}
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

            {/* Floating Elements */}
            <div className='absolute -bottom-8 -right-8 w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl shadow-lg items-center justify-center transform -rotate-12 animate-pulse hidden lg:flex'>
              <span className='text-white font-bold text-sm'>99.9%</span>
            </div>

            {/* Trust Badge */}
            <div className='absolute -bottom-6 left-1/2 transform -translate-x-1/2'>
              <div className='bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-gray-100'>
                <span className='text-xs text-gray-600'>
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
