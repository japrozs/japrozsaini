import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <link
                    href="https://fonts.cdnfonts.com/css/noe-display"
                    rel="stylesheet"
                ></link>
                <link
                    href="https://fonts.cdnfonts.com/css/menlo"
                    rel="stylesheet"
                ></link>
                <link
                    href="https://rsms.me/inter/inter.css"
                    rel="stylesheet"
                ></link>
                <link
                    href="https://fonts.cdnfonts.com/css/graphik"
                    rel="stylesheet"
                />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap"
                    rel="stylesheet"
                ></link>
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
