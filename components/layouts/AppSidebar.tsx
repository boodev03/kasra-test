"use client";

import * as React from "react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { PRIVATE_ROUTES } from "@/constants/routes";
import Link from "next/link";
import { ThemeSwitch } from "../ThemeSwitch";
import { NavMain } from "./NavMain";
import { NavUser } from "./NavUser";
export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <>
      <Sidebar collapsible="icon" {...props}>
        <SidebarHeader className="items-center pt-5">
          <Link href={`${PRIVATE_ROUTES.DASHBOARD}`}>Admin Dashboard</Link>
        </SidebarHeader>
        <SidebarContent>
          <NavMain />
        </SidebarContent>
        <SidebarFooter>
          <ThemeSwitch />
          <NavUser />
        </SidebarFooter>
        <SidebarRail />
      </Sidebar>
    </>
  );
}
