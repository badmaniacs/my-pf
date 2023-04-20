import NextLink from 'next/link';

import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue,
} from '@chakra-ui/react';
import { PropsWithChildren } from 'react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { NextRouter } from 'next/router';
import { IoLogoGithub } from 'react-icons/io5';
import Logo from './logo';
import ThemeToggleButton from './theme-toggle-button';

interface LinkItemProps {
  href: string;
  path: string;
}

const LinkItem: React.FC<PropsWithChildren<LinkItemProps>> = ({
  href,
  path,
  children,
}) => {
  const active = path === href;
  const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900');

  return (
    <Link
      as={NextLink}
      p={2}
      bg={active ? 'orange' : undefined}
      color={active ? 'black' : inactiveColor}
      href={href} // navbar active color
    >
      {children}
    </Link>
  );
};

interface NavbarProps {
  path: NextRouter['asPath'];
}

const Navbar: React.FC<NavbarProps> = (props) => {
  const { path } = props;

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#ffffff40', '#33333580')}
      css={{ backdropFilter: 'blur(10px)' }}
      zIndex={2}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        flexWrap="wrap"
        alignItems="center"
        justifyContent="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing="tighter">
            <Logo />
          </Heading>
        </Flex>
        <Stack
          display={{ base: 'none', md: 'flex' }}
          direction={{ base: 'column', md: 'row' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <LinkItem href="/works" path={path}>
            Works
          </LinkItem>
          <LinkItem href="/visitors" path={path}>
            Visitors
          </LinkItem>
          <LinkItem href="https://github.com/badmaniacs/my-pf" path="">
            <Flex>
              Source
              <Box mt="4px">
                <IoLogoGithub />
              </Box>
            </Flex>
          </LinkItem>
        </Stack>
        <Box display="flex" flex={1} justifyContent="right">
          <ThemeToggleButton />
          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu isLazy id="nav-menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                <NextLink href="/" passHref>
                  <MenuItem>About</MenuItem>
                </NextLink>
                <NextLink href="/works" passHref>
                  <MenuItem>Works</MenuItem>
                </NextLink>
                <NextLink href="/visitors" passHref>
                  <MenuItem>Visitors</MenuItem>
                </NextLink>
                <NextLink href="">
                  <MenuItem>Source</MenuItem>
                </NextLink>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
