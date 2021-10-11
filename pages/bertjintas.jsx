import { Flex, Heading, Text, Spinner } from "@chakra-ui/react";
import React from "react";
import { useQuery } from "react-query";
import Card from "../components/utils/cards";
import ErrorBox from "../components/utils/errorBox";

const getAllProfile = async () => {
    let data = null;
    try {
        const result = await fetch("/api/profile/getAll");
        data = await result.json();
    } catch (error) {
        console.error(error.message);
    }
    return data;
};

const Bertjintas = () => {
    const { data, error, status } = useQuery("profiles", getAllProfile);

    return (
        <Flex flexDir="column">
            <Flex justifyContent="center" pt="12" pb="20" w="full">
                <Heading
                    bgGradient="linear(to-l, #7928CA, #FF0080)"
                    bgClip="text"
                >
                    <Text>
                        Meet The{" "}
                        <Text
                            as="span"
                            fontFamily="Italianno"
                            fontSize="6xl"
                            fontWeight="light"
                            lineHeight="1"
                        >
                            Bertjintas
                        </Text>
                    </Text>
                </Heading>
            </Flex>
            <Flex p="8" flexWrap="wrap" justifyContent="center" gridGap="4">
                {status === "loading" ? (
                    <Spinner size="lg" />
                ) : status === "error" ? (
                    <ErrorBox
                        status={error.status}
                        messsage={error.message}
                        code={error.code}
                    />
                ) : (
                    data.data.map((profile) => {
                        return <Card key={profile.id} {...profile} />;
                    })
                )}
            </Flex>
        </Flex>
    );
};

export default Bertjintas;
