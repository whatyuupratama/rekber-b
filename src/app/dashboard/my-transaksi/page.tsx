// // 'use client';

// // import { useState } from 'react';
// // import {
// //   Search,
// //   Filter,
// //   ChevronRight,
// //   Calendar,
// //   DollarSign,
// //   User,
// //   Activity,
// // } from 'lucide-react';
// // import { Button } from '@/components/ui/button';
// // import { Input } from '@/components/ui/input';
// // import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
// // import { SidebarLayout } from '@/app/components/dashboardui/atom/sidebar';
// // import { useRouter } from 'next/navigation';

// // const tabs = [
// //   { value: 'all', label: 'All' },
// //   { value: 'action-required', label: 'Action Required' },
// //   { value: 'open', label: 'Open' },
// //   { value: 'closed', label: 'Closed' },
// // ];

// // const tableHeaders = [
// //   'ID',
// //   'TRANSACTION TITLE',
// //   'CREATED',
// //   'AMOUNT',
// //   'ROLE',
// //   'STATUS',
// // ];

// // const sampleData = {
// //   all: [
// //     {
// //       id: 'TXN-001',
// //       title: 'Payment Processing',
// //       created: '2024-01-15',
// //       amount: '$1,250.00',
// //       role: 'Admin',
// //       status: 'Completed',
// //     },
// //     {
// //       id: 'TXN-002',
// //       title: 'Refund Request',
// //       created: '2024-01-14',
// //       amount: '$89.99',
// //       role: 'User',
// //       status: 'Pending',
// //     },
// //     {
// //       id: 'TXN-003',
// //       title: 'Subscription Payment',
// //       created: '2024-01-13',
// //       amount: '$29.99',
// //       role: 'User',
// //       status: 'Failed',
// //     },
// //   ],
// //   'action-required': [
// //     {
// //       id: 'TXN-002',
// //       title: 'Refund Request',
// //       created: '2024-01-14',
// //       amount: '$89.99',
// //       role: 'User',
// //       status: 'Pending',
// //     },
// //     {
// //       id: 'TXN-004',
// //       title: 'Dispute Resolution',
// //       created: '2024-01-12',
// //       amount: '$450.00',
// //       role: 'Admin',
// //       status: 'Review',
// //     },
// //   ],
// //   open: [
// //     {
// //       id: 'TXN-005',
// //       title: 'New Payment',
// //       created: '2024-01-15',
// //       amount: '$199.99',
// //       role: 'User',
// //       status: 'Processing',
// //     },
// //     {
// //       id: 'TXN-006',
// //       title: 'Transfer Request',
// //       created: '2024-01-14',
// //       amount: '$750.00',
// //       role: 'Admin',
// //       status: 'In Progress',
// //     },
// //   ],
// //   closed: [
// //     {
// //       id: 'TXN-001',
// //       title: 'Payment Processing',
// //       created: '2024-01-15',
// //       amount: '$1,250.00',
// //       role: 'Admin',
// //       status: 'Completed',
// //     },
// //     {
// //       id: 'TXN-007',
// //       title: 'Monthly Subscription',
// //       created: '2024-01-10',
// //       amount: '$29.99',
// //       role: 'User',
// //       status: 'Completed',
// //     },
// //   ],
// // };

// // type Transaction = {
// //   id: string;
// //   title: string;
// //   created: string;
// //   amount: string;
// //   role: string;
// //   status: string;
// // };

// // function TransactionTable({ data }: { data: Transaction[] }) {
// //   const router = useRouter();

// //   const handleRowClick = (transactionId: string) => {
// //     router.push(`/dashboard/detail-transaksi/${transactionId}`);
// //   };

// //   if (data.length === 0) {
// //     return (
// //       <div className='flex items-center justify-center h-64 text-gray-500 px-4'>
// //         <div className='text-center'>
// //           <p className='text-lg font-medium'>No transactions found</p>
// //           <p className='text-sm mt-1'>
// //             Try adjusting your search or filter criteria
// //           </p>
// //         </div>
// //       </div>
// //     );
// //   }

