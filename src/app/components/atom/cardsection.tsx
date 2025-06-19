import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  statusOptions,
  transactionTypes,
  heroSectionText,
} from '@/app/api/static';

export const Cardsection = () => {
  return (
    <div className='w-full max-w-md bg-white border border-gray-200 rounded-xl p-8'>
      <div className='mb-6'>
        <h3 className='text-2xl font-bold text-gray-900 text-center mb-2'>
          {heroSectionText.formTitle}
        </h3>
        <p className='text-gray-600 text-center text-sm'>
          {heroSectionText.formSubtitle}
        </p>
      </div>
      <div className='space-y-5'>
        <div className='space-y-2'>
          <label className='text-sm font-medium text-gray-700 block'>
            {heroSectionText.statusLabel}
          </label>
          <Select defaultValue={statusOptions[0].value}>
            <SelectTrigger className='h-12 w-full rounded-lg border border-gray-300 bg-gray-50 hover:bg-white focus:bg-white focus:border-blue-500 focus:ring-0 transition-colors'>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {statusOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className='space-y-2'>
          <label className='text-sm font-medium text-gray-700 block'>
            {heroSectionText.nominalLabel}
          </label>
          <Input
            placeholder={heroSectionText.nominalPlaceholder}
            className='h-12 rounded-lg border border-gray-300 bg-gray-50 hover:bg-white focus:bg-white focus:border-blue-500 focus:ring-0 transition-colors'
          />
        </div>
        <div className='space-y-2'>
          <label className='text-sm font-medium text-gray-700 block'>
            {heroSectionText.transactionTypeLabel}
          </label>
          <Select defaultValue={transactionTypes[0].value}>
            <SelectTrigger className='h-12 w-full rounded-lg border border-gray-300 bg-gray-50 hover:bg-white focus:bg-white focus:border-blue-500 focus:ring-0 transition-colors'>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {transactionTypes.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <Button className='w-full h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors mt-6'>
          {heroSectionText.submit}
        </Button>
      </div>
    </div>
  );
};
