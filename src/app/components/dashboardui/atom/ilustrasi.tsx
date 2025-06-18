import { CheckCircle, FileText, CreditCard } from 'lucide-react';

export function AgreementIllustration() {
  return (
    <div className='relative w-32 h-24 bg-blue-50 rounded-lg flex items-center justify-center border border-blue-100'>
      <div className='flex items-center space-x-2'>
        <div className='w-8 h-10 bg-blue-800 rounded-sm flex items-center justify-center'>
          <div className='w-2 h-2 bg-white rounded-full'></div>
        </div>
        <FileText className='w-6 h-6 text-blue-500' />
        <div className='w-8 h-10 bg-blue-500 rounded-sm flex items-center justify-center'>
          <div className='w-2 h-2 bg-white rounded-full'></div>
        </div>
      </div>
      <div className='absolute -bottom-2 left-1/2 transform -translate-x-1/2'>
        <div className='w-6 h-6 bg-white rounded-full border-2 border-blue-300 flex items-center justify-center'>
          <div className='w-2 h-2 bg-blue-500 rounded-full'></div>
        </div>
      </div>
    </div>
  );
}

export function PaymentIllustration() {
  return (
    <div className='relative w-32 h-24 bg-blue-50 rounded-lg flex items-center justify-center border border-blue-100'>
      <div className='flex items-center space-x-2'>
        <div className='w-8 h-10 bg-blue-800 rounded-sm flex items-center justify-center'>
          <div className='w-2 h-2 bg-white rounded-full'></div>
        </div>
        <div className='w-12 h-8 bg-blue-400 rounded border-2 border-blue-500 flex items-center justify-center'>
          <CreditCard className='w-4 h-4 text-white' />
        </div>
      </div>
    </div>
  );
}

export function FulfillmentIllustration() {
  return (
    <div className='relative w-32 h-24 bg-blue-50 rounded-lg flex items-center justify-center border border-blue-100'>
      <div className='flex items-center space-x-2'>
        <div className='w-16 h-12 bg-blue-500 rounded-full flex items-center justify-center'>
          <CheckCircle className='w-8 h-8 text-white' />
        </div>
        <div className='flex flex-col space-y-1'>
          <div className='w-8 h-2 bg-blue-300 rounded'></div>
          <div className='w-6 h-2 bg-blue-300 rounded'></div>
          <div className='w-8 h-2 bg-blue-300 rounded'></div>
        </div>
      </div>
    </div>
  );
}
