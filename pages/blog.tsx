import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { useMediaQuery } from "react-responsive";
import Navbar from "../components/Navbar";
import matter from "gray-matter";
import Head from "next/head";
import { PostCard } from "../components/PostCard";

interface PostProps {
    data: Array<any>;
}

const Posts: React.FC<PostProps> = (props) => {
    const isTabletOrMobile = useMediaQuery({ query: "(max-width: 550px)" });
    let fontSize = "";
    let width = "";

    const RealData = props.data.map((blog) => matter(blog));
    var items = RealData.map((listItem) => listItem.data);
    items = items.sort(
        (a: { [key: string]: any }, b: { [key: string]: any }) => {
            const date_a = new Date(a.date.replace(/-/g, " ")).getTime();
            const date_b = new Date(b.date.replace(/-/g, " ")).getTime();
            if (date_a < date_b) {
                return 1;
            }
            if (date_a > date_b) {
                return -1;
            }
            return 0;
        }
    );

    if (isTabletOrMobile) {
        fontSize = "40px";
        width = "400px";
    } else {
        fontSize = "60px";
        width = "850px";
    }
    return (
        <Box maxWidth="100vw" px={"4vw"} width={width} mx={"auto"}>
            <Head>
                <title>All Posts • Japroz Saini</title>
            </Head>
            <Navbar />
            <Text fontFamily={"Menlo"} fontWeight={"700"} fontSize={fontSize}>
                Posts
            </Text>
            <Box mt={3} />
            {items.map((blog, i) => (
                <PostCard
                    key={i}
                    slug={blog.slug}
                    title={blog.title}
                    body={blog.description}
                    createdAt={blog.date}
                />
            ))}
        </Box>
    );
};

export async function getStaticProps() {
    const fs = require("fs");

    const files = fs.readdirSync(`${process.cwd()}/content`, "utf-8");

    const blogs = files.filter((fn) => fn.endsWith(".md"));

    const data = blogs.map((blog) => {
        const path = `${process.cwd()}/content/${blog}`;
        const rawContent = fs.readFileSync(path, {
            encoding: "utf-8",
        });

        return rawContent;
    });

    return {
        props: {
            data: data,
        },
    };
}

export default Posts;
