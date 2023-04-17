import {
  Heading,
  Container,
  Badge,
  Link,
  List,
  ListItem,
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Title, WorkImage, Meta } from '@/components/work';
import Paragraph from '@/components/paragraph';
import Layout from '@/components/layouts/article';

const Work = () => {
  return (
    <Layout title="Toy Project">
      <Container>
        <Title>
          Onboarding Toy Projects<Badge>2023</Badge>
        </Title>
        <Paragraph>
          원티드 프리온보딩 프론트엔드 인턴십 과정에서, 기한 내에 요구사항에
          맞춰 간단한 React App을 만드는 프로젝트를 수행했습니다. 단순하게
          기능만 구현해내는 것이 아니라, Husky, Typescript를 사용하고, Git의
          올바른 사용 방법을 준수하는 등, 개발자로서 동료들과 협업할 수 있는
          기본기에 중점을 두며 진행했습니다.
        </Paragraph>
        <br />
        <Heading as="h3" variant="section-title">
          첫 번째 과제
        </Heading>
        <Paragraph>
          CRUD와 Drag & Drop이 가능한 이슈 트래커를 구현했습니다.
        </Paragraph>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Stack</Meta>
            <span>React, Recoil</span>
          </ListItem>
          <ListItem>
            <Meta>SOURCE</Meta>
            <Link href="https://github.com/badmaniacs/pre-onboarding-8th-2-1">
              https://github.com/badmaniacs/pre-onboarding-8th-2-1{' '}
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>
        <WorkImage src="/images/works/toy1.png" alt="toy1" />
        <Paragraph>
          전역 상태 관리 라이브러리만 사용하는 것이 개발 조건이었고 Recoil을
          채택해서 Form과의 데이터 통신, Modal 창 표시 여부, Drag & Drop을 전역
          상태 관리를 통해 구현했습니다.
        </Paragraph>
        <br />
        <Heading as="h3" variant="section-title">
          두 번째 과제
        </Heading>
        <Paragraph>
          한국임상정보의 검색영역을 클론했습니다. 질환명 검색시 API를 호출해
          검색어 추천 기능을 구현했습니다.
        </Paragraph>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Stack</Meta>
            <span>React</span>
          </ListItem>
          <ListItem>
            <Meta>SOURCE</Meta>
            <Link  href="https://github.com/badmaniacs/pre-onboarding-8th-3-1">
              https://github.com/badmaniacs/pre-onboarding-8th-3-1{' '}
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>
        <WorkImage src="/images/works/toy2.gif" alt="toy2" />
        <Paragraph>
          캐싱 기능이 포함되지 않은 전역 상태 라이브러리 사용이 조건이었고,
          App의 규모가 작은 만큼 성능 문제가 나타나지 않을 거라 판단해, Context
          API를 통해 상태를 관리했습니다. 잦은 API 호출을 방지하기 위해 입력에
          debounce를 구현했습니다. 또한 API 호출 결과를 localStorage에 저장하고
          API가 요청되기 전에 이를 확인해서 저장된 결과를 불러오는 캐싱 기능을
          구현했습니다. 키보드 입력을 처리하는 Reducer와 Context를 통해 추천
          검색어로 이동이 가능하게끔 구현했습니다.
        </Paragraph>
        <br />
        <Heading as="h3" variant="section-title">
          세 번째 과제
        </Heading>
        <Paragraph>
          API 서버와 통신해서 작동하는 댓글 프로젝트를 Redux를 통해
          구현했습니다.
        </Paragraph>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Stack</Meta>
            <span>React, Redux</span>
          </ListItem>
          <ListItem>
            <Meta>SOURCE</Meta>
            <Link href="https://github.com/badmaniacs/pre-onboarding-8th-4-1">
              https://github.com/badmaniacs/pre-onboarding-8th-4-1{' '}
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>
        <WorkImage src="/images/works/toy3.png" alt="toy3" />
        <Paragraph>
          Redux의 비동기 처리를 위해 Redux ToolKit의 CreateAsyncThunk 함수를
          활용하였습니다. 전역 상태 관리를 통해 댓글 작성, 삭제 후 1페이지로
          이동 기능 등을 구현했습니다.
        </Paragraph>
        <br />
        <Heading as="h3" variant="section-title">
          동료 평가
        </Heading>
        <Paragraph>
          프로젝트는 개인 단위로 진행했지만, 구현 이후 가장 좋은 Best Practice를
          선정하고 보완하는 동료 학습을 진행했습니다. 과정이 끝난 후, 동료
          평가를 통해 받은 피드백입니다.
        </Paragraph>
        <WorkImage src="/images/works/comment1.png" alt="comment1" />
        <WorkImage src="/images/works/comment2.png" alt="comment2" />
      </Container>
    </Layout>
  );
};

export default Work;
