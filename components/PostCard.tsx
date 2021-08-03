import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { useRouter } from "next/router";

dayjs.extend(relativeTime);
const parseDate = (date) => {
    let str = "";
    date = date.split(" ");
    for (let i = 0; i < 3; i++) {
        str += date[i] + " ";
    }

    return str;
};

const truncate = (str: string, limit: number) => {
    if (str.length > limit) {
        return str.substring(0, limit) + " ...";
    } else {
        return str;
    }
};

interface PostCardProps {
    title: string;
    body: string;
    createdAt: string;
}

export const PostCard: React.FC<PostCardProps> = ({
    title,
    body,
    createdAt,
}) => {
    const router = useRouter();
    return (
        <Box
            onClick={() => router.push(`post/${title.replace(" ", "-")}`)}
            px={3}
            py={3}
            mb={2}
            transition={"all 0.1s ease-in-out"}
            borderRadius="0.2rem"
            cursor="pointer"
            backgroundColor={"#151A21"}
            _hover={{ backgroundColor: "#242c37" }}
        >
            <Flex mb={1} alignItems="center">
                <Heading
                    fontWeight="semibold"
                    fontFamily={"body"}
                    fontSize="4xl"
                >
                    {truncate(title, 24)}
                </Heading>
                <Text
                    mx={"auto"}
                    mr={"0"}
                    fontFamily="body"
                    // color={"#b2bdcd"}
                    color={"#34D399"}
                >
                    {parseDate(dayjs(createdAt).toString())}
                </Text>
            </Flex>
            <Text color={"#5d7290"} fontSize={"large"} fontFamily="body">
                {truncate(body, 170)}
            </Text>
        </Box>
    );
};
