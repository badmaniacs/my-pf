'use client'

import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import Main from '@/components/layouts/main';

const App = ({ Component, pageProps, router }: AppProps) => {
  return (
      <ChakraProvider>
        <Main router={router}>
          <Component {...pageProps} key={router.route} />;
        </Main>
      </ChakraProvider>
  );
};

export default App;
