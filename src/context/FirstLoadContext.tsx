import { createContext, useContext, useRef, useEffect } from 'react';

const FirstLoadContext = createContext<{ firstLoad: boolean } | undefined>(undefined);

export const FirstLoadProvider = ({ children }: { children: React.ReactNode }) => {
    const firstLoadRef = useRef(true);

    useEffect(() => {
        firstLoadRef.current = false;
    }, []);

    return (
        <FirstLoadContext.Provider value={{ firstLoad: firstLoadRef.current }}>
            {children}
        </FirstLoadContext.Provider>
    );
}

export const useFirstLoad = () => {
    const context = useContext(FirstLoadContext);
    if (!context)
        throw new Error('useFirstLoad doit être utilisé dans un FirstLoadProvider');
    return context;
}
