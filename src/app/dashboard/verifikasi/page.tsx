'use client';

import type React from 'react';
import { useState } from 'react';
import { Info, User, Camera } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function VerificationForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    nikKtp: '',
    gender: '',
    selfieFile: null as File | null,
    photoFile: null as File | null,
  });

  const handleFileChange =
    (field: 'selfieFile' | 'photoFile') =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0] || null;
      setFormData({ ...formData, [field]: file });
    };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Verification form submitted:', formData);
  };

  const FileUploadArea = ({
    field,
    label,
    icon: Icon,
    hasInfo = false,
  }: {
    field: 'selfieFile' | 'photoFile';
    label: string;
    icon: React.ElementType;
    hasInfo?: boolean;
  }) => {
    const file = formData[field];

    return (
      <div className='space-y-3'>
        <div className='flex items-center space-x-2'>
          <Label
            htmlFor={field}
            className='text-sm font-semibold text-slate-700'
          >
            {label} <span className='text-red-500'>*</span>
          </Label>
          {hasInfo && (
            <div className='w-4 h-4 bg-blue-100 rounded-full flex items-center justify-center'>
              <Info className='w-3 h-3 text-blue-600' />
            </div>
          )}
        </div>
        <div className='relative'>
          <input
            type='file'
            accept='.jpg,.jpeg,.png'
            onChange={handleFileChange(field)}
            className='absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10'
            id={field}
            required
          />
          <div className='border-2 border-dashed border-slate-200 rounded-xl p-8 bg-white/50 hover:bg-white/80 hover:border-blue-300 transition-all duration-200 cursor-pointer'>
            <div className='flex flex-col items-center space-y-4'>
              <div className='w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center'>
                <Icon className='w-6 h-6 text-blue-600' />
              </div>
              {file ? (
                <div className='text-center'>
                  <p className='text-sm font-medium text-slate-700'>
                    {file.name}
                  </p>
                  <p className='text-xs text-slate-500 mt-1'>File selected</p>
                </div>
              ) : (
                <div className='text-center'>
                  <Button
                    type='button'
                    variant='outline'
                    className='mb-2 border-blue-200 text-blue-600 hover:bg-blue-50'
                  >
                    Choose File
                  </Button>
                  <p className='text-xs text-slate-500'>No file chosen</p>
                </div>
              )}
            </div>
          </div>
          <p className='text-xs text-green-600 mt-2 font-medium'>
            Supported mimes: jpg, jpeg, png
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-white'>
      <main className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8'> 

        <Card className='shadow-xl border-0 bg-white/70 backdrop-blur-sm'>
          <CardHeader className='pb-8'>
            <div className='flex items-center space-x-3 mb-4'>
              <div className='w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center'>
                <Info className='w-5 h-5 text-blue-600' />
              </div>
              <CardTitle className='text-2xl font-bold text-slate-800'>
                Formulir Verifikasi
              </CardTitle>
            </div>
            <CardDescription className='text-slate-600 text-base leading-relaxed'>
              Pastikan semua informasi yang Anda masukkan akurat dan sesuai
              dengan dokumen resmi Anda.
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className='space-y-8'>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div className='space-y-3'>
                  <Label
                    htmlFor='fullName'
                    className='text-sm font-semibold text-slate-700'
                  >
                    Nama Lengkap <span className='text-red-500'>*</span>
                  </Label>
                  <Input
                    id='fullName'
                    type='text'
                    placeholder='Masukkan nama lengkap sesuai KTP'
                    value={formData.fullName}
                    onChange={(e) =>
                      setFormData({ ...formData, fullName: e.target.value })
                    }
                    className='h-12 border-slate-200 focus:border-blue-500 focus:ring-blue-500/20 bg-white/80'
                    required
                  />
                </div>
                <div className='space-y-3'>
                  <Label
                    htmlFor='nikKtp'
                    className='text-sm font-semibold text-slate-700'
                  >
                    NIK KTP <span className='text-red-500'>*</span>
                  </Label>
                  <Input
                    id='nikKtp'
                    type='text'
                    placeholder='16 digit NIK pada KTP'
                    value={formData.nikKtp}
                    onChange={(e) =>
                      setFormData({ ...formData, nikKtp: e.target.value })
                    }
                    className='h-12 border-slate-200 focus:border-blue-500 focus:ring-blue-500/20 bg-white/80'
                    maxLength={16}
                    pattern='[0-9]{16}'
                    required
                  />
                </div>
              </div>

              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div className='space-y-3'>
                  <Label
                    htmlFor='gender'
                    className='text-sm font-semibold text-slate-700'
                  >
                    Jenis Kelamin <span className='text-red-500'>*</span>
                  </Label>
                  <Select
                    value={formData.gender}
                    onValueChange={(value) =>
                      setFormData({ ...formData, gender: value })
                    }
                  >
                    <SelectTrigger
                      id='gender'
                      className='w-full h-12 border-slate-200 focus:border-blue-500 focus:ring-blue-500/20 bg-white/80'
                    >
                      <SelectValue placeholder='Pilih Salah Satu' />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value='laki-laki'>Laki-laki</SelectItem>
                      <SelectItem value='perempuan'>Perempuan</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                <FileUploadArea
                  field='selfieFile'
                  label='Foto Selfie Memegang KTP'
                  icon={Camera}
                />
                <FileUploadArea
                  field='photoFile'
                  label='Foto Diri Kamu'
                  icon={User}
                  hasInfo={true}
                />
              </div>
              <div className='flex justify-end pt-6'>
                <Button
                  type='submit'
                  className='bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 h-12 font-semibold shadow-lg hover:shadow-xl transition-all duration-200'
                >
                  Submit Verification
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
