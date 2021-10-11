import {
    Divider,
    Box,
    Flex,
    Heading,
    Text,
    List,
    ListItem,
    Img,
} from "@chakra-ui/react";
import React from "react";
import { useQuery } from "react-query";
import BioText from "./bioText";

const Card = (props) => {
    const { data, error } = useQuery("getAvatar", async () => {
        let data = null;
        try {
            const result = await fetch(
                `/api/profile/getAvatar/${props.code_name}`
            );
            data = await result.json();
        } catch (error) {
            console.error(error.message);
        }
        return data;
    });
    return (
        <Flex
            flexDir="column"
            background="orangered"
            fontFamily="Aleo"
            p="8"
            maxW="600px"
            clipPath="polygon(0 0, 30% 0, 35% 6%, 100% 6%, 100% 100%, 0 100%)"
            pos="relative"
            overflow="hidden"
            _before={{
                content: '""',
                clipPath:
                    "polygon(0 0, 29% 0, 34% 6%, 100% 6%, 100% 100%, 0 100%)",
                position: "absolute",
                background: "gray.900",
                top: "2px",
                left: "2px",
                bottom: "2px",
                right: "2px",
                zIndex: -1,
            }}
        >
            <Box>
                <Heading color="red.500" textTransform="uppercase" mt="2">
                    {props.class}
                </Heading>
                <Text textTransform="capitalize">
                    Code Name: {props.code_name}
                </Text>
            </Box>
            <Flex>
                <Box
                    mr="4"
                    overflow="hidden"
                    flexGrow={1}
                    flexShrink={0}
                    flexBasis="200px"
                >
                    <Img
                        src={data.data.publicURL}
                        alt={`${props.code_name} avatar image`}
                        objectFit="cover"
                        boxSize="sm"
                        borderRadius="md"
                    />
                </Box>
                <Box flexGrow={2} flexShrink={0} flexBasis="200px">
                    <BioText title="Full Name" text={props.full_name} />
                    <BioText title="SN" text={props.sn} />
                    <BioText title="Place of Birth" text={props.pob} />
                    <BioText title="Grade" text={props.grade} />
                    <BioText
                        title="Primary Specialty"
                        text={props.primary_specialty}
                    />
                    <BioText
                        title="Secondary Specialty"
                        text={props.secondary_specialty}
                    />
                    <Divider colorScheme="red" my="2" />
                    <Text>{props.about}</Text>
                    <Divider colorScheme="red" my="2" />
                    <List>
                        <ListItem>
                            <BioText title="Training" text={props.training} />
                        </ListItem>
                        <ListItem>
                            <BioText title="School" text={props.school} />
                        </ListItem>
                        <ListItem>
                            <BioText
                                title="Qualified Expert"
                                text={props.expertise}
                            />
                        </ListItem>
                    </List>
                </Box>
            </Flex>
        </Flex>
    );
};

export default Card;
