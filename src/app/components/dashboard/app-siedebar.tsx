"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
} from "@/components/ui/sidebar"
import { Home, CreditCard, User, Settings } from "lucide-react"

const menuItems = [
  {
    title: 'Dashboard',
    url: '/dashboard',
    icon: Home,
  },
  {
    title: 'Transaction',
    url: '/dashboard/transactions',
    icon: CreditCard,
  },
  {
    title: 'Profile',
    url: '/dashboard/profile',
    icon: User,
  },
]

 

export function AppSidebar() {
  const pathname = usePathname()
  return (
    <Sidebar className="border-r border-blue-100 bg-gradient-to-b from-blue-50/50 to-white">
      <SidebarHeader className="border-b border-blue-100 p-6">
        <div className="flex justify-center space-x-2">
        <Link href="/">
              <Image
                src="/images/Logo 1.png"
                alt="Logo"
                width={180}
                height={0}
                style={{ height: 'auto' }}
              />
            </Link>
        </div>
      </SidebarHeader>

      <SidebarContent className="p-4">
        <SidebarGroup>
          <SidebarGroupLabel className="text-gray-600 font-medium">Menu Utama</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild 
                    isActive={pathname === item.url}
                    className="data-[active=true]:bg-blue-100 data-[active=true]:text-blue-700 hover:bg-blue-50"
                  >
                    <a href={item.url} className="flex items-center space-x-3">
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
 
      </SidebarContent>

      <SidebarFooter className="border-t border-blue-100 p-4">
        <div className="flex items-center space-x-3 rounded-lg bg-blue-50 p-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500">
            <User className="h-4 w-4 text-white" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 truncate">John Doe</p>
            <p className="text-xs text-gray-500 truncate">john@example.com</p>
          </div>
          <Settings className="h-4 w-4 text-gray-400" />
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
