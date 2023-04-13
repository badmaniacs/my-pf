import NextLink from 'next/link';
import Image, { StaticImageData } from 'next/image';
import { Box, Text, LinkBox, LinkOverlay } from '@chakra-ui/react';
import { Global } from '@emotion/react';

interface GridItemProps {
  children: React.ReactNode;
  href: string;
  title: string;
  thumbnail: StaticImageData;
}

interface WorkGridItemProps {
  children: React.ReactNode;
  id: string;
  title: string;
  thumbnail: StaticImageData;
}

export const GridItem: React.FC<GridItemProps> = ({
  children,
  href,
  title,
  thumbnail,
}) => {
  return (
    <Box w="100%" justifyItems="center">
      <LinkBox cursor="pointer">
        <Image
          src={thumbnail}
          alt={title}
          className="grid-item-thumbnail"
          placeholder="blur"
          loading="lazy"
        />
        <LinkOverlay href={href} target="_blank">
          <Text mt={2}>{title}</Text>
        </LinkOverlay>
        <Text fontSize={14}>{children}</Text>
      </LinkBox>
    </Box>
  );
};

export const WorkGridItem: React.FC<WorkGridItemProps> = ({
  children,
  id,
  title,
  thumbnail,
}) => {
  return (
    <Box w="100%" justifyItems="center">
      <LinkBox cursor="pointer" as={NextLink} href={`/works/${id}`}>
        <Image src={thumbnail} alt={title} className="grid-item-thumbnail" />
        <LinkOverlay href={`/works/${id}`} as="div">
          <Text mt={2} fontSize={20}>
            {title}
          </Text>
        </LinkOverlay>
        <Text fontSize={14}>{children}</Text>
      </LinkBox>
    </Box>
  );
};

export const GridItemStyle = () => {
  <Global
    styles={`
      .grid-item-thumbnail {
        border-radius: 12px;
      }
    `}
  />;
};
