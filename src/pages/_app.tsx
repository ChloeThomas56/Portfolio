import '@/styles/globals.scss';
import { inter, bricolage_grotesque } from '@/lib/font';
import type { AppProps } from 'next/app';
import Header from '@/components/Header/Header';
import { Cursor } from '@/components/ui/Cursor/Cursor';
import SmoothScrolling from '@/components/ui/SmoothScrolling/SmoothScrolling';
import Head from 'next/head';
import { AnimatePresence } from 'framer-motion';
import Shapes from '@/components/ui/animations/Shapes/Shapes';
import { SpeedInsights } from '@vercel/speed-insights/next';

export default function App({ Component, pageProps, router }: AppProps) {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, interactive-widget=resizes-content" />
            </Head>
            <div className={`${inter.className} ${bricolage_grotesque.variable}`}>
                <SmoothScrolling>
                    <Header />
                    <main>
                        <AnimatePresence mode='wait'>
                            <Component key={router.asPath} {...pageProps} />
                        </AnimatePresence> 
                    </main>
                    <Shapes />
                    <Cursor />
                </SmoothScrolling>
                <SpeedInsights />
            </div>
        </>
    )
}
