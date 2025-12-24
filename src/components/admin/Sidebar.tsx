"use client";

import * as React from "react";
import Link from "next/link";
import NextImage, { type StaticImageData } from "next/image";
import { usePathname } from "next/navigation";
import { ShoppingBag, LayoutDashboard, Users, Settings } from "lucide-react";
import { CartigramLogo } from "~/lib/images";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "~/components/ui/sidebar";

const menuItems = [
  { icon: ShoppingBag, label: "Products", href: "/admin" },
  { icon: LayoutDashboard, label: "Analytics", href: "#", disabled: true },
  { icon: Users, label: "Customers", href: "#", disabled: true },
  { icon: Settings, label: "Settings", href: "#", disabled: true },
];

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-black text-white">
                  <span className="font-bold">T</span>
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">TarotWithDD</span>
                  <span className="text-muted-foreground truncate text-xs">
                    Spiritual Guidance
                  </span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <SidebarMenuItem key={item.label}>
                <SidebarMenuButton
                  asChild
                  tooltip={item.label}
                  isActive={isActive}
                  disabled={item.disabled}
                >
                  <Link
                    href={item.href}
                    onClick={(e) => item.disabled && e.preventDefault()}
                    className={
                      item.disabled ? "cursor-not-allowed opacity-50" : ""
                    }
                  >
                    <item.icon className="size-4" />
                    <span>{item.label}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" className="pointer-events-none">
              <div className="bg-sidebar-accent flex aspect-square size-8 items-center justify-center rounded-lg">
                <NextImage
                  src={CartigramLogo as StaticImageData}
                  alt="Cartigram"
                  width={20}
                  height={20}
                  className="h-5 w-5 opacity-80"
                />
              </div>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="text-muted-foreground truncate text-[10px] font-bold tracking-widest uppercase">
                  Powered by
                </span>
                <span className="text-foreground truncate font-sans font-bold tracking-tight">
                  Cartigram
                </span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
