"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { Logo } from "@/components/icons/logo";
import { type User } from "@/lib/auth";
import {
  LayoutDashboard,
  ReceiptText,
  ShoppingCart,
  FileText,
  Settings,
  LifeBuoy,
} from "lucide-react";

const menuItems = [
  {
    href: "/dashboard",
    icon: LayoutDashboard,
    label: "Dashboard",
    roles: ["soporte", "intermedio", "inicial"],
  },
  {
    href: "/sales",
    icon: ReceiptText,
    label: "Sales",
    roles: ["soporte", "intermedio", "inicial"],
  },
  {
    href: "/purchases",
    icon: ShoppingCart,
    label: "Purchases",
    roles: ["soporte", "intermedio", "inicial"],
  },
  {
    href: "/declarations",
    icon: FileText,
    label: "Declarations",
    roles: ["soporte", "intermedio"],
  },
  {
    href: "/settings",
    icon: Settings,
    label: "Settings",
    roles: ["soporte"],
  },
];

export function AppSidebar({ user }: { user: User }) {
  const pathname = usePathname();

  return (
    <Sidebar>
      <SidebarHeader>
        <Link href="/dashboard" className="flex items-center gap-2">
          <Logo />
          <span className="text-lg font-semibold font-headline">TaxWise</span>
        </Link>
      </SidebarHeader>
      <SidebarContent className="p-2">
        <SidebarMenu>
          {menuItems.map(
            (item) =>
              item.roles.includes(user.role) && (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton
                    asChild
                    isActive={pathname === item.href}
                    tooltip={item.label}
                  >
                    <Link href={item.href}>
                      <item.icon />
                      <span>{item.label}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              )
          )}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="p-2">
        <SidebarMenu>
            <SidebarMenuItem>
                <SidebarMenuButton tooltip="Support">
                    <LifeBuoy />
                    <span>Support</span>
                </SidebarMenuButton>
            </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
