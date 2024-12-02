'use client';

import { createContext, useContext, useState } from 'react';

const CursorContext = createContext({
    isProjectHovered: false,
    setIsProjectHovered: (hovered: boolean) => {},
});

export const CursorProvider = ({ children }: { children: React.ReactNode }) => {
    const [isProjectHovered, setIsProjectHovered] = useState(false);

    return (
        <CursorContext.Provider value={{ isProjectHovered, setIsProjectHovered }}>
            {children}
        </CursorContext.Provider>
    );
}

export const useCursor = () => useContext(CursorContext);