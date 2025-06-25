import Link from 'next/link';
import { footerStatic } from '@/app/api/static';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className='bg-gray-900 text-white py-16'>
      <div className='max-w-7xl mx-auto px-6'>
        <div className='grid md:grid-cols-4 gap-8 mb-12'>
          <div className='space-y-4'>
            <div className="mb-6">
            <Link href='/'>
              <Image src='/images/icon.png' alt="Logo"  width={180}  height={0} style={{ height: 'auto' }} />
            </Link> </div>
            <p className='text-gray-400 leading-relaxed'>
              {footerStatic.description}
            </p>
          </div>
          {footerStatic.sections.map((section) => (
            <div key={section.title}>
              <h3 className='font-semibold mb-6 text-lg'>{section.title}</h3>
              <ul className='space-y-3 text-gray-400'>
                {section.items.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className='hover:text-white transition-colors'
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className='border-t border-gray-800 pt-8 text-center text-gray-400 '>
          <p>
            {footerStatic.copyright.map((item, idx) =>
              typeof item === 'string' ? (
                item
              ) : (
                <Link key={idx} href={item.href} className='hover:text-white '>
                  {item.label}
                </Link>
              )
            )}
          </p>
        </div>
      </div>
    </footer>
  );
}
