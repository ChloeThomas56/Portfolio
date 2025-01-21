import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html suppressHydrationWarning>
            <Head>
                <meta name="description" content="Développeuse web freelance passionnée par la création et le design. Je conçois des sites et applications web sur-mesure." />
                <meta name="keywords" content="développement web, front-end, création de sites, react" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
