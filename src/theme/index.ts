import { extendTheme } from "@chakra-ui/react";
import foundations from "./foundations";
import breakpoints from "./breakpoints";

const styles = extendTheme({
  colors: {
    ...foundations.colors,
  },
  components: {
    Heading: {
      variants: {
        h1: {
          fontSize: "clamp(2.5rem, 5vw, 4rem)",
          fontWeight: 700
        },
        h2: {
          fontSize: "clamp(2rem, 3vw, 2.4rem)",
          fontWeight: 700
        },
      }
    }
  },
});

export const theme = {
  ...styles,
  breakpoints,
  styles: {
    global: {
      '*, *:after, *:before': {
        boxsizing: 'inherit'
      },

      html: {
        boxSizing: 'border-box',
        fontSize: '60.5%',
        fontFamily: "'Rubik', sans-serif",
        textSizeAdjust: '100%'
      },

      body: {
        boxSizing: 'border-box',
        overflowX: 'hidden',
        fontWeight: 500,
      },
    }
  }
};
export type Theme = typeof theme;

export default theme;
