import { Flex, Heading, Link, Text } from "@chakra-ui/react";

export default function Home() {
    return (
        <Flex
            bg="gray.900"
            minH="100vh"
            pos="relative"
            justifyContent="flex-end"
            alignItems="flex-end"
        >
            <Heading pos="absolute" top="5%" left="10%">
                <Text as="span" fontSize="40vh" lineHeight="1" color="#FF0080">
                    J
                </Text>
                <Text
                    as="span"
                    fontSize="35vh"
                    letterSpacing="wide"
                    fontWeight="light"
                    bgGradient="linear(to-l, #7928CA, #FF0080)"
                    bgClip="text"
                    fontFamily="Italianno"
                >
                    ajasan
                </Text>
            </Heading>
            <Heading pos="absolute" top="40%" left="30%" color="cyan.500">
                <Text as="span" fontSize="40vh" lineHeight="1" color="#7928CA">
                    B
                </Text>
                <Link href="/bertjintas">
                    <Text
                        as="span"
                        fontSize="35vh"
                        letterSpacing="wide"
                        fontWeight="light"
                        bgGradient="linear(to-r, #7928CA, cyan.500)"
                        bgClip="text"
                        fontFamily="Italianno"
                    >
                        ertjinta
                    </Text>
                </Link>
            </Heading>
            <Text color="whiteAlpha.600" fontSize="6xl" mr="20" mb="20">
                Jajasan Tanpa Hikmah
            </Text>
        </Flex>
    );
}
