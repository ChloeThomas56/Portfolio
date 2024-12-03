'use client';

import { ReactLenis, useLenis } from 'lenis/react';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function SmoothScrolling({ children }: { children: React.ReactNode }) {
    const pathname  = usePathname();
    const lenis     = useLenis();

    useEffect(() => {
        lenis?.scrollTo(0, { immediate: true });
    }, [pathname, lenis]);

    return (
        <ReactLenis root options={{ lerp: 0.1, duration: 1.25 }}>
            {children}
        </ReactLenis>
    );
}

export function useSmoothScrollingControl() {
    const lenis = useLenis();
    return lenis;
}