// //   return (
// //     <div className='divide-y divide-gray-200'>
// //       <div className='hidden md:block'>
// //         {data.map((transaction) => (
// //           <div
// //             key={transaction.id}
// //             onClick={() => handleRowClick(transaction.id)}
// //             className='grid grid-cols-6 gap-4 px-6 py-4 hover:bg-gray-50 transition-colors cursor-pointer'
// //           >
// //             <div className='text-sm font-medium text-gray-900 truncate'>
// //               {transaction.id}
// //             </div>
// //             <div className='text-sm text-gray-900 truncate'>
// //               {transaction.title}
// //             </div>
// //             <div className='text-sm text-gray-500 truncate'>
// //               {transaction.created}
// //             </div>
// //             <div className='text-sm font-medium text-gray-900 truncate'>
// //               {transaction.amount}
// //             </div>
// //             <div className='text-sm text-gray-500 truncate'>
// //               {transaction.role}
// //             </div>
// //             <div className='text-sm'>
// //               <span
// //                 className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
// //                   transaction.status === 'Completed'
// //                     ? 'bg-green-100 text-green-800'
// //                     : transaction.status === 'Pending' ||
// //                       transaction.status === 'Review'
// //                     ? 'bg-yellow-100 text-yellow-800'
// //                     : transaction.status === 'Failed'
// //                     ? 'bg-red-100 text-red-800'
// //                     : 'bg-blue-100 text-blue-800'
// //                 }`}
// //               >
// //                 {transaction.status}
// //               </span>
// //             </div>
// //           </div>
// //         ))}
// //       </div>

// //       <div className='md:hidden'>
// //         {data.map((transaction) => (
// //           <div
// //             key={transaction.id}
// //             onClick={() => handleRowClick(transaction.id)}
// //             className='p-4 hover:bg-gray-50 transition-colors border-b last:border-b-0 cursor-pointer'
// //           >
// //             <div className='flex items-start justify-between mb-3'>
// //               <div className='flex-1 min-w-0'>
// //                 <div className='flex items-center gap-2 mb-1'>
// //                   <span className='text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded'>
// //                     {transaction.id}
// //                   </span>
// //                   <span
// //                     className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
// //                       transaction.status === 'Completed'
// //                         ? 'bg-green-100 text-green-800'
// //                         : transaction.status === 'Pending' ||
// //                           transaction.status === 'Review'
// //                         ? 'bg-yellow-100 text-yellow-800'
// //                         : transaction.status === 'Failed'
// //                         ? 'bg-red-100 text-red-800'
// //                         : 'bg-blue-100 text-blue-800'
// //                     }`}
// //                   >
// //                     {transaction.status}
// //                   </span>
// //                 </div>
// //                 <h3 className='text-sm font-medium text-gray-900 truncate'>
// //                   {transaction.title}
// //                 </h3>
// //               </div>
// //               <ChevronRight className='h-4 w-4 text-gray-400 ml-2 flex-shrink-0' />
// //             </div>

// //             <div className='grid grid-cols-2 gap-3 text-xs'>
// //               <div className='flex items-center gap-1'>
// //                 <DollarSign className='h-3 w-3 text-gray-400' />
// //                 <span className='font-medium text-gray-900'>
// //                   {transaction.amount}
// //                 </span>
// //               </div>
// //               <div className='flex items-center gap-1'>
// //                 <User className='h-3 w-3 text-gray-400' />
// //                 <span className='text-gray-500'>{transaction.role}</span>
// //               </div>
// //               <div className='flex items-center gap-1'>
// //                 <Calendar className='h-3 w-3 text-gray-400' />
// //                 <span className='text-gray-500'>{transaction.created}</span>
// //               </div>
// //               <div className='flex items-center gap-1'>
// //                 <Activity className='h-3 w-3 text-gray-400' />
// //                 <span className='text-gray-500'>{transaction.status}</span>
// //               </div>
// //             </div>
// //           </div>
// //         ))}
// //       </div>

