import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import type { Session } from 'next-auth';

interface HeaderProps {
  onProfileClick: () => void;
}

export function Header({ onProfileClick }: HeaderProps) {
  const { data: session } = useSession();

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

  return (
    <header
      className='hidden sm:block bg-white border-b border-blue-100 px-8 py-4'
      style={{ backgroundColor: '#f5f5f5' }}
    >
      <div className='hidden sm:flex items-center justify-end'>
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
            className='bg-white rounded-lg shadow-2xl py-2 px-2 min-w-[150px] border border-blue-100 animate-in fade-in-0 zoom-in-95'
            sideOffset={8}
            style={{ zIndex: 9999 }}
          >
            <DropdownMenu.Item 
              className='px-3 py-2 rounded-md hover:bg-blue-50 cursor-pointer transition-colors duration-150 focus:bg-blue-50 focus:outline-none'
              onClick={onProfileClick}
            >
              Profile
            </DropdownMenu.Item>
            <DropdownMenu.Separator className='h-px bg-blue-100 my-2' />
            <Link href='/'>
              <DropdownMenu.Item
                className='px-3 py-2 rounded-md hover:bg-red-50 cursor-pointer text-red-500 transition-colors duration-150 focus:bg-red-50 focus:outline-none'
                onClick={() => signOut({ callbackUrl: '/' })}
              >
                Logout
              </DropdownMenu.Item>
            </Link>
          </DropdownMenu.Content>
        </DropdownMenu.Root>
      </div>
    </header>
  );
}