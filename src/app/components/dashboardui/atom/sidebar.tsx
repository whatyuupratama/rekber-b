'use client';
import { useState } from 'react';
import { Home, Shield, User, BarChart3, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';

import EscrowContent from '../escrow';
import AccountContent from '../content';
import HomeContent from '../home';
import ReportsContent from '../content';
import DocumentsContent from '../content';
import Rekberds from '@/app/components/atom/rekberds';
const menuItems = [
  { icon: Home, label: 'Home', component: HomeContent },
  { icon: Shield, label: 'Escrow', component: EscrowContent },
  { icon: User, label: 'Account', component: AccountContent },
  { icon: FileText, label: 'Documents', component: DocumentsContent },
  { icon: BarChart3, label: 'Reports', component: ReportsContent },
];

export function SidebarLayout() {
  const [activeIndex, setActiveIndex] = useState(0);
  const ActiveComponent = menuItems[activeIndex].component;

  return (
    <div className='flex'>
      <aside className='w-64 bg-blue-600 min-h-screen text-white'>
        <div className='p-6'>
          <Rekberds className='py-6' />
          <nav className='space-y-2'>
            {menuItems.map((item, index) => (
              <Button
                key={index}
                variant='ghost'
                onClick={() => setActiveIndex(index)}
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
      <main className='flex-1 '>
        <ActiveComponent />
      </main>
    </div>
  );
}
