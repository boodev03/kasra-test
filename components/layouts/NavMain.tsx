"use client";

import {
  CalendarCheck,
  FileText,
  House,
  User2,
  UsersRound,
  type LucideIcon,
} from "lucide-react";

import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { PRIVATE_ROUTES } from "@/constants/routes";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavMainItem {
  title: string;
  url: string;
  icon?: LucideIcon;
  isActive?: boolean;
}

const navMain: NavMainItem[] = [
  {
    title: "Dashboard",
    url: PRIVATE_ROUTES.DASHBOARD,
    icon: House,
  },
  {
    title: "Pending Suppliers",
    url: PRIVATE_ROUTES.PENDING_SUPPLIERS,
    icon: User2,
  },
  {
    title: "Pending Events",
    url: PRIVATE_ROUTES.PENDING_EVENTS,
    icon: CalendarCheck,
  },
  {
    title: "Moderate Posts",
    url: PRIVATE_ROUTES.MODERATE_POSTS,
    icon: FileText,
  },
  {
    title: "User Management",
    url: PRIVATE_ROUTES.USER_MANAGEMENT,
    icon: UsersRound,
  },
];

export function NavMain() {
  const pathname = usePathname();

  const isItemActive = (item: NavMainItem) => {
    // For dashboard, only active when pathname exactly matches
    if (item.url === PRIVATE_ROUTES.DASHBOARD) {
      return pathname === PRIVATE_ROUTES.DASHBOARD;
    }

    // For other items, check if pathname includes the item's URL
    return pathname.includes(item.url);
  };

  return (
    <SidebarGroup>
      <SidebarMenu>
        {navMain.map((item) => (
          <SidebarMenuItem key={item.title}>
            <Link href={item.url}>
              <SidebarMenuButton
                tooltip={item.title}
                className={`[&>svg]:size-4 hover:bg-sidebar-accent ${
                  isItemActive(item)
                    ? "bg-sidebar-foreground hover:bg-sidebar-foreground/80 text-text-primary hover:text-text-primary"
                    : ""
                }`}
              >
                {item.icon && <item.icon className="text-inherit" />}
                <span className="font-inter ml-2 text-inherit">
                  {item.title}
                </span>
              </SidebarMenuButton>
            </Link>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
