import { Box, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import Head from "next/head";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import ChakraUIRenderer from "chakra-ui-markdown-renderer";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import atomOneDark from "react-syntax-highlighter/dist/cjs/styles/prism/material-dark";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import Navbar from "../../components/Navbar";

dayjs.extend(relativeTime);
const parseDate = (date) => {
    let str = "";
    date = date.split(" ");
    for (let i = 0; i < 3; i++) {
        str += date[i] + " ";
    }

    return str;
};

const CodeBlock = ({ children, ...rest }) => {
    return (
        <SyntaxHighlighter language={rest.className} style={atomOneDark}>
            {children}
        </SyntaxHighlighter>
    );
};

const theme = {
    code: CodeBlock,
};

const Blog = ({ content, data }) => {
    const frontmatter = data;
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
        <Box
            backgroundColor={"#0B0E11"}
            maxWidth="100vw"
            px={"2vw"}
            width={width}
            mx={"auto"}
        >
            <Navbar />
            <Box maxWidth="100vw" py={"2vw"} width={width} mx={"auto"}>
                <Head>
                    <title>{frontmatter.title} • Japroz Saini</title>
                </Head>
                <Text
                    fontWeight="semibold"
                    fontFamily={"body"}
                    fontSize={fontSize}
                >
                    {frontmatter.title}
                </Text>
                <Text
                    mx={"auto"}
                    mb={5}
                    mr={"0"}
                    fontFamily="body"
                    // color={"#b2bdcd"}
                    color={"#34D399"}
                >
                    {parseDate(dayjs(frontmatter.date).toString())}
                </Text>
                <Box fontFamily={"body"}>
                    {/* <ReactMarkdown>{content}</ReactMarkdown> */}
                    <ReactMarkdown components={ChakraUIRenderer(theme)}>
                        {content}
                    </ReactMarkdown>
                </Box>
            </Box>
        </Box>
    );
};

Blog.getInitialProps = async (context) => {
    const { id } = context.query;

    const content = await import(`../../content/${id}.md`);
    const data = matter(content.default);

    return { ...data };
};

export default Blog;
