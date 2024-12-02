'use client';

import styles from './home.module.scss';
import Hero from '@/components/hero/Hero';
import SelectedProjects from '@/components/projects/selectedProjects/SelectedProjects';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';
import gsap from 'gsap';

export default function Page() {
    
    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.fromTo(
            '#hero-overlay',
            { 
                opacity: 0,
            },
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
    });

    return (
        <div className={`page ${styles['home']}`}>
            <Hero />
            <SelectedProjects />
        </div>
    );
}
