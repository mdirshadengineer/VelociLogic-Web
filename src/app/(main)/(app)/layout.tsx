import { SidebarInset, SidebarProvider } from 'shared/ui/sidebar';
import { AppSidebar } from 'src/app/(main)/(app)/_components/app-sidebar';

export default function VelociLogicAppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div id="velocilogic-app-layout">
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>{children}</SidebarInset>
      </SidebarProvider>
    </div>
  );
}
