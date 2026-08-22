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
		},
	);
	return (
		<>
			<Head>
				<title>japroz singh</title>
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
					margin: "30px 0px",
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
					<tr>
						<td>Resume</td>
						<td>
							<a
								href="/files/japroz-singh-resume.pdf"
								target="_blank"
							>
								japroz-singh-resume.pdf
							</a>
						</td>
					</tr>
				</tbody>
			</table>
			<table
				style={{
					margin: "0px 30px 20px 0px",
					width: "100%",
					maxWidth: "40rem",
				}}
			>
				<thead>
					<tr>
						<th colSpan={2}>Projects</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>
							<a
								href="https://github.com/japrozs/senna"
								target="_blank"
							>
								senna
							</a>
						</td>
						<td>Spotlight search for all your apps</td>
					</tr>
					<tr>
						<td>
							<a
								href="https://github.com/japrozs/vettel"
								target="_blank"
							>
								vettel
							</a>
						</td>
						<td>Minimalist key-value store</td>
					</tr>
					<tr>
						<td>
							<a
								href="https://github.com/japrozs/rum"
								target="_blank"
							>
								rum
							</a>
						</td>
						<td>Full spec-compliant JVM Class file parser</td>
					</tr>
					<tr>
						<td>
							<a
								href="https://github.com/japrozs/attic"
								target="_blank"
							>
								attic
							</a>
						</td>
						<td>Kanban board chrome extension</td>
					</tr>
					<tr>
						<td>
							<a
								href="https://github.com/japrozs/dino"
								target="_blank"
							>
								dino
							</a>
						</td>
						<td>Full-stack notes organising tool</td>
					</tr>
					<tr>
						<td>
							<a
								href="https://github.com/japrozs/gecko"
								target="_blank"
							>
								gecko
							</a>
						</td>
						<td>Machine learning stuff</td>
					</tr>
				</tbody>
			</table>
			<p className="navbar-heading">Notes</p>
			<table
				style={{
					margin: "5px 0px",
					width: "100%",
					maxWidth: "40rem",
				}}
				className="notes-table"
			>
				<thead>
					<tr>
						<th>Date</th>
						<th>Title</th>
					</tr>
				</thead>
				<tbody>
					{items.slice(0, 5).map((blog, i) => (
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
			<a href="/notes" className="no-menlo all-notes-link">
				Read all {items.length} notes &#8594;
			</a>
			<p className="footer">
				© Copyright {new Date().getFullYear()}, Japroz Singh Saini.{" "}
				<a
					style={{
						fontSize: "0.93rem !important",
					}}
					href="https://jp.statuspage.io/"
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
