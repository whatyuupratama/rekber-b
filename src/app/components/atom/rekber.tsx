import React from 'react';

interface RekberProps {
  name: React.ReactNode;
  className?: string;
}

const Rekber: React.FC<RekberProps> = ({ name, className }) => {
  return (
    <div className={`flex items-center space-x-2 ${className ?? ''}`}>
      <div className={`flex space-x-1 `}>
        <div className='h-3 w-3 rounded-full bg-blue-500'></div>
        <div className='ml-1 h-3 w-3 rounded-full bg-red-500'></div>
      </div>
      <span className='text-xl font-bold text-gray-900'>{name}</span>
    </div>
  );
};

export default Rekber;
