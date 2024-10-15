'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import { useCursor } from '../cursor/CursorContext';

interface LinkProps {
    children: React.ReactNode;
    href: string;
    newTab?: boolean;
    className?: string;
    onClick?: () => void;
}

export function CustomLink({ children, href, newTab, className, onClick }: LinkProps) {
    const { setIsLinkOrButtonHovered } = useCursor();

    useEffect(() => {
        return () => {
            setIsLinkOrButtonHovered(false);
        };
    }, [setIsLinkOrButtonHovered]);
    
    return (
        <Link 
            href={href}
            target={newTab ? "_blank" : undefined}
            rel={newTab ? "noopener noreferrer" : undefined}
            className={className}
            onClick={onClick}
            onMouseEnter={() => setIsLinkOrButtonHovered(true)}
            onMouseLeave={() => setIsLinkOrButtonHovered(false)}>
            {children}
        </Link>
    );
}
