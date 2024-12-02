interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    className: string;
    onClick?: () => void;
}

export function Button({ children, onClick, className, ...rest }: ButtonProps) {   
    return (
        <button 
            className={className} 
            onClick={onClick} {...rest}>
            {children}
        </button>
    );
}
