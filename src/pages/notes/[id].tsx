import { NextPageContext } from "next";
import React from "react";
import matter from "gray-matter";
import fs from "fs";
import Markdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import atomOneDark from "react-syntax-highlighter/dist/cjs/styles/prism/material-dark";
import Head from "next/head";

interface PostProps {}

export async function getStaticPaths() {
    try {
        const files = fs.readdirSync(`${process.cwd()}/content/`);

        const paths = files.map((fileName: string) => ({
            params: {
                id: fileName.replace(".md", ""),
            },
        }));

        return {
            paths,
            fallback: "blocking",
        };
    } catch (error) {
        console.error("error :: ", process.cwd(), error);

        return {
            paths: [],
            fallback: false,
        };
    }
}

export async function getStaticProps({
    params: { id },
}: {
    params: { id: any };
}) {
    try {
        console.log("slug :: ", id);
        const fileName = fs.readFileSync(
            `${process.cwd()}/content/${id}.md`,
            "utf-8"
        );
        const { data: frontmatter, content } = matter(fileName);

        return {
            props: {
                frontmatter,
                content,
            },
        };
    } catch (error) {
        console.error(error);

        return {
            props: {},
        };
    }
}

// @ts-ignore
function code({ children, ...rest }) {
    console.log(rest.className?.replace("language-", ""));
    if (rest.className?.includes("language-")) {
        return (
            <SyntaxHighlighter
                language={rest.className?.replace("language-", "")}
                style={atomOneDark}
            >
                {children}
            </SyntaxHighlighter>
        );
    } else {
        return <span className="inline-code">{children}</span>;
    }
}

const theme = {
    code: code as any,
};

const Post = ({
    frontmatter,
    content,
}: {
    frontmatter: {
        slug: string;
        title: string;
        date: string;
        description: string;
    };
    content: string;
}) => {
    console.log(frontmatter, content);
    return (
        <>
            <Head>
                <title>{frontmatter.title.toLocaleLowerCase()}</title>
            </Head>
            <nav className="navbar">
                <p className="navbar-heading">Navigation</p>
                <div className="navbar-path">
                    <span>~/</span>
                    <a href="/">Home</a>
                    <span>/</span>
                    <a href="/notes">Notes</a>
                    <span>/</span>
                    <span className="no-gray">{frontmatter.title}</span>
                </div>
            </nav>
            <p
                style={{
                    marginTop: "5vh",
                    fontSize: "1.1rem",
                    marginBottom: "10px",
                }}
                className="navbar-heading"
            >
                {frontmatter.title}
            </p>
            <div
                style={{
                    width: "100%",
                    maxWidth: "40rem",
                }}
                className="content"
            >
                <Markdown components={theme}>{content}</Markdown>
            </div>
            <p className="footer">
                © Copyright {new Date().getFullYear()}, Japroz Singh Saini.{" "}
                <a
                    style={{
                        fontSize: "0.93rem !important",
                    }}
                    href="https://japrozsaini.statuspage.io/"
                    target="_blank"
                    className="no-menlo"
                >
                    Status
                </a>
            </p>
        </>
    );
};

export default Post;
