import '@/styles/globals.scss';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { inter, bricolage_grotesque } from '@/lib/font';
import { TranslationProvider } from '@/context/TranslationContext';
import { FirstLoadProvider } from '@/context/FirstLoadContext';
import SmoothScrolling from '@/components/ui/SmoothScrolling/SmoothScrolling';
import Header from '@/components/Header/Header';
import { AnimatePresence } from 'framer-motion';
import PageTransition from '@/components/ui/animations/PageTransition/PageTransition';
import Shapes from '@/components/ui/animations/Shapes/Shapes';
import { SpeedInsights } from '@vercel/speed-insights/next';

export default function App({ Component, pageProps, router }: AppProps) {
    const description = router.locale === 'en' ? 
        "I am a web developer passionate about front-end development, building custom websites and web applications" :
        "Développeuse web passionnée par le front-end, je conçois des sites et applications web sur mesure"

    const keywords = router.locale === 'en' ?
        "web development, front-end, react, website creation" :
        "développement web, front-end, création de sites, react"

    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, interactive-widget=resizes-content" />
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
            </Head>
            <div className={`${inter.className} ${bricolage_grotesque.variable}`}>
                <TranslationProvider>
                    <FirstLoadProvider>
                        <SmoothScrolling>
                            <Header />
                            <main>
                                <AnimatePresence mode='wait'>
                                    <PageTransition key={`${router.asPath}-${router.locale}`}>
                                        <Component {...pageProps} />
                                    </PageTransition>
                                </AnimatePresence>
                            </main>
                            <Shapes />
                        </SmoothScrolling>
                    </FirstLoadProvider>
                </TranslationProvider>
                <SpeedInsights />
            </div>
        </>
    )
}
