import { AppSidebar } from '@/app/components/dashboard/app-siedebar';
import { DashboardHeader } from '@/app/components/dashboard/dashboard-header';
import { SidebarProvider } from '@/components/ui/sidebar';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <div className='flex min-h-screen w-full bg-gray-50'>
        <AppSidebar />
        <div className='flex-1 flex flex-col'>
          <DashboardHeader />
          <main className='flex-1 p-6'>{children}</main>
        </div>
      </div>
    </SidebarProvider>
  );
}
