import React from "react";
import { List, ListItem, ListIcon } from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";

interface CheckProps {
    text: string;
}

export const Check: React.FC<CheckProps> = ({ text }) => {
    return (
        <ListItem fontFamily="Inter" fontSize="18px">
            <ListIcon color={"#34D399"} as={CheckCircleIcon} />
            {text}
        </ListItem>
    );
};
