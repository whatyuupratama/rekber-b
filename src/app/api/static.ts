import {
  Shield,
  Zap,
  HeadphonesIcon,
  CheckCircle,
  Clock,
  Users,
} from 'lucide-react';
import { UserPlus, CreditCard } from 'lucide-react';

export const landingText = {
  heading: 'Transaksi Aman',
  highlight: 'Tanpa Khawatir',
  subheading: 'Penipuan',
  description:
    'Rekber.com jembatan pembayaran antara pembeli & penjual yang terpercaya',
  button: 'Mulai sekarang',
  placeholderNominal: '800.000',
  currency: 'Rp',
  selectStatus: [
    { value: 'penjual', label: 'Saya Penjual' },
    { value: 'pembeli', label: 'Saya Pembeli' },
  ],
  selectCategory: [
    { value: 'jual-beli', label: 'Akun, kendaraan, gadget...' },
    { value: 'akun', label: 'Akun Media Sosial' },
    { value: 'mobil', label: 'Kendaraan' },
    { value: 'gadget', label: 'Gadget & Elektronik' },
    { value: 'jasa', label: 'Jasa & Layanan' },
  ],
  selectCurrency: [
    { value: 'idr', label: 'IDR', flag: '🇮🇩', color: 'text-red-500' },
  ],
  processSteps: [
    'Pembeli dan penjual setuju dengan syarat',
    'Pembeli membayar Rekber.com',
    'Penjual mengirim {category}',
    'Pembeli memeriksa & menyetujui {category}',
    'Rekber.com membayar penjual',
  ],
  processStepHighlight: [false, false, true, true, false], // untuk dynamic {category}
  processStepBold: [false, false, false, false, true], // untuk bold step terakhir
  processStepIconColor: 'bg-green-500',
};
export const features = [
  {
    icon: Shield,
    iconClass: 'w-8 h-8 text-blue-600',
    bgClass: 'bg-blue-100',
    title: '100% Aman',
    desc: 'Dana Anda dijamin aman dengan sistem escrow terpercaya dan terenkripsi',
  },
  {
    icon: Zap,
    iconClass: 'w-8 h-8 text-green-600',
    bgClass: 'bg-green-100',
    title: 'Proses Cepat',
    desc: 'Transaksi diproses dengan cepat dan efisien dalam hitungan menit',
  },
  {
    icon: HeadphonesIcon,
    iconClass: 'w-8 h-8 text-purple-600',
    bgClass: 'bg-purple-100',
    title: 'Support 24/7',
    desc: 'Tim support profesional siap membantu Anda kapan saja dibutuhkan',
  },
  {
    icon: CheckCircle,
    iconClass: 'w-8 h-8 text-orange-600',
    bgClass: 'bg-orange-100',
    title: 'Terpercaya',
    desc: 'Dipercaya oleh ribuan pengguna dengan rating kepuasan tinggi',
  },
  {
    icon: Clock,
    iconClass: 'w-8 h-8 text-red-600',
    bgClass: 'bg-red-100',
    title: 'Real-time',
    desc: 'Pantau status transaksi Anda secara real-time dengan notifikasi instant',
  },
  {
    icon: Users,
    iconClass: 'w-8 h-8 text-indigo-600',
    bgClass: 'bg-indigo-100',
    title: 'Komunitas',
    desc: 'Bergabung dengan komunitas trader dan seller terpercaya di Indonesia',
  },
];

export const works = [
  {
    icon: UserPlus,
    iconClass: 'w-8 h-8 text-blue-600',
    bgClass: 'bg-blue-100',
    title: 'Daftar',
    desc: 'Buat akun dan verifikasi identitas Anda dengan mudah',
  },
  {
    icon: CreditCard,
    iconClass: 'w-8 h-8 text-green-600',
    bgClass: 'bg-green-100',
    title: 'Deposit',
    desc: 'Pembeli melakukan deposit dana ke rekening bersama',
  },
  {
    icon: Shield,
    iconClass: 'w-8 h-8 text-purple-600',
    bgClass: 'bg-purple-100',
    title: 'Transaksi',
    desc: 'Penjual mengirim barang, pembeli konfirmasi penerimaan',
  },
  {
    icon: CheckCircle,
    iconClass: 'w-8 h-8 text-orange-600',
    bgClass: 'bg-orange-100',
    title: 'Selesai',
    desc: 'Dana otomatis diteruskan ke penjual setelah konfirmasi',
  },
];
