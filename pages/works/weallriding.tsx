import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Title, WorkImage, Meta } from '@/components/work';
import Paragraph from '@/components/paragraph';
import Layout from '@/components/layouts/article';

const Work = () => {
  return (
    <Layout title="WeAllRiding">
      <Container>
        <Title>
          WeAllRiding <Badge>2022</Badge>
        </Title>
        <Paragraph>
          멀티캠퍼스 지능형 웹서비스 풀스택 과정의 팀 프로젝트로,Spring Boot를
          사용해서 만든 게시판입니다. 문자메시지 서비스를 활용한 회원가입
          페이지와, 이메일 서비스를 활용한 ID,비밀번호 찾기, 회원의 정보를
          시각화해서 볼 수 있는 관리자 페이지를 담당했습니다.
        </Paragraph>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Web</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Spring Boot, MySQL</span>
          </ListItem>
          <ListItem>
            <Meta>SOURCE</Meta>
            <Link href="https://github.com/Yana94Ko/WeAllRiding">
              https://github.com/Yana94Ko/WeAllRiding{' '}
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>
        <WorkImage src="/images/works/weallriding01.png" alt="WeAllRiding" />
      </Container>
    </Layout>
  );
};

export default Work;
