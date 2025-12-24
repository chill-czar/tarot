"use client";

import React from "react";
import { UserCircle } from "lucide-react";
import { SidebarTrigger } from "~/components/ui/sidebar";

export default function AdminNavbar() {
  return (
    <header className="bg-background flex h-16 shrink-0 items-center justify-between gap-2 border-b px-4 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
      <div className="flex items-center gap-2 px-4">
        <SidebarTrigger className="-ml-1" />
      </div>
      <div className="flex items-center gap-4 px-4">
        <div className="hover:bg-accent flex items-center gap-2 rounded-full border px-3 py-1.5 transition-colors">
          <UserCircle className="text-muted-foreground h-5 w-5" />
          <span className="text-sm font-medium">Admin</span>
        </div>
      </div>
    </header>
  );
}