// //       <div className='hidden sm:block md:hidden'>
// //         {data.map((transaction) => (
// //           <div
// //             key={transaction.id}
// //             onClick={() => handleRowClick(transaction.id)}
// //             className='grid grid-cols-3 gap-4 px-4 py-4 hover:bg-gray-50 transition-colors cursor-pointer'
// //           >
// //             <div className='col-span-2'>
// //               <div className='flex items-center gap-2 mb-1'>
// //                 <span className='text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded'>
// //                   {transaction.id}
// //                 </span>
// //               </div>
// //               <div className='text-sm font-medium text-gray-900 mb-1'>
// //                 {transaction.title}
// //               </div>
// //               <div className='text-xs text-gray-500'>
// //                 {transaction.created} • {transaction.role}
// //               </div>
// //             </div>
// //             <div className='flex flex-col items-end justify-between'>
// //               <div className='text-sm font-medium text-gray-900'>
// //                 {transaction.amount}
// //               </div>
// //               <span
// //                 className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
// //                   transaction.status === 'Completed'
// //                     ? 'bg-green-100 text-green-800'
// //                     : transaction.status === 'Pending' ||
// //                       transaction.status === 'Review'
// //                     ? 'bg-yellow-100 text-yellow-800'
// //                     : transaction.status === 'Failed'
// //                     ? 'bg-red-100 text-red-800'
// //                     : 'bg-blue-100 text-blue-800'
// //                 }`}
// //               >
// //                 {transaction.status}
// //               </span>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }

// // export function MyTransaksiContent() {
// //   const [activeTab, setActiveTab] = useState('action-required');
// //   const [searchQuery, setSearchQuery] = useState('');

// //   const filteredData = (tabData: Transaction[]) => {
// //     if (!searchQuery) return tabData;
// //     return tabData.filter(
// //       (transaction) =>
// //         transaction.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
// //         transaction.id.toLowerCase().includes(searchQuery.toLowerCase())
// //     );
// //   };

// //   return (
// //     <div className='flex flex-col min-h-screen bg-gray-50'>
// //       <Tabs
// //         value={activeTab}
// //         onValueChange={setActiveTab}
// //         className='flex flex-col h-full'
// //       >
// //         <div className='bg-white border-b sticky top-0 z-10'>
// //           <div className='overflow-x-auto'>
// //             <TabsList className='h-12 w-full min-w-max justify-start rounded-none bg-transparent p-0'>
// //               {tabs.map((tab) => (
// //                 <TabsTrigger
// //                   key={tab.value}
// //                   value={tab.value}
// //                   className='relative h-12 rounded-none border-b-2 border-transparent bg-transparent px-4 sm:px-6 pb-3 pt-3 text-gray-600 transition-none data-[state=active]:text-blue-600 hover:text-blue-600 whitespace-nowrap text-sm font-bold'
// //                 >
// //                   {tab.label}
// //                 </TabsTrigger>
// //               ))}
// //             </TabsList>
// //           </div>
// //         </div>

// //         <div className='bg-white p-4 sm:p-6 border-b'>
// //           <div className='flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4'>
// //             <div className='relative flex-1 max-w-md'>
// //               <Search className='absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400' />
// //               <Input
// //                 placeholder='Search transactions...'
// //                 value={searchQuery}
// //                 onChange={(e) => setSearchQuery(e.target.value)}
// //                 className='pl-10 border-gray-200 focus:border-blue-300 focus:ring-1 focus:ring-blue-200 text-sm'
// //               />
// //             </div>
// //             <Button
// //               variant='outline'
// //               className='bg-white text-gray-700 border-gray-200 hover:bg-gray-50 sm:w-auto text-sm'
// //             >
// //               <Filter className='h-4 w-4 mr-2' />
// //               Filter
// //             </Button>
// //           </div>
// //         </div>

// //         <div className='bg-white hidden md:block'>
// //           <div className='grid grid-cols-6 gap-4 px-6 py-3 border-b bg-gray-50'>
// //             {tableHeaders.map((header) => (
// //               <div
// //                 key={header}
// //                 className='text-xs font-medium text-gray-600 uppercase tracking-wide'
// //               >
// //                 {header}
// //               </div>
// //             ))}
// //           </div>
// //         </div>

// //         <div className='bg-gray-50 px-4 py-2 border-b md:hidden'>
// //           <div className='text-xs font-medium text-gray-600 uppercase tracking-wide'>
// //             Transactions
// //           </div>
// //         </div>

// //         <div className='flex-1 bg-white overflow-auto'>
// //           <TabsContent value='all' className='mt-0 h-full'>
// //             <TransactionTable data={filteredData(sampleData.all)} />
// //           </TabsContent>

