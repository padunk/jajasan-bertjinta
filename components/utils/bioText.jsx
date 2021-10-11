import { Text } from "@chakra-ui/react";
import React from "react";

const BioText = ({ title, text }) => {
    return (
        <Text>
            {title}:{" "}
            <Text as="span" color="whiteAlpha.500" textTransform="capitalize">
                {Array.isArray(text) ? text.join(", ") : text}
            </Text>
        </Text>
    );
};

export default BioText;
