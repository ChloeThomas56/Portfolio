import Link, { LinkProps } from 'next/link';
import { MdArrowOutward } from 'react-icons/md';

interface CustomLinkProps extends LinkProps, Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
}

export function CustomLink({ children, className, onClick, ...props }: CustomLinkProps) {
    return (
        <Link 
            {...props}
            className={`link hover-underline ${className || ''}`} 
            onClick={onClick}
            scroll={false}>
            <MdArrowOutward />
            {children}
        </Link>
    );
}