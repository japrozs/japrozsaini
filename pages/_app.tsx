import { ChakraProvider } from "@chakra-ui/react";

import theme from "../theme";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
    return (
        <ChakraProvider resetCSS theme={theme}>
            <Component {...pageProps} />
        </ChakraProvider>
    );
}

export default MyApp;
