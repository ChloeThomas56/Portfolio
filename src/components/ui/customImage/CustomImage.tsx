import Image from "next/image";
import { useState } from "react";

interface ImageProps {
    src: string;
    width: number;
    height: number;
    className: string;
    alt: string;
}

export function CustomImage({ src, width, height, className, alt }: ImageProps) {
    const [isLoaded, setIsloaded] = useState(false);
    
    return (
        <Image 
            src={src}
            width={width}
            height={height}
            className={className}
            alt={alt}
            style={{opacity: isLoaded ? 1 : 0}}
            onLoad={() => setIsloaded(true)}
        />
    );
}
