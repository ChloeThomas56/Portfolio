'use client';

import styles from './cursor.module.scss';
import { useEffect, useRef } from 'react';
import { useCursor } from './CursorContext';
import gsap from 'gsap';
import clsx from 'clsx';
import useWindowSize from '@/hooks/useWindowSize';

export function Cursor() {
    const { isLinkOrButtonHovered, isProjectHovered } = useCursor();
    const { isDesktop } = useWindowSize();

    const cursorInner = useRef<HTMLDivElement | null>(null);
    const cursorOuter = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!cursorInner.current || !cursorOuter.current || !isDesktop) return;

        let xMoveInner = gsap.quickTo(cursorInner.current, "left", { duration: 0.1, ease: "power3" });
        let yMoveInner = gsap.quickTo(cursorInner.current, "top", { duration: 0.1, ease: "power3" });

        let xMoveOuter = gsap.quickTo(cursorOuter.current, "left", { duration: 0.1, ease: "power3" });
        let yMoveOuter = gsap.quickTo(cursorOuter.current, "top", { duration: 0.1, ease: "power3" });

        const handleMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            xMoveInner(clientX);
            yMoveInner(clientY);
            xMoveOuter(clientX);
            yMoveOuter(clientY);
        };

        // Positionne les curseurs à la position actuelle de la souris lors du chargement
        const handleInitialPosition = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            gsap.set(cursorInner.current, { left: clientX, top: clientY });
            gsap.set(cursorOuter.current, { left: clientX, top: clientY });
        };

        // window mouse enter and leave
        const handleMouseLeave = () => {
            gsap.to(cursorInner.current, { opacity: 0, duration: 0.1 });
            gsap.to(cursorOuter.current, { opacity: 0, duration: 0.1 });
        };
        const handleMouseEnter = () => {
            gsap.to(cursorInner.current, { opacity: 1, duration: 0.1 });
            gsap.to(cursorOuter.current, { opacity: 1, duration: 0.1 });
        };

        window.addEventListener('mousemove', handleInitialPosition, { once: true });
        window.addEventListener('mousemove', handleMouseMove);
        document.body.addEventListener('mouseleave', handleMouseLeave);
        document.body.addEventListener('mouseenter', handleMouseEnter);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            document.body.removeEventListener('mouseleave', handleMouseLeave);
            document.body.removeEventListener('mouseenter', handleMouseEnter);
        };
    }, [isDesktop]);

    return (
        <>
            <div
                ref={cursorInner} 
                className={`${styles['cursor']} ${styles['cursor-inner']}`}
            />
            <div
                ref={cursorOuter} 
                className={clsx(styles['cursor'], styles['cursor-outer'], {[styles['link-cursor']]: isLinkOrButtonHovered}, {[styles['projects-cursor']]: isProjectHovered})}
            >
                {isProjectHovered && <span>Voir</span>}
            </div>
        </>
    );
}
