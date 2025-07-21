import { SidebarInset, SidebarProvider } from 'shared/ui/sidebar';

import { AppSidebar } from './app/studio/_components/app-sidebar';
import { SiteHeader } from './app/studio/_components/site-header';

export default function VelociLogicStudioAppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      id="velocilogic-studio-app-layout"
      className="[--header-height:calc(--spacing(14))]"
    >
      <SidebarProvider
        style={
          {
            '--sidebar-width': '360px',
          } as React.CSSProperties
        }
        className="flex flex-col"
      >
        <SiteHeader />
        <div className="flex flex-1">
          <AppSidebar />
          <SidebarInset>{children}</SidebarInset>
        </div>
      </SidebarProvider>
      <footer></footer>
    </div>
  );
}
