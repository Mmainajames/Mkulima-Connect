import Link from 'next/link';
import {
  Bell,
  Home,
  Users,
  LineChart,
  Package,
  ShoppingCart,
  Settings,
  ShieldAlert,
  Wallet,
} from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Logo } from '@/components/icons/logo';
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarTrigger,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarInset,
  SidebarFooter
} from '@/components/ui/sidebar';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
          <Logo />
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton href="/admin" tooltip="Dashboard" isActive>
                <Home />
                Dashboard
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton href="#" tooltip="Users">
                <Users />
                Users
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton href="#" tooltip="Transactions">
                <Wallet />
                Transactions
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton href="#" tooltip="Disputes">
                <ShieldAlert />
                Disputes
                <Badge className="ml-auto" variant="destructive">2</Badge>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton href="#" tooltip="Reports">
                <LineChart />
                Reports
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarContent>
        <SidebarFooter>
           <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton href="#" tooltip="Settings">
                  <Settings />
                  Settings
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
        </SidebarFooter>
      </Sidebar>
      <SidebarInset>
        <div className="flex flex-col">
            <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
                <SidebarTrigger className="md:hidden" />
                <div className="w-full flex-1">
                    {/* Optionally add a search bar here */}
                </div>
                <Button variant="outline" size="icon" className="h-8 w-8 rounded-full">
                    <Bell className="h-4 w-4" />
                    <span className="sr-only">Toggle notifications</span>
                </Button>
            </header>
            <main className="flex-1 p-4 sm:px-6 sm:py-0 md:p-8 bg-gray-50 dark:bg-gray-950">
                {children}
            </main>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
