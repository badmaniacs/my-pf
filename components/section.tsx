import { motion, MotionProps } from 'framer-motion';
import { chakra, shouldForwardProp, ChakraProps } from '@chakra-ui/react';

type SectionProps = {
  children: React.ReactNode;
  delay?: string;
} & MotionProps &
  ChakraProps;

const StyledDiv = chakra(motion.div, {
  shouldForwardProp: (prop) => {
    return shouldForwardProp(prop) || prop === 'transition';
  },
});

const Section = ({ children, delay = '0' }: SectionProps) => (
  <StyledDiv
    initial={{ y: 10, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    mb={6}
    transitionDuration="0.8"
    transitionDelay={delay}
  >
    {children}
  </StyledDiv>
);

export default Section;
