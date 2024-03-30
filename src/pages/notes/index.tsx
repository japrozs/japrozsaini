import React from "react";
import matter from "gray-matter";
import Head from "next/head";

interface NotesProps {
    data: string[];
}

const Notes: React.FC<NotesProps> = (props) => {
    const data = props.data.map((blog: string) => matter(blog));
    var items = data.map((item) => item.data);
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
    return (
        <>
            <Head>
                <title>notes</title>
            </Head>
            <nav className="navbar">
                <p className="navbar-heading">Navigation</p>
                <div className="navbar-path">
                    <span>~/</span>
                    <a href="/">Home</a>
                    <span>/</span>
                    <span className="no-gray">Notes</span>
                </div>
            </nav>

            <table
                style={{
                    margin: "30px 0px",
                    width: "100%",
                    maxWidth: "40rem",
                }}
            >
                <thead>
                    {/* <th colSpan={3}>Personal information</th> */}
                    <tr>
                        <th>Date</th>
                        <th>Title</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((blog, i) => (
                        <tr key={i}>
                            <td>
                                <p
                                    style={{
                                        whiteSpace: "nowrap",
                                    }}
                                >
                                    {
                                        new Date(blog.date)
                                            .toISOString()
                                            .split("T")[0]
                                        // .toLocaleDateString("en-us", {
                                        //     year: "numeric",
                                        //     month: "2-digit",
                                        //     day: "2-digit",
                                        // })
                                        //.replaceAll("/", "-")
                                    }
                                </p>
                            </td>
                            <td>
                                <a
                                    href={`/notes/${blog.slug}`}
                                    className="no-menlo wrap"
                                >
                                    {blog.title}
                                </a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
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

export async function getStaticProps() {
    const fs = require("fs");

    const files = fs.readdirSync(`${process.cwd()}/content`, "utf-8");

    const blogs = files.filter((fn: string) => fn.endsWith(".md"));

    const data = blogs.map((blog: string) => {
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

export default Notes;
