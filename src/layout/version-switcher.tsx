"use client";

import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

export function VersionSwitcher({
  versions,
  defaultVersion,
}: {
  versions: string[];
  defaultVersion: string;
}) {
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton
          size="lg"
          className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
        >
          <div className="flex flex-col gap-0.5 leading-none">
            <a href={"/"} className="flex items-center gap-2">
              <img
                src={"/images/logo.svg"}
                className="max-h-8 dark:invert"
                alt={"project-logo"}
              />
              <span className="text-lg font-semibold tracking-tighter">
                InkForge
              </span>
            </a>
          </div>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
