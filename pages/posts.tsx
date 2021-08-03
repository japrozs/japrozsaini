import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { useMediaQuery } from "react-responsive";
import Navbar from "../components/Navbar";
import Head from "next/head";
import { PostCard } from "../components/PostCard";

interface PostProps {}

const Posts: React.FC<PostProps> = () => {
    const isTabletOrMobile = useMediaQuery({ query: "(max-width: 550px)" });
    let fontSize = "";
    let width = "";

    if (isTabletOrMobile) {
        fontSize = "40px";
        width = "400px";
    } else {
        fontSize = "60px";
        width = "700px";
    }
    return (
        <Box maxWidth="100vw" px={"2vw"} width={width} mx={"auto"}>
            <Head>
                <title>All Posts • Japroz Saini</title>
            </Head>
            <Navbar />
            <Text fontSize={fontSize}>Posts</Text>
            <PostCard
                title="new post"
                body="this is a very nice post"
                createdAt={"2021-07-04 01:58:57.643331"}
            />
        </Box>
    );
};

export default Posts;
