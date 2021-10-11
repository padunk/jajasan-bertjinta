import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
    styles: {
        global: {
            // styles for the `body`
            body: {
                bg: "gray.900",
                color: "whiteAlpha.800",
            },
        },
    },
    fonts: {
        heading: "Montserrat",
        body: "Italianno",
    },
});
export default theme;