// //           <TabsContent value='action-required' className='mt-0 h-full'>
// //             <TransactionTable
// //               data={filteredData(sampleData['action-required'])}
// //             />
// //           </TabsContent>

// //           <TabsContent value='open' className='mt-0 h-full'>
// //             <TransactionTable data={filteredData(sampleData.open)} />
// //           </TabsContent>

// //           <TabsContent value='closed' className='mt-0 h-full'>
// //             <TransactionTable data={filteredData(sampleData.closed)} />
// //           </TabsContent>
// //         </div>
// //       </Tabs>
// //     </div>
// //   );
// // }

// // // Default export yang diperlukan Next.js
// // export default function MyTransaksiPage() {
// //   return <SidebarLayout />;
// // }

// 'use client';

// import { useState } from 'react';
// import {
//   Search,
//   Filter,
//   ChevronRight,
//   Calendar,
//   DollarSign,
//   User,
//   Activity,
// } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
// import { SidebarLayout } from '@/app/components/dashboardui/atom/sidebar';
// import { useRouter } from 'next/navigation';

// // HAPUS BARIS INI yang bikin error:
// // const SidebarLayout = SidebarLayout as any akali

// const tabs = [
//   { value: 'all', label: 'All' },
//   { value: 'action-required', label: 'Action Required' },
//   { value: 'open', label: 'Open' },
//   { value: 'closed', label: 'Closed' },
// ];

// const tableHeaders = [
//   'ID',
//   'TRANSACTION TITLE',
//   'CREATED',
//   'AMOUNT',
//   'ROLE',
//   'STATUS',
// ];

// const sampleData = {
//   all: [
//     {
//       id: 'TXN-001',
//       title: 'Payment Processing',
//       created: '2024-01-15',
//       amount: '$1,250.00',
//       role: 'Admin',
//       status: 'Completed',
//     },
//     {
//       id: 'TXN-002',
//       title: 'Refund Request',
//       created: '2024-01-14',
//       amount: '$89.99',
//       role: 'User',
//       status: 'Pending',
//     },
//     {
//       id: 'TXN-003',
//       title: 'Subscription Payment',
//       created: '2024-01-13',
//       amount: '$29.99',
//       role: 'User',
//       status: 'Failed',
//     },
//   ],
//   'action-required': [
//     {
//       id: 'TXN-002',
//       title: 'Refund Request',
//       created: '2024-01-14',
//       amount: '$89.99',
//       role: 'User',
//       status: 'Pending',
//     },
//     {
//       id: 'TXN-004',
//       title: 'Dispute Resolution',
//       created: '2024-01-12',
//       amount: '$450.00',
//       role: 'Admin',
//       status: 'Review',
//     },
//   ],
//   open: [
//     {
//       id: 'TXN-005',
//       title: 'New Payment',
//       created: '2024-01-15',
//       amount: '$199.99',
//       role: 'User',
//       status: 'Processing',
//     },
//     {
//       id: 'TXN-006',
//       title: 'Transfer Request',
//       created: '2024-01-14',
//       amount: '$750.00',
//       role: 'Admin',
//       status: 'In Progress',
//     },
//   ],
//   closed: [
//     {
//       id: 'TXN-001',
//       title: 'Payment Processing',
//       created: '2024-01-15',
//       amount: '$1,250.00',
//       role: 'Admin',
//       status: 'Completed',
//     },
//     {
//       id: 'TXN-007',
//       title: 'Monthly Subscription',
//       created: '2024-01-10',
//       amount: '$29.99',
//       role: 'User',
//       status: 'Completed',
//     },
//   ],
// };

// type Transaction = {
//   id: string;
//   title: string;
//   created: string;
//   amount: string;
//   role: string;
//   status: string;
// };

// function TransactionTable({ data }: { data: Transaction[] }) {
//   const router = useRouter();

//   const handleRowClick = (transactionId: string) => {
//     router.push(`/dashboard/detail-transaksi/${transactionId}`);
//   };

