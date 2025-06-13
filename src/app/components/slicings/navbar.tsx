'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import Rekber from '@/app/components/atom/rekber';

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className='max-w-6xl mx-auto py-12 px-4 relative'>
      <div className='flex items-center justify-between'>
        <Rekber className='space-x-1 font-bold' />
        <div className='hidden lg:flex w-auto space-x-[3.75rem]'>
          <Link
            href='/'
            className='text-gray-800 hover:text-blue-600 transition-colors'
          >
            Home
          </Link>
          <Link
            href='/features'
            className='text-gray-800 hover:text-blue-600 transition-colors'
          >
            Features
          </Link>
          <Link
            href='/showcase'
            className='text-gray-800 hover:text-blue-600 transition-colors'
          >
            Showcase
          </Link>
          <Link
            href='/pricing'
            className='text-gray-800 hover:text-blue-600 transition-colors'
          >
            Pricing
          </Link>
        </div>
        <div className='flex gap-3'>
          <div className='hidden sm:flex w-auto justify-end'>
            <Link
              href='/auth/login'
              className='py-1 px-6 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 text-[1rem]'
              onClick={() => setOpen(false)}
            >
              Login
            </Link>
          </div>
          <div className='hidden sm:flex w-auto justify-end'>
            <Link
              href='/auth/register'
              className='py-1 px-6 text-blue-950 flex items-center justify-center rounded-2xl bg-blue-100  font-semibold shadow transition-all duration-200 focus:ring-blue-300 text-[1rem]'
              onClick={() => setOpen(false)}
            >
              Register
            </Link>
          </div>
        </div>
        <div className='flex lg:hidden'>
          <button
            type='button'
            className='inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-200 focus:outline-none'
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <FiX className='w-7 h-7' />
            ) : (
              <FiMenu className='w-7 h-7' />
            )}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.2 }}
            className='lg:hidden absolute left-0 right-0 top-full z-50 bg-white rounded-xl shadow-lg px-6 py-4 space-y-2'
          >
            <Link
              href='/'
              className='block py-2 text-gray-800 hover:text-blue-600 transition-colors'
              onClick={() => setOpen(false)}
            >
              Home
            </Link>
            <Link
              href='/features'
              className='block py-2 text-gray-800 hover:text-blue-600 transition-colors'
              onClick={() => setOpen(false)}
            >
              Features
            </Link>
            <Link
              href='/showcase'
              className='block py-2 text-gray-800 hover:text-blue-600 transition-colors'
              onClick={() => setOpen(false)}
            >
              Showcase
            </Link>
            <Link
              href='/pricing'
              className='block py-2 text-gray-800 hover:text-blue-600 transition-colors'
              onClick={() => setOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href='/auth/login'
              className='block py-2 text-gray-800 hover:text-blue-600 transition-colors'
              onClick={() => setOpen(false)}
            >
              Login
            </Link>
            <Link
              href='/auth/register'
              className='block py-2 text-gray-800 hover:text-blue-600 transition-colors'
              onClick={() => setOpen(false)}
            >
              Registrasi
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Navbar;
