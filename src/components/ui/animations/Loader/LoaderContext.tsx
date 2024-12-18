import { createContext, useContext, useState } from 'react';

const LoaderContext = createContext({
    isLoading: false,
    isLoadingCompleted: false,
    setIsLoading: (loading: boolean) => {},
    setIsLoadingCompleted: (completed: boolean) => {}
});

export const LoaderProvider = ({ children }: { children: React.ReactNode }) => {
    const [isLoading, setIsLoading]                     = useState(true);
    const [isLoadingCompleted, setIsLoadingCompleted]   = useState(false);

    return (
        <LoaderContext.Provider value={{ isLoading, setIsLoading, isLoadingCompleted, setIsLoadingCompleted }}>
            {children}
        </LoaderContext.Provider>
    )
}

export const useLoader = () => useContext(LoaderContext);