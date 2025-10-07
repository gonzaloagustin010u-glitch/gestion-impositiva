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
    label: "Panel de Control",
    roles: ["soporte", "intermedio", "inicial"],
  },
  {
    href: "/sales",
    icon: ReceiptText,
    label: "Ventas",
    roles: ["soporte", "intermedio", "inicial"],
  },
  {
    href: "/purchases",
    icon: ShoppingCart,
    label: "Compras",
    roles: ["soporte", "intermedio", "inicial"],
  },
  {
    href: "/declarations",
    icon: FileText,
    label: "Declaraciones",
    roles: ["soporte", "intermedio"],
  },
  {
    href: "/settings",
    icon: Settings,
    label: "Configuración",
    roles: ["soporte"],
  },
];

export function AppSidebar({ user }: { user: User }) {
  const pathname = usePathname();

  return (
    <Sidebar>
      <SidebarHeader>
        
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
                <SidebarMenuButton tooltip="Soporte">
                    <LifeBuoy />
                    <span>Soporte</span>
                </SidebarMenuButton>
            </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
