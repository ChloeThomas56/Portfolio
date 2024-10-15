'use client';

import { createContext, useContext, useState } from 'react';

const CursorContext = createContext({
    isLinkOrButtonHovered: false,
    setIsLinkOrButtonHovered: (hovered: boolean) => {},
    isProjectHovered: false,
    setIsProjectHovered: (hovered: boolean) => {},
});

export const CursorProvider = ({ children }: { children: React.ReactNode }) => {
    const [isLinkOrButtonHovered, setIsLinkOrButtonHovered] = useState(false);
    const [isProjectHovered, setIsProjectHovered] = useState(false);

    return (
        <CursorContext.Provider value={{ isLinkOrButtonHovered, setIsLinkOrButtonHovered, isProjectHovered, setIsProjectHovered }}>
            {children}
        </CursorContext.Provider>
    );
}

export const useCursor = () => useContext(CursorContext);