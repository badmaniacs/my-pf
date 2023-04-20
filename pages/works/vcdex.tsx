import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Title, WorkImage, Meta } from '@/components/work';
import Paragraph from '@/components/paragraph';
import Layout from '@/components/layouts/article';

const Work = () => {
  return (
    <Layout title="VCDEX">
      <Container>
        <Title>
          VCDEX<Badge>2022</Badge>
        </Title>
        <Paragraph>
          Spring Boot와 React를 활용해서 만든 개인 프로젝트입니다. 크롤링을 통해
          환율, 암호화폐 시세, 그래픽카드 가격정보를 실시간으로 수집하고, 수집된
          정보를 스트리밍하여 시각화해서 제공해주는 서비스입니다.
        </Paragraph>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Web</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Spring Boot, MySQL, React</span>
          </ListItem>
          <ListItem>
            <Meta>SOURCE(FRONT)</Meta>
            <Link href="https://github.com/badmaniacs/VCDEX_front">
              https://github.com/badmaniacs/VCDEX_front{' '}
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>SOURCE(BACK)</Meta>
            <Link href="https://github.com/badmaniacs/VCDEX_back">
              https://github.com/badmaniacs/VCDEX_back{' '}
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>
        <WorkImage src="/images/vcdex1.png" alt="VCDEX" />
        <WorkImage src="/images/vcdex2.png" alt="VCDEX" />
        <WorkImage src="/images/vcdex3.png" alt="VCDEX" />
      </Container>
    </Layout>
  );
};

export default Work;
