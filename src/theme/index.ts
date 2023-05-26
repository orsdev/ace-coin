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
          fontSize: "clamp(2rem, 4vw, 3rem)",
          fontWeight: 700
        },
        h2: {
          fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
          fontWeight: 700
        },
        h3: {
          fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
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
        boxSizing: 'inherit'
      },

      html: {
        boxSizing: 'border-box',
        fontSize: '60.5%',
        fontFamily: "'Rubik', sans-serif",
        textSizeAdjust: '100%',
        position: 'relative',
        height: '100%',
        width: '100%'
      },

      body: {
        boxSizing: 'border-box',
        overflowX: 'hidden',
        height: '100%',
        width: '100%'
      },
    }
  }
};
export type Theme = typeof theme;

export default theme;
