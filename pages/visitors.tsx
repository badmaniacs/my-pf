import { Container, Heading, Flex, Box } from '@chakra-ui/react';
import { useBottomScrollListener } from 'react-bottom-scroll-listener';
import Visitorsform from '@/components/visitorsform';
import Commentview from '@/components/commentview';
import usePagenation from '@/hooks/usePagination';
import Myspinner from '@/components/myspinner';

const Visitors = () => {
  const { data, loading, loadMore, noMore, filteredDeleteData, getFirstPage } =
    usePagenation();
  useBottomScrollListener(loadMore);

  return (
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        방명록
      </Heading>
      <Box mb="10px">
        <Visitorsform getFirstPage={getFirstPage} />
      </Box>
      <Flex flexDirection="column" gap="20px">
        {data?.map((comment) => (
          <Commentview
            comment={comment}
            key={comment.id}
            filteredDeleteData={filteredDeleteData}
          />
        ))}
      </Flex>
      {loading && <Myspinner />}
      {noMore && <Box>더 이상 불러올 댓글이 없습니다.</Box>}
    </Container>
  );
};
export default Visitors;
