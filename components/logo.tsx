import Link from 'next/link';
import { Text, useColorModeValue } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { HiOutlineHome } from 'react-icons/hi';

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 20px;
  &:hover {
    transform: scale(1.1);
  }
`;

const Logo = () => {
  return (
    <Link href="/">
      <LogoBox>
        <HiOutlineHome />
        <Text
          color={useColorModeValue('gray.800', 'whiteAlpha.900')}
          fontFamily="Open Sans"
          fontWeight="bold"
          ml={3}
        >
          Kyungtae&#39;s Home
        </Text>
      </LogoBox>
    </Link>
  );
};

export default Logo;
