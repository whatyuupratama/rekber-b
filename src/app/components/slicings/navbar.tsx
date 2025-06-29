'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiUser, FiLogOut } from 'react-icons/fi';
import { Button } from '@/components/ui/button';
import LogoRekber from '@/app/components/atom/rekber';
import { useSession, signOut } from 'next-auth/react';
import type { Session } from 'next-auth';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { data: session, status } = useSession();

  // Fungsi untuk memangkas nama dari email
  const getDisplayName = (session: Session | null) => {
    if (session?.user?.name) {
      return session.user.name.toLowerCase();
    }
    if (session?.user?.email) {
      // Ambil bagian sebelum @ dan ubah ke lowercase
      const nameFromEmail = session.user.email.split('@')[0].toLowerCase();
      return nameFromEmail;
    }
    return 'user';
  };

  if (status === 'loading') {
    return (
      <nav className='bg-white/95 backdrop-blur-sm border-b border-gray-100 px-6 py-4 sticky top-0 z-50'>
        <div className='max-w-7xl mx-auto flex items-center justify-between'>
          <LogoRekber />
          <div className='text-gray-500'>Loading...</div>
        </div>
      </nav>
    );
  }

  return (
    <nav className='bg-white/95 backdrop-blur-sm border-b border-gray-100 px-6 py-4 sticky top-0 z-50'>
      <div className='max-w-7xl mx-auto flex items-center justify-between'>
        <div className="flex items-center justify-between w-full">
            {/* Logo kiri */}
            <div className="flex items-center">
              <LogoRekber />
            </div>

            {/* Menu kanan (hanya tampil di md ke atas) */}
            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="/"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Home
              </Link>
              <Link
                href="/fee"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Fee
              </Link>
              <Link
                href="/about"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>

        {/* Desktop Auth Buttons */}
        <div className='hidden md:flex items-center space-x-4 ml-[20px]'>
          {session ? (
            // User sudah login - tampilkan Dashboard dan Logout
            <div className='flex items-center space-x-4'>
              <div className='flex items-center space-x-2 text-gray-700'>
                <FiUser className='w-4 h-4' />
                <span className='font-medium'>{getDisplayName(session)}</span>
              </div>
              <Link href='/dashboard'>
                <Button className='bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-medium shadow-lg hover:shadow-xl cursor-pointer transition-all'>
                  Dashboard
                </Button>
              </Link>
              <Button
                onClick={() => signOut({ callbackUrl: '/' })}
                variant='outline'
                className='text-gray-700 hover:text-red-600 border-gray-300 hover:border-red-300 cursor-pointer font-medium flex items-center space-x-2'
              >
                <FiLogOut className='w-4 h-4' />
                <span>Logout</span>
              </Button>
            </div>
          ) : (
            // User belum login - tampilkan Register dan Login
            <>
              <Link href='/auth/register'>
                <Button
                  variant='ghost'
                  className='text-gray-700 hover:text-blue-600 cursor-pointer font-medium'
                >
                  Register
                </Button>
              </Link>
              <Link href='/auth/login'>
                <Button className='bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-medium shadow-lg hover:shadow-xl cursor-pointer transition-all'>
                  Login
                </Button>
              </Link>
            </>
          )}
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
            className='md:hidden absolute left-0 right-0 top-full z-50 bg-white rounded-xl shadow-lg px-6 py-4 space-y-2 text-right'
          >
            <Link
              href='/'
              className='block py-2 text-gray-800 hover:text-blue-600 transition-colors'
              onClick={() => setOpen(false)}
            >
              Home
            </Link>
              <Link
                href="/fee"
                className='block py-2 text-gray-800 hover:text-blue-600 transition-colors'
                onClick={() => setOpen(false)}
              >
                Fee
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
            {session ? (
              // Mobile menu untuk user yang sudah login
              <> 
                <div className='py-2 text-gray-600 text-sm border-t border-gray-200 mt-2 pt-4 text-right'>
                  <div className='flex justify-end items-center space-x-2'>
                    <FiUser className='w-4 h-4' />
                    <span>{getDisplayName(session)}</span>
                  </div>
                </div>
                <Link
                  href='/dashboard'
                  className='block py-2 text-gray-800 hover:text-blue-600 transition-colors font-medium'
                  onClick={() => setOpen(false)}
                >
                  Dashboard
                </Link>
                <button
                  onClick={() => {
                    setOpen(false);
                    signOut({ callbackUrl: '/' });
                  }}
                  className='block w-full text-right py-2 text-red-600 hover:text-red-700 transition-colors'
                >
                  <div className='flex justify-end items-center space-x-2'>
                    <FiLogOut className='w-4 h-4' />
                    <span>Logout</span>
                  </div>
                </button> 
              </>
            ) : (
              <>
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
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
