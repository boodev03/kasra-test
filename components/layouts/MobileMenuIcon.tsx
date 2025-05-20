"use client";

import { Menu, PanelsTopLeft } from "lucide-react";
import { useSidebar } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";

export default function MobileMenuIcon() {
  const { setOpenMobile, openMobile } = useSidebar();

  return (
    <Button
      variant="ghost"
      size="icon"
      className="md:hidden fixed top-4 left-4 border-none"
      onClick={() => setOpenMobile(!openMobile)}
    >
      <PanelsTopLeft className="size-5" />
      <span className="sr-only">Toggle sidebar</span>
    </Button>
  );
}
