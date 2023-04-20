import { Container, Heading, SimpleGrid } from '@chakra-ui/react';
import { WorkGridItem } from '@/components/grid-item';
import Section from '@/components/section';
import weallriding from '../public/images/Works/weallriding01.png';
import vcdex from '../public/images/Works/vcdex2.png';
import toy from '../public/images/Works/toy2.png';

const Works = () => {
  return (
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="toyprojects" title="Toy Projects" thumbnail={toy}>
            원티드 프리온보딩 프론트엔드 인턴십 과정을 진행하며 만든 토이
            프로젝트 정리
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="vcdex" title="VCDEX" thumbnail={vcdex}>
            암호화폐 대비 그래픽카드 시세 시각화 서비스
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="weallriding"
            title="WeAllRiding"
            thumbnail={weallriding}
          >
            Spring Boot를 활용한 게시판 프로젝트
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  );
};

export default Works;
