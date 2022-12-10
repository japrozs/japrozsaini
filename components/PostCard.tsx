import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { useRouter } from "next/router";

dayjs.extend(relativeTime);
const parseDate = (date) => {
    var d = (new Date(date) + "").split(" ");

    return [d[1], parseInt(d[2]) + ",", , d[3]].join(" ");
};

const truncate = (str: string, limit: number) => {
    if (str.length > limit) {
        return str.substring(0, limit) + "...";
    } else {
        return str;
    }
};

interface PostCardProps {
    title: string;
    body: string;
    slug: string;
    createdAt: string;
}

export const PostCard: React.FC<PostCardProps> = ({
    title,
    body,
    createdAt,
    slug,
}) => {
    const router = useRouter();
    return (
        <Box
            onClick={() => router.push(`post/${slug}`)}
            p={4}
            mb={2}
            transition={"all 0.1s ease-in-out"}
            borderRadius="0.2rem"
            cursor="pointer"
            backgroundColor={"#151A21"}
            _hover={{ opacity: 0.85 }}
        >
            <Flex mb={1} alignItems="center">
                <Heading
                    // fontWeight="semibold"
                    fontFamily={"Menlo"}
                    fontSize="3xl"
                    className={"truncate"}
                >
                    {truncate(title, 24)}
                </Heading>
                <Text
                    mx={"auto"}
                    mr={"0"}
                    fontWeight={600}
                    fontFamily="body"
                    className="truncate"
                    // color={"34D399"}
                    color={"#4299e1"}
                >
                    {parseDate(createdAt.replace(/-/g, " "))}
                </Text>
            </Flex>
            <Text color={"#5d7290"} fontSize={"large"} fontFamily="body">
                {truncate(body, 170)}
            </Text>
        </Box>
    );
};