//   if (data.length === 0) {
//     return (
//       <div className='flex items-center justify-center h-64 text-gray-500 px-4'>
//         <div className='text-center'>
//           <p className='text-lg font-medium'>No transactions found</p>
//           <p className='text-sm mt-1'>
//             Try adjusting your search or filter criteria
//           </p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className='divide-y divide-gray-200'>
//       <div className='hidden md:block'>
//         {data.map((transaction) => (
//           <div
//             key={transaction.id}
//             onClick={() => handleRowClick(transaction.id)}
//             className='grid grid-cols-6 gap-4 px-6 py-4 hover:bg-gray-50 transition-colors cursor-pointer'
//           >
//             <div className='text-sm font-medium text-gray-900 truncate'>
//               {transaction.id}
//             </div>
//             <div className='text-sm text-gray-900 truncate'>
//               {transaction.title}
//             </div>
//             <div className='text-sm text-gray-500 truncate'>
//               {transaction.created}
//             </div>
//             <div className='text-sm font-medium text-gray-900 truncate'>
//               {transaction.amount}
//             </div>
//             <div className='text-sm text-gray-500 truncate'>
//               {transaction.role}
//             </div>
//             <div className='text-sm'>
//               <span
//                 className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
//                   transaction.status === 'Completed'
//                     ? 'bg-green-100 text-green-800'
//                     : transaction.status === 'Pending' ||
//                       transaction.status === 'Review'
//                     ? 'bg-yellow-100 text-yellow-800'
//                     : transaction.status === 'Failed'
//                     ? 'bg-red-100 text-red-800'
//                     : 'bg-blue-100 text-blue-800'
//                 }`}
//               >
//                 {transaction.status}
//               </span>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className='md:hidden'>
//         {data.map((transaction) => (
//           <div
//             key={transaction.id}
//             onClick={() => handleRowClick(transaction.id)}
//             className='p-4 hover:bg-gray-50 transition-colors border-b last:border-b-0 cursor-pointer'
//           >
//             <div className='flex items-start justify-between mb-3'>
//               <div className='flex-1 min-w-0'>
//                 <div className='flex items-center gap-2 mb-1'>
//                   <span className='text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded'>
//                     {transaction.id}
//                   </span>
//                   <span
//                     className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
//                       transaction.status === 'Completed'
//                         ? 'bg-green-100 text-green-800'
//                         : transaction.status === 'Pending' ||
//                           transaction.status === 'Review'
//                         ? 'bg-yellow-100 text-yellow-800'
//                         : transaction.status === 'Failed'
//                         ? 'bg-red-100 text-red-800'
//                         : 'bg-blue-100 text-blue-800'
//                     }`}
//                   >
//                     {transaction.status}
//                   </span>
//                 </div>
//                 <h3 className='text-sm font-medium text-gray-900 truncate'>
//                   {transaction.title}
//                 </h3>
//               </div>
//               <ChevronRight className='h-4 w-4 text-gray-400 ml-2 flex-shrink-0' />
//             </div>

//             <div className='grid grid-cols-2 gap-3 text-xs'>
//               <div className='flex items-center gap-1'>
//                 <DollarSign className='h-3 w-3 text-gray-400' />
//                 <span className='font-medium text-gray-900'>
//                   {transaction.amount}
//                 </span>
//               </div>
//               <div className='flex items-center gap-1'>
//                 <User className='h-3 w-3 text-gray-400' />
//                 <span className='text-gray-500'>{transaction.role}</span>
//               </div>
//               <div className='flex items-center gap-1'>
//                 <Calendar className='h-3 w-3 text-gray-400' />
//                 <span className='text-gray-500'>{transaction.created}</span>
//               </div>
//               <div className='flex items-center gap-1'>
//                 <Activity className='h-3 w-3 text-gray-400' />
//                 <span className='text-gray-500'>{transaction.status}</span>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className='hidden sm:block md:hidden'>
//         {data.map((transaction) => (
//           <div
//             key={transaction.id}
//             onClick={() => handleRowClick(transaction.id)}
//             className='grid grid-cols-3 gap-4 px-4 py-4 hover:bg-gray-50 transition-colors cursor-pointer'
//           >
//             <div className='col-span-2'>
//               <div className='flex items-center gap-2 mb-1'>
//                 <span className='text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded'>
//                   {transaction.id}
//                 </span>
//               </div>
//               <div className='text-sm font-medium text-gray-900 mb-1'>
//                 {transaction.title}
//               </div>
//               <div className='text-xs text-gray-500'>
//                 {transaction.created} • {transaction.role}
//               </div>
//             </div>
//             <div className='flex flex-col items-end justify-between'>
//               <div className='text-sm font-medium text-gray-900'>
//                 {transaction.amount}
//               </div>
//               <span
//                 className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
//                   transaction.status === 'Completed'
//                     ? 'bg-green-100 text-green-800'
//                     : transaction.status === 'Pending' ||
//                       transaction.status === 'Review'
//                     ? 'bg-yellow-100 text-yellow-800'
//                     : transaction.status === 'Failed'
//                     ? 'bg-red-100 text-red-800'
//                     : 'bg-blue-100 text-blue-800'
//                 }`}
//               >
//                 {transaction.status}
//               </span>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export function MyTransaksiContent() {
//   const [activeTab, setActiveTab] = useState('action-required');
//   const [searchQuery, setSearchQuery] = useState('');

