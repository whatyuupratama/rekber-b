'use client';

import { useState, useEffect } from 'react';
import { User, Send, Package, CreditCard } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      number: 1,
      title: 'Pembeli dan penjual setuju',
      icon: User,
      color: 'bg-blue-500',
    },
    {
      number: 2,
      title: 'Pembeli melakukan deposit ke Rekber',
      icon: Send,
      color: 'bg-blue-500',
    },
    {
      number: 3,
      title: 'Penjual mengirim barang ke pembeli',
      icon: Package,
      color: 'bg-blue-500',
    },
    {
      number: 4,
      title: 'Dana diteruskan ke saldo penjual',
      icon: CreditCard,
      color: 'bg-blue-500',
    },
    {
      number: 5,
      title: 'Dana diteruskan ke saldo penjual',
      icon: CreditCard,
      color: 'bg-blue-500',
    },
  ];

  // Auto-cycle through steps
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev === steps.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, [steps.length]);

  // Calculate progress percentage based on active step
  const progressPercentage = ((activeStep + 1) / steps.length) * 100;

  return (
    <section className='py-16 px-4 bg-white'>
      <div className='max-w-6xl mx-auto'>
        {/* Header */}
        <div className='text-center mb-16'>
          <h2 className='text-5xl font-bold text-gray-900 mb-4'>
            Proses <span className='text-blue-600'>Rekber</span>
          </h2>
          <p className='text-gray-600 max-w-3xl mx-auto text-base'>
            Jangan biarkan kekhawatiran merusak pengalaman belanja online Anda.
            Gunakan fitur Rekening Bersama dan nikmati transaksi yang lebih
            aman, nyaman, dan terlindungi.
          </p>
        </div>

        {/* Desktop Process Flow */}
        <div className='hidden md:block relative'>
          {/* Background Gray Line */}
          <div className='absolute top-24 left-0 w-full h-2 bg-gray-200 z-0 rounded-full'></div>

          {/* Animated Blue Progress Line */}
          <motion.div
            initial={{ width: '0%' }}
            animate={{ width: `${progressPercentage}%` }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className='absolute top-24 left-0 h-2 bg-blue-500 z-10 rounded-full'
          ></motion.div>

          {/* Steps */}
          <div className='flex justify-between relative z-20 px-6'>
            {steps.map((step, index) => (
              <div
                key={step.number}
                className='flex flex-col items-center w-64'
              >
                {/* Step Circle with Icon */}
                <motion.div
                  animate={
                    activeStep === index
                      ? {
                          scale: [1, 1.1, 1],
                          boxShadow: [
                            '0px 0px 0px rgba(59, 130, 246, 0)',
                            '0px 0px 20px rgba(59, 130, 246, 0.5)',
                            '0px 0px 0px rgba(59, 130, 246, 0)',
                          ],
                        }
                      : {}
                  }
                  transition={{
                    duration: 2,
                    repeat: activeStep === index ? Number.POSITIVE_INFINITY : 0,
                    repeatType: 'loop',
                  }}
                  className={`w-16 h-16 rounded-full ${
                    index <= activeStep ? 'bg-blue-500' : 'bg-gray-300'
                  } flex items-center justify-center text-white mb-2 shadow-md ${
                    activeStep === index ? 'ring-4 ring-blue-200' : ''
                  }`}
                >
                  <step.icon size={28} />
                </motion.div>

                {/* Step Number */}
                <div
                  className={`w-8 h-8 rounded-full mt-2 mb-3 flex items-center justify-center text-base font-medium ${
                    index <= activeStep
                      ? 'bg-blue-100 text-blue-600'
                      : 'bg-gray-100 text-gray-600'
                  }`}
                >
                  {step.number}
                </div>

                {/* Step Title */}
                <p
                  className={`text-lg font-medium ${
                    index <= activeStep ? 'text-blue-900' : 'text-gray-500'
                  } text-center max-w-[90%] mx-auto`}
                >
                  {step.title}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Process Flow */}
        <div className='md:hidden space-y-8'>
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`flex items-center ${
                activeStep === index ? 'opacity-100' : 'opacity-70'
              }`}
            >
              <motion.div
                animate={
                  activeStep === index
                    ? {
                        scale: [1, 1.1, 1],
                        boxShadow: [
                          '0px 0px 0px rgba(59, 130, 246, 0)',
                          '0px 0px 15px rgba(59, 130, 246, 0.5)',
                          '0px 0px 0px rgba(59, 130, 246, 0)',
                        ],
                      }
                    : {}
                }
                transition={{
                  duration: 2,
                  repeat: activeStep === index ? Number.POSITIVE_INFINITY : 0,
                  repeatType: 'loop',
                }}
                className={`flex-shrink-0 w-14 h-14 md:w-20 md:h-20 rounded-full ${
                  index <= activeStep ? 'bg-blue-500' : 'bg-gray-300'
                } flex items-center justify-center text-white mr-4`}
              >
                <step.icon size={22} />
              </motion.div>
              <div className='flex items-center'>
                <span
                  className={`${
                    index <= activeStep
                      ? 'bg-blue-100 text-blue-600'
                      : 'bg-gray-100 text-gray-600'
                  } w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center text-base font-medium mr-3`}
                >
                  {step.number}
                </span>
                <p
                  className={`text-base font-medium ${
                    index <= activeStep ? 'text-blue-900' : 'text-gray-500'
                  }`}
                >
                  {step.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
