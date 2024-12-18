import { ReactLenis, useLenis } from 'lenis/react';

export default function SmoothScrolling({ children }: { children: React.ReactNode }) {

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