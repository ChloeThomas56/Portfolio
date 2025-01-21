import '@/styles/globals.scss';
import type { AppProps } from 'next/app';
import Head from 'next/head';
//import { I18nProvider } from '../../locales';
import { inter, bricolage_grotesque } from '@/lib/font';
import SmoothScrolling from '@/components/ui/SmoothScrolling/SmoothScrolling';
import Header from '@/components/Header/Header';
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
                </SmoothScrolling>
                <SpeedInsights />
            </div>
        </>
    )
}
