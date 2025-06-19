'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import { Button } from '@/components/ui/button';
import LogoRekber from '@/app/components/atom/rekber';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className='bg-white/95 backdrop-blur-sm border-b border-gray-100 px-6 py-4 sticky top-0 z-50'>
      <div className='max-w-7xl mx-auto flex items-center justify-between'>
        {/* Logo & Desktop Menu */}
        <div className='flex items-center space-x-8'>
          <LogoRekber />
          <div className='hidden md:flex items-center space-x-8'>
            <Link
              href='/'
              className='text-gray-700 hover:text-blue-600 font-medium transition-colors'
            >
              Home
            </Link>
            <Link
              href='/about'
              className='text-gray-700 hover:text-blue-600 font-medium transition-colors'
            >
              About
            </Link>
            <Link
              href='/contact'
              className='text-gray-700 hover:text-blue-600 font-medium transition-colors'
            >
              Contact
            </Link> 
          </div>
        </div>
        {/* Desktop Auth Buttons */}
        <div className='hidden md:flex items-center space-x-4 '>
          <Link href='/auth/register'>
            <Button
              variant='ghost'
              className='text-gray-700 hover:text-blue-600 cursor-pointer font-medium'
            >
              Register
            </Button>
          </Link>
          <Link href='/auth/login'>
            {' '}
            <Button className='bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-medium shadow-lg hover:shadow-xl  cursor-pointer transition-all'>
              Login
            </Button>
          </Link>
        </div>
        {/* Mobile Menu Button */}
        <div className='flex md:hidden'>
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
      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.2 }}
            className='md:hidden absolute left-0 right-0 top-full z-50 bg-white rounded-xl shadow-lg px-6 py-4 space-y-2'
          >
            <Link
              href='/'
              className='block py-2 text-gray-800 hover:text-blue-600 transition-colors'
              onClick={() => setOpen(false)}
            >
              Home
            </Link>
            <Link
              href='/about'
              className='block py-2 text-gray-800 hover:text-blue-600 transition-colors'
              onClick={() => setOpen(false)}
            >
              About
            </Link>
            <Link
              href='/contact'
              className='block py-2 text-gray-800 hover:text-blue-600 transition-colors'
              onClick={() => setOpen(false)}
            >
              Contact
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
    </nav>
  );
}
