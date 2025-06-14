import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface RekberProps {
  className?: string;
}

const Rekber: React.FC<RekberProps> = ({ className }) => {
  return (
    <div className={`flex items-center space-x-2 ${className ?? ''}`}>
     <Link href="/">
        <Image
          src="/images/Logo 1.png"
          alt="Logo" 
          width={120}
          height={0}
          // className="pb-5"
        />
      </Link>
    </div>
  );
};

export default Rekber;
