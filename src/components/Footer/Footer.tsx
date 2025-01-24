import { useTranslation } from '@/context/TranslationContext';
import Link from 'next/link';

export default function Footer() {
    const { t } = useTranslation();

    return (
        <div role="contentinfo" className="footer">
            <span>
                © 2024
            </span>
            <Link href="/legal" className="nav-item" scroll={false}>
                {t.common.link_legal}
            </Link>
        </div>
    );
}