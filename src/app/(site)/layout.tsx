import { FloatingPanel } from './(root)/_components/floating-panel';

export default function ValociLogicSiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div id="velocilogic-site-layout">
      {children}
      <FloatingPanel />
    </div>
  );
}
