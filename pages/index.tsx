import NextLink from 'next/link';
import {
  Container,
  Box,
  Heading,
  Image,
  Button,
  Link,
  List,
  ListItem,
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { IoLogoGithub } from 'react-icons/io5';
import { SiTistory } from 'react-icons/si';
import Section from '@/components/section';
import Paragraph from '@/components/paragraph';
import { BioSection, BioYear } from '@/components/bio';

const Home = () => {
  return (
    <Container>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Park Kyungtae
          </Heading>
          <div>Frontend Developer</div>
        </Box>
        <Box
          display="flex"
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          justifyContent="center"
        >
          <Image
            borderColor="whiteAplah.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="150px"
            display="inline-block"
            src="/images/profile.png"
          />
        </Box>
      </Box>
      <Section delay="0.1">
        <Heading as="h3" variant="section-title">
          Introduce
        </Heading>
        <Paragraph>
          안녕하세요. 저는 Typescript를 주로 활용하여 웹 서비스를 개발하는
          프론트엔드 개발자입니다. 저는 개발자로서 꾸준히 성장하고 발전하는 것을
          추구하며, 항상 새로운 기술을 배우는 일을 즐기고 있습니다. 특히, 개발
          서적을 읽는 것을 좋아하고 그 내용을 기반으로 서평을 작성하는 것을
          좋아합니다. 이러한 활동의 일환으로, 한빛미디어에서 주관하는{' '}
          <Link href="https://gtdr.tistory.com/category/%EC%84%9C%ED%8F%89">
            나는 리뷰어다 2023 서평단
          </Link>
          에 참여하고 있습니다. 또한 코드 품질과 최적화에 고려한 개발을 중요하게
          생각하며 공부하고 있습니다.
        </Paragraph>
        <Box display="flex" justifyContent="center" my={4}>
          <NextLink href="/works">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="orange">
              My Works
            </Button>
          </NextLink>
        </Box>
      </Section>
      <Section delay="0.2">
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2022.06</BioYear>
          멀티캠퍼스 지능형 웹서비스 풀스택 과정 수료
        </BioSection>
        <BioSection>
          <BioYear>2023.01</BioYear>
          원티드 프리온보딩 프론트엔드 과정 수료
        </BioSection>
        <BioSection>
          <BioYear>2023.02</BioYear>
          동국대학교 서울캠퍼스 일어일문학과, 경제학과 졸업
        </BioSection>
      </Section>
      <Section delay="0.3">
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/badmaniacs" target="_blank">
              <Button
                variant="ghost"
                colorScheme="gray"
                leftIcon={<IoLogoGithub />}
              >
                @badmaniacs
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://gtdr.tistory.com/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="gray"
                leftIcon={<SiTistory />}
              >
                @gtdr
              </Button>
            </Link>
          </ListItem>
        </List>
      </Section>
    </Container>
  );
};

export default Home;
