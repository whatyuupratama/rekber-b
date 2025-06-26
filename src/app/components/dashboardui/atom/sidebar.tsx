'use client';
import { useState, useEffect, Suspense } from 'react';
import { Button } from '@/components/ui/button';
import { Home, User, Wallet, FileText } from 'lucide-react';
import { useSession, signOut } from 'next-auth/react';
import type { Session } from 'next-auth';
import HomeContent from '../home';
import { Content } from '@/app/components/dashboardui/content';
import Profile from '@/app/components/dashboardui/profile';
import Rekberds from '@/app/components/atom/rekberds';
import { Header } from '@/app/components/dashboardui/atom/header';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { FiMenu } from 'react-icons/fi';
import DetailTransaksi from '@/app/components/dashboardui/transaksidetail';
import { useSearchParams } from 'next/navigation';

const menuItems = [
  { icon: Home, label: 'Home', component: HomeContent },
  { icon: Wallet, label: 'My Transactions', component: Content },
  { icon: FileText, label: 'Detail Transaksi', component: DetailTransaksi },
  { icon: User, label: 'Profile', component: Profile },
];

function SidebarContent() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const ActiveComponent = menuItems[activeIndex].component;
  const { data: session } = useSession();
  const searchParams = useSearchParams();

  const handleMenuClick = (index: number) => {
    setActiveIndex(index);
    setSidebarOpen(false);
  };

  const handleProfileClick = () => {
    setActiveIndex(3);
  };

  useEffect(() => {
    const tab = searchParams?.get('tab');
    if (tab === 'detail-transaksi') {
      setActiveIndex(2);
    }
  }, [searchParams]);

  const getDisplayName = (session: Session | null) => {
    if (session?.user?.name) {
      return session.user.name.toLowerCase();
    }
    if (session?.user?.email) {
      const nameFromEmail = session.user.email.split('@')[0].toLowerCase();
      return nameFromEmail;
    }
    return 'user';
  };

  return (
    <div className='flex flex-col md:flex-row min-h-screen'>
      <div className='flex justify-between items-center p-4 sm:hidden'>
        <div className='md:hidden'>
          <Button
            variant='ghost'
            onClick={() => setSidebarOpen(true)}
            className='p-2'
          >
            <FiMenu className='!h-6 !w-6 text-blue-600' />
          </Button>
        </div>
        <DropdownMenu.Root>
          <DropdownMenu.Trigger asChild>
            <div className='flex items-center space-x-3 cursor-pointer hover:bg-blue-50/10 rounded-lg p-2 transition-all duration-200'>
              <Avatar className='h-10 w-10'>
                <AvatarImage
                  src='/placeholder.svg?height=40&width=40'
                  alt='Nathan Keller'
                />
                <AvatarFallback className='bg-blue-500 text-white'>
                  N
                </AvatarFallback>
              </Avatar>
              <span className='text-blue-900 font-medium'>
                {getDisplayName(session)}
              </span>
            </div>
          </DropdownMenu.Trigger>

          <DropdownMenu.Content
            className='bg-white rounded-lg shadow-2xl py-2 px-2 min-w-[150px] border border-blue-100 animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2'
            sideOffset={8}
            style={{ zIndex: 9999 }}
          >
            <DropdownMenu.Item
              className='px-3 py-2 rounded-md hover:bg-blue-50 cursor-pointer transition-colors duration-150 focus:bg-blue-50 focus:outline-none'
              onClick={() => setActiveIndex(3)}
            >
              Profile
            </DropdownMenu.Item>
            <DropdownMenu.Item className='px-3 py-2 rounded-md hover:bg-blue-50 cursor-pointer transition-colors duration-150 focus:bg-blue-50 focus:outline-none'>
              Settings
            </DropdownMenu.Item>
            <DropdownMenu.Separator className='h-px bg-blue-100 my-2' />

            <DropdownMenu.Item
              className='px-3 py-2 rounded-md hover:bg-red-50 cursor-pointer text-red-500 transition-colors duration-150 focus:bg-red-50 focus:outline-none'
              onClick={() => signOut({ callbackUrl: '/' })}
            >
              Logout
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Root>
      </div>
      <div
        className={`fixed inset-0 z-40 bg-white/30 backdrop-blur-sm transition-opacity md:hidden ${
          sidebarOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setSidebarOpen(false)}
      />
      <aside
        className={`
          fixed top-0 left-0 z-50 h-full w-64 bg-blue-600 text-white transform transition-transform duration-300
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
          md:static md:translate-x-0 md:w-64 md:block
        `}
        style={{ minHeight: '150vh', backgroundColor: '#163c76' }}
      >
        <div className='p-6'>
          <div className='flex items-center justify-between mb-4'>
            <Rekberds className='py-6' />
            <Button
              variant='ghost'
              className='md:hidden'
              onClick={() => setSidebarOpen(false)}
            >
              <span className='text-xl'>&times;</span>
            </Button>
          </div>
          <nav className='space-y-2'>
            {menuItems.map((item, index) => (
              <Button
                key={index}
                variant='ghost'
                onClick={() => handleMenuClick(index)}
                className={`w-full justify-start text-left ${
                  activeIndex === index
                    ? 'bg-blue-500 text-white hover:bg-blue-500'
                    : 'text-blue-100 hover:bg-blue-500 hover:text-white'
                }`}
              >
                <item.icon className='mr-3 h-5 w-5' />
                {item.label}
              </Button>
            ))}
          </nav>
        </div>
      </aside>
      <main className='flex-1 bg-gray-50'>
        <Header onProfileClick={handleProfileClick} />
        <ActiveComponent />
      </main>
    </div>
  );
}

function SidebarSkeleton() {
  return (
    <div className='flex flex-col md:flex-row min-h-screen'>
      <div className='flex justify-between items-center p-4 sm:hidden'>
        <div className='w-10 h-10 bg-gray-300 rounded animate-pulse'></div>
        <div className='flex items-center space-x-3'>
          <div className='w-10 h-10 bg-gray-300 rounded-full animate-pulse'></div>
          <div className='w-20 h-4 bg-gray-300 rounded animate-pulse'></div>
        </div>
      </div>
      <aside className='fixed top-0 left-0 z-50 h-full w-64 bg-blue-600 text-white md:static md:w-64 md:block'>
        <div className='p-6'>
          <div className='w-32 h-8 bg-blue-500 rounded mb-4 animate-pulse'></div>
          <nav className='space-y-2'>
            {[...Array(4)].map((_, index) => (
              <div
                key={index}
                className='w-full h-10 bg-blue-500 rounded animate-pulse'
              ></div>
            ))}
          </nav>
        </div>
      </aside>
      <main className='flex-1 bg-gray-50'>
        <div className='h-16 bg-white border-b border-gray-200 animate-pulse'></div>
        <div className='p-6'>
          <div className='w-48 h-8 bg-gray-300 rounded mb-6 animate-pulse'></div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className='h-32 bg-gray-300 rounded-lg animate-pulse'
              ></div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export function SidebarLayout() {
  return (
    <Suspense fallback={<SidebarSkeleton />}>
      <SidebarContent />
    </Suspense>
  );
}
