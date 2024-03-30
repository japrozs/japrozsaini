import React from "react";
import matter from "gray-matter";
import Head from "next/head";

interface HomeProps {
    data: string[];
}

const Home: React.FC<HomeProps> = (props) => {
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
                <title>japroz saini</title>
            </Head>
            <nav className="navbar">
                <p className="navbar-heading">Navigation</p>
                <div className="navbar-path">
                    <span>~/</span>
                    <a href="/">Home</a>
                </div>
            </nav>
            <p className="description">
                I build cool stuff ;{")"}
                <br />
                <span
                    style={{
                        color: "lightslategray",
                    }}
                >
                    ਪੱਕੇ ਢੀਠ
                </span>
            </p>
            <table
                style={{
                    margin: "40px 0px",
                    width: "100%",
                    maxWidth: "40rem",
                }}
            >
                <thead>
                    <tr>
                        <th colSpan={2}>Personal information</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Name</td>
                        <td>Japroz Singh Saini</td>
                    </tr>
                    <tr>
                        <td>Education</td>
                        <td>
                            <p>
                                BS Computer Science{", "}
                                <a
                                    className="no-menlo"
                                    href={"https://gsu.edu"}
                                    target="_blank"
                                >
                                    Georgia State University
                                </a>
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td>Email</td>
                        <td>
                            <a href="mailto:japrozsaini@outlook.com">
                                japrozsaini@outlook.com
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>Github</td>
                        <td>
                            <a
                                href="https://github.com/japrozs"
                                target="_blank"
                            >
                                japrozs
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>Linkedin</td>
                        <td>
                            <a
                                href="https://linkedin.com/in/japrozs"
                                target="_blank"
                            >
                                japrozs
                            </a>
                        </td>
                    </tr>
                </tbody>
            </table>
            <p className="navbar-heading">Notes</p>
            <table
                style={{
                    margin: "10px 0px",
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
                                        // .replaceAll("/", "-")
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
    console.log(files);

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

export default Home;
