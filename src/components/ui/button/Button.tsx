import { useCursor } from '../cursor/CursorContext';
import { useEffect } from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    className: string;
    onClick?: () => void;
}

export function Button({ children, onClick, className, ...rest }: ButtonProps) {
    const { setIsLinkOrButtonHovered } = useCursor();

    useEffect(() => {
        return () => {
            setIsLinkOrButtonHovered(false);
        };
    }, [setIsLinkOrButtonHovered]);
    
    return (
        <button 
            className={className} 
            onClick={onClick} {...rest}
            onMouseEnter={() => setIsLinkOrButtonHovered(true)}
            onMouseLeave={() => setIsLinkOrButtonHovered(false)}>
            {children}
        </button>
    );
}
