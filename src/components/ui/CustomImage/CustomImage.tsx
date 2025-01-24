import { useState } from 'react';
import Image, { ImageProps } from 'next/image';

export default function CustomImage({...props}: ImageProps) {
    const [isLoaded, setLoaded] = useState(false);

    return (
        <div className="img-container">
            <Image
                {...props}
                style={{opacity: isLoaded ? 1 : 0}}
                onLoad={() => setLoaded(true)}
            />
        </div>
    )
}