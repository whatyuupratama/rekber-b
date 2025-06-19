'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { User, Car, Smartphone } from 'lucide-react';
import { landingText } from '@/app/api/static';
import { CategoryShowcase } from '@/app/components/molecule/categoryShowcase';

const categories = [
  { icon: User, label: 'Akun', color: 'text-blue-500' },
  { icon: Car, label: 'Mobil', color: 'text-green-500' },
  { icon: Smartphone, label: 'Gadget', color: 'text-purple-500' },
];

export default function RekberLanding() {
  const [currentCategory, setCurrentCategory] = useState(0);
  const [value, setValue] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCategory((prev) => (prev + 1) % categories.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value.replace(/\D/g, ''); // hanya angka
    const numberValue = Number(rawValue);
    const formattedValue = new Intl.NumberFormat('id-ID').format(numberValue);
    setValue(formattedValue);
  };
  return (
    <section id='section'>
      <div className='bg-gradient-to-br from-gray-50 to-blue-50'>
        <div className='container mx-auto px-6 py-12'>
          <div className='grid lg:grid-cols-2 gap-12 items-center'>
            <div className='space-y-8'>
              <div className='space-y-6'>
                <h1 className='text-4xl lg:text-5xl font-bold leading-tight'>
                  <span className='text-gray-900'>{landingText.heading}</span>
                  <br />
                  <span className='text-gray-900'>{landingText.highlight}</span>
                  <br />
                  <span className='text-gray-900'>
                    {landingText.subheading}
                  </span>
                </h1>
                <p className='text-lg text-gray-600 leading-relaxed'>
                  {landingText.description}
                </p>
              </div>

              <div className='space-y-4 max-w-3xl'>
                <div className='grid grid-cols-3 gap-0'>
                  <div className='col-span-1'>
                    <Select defaultValue={landingText.selectStatus[0].value}>
                      <SelectTrigger
                        className='bg-white text-gray-800 border border-gray-300 rounded-r-none w-full text-base'
                        style={{ height: 'calc(var(--spacing) * 14)' }}
                      >
                        <SelectValue
                          placeholder={landingText.selectStatus[0].label}
                        />
                      </SelectTrigger>
                      <SelectContent>
                        {landingText.selectStatus.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className='col-span-2'>
                    <Select defaultValue={landingText.selectCategory[0].value}>
                      <SelectTrigger
                        className='bg-white text-gray-500 border border-gray-300 rounded-l-none w-full text-base'
                        style={{ height: 'calc(var(--spacing) * 14)' }}
                      >
                        <SelectValue
                          placeholder={landingText.selectCategory[0].label}
                        />
                      </SelectTrigger>
                      <SelectContent>
                        {landingText.selectCategory.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className='grid grid-cols-3 gap-0'>
                  <div className='relative col-span-2'>
                    <Input
                      placeholder={landingText.placeholderNominal}
                      value={value}
                      onChange={handleChange}
                      className='bg-white text-gray-800 border border-gray-300 rounded-r-none h-14 text-base pl-16 w-full'
                    />
                    <span className='absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-600 font-medium text-base'>
                      {landingText.currency}
                    </span>
                  </div>

                  <div className='col-span-1'>
                    <Select defaultValue={landingText.selectCurrency[0].value}>
                      <SelectTrigger
                        className='bg-white text-gray-800 border border-gray-300 rounded-l-none w-full text-base'
                        style={{ height: 'calc(var(--spacing) * 14)' }}
                      >
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {landingText.selectCurrency.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            <div className='flex items-center space-x-2'>
                              <span className={option.color}>
                                {option.flag}
                              </span>
                              <span>{option.label}</span>
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Button className='w-full bg-blue-500 hover:bg-blue-600 text-white h-14 text-base font-semibold rounded-lg'>
                  {landingText.button}
                </Button>
              </div>
            </div>
            <div className='hidden lg:block relative'>
              <CategoryShowcase
                categories={categories}
                currentCategory={currentCategory}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
