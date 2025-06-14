'use client';

import { useEffect, useState } from 'react';

const getCookie = (name: string): string | undefined => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(';').shift();
};

export default function DashboardPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    setEmail(getCookie('email') || '');
    setPassword(getCookie('password') || '');
  }, []);

  return (
    <div className='min-h-screen flex items-center justify-center '>
      <div className='bg-white border rounded-xl p-8 w-full max-w-md flex flex-col items-center space-y-6'>
        <h1 className='text-xl font-bold text-gray-800 mb-2'>
          Selamat Datang{' '}
        </h1>
        <div className='w-full space-y-3'>
          <div className='flex flex-col'>
            <span className='text-gray-500 text-sm'>Email</span>
            <span className='font-medium text-gray-800'>{email}</span>
          </div>
          <div className='flex flex-col'>
            <span className='text-gray-500 text-sm'>Password</span>
            <span className='font-medium text-gray-800'>{password}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
