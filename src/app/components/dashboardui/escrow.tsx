'use client';

import type React from 'react';
import { useState, useCallback } from 'react';
import { Upload, FileText, Download, Plus, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';

interface UploadedFile {
  id: string;
  name: string;
  size: number;
  type: string;
  uploadedAt: Date;
}

export default function EscrowContent() {
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
  const [isDragOver, setIsDragOver] = useState(false);
  const [showManualForm, setShowManualForm] = useState(false);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);

    const files = Array.from(e.dataTransfer.files);
    files.forEach((file) => {
      const newFile: UploadedFile = {
        id: Math.random().toString(36).substr(2, 9),
        name: file.name,
        size: file.size,
        type: file.type,
        uploadedAt: new Date(),
      };
      setUploadedFiles((prev) => [...prev, newFile]);
    });
  }, []);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    files.forEach((file) => {
      const newFile: UploadedFile = {
        id: Math.random().toString(36).substr(2, 9),
        name: file.name,
        size: file.size,
        type: file.type,
        uploadedAt: new Date(),
      };
      setUploadedFiles((prev) => [...prev, newFile]);
    });
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Byte';
    const k = 1024;
    const sizes = ['Byte', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return (
      Number.parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
    );
  };

  const requiredDocuments = [
    {
      name: 'Faktur Proforma',
      uploaded: uploadedFiles.some((f) =>
        f.name.toLowerCase().includes('invoice')
      ),
    },
    {
      name: 'Purchase Order',
      uploaded: uploadedFiles.some((f) =>
        f.name.toLowerCase().includes('order')
      ),
    },
    {
      name: 'Foto Produk',
      uploaded: uploadedFiles.some((f) => f.type.startsWith('image/')),
    },
    { name: 'Dokumen Pengiriman', uploaded: false },
  ];

  return (
    <div className='min-h-screen bg-gray-50'>
      <div className='max-w-7xl mx-auto p-6'>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
          {/* Area Konten Utama */}
          <div className='lg:col-span-2 space-y-6'>
            {/* Bagian Detail Produk */}
            <Card>
              <CardHeader>
                <CardTitle className='text-2xl text-blue-600'>
                  Detail Produk
                </CardTitle>
                <CardDescription>
                  Unggah dokumen produk atau tambahkan detail secara manual
                </CardDescription>
              </CardHeader>
              <CardContent className='space-y-6'>
                {/* Area Upload */}
                <div
                  className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                    isDragOver
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-300 hover:border-blue-400'
                  }`}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                >
                  <Upload className='mx-auto h-12 w-12 text-gray-400 mb-4' />
                  <div className='space-y-2'>
                    <Button className='bg-blue-600 hover:bg-blue-700'>
                      <Upload className='mr-2 h-4 w-4' />
                      Unggah Dokumen
                    </Button>
                    <input
                      type='file'
                      multiple
                      onChange={handleFileUpload}
                      className='hidden'
                      id='file-upload'
                      accept='.pdf,.doc,.docx,.jpg,.jpeg,.png,.gif'
                    />
                    <label htmlFor='file-upload' className='cursor-pointer'>
                      <p className='text-sm text-gray-500'>
                        atau seret dan lepas file di sini
                      </p>
                    </label>
                  </div>
                </div>

                {uploadedFiles.length > 0 && (
                  <div className='space-y-2'>
                    <h4 className='font-medium text-gray-900'>
                      File yang Diunggah
                    </h4>
                    {uploadedFiles.map((file) => (
                      <div
                        key={file.id}
                        className='flex items-center justify-between p-3 bg-gray-50 rounded-lg'
                      >
                        <div className='flex items-center space-x-3'>
                          <FileText className='h-5 w-5 text-blue-600' />
                          <div>
                            <p className='text-sm font-medium text-gray-900'>
                              {file.name}
                            </p>
                            <p className='text-xs text-gray-500'>
                              {formatFileSize(file.size)}
                            </p>
                          </div>
                        </div>
                        <Button variant='ghost' size='sm'>
                          <Download className='h-4 w-4' />
                        </Button>
                      </div>
                    ))}
                  </div>
                )}
                <div className='flex items-center space-x-4'>
                  <Separator className='flex-1' />
                  <span className='text-sm text-gray-500'>atau</span>
                  <Separator className='flex-1' />
                </div>
                <Button
                  variant='outline'
                  onClick={() => setShowManualForm(!showManualForm)}
                  className='w-full'
                >
                  <Plus className='mr-2 h-4 w-4' />
                  Tambahkan detail produk secara manual
                </Button>

                {showManualForm && (
                  <div className='space-y-4 p-4 border rounded-lg bg-gray-50'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                      <div>
                        <Label htmlFor='product-name'>Nama Produk</Label>
                        <Input
                          id='product-name'
                          placeholder='Masukkan nama produk'
                        />
                      </div>
                      <div>
                        <Label htmlFor='product-value'>Nilai Produk</Label>
                        <Input
                          id='product-value'
                          placeholder='Rp0'
                          type='number'
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor='product-description'>
                        Deskripsi Produk
                      </Label>
                      <Textarea
                        id='product-description'
                        placeholder='Jelaskan detail produk...'
                        rows={3}
                      />
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                      <div>
                        <Label htmlFor='quantity'>Jumlah</Label>
                        <Input id='quantity' placeholder='1' type='number' />
                      </div>
                      <div>
                        <Label htmlFor='unit'>Satuan</Label>
                        <Input id='unit' placeholder='pcs, kg, dll.' />
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
            <div className='space-y-4'>
              <Card>
                <CardHeader>
                  <CardTitle className='text-lg'>
                    Informasi Pengiriman
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <div>
                      <Label htmlFor='shipping-from'>Dikirim Dari</Label>
                      <Input id='shipping-from' placeholder='Alamat asal' />
                    </div>
                    <div>
                      <Label htmlFor='shipping-to'>Dikirim Ke</Label>
                      <Input id='shipping-to' placeholder='Alamat tujuan' />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className='text-lg'>
                    Pemeriksaan Pra-Pengiriman
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className='space-y-2'>
                    <label className='flex items-center space-x-2'>
                      <input type='checkbox' className='rounded' />
                      <span className='text-sm'>Wajib sebelum pengiriman</span>
                    </label>
                    <label className='flex items-center space-x-2'>
                      <input type='checkbox' className='rounded' />
                      <span className='text-sm'>Pemeriksaan pihak ketiga</span>
                    </label>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className='text-lg'>Syarat Pencairan</CardTitle>
                </CardHeader>
                <CardContent>
                  <Textarea
                    placeholder='Tentukan syarat pencairan dana...'
                    rows={3}
                  />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className='text-lg'>Detail Pembayaran</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-4 '>
                    <div>
                      <Label htmlFor='payment-method'>Metode Pembayaran</Label>
                      <Input
                        id='payment-method'
                        placeholder='Transfer bank, kartu, dll.'
                      />
                    </div>
                    <div>
                      <Label htmlFor='payment-terms'>Syarat Pembayaran</Label>
                      <Input
                        id='payment-terms'
                        placeholder='Tempo 30 hari, langsung, dll.'
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          <div className='space-y-6'>
            <Card>
              <CardHeader>
                <CardTitle className='text-lg'>Dokumen Wajib</CardTitle>
                <CardDescription>
                  Permudah proses dengan mengunggah dokumen yang dibutuhkan
                  bersama detail pesanan Anda.
                </CardDescription>
              </CardHeader>
              <CardContent className='space-y-3'>
                {requiredDocuments.map((doc, index) => (
                  <div
                    key={index}
                    className='flex items-center justify-between p-3 border rounded-lg'
                  >
                    <div className='flex items-center space-x-3'>
                      <FileText className='h-5 w-5 text-blue-600' />
                      <span className='text-sm font-medium'>{doc.name}</span>
                    </div>
                    {doc.uploaded ? (
                      <Badge
                        variant='secondary'
                        className='bg-green-100 text-green-800'
                      >
                        <Check className='h-3 w-3 mr-1' />
                        Diunggah
                      </Badge>
                    ) : (
                      <Badge variant='outline'>Belum Ada</Badge>
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className='text-lg'>Status Transaksi</CardTitle>
              </CardHeader>
              <CardContent>
                <div className='space-y-3'>
                  <div className='flex items-center space-x-3'>
                    <div className='w-3 h-3 bg-blue-600 rounded-full'></div>
                    <span className='text-sm'>Upload Dokumen</span>
                  </div>
                  <div className='flex items-center space-x-3'>
                    <div className='w-3 h-3 bg-gray-300 rounded-full'></div>
                    <span className='text-sm text-gray-500'>
                      Review & Persetujuan
                    </span>
                  </div>
                  <div className='flex items-center space-x-3'>
                    <div className='w-3 h-3 bg-gray-300 rounded-full'></div>
                    <span className='text-sm text-gray-500'>
                      Proses Pembayaran
                    </span>
                  </div>
                  <div className='flex items-center space-x-3'>
                    <div className='w-3 h-3 bg-gray-300 rounded-full'></div>
                    <span className='text-sm text-gray-500'>
                      Pengiriman & Penerimaan
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Button className='w-full bg-blue-600 hover:bg-blue-700'>
              Lanjutkan Transaksi
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
