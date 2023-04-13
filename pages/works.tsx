import { Container, Heading, SimpleGrid } from '@chakra-ui/react';
import { WorkGridItem } from '@/components/grid-item';
import Section from '@/components/section';
import thumbTest from '../public/images/Works/qweqwewq.png';

const Works = () => {
  return (
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="test" title="test" thumbnail={thumbTest}>
            Test
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="test" title="test" thumbnail={thumbTest}>
            Test
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="test" title="test" thumbnail={thumbTest}>
            Test
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  );
};

export default Works;
