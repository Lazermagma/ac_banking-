"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
const Sidebar = ({ user }: SiderbarProps) => {
  const pathname = usePathname();
  return (
    <section className="sidebar">
      <nav className="flex flex-col gap-4">
        <Link href="/" className="mb-12 cursor-pointer items-center gap-2">
          <Image
            src="/icons/logo.png"
            width={34}
            height={34}
            alt="Ac bank logo"
            className="size-[24] max-xl:size-14"
          />
          <h1 className="sidebar-logo">AC Bank</h1>
        </Link>

        {sidebarLinks.map((item) => {
          const isActive =
            pathname === item.route || pathname.startsWith(`${item.route}/`);
          return (
            <Link
              className={cn("sidebar-link", {
                "bg-gradient-to-r to-bankRed from-[#c40658]": isActive,
              })}
              href={item.route}
              key={item.label}
            >
              <div className="relative size-6">
                <Image src={item.imgURL} alt={item.label} fill />
              </div>

              {item.label}
            </Link>
          );
        })}
      </nav>
    </section>
  );
};

export default Sidebar;
