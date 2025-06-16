'use client';

import type React from 'react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Eye,
  EyeOff,
  UserPlus,
  Check,
  Users,
  Award,
  Zap,
  ArrowRight,
  DollarSign,
  Package,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import Rekber from '@/app/components/atom/rekber';

export default function Register() {
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      router.push('/auth/login');
    }, 2000);
  };

  return (
    <div className='flex min-h-screen'>
      <div className='flex w-full flex-col justify-center px-8 py-12 lg:w-1/2 lg:px-16'>
        <div className='mx-auto w-full max-w-md'>
          <Rekber className='space-x-1 font-bold pb-2' />
          <div className='mb-8'>
            <h2 className='text-2xl font-bold text-gray-900'>
              Bergabung dengan Rekber.com
            </h2>
            <p className='mt-2 text-gray-600'>
              Mulai transaksi aman Anda hari ini dan bergabung dengan ribuan
              pengguna lainnya
            </p>
          </div>
          <form onSubmit={handleSubmit} className='space-y-5'> 
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
                placeholder='john.doe@example.com'
                required
                className='mt-1 h-11 border-gray-300 focus:border-blue-500 focus:ring-blue-500'
              />
            </div>
            <div>
              <Label
                htmlFor='phone'
                className='text-sm font-medium text-gray-700'
              >
                Nomor Telepon
              </Label>
              <Input
                id='phone'
                type='tel'
                placeholder='+62 812-3456-7890'
                required
                className='mt-1 h-11 border-gray-300 focus:border-blue-500 focus:ring-blue-500'
              />
            </div>
            <div>
              <Label
                htmlFor='password'
                className='text-sm font-medium text-gray-700'
              >
                Password
              </Label>
              <div className='relative mt-1'>
                <Input
                  id='password'
                  type={showPassword ? 'text' : 'password'}
                  placeholder='••••••••'
                  required
                  className='h-11 border-gray-300 pr-10 focus:border-blue-500 focus:ring-blue-500'
                />
                <button
                  type='button'
                  className='absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600'
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>
            <div>
              <Label
                htmlFor='confirmPassword'
                className='text-sm font-medium text-gray-700'
              >
                Konfirmasi Password
              </Label>
              <div className='relative mt-1'>
                <Input
                  id='confirmPassword'
                  type={showConfirmPassword ? 'text' : 'password'}
                  placeholder='••••••••'
                  required
                  className='h-11 border-gray-300 pr-10 focus:border-blue-500 focus:ring-blue-500'
                />
                <button
                  type='button'
                  className='absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600'
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? (
                    <EyeOff size={18} />
                  ) : (
                    <Eye size={18} />
                  )}
                </button>
              </div>
            </div>
            <div className='flex items-start space-x-2'>
              <Checkbox
                id='terms'
                checked={acceptTerms}
                onCheckedChange={(checked) =>
                  setAcceptTerms(checked as boolean)
                }
                className='mt-1'
              />
              <label htmlFor='terms' className='text-sm text-gray-600'>
                Saya setuju dengan{' '}
                <a href='#' className='text-blue-600 hover:text-blue-500'>
                  Syarat & Ketentuan
                </a>{' '}
                dan{' '}
                <a href='#' className='text-blue-600 hover:text-blue-500'>
                  Kebijakan Privasi
                </a>
              </label>
            </div>
            <Button
              type='submit'
              className='h-12 w-full bg-blue-600 text-white hover:bg-blue-700 focus:ring-4 focus:ring-blue-200'
              disabled={isLoading || !acceptTerms}
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
                  Membuat Akun...
                </span>
              ) : (
                <span className='flex items-center justify-center'>
                  <UserPlus size={20} className='mr-2' />
                  Buat Akun Sekarang
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
            Sudah punya akun?{' '}
            <a
              href='/auth/login'
              className='font-medium text-blue-600 hover:text-blue-500'
            >
              Masuk di sini
            </a>
          </p>
        </div>
      </div>
      <div className='hidden lg:flex lg:w-1/2 lg:flex-col lg:justify-center lg:bg-gradient-to-br lg:from-blue-900 lg:via-blue-800 lg:to-blue-700 lg:px-12 lg:relative lg:overflow-hidden'>
        <div className='absolute inset-0 overflow-hidden'>
          <div className='absolute top-10 right-20 w-40 h-40 bg-blue-400/10 rounded-full animate-pulse delay-1000'></div>
          <div className='absolute bottom-32 left-16 w-28 h-28 bg-blue-300/10 rounded-full animate-bounce delay-500'></div>
          <div className='absolute top-1/3 right-1/4 w-20 h-20 bg-blue-500/10 rounded-full animate-ping delay-700'></div>
        </div>
        <div className='text-white relative z-10'>
          <div className='mb-12 text-center'>
            <div className='mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-blue-500/20 mx-auto animate-pulse'>
              <UserPlus size={40} className='text-blue-300' />
            </div>
            <h3 className='text-4xl font-bold mb-4'>Mulai Perjalanan Anda</h3>
            <p className='text-xl text-blue-100'>
              Bergabung dengan ekosistem transaksi aman terbesar
            </p>
          </div>
          <div className='mb-12'>
            <div className='flex items-center justify-center space-x-4 mb-8'>
              <div className='flex flex-col items-center animate-bounce'>
                <div className='w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mb-2'>
                  <span className='text-white font-bold'>1</span>
                </div>
                <span className='text-xs text-blue-200'>Daftar</span>
              </div>
              <ArrowRight className='text-blue-400 animate-pulse' size={20} />
              <div className='flex flex-col items-center animate-bounce delay-300'>
                <div className='w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-2'>
                  <DollarSign size={20} className='text-white' />
                </div>
                <span className='text-xs text-blue-200'>Transaksi</span>
              </div>
              <ArrowRight
                className='text-blue-400 animate-pulse delay-200'
                size={20}
              />
              <div className='flex flex-col items-center animate-bounce delay-500'>
                <div className='w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center mb-2'>
                  <Package size={20} className='text-white' />
                </div>
                <span className='text-xs text-blue-200'>Selesai</span>
              </div>
            </div>
          </div>
          <div className='space-y-6'>
            <div className='flex items-start space-x-4 transform hover:scale-105 transition-transform duration-300'>
              <div className='flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 animate-pulse'>
                <Check size={16} className='text-white' />
              </div>
              <div>
                <h4 className='font-semibold'>Bergabung Gratis</h4>
                <p className='text-blue-100'>
                  Daftar tanpa biaya, mulai transaksi kapan saja
                </p>
              </div>
            </div>
            <div className='flex items-start space-x-4 transform hover:scale-105 transition-transform duration-300 delay-100'>
              <div className='flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 animate-pulse delay-200'>
                <Zap size={16} className='text-white' />
              </div>
              <div>
                <h4 className='font-semibold'>Setup Instan</h4>
                <p className='text-blue-100'>
                  Akun siap digunakan dalam hitungan menit
                </p>
              </div>
            </div>
            <div className='flex items-start space-x-4 transform hover:scale-105 transition-transform duration-300 delay-200'>
              <div className='flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 animate-pulse delay-400'>
                <Users size={16} className='text-white' />
              </div>
              <div>
                <h4 className='font-semibold'>Komunitas Besar</h4>
                <p className='text-blue-100'>
                  Bergabung dengan 10,000+ pengguna aktif
                </p>
              </div>
            </div>
            <div className='flex items-start space-x-4 transform hover:scale-105 transition-transform duration-300 delay-300'>
              <div className='flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 animate-pulse delay-600'>
                <Award size={16} className='text-white' />
              </div>
              <div>
                <h4 className='font-semibold'>Support Premium</h4>
                <p className='text-blue-100'>Tim support siap membantu 24/7</p>
              </div>
            </div>
          </div>
          <div className='mt-12 grid grid-cols-3 gap-8 border-t border-blue-700 pt-8'>
            <div className='text-center transform hover:scale-110 transition-transform duration-300'>
              <div className='text-2xl font-bold animate-pulse'>10K+</div>
              <div className='text-sm text-blue-200'>New Users</div>
            </div>
            <div className='text-center transform hover:scale-110 transition-transform duration-300 delay-100'>
              <div className='text-2xl font-bold animate-pulse delay-200'>
                50K+
              </div>
              <div className='text-sm text-blue-200'>Transactions</div>
            </div>
            <div className='text-center transform hover:scale-110 transition-transform duration-300 delay-200'>
              <div className='text-2xl font-bold animate-pulse delay-400'>
                99.9%
              </div>
              <div className='text-sm text-blue-200'>Success Rate</div>
            </div>
          </div>
          <div className='absolute top-20 right-10'>
            <div className='relative'>
              <div className='w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center animate-ping'>
                <Check size={20} className='text-green-400' />
              </div>
              <div className='absolute -top-1 -right-1 w-4 h-4 bg-blue-500 rounded-full animate-bounce delay-300'></div>
            </div>
          </div>
          <div className='absolute bottom-20 left-10'>
            <div className='relative'>
              <div className='w-10 h-10 bg-yellow-500/20 rounded-full flex items-center justify-center animate-pulse'>
                <DollarSign size={16} className='text-yellow-400' />
              </div>
              <div className='absolute -top-1 -right-1 w-3 h-3 bg-blue-400 rounded-full animate-ping'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
