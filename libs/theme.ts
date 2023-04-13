import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';
import type { StyleFunctionProps } from '@chakra-ui/styled-system';

const styles = {
  global: (props: StyleFunctionProps) => ({
    body: {
      bg: mode('#FFFFFF', '#333335')(props),
    },
  }),
};

const components = {
  Heading: {
    variants: {
      'section-title': {
        textDecoration: 'underline',
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: '#D49031',
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4,
      },
    },
  },
  Link: {
    baseStyle: (props: StyleFunctionProps) => ({
      color: mode('#3d7aed', '#3ea6ff')(props),
      textUnderlineOffset: 3,
    }),
  },
};

const fonts = {
  heading: "'Open Sans'",
};

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
};

const theme = extendTheme({
  config,
  styles,
  components,
  fonts,
});

export default theme;
