'use client';

import { useEffect, useState } from 'react';
import {
  UserIcon,
  LockClosedIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { RiHome9Fill } from 'react-icons/ri';
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
    <div className='min-h-screen flex items-center justify-center'>
      <div className='bg-white border rounded-xl p-8 w-auto  flex flex-col items-center space-y-6'>
        <WrenchScrewdriverIcon className='h-10 w-10 text-yellow-500 mb-2 animate-bounce' />
        <div className='mt-6 flex items-center gap-2 bg-yellow-100 text-yellow-800 px-3 py-2 rounded-lg text-sm'>
          <WrenchScrewdriverIcon className='h-5 w-5' />
          Dashboard masih dalam tahap pengembangan.
        </div>
        <div className='w-full space-y-3'>
          <div className='flex flex-col'>
            <span className='flex items-center text-gray-500 text-sm gap-1'>
              <UserIcon className='h-4 w-4 text-blue-500' /> Email
            </span>
            <span className='font-medium text-gray-800'>{email}</span>
          </div>
          <div className='flex flex-row items-center justify-between'>
            <div className='flex flex-col'>
              <span className='flex items-center text-gray-500 text-sm gap-1'>
                <LockClosedIcon className='h-4 w-4 text-green-500' /> Password
              </span>
              <span className='font-medium text-gray-800'>
                {password.slice(0, 24)}
              </span>
            </div>
            <Link href='/' className='ml-4'>
              <RiHome9Fill className='h-6 w-6 text-green-800' />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
