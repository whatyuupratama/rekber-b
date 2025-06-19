import {
  Shield,
  Zap,
  HeadphonesIcon,
  CheckCircle,
  Clock,
  Users,
} from 'lucide-react';
import { UserPlus, CreditCard } from 'lucide-react';

export const heroSectionText = {
  heading: 'Transaksi Aman',
  highlight: 'Tanpa Khawatir',
  subheading: 'Penipuan',
  description:
    'Rekber.com jembatan pembayaran antara pembeli & penjual yang terpercaya',
  button: 'Mulai Sekarang',
  formTitle: 'Buat Rekening Bersama',
  formSubtitle: 'Mulai transaksi aman Anda sekarang',
  statusLabel: 'Status',
  nominalLabel: 'Nominal',
  transactionTypeLabel: 'Jenis Transaksi',
  nominalPlaceholder: 'Masukkan nominal',
  submit: 'Lanjutkan',
};

export const heroStats = [
  { value: '10K+', label: 'Transaksi Aman' },
  { value: '5K+', label: 'Pengguna Aktif' },
  { value: '99%', label: 'Tingkat Kepuasan' },
];

export const statusOptions = [
  { value: 'seller', label: 'Saya Penjual' },
  { value: 'buyer', label: 'Saya Pembeli' },
];

export const transactionTypes = [
  { value: 'online', label: 'Jual Beli Online' },
  { value: 'offline', label: 'Jual Beli Offline' },
  { value: 'service', label: 'Jasa' },
];
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
