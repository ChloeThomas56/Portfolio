import { useTranslation } from '@/context/TranslationContext';
import Link from 'next/link';

export default function Footer() {
    const { t } = useTranslation();

    return (
        <div role="contentinfo" className="footer">
            <span>
                © 2025
            </span>
            <Link href="/legal" className="nav-item hover-underline" scroll={false}>
                {t.common.link_legal}
            </Link>
        </div>
    );
}