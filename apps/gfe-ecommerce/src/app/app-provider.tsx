'use client'

import { CartContextProvider } from '@/contexts/cart-context';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import React from 'react';




function AppProvider({
  children
}: {
  children: React.ReactNode;
}) {
  const [queryClient] = React.useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false
      }
    }
  }))
  return (
    <QueryClientProvider client={queryClient}>
      {/* <NuqsAdapter> */}
      <CartContextProvider>
        {children}
      </CartContextProvider>
      {/* </NuqsAdapter> */}
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  )
}

export default AppProvider