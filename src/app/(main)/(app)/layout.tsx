import { SidebarInset, SidebarProvider } from 'shared/ui/sidebar';

import { VelociLogicAppSidebar } from './_components/app-sidebar';

export default function VelociLogicAppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div id="velocilogic-app-layout">
      <SidebarProvider
        id="velocilogic-app-sidebar"
        style={
          {
            '--sidebar-width': 'calc(var(--spacing) * 72)',
            '--header-height': 'calc(var(--spacing) * 12)',
          } as React.CSSProperties
        }
      >
        <VelociLogicAppSidebar variant="inset" />
        <SidebarInset>{children}</SidebarInset>
      </SidebarProvider>
    </div>
  );
}
