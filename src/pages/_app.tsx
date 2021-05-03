import { AppProps } from "next/app"
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from "../styles/theme";

import { Header } from "../components/Header";
import { makeServer } from "../services/mirage";

if (process.env.NODE_ENV === 'development') {
  makeServer();
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp
