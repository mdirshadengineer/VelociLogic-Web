import { FloatingPanel } from './_components/floating-panel';
import { NavbarDemo } from './_components/navbar';

export default function VelociLogicLandingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div id="velocilogic-landing-layout">
      <NavbarDemo />
      {children}
      {/* Dev environment control panel */}
    </div>
  );
}
