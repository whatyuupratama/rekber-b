'use client';

import { useState } from 'react';
import type React from 'react';
import {
  User,
  Mail,
  Phone,
  Calendar,
  Briefcase,
  MapPin,
  FileText,
  Edit3,
  Save,
  X,
  AlertTriangle,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
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
import { Alert, AlertDescription } from '@/components/ui/alert';

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    fullName: '',
    email: 'haditmizi@gmail.com',
    primaryPhone: '',
    alternativePhone: '',
    birthDate: '',
    gender: '',
    occupation: '',
    billingAddress: '',
    aboutMe: '',
  });

  const handleSave = () => {
    console.log('Profile saved:', profileData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    // Reset form data if needed
  };

  const ProfileField = ({
    icon: Icon,
    label,
    value,
    field,
  }: {
    icon: React.ElementType;
    label: string;
    value: string;
    field: keyof typeof profileData;
  }) => {
    if (isEditing) {
      if (field === 'aboutMe') {
        return (
          <div className='space-y-3'>
            <Label className='text-sm font-semibold text-slate-700 flex items-center space-x-2'>
              <Icon className='w-4 h-4' />
              <span>{label}</span>
            </Label>
            <Textarea
              value={profileData[field]}
              onChange={(e) =>
                setProfileData({ ...profileData, [field]: e.target.value })
              }
              placeholder={`Masukkan ${label.toLowerCase()}`}
              className='min-h-[100px] border-slate-200 focus:border-blue-500 focus:ring-blue-500/20 bg-white/80'
            />
          </div>
        );
      }

      if (field === 'gender') {
        return (
          <div className='space-y-3'>
            <Label className='text-sm font-semibold text-slate-700 flex items-center space-x-2'>
              <Icon className='w-4 h-4' />
              <span>{label}</span>
            </Label>
            <Select
              value={profileData[field]}
              onValueChange={(value) =>
                setProfileData({ ...profileData, [field]: value })
              }
            >
              <SelectTrigger className='h-12 border-slate-200 focus:border-blue-500 focus:ring-blue-500/20 bg-white/80'>
                <SelectValue placeholder='Pilih jenis kelamin' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='laki-laki'>Laki-laki</SelectItem>
                <SelectItem value='perempuan'>Perempuan</SelectItem>
              </SelectContent>
            </Select>
          </div>
        );
      }

      return (
        <div className='space-y-3'>
          <Label className='text-sm font-semibold text-slate-700 flex items-center space-x-2'>
            <Icon className='w-4 h-4' />
            <span>{label}</span>
          </Label>
          <Input
            type={
              field === 'email'
                ? 'email'
                : field === 'birthDate'
                ? 'date'
                : 'text'
            }
            value={profileData[field]}
            onChange={(e) =>
              setProfileData({ ...profileData, [field]: e.target.value })
            }
            placeholder={`Masukkan ${label.toLowerCase()}`}
            className='h-12 border-slate-200 focus:border-blue-500 focus:ring-blue-500/20 bg-white/80'
          />
        </div>
      );
    }

    return (
      <div className='space-y-3'>
        <Label className='text-sm font-semibold text-slate-700 flex items-center space-x-2'>
          <Icon className='w-4 h-4' />
          <span>{label}</span>
        </Label>
        <div className='p-3 bg-slate-50 rounded-lg border border-slate-200'>
          <p className='text-slate-600'>
            {value || (
              <span className='text-slate-400 italic'>Belum diatur</span>
            )}
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-white'>
      <div className='p-2'>
        <Alert className='mb-8 border-amber-200 bg-amber-50'>
          <AlertTriangle className='h-4 w-4 text-amber-600' />
          <AlertDescription className='text-amber-800'>
            Harap lengkapi informasi akun Anda. Pastikan nama Anda sesuai dengan
            nama di rekening bank karena sistem tidak menerima pembayaran dari
            pihak ketiga.
          </AlertDescription>
        </Alert>
        <Card className='shadow-xl border-0 bg-white/70 backdrop-blur-sm'>
          <CardHeader className='pb-6'>
            <div className='flex justify-between items-start'>
              <div className='flex items-center space-x-3'>
                <div className='w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center'>
                  <User className='w-5 h-5 text-blue-600' />
                </div>
                <div>
                  <CardTitle className='text-2xl font-bold text-slate-800'>
                    Informasi Pemegang Akun
                  </CardTitle>
                  <CardDescription className='text-slate-600 mt-1'>
                    Informasi dasar tentang profil Anda
                  </CardDescription>
                </div>
              </div>

              {!isEditing ? (
                <Button
                  onClick={() => setIsEditing(true)}
                  variant='outline'
                  className='border-blue-200 text-blue-600 hover:bg-blue-50'
                >
                  <Edit3 className='w-4 h-4 mr-2' />
                  Edit Profil
                </Button>
              ) : (
                <div className='flex space-x-2'>
                  <Button
                    onClick={handleSave}
                    className='bg-green-600 hover:bg-green-700 text-white'
                  >
                    <Save className='w-4 h-4 mr-2' />
                    Simpan
                  </Button>
                  <Button
                    onClick={handleCancel}
                    variant='outline'
                    className='border-slate-200 text-slate-600 hover:bg-slate-50'
                  >
                    <X className='w-4 h-4 mr-2' />
                    Batal
                  </Button>
                </div>
              )}
            </div>
          </CardHeader>

          <CardContent>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
              <div className='space-y-6'>
                <ProfileField
                  icon={User}
                  label='NAMA LENGKAP'
                  value={profileData.fullName}
                  field='fullName'
                />
                <ProfileField
                  icon={Phone}
                  label='TELEPON UTAMA'
                  value={profileData.primaryPhone}
                  field='primaryPhone'
                />
                <ProfileField
                  icon={Calendar}
                  label='TANGGAL LAHIR'
                  value={profileData.birthDate}
                  field='birthDate'
                />
                <ProfileField
                  icon={Briefcase}
                  label='PEKERJAAN'
                  value={profileData.occupation}
                  field='occupation'
                />
                <ProfileField
                  icon={MapPin}
                  label='ALAMAT TAGIHAN'
                  value={profileData.billingAddress}
                  field='billingAddress'
                />
              </div>

              {/* Right Column */}
              <div className='space-y-6'>
                <ProfileField
                  icon={Mail}
                  label='ALAMAT EMAIL'
                  value={profileData.email}
                  field='email'
                />
                <ProfileField
                  icon={Phone}
                  label='TELEPON ALTERNATIF'
                  value={profileData.alternativePhone}
                  field='alternativePhone'
                />
                <ProfileField
                  icon={User}
                  label='JENIS KELAMIN'
                  value={profileData.gender}
                  field='gender'
                />
                <ProfileField
                  icon={FileText}
                  label='TENTANG SAYA'
                  value={profileData.aboutMe}
                  field='aboutMe'
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
