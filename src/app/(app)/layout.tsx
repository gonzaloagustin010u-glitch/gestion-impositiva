import type { User } from "@/lib/auth";
import { getAuthenticatedUser } from "@/lib/auth";
import { AppHeader } from "@/components/layout/app-header";
import { AppSidebar } from "@/components/layout/app-sidebar";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const user: User = getAuthenticatedUser();

  return (
    <SidebarProvider>
      <div className="flex min-h-screen">
        <AppSidebar user={user} />
        <div className="flex flex-col flex-1">
          <SidebarInset>
            <AppHeader user={user} />
            <main className="flex-1 p-4 md:p-6 lg:p-8">{children}</main>
          </SidebarInset>
        </div>
      </div>
    </SidebarProvider>
  );
}
