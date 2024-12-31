import '@/styles/globals.scss';
import { inter } from '@/lib/font';
import type { AppProps } from 'next/app';
import Header from '@/components/Header/Header';
import { Cursor } from '@/components/ui/Cursor/Cursor';
import SmoothScrolling from '@/components/ui/SmoothScrolling/SmoothScrolling';
import Head from 'next/head';
import Loader from '@/components/ui/animations/Loader/Loader';
import { LoaderProvider, useLoader } from '@/components/ui/animations/Loader/LoaderContext';
import { AnimatePresence } from 'framer-motion';
import Shapes from '@/components/ui/animations/Shapes/Shapes';

export default function App({ Component, pageProps, router }: AppProps) {

    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, interactive-widget=resizes-content" />
            </Head>
            <div className={inter.className}>
                <SmoothScrolling>
                    <LoaderProvider>
                        <Loader />
                        <Header />
                        <div className="page">
                            <AnimatePresence mode='wait'>
                                <Component key={router.asPath} {...pageProps} />
                            </AnimatePresence> 
                        </div>
                        <Cursor />
                        <Shapes />
                        <div className="noise" />
                    </LoaderProvider>
                </SmoothScrolling>
            </div>
        </>
    )
}
