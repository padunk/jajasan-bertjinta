import "../styles/globals.css";
import "@fontsource/montserrat";
import "@fontsource/italianno";
import "@fontsource/aleo";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../styles";

function MyApp({ Component, pageProps }) {
    return (
        <ChakraProvider theme={theme}>
            <QueryClientProvider client={new QueryClient()}>
                <Component {...pageProps} />
                <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
        </ChakraProvider>
    );
}

export default MyApp;
