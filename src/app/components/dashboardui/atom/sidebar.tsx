'use client';
import { useState } from 'react';
// import { Home, Shield, User, BarChart3, FileText, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Menu, Home, Shield, User } from 'lucide-react';

import EscrowContent from '../escrow';
import HomeContent from '../home';
import { Content } from '@/app/components/dashboardui/content';
import Rekberds from '@/app/components/atom/rekberds';

const menuItems = [
  { icon: Home, label: 'Home', component: HomeContent },
  { icon: Shield, label: 'Escrow', component: EscrowContent },
  { icon: User, label: 'My Transactions', component: Content },
];

export function SidebarLayout() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const ActiveComponent = menuItems[activeIndex].component;

  const handleMenuClick = (index: number) => {
    setActiveIndex(index);
    setSidebarOpen(false);
  };

  return (
    <div className='flex flex-col md:flex-row min-h-screen'>
      <div className='md:hidden p-4'>
        <Button
          variant='ghost'
          onClick={() => setSidebarOpen(true)}
          className='p-2'
        >
          <Menu className='h-6 w-6 text-blue-600' />
        </Button>
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
        style={{ minHeight: '100vh' }}
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
        <ActiveComponent />
      </main>
    </div>
  );
}
