import { createContext, useContext, useState } from 'react';

const PageTransitionContext = createContext({
    isTransitionCompleted: false,
    setIsTransitionCompleted: (completed: boolean) => {}
});

export const PageTransitionProvider = ({ children }: { children: React.ReactNode }) => {
    const [isTransitionCompleted, setIsTransitionCompleted]   = useState(false);

    return (
        <PageTransitionContext.Provider value={{ isTransitionCompleted, setIsTransitionCompleted }}>
            {children}
        </PageTransitionContext.Provider>
    )
}

export const usePageTransition = () => useContext(PageTransitionContext);