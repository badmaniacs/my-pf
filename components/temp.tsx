import NextLink from 'next/link';
import {
  Container,
  Box,
  Link,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';
import { NextRouter } from 'next/router';

interface LinkItemProps {
  children: React.ReactNode;
  href: string;
  path: string;
}

const LinkItem: React.FC<LinkItemProps> = ({ href, path, children }) => {
  const active = path === href;
  const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900');

  return (
    <NextLink href={href}>
      <Link
        p={2}
        bg={active ? 'glassTeal' : undefined}
        color={active ? '#202023' : inactiveColor}
        href={href}
      >
        {children}
      </Link>
    </NextLink>
  );
};


interface NavbarProps {
  path: NextRouter['asPath'];
}

const Temp: React.FC<NavbarProps> = (props) => {
  const { path } = props;
  
  return (
    <Box>
      <Container>
        <Stack>
          <LinkItem href="/sex" path={path}>
            Sex
          </LinkItem>
          <LinkItem href="/furry" path={path}>
            Furry
          </LinkItem>
        </Stack>
      </Container>
    </Box>
  );
};

export default Temp;
