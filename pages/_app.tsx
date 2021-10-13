import { ChakraProvider,extendTheme,CSSReset, ColorModeScript } from "@chakra-ui/react";
import theme from '../styles/theme';

const customTheme = extendTheme(theme);

function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={customTheme}>
      <ColorModeScript initialColorMode="dark" />
      <CSSReset/>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default App;
