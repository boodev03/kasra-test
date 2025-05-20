import Link from "next/link";
import { memo } from "react";

export const Header = memo(function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 border-b bg-white dark:bg-slate-950 z-[10]">
      <div className="container flex h-header-mobile sm:h-header-desktop items-center justify-between">
        <div className="flex items-center gap-4 sm:gap-6">
          <Link href="/" className="flex items-center">
            Admin Dashboard
          </Link>
        </div>
      </div>
    </header>
  );
});
