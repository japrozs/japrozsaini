import { NextPageContext } from "next";
import React, { LegacyRef, useEffect, useRef} from "react";
import matter from "gray-matter";
import fs from "fs";
import Markdown, { Components } from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import atomOneDark from "react-syntax-highlighter/dist/cjs/styles/prism/material-dark";
import Head from "next/head";
import remarkGfm from "remark-gfm";
import { remark } from "remark";
import html from "remark-html";

interface PostProps {}

interface CommentsProps {}

const Comments: React.FC<CommentsProps> = ({}) => {
    const commentBox = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Check if the script has already been added to avoid duplication
        if (!document.querySelector('script[src="https://utteranc.es/client.js"]')) {
            let scriptEl = document.createElement("script");
            scriptEl.setAttribute("src", "https://utteranc.es/client.js");
            scriptEl.setAttribute("crossorigin", "anonymous");
            scriptEl.setAttribute("async", "true");
            scriptEl.setAttribute("label", "Comment... 🚀 😃 ");
            scriptEl.setAttribute("repo", "japrozs/japrozsaini");
            scriptEl.setAttribute("issue-term", "title");
            scriptEl.setAttribute("theme", "github-light");
            commentBox.current && commentBox.current.appendChild(scriptEl);
        }
    }, []);

    return (
        <div id="comments" style={{borderTop : '1px dashed grey', marginTop : '30px', paddingTop : '20px'}}>
            <p className="navbar-heading">Comments</p>
            <div ref={commentBox}></div>
        </div>
    );
};

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
        const processedContent = await remark().use(html).process(content);
        const contentHtml = processedContent.toString();

        return {
            props: {
                frontmatter,
                contentHtml,
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

const theme: Partial<Components> | null | undefined = {
    code: code as any,
    br: () => <p>hi there</p>,
};

const Post = ({
    frontmatter,
    content,
    contentHtml,
}: {
    frontmatter: {
        slug: string;
        title: string;
        date: string;
        description: string;
    };
    content: string;
    contentHtml: string;
}) => {
    // console.log(frontmatter, content);
    console.log(contentHtml);
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
            {/* <div
                style={{
                    width: "100%",
                    maxWidth: "40rem",
                }}
                className="content"
            >
                <Markdown components={theme}>{content}</Markdown>
            </div> */}
            <div
                style={{
                    width: "100%",
                    maxWidth: "40rem",
                }}
                className="content"
                dangerouslySetInnerHTML={{ __html: contentHtml }}
            ></div>
            <div style={{
                    width: "100%",
                    maxWidth: "40rem",
                }}>
            <Comments/>
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
