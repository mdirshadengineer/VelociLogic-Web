'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import NextTopLoader from 'nextjs-toploader';
import { ThemeProvider } from 'src/theme/theme-provider';

import { FC, ReactNode, useState } from 'react';

interface RootProvidersProps {
  children: ReactNode;
}

const RootProviders: FC<RootProvidersProps> = ({ children }) => {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <NextTopLoader color="#10b981" showSpinner={false} />
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default RootProviders;
