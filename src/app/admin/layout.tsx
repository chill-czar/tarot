import React from "react";
import { AppSidebar } from "~/components/admin/Sidebar";
import AdminNavbar from "~/components/admin/Navbar";
import { SidebarInset, SidebarProvider } from "~/components/ui/sidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <AdminNavbar />
        <main className="flex-1">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
}
