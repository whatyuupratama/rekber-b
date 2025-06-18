import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export function Header() {
  return (
    <header className='bg-white border-b border-blue-100 px-8 py-4'>
      <div className='flex items-center justify-end'>
        <div className='flex items-center space-x-3'>
          <Avatar className='h-10 w-10'>
            <AvatarImage
              src='/placeholder.svg?height=40&width=40'
              alt='Nathan Keller'
            />
            <AvatarFallback className='bg-blue-500 text-white'>
              NK
            </AvatarFallback>
          </Avatar>
          <span className='text-blue-900 font-medium'>Om Haddit Ganteng</span>
        </div>
      </div>
    </header>
  );
}
