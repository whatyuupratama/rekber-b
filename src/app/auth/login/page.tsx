'use client';

import type React from 'react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Eye,
  EyeOff,
  Zap,
  Shield,
  TrendingUp,
  Lock,
  CheckCircle,
  ArrowLeftRight,
  DollarSign,
  User,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Rekber from '@/app/components/atom/rekber';

export default function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = e.currentTarget.email.value;
    const password = e.currentTarget.password.value;

    document.cookie = `email=${email}`;
    document.cookie = `password=${password}`;
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      router.push('/dashboard');
    }, 1500);
  };
  return (
    <div className='flex min-h-screen'>
      <div className='flex w-full flex-col justify-center px-8 py-12 lg:w-1/2 lg:px-16'>
        <div className='mx-auto w-full max-w-md'>
          <Rekber className='space-x-1 font-bold pb-2' />
          <div className='mb-8'>
            <h2 className='text-3xl font-bold text-gray-900'>Selamat Datang</h2>
            <p className='mt-2 text-gray-600'>
              Masuk ke akun Anda untuk transaksi dengan aman
            </p>
          </div>
          <form onSubmit={handleSubmit} className='space-y-6'>
            <div>
              <Label
                htmlFor='email'
                className='text-sm font-medium text-gray-700'
              >
                Email Address
              </Label>
              <Input
                id='email'
                type='email'
                placeholder='nama@example.com'
                required
                className='mt-1 h-12 border-gray-300 focus:border-blue-500 focus:ring-blue-500'
              />
            </div>
            <div>
              <div className='flex items-center justify-between'>
                <Label
                  htmlFor='password'
                  className='text-sm font-medium text-gray-700'
                >
                  Password
                </Label>
                <a
                  href='#'
                  className='text-sm text-blue-600 hover:text-blue-500'
                >
                  Lupa password?
                </a>
              </div>
              <div className='relative mt-1'>
                <Input
                  id='password'
                  type={showPassword ? 'text' : 'password'}
                  placeholder='••••••••'
                  required
                  className='h-12 border-gray-300 pr-10 focus:border-blue-500 focus:ring-blue-500'
                />
                <button
                  type='button'
                  className='absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600'
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>
            <div className='flex items-center'>
              <input
                id='remember-me'
                name='remember-me'
                type='checkbox'
                className='h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500'
              />
              <label
                htmlFor='remember-me'
                className='ml-2 block text-sm text-gray-700'
              >
                Ingat saya
              </label>
            </div>
            <Button
              type='submit'
              className='h-12 w-full bg-blue-600 text-white hover:bg-blue-700 focus:ring-4 focus:ring-blue-200'
              disabled={isLoading}
            >
              {isLoading ? (
                <span className='flex items-center justify-center'>
                  <svg
                    className='mr-2 h-5 w-5 animate-spin'
                    viewBox='0 0 24 24'
                  >
                    <circle
                      className='opacity-25'
                      cx='12'
                      cy='12'
                      r='10'
                      stroke='currentColor'
                      strokeWidth='4'
                      fill='none'
                    />
                    <path
                      className='opacity-75'
                      fill='currentColor'
                      d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                    />
                  </svg>
                  Memproses...
                </span>
              ) : (
                <span className='flex items-center justify-center'>
                  <Zap size={20} className='mr-2' />
                  Masuk Sekarang
                </span>
              )}
            </Button>
          </form>
          <div className='my-6'>
            <div className='relative'>
              <div className='absolute inset-0 flex items-center'>
                <div className='w-full border-t border-gray-300' />
              </div>
              <div className='relative flex justify-center text-sm'>
                <span className='bg-white px-2 text-gray-500'>Atau</span>
              </div>
            </div>
          </div>
          <p className='text-center text-sm text-gray-600'>
            Belum punya akun?{' '}
            <a
              href='/auth/register'
              className='font-medium text-blue-600 hover:text-blue-500'
            >
              Daftar sekarang
            </a>
          </p>
        </div>
      </div>
      <div className='hidden lg:flex lg:w-1/2 lg:flex-col lg:justify-center lg:bg-gradient-to-br lg:from-blue-900 lg:via-blue-800 lg:to-blue-700 lg:px-12 lg:relative lg:overflow-hidden'>
        <div className='absolute inset-0 overflow-hidden'>
          <div className='absolute top-20 left-10 w-32 h-32 bg-blue-400/10 rounded-full animate-pulse'></div>
          <div className='absolute bottom-20 right-10 w-24 h-24 bg-blue-300/10 rounded-full animate-bounce'></div>
          <div className='absolute top-1/2 left-1/4 w-16 h-16 bg-blue-500/10 rounded-full animate-ping'></div>
        </div>
        <div className='text-white relative z-10'>
          <div className='mb-12 text-center'>
            <div className='relative mb-8'>
              <div className='mx-auto w-24 h-24 bg-blue-500/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-blue-400/30 animate-pulse'>
                <Lock size={32} className='text-blue-300' />
              </div>
              <div className='absolute -left-20 top-1/2 transform -translate-y-1/2'>
                <div className='flex flex-col items-center animate-bounce'>
                  <div className='w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center mb-2'>
                    <User size={20} className='text-white' />
                  </div>
                  <span className='text-xs text-blue-200'>Pembeli</span>
                </div>
                <div className='absolute top-1/2 left-12 transform -translate-y-1/2'>
                  <div className='flex items-center animate-pulse'>
                    <DollarSign
                      size={16}
                      className='text-green-400 animate-bounce'
                    />
                    <ArrowLeftRight
                      size={16}
                      className='text-blue-300 mx-1 animate-pulse'
                    />
                  </div>
                </div>
              </div>
              <div className='absolute -right-20 top-1/2 transform -translate-y-1/2'>
                <div className='flex flex-col items-center animate-bounce delay-500'>
                  <div className='w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-2'>
                    <User size={20} className='text-white' />
                  </div>
                  <span className='text-xs text-blue-200'>Penjual</span>
                </div>
                <div className='absolute top-1/2 right-12 transform -translate-y-1/2'>
                  <div className='flex items-center animate-pulse delay-300'>
                    <ArrowLeftRight
                      size={16}
                      className='text-blue-300 mx-1 animate-pulse'
                    />
                    <div className='w-4 h-4 bg-orange-400 rounded animate-bounce'></div>
                  </div>
                </div>
              </div>
            </div>
            <h3 className='text-4xl font-bold mb-4'>Transaksi Aman</h3>
            <p className='text-xl text-blue-100'>
              Sistem escrow yang melindungi pembeli dan penjual
            </p>
          </div>
          <div className='space-y-6'>
            <div className='flex items-start space-x-4 transform hover:scale-105 transition-transform duration-300'>
              <div className='flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 animate-pulse'>
                <CheckCircle size={16} className='text-white' />
              </div>
              <div>
                <h4 className='font-semibold'>Dana Aman Tersimpan</h4>
                <p className='text-blue-100'>
                  Uang pembeli diamankan hingga barang diterima
                </p>
              </div>
            </div>
            <div className='flex items-start space-x-4 transform hover:scale-105 transition-transform duration-300 delay-100'>
              <div className='flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 animate-pulse delay-200'>
                <Zap size={16} className='text-white' />
              </div>
              <div>
                <h4 className='font-semibold'>Proses Otomatis</h4>
                <p className='text-blue-100'>
                  Sistem otomatis melepas dana setelah konfirmasi
                </p>
              </div>
            </div>
            <div className='flex items-start space-x-4 transform hover:scale-105 transition-transform duration-300 delay-200'>
              <div className='flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 animate-pulse delay-400'>
                <Shield size={16} className='text-white' />
              </div>
              <div>
                <h4 className='font-semibold'>Perlindungan Maksimal</h4>
                <p className='text-blue-100'>
                  Kedua belah pihak terlindungi dari penipuan
                </p>
              </div>
            </div>
            <div className='flex items-start space-x-4 transform hover:scale-105 transition-transform duration-300 delay-300'>
              <div className='flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 animate-pulse delay-600'>
                <TrendingUp size={16} className='text-white' />
              </div>
              <div>
                <h4 className='font-semibold'>Tracking Real-time</h4>
                <p className='text-blue-100'>
                  Pantau status transaksi secara real-time
                </p>
              </div>
            </div>
          </div>
          <div className='mt-12 grid grid-cols-3 gap-8 border-t border-blue-700 pt-8'>
            <div className='text-center transform hover:scale-110 transition-transform duration-300'>
              <div className='text-2xl font-bold animate-pulse'>10K+</div>
              <div className='text-sm text-blue-200'>Transaksi Aman</div>
            </div>
            <div className='text-center transform hover:scale-110 transition-transform duration-300 delay-100'>
              <div className='text-2xl font-bold animate-pulse delay-200'>
                99.9%
              </div>
              <div className='text-sm text-blue-200'>Success Rate</div>
            </div>
            <div className='text-center transform hover:scale-110 transition-transform duration-300 delay-200'>
              <div className='text-2xl font-bold animate-pulse delay-400'>
                24/7
              </div>
              <div className='text-sm text-blue-200'>Support</div>
            </div>
          </div>
          <div className='absolute bottom-10 right-10'>
            <div className='relative'>
              <div className='w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center animate-ping'>
                <CheckCircle size={24} className='text-green-400' />
              </div>
              <div className='absolute -top-2 -right-2 w-6 h-6 bg-blue-500 rounded-full animate-bounce'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
