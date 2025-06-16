import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface RekberProps {
  className?: string;
}

const Rekber: React.FC<RekberProps> = ({ className }) => {
  return (
    <div className={`flex justify-center items-center space-x-2 ${className ?? ''}`}>
      <Link href='/'>
        <Image src='/images/Logo 1.png' alt='Logo' width={120} height={120} />
      </Link>
    </div>
  );
};

export default Rekber;