//   const filteredData = (tabData: Transaction[]) => {
//     if (!searchQuery) return tabData;
//     return tabData.filter(
//       (transaction) =>
//         transaction.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         transaction.id.toLowerCase().includes(searchQuery.toLowerCase())
//     );
//   };

//   return (
//     <div className='flex flex-col min-h-screen bg-gray-50'>
//       <Tabs
//         value={activeTab}
//         onValueChange={setActiveTab}
//         className='flex flex-col h-full'
//       >
//         <div className='bg-white border-b sticky top-0 z-10'>
//           <div className='overflow-x-auto'>
//             <TabsList className='h-12 w-full min-w-max justify-start rounded-none bg-transparent p-0'>
//               {tabs.map((tab) => (
//                 <TabsTrigger
//                   key={tab.value}
//                   value={tab.value}
//                   className='relative h-12 rounded-none border-b-2 border-transparent bg-transparent px-4 sm:px-6 pb-3 pt-3 text-gray-600 transition-none data-[state=active]:text-blue-600 hover:text-blue-600 whitespace-nowrap text-sm font-bold'
//                 >
//                   {tab.label}
//                 </TabsTrigger>
//               ))}
//             </TabsList>
//           </div>
//         </div>

//         <div className='bg-white p-4 sm:p-6 border-b'>
//           <div className='flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4'>
//             <div className='relative flex-1 max-w-md'>
//               <Search className='absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400' />
//               <Input
//                 placeholder='Search transactions...'
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 className='pl-10 border-gray-200 focus:border-blue-300 focus:ring-1 focus:ring-blue-200 text-sm'
//               />
//             </div>
//             <Button
//               variant='outline'
//               className='bg-white text-gray-700 border-gray-200 hover:bg-gray-50 sm:w-auto text-sm'
//             >
//               <Filter className='h-4 w-4 mr-2' />
//               Filter
//             </Button>
//           </div>
//         </div>

//         <div className='bg-white hidden md:block'>
//           <div className='grid grid-cols-6 gap-4 px-6 py-3 border-b bg-gray-50'>
//             {tableHeaders.map((header) => (
//               <div
//                 key={header}
//                 className='text-xs font-medium text-gray-600 uppercase tracking-wide'
//               >
//                 {header}
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className='bg-gray-50 px-4 py-2 border-b md:hidden'>
//           <div className='text-xs font-medium text-gray-600 uppercase tracking-wide'>
//             Transactions
//           </div>
//         </div>

//         <div className='flex-1 bg-white overflow-auto'>
//           <TabsContent value='all' className='mt-0 h-full'>
//             <TransactionTable data={filteredData(sampleData.all)} />
//           </TabsContent>

//           <TabsContent value='action-required' className='mt-0 h-full'>
//             <TransactionTable
//               data={filteredData(sampleData['action-required'])}
//             />
//           </TabsContent>

//           <TabsContent value='open' className='mt-0 h-full'>
//             <TransactionTable data={filteredData(sampleData.open)} />
//           </TabsContent>

//           <TabsContent value='closed' className='mt-0 h-full'>
//             <TransactionTable data={filteredData(sampleData.closed)} />
//           </TabsContent>
//         </div>
//       </Tabs>
//     </div>
//   );
// }

// export default function MyTransaksiPage() {
//   return <SidebarLayout />;
// }
import { SidebarLayout } from '@/app/components/dashboardui/atom/sidebar';

export default function MyTransaksiPage() {
  return <SidebarLayout />;
}
