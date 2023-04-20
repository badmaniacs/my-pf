import { Box, Spinner } from '@chakra-ui/react';

const Myspinner = () => {
  return (
    <Box display="block" position="absolute" left="50%" top="">
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
    </Box>
  );
};

export default Myspinner;
