import NextLink from 'next/link';
import { Heading, Box, Image, Link, Badge } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { PropsWithChildren } from 'react';

interface WorkImageProps {
  src: string;
  alt: string;
}

export const Title: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Box>
      <NextLink href="/works">
        <Link as="span" href="/works">Works</Link>
      </NextLink>
      <span>
        &nbsp;
        <ChevronRightIcon />
        &nbsp;
        <Heading display="inline-block" as="h3" fontSize={20} mb={4}>
          {children}
        </Heading>
      </span>
    </Box>
  );
};

export const WorkImage: React.FC<WorkImageProps> = ({ src, alt }) => {
  return <Image borderRadius="lg" w="full" src={src} alt={alt} mb={4} />;
};

export const Meta: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Badge colorScheme="green" mr={2}>
      {children}
    </Badge>
  );
};
