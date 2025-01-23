import { useRouter } from 'next/router';
import clsx from 'clsx';

export default function SwitchLanguage() {
    const router = useRouter();

    const switchLanguage = (locale: string) => {
        router.push(router.asPath, router.asPath, { locale });
    }

    return (
        <div className="language-switch">
            <button 
                className={clsx("language-switch__button", {"language-switch__button--active": router.locale === 'fr'})}
                onClick={() => switchLanguage('fr')}>
                FR
            </button>
            <button 
                className={clsx("language-switch__button", {"language-switch__button--active": router.locale === 'en'})}
                onClick={() => switchLanguage('en')}>
                EN
            </button>
        </div>
    )
}