'use client';

import { useState, useEffect } from 'react';
import {
  Code,
  Shield,
  ThumbsUp,
  RefreshCw,
  BarChart2,
  LineChart,
  PieChart,
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function Features() {
  const [chartData, setChartData] = useState<number[]>([
    35, 40, 30, 50, 45, 60, 55, 65, 70, 85,
  ]);
  const [pieData, setPieData] = useState<number[]>([65, 35]);
  const [barData, setBarData] = useState<number[]>([30, 60, 45, 80]);
  const [trend, setTrend] = useState(15);

  // Animate chart data
  useEffect(() => {
    const interval = setInterval(() => {
      setChartData((prev) => {
        const newData = [...prev];
        newData.shift();
        newData.push(Math.floor(Math.random() * 40) + 40);
        return newData;
      });

      setPieData([
        Math.floor(Math.random() * 30) + 55,
        Math.floor(Math.random() * 20) + 25,
      ]);

      setBarData((prev) => prev.map(() => Math.floor(Math.random() * 60) + 30));
      setTrend(Math.floor(Math.random() * 20) + 10); // Tambah ini
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className='py-16 px-4 bg-white'>
      <div className='max-w-5xl mx-auto'>
        <div className='text-center mb-10'>
          <h2 className='text-2xl font-bold text-blue-600 mb-3'>
            Fitur Terlengkap
          </h2>
          <p className='text-slate-600 max-w-xl mx-auto text-sm'>
            Nikmati kemudahan dan keamanan dalam setiap transaksi online Anda
            bersama Rekber.
          </p>
        </div>

        <div className='flex flex-col lg:flex-row items-start gap-8'>
          {/* Left side - Features */}
          <div className='w-full lg:w-1/2'>
            <div className='space-y-6'>
              {/* Feature 1 */}
              <div className='flex items-start gap-3 group'>
                <div className='flex-shrink-0'>
                  <div className='w-8 h-8 bg-blue-500 rounded-md flex items-center justify-center'>
                    <Code className='h-4 w-4 text-white' />
                  </div>
                </div>
                <div>
                  <h3 className='text-base font-medium text-slate-800 mb-1 group-hover:text-blue-500 transition-colors'>
                    Pembayaran Aman
                  </h3>
                  <p className='text-slate-500 text-xs'>
                    Dana ditransfer ke rekening penengah dengan enkripsi tingkat
                    lanjut.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className='flex items-start gap-3 group'>
                <div className='flex-shrink-0'>
                  <div className='w-8 h-8 bg-blue-500 rounded-md flex items-center justify-center'>
                    <Shield className='h-4 w-4 text-white' />
                  </div>
                </div>
                <div>
                  <h3 className='text-base font-medium text-slate-800 mb-1 group-hover:text-blue-500 transition-colors'>
                    Transaksi Termonitor
                  </h3>
                  <p className='text-slate-500 text-xs'>
                    Pantau setiap tahap transaksi dengan dashboard real-time.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className='flex items-start gap-3 group'>
                <div className='flex-shrink-0'>
                  <div className='w-8 h-8 bg-blue-500 rounded-md flex items-center justify-center'>
                    <ThumbsUp className='h-4 w-4 text-white' />
                  </div>
                </div>
                <div>
                  <h3 className='text-base font-medium text-slate-800 mb-1 group-hover:text-blue-500 transition-colors'>
                    Kepuasan Pelanggan
                  </h3>
                  <p className='text-slate-500 text-xs'>
                    Sistem rating dan feedback yang meningkatkan kepercayaan
                    bertransaksi.
                  </p>
                </div>
              </div>

              {/* Feature 4 */}
              <div className='flex items-start gap-3 group'>
                <div className='flex-shrink-0'>
                  <div className='w-8 h-8 bg-blue-500 rounded-md flex items-center justify-center'>
                    <RefreshCw className='h-4 w-4 text-white' />
                  </div>
                </div>
                <div>
                  <h3 className='text-base font-medium text-slate-800 mb-1 group-hover:text-blue-500 transition-colors'>
                    Pengembalian Dana
                  </h3>
                  <p className='text-slate-500 text-xs'>
                    Jaminan pengembalian dana 100% jika barang tidak sesuai
                    kesepakatan.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Analytics Dashboard */}
          <div className='w-full lg:w-1/2'>
            <div className='bg-white border border-slate-100 rounded-lg p-3'>
              {/* Dashboard Header */}
              <div className='flex justify-between items-center mb-3'>
                <div>
                  <h3 className='text-sm font-medium text-slate-800'>
                    Insight Transaksi
                  </h3>
                  <p className='text-[10px] text-slate-400'>Update otomatis</p>
                </div>
                <div className='flex space-x-1.5'>
                  <div className='w-1.5 h-1.5 rounded-full bg-red-400'></div>
                  <div className='w-1.5 h-1.5 rounded-full bg-yellow-400'></div>
                  <div className='w-1.5 h-1.5 rounded-full bg-green-400'></div>
                </div>
              </div>

              <div className='grid grid-cols-2 gap-2'>
                {/* Line Chart */}
                <div className='col-span-2 border border-slate-50 p-2 rounded-md bg-slate-50/50'>
                  <div className='flex justify-between items-center mb-2'>
                    <div className='flex items-center'>
                      <LineChart className='h-3 w-3 text-blue-500 mr-1' />
                      <h4 className='text-[10px] font-medium text-slate-700'>
                        Tren Transaksi
                      </h4>
                    </div>
                    <span className='text-[10px] font-medium text-blue-500'>
                      +{trend}%
                    </span>
                  </div>
                  <div className='h-16 flex items-end justify-between'>
                    {chartData.map((value, index) => (
                      <motion.div
                        key={index}
                        className='w-[8%] bg-blue-400 rounded-t'
                        initial={{ height: 0 }}
                        animate={{ height: `${value}%` }}
                        transition={{ duration: 0.5, delay: index * 0.05 }}
                      ></motion.div>
                    ))}
                  </div>
                </div>

                {/* Pie Chart */}
                <div className='border border-slate-50 p-2 rounded-md bg-slate-50/50'>
                  <div className='flex items-center mb-1'>
                    <PieChart className='h-3 w-3 text-blue-500 mr-1' />
                    <h4 className='text-[10px] font-medium text-slate-700'>
                      Tingkat Sukses
                    </h4>
                  </div>
                  <div className='flex justify-center'>
                    <div className='relative w-12 h-12'>
                      <svg viewBox='0 0 36 36' className='w-full h-full'>
                        <motion.path
                          d='M18 2.0845
                            a 15.9155 15.9155 0 0 1 0 31.831
                            a 15.9155 15.9155 0 0 1 0 -31.831'
                          fill='none'
                          stroke='#E2E8F0'
                          strokeWidth='3'
                          strokeDasharray='100, 100'
                        />
                        <motion.path
                          d='M18 2.0845
                            a 15.9155 15.9155 0 0 1 0 31.831
                            a 15.9155 15.9155 0 0 1 0 -31.831'
                          fill='none'
                          stroke='#3B82F6'
                          strokeWidth='3'
                          initial={{ strokeDasharray: '0, 100' }}
                          animate={{ strokeDasharray: `${pieData[0]}, 100` }}
                          transition={{ duration: 1 }}
                        />
                      </svg>
                      <div className='absolute inset-0 flex items-center justify-center'>
                        <span className='text-xs font-medium text-blue-500'>
                          {pieData[0]}%
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bar Chart */}
                <div className='border border-slate-50 p-2 rounded-md bg-slate-50/50'>
                  <div className='flex items-center mb-1'>
                    <BarChart2 className='h-3 w-3 text-blue-500 mr-1' />
                    <h4 className='text-[10px] font-medium text-slate-700'>
                      Statistik Mingguan
                    </h4>
                  </div>
                  <div className='h-12 flex items-end justify-between'>
                    {barData.map((value, index) => (
                      <motion.div
                        key={index}
                        className='w-[20%] bg-blue-400 rounded-t'
                        initial={{ height: 0 }}
                        animate={{ height: `${value}%` }}
                        transition={{ duration: 0.5 }}
                      ></motion.div>
                    ))}
                  </div>
                  <div className='flex justify-between mt-1'>
                    <span className='text-[8px] text-slate-400'>S</span>
                    <span className='text-[8px] text-slate-400'>M</span>
                    <span className='text-[8px] text-slate-400'>T</span>
                    <span className='text-[8px] text-slate-400'>W</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className='mt-10 text-center'>
          <button className='bg-blue-500 hover:bg-blue-600 text-white font-medium text-sm py-2 px-5 rounded-md transition-colors'>
            Yuk, Transaksi Lebih Seru!
          </button>
          <p className='mt-2 text-slate-400 text-[10px]'>
            Gabung dengan 10,000+ pengguna yang sudah #NyamanBersamaRekber
          </p>
        </div>
      </div>
    </section>
  );
}
