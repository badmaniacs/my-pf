import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import Main from '@/components/layouts/main';
import Fonts from '@/components/fonts';
import theme from '@/libs/theme';

const App = ({ Component, pageProps, router }: AppProps) => {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Main router={router}>
        <Component {...pageProps} key={router.route} />
      </Main>
    </ChakraProvider>
  );
};

export default App;
