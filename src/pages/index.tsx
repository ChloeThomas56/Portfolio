import Head from 'next/head';
import { usePageTransition } from '@/components/ui/animations/PageTransition/PageTransitionContext';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import PageTransition from '@/components/ui/animations/PageTransition/PageTransition';
import Hero from '@/components/Hero/Hero';
import SelectedProjects from '@/components/projects/SelectedProjects';

export default function Home() {
    const { isTransitionCompleted } = usePageTransition();

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.fromTo(
            '#hero-overlay',
            { opacity: 0 },
            {
                opacity: 0.4,
                scrollTrigger: {
                    trigger: '#projects',
                    start: "top bottom",
                    end: "top+=200 bottom",
                    toggleActions: "play none none reverse",
                    scrub: true,
                },
            }
        );

        if (isTransitionCompleted)
            ScrollTrigger.refresh();

    }, [isTransitionCompleted]);

    return (
        <>
            <Head>
                <title>Chloé Thomas</title>
            </Head>
            <PageTransition>
                <Hero />
                <SelectedProjects />
            </PageTransition>
        </>
    );
}
