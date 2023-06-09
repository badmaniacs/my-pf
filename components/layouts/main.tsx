import Head from 'next/head';
import { Box, Container } from '@chakra-ui/react';
import { NextRouter } from 'next/router';
import Navbar from '../navbar';

interface Props {
  router: NextRouter;
  children?: React.ReactNode;
}

const Main: React.FC<Props> = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Park Kyungtae&apos;s Homepage</title>
      </Head>
      <Navbar path={router.asPath} />
      <Container maxW="container.md" pt={14}>
        {children}
      </Container>
    </Box>
  );
};

export default Main;
