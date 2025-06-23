import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import Link from 'next/link';
export function Header() {
  return (
    <header className='bg-white border-b border-blue-100 px-8 py-4' style={{ backgroundColor: '#f5f5f5' }}>
      <div className='hidden sm:flex  items-center justify-end' >
        <DropdownMenu.Root>
          <DropdownMenu.Trigger asChild>
            <div className='flex items-center space-x-3 cursor-pointer'>
              <Avatar className='h-10 w-10'>
                <AvatarImage
                  src='/placeholder.svg?height=40&width=40'
                  alt='Nathan Keller'
                />
                <AvatarFallback className='bg-blue-500 text-white'>
                  N
                </AvatarFallback>
              </Avatar>
              <span className='text-blue-900 font-medium'>User1</span>
            </div>
          </DropdownMenu.Trigger>

          <DropdownMenu.Content
            className='bg-white rounded shadow-lg py-2 px-2 min-w-[150px] border border-blue-100'
            sideOffset={8}
          >
            <DropdownMenu.Item className='px-3 py-2 rounded hover:bg-blue-50 cursor-pointer'>
              Profile
            </DropdownMenu.Item>
            <DropdownMenu.Item className='px-3 py-2 rounded hover:bg-blue-50 cursor-pointer'>
              Settings
            </DropdownMenu.Item>
            <DropdownMenu.Separator className='h-px bg-blue-100 my-2' />
            <Link href='/'>
              <DropdownMenu.Item className='px-3 py-2 rounded hover:bg-blue-50 cursor-pointer text-red-500'>
                Logout
              </DropdownMenu.Item>
            </Link>
          </DropdownMenu.Content>
        </DropdownMenu.Root>
      </div>
    </header>
  );
}
