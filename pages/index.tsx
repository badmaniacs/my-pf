import {Container, Box, Heading} from '@chakra-ui/react'

const Home = () => {
  return (
    <Container>
      <Box borderRadius="lg" bg="red" p={3} mb={6} textAlign="center">
        안녕하세요!
      </Box>
      <Box display={{md:'flex'}}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            제목이 들어갈 자리
          </Heading>
          <div>부제목</div>
        </Box>
      </Box>
    </Container>
  )
};

export default Home;
