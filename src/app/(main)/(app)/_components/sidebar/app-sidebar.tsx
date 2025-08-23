'use client';

import {
  AudioWaveform,
  Command,
  GalleryVerticalEnd,
  LayoutDashboard,
} from 'lucide-react';
import { useRouter } from 'next/navigation';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from 'shared/ui/sidebar';

import { TeamSwitcher } from './team-switcher';

import React from 'react';

function VelociLogicAppSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  const router = useRouter();
  return (
    <Sidebar collapsible={'offcanvas'} {...props}>
      <SidebarHeader>
        <TeamSwitcher
          teams={[
            {
              name: 'Acme Inc',
              logo: GalleryVerticalEnd,
              plan: 'Enterprise',
            },
            {
              name: 'Acme Corp.',
              logo: AudioWaveform,
              plan: 'Startup',
            },
            {
              name: 'Evil Corp.',
              logo: Command,
              plan: 'Free',
            },
          ]}
        />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton onClick={() => {
                  router.push("/app/studio/analytics/3456789?id=djasda&dhasd=asdtvasbdad")
                }}>
                  <LayoutDashboard />
                  <span>Dashboard</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter></SidebarFooter>
    </Sidebar>
  );
}

export { VelociLogicAppSidebar };
