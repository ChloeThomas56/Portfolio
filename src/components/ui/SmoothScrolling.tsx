'use client';

import { ReactLenis, useLenis } from 'lenis/react';
import { useRef } from 'react';

export default function SmoothScrolling({ children }: { children: React.ReactNode}) {
    const lenisRef = useRef(null);

    return (
        <ReactLenis root options={{ lerp: 0.1, duration: 1.5 }} ref={lenisRef}>
            {children}
        </ReactLenis>
    );
}

export function useSmoothScrollingControl() {
    const lenis = useLenis();
    return lenis;
}