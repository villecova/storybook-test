// .storybook/preview.js
import '../src/index.scss';
import { ThemeProvider, theme, CSSReset, Box } from '@chakra-ui/react';

/** @type { import('@storybook/react').Preview } */

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <CSSReset/>
      <Box m="4">
        <Story/>
      </Box>
    </ThemeProvider>
  ),
]

const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    // options: {
    //   storySort: (a, b) =>
    //     a.id === b.id ? 0 : a.id.localeCompare(b.id, undefined, { numeric: true }),
    // },
    options: {
      storySort: {
        order: ['Chakra', 'Form',],
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
