import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <Html>
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
                    <script
                        defer
                        data-domain="japrozsaini.me"
                        src="https://plausible.io/js/plausible.js"
                    ></script>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
