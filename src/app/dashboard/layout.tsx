import { AppSidebar } from '@/app/components/dashboard/app-siedebar'
import { DashboardHeader } from '@/app/components/dashboard/dashboard-header'
import { SidebarProvider } from '@/components/ui/sidebar'
import Footer from '@/app/components/slicings/footer'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <SidebarProvider>
        <div className='flex min-h-screen w-full bg-gray-50'>
          <AppSidebar />
          <div className='flex-1 flex flex-col'>
            <DashboardHeader />
            <main>{children}</main>
          </div>
        </div>
      </SidebarProvider>

      {/* Footer di luar SidebarProvider */}
      <Footer />
    </>
  )
}