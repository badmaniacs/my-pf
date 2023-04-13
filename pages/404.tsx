import NextLink from 'next/link';
import {
  Box,
  Heading,
  Text,
  Container,
  Divider,
  Button,
} from '@chakra-ui/react';

const NotFound = () => {
  return (
    <Container>
      <Heading as="h1">Not Found</Heading>
      <Text>잘못된 접근입니다.</Text>
      <Divider my={6} />
      <Box my={6} justifyItems="center">
        <NextLink href="/">
          <Button colorScheme="yellow">홈으로 돌아가기</Button>
        </NextLink>
      </Box>
    </Container>
  );
};

export default NotFound