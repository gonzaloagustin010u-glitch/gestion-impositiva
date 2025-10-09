"use client";
import Link from "next/link";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { type User } from "@/lib/auth";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  ReceiptText,
  ShoppingCart,
  FileText,
  Settings,
  LifeBuoy,
  PanelLeft,
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

export function AppHeader({ user }: { user: User }) {
  const pathname = usePathname();

  return (
    <header className="flex h-16 items-center gap-4 border-b">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <SidebarTrigger asChild>
            <Button variant="ghost" size="icon">
              <PanelLeft />
              <span className="sr-only">Toggle Sidebar</span>
            </Button>
          </SidebarTrigger>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start">
          <DropdownMenuLabel>Menú</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {menuItems.map(
            (item) =>
              item.roles.includes(user.role) && (
                <DropdownMenuItem key={item.href} asChild>
                  <Link href={item.href}>
                    <item.icon className="mr-2 h-4 w-4" />
                    <span>{item.label}</span>
                  </Link>
                </DropdownMenuItem>
              )
          )}
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild>
            <Link href="/support">
              <LifeBuoy className="mr-2 h-4 w-4" />
              <span>Soporte</span>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <div className="flex-1">
        {/* Placeholder for breadcrumbs or page title if needed */}
      </div>

      <div className="flex items-center gap-4">
        <ThemeToggle />

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="rounded-full">
              <Image
                src={user.avatarUrl}
                alt={user.name}
                width={32}
                height={32}
                className="rounded-full"
                data-ai-hint="person face"
              />
              <span className="sr-only">Abrir menú de usuario</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium leading-none">{user.name}</p>
                <p className="text-xs leading-none text-muted-foreground">
                  {user.email}
                </p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Perfil</DropdownMenuItem>
            <DropdownMenuItem>Facturación</DropdownMenuItem>
            <DropdownMenuItem>Configuración</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link href="/">Cerrar Sesión</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
