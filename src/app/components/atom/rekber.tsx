import React from 'react';
import Image from 'next/image';

interface RekberProps {
  name: React.ReactNode;
  className?: string;
}

const Rekber: React.FC<RekberProps> = ({ name, className }) => {
  return (
    <div className={`flex items-center space-x-2 ${className ?? ''}`}> 
      <Image
        src="/images/Logo 1.png"
        alt="Logo"
        width={120}
        height={50}
        className='pb-5'
      />
    </div>
  );
};

export default Rekber;
