import { createContext, useContext, useState, useMemo } from 'react';
import { useRouter } from 'next/router';
import fr from '../../locales/fr';
import en from '../../locales/en';

const translations = { fr, en };

const TranslationContext = createContext<Record<string, any> | undefined>(undefined);

export const TranslationProvider = ({ children }: { children: React.ReactNode }) => {
    const { locale } = useRouter();
    const [ visibleLocale, setVisibleLocale ] = useState(locale);
    const t = useMemo(() => {
        return translations[visibleLocale as keyof typeof translations] || fr;
    }, [visibleLocale]);
  
    return (
        <TranslationContext.Provider value={{t, setVisibleLocale}}>
            {children}
        </TranslationContext.Provider>
    );
};
  
export const useTranslation = () => {
    const context = useContext(TranslationContext);
    if (!context)
        throw new Error('useTranslation doit être utilisé dans un TranslationProvider');
    return context;
};