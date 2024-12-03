'use client';

import { createContext, useContext, useState } from 'react';

const LoaderContext = createContext({
    isLoading: false,
    setIsLoading: (loading: boolean) => {}
});

export const LoaderProvider = ({ children }: { children: React.ReactNode }) => {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <LoaderContext.Provider value={{ isLoading, setIsLoading }}>
            {children}
        </LoaderContext.Provider>
    )
}

export const useLoader = () => useContext(LoaderContext);