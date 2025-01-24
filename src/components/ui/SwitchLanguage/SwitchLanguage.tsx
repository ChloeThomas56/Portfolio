import { useRouter } from 'next/router';
import clsx from 'clsx';

export default function SwitchLanguage({ onClick }: { onClick?: () => void}) {
    const router = useRouter();

    const switchLanguage = (locale: string) => {
        if (onClick) onClick();        
        router.push(router.asPath, router.asPath, { locale, scroll: false });
    }

    return (
        <div className="language-switch">
            <button 
                className={clsx("language-switch__button", {"language-switch__button--active": router.locale === 'fr'})}
                onClick={() => switchLanguage('fr')}
                disabled={router.locale === 'fr'}>
                FR
            </button>
            <button 
                className={clsx("language-switch__button", {"language-switch__button--active": router.locale === 'en'})}
                onClick={() => switchLanguage('en')}
                disabled={router.locale === 'en'}>
                EN
            </button>
        </div>
    )
}